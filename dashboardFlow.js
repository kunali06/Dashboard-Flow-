function login(){
    return new Promise(resolve=>setTimeout(()=>resolve("logged in"),1000))  
}
function dashboard(){
    return new Promise(resolve=>setTimeout(()=>resolve("dashboard loaded"),1000))
}

async function app() {
    console.log(await login());
    console.log(await dashboard());
    
}
app();
