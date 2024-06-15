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
			that combines software and history to bring an architectural and retail icon back to life in full
			3D.
			<br /><br />
			The simulation is an accurate digital reconstruction of the mall in two distinct eras, each featuring
			period-correct architectural detailing, signage, and music.
			<br /><br />
			Bringing it all together, players can also time-travel between the mall's unique eras to experience
			the drastic changes in retail over three decades, a fast-changing landscape which ultimately befelled
			the mall.
			<br /><br />
			Each era also features dozens of historic photos which can be toggled on to view a window into
			time, aligned perfectly with that location in the simulated space.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGContentBoxFloating title="DOWNLOAD">
		<JDGBodyCopy paddingTop="0">
			Ready to try <b>Once Upon a Time at Cinderella City</b>? A few things to keep in mind:
			<ul>
				<li>
					It's a work in progress and many storefronts are unfinished.
					<ul>
						<li>
							<i>Have photos of missing stores? Please <a href="./contact">reach out</a>!</i>
						</li>
					</ul>
				</li>
				<li>It's currently only available on Windows.</li>
			</ul>
			<br /><br /> Download the latest version
			<a href="https://github.com/deanstein/CinderellaCityProject">here</a>.
		</JDGBodyCopy>
		<iframe
			id="kofiframe"
			src="https://ko-fi.com/cinderellacityproject/?hidefeed=true&widget=true&embed=true&preview=true"
			style="border:none;width:100%;padding:4px;background:#f9f9f9;"
			height="712"
			title="cinderellacityproject"
		></iframe>
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
