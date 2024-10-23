let bancoDeDados = [];
function add() {
    let usuario = document.getElementById("username").value;
    if (existe(usuario) == false) {
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("username").value = null;
    }
    else{
        alert("Esse usuário ja foi cadastrado!");
    }
}

function login(){
    let usuario = document.getElementById("user").value;
    if (existe(usuario) ==  false) {
        alert("Usuário não encontrado!");
    }
    else{
        alert("Bem vindo ao Sistema "+ usuario + "!");
    }
    document.getElementById("username").value = null;
}

function remove(){
    let usuario = document.getElementById("userDelete").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if (pos == -1) {
        alert("Usuário não encontrado!");
    }
    else{
        bancoDeDados.splice(pos, 1);
        alert("Usuário excluido com sucesso!");
    }
    document.getElementById("userDelete").value = null;
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
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        return false;
    }
    else{
        return true; 
    }
}
