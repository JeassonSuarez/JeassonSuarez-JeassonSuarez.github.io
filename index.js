
document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    
    const data = {
        "name": `${document.getElementById("username").value}`,
        "pass": `${document.getElementById("password").value}`
    }

    console.log( JSON.stringify(data), data);
    fetch('https://sqlinj-back-production.up.railway.app/sesion', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            let logged = response;
            if (logged) {
                location.href='./sesion.html'
            }else{
                alert('Usuario o contraseña incorrectos')
            }
        })
})

// hlola