const login = document.getElementById('login');
const URL = "https://rexfriends.herokuapp.com/login";

login.addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(URL, {
        method: 'POST',
        body:JSON.stringify({
            username,
            password
        }),
        headers:{
            "Content-Type":"application/json;"
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
})