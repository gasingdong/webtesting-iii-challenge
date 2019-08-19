import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { render, fireEvent } from "@testing-library/react";

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

  it("button texts change to reflect future state", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText(/close gate/i);
    expect(closeGate);
    fireEvent.click(closeGate);
    expect(getByText(/open gate/i));
    
    const lockGate = getByText(/lock gate/i);
    expect(lockGate);
    fireEvent.click(lockGate);
    expect(getByText(/unlock gate/i));
  })
})