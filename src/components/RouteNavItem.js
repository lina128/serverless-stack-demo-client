import React from "react";
import { Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";

function onClick(e, history) {
  e.preventDefault();
  history.push(e.currentTarget.getAttribute("href"));
}

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={e => onClick(e, history)}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </NavItem>}
  />;
