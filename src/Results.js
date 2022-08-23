import Meaning from "./Meaning"

const Results = ({ results }) => {
    console.log(results)
    if (results) {
        return (
            <div className="Results">
                <h2>{results.word}</h2>
                {results.meanings.map((meaning, i) => {
                    return <div key={i}>
                        <Meaning meaning={meaning} />
                    </div>
                })}
            </div>
        )
    } else {
        return null
    }
}


export default Results;