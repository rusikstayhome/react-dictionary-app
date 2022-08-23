import { useState } from 'react';
import './Dictionary.css';

const Dictionary = () => {
    let [keyword, setKeyword] = useState('');

    const search = (e) => {
        e.preventDefault();
        alert(`searching for ${keyword} definition`)
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