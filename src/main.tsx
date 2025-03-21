import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { HoneycombUIProvider } from "@honeycomb-app/design"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<HoneycombUIProvider theme="dark">
			<App />
		</HoneycombUIProvider>
	</React.StrictMode>
)
