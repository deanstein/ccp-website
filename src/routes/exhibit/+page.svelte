<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGNotificationBanner,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '../../components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.ccp_exhibit_composite}
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
			backgroundColor={'#f5e576'}
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
			imageAttributeObjects={[
				imageAttributesCollection.ccp_exhibit_4,
				imageAttributesCollection.ccp_exhibit_2,
				imageAttributesCollection.ccp_exhibit_3
			]}
		/>
		<JDGBodyCopy>
			The exhibit also features the fully-interactive <a href="./simulation"
				>Cinderella City Simulation</a
			>, which guides visitors on a tour of historic photos inside both eras of the mall, and also
			offers a game controller for intrepid mall walkers to take control and go where they please.
			<br /><br />
			Adding a layer of nostalgia, the Cinderella City exhibit takes place inside the last surviving
			piece of the mall: the Broadway Southwest department store constructed in 1985.
		</JDGBodyCopy>
		<JDGNotificationBanner
			message={'The Cinderella City exhibit was open from May 2024 through August 2025 and is now closed.'}
			backgroundColor={'#f5e576'}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
		item3Label="MORE ON THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
