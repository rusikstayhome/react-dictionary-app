import { useState } from 'react';
import axios from 'axios';
import Results from './Results';

import './Dictionary.css';

const Dictionary = ({ defaultKeyword }) => {
    let [keyword, setKeyword] = useState(defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    const handleResponse = (res) => {
        console.log(res.data[0]);
        setResults(res.data[0]);
    }

    const search = () => {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        search();
    }

    const load = () => {
        setLoaded(true);
        search();
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search"
                            defaultValue={keyword}
                            onChange={handleKeywordChange} />
                        <div className="hint">
                            suggested words: yoga, wine, apple, sunset...
                        </div>
                    </form>
                </section>
                <Results results={results} />

            </div>
        )
    } else {
        load();
        return 'Loading...'
    }

}

export default Dictionary;