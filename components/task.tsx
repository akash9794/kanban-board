import { ChangeStatusDropdown } from "./changeStatusDropdown";

function Low() {
  return (
    <div className="badge bg-success rounded-md text-success bg-opacity-25 py-3 px-2">
      Low
    </div>
  );
}

function Medium() {
  return (
    <div className="badge bg-warning rounded-md text-warning bg-opacity-25 py-3 px-2">
      Medium
    </div>
  );
}

function High() {
  return (
    <div className="badge bg-error rounded-md text-error bg-opacity-25 py-3 px-2">
      High
    </div>
  );
}

interface TaskProps {
  priority: string;
	title: string;
	description: string;
	date: string;
}

export function Task(props: TaskProps) {
  return (
    <div
      className="flex flex-col p-4 gap-4 border rounded-lg shadow-md"
      draggable="true"
    >
      {props.priority === "Low" && <Low />}
      {props.priority === "Medium" && <Medium />}
      {props.priority === "High" && <High />}

      <div className="flex">
        <div className="flex-1 text-xl font-bold">{props.title}</div>
				<ChangeStatusDropdown />
      </div>

      <div>{props.description}</div>
      <div className="divider m-0"></div>
      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={props.date}
					className="w-full"
        />
      </div>
    </div>
  );
}
