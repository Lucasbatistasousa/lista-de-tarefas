let tarefas = []; // Lista incial vazia

// Função de adicionar tarefas
function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa") // Variável que recebe o input no HTML
    let texto = tarefa.value; // Variável que vai ser adicionada no valor do objeto tarefa.

    // Faz o push para adicionar o valor do input na lista
    tarefas.push({
        tarefa: texto,
        concluida: false,
    });

    // Chamada de outra função
    atualizarLista();

    // Atualiza o input para vazio depois de adicionar a tarefa na lista.
    tarefa.value = "";
}

// Função que atualiza a lista
function atualizarLista(){
    let lista = document.getElementById("lista") // Variável que pega a lista no HTML

    // Garantindo que os itens da lista não fiquem duplicados
    lista.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++){

        // Variável que pega o valor do texto da lista tarefas
        let texto = tarefas[i].tarefa;

        // Verifica se o valor da chave concluida é true
        if (tarefas[i].concluida === true){
            texto = `✅ ${texto}`; // Se a tarefa tiver sido concluida adiciona o emoji
        }

        // Mostra a lista na tela com botões para remover e concluir tarefa
        lista.innerHTML += `
            <li>${texto} 
            <button onClick="concluirTarefa(${i})">Concluir</button>  
            <button onClick="removerTarefa(${i})">Remover</button> 
            </li>
        ` 
    };
}

// Função de remover tarefa da lista
function removerTarefa(i){
    
    tarefas.splice(i, 1) // Método que apaga a tarefa através do índice e a quantidade. 

    // Chamada da função atualizar a lista
    atualizarLista(); 
}

// Função de concluir a tarefa
function concluirTarefa(i){
    // Altera somente o valor da chave que verifica se a tarefa está concluida.
    tarefas[i].concluida = true;
    atualizarLista();
}