import SkyhopButton from '../../components/Button/Button';

const meta = {
    title: "Atoms/SkyhopButton",
    component: SkyhopButton,
    tags: ['autodocs']
}

export default meta;


export const Primary = () => (
    <SkyhopButton label="Book Flight" variant="contained" />
)

export const Secondary = () => (
    <SkyhopButton label="Secondary" color="secondary" variant="contained" />
)

export const Available = () => (
    <SkyhopButton label="Available" color="success" variant="outlined" />
)

export const SoldOut = () => (
    <SkyhopButton label="Sold Out" color="error" variant="outlined" disabled />
)

export const Warning = () => (
    <SkyhopButton label="Alert" color="warning" variant="text" />
)

    