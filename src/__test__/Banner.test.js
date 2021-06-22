import React from 'react';
import {screen, render} from "@testing-library/react";
import BannerSection from '../components/BannerSection';

it('renders correctly', () => {
    const {queryByTestId} = render(<BannerSection />)

    expect(screen.getByText('Save better, Invest wisely, Loan easy')).toBeInTheDocument()
    expect(screen.getByText('Earn up to 15% interest on savings')).toBeInTheDocument()
    expect(screen.getByText('Earn higher interest, better yields on your investment')).toBeInTheDocument()

    expect(queryByTestId('banner-header')).toBeTruthy();

})