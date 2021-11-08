import { FC } from 'react';
import { useStitchTheme } from 'contexts/ThemeContext';
import Layout from 'containers/layout/Layout';
import Button from 'components/Button';

const HomePage: FC = () => {
    const { currentTheme, toggleTheme } = useStitchTheme();

    return (
        <Layout>
            <p>Hello</p>
            <Button onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                toggle {currentTheme === 'light' ? 'dark' : 'light'}
            </Button>
        </Layout>
    );
};

export default HomePage;
