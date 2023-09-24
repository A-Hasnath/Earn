function changeContent() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>New Content Heading</h2>
    <p>This is the new content after clicking the button.</p>
    <button onclick="changeContent()">Change Content</button>
   `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1942988090011660"
     crossorigin="anonymous"></script>
    ;
}
function search() {
  var searchTerm = document.getElementById('searchInput').value;
  var resultsContainer = document.getElementById('results');

  // Perform your search logic here
  // For simplicity, we'll just display a message with the search term

  resultsContainer.innerHTML = 'You searched for: ' + searchTerm;
}
