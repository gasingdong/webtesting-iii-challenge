import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react";

import Controls from './Controls';

describe('<Controls />', () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("have buttons to toggle closed and locked states", () => {
    const lock = jest.fn();
    const close = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={true} toggleLocked={lock} toggleClosed={close} />);
    
    const lockGate = getByText(/lock gate/i);
    expect(lockGate);
    fireEvent.click(lockGate);
    expect(lock).toBeCalled();

    const closeGate = getByText(/open gate/i);
    expect(closeGate);
    fireEvent.click(closeGate);
    expect(close).toBeCalled();
  })
})