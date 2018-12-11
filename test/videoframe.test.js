import * as fs from 'fs';
import * as d3 from 'd3-selection';
import 'd3-transition';
import jsdom from 'jsdom';
import videoframe from '../src/videoframe';

test('videoframe renders as expected with defaults', () => {
    const { JSDOM } = jsdom;
    const defaultFrame = videoframe();
    const dom = new JSDOM(fs.readFileSync('test/scaffold.html'));
    const chartContainer = d3.select(dom.window.document.querySelector('svg'));
    chartContainer.call(defaultFrame);
    expect(chartContainer.node()).toMatchSnapshot();
});
