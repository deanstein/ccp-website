<script>
	import imageAttributesCollection from '../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageTile,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_1}
			showOverlay={true}
			overlayColorRgba="rgba(30, 30, 30, 0.1)"
			overlayImageAttributes={imageAttributesCollection.ccp_ouatacc_white}
		/>
	<JDGContentBoxFloating>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			<strong>Once Upon a Time at Cinderella City</strong> is an interactive simulation of Cinderella City Mall in two
			distinct eras: 1968-1978, and 1987-1997.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGContentBoxFloating title="DOWNLOAD">
		<JDGBodyCopy paddingTop="0">
				Once Upon a Time at Cinderella City is currently only available on Windows.
				<br><br> Download the latest version <a href="./">here</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	.ouatacc-logo-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}
</style>
