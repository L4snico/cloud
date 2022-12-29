import { Router } from "classes"
import { SignUpPage } from "pages"

const authRouter = new Router()

authRouter.setRoutes([
	{
		path: "/sign-up",
		element: <SignUpPage />,
	},
])

const authRoutes = authRouter.getRoutes()

export { authRoutes }
