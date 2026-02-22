import { CircularProgress } from "@mui/material";

export interface SkyhopSpinnerProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    size?: number | string
}

const SkyhopSpinner = ({color='primary', ...props}: SkyhopSpinnerProps) => {
    return(
        <CircularProgress color={color} {...props}/>
    );
}

export default SkyhopSpinner;