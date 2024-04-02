import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	aerial_60s_70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './aerials/aerial-60s70s-1.jpg',
		imgAlt: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgCaption: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-1.jpg',
		imgAlt:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.',
		imgCaption:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.'
	}),
	blue_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-2.jpg',
		imgAlt:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.',
		imgCaption:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.',
		imgAttribution: 'Englewood Public Library'
	}),
	city_campus_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/city-campus-1.jpg',
		imgAlt:
			`City Campus, an extension of Englewood High School, was on the third floor of Cinderella City along with other private and commercial offices.`,
		imgCaption:
			`City Campus, an extension of Englewood High School, was on the third floor of Cinderella City along with other private and commercial offices.`,
		imgAttribution: 'Englewood Public Library'
	}),
	cinder_alley_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './cinder-alley/cinder-alley-1.jpg',
		imgAlt:
			`Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
		imgCaption:
			`Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
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
