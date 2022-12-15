import photo_grid from "../photo_grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={photo_grid} alt="photo_grid"></img>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    )
}