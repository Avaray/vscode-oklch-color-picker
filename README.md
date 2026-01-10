# ⚙️ OKLCH Color Picker

**Visual Studio Code extension** that brings modern color picker support for
[oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch)
and
[oklab()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklab)
CSS color functions across your
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS),
[SCSS](https://sass-lang.com/), [LESS](https://lesscss.org/),
[JavaScript](https://javascript.tm/letter),
[TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/)
files.

## Why This Extension?

VSCode **doesn't natively support** color pickers for `oklch()` and `oklab()`
colors. While you get visual color squares and interactive pickers for
[hex, RGB, and HSL](https://en.wikipedia.org/wiki/Web_colors) values, modern
color formats are left without this essential tooling.

**This extension fixes that** - bringing you the same visual color picker
experience you're used to, but for modern perceptually uniform color spaces.

## What You Get

✨ **Visual Color Decorators** - See colored squares next to your `oklch()` and
`oklab()` values\
🖱️ **Interactive Color Picker** - Click color to open VSCode's native color
picker interface\
🔄 **Format Preservation** - Changes maintain your original format (oklch stays
oklch, oklab stays oklab)\
🌈 **Tailwind Compatible** - Full support for
[Tailwind CSS](https://tailwindcss.com/) config files and `@plugin` blocks\
✅ **Flexible Syntax** - Handles percentages, decimals, and alpha channels

### OKLCH (Cylindrical)

```css
.example {
  color: oklch(0.87 0.03 288.63);
  background: oklch(76% 0.177 163.223);
  border: oklch(0.6 0.1 120 / 0.5);
}
```

### OKLAB (Cartesian)

```css
.example {
  color: oklab(0.87 0.03 -0.05);
  background: oklab(76% 0.05 0.1);
  border: oklab(0.6 0.15 -0.1 / 0.8);
}
```

## Installation

1. Download
   [.vsix](https://github.com/Avaray/vscode-oklch-color-picker/releases/latest)
   file from
   [GitHub Releases](https://github.com/Avaray/vscode-oklch-color-picker/releases)
2. Open [VSCode](https://code.visualstudio.com/)
3. Go to **Extensions** → ... menu → **Install from VSIX**...

> Publishing this extension to the marketplace is not planned at this time.

## Usage

The extension activates automatically when you open mentioned files containing
`oklch()` or `oklab()` colors.

### Using the Color Picker

1. Write an oklch or oklab color in your file
2. Click on the colored square that appears
3. Use the color picker to adjust the color
4. The color value updates automatically in your file

### Example Files

**CSS/SCSS:**

```css
:root {
  --primary: oklch(0.7 0.2 250);
  --secondary: oklab(0.6 0.1 -0.15);
}
```

**JavaScript/TypeScript:**

```javascript
const colors = {
  primary: "oklch(0.87 0.03 288.63)",
  accent: "oklab(0.76 0.05 0.1)",
};
```

**Tailwind CSS:**

```css
@plugin "..." {
  primary: oklch(76% 0.177 163.223);
  secondary: oklab(0.65 0.12 -0.08);
}
```

## Known Issues & Troubleshooting

### Color decorators don't appear with Tailwind CSS IntelliSense

If you're using
[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss),
add this to your VSCode settings:

```json
{
  "editor.defaultColorDecorators": "always"
}
```

## Requirements

- VSCode version [1.50.0](https://code.visualstudio.com/updates/v1_50) or higher

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.
