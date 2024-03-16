export default function WordTypeDivider({ type }: WordType) {
    return (
        <div className='flex items-center'>
            <span className='font-bold italic text-xl'>{type}</span>
            <hr className="w-full mx-5 border-gray-300" />
        </div>
    )
}

interface WordType {
    type: string;
}