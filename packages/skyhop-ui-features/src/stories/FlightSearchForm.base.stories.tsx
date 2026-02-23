import FlightSearchForm from "../components/FlightSearchForm/FlightSearchForm";


const meta = {
    title: "Organisms/FlightSearchForm",
    component: FlightSearchForm,
};

export default meta;

export const Default = () => (
    <FlightSearchForm 
        onSubmit={(data) => {
            console.log("Form Submitted Data:", data);
            alert(`Searching for flights from ${data.origin} to ${data.destination}! ✈️`);
        }} 
    />
);