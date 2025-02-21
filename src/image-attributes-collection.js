import { instantiateObject, postProcessImageAttributes } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	/*** CCP - BRANDING ***/
	ccp_ouatacc_white: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962802/ccp-website/ccp/ouatacc-white_gxewfm.png',
		imgAlt: `Once Upon a Time at Cinderella City.`
	}),

	/*** CCP - BACKGROUND ***/
	jdg_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962802/ccp-website/ccp/jdg-1_hckw6a.png',
		imgAlt: `Josh in 1998.`,
		imgCaption: `Josh in 1998.`
	}),

	/*** CCP - SIMULATION ***/
	ccp_composite_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/ccp/ccp-composite-1.jpg',
		imgAlt: `A composite of a photo and a rendering of Cinderella City's Blue Mall.`
	}),
	ccp_composite_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/ccp/ccp-composite-2.jpg',
		imgAlt: `A composite of the 1968-1978 simulated version of the mall on the left, and the 1987-1997 simulated version of the mall on the right.`
	}),
	ccp_construction_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962801/ccp-website/ccp/ccp-construction-80s90s-1.png',
		imgAlt: `A very early massing model of Cinderella City's 1987-1997 era at the beginning of the project.`,
		imgCaption: `A very early massing model of Cinderella City's 1987-1997 era at the beginning of the project.`
	}),
	ccp_construction_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962801/ccp-website/ccp/ccp-construction-60s70s-2_g36leb.jpg',
		imgAlt:
			'The 1968-1978 3D model of Cinderella City with the roof and parking deck removed, showing interior details including structure, lighting, signage, and more.',
		imgCaption:
			'The 1968-1978 3D model of Cinderella City with the roof and parking deck removed, showing interior details including structure, lighting, signage, and more.'
	}),
	ccp_construction_60s70s_3: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962801/ccp-website/ccp/ccp-construction-60s70s-3_pebfyl.jpg',
		imgAlt: 'The 1968-1978 3D model of Cinderella City.',
		imgCaption: 'The 1968-1978 3D model of Cinderella City.'
	}),
	ccp_construction_60s70s_4: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962801/ccp-website/ccp/ccp-construction-60s70s-4_terebr.jpg',
		imgAlt: 'The 1968-1978 3D model of Cinderella City.',
		imgCaption: 'The 1968-1978 3D model of Cinderella City.'
	}),
	ccp_blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-60s70s-1_v1lga0.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`
	}),
	ccp_blue_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-60s70s-2_vjus7q.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1968-1978 era.`
	}),
	ccp_blue_mall_60s70s_exterior_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/ccp/blue-mall-60s70s-exterior-1_edmdgt.png',
		imgAlt: `Cinderella City's iconic signage seen on the exterior of the Blue Mall in the 1968-1978 era.`,
		imgCaption: `Cinderella City's iconic signage seen on the exterior of the Blue Mall in the 1968-1978 era.`
	}),
	ccp_blue_mall_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-80s90s-1_xocsmu.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`
	}),
	ccp_blue_mall_80s90s_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-80s90s-2_ixy402.png',
		imgAlt: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`,
		imgCaption: `Cinderella City's central Blue Mall, simulated in the 1987-1997 era.`
	}),
	ccp_rose_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962806/ccp-website/ccp/rose-mall-60s70s-1_mzr1tl.png',
		imgAlt: `Cinderella City's Rose Mall simulated in the 1968-1978 era.`,
		imgCaption: `Cinderella City's Rose Mall simulated in the 1968-1978 era.`
	}),
	ccp_rose_mall_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962807/ccp-website/ccp/rose-mall-80s90s-1_fkyyh5.png',
		imgAlt: `Cinderella City's Rose Mall simulated in the 1987-1997 era.`,
		imgCaption: `Cinderella City's Rose Mall simulated in the 1987-1997 era.`
	}),
	ccp_historic_photos_gold_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1719178835/ccp-website/ccp/ccp-historic-photos-gold-mall-60s70s-1_quyekf.png',
		imgAlt: `Historic photos of Gold Mall in the 1968-1978 era, as seen in the Cinderella City Simulation.`,
		imgCaption: `Historic photos of Gold Mall in the 1968-1978 era, as seen in the Cinderella City Simulation.`
	}),
	ccp_vaporwave_blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1719193759/ccp-website/ccp/ccp-vaporwave-blue-mall-60s70s-1_emzam4.png',
		imgAlt: `Cinderella City's central Blue Mall as seen through a Vaporwave camera mode.`,
		imgCaption: `Cinderella City's central Blue Mall as seen through a Vaporwave camera mode.`
	}),

	/*** CCP - EXHIBIT ***/
	ccp_exhibit_composite: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1718561285/ccp-website/ccp/exhibit/final_photo_collage_ewll6g.jpg',
		imgAlt: `A composite image showing several view of the Cinderella City exhibit at the Historic Englewood Museum.`
	}),
	ccp_exhibit_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1718411998/ccp-website/ccp/exhibit/ccp_exhibit_1.jpg',
		imgAlt: `The Cinderella City exhibit at the Historic Englewood Museum.`,
		imgCaption: `The Cinderella City exhibit at the Historic Englewood Museum.`
	}),
	ccp_exhibit_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1720559712/ccp-website/ccp/exhibit/ccp_exhibit_2.jpg',
		imgAlt: `The Cinderella City Project at the Historic Englewood museum theater.`,
		imgCaption: `The Cinderella City Project at the Historic Englewood museum theater.`
	}),
	ccp_exhibit_3: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1720559913/ccp-website/ccp/exhibit/ccp_exhibit_3.jpg',
		imgAlt: `A salvaged flag from the 1980s Rose Mall renovation hangs in the Historic Englewood museum space.`,
		imgCaption: `A salvaged flag from the 1980s Rose Mall renovation hangs in the Historic Englewood museum space.`
	}),
	ccp_exhibit_4: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1720559357/ccp-website/ccp/exhibit/ccp_exhibit_4.jpg',
		imgAlt: `A restored Cinder Alley sign salvaged from the mall hangs in the Historic Englewood museum space.`,
		imgCaption: `A restored Cinder Alley sign salvaged from the mall hangs in the Historic Englewood museum space.`
	}),
	ccp_exhibit_5: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1720560067/ccp-website/ccp/exhibit/ccp_exhibit_5.jpg',
			imgCaption: `A restored Cinder Alley sign salvaged from the mall hangs in the Historic Englewood museum space.`
		})
	),
	ccp_xbox_one_controller_diagram: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1723785244/ccp-website/ccp/ccp-xbox-one-controller-diagram.jpg',
			imgCaption: 'Xbox One controller diagram for Once Upon a Time at Cinderella City',
			allowBackgroundBlur: false
		})
	),

	/*** CONCEPT ART ***/
	concept_art_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1717546050/ccp-website/concept-art/concept-art-1_b4ppdd.jpg',
		imgAlt: "An early rendering of Cinderella City's central court.",
		imgCaption: "An early rendering of Cinderella City's central court.",
		imgAttribution: 'Englewood Public Library'
	}),

	/*** AERIALS ***/
	aerial_60s_70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962804/ccp-website/aerials/aerial-60s70s-1_gxjhtd.jpg',
		imgAlt: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgCaption: "Cinderella City's unique layout as seen from the air on opening day in 1968.",
		imgAttribution: 'Englewood Public Library'
	}),

	/*** BLUE MALL ***/
	blue_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-1_i9bssz.jpg',
		imgAlt:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.',
		imgCaption:
			'The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.'
	}),
	blue_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-2_vy6cnk.jpg',
		imgAlt: `The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.`,
		imgCaption: `The mall centered around a block-wide court called Blue Mall, which featured a stunning 35-foot fountain.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_event_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-event-1_erv9qd.jpg',
		imgAlt: `A concert takes place in the Blue Mall.`,
		imgCaption: `A concert takes place in the Blue Mall.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_parking_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-parking-1_hugxan.jpg',
		imgAlt: `Cinderella City's scale required the use of parking decks and ramps to fit within its constraints.`,
		imgCaption: `Cinderella City's scale required the use of parking decks and ramps to fit within its constraints.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_60s70s_parking_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-parking-2_uda9fp.jpg',
		imgAlt: `The giant complex was surrounded by 7,000 parking spaces on two levels.`,
		imgCaption: `The giant complex was surrounded by 7,000 parking spaces on two levels.`,
		imgAttribution: 'Englewood Public Library'
	}),
	city_campus_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/blue-mall/city-campus-1_uafwj8.jpg',
		imgAlt: `City Campus, an extension of Englewood High School, was on the mezzanine level.`,
		imgCaption: `City Campus, an extension of Englewood High School, was on the mezzanine level.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_80s90s_demolition_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/blue-mall/blue-mall-80s90s-demolition-1_k7jfp2.jpg',
		imgAlt: `Demolition of Cinderella City in 1998.`,
		imgCaption: `Demolition of Cinderella City in 1998.`,
		imgAttribution: 'Englewood Public Library'
	}),
	blue_mall_80s90s_exterior_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/blue-mall/blue-mall-80s90s-exterior-1_gkm6ta.jpg',
		imgAlt: `The southeast Blue Mall entrance after the mall closed in 1997.`,
		imgCaption: `The southeast Blue Mall entrance after the mall closed in 1997.`,
		imgAttribution: 'Englewood Public Library'
	}),

	/*** CINDER ALLEY ***/
	cinder_alley_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962802/ccp-website/cinder-alley/cinder-alley-1_ltelh7.jpg',
		imgAlt: `Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
		imgCaption: `Cinderella City featured a lower-level market and bazaar known as Cinder Alley, a precursor today's mixed-use retail.`,
		imgAttribution: 'Englewood Public Library'
	}),

	/*** HISTORY ***/
	construction_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962807/ccp-website/history/construction-1_wanblf.jpg',
		imgAlt: 'Cinderella City under construction in 1966.',
		imgCaption: 'Cinderella City under construction in 1966.',
		imgAttribution: 'Maranda Penner'
	}),
	lakeside_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962803/ccp-website/history/lakeside-1_b7gz4p.jpg',
		imgAlt: 'Lakeside Mall',
		imgCaption: 'Lakeside Mall'
	}),

	/*** PLANS ***/
	plan_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962803/ccp-website/plans/plan-60s70s-1_wkmpff.png',
		imgAlt: 'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgCaption:
			'Cinderella City featured 5 sub-malls: Blue, Rose, Gold, Shamrock, and Cinder Alley.',
		imgAttribution: 'Englewood Public Library'
	}),

	/*** PARKING ***/
	parking_blue_mall_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962803/ccp-website/parking/parking-blue-mall-1_c0tcwu.jpg',
		imgAlt:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgCaption:
			'Cinderella City was surrounded by a sprawling parking garage, seen here with a ramp leading below Blue Mall.',
		imgAttribution: 'Denver Public Library'
	}),

	/*** ROSE MALL ***/
	rose_mall_60s70s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962803/ccp-website/rose-mall/rose-mall-60s70s-1_mzvcap.jpg',
		imgAlt: 'Rose Mall as it appeared before opening in 1968.',
		imgCaption: 'Rose Mall as it appeared before opening in 1968.',
		imgAttribution: 'Denver Public Library'
	}),
	rose_mall_60s70s_2: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962803/ccp-website/rose-mall/rose-mall-60s70s-2_bblxau.jpg',
		imgAlt: 'The mezzanine level featured offices for lease, seen here from Rose Mall.',
		imgCaption: 'The mezzanine level featured offices for lease, seen here from Rose Mall.',
		imgAttribution: 'Denver Public Library'
	}),
	rose_mall_60s70s_construction_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962804/ccp-website/rose-mall/rose-mall-60s70s-construction-1_ketke8.jpg',
		imgAlt: 'Rose Mall during construction in 1967.',
		imgCaption: 'Rose Mall during construction in 1967.',
		imgAttribution: 'Englewood Public Library'
	}),
	rose_mall_80s90s_1: instantiateObject(jdgImageAttributes, {
		imgSrc:
			'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962804/ccp-website/rose-mall/rose-mall-80s90s-1_rsnpr0.jpg',
		imgAlt: 'Rose Mall as seen post-renovation in the mid-1980s.',
		imgCaption: 'Rose Mall as seen post-renovation in the mid-1980s.',
		imgAttribution: 'Englewood Public Library'
	}),

	/*** ENGLEWOOD CIVIC CENTER ***/
	ecc_abandoned_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1740171773/ccp-website/save-civic-center/ecc-abandoned-1.jpg',
			imgCaption:
				"Abandoned by Foley's in 1994, the empty department store is seen here attached to an ailing Cinderella City in 1996.",
			imgAttribution: 'Englewood Public Library'
		})
	),
	ecc_existing_north: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1739673653/ccp-website/save-civic-center/ecc-existing-north.jpg',
			imgCaption:
				"The Englewood Civic Center's north side formerly connected to Cinderella City Mall and now faces into a public plaza surrounded by mixed-use buildings.",
			imgAttribution: 'Englewood Public Library'
		})
	),
	ecc_existing_south: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1740171781/ccp-website/save-civic-center/ecc-existing-south.png',
			imgCaption:
				'The south side of the Englewood Civic Center is fronted by a parking deck much like the parking deck that once surrounded the entire mall.',
			imgAttribution: 'Englewood Public Library'
		})
	),
	ecc_post_demo_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1740171988/ccp-website/save-civic-center/ecc-post-demo-1.jpg',
			imgCaption:
				'The former Broadway Southwest department store as seen after Cinderella City was demolished in 1998. The right side of the building was once attached to the mall.',
			imgAttribution: 'Englewood Public Library'
		})
	),
	ecc_reuse_opt_5_terraces: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1740172529/ccp-website/save-civic-center/ecc-reuse-opt-5-terraces.png',
			imgCaption:
				'One option for reuse is installing a food hall in the lower level and peeling back the parking garage to reveal terraces down to the ground level, with replacement parking in a multifamily building offscreen.',
			imgAttribution: 'Englewood Public Library'
		})
	),

	/*** VILLA ITALIA ***/
	villa_italia_grand_opening_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc:
				'https://res.cloudinary.com/jdg-main/image/upload/v1740175711/ccp-website/villa-italia/villa-italia-grand-opening-1.jpg',
			imgCaption: 'Villa Italia during its grand opening in March of 1966.',
			imgAttribution: 'Englewood Public Library'
		})
	)
};

export default imageAttributesCollection;
