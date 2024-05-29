<script>
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer, JDGImage } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
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
</JDGContentContainer>
