import React from 'react'

import {InputNumber} from "./input-number.tsx"



export default {
    title: 'AppForm/InputNumber',
    component: InputNumber,
    argTypes: {}
}

const Template = (args) => <InputNumber {...args} />;

export const First = Template.bind({});
First.args = {
    title: 'Ваш возраст'
}

export const Second = Template.bind({});
Second.args = {
    title: 'Ваш вес, кг'
}

export const Third = Template.bind({});
Third.args = {
    title: 'Ваш рост, см'
}
