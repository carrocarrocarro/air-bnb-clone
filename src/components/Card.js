export default function Card(props) {

    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} alt="Images of activity" className="card--image" />
            <div className="card-stats">
                <img src="images/star.png" alt="Star" />
                <span>{props.item.stats.raiting} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}