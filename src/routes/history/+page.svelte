<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import imageMetaRegistry from '$lib/image-meta-registry';
	import {
		buildingDataCollectionKey,
		fetchJsonFileList,
		jdgBuildingDataRepoName,
		jdgColors,
		jdgRepoOwner,
		readJsonFileFromRepo
	} from 'jdg-ui-svelte';
	import {
		JDG_CONTEXTS,
		JDGAccentBlockWithText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageTile,
		JDGTimeline,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '$lib/components/Donate.svelte';

	const showInProgressContent = false; // optionally hide during construction

	setContext(JDG_CONTEXTS.EVENT_AGE_SUFFIX_POSITIVE, 'after opening');
	setContext(JDG_CONTEXTS.EVENT_AGE_SUFFIX_NEGATIVE, 'before opening');

	const hostStore = writable(undefined);

	onMount(async () => {
		const files = await fetchJsonFileList(jdgRepoOwner, jdgBuildingDataRepoName);
		if (files?.length) {
			const data = await readJsonFileFromRepo(jdgRepoOwner, jdgBuildingDataRepoName, files[0]);
			const hosts = data?.[buildingDataCollectionKey];
			if (hosts?.length) {
				hostStore.set(hosts[0]);
			}
		}
	});
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageMeta={imageMetaRegistry.concept_art_1}
		primaryText="A FAIRYTALE CONCEPT"
		primaryTextFontFamily="Righteous"
		secondaryText="The Beginnings of Cinderella City Mall"
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy>
			Built in <b>1968</b> and demolished in <b>1997</b>, Cinderella City's legacy might seem
			short-lived.<br />Yet its story starts much earlier, and its unique impact continues to this
			day.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="TIMELINE" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">
			The official chronology of Cinderella City Mall as documented by a variety of sources
			including newspapers, photographs, architectural drawings, and more.
			<br /><br />
			This is a work in progress as The Cinderella City Project continues to uncovers the history of
			this magical place. The timeline will also serve as the structure for the forthcoming full written
			history. Check back often for updates.
		</JDGBodyCopy>
		<JDGTimeline timelineHost={$hostStore} minHeight="70vh" maxHeight="70vh" allowEditing={false} />
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="VIDEO HISTORY" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">
			<span style="display: flex; justify-content: center;">
				Immerse yourself in the colorful history of Cinderella City, including a preview of the
				immersive simulation, as presented to a live audience at the Englewood Civic Center in 2022:
			</span>
			<br />
			<JDGIFrame
				title="YouTube"
				src="https://www.youtube.com/embed/va9xoslXjQo?si=x4nWo9sTY3pZ3OvB"
				aspectRatio="1.77"
			/>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN MORE ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageMetaRegistry.ccp_construction_60s70s_4}
		item2Label={'SEE THE EXHIBIT'}
		item2Href="./exhibit"
		item2ImageAttributes={imageMetaRegistry.ccp_exhibit_4}
		item3Label="EXPERIENCE THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageMetaRegistry.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
{#if showInProgressContent}
	<JDGContentContainer paddingTop="0" paddingBottom="0" gap="0">
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
				<JDGImageTile imageMeta={imageMetaRegistry.lakeside_1} cropToFillContainer={false} />
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
				imageMetaSet={[imageMetaRegistry.parking_blue_mall_1, imageMetaRegistry.blue_mall_60s70s_1]}
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
