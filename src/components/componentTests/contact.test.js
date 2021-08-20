/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Contact from "../Contact";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";

// "it" means the component

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Contact></Contact>, div);
});

it("renders button correctly", () => {
   const {getByTestId} =  render(<Contact></Contact>);
   expect(getByTestId("button")).toHaveTextContent("");
});