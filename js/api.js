function getUserName(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => userList(data))
}

function userList(data){
    const ul = document.getElementById('user-list');
    for (const users of data) {
        console.log(users);
        const li = document.createElement('li');
        li.innerText = users.name;
        ul.appendChild(li);
    }
    
}