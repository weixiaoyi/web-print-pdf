---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: 'bug'
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (please complete the following information):**
 - OS: [e.g. Windows 10, macOS 12.0, Ubuntu 20.04]
 - Browser: [e.g. Chrome 120, Firefox 115, Safari 16]
 - Node.js version: [e.g. 16.0.0]
 - web-print-pdf version: [e.g. 2.0.0]
 - Client version: [e.g. Web Print Expert Client 1.2.0]

**Additional context**
Add any other context about the problem here.

**Code example**
```javascript
// Please provide a minimal code example that reproduces the issue
import webPrintPdf from 'web-print-pdf';

try {
    await webPrintPdf.printHtml('<div>Test</div>');
} catch (error) {
    console.error('Error:', error);
}
``` 