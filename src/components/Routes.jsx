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
import SearchEmployees from '../components/Pages/Staff/SearchEmployees'
import CreatePhotoFrame from '../components/Pages/Staff/CreatePhotoFrame'
import CreatePhotoFrameSummary from '../components/Forms/FormSummary/CreatePhotoFrameSummary'
import SearchPhotoFrame from '../components/Pages/Staff/SearchPhotoFrame'
import CreateItem from '../components/Pages/Staff/CreateItem'
import CreateItemSummary from '../components/Forms/FormSummary/CreateItemSummary'
import SearchItem from '../components/Pages/Staff/SearchItem'
import SearchLeaveDay from '../components/Pages/Staff/SearchLeaveDay'
import CreateEvent from '../components/Pages/Staff/CreateEvent'
import CreateEventFormSummary from '../components/Forms/FormSummary/CreateEventFormSummary'
import SearchEventPackages from '../components/Pages/Staff/SearchEventPackages'
import CreateCustomer from '../components/Forms/CreateCustomer'
import SearchCustomer from '../components/Pages/Staff/SearchCustomer'
import UpdateLoyalityPoints from '../components/Pages/Staff/UpdateLoyalityPoints'
import CreateCakeItem from '../components/Pages/Staff/CreateCakeItem'
import SearchCakeItem from '../components/Pages/Staff/SearchCakeItem'
import CakeBuilder from '../components/Pages/Staff/CakeBuilder'
import UpdateCakeItem from '../components/Pages/Staff/UpdateCakeItem'
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
            <Route path = "/staff/SearchEmployees" component = {SearchEmployees}/>
            <Route path = "/staff/CreatePhotoFrame" component = {CreatePhotoFrame}/>
            <Route path = "/staff/CreatePhotoFrameSummary" component = {CreatePhotoFrameSummary} />
            <Route path = "/staff/SearchPhotoFrame" component = {SearchPhotoFrame} />
            <Route path = "/staff/CreateItem" component = {CreateItem} />
            <Route path = "/staff/CreateItemSummary" component = {CreateItemSummary} />
            <Route path = "/staff/SearchItem" component = {SearchItem} />
            <Route path = "/staff/SearchLeaveDay" component = {SearchLeaveDay} />
            <Route path = "/staff/CreateEvent" component = {CreateEvent} />
            <Route path = "/staff/CreateEventFormSummary" component = {CreateEventFormSummary} />
            <Route path = "/staff/SearchEventPackages" component = {SearchEventPackages} />
            <Route path = "/staff/CreateCustomer" component = {CreateCustomer} />
            <Route path = "/staff/SearchCustomer" component = {SearchCustomer}/>
            <Route path = "/staff/UpdateLoyalityPoints" component = {UpdateLoyalityPoints} />
            <Route path = "/staff/CreateCakeItem" component = {CreateCakeItem} />
            <Route path = "/staff/SearchCakeItem" component = {SearchCakeItem} />
            <Route path = "/staff/UpdateCakeItem" component = {UpdateCakeItem}/>
     </>
    )
}

export default Routes
