

const Meaning = ({ meaning }) => {
    console.log(meaning)
    return (
        <div className="Meaning">
            <h3>
                {meaning.partOfSpeech}
            </h3>
            {meaning.definitions.map((definition, i) => {
                return (
                    <div key={i}>
                        <p>
                            {definition.definition}
                            <br />
                            <em>
                                {definition.example}
                            </em>
                        </p>
                    </div>
                )
            })}

        </div>
    )

}

export default Meaning;