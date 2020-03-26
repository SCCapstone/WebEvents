import React from 'react';
import ReactDOM from 'react-dom';
import SheetJSApp from "./components/sheet.js";
import App from './App';
import { create } from "react-test-renderer";

//makes sure that the app renders without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

})
//makes sure that the sheet component matches the snapshot
describe("sheets component", () => {
    test("Matches the snapshot", () => {
        const sheet = create(<SheetJSApp />);
        expect(sheet.toJSON()).toMatchSnapshot();
    });
});

;
