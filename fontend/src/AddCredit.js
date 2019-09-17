import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";

import CreditCardDetails from "./components/creditCardDetails";
import BlueGradientbar from "./components/BlueGradientBar";
import Navbar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

export default class AddCredit extends Component {
    render() {
        return(
                <Router>
                    <div>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100" rel="stylesheet" type="text/css" />
                        <Navbar/>
                        <section className="header1 cid-rB4qRp8JKI" id="header16-2">
                        <BlueGradientbar/>
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10 align-center">
                                    <br/>

                                    <form>
                                        <div>
                                        <h4 className="title">Add a Card</h4>
                                        </div>
                                        <div>
                                        {/* Card Number */}
                                        <input type="text" placeholder="Card Number" />
                                        {/* Date Field */}
                                        <div>
                                            <div className="month">
                                            <select name="Month">
                                                <option value="january">January</option>
                                                <option value="february">February</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="june">June</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="september">September</option>
                                                <option value="october">October</option>
                                                <option value="november">November</option>
                                                <option value="december">December</option>
                                            </select>
                                            </div>
                                            <div>
                                            <select name="Year">
                                                <option value={2020}>2020</option>
                                                <option value={2021}>2021</option>
                                                <option value={2022}>2022</option>
                                                <option value={2023}>2023</option>
                                                <option value={2024}>2024</option>
                                                <option value={2025}>2025</option>
                                                <option value={2026}>2026</option>
                                                <option value={2027}>2027</option>
                                                <option value={2028}>2028</option>
                                            </select>
                                            </div>
                                        </div>
                                        {/* Card Verification Field */}
                                        <div>
                                            <div>
                                                <input type="text" placeholder="CVV" />
                                            </div>
                                            <div>
                                                <p>3 or 4 digits usually found <br /> on the signature strip</p>
                                            </div>
                                        </div>
                                        {/* Buttons */}
                                        <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" >Add Card</a></div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        </section>
                        <br/>
                        <CreditCardDetails/>
                    </div>
                    </Router>
        );
    }
}

