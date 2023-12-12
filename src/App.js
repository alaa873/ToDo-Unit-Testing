import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemList } from "./components/ItemList";
import { ItemForm } from "./components/ItemForm";
import { useTasksContext } from './Context/useApiContext';

function App() {
  const {
    tasks,
    onAddTask,
    onDeleteTask,
    onDoneTask,
    onEditTask
  } = useTasksContext()

  return (
    <div>
      <ItemForm onAddTask={onAddTask} />
      <ItemList onDeleteTask={onDeleteTask} tasks={tasks} onEditTask={onEditTask} onDoneTask={onDoneTask} />
    </div>
  );
}

export default App;
