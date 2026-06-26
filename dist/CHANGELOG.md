# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.8] - 2026-06-26

### Changed
- SEO overhaul: keywords repositioned from html-to-pdf red ocean to silent printing / local print agent category
- npm `description` and `githubDescription` lead with silent browser printing positioning
- npm `homepage` points to `https://webprintpdf.com/en/docs/`
- README / README_CN: new H1, tool comparison table, QZ Tray/JSPrintManager FAQ, Tags section, https links
- README: official website resource links (demos, comparisons, frameworks, advanced config, deployment guides); cross-platform client support (Windows/Linux/macOS)
- README: scenario guides, customer cases, pricing link; FAQ deep-links to official articles; UTM on all marketing links
- README: Features aligned with silent-print positioning; Community & Ecosystem section
- README / README_CN: bilingual official doc links (English `/en/docs/…` · 中文 `/docs/…`); English README defaults to EN URLs
- README: FAQ bilingual doc links, bilingual footer pricing, silent-print quick-start titles
- GitHub EXAMPLES.md expanded with bilingual official site link matrix
- GitHub SEO docs and `repo-seo.config.json` aligned with new keyword strategy

## [2.1.7] - 2026-06-12

### Changed
- README: trimmed duplicate sections; restored overview, FAQ, and detailed configuration option docs
- npm keyword: replaced `browser-print` with `html-print` (GitHub Topics aligned)
- Consolidated GitHub SEO docs (`TOPICS.md` removed, `SEO_IMPROVEMENTS.md` shortened to index)

## [2.1.6] - 2026-06-11

### Changed
- Aligned npm keywords with GitHub Topics: first 20 entries match exactly; 7 npm-only extras documented in `repo-seo.config.json`
- Fixed topic naming consistency (`typescript-print`, `frontend-print`) across `package.json` and GitHub SEO config
- Updated GitHub SEO guides for v2.1.6 release

## [2.1.5] - 2026-06-10

### Added
- `utils.getPrinterList()` — retrieve available printers on the client
- `utils.getPrinterPapers(printer)` — retrieve supported paper types for a specified printer
- GitHub SEO config (`.github/repo-seo.config.json`, `package.json` → `githubDescription`)

### Changed
- Refined npm keywords: removed misleading terms (`node-print`, `browser-automation`, `electron-print`), strengthened differentiation (`websocket-print`, `silent-print`, `desktop-print-client`)
- Updated npm description and FAQ with differentiation vs Print.js/jsPDF and local client requirements
- Enhanced README documentation (utility methods, configuration fixes, overview alignment)
- Unified GitHub SEO guides and topic recommendations
- Trimmed marketing/SEO sections from README

## [2.1.4] - 2025-11-11

### Added
- `_printByRawMessage()` — send raw WebSocket print messages for advanced use cases
- Bilingual documentation (`README.md`, `README_CN.md`)
- GitHub Actions CI workflow, issue and PR templates
- Comprehensive SEO guides and repository setup docs (`.github/`)

### Changed
- Major README documentation overhaul
- Improved `package.json` metadata and keywords
- Replaced separate English README with bilingual doc structure

## [2.1.2] - 2025-08-04

### Changed
- Version bump and maintenance updates

## [2.1.1] - 2025-08-04

### Changed
- Version bump and maintenance updates

## [2.0.0] - 2025-07-28

### Added
- Support for multiple printing formats (HTML, URL, Base64)
- Batch printing functionality
- WebSocket communication
- Client customization features (`setTitle`, `setThemeColor`, `switchTabsVisibility`, `setContactUsTabInnerHtml`)
- Utility methods (`getConnectStatus`, `onResponse`, `onError`)
- Comprehensive configuration options (pdfOptions, printOptions, extraOptions)

### Changed
- Major API redesign for better usability
- Enhanced error handling
- Improved documentation

### Fixed
- Various bug fixes and improvements

## [1.0.0] - 2023-XX-XX

### Added
- Initial release
- Basic HTML to PDF printing functionality
- Core printing features

---

## How to Update This Changelog

1. Add new entries under `[Unreleased]` for upcoming changes
2. When releasing a new version:
   - Move `[Unreleased]` content to a new version section
   - Update the version number and date
   - Add a new `[Unreleased]` section at the top

## Categories

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities
