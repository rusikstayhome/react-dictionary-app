import './Phonetics.css'

const Phonetics = ({ phonetic }) => {
    console.log(phonetic);
    return (
        <div className="Phonetic">
            <a href={phonetic.audio} target='_blank' rel='noreferrer'>Listen</a>

            <span className="text">{phonetic.text}</span>
        </div>
    )
}

export default Phonetics;