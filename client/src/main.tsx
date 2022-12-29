import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
)
