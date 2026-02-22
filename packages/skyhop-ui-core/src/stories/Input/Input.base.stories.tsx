import { Stack } from '@mui/material';
import SkyhopTextField from '../../components/Input/Input';

const meta = {
    title: "Atoms/SkyhopInput",
    component: SkyhopTextField,
    tags: ['autodocs']
}

export default meta;


export const SearchForm = () => (
    <Stack direction="row" spacing={2} sx={{ p: 4 }}>
        <SkyhopTextField label="From" placeholder="e.g. London" />
        <SkyhopTextField label="To" placeholder="e.g. New York" />
    </Stack>
)

export const ErrorState = () => (
    <SkyhopTextField 
        label="Destination" 
        error 
        helperText="This field is required" 
        defaultValue="Unknown City"
    />
);