import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
	Sentry.init({
		dsn: 'https://02d6fdf76eba4be6aadc853ac046f09b@o514314.ingest.sentry.io/5617579',
		integrations: [new Integrations.BrowserTracing()],

		// We recommend adjusting this value in production, or using tracesSampler
		// for finer control
		tracesSampleRate: 1.0,
	});
}

export default {
	init,
};
