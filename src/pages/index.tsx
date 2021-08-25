import tarefasIniciais from "../data/mock";

export default function Home() {
  let tarefas = tarefasIniciais;
  tarefas = tarefas.filtrarAtivas();
  tarefas = tarefas.filtrarConcluidas();
  // tarefas = tarefas.removerFitro();
  tarefas = tarefas.excluirConcluidas();

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <div key={tarefa.id}>
          <span> {tarefa.id} |</span>
          <span> {tarefa.descricao} |</span>
          <span> {tarefa.concluida ? "Concluída" : "Ativa"}</span>
        </div>
      );
    });
  }

  return (
    <div
      className={`
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-tr from-blue-500 to-purple-900
      text-white
    `}
    >
      {renderizarTarefas()}
    </div>
  );
}
