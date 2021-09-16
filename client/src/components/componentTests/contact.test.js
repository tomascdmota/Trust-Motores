import React from 'react';
import {Form} from '../Contact';
 
// 'it' means the component

it('Should capture the name correctly', () => {
    const component = mount(<Form/>)
    const input = component.find('input').at(0);
    input.instance().value = "HEllo";
    input.simulate("change");
    expect(component.state().name).toEqual('HEllo');
})