import { Container } from "@mui/material"
import { Component } from "classes"
import { TopBarHome } from "components"

export class SignUpPage extends Component {
	static build(): JSX.Element {
		return (
			<>
				<TopBarHome />
				<Container className="mt-10">sign up</Container>
			</>
		)
	}

	render(): JSX.Element {
		return <SignUpPage.build />
	}
}
