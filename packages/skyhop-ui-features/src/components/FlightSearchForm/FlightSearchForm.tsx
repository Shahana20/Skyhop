import { Box, FormControl, Stack } from '@mui/material';
import { SkyhopButton, SkyhopFormField } from '@skyhop/ui-core';
import { ChangeEvent, useState } from 'react';

export interface FlightSearchFormProps {
    onSubmit: (data: { origin: string, destination: string }) => void;
}

const FlightSearchForm = ({...props} : FlightSearchFormProps) => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [errors, setErrors] = useState({ origin: '', destination: '' });

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        let isValid = true;
        const newErrors = { origin: '', destination: '' };

        if (!origin.trim()) {
            newErrors.origin = 'Origin is required';
            isValid = false;
        }
        if (!destination.trim()) {
            newErrors.destination = 'Destination is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            props.onSubmit({ origin, destination });
        }
    };
    return(
        <FormControl>
            <Box onSubmit={handleSubmit} component="form">
                <Stack direction="row" spacing={2} alignItems="flex-start" gap={2}>
                    <SkyhopFormField id="origin" label="Origin" value={origin} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setOrigin(e.target.value); 
                            if (errors.origin) setErrors({ ...errors, origin: '' });}} 
                        error={!!errors.origin} 
                        helperText={errors.origin}/>
                    <SkyhopFormField id="destination" label="Destination" value={destination} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setDestination(e.target.value); if (errors.destination) setErrors({ ...errors, destination: '' });}} 
                        error={!!errors.destination} 
                        helperText={errors.destination}/>
                    <Stack spacing={1}>
                        <Box sx={{ height: '28px' }} /> 
                        <SkyhopButton type="submit" label="Search" />
                    </Stack>
                </Stack>
            </Box>
        </FormControl>
    );
}

export default FlightSearchForm;