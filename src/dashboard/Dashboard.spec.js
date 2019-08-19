import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})