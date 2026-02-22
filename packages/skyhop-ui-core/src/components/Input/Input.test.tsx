import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkyhopTextField from "./Input";



describe('Input field tests', () => {
    it('should capture user input correctly', async () => {
        const handleChange = jest.fn()
        const user = userEvent.setup()
        const {getByLabelText} = render(<SkyhopTextField label="From" onChange={handleChange}/>)
        const input = getByLabelText(/from/i);
        await user.type(input, 'London');

        expect(handleChange).toHaveBeenCalledTimes(6);

    })
    it('should render helper text when error occurs', () => {
        render(<SkyhopTextField label="From" error={true} helperText="Error occured"/>)
        const helperText = screen.getByText(/Error occured/i)
        expect(helperText).toBeInTheDocument();
    })
    it('should handle gracefully when onChange is undefined', async () => {
        const user = userEvent.setup();
        const { getByLabelText } = render(<SkyhopTextField label="From" onChange={undefined} />);
        const input = getByLabelText(/from/i);
        await user.type(input, 'London');

        expect(input).toBeInTheDocument(); 
    });

});