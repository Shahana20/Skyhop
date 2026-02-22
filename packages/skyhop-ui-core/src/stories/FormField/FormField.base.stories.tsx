import SkyhopFormField from "../../components/FormField/FormField";

const meta = {
    title: "Molecules/SkyhopForm",
    component: SkyhopFormField,
    tags: ['autodocs']
}

export default meta;

export const DefaultForm = () => (
    <SkyhopFormField id="destination" label="Destination" placeholder="Enter a city / airport"/>
)

export const ErrorState = () => (
    <SkyhopFormField 
        id="destination"
        label="Destination" 
        error 
        helperText="This field is required" 
    />
);