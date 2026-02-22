import {fireEvent, render, screen} from '@testing-library/react';
import SkyhopButton from './Button';

describe('Skyhop button', () => {

    it("should render correct label", () => {
        render(<SkyhopButton label="Test"/>)
        expect(screen.getByText(/Test/i)).toBeInTheDocument();
    })

    it("should fire onClick callback when clicked", () => {
        const handleClick = jest.fn();

        render(<SkyhopButton onClick={handleClick} label='Click Me'/>);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it("should render disabled button when disabled prop is set to true", () => {
        const handleClick = jest.fn();

        render(<SkyhopButton onClick={handleClick} label='Click Me' disabled/>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })

    it("should not fire onClick callback when button is disabled", () => {
        const handleClick = jest.fn();

        render(<SkyhopButton onClick={handleClick} label='Click Me' disabled={true}/>);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    })

    it("should handle onClick callback gracefully when its undefined", () => {
        const handleClick = undefined;

        render(<SkyhopButton onClick={handleClick} label='Click Me'/>);
        const buttonElement = screen.getByText('Click Me');
        expect(() => fireEvent.click(buttonElement)).not.toThrow();
    })
    
})
