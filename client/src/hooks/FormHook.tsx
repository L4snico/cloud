import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object } from "yup"

type TForm = {
	id: string
	handleSubmit: any
}

type TInput = {
	id: string
	label: string
	resolver: any
}

type TFormConfig = {
	form: {
		id: string
		onSubmit: any
	}
	submitBtn: {
		form: string
		type: "submit"
	}
	input: any
}

export class FormHook {
	static useConfig(form: TForm, inputs: TInput[]) {
		const resolvers: any = {}
		for (const input of inputs) {
			resolvers[input.id] = input.resolver
		}

		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm({
			resolver: yupResolver(object(resolvers)),
		})

		const formConfig: TFormConfig = {
			form: {
				id: form.id,
				onSubmit: handleSubmit(form.handleSubmit),
			},
			submitBtn: {
				form: form.id,
				type: "submit",
			},
			input: {},
		}

		for (const input of inputs) {
			formConfig.input[input.id] = {
				label: input.label,
				...register(input.id),
				error: !!errors[input.id],
				helperText: !!errors[input.id]?.message ? String(errors[input.id]?.message) : undefined,
				form: formConfig.form.id,
			}
		}

		return formConfig
	}
}
