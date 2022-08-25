import { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

import './Dictionary.css';

const Dictionary = ({ defaultKeyword }) => {
    let [keyword, setKeyword] = useState(defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    const handleDictionaryResponse = (res) => {
        console.log(res.data[0]);
        setResults(res.data[0]);
    }

    const pexelsHandleResponse = (res) => {
        setPhotos(res.data.photos)
    }

    const search = () => {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleDictionaryResponse)

        let pexelsApiKey = `563492ad6f9170000100000127f0273437eb48ff93b80193bb451551`;
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, { headers: { "Authorization": `Bearer ${pexelsApiKey}` } }).then(pexelsHandleResponse)
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
                <Photos photos={photos} />

            </div>
        )
    } else {
        load();
        return 'Loading...'
    }

}

export default Dictionary;