import React from "react";
import * as d3 from 'd3'
import {withFauxDOM,createElement} from 'react-faux-dom'
import {ExampleChart} from "../ExampleChart/ExampleChart";
import Header from "../Header/Header";

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Header/>
                <h2>Airline & airport effectiveness</h2>
                <h2>Hello</h2>

                <ExampleChart/>
            </div>
        );
    }
}

export default withFauxDOM(Home)
