import SkyhopTypography from "../../components/Typography/Typography";


const meta = {
    title: "Atoms/SkyhopTypography",
    component: SkyhopTypography,
    tags: ['autodocs']
}

export default meta;

export const h1 = () =>(
    <SkyhopTypography variant="h1">H1 text</SkyhopTypography>
)

export const h2 = () =>(
    <SkyhopTypography variant="h2">H2 text</SkyhopTypography>
)

export const h3 = () =>(
    <SkyhopTypography variant="h3">H3 text</SkyhopTypography>
)

export const body1 = () => (
    <SkyhopTypography variant="body1">Body1 text</SkyhopTypography>
)

export const body2 = () => (
    <SkyhopTypography variant="body2">Body2 text</SkyhopTypography>
)

export const caption = () => (
    <SkyhopTypography variant="caption">caption</SkyhopTypography>
)