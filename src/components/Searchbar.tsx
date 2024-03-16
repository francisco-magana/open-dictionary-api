// En Searchbar.tsx

import React, { useState, FormEvent } from 'react';

interface SearchbarProps {
  onSearch: (term: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {

    const [disabled, setDisabled] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const [hint, setHint] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim().length === 0) {
            setError("You need to type a word")
            return;
        }
        setError('');
        setDisabled(true);
        setHint('Wait a few seconds to search another word')
        setTimeout(() => {
          setDisabled(false);
          setHint('')
        }, 5000)
        onSearch(searchTerm);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input 
            onKeyDown={handleKeyDown} 
            className="p-5 text-xl w-full bg-slate-200 rounded-xl focus:outline-lime-400 focus:ring-0" 
            placeholder="Type a word and press Enter" 
            type="text" 
            onChange={handleChange}
            disabled={disabled}    
        >
        </input>
        <span className='text-red-500 text-xl'>{error}</span>
        <span className='text-lime-600 text-xl'>{hint}</span>
    </form>
    );
};

export default Searchbar;
