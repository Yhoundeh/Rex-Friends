const signup = document.getElementById('signup');
const URL = "https://rexfriends.herokuapp.com/postSignup";

signup.addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(password == confirmPassword) {
        fetch(URL, {
            method: 'POST',
            body:JSON.stringify({
                username,
                password
            }),
            headers:{
                "Content-Type":"application/json"
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
    } else {
        document.querySelector('.message').textContent = "Your passwords must match"
    }
})