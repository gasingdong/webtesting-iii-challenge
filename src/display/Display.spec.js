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
    expect(getByText(/locked/i));
  })

  it("displays open and unlocked props", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText(/open/i));
    expect(getByText(/unlocked/i));
  })
})