import { Stack } from "@mui/material";
import SkyhopSpinner from "../../components/Loader/CircularLoader"

const meta = {
    title: "Atoms/SkyhopSpinner",
    component: SkyhopSpinner,
    tags: ['autodocs']
}

export default meta;

export const defaultLoader = () => (
    <SkyhopSpinner/>
)

export const colored = () => (
    <Stack direction="row" spacing={2} sx={{ p: 4 }}>
        <SkyhopSpinner color="primary"/>
        <SkyhopSpinner color="secondary"/>
        <SkyhopSpinner color="success"/>
    </Stack>
)

export const sizes = () => (
    <Stack direction="row" spacing={2} sx={{ p: 4 }}>
        <SkyhopSpinner size={20}/>
        <SkyhopSpinner size={60}/>
    </Stack>
)