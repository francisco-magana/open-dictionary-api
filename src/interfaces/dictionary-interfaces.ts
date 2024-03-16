export interface DictionaryApiResponseInterface {
    word: string;
    phonetic: string;
    meanings: MeaningInterface[]
}

export interface MeaningInterface {
    partOfSpeech: string
    definitions: DefinitionInterface[]
    synonyms: string[]
    antonyms: string[]
}

export interface DefinitionInterface {
    definition: string
    synonyms: string[]
    antonyms: string[]
}

export interface NoticeInterface {
    title: string;
    description: string;
}