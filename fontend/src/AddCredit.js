import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import CreditCardDetails from "./components/creditCardDetails";
import BlueGradientbar from "./components/BlueGradientBar";
import Navbar from "./components/NavBar";
import AddCard from "./AddCard";
import TransferCredit from "./components/TransferCredit";

import "bootstrap/dist/css/bootstrap.min.css";

export default class AddCredit extends Component {

    constructor() {
        super();
        this.state = {
          showAddCard: false
        };

        this.AddCard = this.AddCard.bind(this);
        this.TransferCredit = this.TransferCredit.bind(this);
    }

    AddCard()
    {
        this.setState({showAddCard: true});
    }
    TransferCredit()
    {
        this.setState({showAddCard: false});
    }

    render() {
        return(
                <Router>
                    <div>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100" rel="stylesheet" type="text/css" />
                        <Navbar/>
                        <section className="header1 cid-rB4qRp8JKI" id="header16-2">
                        <BlueGradientbar/>
                        <br/><br/>
                        <div style={{textAlign:'center', height:'300px'}}>
                            <button className="btn btn-md btn-primary display-4" onClick={this.AddCard}>Add new Card</button>
                            <button className="btn btn-md btn-primary display-4" onClick={this.TransferCredit}>Transfer Credit</button>
                            <br/><br/><br/><br/>
                            { this.state.showAddCard ? <AddCard/> : <TransferCredit/> }

                        </div>
                        </section>
                        <br/>
                        <CreditCardDetails/>
                    </div>
                    </Router>
        );
    }
}

