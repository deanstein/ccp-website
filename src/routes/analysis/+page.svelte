<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '../../components/Donate.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title="COMING SOON">
		<JDGBodyCopy paddingTop="0">
			<span style="display: flex; justify-content: center;">
				This page is under construction. Check back soon!
			</span>
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.construction_1}
			maxHeight="60vh"
			showCaption={true}
			showAttribution={true}
		/>
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'SEE THE EXHIBIT'}
		item1Href={'./exhibit'}
		item1ImageAttributes={imageAttributesCollection.ccp_exhibit_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
		item3Label="EXPERIENCE THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>
