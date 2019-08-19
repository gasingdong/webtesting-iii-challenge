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

    const openGate = getByText(/open gate/i);
    expect(openGate);
    fireEvent.click(openGate);
    expect(close).toBeCalled();
  })

  it("open toggle is disabled when gate is locked", () => {
    const lock = jest.fn();
    const { getByText } = render(<Controls locked={true} toggleLocked={lock} closed={true} />);
    const openGate = getByText(/open gate/i);
    fireEvent.click(openGate);
    expect(lock).toBeCalledTimes(0);
  })

  it("lock toggle is disabled when gate is open", () => {
    const open = jest.fn();
    const { getByText } = render(<Controls locked={false} toggleClosed={open} closed={false} />);
    const lockGate = getByText(/lock gate/i);
    fireEvent.click(lockGate);
    expect(open).toBeCalledTimes(0);
  }) 
})