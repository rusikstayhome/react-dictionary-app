import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import './Results.css';

const Results = ({ results }) => {

    if (results) {
        return (

            <div className="Results">
                <section>
                    <h2>{results.word}</h2>
                    {results.phonetics.map((phonetic, i) => {
                        return (
                            <div key={i}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        )
                    })}
                </section>
                {
                    results.meanings.map((meaning, i) => {
                        return <section key={i}>
                            <Meaning meaning={meaning} />
                        </section>
                    })
                }
            </div >
        )
    } else {
        return null
    }
}


export default Results;