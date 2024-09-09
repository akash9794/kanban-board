import React from "react";

interface Props {
	color: string,
	title: JSX.Element | string,
	tasks: (JSX.Element | undefined)[]
}

export function Board(props: Props) {
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