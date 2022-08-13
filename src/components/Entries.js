import { entryData } from '../data/entryData.js';
import Entry from './Entry';
import './Entries.scss';

function Entries() {
    var entries = entryData.map((entry, index) => 
        <Entry data={entry} key={index} />
    );

    return (
        <div id="entries">
            {entries}
        </div>
    );
}

export default Entries;
