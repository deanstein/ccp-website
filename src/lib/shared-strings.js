import imageAttributesCollection from '../image-attributes-collection';

export const sharedStyles = {
	overlayColorDarkRgba: 'rgba(50, 50, 50, 0.8)'
};

export const pageMeta = {
	get titleTemplate() {
		return '%s | ' + this.home.title;
	},
	home: {
		title: 'The Cinderella City Project',
		description:
			'An immersive journey into an unconvential mid-century "city under a roof" destination which failed in less than 30 years',
		image: imageAttributesCollection.ccp_composite_2.imgSrc,
		url: '/'
	},
	about: {
		title: 'About',
		description: 'About the Cinderella City Project',
		url: '/about'
	},
	analysis: {
		title: 'Mall Analysis',
		description: 'Analyzing the good, bad, and ugly of Cinderella City Mall',
		image: imageAttributesCollection.plan_60s70s_1.imgSrc,
		url: '/analysis'
	},
	contact: {
		title: 'Contact',
		description: 'Contact the Cinderella City Project',
		url: '/contact'
	},
	exhibit: {
		title: 'Exhibit',
		description: 'About the Cinderella City exhibit at the Englewood History Museum',
		image: imageAttributesCollection.ccp_exhibit_2.imgSrc,
		url: '/exhibit'
	},
	history: {
		title: 'History of Cinderella City Mall',
		description: 'The full history of Cinderella City Mall',
		image: imageAttributesCollection.rose_mall_60s70s_construction_1.imgSrc,
		url: '/history'
	},
	simulation: {
		title: 'Simulation',
		description: 'About the Cinderella City Simulation',
		image: imageAttributesCollection.ccp_blue_mall_60s70s_1.imgSrc,
		url: '/simulation'
	}
};
