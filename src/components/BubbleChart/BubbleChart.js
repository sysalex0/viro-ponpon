import bubbleChartData from '../../assets/data/airline largeness.csv'
import React from "react";
import ReactFauxDOM from "react-faux-dom";
import * as d3 from "d3";

export default class BubbleChart extends React.Component {
    constructor(props) {
        super(props);
        this.div = new ReactFauxDOM.Element('div');
    }

    handleBubbleOnClick(d) {
        console.log('Bubble:', d)
    }

    async componentDidMount() {
        const raw_data = await d3.csv(bubbleChartData);
        const data = raw_data.map(d => ({id:d['ID'], name: d['OP_CARRIER'], value: d['SUM'], airline: d['AIRLINE']}))
        const json = {'children': data}
        const diameter = 600
        // const color = d3.scaleOrdinal(d3.schemeCategory10)
        const color = d3.scaleSequential()
            .domain([0,data.length-1])
            .interpolator(d3.interpolateViridis);

        const bubble = d3.pack()
            .size([diameter, diameter])
            .padding(5);
        const margin = {
            left: 0,
            right: 400,
            top: 0,
            bottom: 0
        }
        const svg = d3.select(this.div).append('svg')
            .attr('viewBox', `0 0 ${(diameter + margin.right)} ${diameter}`)
            .attr('width', (diameter + margin.right))
            .attr('height', diameter)
            .attr('class', 'chart-svg');

        const root = d3.hierarchy(json)
            .sum(function (d) {
                return d.value;
            })
            .sort(function (a, b) {
                return b.value - a.value;
            });
        bubble(root);

        const node = svg.selectAll('.node')
            .data(root.children)
            .enter()
            .append('g').attr('class', 'node')
            .attr('transform', function (d) {
                return 'translate(' + d.x + ' ' + d.y + ')';
            })
            .append('g').attr('class', 'graph');

        node.append("circle")
            .attr("r", function (d) {
                return d.r;
            })
            .style("fill", function (d) {
                console.log(color(d.data.id))
                return color(d.data.id);
            })
            .on("click", (d) => {
                this.handleBubbleOnClick(d)
            })


        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function (d) {
                return d.data.name;
            })
            .style("fill", "#ffffff");


        const legend = svg.selectAll(".legend")
            .data(data).enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", "translate(" + 780 + "," + 120 + ")");
        // .attr("transform", "translate(" + 0 + "," + 120 + ")");


        legend.append("rect")
            .attr("x", 0)
            .attr("y", function (d, i) {
                return 20 * i;
            })
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", function (d) {
                return color(d.id)
            });


        legend.append("text")
            .attr("x", 25)
            .attr("text-anchor", "start")
            .attr("dy", "1em")
            .attr("y", function (d, i) {
                return 20 * i;
            })
            .text(function (d) {
                return `${d.name} : ${d.airline}`;
            })
            .attr("font-size", "12px");


        legend.append("text")
            .attr("x", 31)
            .attr("dy", "-.2em")
            .attr("y", -10)
            .text("Airlines")
            .attr("font-size", "17px");

        // as our fake div is not using state, so react wont know it is updated
        // we need call force update to make the div render
        this.forceUpdate();
    }


    render() {
        if (this.div) {
            return this.div.toReact()
        } else
            return <h2>Loading ...</h2>
    }
}
