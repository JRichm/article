import Item from "./components/home/item";
import Session from './utlity/wrapper.mjs'

const clickup = new Session()
interface Task {
  id: string;
  name: string;
}

interface cuRes {
  tasks: Task[]
}

export default async function Home() {
  let todos: cuRes = { tasks: [] };

  try {
    // Store the result of the fetch in todos
    todos = await clickup.get('list/901404484511/task');
  } catch (err) {
    console.error('Error fetching tasks:', err)
  }

  return (
    <main className="flex flex-col h-full bg-dbg">
      {/* header */}
      <header className="bg-hbg min-h-52"></header>
      {/* body */}
      <div className="flex flex-row justify-center h-full">
        {/* left */}
        <div className="bg-mbg w-full max-w-[900px] flex flex-col gap-3 p-3">
          {todos.tasks.map((task) => (
            <Item key={task.id} task={task} /> // Pass the entire task object
          ))}
        </div>
        {/* right */}
        <div className="bg-sbg w-[400px]">
          <p>test</p>
        </div>
      </div>
    </main>
  );
}
