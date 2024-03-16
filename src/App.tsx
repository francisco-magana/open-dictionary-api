import { useState } from 'react';
import './App.css'
import Meaning from './components/Meaning';
import Searchbar from './components/Searchbar';
import Notice from './components/Notice';
import Word from './components/Word';
import { DictionaryApiResponseInterface, MeaningInterface, NoticeInterface } from "./interfaces/dictionary-interfaces";
import { FaBook } from "react-icons/fa";

function App() {

  const [noticeText, setNoticeText] = useState<NoticeInterface>({title: 'Go to the search bar', description: 'Write the word that you want to define.'})
  const [wordNotFound, setWordNotFound] = useState<boolean>(true);
  const [response, setResponse] = useState<DictionaryApiResponseInterface>({
    word: '',
    phonetic: '',
    meanings: []
  });

  const searchWord = async (word: string) => {
    const apiResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await apiResponse.json();
    if (apiResponse.status === 404) {
      setWordNotFound(true)
      setNoticeText({
        title: "Sorry!",
        description: "We can't found the word that you was searching for"
      })
      return false;
    }
    setWordNotFound(false)
    setResponse({
      word,
      phonetic: data[0].phonetics[2]?.text || data[0].phonetic,
      meanings: data[0].meanings
    })
  }

  return (
    <div className='p-5 mb-5 mx-2'>
      <div className='flex items-center mb-5'>
        <FaBook className='text-5xl text-slate-600'/>
        <span className='text-2xl ml-2 font-bold'>Open Dictionary</span>
      </div>
      <Searchbar onSearch={searchWord}/>
      {
        wordNotFound ? (
          <Notice title={noticeText.title} description={noticeText.description}/>
        ) : (
          <>
            <div className='mt-10'>
              <Word word={response.word} phonetic={response.phonetic}/>
            </div>
              {
                response.meanings.map((meaning: MeaningInterface, index: number) => {
                  return (
                    <div className='mt-10' key={index}>
                      <Meaning partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} synonyms={[]} antonyms={[]}/>
                    </div>
                  )
                })
              }
          </>
        )
      }
    </div>
  )
}

export default App
