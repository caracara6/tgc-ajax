let btn = document.querySelector('#load-btn');
btn.addEventListener('click', async function() {
    let response = await axios.get('contact.txt');
    console.log(response.data);
})