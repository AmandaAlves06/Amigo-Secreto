//Código de sorteio de amigo secreto


let listaDeNomesParaSortear = [];
let amigoAdicionado = document.getElementById("amigo")


//Adiciona um amigo a lista de nomes a serem sorteados
function adicionarAmigo() {
   let nome = amigoAdicionado.value;
   //Garante que não seja inserido um valor vazio
    if (nome == ""){
        alert("Insira um nome válido");
        return;
    } 
    //Garante que nao haja duplicidade de nome
    if (listaDeNomesParaSortear.includes(nome) ){
        alert("Esse amigo já foi adicionado!");
    } 
    //Adiciona o nome
    else {
    listaDeNomesParaSortear.push(nome);   
    console.log (listaDeNomesParaSortear);
    atualizarLista();
   }
limparCampo();
}

//Função para exibir e atualizar lista de nomes na tela
function atualizarLista(){
    let listaDeAmigos = document.getElementById("listaAmigos");

    // Limpa a lista antes de adicionar um novo nome
    listaDeAmigos.innerHTML = ""; 
    //Atualiza e adiciona um nome a lista
    listaDeNomesParaSortear.forEach(nome => {
        let li = document.createElement("li"); 
        li.textContent = nome; 
        listaDeAmigos.appendChild(li);
    });
       
    }

    
function sortearAmigo() {

    //Atualiza o limite conforme a quantidade de nomes na lista
    let numeroLimiteDeAmigos = listaDeNomesParaSortear.length;

    //Garante que haja no mínimo um nome a ser sorteado
    if (numeroLimiteDeAmigos === 0){
    alert ("Adicione pelo menos um amigo antes de sortear");
    return;
    } 
    //Sorteia um amigo
    let amigoSecretoIndex = Math.floor (Math.random()*numeroLimiteDeAmigos);
    let amigoSecreto = listaDeNomesParaSortear[amigoSecretoIndex];
    console.log (listaDeNomesParaSortear[amigoSecreto])

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<strong> O amigo serceto sorteado é: ${amigoSecreto}</strong>`; 
   
    //Remove o amigo sorteado
    listaDeNomesParaSortear.splice(amigoSecretoIndex, 1);

    //Atualiza a lista exibida na tela
    atualizarLista();
}

//Função para limpar o campo da inserção do nome
function limparCampo(){
    amigoAdicionado = document.querySelector('input');
    amigoAdicionado.value = "";
    }