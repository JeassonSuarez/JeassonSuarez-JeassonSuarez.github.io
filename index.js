const d = document;

    // const data = {
    //     username : '',
    //     pass: ''
    

//     data.username = d.getElementById('username').value;
//     data.pass = d.getElementById('password').value;
    
//     return data
// }
d.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    
    const data = new FormData(d.getElementById('form'));

    fetch('https://sqlinj-back-production.up.railway.app/sesion')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            response.forEach(user => {
                // console.log(user.username);
                if (data.get('username')===user.username && data.get('password')===user.pass) {
                    location.href='./sesion.html'
                }else{
                    alert('Usuario o contraseña incorrectos')
                }
            });
        })
})

// hlola