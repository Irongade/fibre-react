import React from 'react';
import {screen, render} from "@testing-library/react";
import TestimonySection from '../components/TestimonySection';
import {useInView} from "react-intersection-observer";

it('renders correctly', () => {
    // mock intersection functions
    const observe = jest.fn();
    const unobserve = jest.fn();
    const disconnect = jest.fn();

    window.IntersectionObserver = jest.fn(function() {
        this.observe = observe;
        this.unobserve = unobserve;
        this.disconnect = disconnect;
    });

    const {queryByTestId} = render(<TestimonySection />)

    expect(queryByTestId('partner-logos')).toBeTruthy()


})