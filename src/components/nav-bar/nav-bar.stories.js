import React from 'react'


import {NavBar} from "./nav-bar";



export default {
    title: 'NavBar',
    component: NavBar,
    argTypes: {}
}

const Template = (args) => <NavBar {...args} />;

export const First = Template.bind({});
First.args = {
    title: 'Главная'
}


