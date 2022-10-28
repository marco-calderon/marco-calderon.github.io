import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
