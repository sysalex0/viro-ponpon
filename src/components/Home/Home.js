import React from "react";
import * as d3 from 'd3'
import {withFauxDOM,createElement} from 'react-faux-dom'
import {ExampleChart} from "../ExampleChart/ExampleChart";

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <ExampleChart/>
            </div>
        );
    }
}

export default withFauxDOM(Home)
