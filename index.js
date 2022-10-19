let id = 0

const tarefa = (id, novaTarefa) => `<div id='${id}'>
<p>${novaTarefa}</p>
<input type="checkbox" />
</div>`


function adicionarTarefa(){ 
    id++
    const atividade = document.getElementById('nome-tarefa').value
    
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id, atividade)
    
}

