import { Button, Container, Typography } from "@mui/material"
import { Component } from "classes"
import { TopBarHome } from "components"
import { Link } from "react-router-dom"

export class Error404Page extends Component {
	static build(): JSX.Element {
		return (
			<>
				<TopBarHome />
				<Container className="mt-20 text-center">
					<Typography variant="h2">404</Typography>
					<Typography className="uppercase">Page Not Found</Typography>
					<Link to="/">
						<Button className="mt-5" variant="contained">
							Go Home
						</Button>
					</Link>
				</Container>
			</>
		)
	}

	render(): JSX.Element {
		return <Error404Page.build />
	}
}
