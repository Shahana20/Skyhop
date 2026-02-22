import { render, screen } from "@testing-library/react";
import SkyhopSpinner from "./CircularLoader";

describe('Skyhop loader tests', () => {
    it('should render circular loader correctly', () => {
        render(<SkyhopSpinner/>);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    })
})