import { FC } from 'react';
import { useStitchTheme } from 'contexts/ThemeContext';

const HomePage: FC = () => {
    const { currentTheme, toggleTheme } = useStitchTheme();

    return (
        <div>
            <p>Hello</p>
            <button onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                toggle {currentTheme === 'light' ? 'dark' : 'light'}
            </button>
        </div>
    );
};

export default HomePage;
