
let url = "https://programming-quotes-api.herokuapp.com/quotes/random"

document.querySelector('#button')
        .addEventListener('click', async function(){
            let response = await axios.get(url)
            quote = response.data.en
            document.querySelector('#display').innerHTML =
            `${quote}`
        })