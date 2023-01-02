import { Component } from "classes"
import Routes from "routes"

export default class App extends Component {
	static build(): JSX.Element {
		return (
			<>
				<Routes />
			</>
		)
	}

	render(): JSX.Element {
		return <App.build />
	}
}
