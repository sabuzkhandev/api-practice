
function getPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res =>res.json())
    .then(data => setPost(data))
}

function setPost(data){
    const allPost = document.getElementById('post-list');
    for (const posts of data) {
        console.log(posts);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h5>User Id: ${posts.userId}</h5>
            <h4>Title: ${posts.title}</h4>
            <p>Description: ${posts.body}</p>
        `;
        allPost.appendChild(div);
    }
    
}

getPost()