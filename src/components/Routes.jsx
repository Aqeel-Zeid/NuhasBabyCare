import React from 'react'
import { Route, Link } from "react-router-dom";

import Home from './Pages/Home'
import StaffHome from './NavigationComponents/Staff/StaffHome';

//Staff Routes

const Routes = () => {
    return (
        <>
            <Route exact path="/" component = {Home} />
            <Route exact path="/staff" component = {StaffHome} />
        </>
    )
}

export default Routes
