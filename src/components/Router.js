import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Recipe from "./Recipe"

import App from "../App";

const Router =()=>(
    <div>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={App}/>
    <Route path="/recipe/:id" component={Recipe}/>
            </Switch>
        </BrowserRouter>
    </div>

)

export default Router