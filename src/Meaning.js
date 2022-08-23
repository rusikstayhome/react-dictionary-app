

const Meaning = ({ meaning }) => {
    console.log(meaning)
    return (
        <div className="Meaning">
            <p><strong>Synonyms: </strong>
                {meaning.synonyms.map((synonym, i) => {
                    return synonym + ', ';
                })}</p>
            <h3>
                {meaning.partOfSpeech}
            </h3>
            {meaning.definitions.map((definition, i) => {
                return (
                    <div key={i}>
                        <p>
                            <strong>Definition:</strong>{definition.definition}
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