let url = `https://anapioficeandfire.com/api/books/`;

document.querySelector('#button')
        .addEventListener('click', async function() {
            let response = await axios.get(url);
            let books = response.data;
            for (let book of books){
                let bookCard = document.createElement('div');
                bookCard.classList.add('card');

                let bookTitle = document.createElement('h3');
                bookTitle.innerHTML = `${book.name}`;

                let pageNumber = document.createElement('h3');
                pageNumber.innerHTML = `${book.numberOfPages} pages`;

                bookCard.appendChild(bookTitle);
                bookCard.appendChild(pageNumber);
                document.querySelector('#book-list')
                        .appendChild(bookCard);

                let povCharacters = document.createElement('ul');
                
                let povCharactersArray = book.povCharacters;

                console.log(povCharactersArray)

                for (let eachCharacter of povCharactersArray){
                    axios.get(eachCharacter).then(function(response){
                        let eachCharacterName = response.data.name;
                        let povCharactersElement = document.createElement('li');
                        povCharactersElement.innerHTML = `${eachCharacterName}`;
                        povCharacters.appendChild(povCharactersElement);
                    })
                }
                bookCard.appendChild(povCharacters)
            }
        })