function GoodsCard(props) {

    return (
        <div className="good">
            <img className="goodImg" src={props.src} alt="newGood"/>
            <div>
                <div className="goodName">&#182;  {props.name}</div>
                <div className="cost">Cost: {props.cost} grn</div>
            </div>
        </div>
    );
}

export default GoodsCard;
