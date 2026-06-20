let tarefas = [];

function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa")
    let texto = tarefa.value;

    tarefas.push(texto)

    atualizarLista();

    texto.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("lista")

    lista.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++){
        lista.innerHTML += `
            <li>${tarefas[i]}</li>
        `
    };
}