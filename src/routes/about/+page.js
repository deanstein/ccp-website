import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.about.title,
		description: pageMeta.about.description,
		openGraph: {
			title: pageMeta.about.title,
			description: pageMeta.about.description,
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
	return { pageMetaTags };
};
