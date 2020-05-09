import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';

export class ExampleChart extends React.Component {
    render() {
        //Create the FAKE HTML DOM element
        const div = new ReactFauxDOM.Element('div');
        //Pass the FAKE DOM element to d3.select and proceed as normal d3 do
        let svg = d3.select(div).append("svg");
        svg.append("circle")
            .attr("cx", 2).attr("cy", 2).attr("r", 40).style("fill", "blue");
        svg.append("circle")
            .attr("cx", 140).attr("cy", 70).attr("r", 40).style("fill", "red");
        svg.append("circle")
            .attr("cx", 300).attr("cy", 100).attr("r", 40).style("fill", "green");

        //DOM manipulations done, convert to React
        return div.toReact()
    }
}
