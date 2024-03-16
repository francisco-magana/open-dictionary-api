import WordTypeDivider from "./WordTypeDivider";
import { MeaningInterface, DefinitionInterface } from "../interfaces/dictionary-interfaces";

export default function Meaning({partOfSpeech, definitions}: MeaningInterface) {
    return(
        <div>
            <div className='mb-5'>
                <WordTypeDivider type={partOfSpeech}/>
            </div>
            <h3 className="text-2xl font-bold">Meaning</h3>
            <ul className="mt-5 list-disc text-green-500">
                {
                    definitions.map((definition: DefinitionInterface, index: number) => {
                      return (
                        <li key={index}>
                            <span className="text-black font-times text-xl">{definition.definition}</span>
                        </li>
                      )
                    })
                }
            </ul>
        </div>
    )
}