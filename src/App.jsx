import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";

function App() {
  return(
    <>
    <h1>Task Focus</h1>
    <p>Our friendly TaskManager</p>

    <Taskform/>
    <TaskList/>
    <Progresstracker/>
     
     <button>Clear all tasks</button>



    </>
  )
}

export default App;
