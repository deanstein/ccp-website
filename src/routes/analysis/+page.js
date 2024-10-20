import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.analysis.title,
		description: pageMeta.analysis.description,
		openGraph: {
			title: pageMeta.analysis.title,
			description: pageMeta.analysis.description,
			images: [
				{
					url: pageMeta.analysis.image,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
