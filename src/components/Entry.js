import './Entry.scss';

function Entry(props) {
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

export default Entry;
