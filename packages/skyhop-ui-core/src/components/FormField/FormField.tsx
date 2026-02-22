import { FormControl, Stack } from "@mui/material";
import SkyhopTextField from "../Input/Input";
import SkyhopTypography from "../Typography/Typography";

export interface SkyhopFormFieldProps {
    id: string,
    label: string,
    placeholder?: string,
    onChange?: () => void,
    error?: boolean,
    helperText?: string
}

const SkyhopFormField = ({ id, label, placeholder, ...rest }: SkyhopFormFieldProps) => {
    return(
        <FormControl fullWidth>
            <Stack spacing={1}>
                <SkyhopTypography variant="body2" component="label" htmlFor={id}>
                    {label}
                </SkyhopTypography>
                <SkyhopTextField 
                    id={id} 
                    placeholder={placeholder} 
                    {...rest} 
                />
            </Stack>
        </FormControl>
    );
}

export default SkyhopFormField;