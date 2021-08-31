import React from 'react'

import {InputText} from "./input-text"



export default {
    title: 'AppForm/InputText',
    component: InputText,
    argTypes: {}
}

const Template = (args) => <InputText {...args} />;

export const First = Template.bind({});
First.args = {
    title: 'Ваше имя'
}

export const Second = Template.bind({});
Second.args = {
    title: 'йцу'
}
