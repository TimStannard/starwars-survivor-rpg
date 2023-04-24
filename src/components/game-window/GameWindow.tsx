import { charType } from '../../types/char';

type Props = {
    changePage: (input: string) => void
    characterData: charType
    setCharacterData: (stats: charType) => void
};

export const GameWindow = ({ changePage, characterData, setCharacterData }: Props) => {
    console.log({ characterData });

    return (
        <div>GameWindow</div>
    )
}
