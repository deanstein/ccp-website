<script>
	import imageAttributesCollection from '../../image-attributes-collection';
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
		imageAttributes={imageAttributesCollection.ccp_composite_2}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		overlayImageAttributes={imageAttributesCollection.ccp_ouatacc_white}
		primaryTextFontFamily="Righteous"
		overlayImageText="An Immersive Retail History Experience"
		overlayImageTextFontFamily="Righteous"
	/>
	<JDGContentBoxFloating>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			<strong>Once Upon a Time at Cinderella City</strong> is an interactive simulation of
			<a href="./history">Cinderella City Mall</a>
			that combines software and history to bring an architectural and retail icon back to life in
			full 3D.
			<br /><br />
			The simulation is an accurate digital reconstruction of the mall in two distinct eras,
			each featuring period-correct architectural detailing, signage, and music.
			<br /><br />
			Tying it all together, the simulation features the ability to time-travel between the eras to
			experience the drastic changes in retail over three decades that ultimately befelled the mall.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGContentBoxFloating title="DOWNLOAD">
		<JDGBodyCopy paddingTop="0">
			Once Upon a Time at Cinderella City is currently only available on Windows.
			<br /><br /> Download the latest version
			<a href="https://github.com/deanstein/CinderellaCityProject">here</a>.
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
