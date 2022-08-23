

const Phonetics = ({ phonetic }) => {
    console.log(phonetic);
    return (
        <div className="Phonetic">
            <a href={phonetic.audio} target='_blank'>Listen</a>
            <br />
            {phonetic.text}
        </div>
    )
}

export default Phonetics;