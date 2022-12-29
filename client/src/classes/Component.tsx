import React from "react"

export class Component<IProps = {}> extends React.Component<IProps> {
	static build() {
		return <></>
	}

	render() {
		return <Component.build {...this.props} />
	}
}
