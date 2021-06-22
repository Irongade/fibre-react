import React from 'react';
import {screen, render} from "@testing-library/react";
import Footer from '../components/Footer';

it('renders correctly', () => {
    const {getByText} = render(<Footer />)

    expect(screen.getByText('Save better, Invest wisely, Loan easy')).toBeTruthy()

    expect(getByText('Contact Us')).toBeTruthy();
    expect(getByText('FAQs')).toBeTruthy();
    expect(getByText('Product Brief')).toBeTruthy();
    expect(getByText('Terms and Conditions')).toBeTruthy();

})