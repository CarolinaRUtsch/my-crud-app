import { trpc } from '@/utils/trpc';
import { useState } from 'react';

export default function Home() {
  // Hook para buscar as tarefas
  const { data: tasks, refetch } = trpc.getTasks.useQuery();
  const createTask = trpc.createTask.useMutation();
  const deleteTask = trpc.deleteTask.useMutation();

  // Estados para armazenar os inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Função para criar uma nova tarefa
  const handleCreateTask = async () => {
    await createTask.mutateAsync({ title, description });
    refetch(); // Recarrega as tarefas após criar
    setTitle('');
    setDescription('');
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = async (id: number) => {
    await deleteTask.mutateAsync(id);
    refetch(); // Recarrega as tarefas após deletar
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>

      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleCreateTask}
          className="bg-blue-500 text-white p-2"
        >
          Add Task
        </button>
      </div>

      {/* Renderizando a lista de tarefas */}
      <ul>
        {tasks?.map((task) => (
          <li key={task.id} className="mb-2 flex justify-between">
            <div>
              <p className="font-bold">{task.title}</p>
              <p>{task.description}</p>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
