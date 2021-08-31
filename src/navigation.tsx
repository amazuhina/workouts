import {Route, Switch} from "react-router-dom";
import {WorkoutPage} from "./components/content/pages/workout-page/workout-page";
import {StatisticPage} from "./components/content/pages/statistic-page/statistic-page";
import {MainFormPage} from "./components/content/pages/main-form-page/main-form-page";
import React from "react";
import {ReportPage} from "./components/content/pages/report-page/report-page";
import {LoginPage} from "./components/content/pages/login-page/login-page";

export const Navigation = () => {
    return (
        <Switch>
            <Route path="/workout">
                <WorkoutPage/>
            </Route>

            <Route path="/statistic">
                <StatisticPage/>
            </Route>

            <Route path="/report">
                <ReportPage/>
            </Route>

            <Route path={'/form'}>
                <MainFormPage/>
            </Route>

            <Route path="/">
                <LoginPage/>
            </Route>
        </Switch>
    )
}