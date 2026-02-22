import SkyhopFormField from "./FormField";
import {getByLabelText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Skyhop formfield tests', () => {
    it('should render the custom label and the input', () => {
        render(<SkyhopFormField label="Origin City" placeholder="e.g. LHR" id="origin-input" />);
        expect(screen.getByText('Origin City')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('e.g. LHR')).toBeInTheDocument();
    })
    it('should fire the onChange callback when the user types', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();
        render(<SkyhopFormField id="dest" label="Destination" onChange={handleChange} />)
        const input = screen.getByLabelText(/Destination/i)
        await user.type(input, 'London');
        expect(handleChange).toHaveBeenCalledTimes(6);
    })
    it('should render helper text when error occurs', () => {
        render(<SkyhopFormField id="origin" label="From" error={true} helperText="Error occured"/>)
        const helperText = screen.getByText(/Error occured/i)
        expect(helperText).toBeInTheDocument();
    })
})