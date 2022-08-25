import './Photos.css'

const Photos = ({ photos }) => {
    console.log(photos);
    if (photos) {
        return (
            <section className="Photos">
                <div className="row">
                    {photos.map((photo, i) => {
                        return (
                            <div className="col-4 mb-1" key={i} >
                                <a href={photo.src.original} target='_blank' rel="noreferrer" >
                                    <img src={photo.src.medium} alt="" />
                                </a>
                            </div>
                        )

                    })}
                </div>
            </section>
        )
    } else return null;
}

export default Photos;