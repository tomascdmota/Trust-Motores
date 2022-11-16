import 'jsdom-global/register';
import React from "react";
import { render } from 'enzyme';
import {mount} from "enzyme";
import GetQuote from "./getquote";

describe('<GetQuote>',  () => {
    it("should get matricula correctly onChange", () => {
        const component = render(<GetQuote/>);
        const input = component.find('input').at(0);
        input.instance().value = '17-VH-15'
        input.simulate('change')
        expect(component.state().matricula).toEqual('17-VH-15')
    })
})