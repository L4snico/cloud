import { Container } from "@mui/material"
import { Component } from "classes"
import { TopBarHome } from "components"
import { AuthView } from "View"

export class SignUpPage extends Component {
	static build(): JSX.Element {
		return (
			<>
				<TopBarHome />
				<Container>
					<AuthView.UserSignUp />
				</Container>
			</>
		)
	}

	render(): JSX.Element {
		return <SignUpPage.build />
	}
}
