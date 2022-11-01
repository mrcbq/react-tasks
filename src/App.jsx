// import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { tasks as data } from "./data/tasks"; // aqui se importa tasks usando un cambio de variable a data para que el useeffect asigne e inicialice correctamente el valor de data a la variable tasks

function App() {
  //este componente iniciliza o toma los valores de la lista de tareas de un archivo ./tasks.js, y contiene toda la logica para mostrar la lista de tareas de forma ordenada
  // const [tasks, setTasks] = useState([]);

  //este useEffect sirve para inicializar la variable tasks asignadole el valor data mediante la funcion setTasks
  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  // function createTask(task) {
  //   setTasks([
  //     ...tasks,
  //     {
  //       title: task.title,
  //       id: tasks.length,
  //       description: task.description,
  //     },
  //   ]);
  // }

  // function deleteTask(taskId) {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // }

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
