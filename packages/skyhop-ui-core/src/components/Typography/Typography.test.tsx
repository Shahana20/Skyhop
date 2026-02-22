import {render, screen} from '@testing-library/react';
import SkyhopTypography from './Typography';

describe('Skyhop Typography', () => {
    it("should render correct semantic html tag", () => {
        render(<SkyhopTypography variant='h1'>Heading</SkyhopTypography>)
        const headingElement = screen.getByText(/heading/i);
        expect(headingElement.tagName).toBe('H1');
    })
}) 
