import 'reset.css';
import GlobalProvider from './contexts/GlobalProvider';
import GlobalStyles from './styles/globalStyles';

function App() {
    GlobalStyles();
    return <GlobalProvider></GlobalProvider>;
}

export default App;
