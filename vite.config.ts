import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default (mode: string) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }; // process env support
    return defineConfig({
        plugins: [
            react(),
            tsconfigPaths(),
            reactSvgPlugin({
                defaultExport: 'component',
            }),
        ],
        define: {
            'process.env': JSON.stringify(process.env), // process env support
        },
    });
};
