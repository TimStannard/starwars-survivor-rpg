// types
import { charType } from '../../types/char';

type Props = {
    changePage: (input: string) => void
    // characterData: charType
    setCharacterData: ({ }) => void
};

export const GameWindow = ({ changePage, setCharacterData }: Props) => {
    console.log(changePage);
    console.log(setCharacterData);

    return (
        <div>GameWindow</div>
    )
}
