let tarefas = [];

function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa")
    let texto = tarefa.value;

    tarefas.push(texto)

    atualizarLista();

    tarefa.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("lista")

    lista.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++){
        lista.innerHTML += `
            <li>${tarefas[i]} <button onClick="removerTarefa(${i})">Remover</button> </li>
        `
    };
}

function removerTarefa(i){
    
    tarefas.splice(i, 1)

    atualizarLista();
}