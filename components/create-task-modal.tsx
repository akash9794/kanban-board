"use client";

function Title() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-medium">Title</span>
      </div>
      <input
        type="text"
        placeholder="Select here"
        className="input input-bordered w-full"
      />
    </label>
  );
}

function Description() {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text font-medium">Description</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Add here"
      ></textarea>
    </label>
  );
}

function Date() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-medium">Select Date</span>
      </div>
      <input type="date" className="input input-bordered w-full" />
    </label>
  );
}

function Status() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-medium">Status</span>
      </div>
      <select className="select select-bordered">
        <option disabled selected>
          Select here
        </option>
        <option>Todo</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </label>
  );
}

function Priority() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-medium">Priority</span>
      </div>
      <select className="select select-bordered">
        <option disabled selected>
          Select here
        </option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </label>
  );
}

export function CreateTaskModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        Create Task
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col gap-2 text-sm">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Create New Task</h3>
          <Title />
          <Description />
          <Date />
          <Status />
          <Priority />
          <div className="flex justify-end mt-2 gap-4">
						<form method="dialog">
							<button className="btn btn-primary btn-outline">Cancel</button>
						</form>
            <button className="btn btn-primary">Create</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
