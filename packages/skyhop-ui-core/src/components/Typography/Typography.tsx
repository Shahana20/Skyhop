import { Typography, TypographyProps } from "@mui/material";

export interface SkyHopTypographyProps extends TypographyProps{
    children?: React.ReactNode,
    variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption',
    htmlFor?: string,
    label?: string

}
const SkyhopTypography = (props: SkyHopTypographyProps) => {
    return(
        <Typography {...props}/>
    );
}

export default SkyhopTypography;