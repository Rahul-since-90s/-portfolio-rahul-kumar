// app/components/Speedometer.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Speedometer = ({ value }) => {
    useEffect(() => {
        const width = 400;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        // Create the SVG element
        const svg = d3
            .select('#speedometer')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const radius = Math.min(width, height) / 2 - margin.top;

        // Scale to map value to angle
        const angleScale = d3.scaleLinear()
            .domain([0, 100]) // Assuming value is from 0 to 100
            .range([-Math.PI / 2, Math.PI / 2]);

        // Create the background arc
        const backgroundArc = d3.arc()
            .innerRadius(radius - 10)
            .outerRadius(radius)
            .startAngle(-Math.PI / 2)
            .endAngle(Math.PI / 2);

        svg.append('path')
            .datum({ endAngle: Math.PI / 2 })
            .attr('fill', '#e0e0e0')
            .attr('d', backgroundArc)
            .attr('transform', `translate(${width / 2}, ${height})`);

        // Create the speedometer arc
        const speedArc = d3.arc()
            .innerRadius(radius - 10)
            .outerRadius(radius)
            .startAngle(-Math.PI / 2)
            .endAngle(angleScale(value));

        svg.append('path')
            .datum({ endAngle: angleScale(value) })
            .attr('fill', '#76c7c0')
            .attr('d', speedArc)
            .attr('transform', `translate(${width / 2}, ${height})`);

        // Add the needle
        const needleLength = radius - 20;
        const needleAngle = angleScale(value);

        svg.append('line')
            .attr('x1', width / 2)
            .attr('y1', height)
            .attr('x2', 
                width / 2 + needleLength * Math.cos(needleAngle - Math.PI / 2)
            )
            .attr('y2', 
                height - needleLength * Math.sin(needleAngle - Math.PI / 2)
            )
            .attr('stroke', 'black')
            .attr('stroke-width', 2);

        // Clean up on component unmount
        return () => {
            svg.selectAll('*').remove(); // Clear previous renders
        };
    }, [value]);

    return <div id="speedometer"></div>;
};

export default Speedometer;
