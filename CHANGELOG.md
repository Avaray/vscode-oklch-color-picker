# Change Log

All notable changes to the "oklch-color-picker" extension will be documented in
this file.

## [1.0.0] - 2026-01-10

### Added

- Initial release of OKLCH Color Picker
- Color picker support for `oklch()` CSS color function
- Color picker support for `oklab()` CSS color function
- Visual color decorators (colored squares) next to color values
- Support for percentage values (e.g., `oklch(76% 0.177 163.223)`)
- Support for alpha channel (e.g., `oklch(0.6 0.1 120 / 0.5)`)
- Language support for CSS, SCSS, LESS
- Language support for JavaScript, TypeScript, JSX, and TSX files
- Full compatibility with Tailwind CSS IntelliSense
- Interactive color picker to modify colors directly in the editor
- Automatic format preservation (oklch stays oklch, oklab stays oklab)

### Technical Details

- Built with [culori](https://www.npmjs.com/package/culori) library for accurate
  color space conversions.
- Minimum VS Code version: [1.50.0](https://code.visualstudio.com/updates/v1_50)
- Should work seamlessly alongside other color extensions

### Known Issues

- If using
  [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  extension, add `"editor.defaultColorDecorators": "always"` to settings for
  best experience

## [Unreleased]

- Future updates and improvements will be listed here

[1.0.0]: https://github.com/Avaray/oklch-color-picker/releases/tag/v1.0.0
