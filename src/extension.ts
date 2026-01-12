import * as vscode from "vscode";
import { converter, parse } from "culori";

const toRgb = converter("rgb");

export function activate(context: vscode.ExtensionContext) {
	const registerProvider = () => {
		const config = vscode.workspace.getConfiguration("oklchColorPicker");
		const languages = config.get<string[]>("languages") || [];

		const selector: vscode.DocumentSelector = languages.map((language) => ({
			language,
		}));

		if (selector.length > 0) {
			const provider = new OklabColorProvider();
			const disposable = vscode.languages.registerColorProvider(
				selector,
				provider,
			);
			context.subscriptions.push(disposable);
			return disposable;
		}
		return null;
	};

	let providerDisposable = registerProvider();

	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration((e) => {
			if (e.affectsConfiguration("oklchColorPicker.languages")) {
				if (providerDisposable) {
					providerDisposable.dispose();
				}
				providerDisposable = registerProvider();
			}
		}),
	);
}

class OklabColorProvider implements vscode.DocumentColorProvider {
	public provideDocumentColors(
		document: vscode.TextDocument,
		token: vscode.CancellationToken,
	): vscode.ProviderResult<vscode.ColorInformation[]> {
		const text = document.getText();
		const colors: vscode.ColorInformation[] = [];

		// Regex for oklch() and oklab()
		const regex = /ok(?:lch|lab)\s*\(\s*[^)]+\s*\)/gi;
		let match;

		while ((match = regex.exec(text))) {
			const colorString = match[0];
			const range = new vscode.Range(
				document.positionAt(match.index),
				document.positionAt(match.index + colorString.length),
			);

			try {
				const parsedColor = parse(colorString);
				if (
					parsedColor &&
					(parsedColor.mode === "oklch" || parsedColor.mode === "oklab")
				) {
					const rgb = toRgb(parsedColor);
					if (
						rgb &&
						rgb.r !== undefined &&
						rgb.g !== undefined &&
						rgb.b !== undefined
					) {
						const vscodeColor = new vscode.Color(
							rgb.r,
							rgb.g,
							rgb.b,
							rgb.alpha ?? 1,
						);
						colors.push(new vscode.ColorInformation(range, vscodeColor));
					}
				}
			} catch (error) {
				// Ignore incorrect colors
			}
		}

		return colors;
	}

	public provideColorPresentations(
		color: vscode.Color,
		context: { document: vscode.TextDocument; range: vscode.Range },
		token: vscode.CancellationToken,
	): vscode.ProviderResult<vscode.ColorPresentation[]> {
		const parsedRgb = {
			mode: "rgb" as const,
			r: color.red,
			g: color.green,
			b: color.blue,
			alpha: color.alpha,
		};

		// Get the original format from the document
		const originalText = context.document.getText(context.range);
		const isOklab = originalText.trim().startsWith("oklab");

		const presentations: vscode.ColorPresentation[] = [];

		if (isOklab) {
			// Convert to oklab
			const toOklab = converter("oklab");
			const oklabColor = toOklab(parsedRgb);

			if (
				oklabColor && "l" in oklabColor && "a" in oklabColor &&
				"b" in oklabColor
			) {
				const l = oklabColor.l.toFixed(3);
				const a = oklabColor.a.toFixed(3);
				const b = oklabColor.b.toFixed(3);

				let label = "";
				if (color.alpha === 1) {
					label = `oklab(${l} ${a} ${b})`;
				} else {
					const alpha = parseFloat(color.alpha.toFixed(3));
					label = `oklab(${l} ${a} ${b} / ${alpha})`;
				}
				presentations.push(new vscode.ColorPresentation(label));
			}
		} else {
			// Convert to oklch (default)
			const toOklch = converter("oklch");
			const oklchColor = toOklch(parsedRgb);

			if (oklchColor && "l" in oklchColor && "c" in oklchColor) {
				const l = oklchColor.l.toFixed(3);
				const c = oklchColor.c.toFixed(3);
				const h = (oklchColor.h || 0).toFixed(2);

				let label = "";
				if (color.alpha === 1) {
					label = `oklch(${l} ${c} ${h})`;
				} else {
					const alpha = parseFloat(color.alpha.toFixed(3));
					label = `oklch(${l} ${c} ${h} / ${alpha})`;
				}
				presentations.push(new vscode.ColorPresentation(label));
			}
		}

		return presentations;
	}
}

export function deactivate() {}
