export default function Word({word, phonetic}: WordProps) {

    const capitalize = (text: string): string => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return(
        <div>
            <h1 className='text-7xl font-times'>{capitalize(word)}</h1>
            <h2 className='text-3xl text-green-500 mt-3'>{phonetic}</h2>
        </div>
    )
}

interface WordProps{
    word: string;
    phonetic: string;
}
