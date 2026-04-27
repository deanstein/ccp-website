import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: pageMeta.saveCivicCenter.title,
		description: pageMeta.saveCivicCenter.description,
		openGraph: {
			title: pageMeta.saveCivicCenter.title,
			description: pageMeta.saveCivicCenter.description,
			images: [
				{
					url: pageMeta.saveCivicCenter.image,
					width: 800,
					height: 600,
					type: 'image/png'
				}
			]
		}
	});
	return { pageMetaTags };
};
