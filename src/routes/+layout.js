import { pageMeta } from '$lib/shared-strings.js';

export const prerender = true;

export const load = ({ url }) => {
	// define meta tags that will apply site-wide
	// these may be overridden with +page.js next to any +page.svelte
	const baseMetaTags = Object.freeze({
		title: pageMeta.home.title,
		titleTemplate: pageMeta.titleTemplate,
		description: pageMeta.home.description,
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			title: pageMeta.home.title,
			description: pageMeta.home.description,
			images: [
				{
					url: pageMeta.home.image,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { baseMetaTags };
};
