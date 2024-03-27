import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	aerial_60s_70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './aerials/aerial-60s70s-1.jpg',
		imgAlt: 'Cinderella City as it appeared in 1968.',
		imgCaption: 'Cinderella City as it appeared in 1968.',
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-1.jpg',
		imgAlt: 'Blue Mall',
		imgCaption: 'Blue Mall'
	}),
	lakeside_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './history/lakeside-1.jpg',
		imgAlt: 'Lakeside Mall',
		imgCaption: 'Lakeside Mall'
	}),
	software_0: instantiateObject(jdgImageAttributes, {
		imgSrc: './software/software-0.jpg',
		imgAlt: 'Software',
		imgCaption: 'Software'
	})
};

export default imageAttributesCollection;
