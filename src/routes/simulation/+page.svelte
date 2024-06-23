<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageCompare,
		JDGImageFullWidth,

		JDGImageTile

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
		overlapWithHeader={true}
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
			Players can also time-travel between the mall's unique time periods to experience the drastic evolution in retail over three decades, reflecting the fast-changing consumer landscape which ultimately befelled
			the mall.
			<br><br>
			<JDGFullWidthContainer>
				<JDGImageCompare
					imageAttributes1={imageAttributesCollection.ccp_blue_mall_60s70s_1}
					imageAttributes2={imageAttributesCollection.ccp_blue_mall_80s90s_1}
					caption="Cinderella City's Blue Mall as seen simulated in 1968-1978 and in 1987-1997."
					maxHeight="60vh"
					showBlurInUnfilledSpace={false}
				/>
			</JDGFullWidthContainer>
			<br /><br />
			Each time period also features dozens of historic photos in the simulated 3D space, providing a unique view into time and grounding the simulation in reality:
			<br><br>
			<JDGFullWidthContainer>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.ccp_historic_photos_gold_mall_60s70s_1}
					fillContainer={false}
					showCaption={true}
					maxHeight="60vh"
				/>
			</JDGFullWidthContainer>
			<br><br>
			Learn more about the simulation's features, limitations, and availability below.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGContentBoxFloating title="DONATE">
		<JDGBodyCopy paddingTop="0">
			Digitally reconstructing a massive shopping center in two time periods is hard work! The project is self-funded and operated in the free time of just one person, requiring dedication, time, and resources.
			<br><br>
			Support the project by buying its creator coffee via Ko-Fi! <br><br>
			Donations will be used to purchase the content, software, and hardware needed to bring Cinderella City Mall back to life as realistically as possible.
		</JDGBodyCopy>
		<iframe
			id="kofiframe"
			src="https://ko-fi.com/cinderellacityproject/?hidefeed=true&widget=true&embed=true&preview=true"
			style="border:none;width:100%;padding:4px;background:#f9f9f9;"
			height="712"
			title="cinderellacityproject"
		></iframe>
	</JDGContentBoxFloating>
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
			<br />
			Download the latest version
			<a href="https://github.com/deanstein/CinderellaCityProject">here</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
