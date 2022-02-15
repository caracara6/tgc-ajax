document.querySelector('#load-btn')
        .addEventListener('click', async function(){
            let response1 = await axios.get('file1.txt');
            let response2 = await axios.get('file2.txt');
            document.querySelector('#content').innerHTML =
            `${response1.data} \n${response2.data}`
        })