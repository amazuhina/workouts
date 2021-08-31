import React from 'react'

import {WorkoutCard} from "./workout-card";



export default {
    title: 'WorkOut/WorkOutCard',
    component: WorkoutCard,
    argTypes: {}
}

const Template = (args) => <WorkoutCard {...args} />;

export const First = Template.bind({});
First.args = {

}

export const Second = Template.bind({});
Second.args = {

}
