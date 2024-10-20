import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.contact.title,
		description: pageMeta.contact.description,
		openGraph: {
			title: pageMeta.contact.title,
			description: pageMeta.contact.description,
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
