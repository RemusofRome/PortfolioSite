import data from "../assets/data"

const Cards = data.data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
               
            />)})


function Card (props) {
    return (
        <a href={props.url} target="_blank" id="cards">
            <div>
                <h3>{props.title}</h3>
                <img id="image" src={props.image}></img>
            </div>
            <h3>{props.subtext}</h3>
        </a>
       
    )
}


export default function MyWork () {
    return (
        Cards 
    )
}