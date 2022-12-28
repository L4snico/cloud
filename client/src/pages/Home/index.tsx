import { Component } from "classes"
import { TopBarHome } from "components"

export class HomePage extends Component {
	static build(): JSX.Element {
		return (
			<>
				<TopBarHome />
			</>
		)
	}

	render(): JSX.Element {
		return <HomePage.build />
	}
}
