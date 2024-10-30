let bancoDeDados = [];
function add() {
    let usuario = {
        username: document.getElementById("username").value.toUpperCase(),
        password: document.getElementById("senha").value
    }
    
    if (existe(usuario.username) == false) {
        bancoDeDados.push(usuario);
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("username").value = null;
        document.getElementById("senha").value = null;
    }
    else{
        alert("Esse usuário ja foi cadastrado!");
    }
}

function login(){
    let usuario = document.getElementById("user").value.toUpperCase();
    let senha = document.getElementById("pass").value;
    if (autentica(usuario, senha) ==  false) {
        alert("Falha de autenticação!");
    }
    else{
        alert("Bem vindo ao Sistema "+ usuario + "!");
    }
    document.getElementById("user").value = null;
    document.getElementById("pass").value = null;
}

function remove(){
    let usuario = document.getElementById("userDelete").value.toUpperCase();
    let pos = indexOfByJack(username);
    if(pos != -1){
        bancoDeDados.splice(pos, 1);
        alert(username + " foi removido com sucesso!");
    }
    else{
        alert(usuario+ " não foi encontrado no banco de dados!")
    }
}

function edit(){
    let username = document.getElementById("userEdit").value;
    if(existe(username) == -1){
    alert("Usuário não encontrado no banco de dados!");
    }
    else{
        let novoValor = prompt("Digite o novo usuário").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário alterado com sucesso!")
    }
    document.getElementById("userEdit").value = null;
}

function existe(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return true;
        }
    }  
    return false;
}

function autentica(username, password){
    for(let usuario of bancoDeDados){
        if(usuario.password == username && usuario.password == password){
            return true;
        }
    }  
    return false;
}

function indexOfByJack(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return bancoDeDados.indexOf(usuario);
        }
    }
    return -1;
}