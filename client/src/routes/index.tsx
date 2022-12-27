import { Component } from "classes"
import { HomePage } from "pages"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
])

export default class Routes extends Component {
	static build(): JSX.Element {
		return <RouterProvider router={router} />
	}

	render(): JSX.Element {
		return <Routes.build />
	}
}
