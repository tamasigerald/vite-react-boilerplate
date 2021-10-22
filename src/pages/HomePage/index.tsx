import { FC } from 'react';
import { useStitchTheme } from 'contexts/ThemeContext';
import Layout from '@/containers/Layout';
import Button from '@/components/Button';

const HomePage: FC = () => {
    const { currentTheme, toggleTheme } = useStitchTheme();

    return (
        <Layout>
            <p>Hello</p>
            <Button buttonColor={'blue'} onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                toggle {currentTheme === 'light' ? 'dark' : 'light'}
            </Button>
        </Layout>
    );
};

export default HomePage;
