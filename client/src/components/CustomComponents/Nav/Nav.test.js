/**
 * @jest-environment jsdom
 */
import {render, screen, fireEvent, getByTestId} from "@testing-library/react";
import Nav from "./Nav";

it("Renders the nav", ()=> {
    const div = document.createElement('div');
    render(<Nav/>, div);
    const {modalBtn} = screen.getByTestId("qbtn");
    fireEvent.click(modalBtn);
    const {getByText} = render(<Nav/>);
    expect(getByText("email")).toBeInDocument();
    expect(getByText("Home")).toBeInDocument();
});