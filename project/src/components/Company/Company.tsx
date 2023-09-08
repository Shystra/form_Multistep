import styles from './Company.module.css';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Company = ({onNext, onBack}: Props) => {
    return (
        <div>
            <h1>Company</h1>
            <h1>Company</h1>
            <h1>Company</h1>
        </div>
    )
};