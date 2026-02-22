import { TextField, TextFieldVariants } from "@mui/material";

export interface SkyHopTextFieldProps {
    label?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    error?: boolean,
    helperText?: string,
    fullWidth?: boolean,
    variant?: TextFieldVariants,
    defaultValue?: string
}
const SkyhopTextField = ({variant = "outlined", ...props}: SkyHopTextFieldProps) => {
    return(
        <TextField variant={variant} {...props}/>
    );
}

export default SkyhopTextField;