import { Button } from "@mui/material"
import { Component } from "classes"

export default class App extends Component {
	static build(): JSX.Element {
		return (
			<>
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<Button variant="contained">MUI</Button>
			</>
		)
	}

	render(): JSX.Element {
		return <App.build />
	}
}
