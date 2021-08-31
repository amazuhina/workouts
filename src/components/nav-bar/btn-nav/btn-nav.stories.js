import React from 'react'


import {BtnNav} from "./btn-nav";



export default {
    title: 'NavBar/BtnNav',
    component: BtnNav,
    argTypes: {}
}

const Template = (args) => <BtnNav {...args} />;

export const First = Template.bind({});
First.args = {
    title: 'Главная'
}

export const Second = Template.bind({});
Second.args = {
    title: 'План тренировок'
}
