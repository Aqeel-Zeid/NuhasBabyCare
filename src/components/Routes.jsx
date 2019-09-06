import React from 'react'
import { Route, Link } from "react-router-dom";

import Home from './Pages/Home'
import StaffHome from './Pages/Staff/StaffHome';
import StaffRegisterEmployee from './Pages/Staff/StaffRegisterEmployee'
import CreateNewPositionPage from './Pages/Staff/CreateNewPositionPage'
import CreateCardTemplate from './Pages/Staff/CreateCardTemplate'
import CreateCardTemplateSummary from './Forms/FormSummary/CreateCardTemplateSummary'
import StaffSearchCards from '../components/Pages/Staff/StaffSearchCard'
import CreateEmployee from '../components/Pages/Staff/CreateEmployee'
//Staff Routes

const Routes = () => {
    return (
        <>
            <Route exact path="/" component = {Home} />
            <Route exact path="/staff" component = {StaffHome} />
            <Route path="/staff/RegisterEmployee" component = {StaffRegisterEmployee} /> 
            <Route path="/staff/CreateNewPosition" component = {CreateNewPositionPage} />
            <Route path="/staff/CreateCardTemplate" component = {CreateCardTemplate} />
            <Route path={`/staff/CreateCardTemplateSummary`} component={CreateCardTemplateSummary} />
            <Route path={`/staff/StaffSearchCard`} component = {StaffSearchCards} />
            <Route path = {`/staff/CreateEmployee`} component = {CreateEmployee}/>
        </>
    )
}

export default Routes
