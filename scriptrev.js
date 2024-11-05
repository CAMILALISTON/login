function pesca(){
    let pesoPermitido = Number(prompt("Digite o peso permitido! "));
    let peso = Number(prompt("Digite o peso pescado! "));
    
    if(pesoPermitido < peso){
        let excesso = peso - pesoPermitido
        let multa = excesso *4
        alert("O peixe excedeu "+excesso+"Kg, portanto a multa será no valor de R$"+multa);
    }
    else{
        alert("O peso não ultrapassou o total permitido")
    }
}

function idade(){
    let anonascimento = Number(prompt("Digite o ano que você nasceu: "));
    let idade = 2024-anonascimento

    if(idade < 18){
        alert("Você é menor de idade pois tem "+idade+" anos!");
    }
    else if (idade > 18){
        alert("Você é maior de idade, pois tem "+idade+" anos!")
    }
    else{
        alert("Você vai ser maior de idade ainda este ano!");
    }

}

function contagem(){
    let numero = prompt("Digite o limite da contagem");
    let tabela = "";
    for(let i = 0; i < numero;i += 3){
        tabela += i+"\n";
    }
    alert(tabela);
}

function arrays(){
    let caixaDeBomBons = [];
    let quantidade = prompt("Quantos Bombons deseja inserir na caixa?");
    for(let i = 0; i<quantidade; i++){
        let nomeBomBom = (prompt("Digite o nome do BomBom a ser inserido: "))
        caixaDeBomBons.push(nomeBomBom);
    }
    alert(caixaDeBomBons);
    let exclusao = prompt("Digite o nome do bombom que voce quer excluir: ");
    let pos = caixaDeBomBons.indexOf(exclusao);
    if(pos == -1){
        alert("Esse bom bom não foi encontrado");
    }
    else{
        caixaDeBomBons.splice(pos, 1);
    }
    alert(caixaDeBomBons);
    let tamanhoAtual = caixaDeBomBons.length; //length retorna o tamanho atual do array
    alert("Agora a caiza de bombons possui "+tamanhoAtual+" bombons!")
}