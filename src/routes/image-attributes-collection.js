import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	/*** CCP - BRANDING ***/
	ccp_ouatacc_white: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ouatacc-white.png',
		imgAlt: `Once Upon a Time at Cinderella City.`
	}),

	/*** CCP - BACKGROUND ***/
	jdg_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/jdg-1.png',
		imgAlt: `Josh in 1998.`,
		imgCaption: `Josh in 1998.`
	}),

	/*** CCP - SIMULATION ***/
	ccp_composite_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ccp-composite-1.jpg',
		imgAlt: `A composite of a photo and a rendering of Cinderella City's Blue Mall.`
	}),
	ccp_construction_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ccp-construction-80s90s-1.png',
		imgAlt: `A very early massing model of Cinderella City's 1987-1997 era at the beginning of the project.`,
		imgCaption: `A very early massing model of Cinderella City's 1987-1997 era at the beginning of the project.`
	}),
	ccp_construction_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ccp-construction-60s70s-2.jpg',
		imgAlt:
			'The 1968-1978 3D model of Cinderella City with the roof and parking deck removed, showing interior details including structure, lighting, signage, and more.',
		imgCaption:
			'The 1968-1978 3D model of Cinderella City with the roof and parking deck removed, showing interior details including structure, lighting, signage, and more.'
	}),
	ccp_construction_60s70s_3: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ccp-construction-60s70s-3.jpg',
		imgAlt: 'The 1968-1978 3D model of Cinderella City.',
		imgCaption: 'The 1968-1978 3D model of Cinderella City.'
	}),
	ccp_construction_60s70s_4: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/ccp-construction-60s70s-4.jpg',
		imgAlt: 'The 1968-1978 3D model of Cinderella City.',
		imgCaption: 'The 1968-1978 3D model of Cinderella City.'
	}),
	ccp_blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/blue-mall-60s70s-1.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`
	}),
	ccp_blue_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/blue-mall-60s70s-2.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`
	}),
	ccp_blue_mall_60s70s_exterior_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/blue-mall-60s70s-exterior-1.png',
		imgAlt: `Cinderella City's iconic signage seen on the exterior of the Blue Mall in the 1968-1978 era.`,
		imgCaption: `Cinderella City's iconic signage seen on the exterior of the Blue Mall in the 1968-1978 era.`
	}),
	ccp_blue_mall_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/blue-mall-80s90s-1.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`
	}),
	ccp_blue_mall_80s90s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './ccp/blue-mall-80s90s-2.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`
	}),
	cinder_alley_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './cinder-alley/cinder-alley-1.jpg',
		imgAlt: `Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
		imgCaption: `Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
		imgAttribution: 'Englewood Public Library'
	}),

	/*** AERIALS ***/
	aerial_60s_70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './aerials/aerial-60s70s-1.jpg',
		imgAlt: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgCaption: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgAttribution: 'Englewood Public Library'
	}),

	/*** BLUE MALL ***/
	blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-1.jpg',
		imgAlt:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.',
		imgCaption:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.'
	}),
	blue_mall_60s70s_event_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-event-1.jpg',
		imgAlt: `A concert takes place in the Blue Mall.`,
		imgCaption: `A concert takes place in the Blue Mall.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_parking_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-parking-1.jpg',
		imgAlt: `Cinderella City's scale required the use of parking decks and ramps to fit within its constraints.`,
		imgCaption: `Cinderella City's scale required the use of parking decks and ramps to fit within its constraints.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_parking_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-60s70s-parking-2.jpg',
		imgAlt: `The giant complex was surrounded by 7,000 parking spaces on two levels.`,
		imgCaption: `The giant complex was surrounded by 7,000 parking spaces on two levels.`,
		imgAttribution: 'Englewood Public Library'
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
		imgAlt: `City Campus, an extension of Englewood High School, was on the mezzanine level.`,
		imgCaption: `City Campus, an extension of Englewood High School, was on the mezzanine level.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_80s90s_demolition_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-80s90s-demolition-1.jpg',
		imgAlt: `Demolition of Cinderella City in 1998.`,
		imgCaption: `Demolition of Cinderella City in 1998.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_80s90s_exterior_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './blue-mall/blue-mall-80s90s-exterior-1.JPG',
		imgAlt: `The southeast Blue Mall entrance after the mall closed in 1997.`,
		imgCaption: `The southeast Blue Mall entrance after the mall closed in 1997.`,
		imgAttribution: 'Englewood Public Library'
	}),

	/*** HISTORY ***/
	construction_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './history/construction-1.jpg',
		imgAlt: 'Cinderella City under construction in 1966.',
		imgCaption: 'Cinderella City under construction in 1966.',
		imgAttribution: 'Maranda Penner'
	}),
	lakeside_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './history/lakeside-1.jpg',
		imgAlt: 'Lakeside Mall',
		imgCaption: 'Lakeside Mall'
	}),

	/*** PLANS ***/
	plan_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './plans/plan-60s70s-1.png',
		imgAlt: 'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgCaption:
			'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgAttribution: 'Englewood Public Library'
	}),

	/*** PARKING ***/
	parking_blue_mall_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './parking/parking-blue-mall-1.jpg',
		imgAlt:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgCaption:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgAttribution: 'Denver Public Library'
	}),

	/*** ROSE MALL ***/
	rose_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './rose-mall/rose-mall-60s70s-1.jpg',
		imgAlt: 'Rose Mall as it appeared before opening in 1968.',
		imgCaption: 'Rose Mall as it appeared before opening in 1968.',
		imgAttribution: 'Denver Public Library'
	}),
	rose_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc: './rose-mall/rose-mall-60s70s-2.jpg',
		imgAlt: 'The mezzanine level featured offices for lease, seen here from Rose Mall.',
		imgCaption: 'The mezzanine level featured offices for lease, seen here from Rose Mall.',
		imgAttribution: 'Denver Public Library'
	}),
	rose_mall_60s70s_construction_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './rose-mall/rose-mall-60s70s-construction-1.JPG',
		imgAlt: 'Rose Mall during construction in 1967.',
		imgCaption: 'Rose Mall during construction in 1967.',
		imgAttribution: 'Englewood Public Library'
	}),
	rose_mall_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc: './rose-mall/rose-mall-80s90s-1.jpg',
		imgAlt: 'Rose Mall as seen post-renovation in the mid-1980s.',
		imgCaption: 'Rose Mall as seen post-renovation in the mid-1980s.',
		imgAttribution: 'Englewood Public Library'
	})
};

export default imageAttributesCollection;
