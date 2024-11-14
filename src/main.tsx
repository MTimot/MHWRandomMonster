import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Main from "./components/main/main.tsx";
import Rise from "./components/Rise/Rise.tsx";
import rise_data from "../src/assets/monsterRiseTab.tsx";
import main_data from "../src/assets/monsterWorldTab.tsx";
// router creation

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Main />,
				loader: () => {
					return main_data;
				},
			},
			{
				path: "/rise",
				element: <Rise />,
				loader: () => {
					return rise_data;
				},
			},
		],
	},
]);
const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
