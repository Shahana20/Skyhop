import { Typography, TypographyProps } from "@mui/material";

export interface SkyHopTypographyProps  {
    children: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';

}
const SkyhopTypography = (props: SkyHopTypographyProps) => {
    return(
        <Typography {...props}/>
    );
}

export default SkyhopTypography;