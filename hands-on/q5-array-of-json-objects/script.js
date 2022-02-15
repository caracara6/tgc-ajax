let usersArray = [];

document.querySelector('#load-users-btn')
        .addEventListener('click', async function(){
            let response = await axios.get('users.json');
            usersArray = response.data.users;
            // console.log(usersArray)
            for (let user of usersArray) {
                document.querySelector('#all-users').innerHTML +=
                `${user.firstName} ${user.lastName}, ${user.emailAddress}\n\n`
            }
        })
document.querySelector('#btnFind')
        .addEventListener('click', function(){
            
        })