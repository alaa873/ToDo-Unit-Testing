import { createContext, useContext } from "react"
import { useLocalStorage } from "../components/utilits/useLocalStorageHook"


const tasksContext = createContext()
export const useTasksContext = () => {
    return useContext(tasksContext)
}
const UseApiContext = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const onAddTask = (task) => {
        if (task.name !== "") {
            const id = tasks.length + 1;
            const newTask = { id, ...task };
            setTasks([...tasks, newTask]);
        }
    }
    const onDeleteTask = (task) => {
        setTasks(tasks.filter((t) => t.id !== task.id));
    };
    const onDoneTask = (task) => {
        setTasks(tasks.map((t) => t.id === task.id ? { ...task, done: !task.done } : t));
    }

    const onEditTask = (task) => {
        setTasks(tasks.map((t) => t.id === task.id ? { ...task } : t));
    }
    return (
        <tasksContext.Provider value={{
            tasks,
            onAddTask,
            onDeleteTask,
            onDoneTask,
            onEditTask
        }}>
            {children}
        </tasksContext.Provider>
    )

}

export default UseApiContext