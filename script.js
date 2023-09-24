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

  // Replace this with your actual search logic
  // For simplicity, let's assume there are no search results
  var searchResults = []; 

  if (searchResults.length === 0) {
    resultsContainer.innerHTML = 'No results found for: ' + searchTerm;
  } else {
    // Display search results
    resultsContainer.innerHTML = 'Search results for: ' + searchTerm;
    // Render search results here
  }
}
