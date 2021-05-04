import React from "react";
import {
    Route,
    NavLink
} from "react-router-dom";
import Search from "../search/Search";
import Pinboard from "../pinboard/Pinboard";
import FullApp from "../full-app/FullApp";

const Main = () => {
    return (
        <div>
            <h1>Example of Embedding TSE</h1>
            <ul className="header">
                <li><NavLink exact to="/">Search</NavLink></li>
                <li><NavLink to="/pinboard">Pinboard</NavLink></li>
                <li><NavLink to="/fullApp">Full App</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Search} />
                <Route path="/pinboard" component={Pinboard} />
                <Route path="/fullApp" component={FullApp} />
            </div>
        </div>
    );
};

export default Main;