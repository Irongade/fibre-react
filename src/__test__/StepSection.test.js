import React from 'react';
import {screen, render} from "@testing-library/react";
import StepSection from '../components/StepSection';

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

    render(<StepSection />)

    expect(screen.getByText('Create a FREE Fintech Account')).toBeInTheDocument()
    expect(screen.getByText('Set your goal')).toBeInTheDocument()
    expect(screen.getByText('Earn Interests')).toBeInTheDocument()


})