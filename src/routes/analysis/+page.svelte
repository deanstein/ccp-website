<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame,
		JDGImageFullWidth,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import imageMetaRegistry from '$lib/image-meta-registry';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageMeta={imageMetaRegistry.construction_1}
		primaryText="ANALYSIS"
		primaryTextFontFamily="Righteous"
		secondaryText="Design, layout, and quirks of Cinderella City"
		overlayColorRgba="rgba(30, 30, 30, 0.7)"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy>
			A sprawling shopping center with a unique layout surrounded by a parking garage. 65 acres, 1.2
			million square feet of retail space, 5 submalls, parking for 2,700 cars.
			<br /><br />
			There's a lot to unpack, and we're just getting started. This page is a work in progress, check
			back soon!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="VIDEO ANALYSIS" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">
			<span style="display: flex; justify-content: center;">
				Until this page is completed, enjoy a video analysis of Cinderella City's layout and design
				as presented by the Cinderella City Project in 2022:
			</span>
			<br />
			<JDGIFrame
				title="YouTube"
				src="https://www.youtube.com/embed/va9xoslXjQo?si=x4nWo9sTY3pZ3OvB&start=515"
				aspectRatio="1.77"
			/>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGUpNext
		item1Label={'SEE THE EXHIBIT'}
		item1Href={'./exhibit'}
		item1ImageAttributes={imageMetaRegistry.ccp_exhibit_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageMetaRegistry.rose_mall_60s70s_construction_1}
		item3Label="EXPERIENCE THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageMetaRegistry.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
