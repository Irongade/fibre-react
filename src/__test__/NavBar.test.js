import React from 'react';
import {screen, render} from "@testing-library/react";
import NavBar from '../components/NavBar';

it('renders correctly', () => {
    const {queryByTestId, getByText} = render(<NavBar />)

    expect(queryByTestId('navbar-container')).toBeTruthy();
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Blog')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();

})