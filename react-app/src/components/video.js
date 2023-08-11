import '../components/video.css'

function Video(props) {
    const { title } = props
    let bg = 'dark'
    return (
        <>
            <img src="https://placebeard.it/640x360/any"></img>
            <div className={bg}>{title}</div>
        </>

    )

}

export default Video;