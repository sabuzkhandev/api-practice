const intUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then( data=> getAllUserList(data.results))
}

const getAllUserList = userList =>{
    const allUsers = document.getElementById('getUserList');
    for (const users of userList) {
        console.log(users)
        const setDiv = document.createElement('div');
        setDiv.classList.add('users-bg');
        setDiv.innerHTML = `
            <h2>User Name: ${users.name.first} ${users.name.last}</h2>
            <h5>User Email: ${users.email}</h5>
            <h5>User Loaction: ${users.location.city} , ${users.location.country}</h5>
            <h5>User Phone: ${users.cell}</h5>
        `;
        allUsers.appendChild(setDiv);
    }
    
}
intUser();