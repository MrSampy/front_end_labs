function Image(props) {

    return (
        <img className={props.className} src={props.src}  alt={props.alt} style={{ width: props.width ? props.width : 800}}/>
    );
}

export default Image;
