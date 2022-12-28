import { Component } from "classes"
import { Error404Page, HomePage } from "pages"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { authRoutes } from "./Auth"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <Error404Page />,
	},
	...authRoutes,
])

export default class Routes extends Component {
	static build(): JSX.Element {
		return <RouterProvider router={router} />
	}

	render(): JSX.Element {
		return <Routes.build />
	}
}
