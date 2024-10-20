import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.simulation.title,
		description: pageMeta.simulation.description,
		openGraph: {
			title: pageMeta.simulation.title,
			description: pageMeta.simulation.description,
			images: [
				{
					url: pageMeta.simulation.image,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
