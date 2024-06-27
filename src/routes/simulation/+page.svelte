<script>
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGAccentBlock,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFeatureCard,
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
		overlayColorRgba="rgba(30, 30, 30, 0.4)"
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
			period-correct architectural detailing and signage backed up by real photographs that are also
			available in the 3D space. The cavernous spaces are enlivened with music and people which are also
			unique to each era.
			<br /><br />
			Players can time-travel between Cinderella City's eclectic time periods to experience the drastic
			evolution in retail and design over three decades, reflecting the fast-changing consumer trends
			which ultimately befelled the mall.
			<br /><br />
			<JDGFullWidthContainer>
				<JDGImageCompare
					imageAttributes1={imageAttributesCollection.ccp_blue_mall_60s70s_1}
					imageAttributes2={imageAttributesCollection.ccp_blue_mall_80s90s_1}
					caption="Cinderella City's central Blue Mall as seen simulated in 1968-1978 and in 1987-1997."
					maxHeight="60vh"
					showBlurInUnfilledSpace={false}
				/>
			</JDGFullWidthContainer>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGContentBoxFloating title="FEATURES">
		<JDGFeatureCard
			featureTitle="HISTORICALLY ACCURATE"
			featureDescription="Experience Cinderella City Mall in full 3D, complete with accurate architectural details
			and signage based on real photographs and original blueprints of the mall"
			titleFontFamily="Righteous"
			backgroundColor={jdgColors.accentColorsCCP[1]}
		>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_exterior_1}
				maxHeight={'400px'}
				compactModeOnMobile={true}
			/>
		</JDGFeatureCard>
		<JDGFeatureCard
			featureTitle="TIME TRAVELING"
			featureDescription="Time travel between two distinct periods: The first 10 years (1968-1978) and the last 10
					years (1987-1997) of the mall's life"
			titleFontFamily="Righteous"
			backgroundColor={jdgColors.accentColorsCCP[2]}
			imageAlign="right"
		>
			<JDGImageCompare
				imageAttributes1={imageAttributesCollection.ccp_rose_mall_60s70s_1}
				imageAttributes2={imageAttributesCollection.ccp_rose_mall_80s90s_1}
				maxHeight="400px"
				showBlurInUnfilledSpace={true}
			/>
		</JDGFeatureCard>
		<JDGFeatureCard
			featureTitle="FLOATING PHOTOS"
			featureDescription="See dozens of historic photographs in the 3D space of each era, grounding the simulation
		in reality and opening a unique window back in time"
			titleFontFamily="Righteous"
			backgroundColor={jdgColors.accentColorsCCP[0]}
		>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ccp_historic_photos_gold_mall_60s70s_1}
				maxHeight={'400px'}
				compactModeOnMobile={true}
			/>
		</JDGFeatureCard>
		<JDGFeatureCard
			featureTitle="CAMERA MODES"
			featureDescription="View the mall through different camera modes like Sepia and Vaporwave"
			titleFontFamily="Righteous"
			backgroundColor={jdgColors.accentColorsCCP[1]}
			imageAlign="right"
		>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ccp_vaporwave_blue_mall_60s70s_1}
				maxHeight={'400px'}
				compactModeOnMobile={true}
			/>
		</JDGFeatureCard>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="DONATE">
		<JDGBodyCopy paddingTop="0">
			Digitally reconstructing a massive shopping center in two time periods is hard work! The
			Cinderella City Project is self-funded and built by just one person, requiring dedication,
			time, and resources.
			<br /><br />
			Support the project by buying its creator coffee via Ko-Fi! <br /><br />
			Donations will be used to purchase the content, software, and hardware needed to bring Cinderella
			City Mall back to life as realistically as possible.
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

<style>
	ul {
		margin: 4px;
	}
</style>
