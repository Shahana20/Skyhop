import type { Story } from "@ladle/react";
import FlightSearch, {FlightSearchProps} from "../components/FlightSearch/FlightSearch";

export const SearchBar: Story<FlightSearchProps> = (args) => (
  <FlightSearch 
    {...args} 
  />
);

SearchBar.args = {
  label: "Search Flights",
};

SearchBar.argTypes = {
  onSearch: { action: "search-button-clicked" },
};