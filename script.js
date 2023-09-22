function changeContent() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>New Content Heading</h2>
    <p>This is the new content after clicking the button.</p>
    <button onclick="changeContent()">Change Content</button>
  `;
}
