import { Stack, Paper } from "@mui/material";
import { SkyhopButton, SkyhopTextField } from "@skyhop/ui-core";

export interface FlightSearchProps {
    label: string,
    onSearch: () => void
}

const FlightSearch = ({onSearch, label} : FlightSearchProps) => {
    return(
        <Paper elevation={3} sx={{ p: 3}}>
            <Stack direction={{ xs: "column", md: "row" }} alignItems={"center"} gap={2}>
                <SkyhopTextField label="From" placeholder="City or Airport"/>
                <SkyhopTextField label="To" placeholder="Where to?"/>
                <SkyhopButton label={label} onClick={onSearch}/>
            </Stack> 
        </Paper>
    )
}

export default FlightSearch;