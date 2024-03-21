import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = new Map([
	[
		'blue-mall-1',
		instantiateObject(jdgImageAttributes, {
			imgSrc: './blue-mall/blue-mall-1.jpg',
			imgAlt: 'Blue Mall',
			imgCaption: 'Blue Mall'
		})
	],
	[
		'lakeside-1',
		instantiateObject(jdgImageAttributes, {
			imgSrc: './history/lakeside-1.jpg',
			imgAlt: 'Lakeside Mall',
			imgCaption: 'Lakeside Mall'
		})
	],
	[
		'software-0',
		instantiateObject(jdgImageAttributes, {
			imgSrc: './software/software-0.jpg',
			imgAlt: 'Software',
			imgCaption: 'Software'
		})
	]
]);

export default imageAttributesCollection;
