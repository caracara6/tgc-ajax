document.querySelector('#button')
        .addEventListener('click', async function() {
            let response = await axios.get('items.txt');
            // console.log(response.data);
            let fruitList = response.data.split(',');
            // console.log(fruitList)
            
            for (let eachFruit of fruitList) {
                document.querySelector('#fruit-list').innerHTML += `<li>${eachFruit}</li>`
            }
        });