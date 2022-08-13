import './Link.scss';

function Link(props) {
    return (
        <div className="entry box">
            <h3>
                {props.data.title}
            </h3>
            <p>
                {props.data.subtitle}
            </p>
        </div>
    );
}

export default Link;
