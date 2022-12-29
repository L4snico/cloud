import { Box, Button, TextField, Typography } from "@mui/material"
import { Component } from "classes"
import { emailResolver, passwordResolver } from "helpers"
import { FormHook } from "hooks"
import { Link } from "react-router-dom"

export class UserSignUpView extends Component {
	static build(): JSX.Element {
		return (
			<>
				<Box className="mt-10 flex items-center justify-center">
					<div className="text-center">
						<Typography variant="h5" gutterBottom>
							Sign Up
						</Typography>
						<UserSignUpView.Form />
					</div>
				</Box>
			</>
		)
	}

	static Form() {
		const { form, input, submitBtn } = FormHook.useConfig(
			{
				id: "signUpForm",
				handleSubmit: (data: any) => alert(JSON.stringify(data, null, 2)),
			},
			[
				{
					id: "email",
					label: "Email",
					resolver: emailResolver,
				},
				{
					id: "password",
					label: "Password",
					resolver: passwordResolver,
				},
			]
		)

		return (
			<form {...form}>
				<div className="flex flex-col gap-y-5 w-56">
					<TextField {...input["email"]} />
					<TextField {...input["password"]} />
					<Button {...submitBtn} variant="contained" disableElevation>
						Submit
					</Button>
				</div>
				<div className="flex flex-col">
					<Link to={"/"}>
						<Button className="mt-2 w-56">Go Home</Button>
					</Link>
				</div>
			</form>
		)
	}

	render(): JSX.Element {
		return <UserSignUpView.build />
	}
}
