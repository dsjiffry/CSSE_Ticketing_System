import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Cookies from 'universal-cookie';

import Sidebar from "./components/sidebar";
import CreditCardDetails from "./components/creditCardDetails";
import OtherOperations from "./components/OtherOperations";
import BlueGradientbar from "./components/BlueGradientBar";
import Navbar from "./components/NavBar";

import LoginPage from "./LoginPage";
import AddCredit from "./AddCredit";
import RegisterPage from "./RegisterPage";
import CreditHistory from "./CreditHistory";
import JourneyHistory from "./JourneysTaken";
import Admin from "./AdminPanel";
import AdminOvercrowd from "./AdminOverCrowd";
import AdminTimetable from "./AdminTimetable";
import AdminCountDetails from "./AdminCountDetails";
import AdminFinancePanel from "./AdminFinancePanel";
import AdminPlanFinance from "./AdminPlanFiniance";
import AdminUnauthorized from "./AdminUnauthorized";
import BusDriverMain from "./BusDriverMain" ;
import AddBus from "./AddBus";

import "bootstrap/dist/css/bootstrap.min.css";

const cookies = new Cookies();


// const UmvValidator = (actions) => {
//     const expiryTime = localStorage.getItem('expiryTime');
//     const init = localStorage.getItem('init');
//     if (once) {
        
//         localStorage.setItem('init',1)
//         cookies.set('page', null, { path: '/' });
//         userDetails.set('username', null, { path: '/' });
//         userDetails.set('creditBalance', 1723.51);
//         once = false;
//     }
// }

export default class Home extends Component {
    
    addCredit()
    {
        const cookies = new Cookies();
        cookies.get('page');
        cookies.set('page', 'addCredit');
        window.location.reload();  
    }
    

    render() {
        if (cookies.get('page') === "home") {
            return(
                <Router>
                    <div>
                        <Navbar/>
                        <section className="header1 cid-rB4qRp8JKI" id="header16-2">
                        <BlueGradientbar/>
                        <div className="container">
                            <Sidebar/>
                            <div className="row justify-content-md-center">
                                <div className="col-md-10 align-center">
                                    <br/><br/><br/>
                                        <div className="mbr-section-btn">
                                            <button className="btn btn-md btn-primary display-4" onClick={this.addCredit}>Add Credit</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <CreditCardDetails/>
                        <br/>
                        <OtherOperations/>
                    </div>
                    </Router>
            );
        } else if (cookies.get('page') === "register") {            //Register Page
            return(
                <div>
                    <RegisterPage/>
                </div>
            );
        } else if (cookies.get('page') === "addCredit") {           //Add credit to account Page
            return(
                <div>
                    <AddCredit/>
                </div>
            );
        }else if (cookies.get('page') === "creditHistory") {        //Credit History details Page
        return(
            <div>
                <CreditHistory/>
            </div>
        );
        }else if (cookies.get('page') === "journeyHistory") {        //Journey History details Page
            return(
                <div>
                    <JourneyHistory/>
                </div>
            );
        }else if (cookies.get('page') === "admin") {                //Admin Main Page
            return(
                <div>
                    <Admin/>
                </div>
            );
        }else if (cookies.get('page') === "adminOverCrowd") {       //Admin overcrowded table Page
            return(
                <div>
                    <AdminOvercrowd/>
                </div>
            );
        }else if (cookies.get('page') === "adminTimetable") {       //Admin Bus timetable Page
            return(
                <div>
                    <AdminTimetable/>
                </div>
            );
        }else if (cookies.get('page') === "adminCountDetails") {    //Admin Passenger count graph Page
            return(
                <div>
                    <AdminCountDetails/>
                </div>
            );
        }else if (cookies.get('page') === "adminFinancePanel") {     //Admin Finance Main Page
            return(
                <div>
                    <AdminFinancePanel/>
                </div>
            );
        }else if (cookies.get('page') === "planFinance") {           //Bus Details Page
            return(
                <div>
                    <AdminPlanFinance/>
                </div>
            );
        }else if (cookies.get('page') === "unauthorizedTravels") {   //Unauthorized travel Page with graph
            return(
                <div>
                    <AdminUnauthorized/>
                </div>
            );
        }else if (cookies.get('page') === "busDriverMain") {   //Bus driver Page
            return(
                <div>
                    <BusDriverMain/>
                </div>
            );
        }else if (cookies.get('page') === "addBus"){    //Add Bus Page
            return(
                <div>
                    <AddBus/>
                </div>
            );
        }

        

        //Login Page
        else{
            return(
                <div>
                    <LoginPage/>
                </div>
            );
        } 

        

    }
}
