import React from "react";


export function Board(props: any) {
  return (
		<div className="flex flex-col shadow-xl rounded-xl">
			<div className={`flex justify-center p-3 text-md font-medium text-slate-50 rounded-t-xl ${props.color}`}>
				{props.title}
			</div>
			<div className="flex flex-col p-6 bg-white rounded-b-xl gap-4">
				{...props.tasks}
			</div>
		</div>
	);
}