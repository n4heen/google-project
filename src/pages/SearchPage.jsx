import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import UseGoogleSearch from '../useGoogleSearch';
const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue()
    const { data } = UseGoogleSearch(term)

    console.log(data)

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    );
}

export default SearchPage;
