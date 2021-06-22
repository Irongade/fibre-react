import React from 'react';
import {screen, render} from "@testing-library/react";
import JustificationSection from '../components/JustificationSection';
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

    render(<JustificationSection />)

    expect(screen.getByText('Fintech')).toBeInTheDocument()
    expect(screen.getByText('Pay your bills, manage your expenses')).toBeInTheDocument()


})