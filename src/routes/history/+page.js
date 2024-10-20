import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.history.title,
		description: pageMeta.history.description,
		openGraph: {
			title: pageMeta.history.title,
			description: pageMeta.history.description,
			images: [
				{
					url: pageMeta.history.image,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
