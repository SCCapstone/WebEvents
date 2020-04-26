import React from 'react';
import SchedulerOptions from '../client/src/components/SchedulerOptions';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";

//makes sure that the app renders without crashing
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SchedulerOptions />, div);
    ReactDOM.unmountComponentAtNode(div);
})
//makes sure that the sheet component matches the snapshot
describe("sheets component", () => {
    test("Matches the snapshot", () => {
        const options = create(<SchedulerOptions />);
        expect(options.toJSON()).toMatchSnapshot();
    });
});
;