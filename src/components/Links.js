import { entries } from '../data/entries.js';
import Link from './Link';
import './Links.scss';

function Links() {
    var links = entries.map((entry, index) => 
        <Link data={entry} key={index} />
    );

    return (
        <div id="links">
            {links}
        </div>
    );
}

export default Links;
