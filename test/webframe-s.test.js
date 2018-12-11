import * as fs from 'fs';
import * as d3 from 'd3-selection';
import 'd3-transition';
import jsdom from 'jsdom';
import webframeS from '../src/webframe-s';

test('webframe-s renders as expected with defaults', () => {
    const { JSDOM } = jsdom;
    const defaultFrame = webframeS();
    const dom = new JSDOM(fs.readFileSync('test/scaffold.html'));
    const chartContainer = d3.select(dom.window.document.querySelector('svg'));
    chartContainer.call(defaultFrame);
    expect(chartContainer.node()).toMatchSnapshot();
});
