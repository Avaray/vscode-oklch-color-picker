# ⚙️ OKLCH Color Picker

**Visual Studio Code extension** that brings color picker support for
[oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch)
and
[oklab()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklab)
CSS color functions across your files.

## Why This Extension?

While [VSCode](https://code.visualstudio.com/) has native support for `oklch()`
and `oklab()`, this support is primarily focused on CSS files. This extension
extends that support to [JavaScript](https://javascript.tm/letter),
[TypeScript](https://www.typescriptlang.org/), and [React](https://react.dev/)
files by default, while allowing you to fully customize the list of supported
file types.

## What You Get

- ✨ **Visual Color Decorators** - See colored squares next to your `oklch()`
  and `oklab()` values
- 🖱️ **Color Picker** - Click color to open VSCode's native color picker
  interface
- 🔄 **Format Preservation** - Changes maintain your original format (oklch
  stays oklch, oklab stays oklab)
- ✅ **Flexible Syntax** - Handles percentages, decimals, and alpha channels
- ⚙️ **Configurable** - Choose exactly which file types to enable the picker for

## Installation

1. Download
   [.vsix](https://github.com/Avaray/vscode-oklch-color-picker/releases/latest)
   file from
   [GitHub Releases](https://github.com/Avaray/vscode-oklch-color-picker/releases)
2. Open [VSCode](https://code.visualstudio.com/)
3. Go to **Extensions** → ... menu → **Install from VSIX**...

> Publishing this extension to the marketplace is not planned at this time.

## Configuration

By default, the extension is enabled only for JavaScript, TypeScript, and React
files to avoid conflicts with VSCode's native CSS color picker. You can
customize the list of enabled file types in the settings.

```json
{
  "oklchColorPicker.languages": [
    "javascript", // default
    "typescript", // default
    "javascriptreact", // default
    "typescriptreact", // default
    "css", // custom
    "scss", // custom
    "less", // custom
    "tailwindcss" // custom
  ]
}
```

## Usage

The extension activates automatically when you open a supported file.

### Using the Color Picker

1. Write an oklch or oklab color in your file
2. Click on the colored square that appears
3. Use the color picker to adjust the color
4. The color value updates automatically in your file

## Known Issues & Troubleshooting

### Double Color Pickers

If you see two color squares next to each other in CSS files, it means both VS
Code's native picker and this extension are active. Remove "css" (or related
languages) from the `oklchColorPicker.languages` setting to fix this.

### Color decorators don't appear at all

Make sure you have the following setting enabled:

```json
{
  "editor.defaultColorDecorators": "always"
}
```

## Requirements

- VSCode version [1.50.0](https://code.visualstudio.com/updates/v1_50) or higher

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.
