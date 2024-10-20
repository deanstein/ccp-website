import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.exhibit.title,
		description: pageMeta.exhibit.description,
		openGraph: {
			title: pageMeta.exhibit.title,
			description: pageMeta.exhibit.description,
			images: [
				{
					url: pageMeta.exhibit.image,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
