# OKLCH Color Picker

Color picker for `oklch()` and `oklab()` colors in CSS, Tailwind CSS, JavaScript
and TypeScript files.

## Features

- 🎨 Visual color decorators for `oklch()` and `oklab()` colors
- 🖱️ Interactive color picker to modify colors directly in editor
- ✅ Support for percentages: `oklch(76% 0.177 163.223)`
- ✅ Support for alpha channel: `oklch(0.6 0.1 120 / 0.5)` and
  `oklab(0.87 0.03 -0.05 / 0.8)`
- 🔄 Automatic format preservation (oklch stays oklch, oklab stays oklab)
- 🎯 Works in CSS, SCSS, LESS, JavaScript, TypeScript, JSX, TSX
- 🌈 Tailwind CSS compatibility

## Supported Color Formats

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
   from
   [GitHub Releases](https://github.com/Avaray/vscode-oklch-color-picker/releases)
2. Open [VSCode](https://code.visualstudio.com/)
3. Go to **Extensions** → ... menu → **Install from VSIX**...

## Usage

The extension activates automatically when you open files containing `oklch()`
or `oklab()` colors.

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
