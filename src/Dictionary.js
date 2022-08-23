import { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

const Dictionary = () => {
    let [keyword, setKeyword] = useState('');

    const handleResponse = (res) => {
        console.log(res);
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
        </div>
    )
}

export default Dictionary;