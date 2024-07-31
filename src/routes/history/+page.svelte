<script>
	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGAccentBlockWithText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImage,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-shared-styles.js';

	const showInProgressContent = false; // optionally hide during construction
</script>

<JDGContentContainer overlapWithHeader={true}>
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.concept_art_1}
		primaryText="A FAIRYTALE CONCEPT"
		primaryTextFontFamily="Righteous"
		secondaryText="The Beginnings of Cinderella City Mall"
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating title="COMING SOON" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">
			<span style="display: flex; justify-content: center;">
				The full written history of Cinderella City Mall is coming soon. Stay tuned!
				<br /><br />
				In the meantime, watch the history presented to a live audience by The Cinderella City Project,
				on YouTube:
			</span>
		</JDGBodyCopy>
		<div style="display: flex; align-items: center; justify-content: center;">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/va9xoslXjQo?si=x4nWo9sTY3pZ3OvB"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		<br />
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="UP NEXT" includeInJumpTo={false}>
		<JDGGridLayout>
			<JDGImageTile
				label="LEARN MORE ABOUT THE PROJECT"
				href="./about"
				labelJustification={'center'}
				imageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
			/>
			<JDGImageTile
				label="SEE THE EXHIBIT"
				href="./exhibit"
				imageAttributes={imageAttributesCollection.ccp_exhibit_4}
				labelJustification={'center'}
			/>
			<JDGImageTile
				label="EXPERIENCE THE SIMULATION"
				href="./simulation"
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
				labelJustification={'center'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
{#if showInProgressContent}
	<JDGContentContainer topBottomPadding="0" gap="0">
		<JDGContentBoxFloating>
			<JDGBodyCopy>
				As the legend goes, Cinderella City Mall debuted on March 7, 1968 as a record-breaking and
				controversial 1.35 million-square foot shopping center built on the site of Englewood,
				Colorado's beloved City Park.
				<br /><br />
				But the full story of Cinderella City actually starts much earlier.
				<br /><br />
				Back in 1952, a real estate developer named Gerri Von Frellick was looking for a new beginning
				after the collapse of his construction empire in Texas. Seeing a rapidly-growing metro area with
				under-developed retail, Von Frellick chose Colorado for his fresh start.
				<br /><br />
				By 1956, Von Frellick had gotten back on his feet and opened Lakeside Mall in the tiny north
				Denver suburb of the same name. Lakeside became Colorado's first enclosed, air-conditioned mall
				experience in Colorado, which was seen as a major advantage over outdoor shopping centers like
				Cherry Creek.
				<br /><br />
				<JDGImageTile
					imageAttributes={imageAttributesCollection.lakeside_1}
					fillContainer={false}
				/>
				<br /><br />
				After Lakeside, Von Frellick set his eyes on the southern suburbs. By 1960, he announced plans
				to build a shopping mall on the KLZ radio tower land at East Hampden Ave and South University
				Boulevard in the Cherry Hills neighborhood. Code-named Cinderella City, the design was originally
				intended to be Victorian, with an emphasis on landscape to shield the mall from the surrounding
				neighborhood.
				<br /><br />
				The proposed zoning change for a shopping center in Cherry Hills was denied by Arapahoe County.
				Von Frellick publicly clashed with citizens and lawsuits were filed. Eventually, a group of businesses
				and City of Englewood leaders offered Von Frellick Englewood’s City Park as an alternative to
				the KLZ radio tower site. Englewood residents fiercely opposed this site too, and lawsuits went
				to the Colorado Supreme Court, where it was decided that Von Frellick could build his shopping
				mall on the City Park site.
				<br /><br />
				The original landscaped concept with retro architecture would eventually be used for Villa Italia
				(1966), while the tenant list and square footage requirements would carry over into the new location
				for Cinderella City.
			</JDGBodyCopy>
		</JDGContentBoxFloating>
		<JDGContentBoxFloating>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.parking_blue_mall_1,
					imageAttributesCollection.blue_mall_60s70s_1
				]}
			/>
		</JDGContentBoxFloating>
	</JDGContentContainer>
	<JDGContentContainer>
		<JDGAccentBlockWithText
			primaryText={`“… because three years of surveys show that’s the place a regional shopping center is needed and
			should be located.”`}
			secondaryText="Gerri Von Frellick, 1960"
			backgroundColor={jdgColors.accentColorsCCP[1]}
		/>
	</JDGContentContainer>
{/if}
