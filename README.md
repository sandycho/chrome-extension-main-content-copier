# Main Content Copier

## Quick Copy: Streamline Your Web Content Extraction

Main Content Copier is a Chrome extension that allows users to easily copy the content within the `<main>` tag of any webpage with a simple right-click. Perfect for researchers, writers, and anyone who frequently needs to extract main content from web pages.

<img width="649" alt="Screenshot 2024-08-18 at 14 58 57" src="https://github.com/user-attachments/assets/ee82d7c5-1e8d-413a-be7e-61854e25264b">
<br />
*Successful copy operation with green notification*

<img width="661" alt="Screenshot 2024-08-18 at 14 58 14" src="https://github.com/user-attachments/assets/49c2c69e-102a-4cc0-8c75-2150c1ed0123">
<br />
*Error handling with red notification*

## Features

- One-click copying of `<main>` tag content
- Sleek, non-intrusive notifications
- Handles various edge cases (multiple `<main>` tags, no `<main>` tag, etc.)
- Works across different websites and page structures

## Installation

1. Clone this repository or download the ZIP file.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to any webpage.
2. Right-click anywhere on the page.
3. Select "Copy Main Content" from the context menu.
4. A notification will appear confirming the copy operation or indicating an error.
5. Paste the copied content wherever needed.

## Local Testing

To test the extension locally:

1. Clone the repository:
git clone https://github.com/yourusername/main-content-copier.git
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the extension directory.
5. The extension should now appear in your browser toolbar.

### Edge Case Testing

Use the following HTML file to test various edge cases:

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Main Content Copier Test Cases</title>
 <style>
     body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
     h1, h2 { color: #333; }
     .case { border: 1px solid #ddd; padding: 15px; margin-bottom: 20px; }
     .rtl { direction: rtl; }
 </style>
</head>
<body>
 <h1>Main Content Copier Test Cases</h1>

 <div class="case">
     <h2>Case 1: Single main tag</h2>
     <main>
         <p>This is a simple main tag with some content. The extension should copy this text.</p>
     </main>
 </div>

 <div class="case">
     <h2>Case 2: No main tag</h2>
     <div>
         <p>This page has no main tag. The extension should show an error message.</p>
     </div>
 </div>

 <div class="case">
     <h2>Case 3: Multiple main tags</h2>
     <main>
         <p>This is the first main tag. The extension should copy this content.</p>
     </main>
     <main>
         <p>This is the second main tag. The extension should ignore this.</p>
     </main>
 </div>

 <div class="case">
     <h2>Case 4: Nested main tags</h2>
     <main>
         <p>Outer main tag content.</p>
         <main>
             <p>Inner main tag content.</p>
         </main>
     </main>
 </div>

 <div class="case">
     <h2>Case 5: Empty main tag</h2>
     <main></main>
     <p>The main tag above is empty. The extension should handle this gracefully.</p>
 </div>

 <div class="case">
     <h2>Case 6: Main tag with mixed content</h2>
     <main>
         <h3>Mixed Content</h3>
         <p>This main tag contains various elements:</p>
         <ul>
             <li>A list item</li>
             <li>Another list item</li>
         </ul>
         <img src="https://via.placeholder.com/150" alt="Placeholder image">
         <a href="#">A link</a>
     </main>
 </div>

 <div class="case">
     <h2>Case 7: Main tag with very long content</h2>
     <main>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p>This paragraph is repeated multiple times to create a very long content.</p>
         <!-- Repeat the above paragraph 20 more times -->
     </main>
 </div>

 <div class="case rtl">
     <h2>Case 8: Right-to-left text</h2>
     <main>
         <p>هذا نص باللغة العربية لاختبار النصوص من اليمين إلى اليسار. يجب أن يتعامل الامتداد مع هذا النص بشكل صحيح.</p>
     </main>
 </div>

 <div class="case">
     <h2>Case 9: Main tag with special characters</h2>
     <main>
         <p>Special characters: áéíóú ñ ü ß © ® ™ € £ ¥ &lt; &gt; &amp; &quot; &apos;</p>
     </main>
 </div>

 <div class="case">
     <h2>Case 10: Main tag with code snippet</h2>
     <main>
         <pre><code>
function helloWorld() {
 console.log("Hello, World!");
}
         </code></pre>
     </main>
 </div>
</body>
</html>
```
