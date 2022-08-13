import Title from './Title';
import Links from './Links';
import './App.scss';

function App() {
    return (
        <div id="bearable">
            <div id="title-container">
                <Title />
            </div>
            <div id="links-container">
                <Links />
            </div>
        </div>
    );
}

export default App;
