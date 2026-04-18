<script>
	import { jdgSharedUrlsStore, jdgNotificationTypes } from 'jdg-ui-svelte';
	import imageMetaRegistry from '$lib/image-meta-registry';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGNotificationBanner,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '$lib/components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageMeta={imageMetaRegistry.ccp_exhibit_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		primaryText="EXPERIENCE THE FAIRYTALE"
		primaryTextFontFamily="Righteous"
		secondaryText="at the Historic Englewood Museum"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGNotificationBanner
			message={'The Cinderella City exhibit was open from May 2024 through August 2025 and is now closed.'}
			notificationType={jdgNotificationTypes.information}
		/>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <b>Cinderella City Project</b> has teamed up with
			<a href={$jdgSharedUrlsStore.historicEnglewood}>Historic Englewood</a> to create Englewood's
			first history museum, bringing to life the story of
			<a href="./history">Cinderella City Mall</a>
			as the inaugural exhibit.
			<br /><br />
			Immerse yourself in Cinderella City's history and design with life-size photos, little-known facts,
			and several artifacts from the mall, including the iconic Cinder Alley sign which has been restored
			to its former glory.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.ccp_exhibit_4,
				imageMetaRegistry.ccp_exhibit_2,
				imageMetaRegistry.ccp_exhibit_3
			]}
		/>
		<JDGBodyCopy>
			The exhibit includes a theater with a 175" projection screen showing the fully-interactive <a
				href="./simulation">Cinderella City Simulation</a
			>. <br /><br />Visitors can enjoy guided tours featuring real historic photos inside both eras
			of the mall, or use the included game controller to walk anywhere in the mall they please.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.ccp.exhibit.theater_2,
				imageMetaRegistry.ccp.exhibit.theater_1
			]}
			showAttribution={false}
			showCaption={false}
		/>
		<JDGBodyCopy>
			Adding a layer of nostalgia, the Cinderella City exhibit takes place inside the last surviving
			piece of the mall: the Broadway Southwest department store constructed in 1985.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[imageMetaRegistry.ecc_abandoned_1, imageMetaRegistry.ecc_existing_south]}
			showAttribution={false}
			showCaption={false}
		/>
		<br />
		<JDGNotificationBanner
			message={'The Cinderella City exhibit was open from May 2024 through August 2025 and is now closed.'}
			notificationType={jdgNotificationTypes.information}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageMetaRegistry.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageMetaRegistry.rose_mall_60s70s_construction_1}
		item3Label="MORE ON THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageMetaRegistry.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
