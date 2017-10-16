import React from "react"
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import "./prism.css"
import "./index.css"
import { Introduction, Setup } from "./Sections"

const Docs = test => {
  const sections = [
    "Introduction",
    "Setup",
    "Types",
    "Extending Types",
    "API",
    "Notes"
  ].map(d => (
    <p>
      <a>{d}</a>
    </p>
  ))

  return (
    <MuiThemeProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <header className="box-row">
              <h1 className="">react-annotation</h1>
              <p>
                Made with <img src="img/heart.png" /> by
                <a href="http://www.susielu.com"> Susie Lu</a>
              </p>
            </header>

            <div className="row">
              <div className="col-xs-3">{sections}</div>
              <div className="col-xs-9">
                <Introduction />
                <Setup />
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <footer className="col-xs-9 col-xs-offset-3">
                <small>
                  Made by <a href="http://www.susielu.com">Susie Lu</a>
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default Docs
