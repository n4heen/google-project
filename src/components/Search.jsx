import React, { useState } from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState('')
    const history = useHistory()



    const search = e => {
        e.preventDefault()
    }



    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    );
}

export default Search;

