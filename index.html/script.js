function searchBooks() {
    const searchInput = document.getElementById("searchInput").value;
    const apiKey = "AIzaSyC6Kk9p21wW7stMqHXAn2DQchMxDs9tmSU"; // 替换为你自己的 API Key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const books = data.items;
            const searchResults = document.getElementById("searchResults");
            searchResults.innerHTML = "";

            books.forEach(book => {
                const title = book.volumeInfo.title;
                const authors = book.volumeInfo.authors.join(", ");
                const description = book.volumeInfo.description;
                const bookDiv = document.createElement("div");
                bookDiv.innerHTML = `<h2>${title}</h2>
                                     <p>Authors: ${authors}</p>
                                     <p>Description: ${description}</p>`;
                searchResults.appendChild(bookDiv);
            });
        })
        .catch(error => console.log("Error:", error));
}