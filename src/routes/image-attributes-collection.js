import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	aerial_60s_70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './aerials/aerial-60s70s-1.jpg',
		imgAlt: "Cinderella City's sprawling M shape as seen from the air on opening day in 1968.",
		imgCaption: "Cinderella City's sprawling M shape as seen from the air on opening day in 1968.",
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-1.jpg',
		imgAlt:
			'The Blue Mall centered around a massive 35-foot fountain which became an unofficial Cinderella City pastime: "Meet me at the Fountain." ',
		imgCaption:
			'The Blue Mall centered around a massive 35-foot fountain which became an unofficial Cinderella City pastime: "Meet me at the Fountain."'
	}),
	blue_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-2.jpg',
		imgAlt:
			'The Blue Mall centered around a massive 35-foot fountain which became an unofficial Cinderella City pastime: "Meet me at the Fountain."',
		imgCaption:
			'The Blue Mall centered around a massive 35-foot fountain which became an unofficial Cinderella City pastime: "Meet me at the Fountain."',
		imgAttribution: 'Englewood Public Library'
	}),
	lakeside_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './history/lakeside-1.jpg',
		imgAlt: 'Lakeside Mall',
		imgCaption: 'Lakeside Mall'
	}),
	plan_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './plans/plan-60s70s-1.png',
		imgAlt: 'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgCaption:
			'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgAttribution: 'Englewood Public Library'
	}),
	parking_blue_mall_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './parking/parking-blue-mall-1.jpg',
		imgAlt:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgCaption:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgAttribution: 'Denver Public Library'
	}),
	rose_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './rose-mall/rose-mall-60s70s-1.jpg',
		imgAlt: 'Rose Mall as it appeared before opening in 1968.',
		imgCaption: 'Rose Mall as it appeared before opening in 1968.',
		imgAttribution: 'Denver Public Library'
	})
};

export default imageAttributesCollection;
