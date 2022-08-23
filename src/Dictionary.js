import { useState } from 'react';
import axios from 'axios';
import Results from './Results';

import './Dictionary.css';

const Dictionary = () => {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState(null);

    const handleResponse = (res) => {
        console.log(res.data[0]);
        setResults(res.data[0]);
    }

    const search = (e) => {
        e.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    )
}

export default Dictionary;