document.querySelector('#load-image-btn')
        .addEventListener('click', async function() {
            let response = await axios.get('artwork.json');
            // console.log(response)
            document.querySelector('#artwork').innerHTML =
            `<img src =${response.data.image_url} />`
        })