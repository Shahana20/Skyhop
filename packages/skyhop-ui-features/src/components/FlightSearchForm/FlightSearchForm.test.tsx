import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FlightSearchForm from './FlightSearchForm';


describe('Flight search form tests', () => {

    const mockOnSubmit = jest.fn();
    let user: ReturnType<typeof userEvent.setup>;

    beforeEach(() => {
        mockOnSubmit.mockClear(); 
        user = userEvent.setup();
    });

    it('should submit the form with origin and destination values', async () => {
        render(<FlightSearchForm onSubmit={mockOnSubmit} />)
        await user.type(screen.getByLabelText(/origin/i), 'LHR');
        await user.type(screen.getByLabelText(/destination/i), 'JFK');
        await user.click(screen.getByRole('button', { name: /search/i }));
        expect(mockOnSubmit).toHaveBeenCalled();
    })

    it('should not submit the form if validation errors exist', async () => {
        render(<FlightSearchForm onSubmit={mockOnSubmit} />)
        await user.click(screen.getByRole('button', { name: /search/i }));
        expect(mockOnSubmit).not.toHaveBeenCalled();
        expect(screen.getByText(/origin is required/i)).toBeInTheDocument();
    })
})