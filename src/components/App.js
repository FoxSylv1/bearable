import Title from './Title';
import Entries from './Entries';
import './App.scss';

function App() {
    return (
        <div id="bearable">
            <div id="title-container">
                <Title />
            </div>
            <div id="entries-container">
                <Entries />
            </div>
        </div>
    );
}

export default App;
