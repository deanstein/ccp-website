<script>
	import { JDGH3H4, JDGJumpTo, jdgSharedUrlsStore } from 'jdg-ui-svelte';
	import imageMetaRegistry from '$lib/image-meta-registry';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGImageTile,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '$lib/components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" gap="0">
	<JDGImageFullWidth
		imageMeta={imageMetaRegistry.save_civic_center.ecc_reuse_opt_5_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.65)"
		primaryText="REIMAGINING ENGLEWOOD CIVIC CENTER"
		primaryTextFontFamily="Righteous"
		overlayImageTextFontFamily="Righteous"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy
			fontSizeMultiplier={1.15}
			paddingTop="0"
			paddingBottom="0"
			textAlign="center"
			textWrap="balance"
		>
			Spared from the wrecking ball once already, the last vestige of Cinderella City Mall may face
			demolition again.
			<br /><br /> As the City of Englewood plans the next evolution of the former Cinderella City Mall
			site, can this former department store find a third life?
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGJumpTo />
<JDGContentContainer>
	<JDGContentBoxFloating title="HISTORY">
		<JDGBodyCopy paddingTop="0">
			Today's Englewood Civic Center started life as a department store built specifically to
			rejuvenate the aging <a href="./history">Cinderella City Mall</a>.
			<br /><br />
			Capping the third and final phase of a $15 million mall-wide renovation, Cinderella City announced
			in 1983 that it planned to demolish the vacant Cinema and Neusteters building and introduce a new
			brand to the Colorado market: <b>Broadway Southwest</b>.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.rose_mall._1984_neusteters_demolition_1,
				imageMetaRegistry.rose_mall._1985_broadway_southwest_construction_1,
				imageMetaRegistry.rose_mall._1984_broadway_southwest_sign
			]}
			cropToFillContainer={false}
			showCaption={true}
			showAttribution={false}
		/>
		<JDGBodyCopy>
			On November 1, 1985, Broadway Southwest opened at Cinderella City to great fanfare. Just two
			years later, Broadway Southwest's parent company would announce it was pulling out of the
			Colorado market, leaving several Colorado malls with a sudden vacancy in a newly-constructed
			building.
			<br /><br />
			In 1988, May D&F moved to the Broadway building from the former Denver Dry Good location at the
			other end of the Rose Mall. In the 1990s, the May Company consolidated brands, and Cinderella City's
			May D&F became Foley's.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.rose_mall._1990s_may_df_rose_mall_1,
				imageMetaRegistry.rose_mall._1992_01_22_foleys_bridge
			]}
			cropToFillContainer={false}
			showCaption={true}
			showAttribution={false}
		/>
		<JDGBodyCopy>
			As Cinderella City aged, foot traffic tapered and stores began reconsidering their future at
			the mall. In 1994, Foley's was one of several department stores to vacate Cinderella City in a
			mass exodus.
			<br /><br />
			The building remained vacant through the mall's final days at the end of 1997. In 1998, the City
			of Englewood announced it would save the building from demolition to serve as a new multi-use civic
			center for the city. It would be detached from Cinderella City's west wing and remain standing
			as the rest of the mall and its parking garage were demolished around it.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.rose_mall._1998_foleys_detached_1,
				imageMetaRegistry.rose_mall._1998_foleys_detached_2
			]}
			cropToFillContainer={true}
			showCaption={true}
			showAttribution={false}
		/>
		<JDGBodyCopy paddingTop="0">
			Inside, the renovations gutted the existing building and added large interior staircases to
			better connect its three levels. Outside, new windows, entrances, and architectural
			expressions dramatically changed its appearance.
		</JDGBodyCopy>
		<JDGImageTile
			imageMeta={imageMetaRegistry.ecc_existing_south}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy>
			Over 40 years and two distinct lives later, the Englewood Civic Center building may be facing
			its final reckoning. The City of Englewood is exploring a second redevelopment of the former
			Cinderella City site, with some proposals calling for Civic Center demolition.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="ADAPTIVE REUSE">
		<JDGBodyCopy paddingTop="0">
			As a child, <a href={'https://jdeangoldstein.com'} target="_blank">Josh Goldstein</a>
			and his family drove by Cinderella City Mall nearly every week, passing closest to the former Foley's
			building which had become a fading landmark standing silently as the mall slipped further into
			decline.
		</JDGBodyCopy>
		<JDGImageTile
			imageMeta={imageMetaRegistry.ecc_abandoned_1}
			cropToFillContainer={false}
			showCaption
		/>
		<JDGBodyCopy>
			After building a career in architecture and software inspired by Cinderella City, Josh learned
			of the Civic Center redevelopment plans and decided to combine his experience to illustrate a
			different outcome: A future where the building is saved and Englewood benefits from extending
			its life once more.
			<br /><br />
			The reuse concept creates the new <b>Heart of Englewood City Center</b> by building new public
			plazas with exhibits celebrating the site's history, reimagining the east paseo as a permanent
			farmer's market, and adding a terraced park made possible by moving the parking garage to a new
			location.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.save_civic_center.ecc_reuse_heart,
				imageMetaRegistry.save_civic_center.ecc_reuse_aerial
			]}
			cropToFillContainer={false}
			showCaption={false}
		/>
		<JDGBodyCopy>
			But the Civic Center building's specific use comes down to two options, depending on budget:
		</JDGBodyCopy>
		<JDGH3H4 h3String="Option 1: Food Hall + Coworking"></JDGH3H4>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			Economical and feasible: Keep the building intact, but add large windows to increase natural
			lighting for spaces inside. Add a new Englewood food hall on the ground level with coworking
			spaces and offices above.
		</JDGBodyCopy>
		<JDGImageTile
			imageMeta={imageMetaRegistry.ecc_reuse_opt_5_terraces}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingTop="0"></JDGBodyCopy>
		<JDGH3H4 h3String="Option 2: Food Hall + Hotel"></JDGH3H4>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			Expensive but exquisite: Split the building into two halves to support a hotel use on the
			upper floors. Activate the lower levels with a history-focused alleyway flanked on either side
			by a new Englewood food hall.
		</JDGBodyCopy>
		<JDGImageTile
			imageMeta={imageMetaRegistry.save_civic_center.ecc_reuse_opt_4_terraces}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy>
			Read more about the options and support the project at
			<a href={$jdgSharedUrlsStore.ccpCivicCenterPetition} target="_blank">Change.org</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="PETITION">
		<JDGBodyCopy paddingTop="0">
			The Cinderella City Project created a friendly petition to the City of Englewood encouraging
			them to consider alternatives to demolition for the Civic Center building.
			<br /><br />
			Over 1,200 people have signed so far! Add your support at
			<a href={$jdgSharedUrlsStore.ccpCivicCenterPetition} target="_blank">Change.org</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageMetaRegistry.ccp_construction_60s70s_3}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageMetaRegistry.rose_mall_60s70s_construction_1}
		item3Label="EXPERIENCE THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageMetaRegistry.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
