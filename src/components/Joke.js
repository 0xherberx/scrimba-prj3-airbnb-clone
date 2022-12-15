export default function Joke(props) {
    return (
        <div>
            <img src={props.setup} alt="image"></img>
            <h1>{props.punchline}</h1>
        </div>
    )
}