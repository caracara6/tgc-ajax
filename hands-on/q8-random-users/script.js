let url = "https://randomuser.me/api/?results=10"


document.querySelector('#load-btn')
        .addEventListener('click', async function(){
            let response = await axios.get(url);
            let randomUsers = response.data.results;
            // console.group(randomUsers)

            for (let eachUser of randomUsers) {
                let eachUserElement = document.createElement('div');
                let userName = document.createElement('h2');
                userName.innerHTML = `${eachUser.name.first} ${eachUser.name.last}`
                let userCity = document.createElement('h3');
                userCity.innerHTML = `${eachUser.location.city}`
                let userImage = document.createElement('img')
                userImage.src = `${eachUser.picture.medium}`

                eachUserElement.appendChild(userName);
                eachUserElement.appendChild(userCity);
                eachUserElement.appendChild(userImage);
                document.querySelector('#content').appendChild(eachUserElement)
            }
        })