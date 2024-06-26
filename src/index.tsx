import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import ReactGA from "react-ga"

import "./index.css"
import App from "./App"

const TRACKING_ID = "G-5X4R9D4GWT"
ReactGA.initialize(TRACKING_ID)
ReactGA.pageview(window.location.pathname)

ReactDOM.render(
	<BrowserRouter basename="/">
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
)
serviceWorker.unregister()
