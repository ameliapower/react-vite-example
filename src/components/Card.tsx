interface CardProps {
    header: string;
    body: string[];
}

function Card({header, body}: CardProps){
    return(
        <div className="card">
            <h3>{header}</h3>
            {body.map(para => <p>{para}</p>)}
        </div>
    )
}

export default Card;