function changeContent() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>New Content Heading</h2>
    <p>This is the new content after clicking the button.</p>
    <button onclick="changeContent()">Change Content</button>
  `;
}

function search() {
  var searchTerm = document.querySelector('.search-bar input').value;
  var resultsContainer = document.getElementById('results');

  // Assume there are no search results for this example
  var searchResults = [];

  if (searchTerm === '') {
    resultsContainer.innerHTML = ''; // Clear the results if search term is empty
  } else if (searchResults.length === 0) {
    resultsContainer.innerHTML = 'No results found for: ' + searchTerm;
  } else {
    // Display search results
    resultsContainer.innerHTML = 'Search results for: ' + searchTerm;
    // Render search results here
  }
}
