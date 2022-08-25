import './Meaning.css'

const Meaning = ({ meaning }) => {

    return (
        <div className="Meaning">

            {meaning.synonyms.length ?
                <strong>Synonyms: </strong> : null
            }
            <ul>
                {meaning.synonyms.map((synonym, i) => {
                    return <li key={i}>{synonym} </li>
                })}</ul>
            <h3>
                {meaning.partOfSpeech}
            </h3>
            {meaning.definitions.map((definition, i) => {
                return (
                    <div key={i}>
                        <p>
                            <strong>Definition: </strong>{definition.definition}
                            <br />

                            {definition.example ? (
                                <em>
                                    <strong>Example: </strong>
                                    {definition.example}
                                    <br />
                                </em>

                            ) : null}

                        </p>

                    </div>
                )
            })}

        </div>
    )

}

export default Meaning;