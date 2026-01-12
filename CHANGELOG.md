# Change Log

All notable changes to the "oklch-color-picker" extension will be documented in
this file.

## [1.0.0] - 2026-01-12

### Added

- Initial release of OKLCH Color Picker
- Color picker support for `oklch()` and `oklab()` CSS color functions
- **Configurable file support**: Choose exactly which file types to enable the
  picker for (to avoid conflicts with VS Code's native picker)
- Default support for **JavaScript, TypeScript, React (JSX/TSX)**
- Optional support for any custom file types
- Visual color decorators (colored squares) next to color values
- Support for percentage values (e.g., `oklch(76% 0.177 163.223)`)
- Support for alpha channel (e.g., `oklch(0.6 0.1 120 / 0.5)`)
- Format preservation (oklch stays oklch, oklab stays oklab)

### Technical Details

- Built with [culori](https://www.npmjs.com/package/culori) library for accurate
  color space conversions.
- Uses `onStartupFinished` activation to support user-defined file types
  dynamically.
- Minimum VSCode version: [1.50.0](https://code.visualstudio.com/updates/v1_50)
