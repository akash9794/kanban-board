import { Task } from "./task";
import { Board } from "./board";
import { CreateTaskModal } from "./create-task-modal";
import dummy from "../db/dummy.json";

function Tasks(status: string) {
  return dummy.map(task => {
    if (task.status === status) {
      return <Task key={task.id} priority={task.priority} title={task.title} description={task.description} date={task.date} />;
    }

  });
}

export function Main() {
  return (
    <div className="flex flex-col mx-32 gap-8">
      <div className="flex p-4 bg-base-200 rounded-lg">
        <h1 className="flex flex-1 items-center text-lg font-bold">
          Desktop & Mobile Application
        </h1>
        <CreateTaskModal />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Board title="TODO" color="bg-error" tasks={Tasks("Todo")} />
        <Board
          title={<div className="text-black">IN PROGRESS</div>}
          color="bg-warning"
          tasks={Tasks("In Progress")}
        />
        <Board
          title="COMPLETED"
          color="bg-success"
          tasks={Tasks("Completed")}
        />
      </div>
    </div>
  );
}
