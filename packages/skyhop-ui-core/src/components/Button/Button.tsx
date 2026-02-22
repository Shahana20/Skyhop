import { Button, ButtonProps } from "@mui/material";
import { Children } from "react";

export interface SkyHopButtonProps extends ButtonProps {
    label?: string;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
}

const SkyhopButton = ({label, children, variant='contained', color='primary', ...props}: SkyHopButtonProps) => {
    return(
        <Button variant={variant} color={color} {...props}>
            {label || children}
        </Button>
    )
}

export default SkyhopButton;