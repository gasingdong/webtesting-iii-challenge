import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react";

import Display from './Display';

describe('<Display />', () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("displays closed and locked props", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText(/closed/i));
    expect(getByText(/^locked/i));
  })

  it("displays open and unlocked props", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText(/open/i));
    expect(getByText(/unlocked/i));
  })

  it("uses red-led class for locked or closed", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/^locked/i).classList.contains('red-led')).toBe(true);
  })

  it("uses green-led class for unlocked or open", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
  })
})