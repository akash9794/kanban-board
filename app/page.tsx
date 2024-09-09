import { Navbar } from "../components/navbar";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default async function Home() {
  return (
		<div className="flex flex-col gap-6">
			<Navbar />
			<Main />
			<Footer />
		</div>
		// <div className="flex flex-col mx-16 gap-4">
		// 	<div className="flex p-4 bg-base-200 rounded-lg">
		// 		<h1 className="text-xl flex-1">Desktop & Mobile Application</h1>
		// 		<button className="btn btn-primary">Primary</button>
		// 	</div>

		// 	<div className="grid grid-cols-3 gap-8">
		// 		<Todo />
		// 		<Todo />
		// 		<Todo />
		// 	</div>
		// </div>
  );
}
