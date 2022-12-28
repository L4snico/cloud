import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material"
import { Component } from "classes"
import { Cloud } from "phosphor-react"
import { Link } from "react-router-dom"

export class TopBarHome extends Component {
	static build(): JSX.Element {
		return (
			<>
				<Container>
					<AppBar position="static" variant="outlined">
						<Toolbar className="w-full">
							<div className="flex w-full">
								<Button variant="text" color="inherit">
									<Cloud className="mr-2" />
									<Typography>Cloud</Typography>
								</Button>
							</div>
							<div className="flex justify-end w-full">
								<Button variant="text" color="inherit" className="mr-2">
									Sign In
								</Button>
								<Link to={"/sign-up"}>
									<Button variant="contained" disableElevation color="info">
										Sign Up
									</Button>
								</Link>
							</div>
						</Toolbar>
					</AppBar>
				</Container>
			</>
		)
	}

	render(): JSX.Element {
		return <TopBarHome.build />
	}
}
