import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route } from '../../vendor/tightenco/ziggy'; 

const appName = import.meta.env.VITE_APP_NAME || 'Solarkon';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
// Change it to this:
        title: (title) => title ? `${title} - ${appName}` : appName,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        setup: ({ App, props }) => {
            // Set up Ziggy for SSR so route() works
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);