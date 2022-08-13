import './Entry.scss';

function Entry(props) {
    var links = props.data.links.map((link, index) =>
        <a href={link.link} className="flex-element entry-link box" key={link.label}>
            <p>
                {link.label}
            </p>
        </a>
    );

    return (
        <div className="flex-element entry box">
            <a href={(props.data.links[0]).link} tabindex="-1">
                <h3 className="entry-title">
                    {props.data.title}
                </h3>
                <p className="entry-subtitle">
                    {props.data.subtitle}
                </p>
            </a>
            <div className="flex entry-links">
                {links}
            </div>
        </div>
    );
}

export default Entry;
