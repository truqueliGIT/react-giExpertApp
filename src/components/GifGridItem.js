
export const GifGridItem = ({title, url}) => { // debido a que las props son un objeto se desestructura
    // console.log({id, title, url});
    return (
        <div className="card animate__animated animate__fadeInUp animate__slow">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
