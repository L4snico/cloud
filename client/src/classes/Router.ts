import { RouteObject } from "react-router-dom"

export class Router {
	private routes: RouteObject[]

	constructor() {
		this.routes = []
	}

	setRoutes(routes: RouteObject[]) {
		this.routes = routes
	}

	getRoutes() {
		return this.routes
	}
}
