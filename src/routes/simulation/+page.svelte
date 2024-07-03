<script>
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';

	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFeatureCard,
		JDGFullWidthContainer,
		JDGImageCompare,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';
	import Donate from '../../components/Donate.svelte';
	import { urls } from '$lib/strings';

	const jumpToNavItems = [
		instantiateObject(jdgNavItem, {
			label: 'FEATURES',
			href: '#FEATURES'
		}),
		instantiateObject(jdgNavItem, {
			label: 'DONATE',
			href: '#DONATE'
		}),
		instantiateObject(jdgNavItem, {
			label: 'DOWNLOAD',
			href: '#DOWNLOAD'
		})
	];

	// in order to download, name a price
	let isDownloadShown = false;
	const showDownload = () => {
		isDownloadShown = true;
	};
	const donateAndShowDownload = () => {
		const element = document.getElementById('DONATE');
		if (element) element.scrollIntoView({ behavior: 'smooth' });
		showDownload();
	};
	const continueAndShowDownload = () => {
		showDownload();
		const element = document.getElementById('continue');
		setTimeout(() => {
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};
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
			available in the 3D space. The vast mall expanses are enlivened with music and people which are
			also unique to each era.
			<br /><br />
			Players can also time-travel between Cinderella City's eclectic time periods to experience the
			drastic evolution in retail and design over three decades, reflecting the fast-changing consumer
			trends which ultimately befelled the mall.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCompare
				imageAttributes1={imageAttributesCollection.ccp_blue_mall_60s70s_1}
				imageAttributes2={imageAttributesCollection.ccp_blue_mall_80s90s_1}
				caption="Cinderella City's central Blue Mall as seen simulated in 1968-1978 and in 1987-1997."
				maxHeight="60vh"
				showBlurInUnfilledSpace={true}
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGJumpTo {jumpToNavItems} />
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
	<Donate />
	<JDGContentBoxFloating title="DOWNLOAD">
		<JDGBodyCopy paddingTop="0" textAlign="center">
			Ready to try <b>Once Upon a Time at Cinderella City</b>?
			<br /><br />
			You can name your price to optionally support the project.
			<br /><br />
			<div class="buttons-container">
				<button class="button-primary" on:click={donateAndShowDownload}>
					Buy the project a coffee
				</button>
				<button class="button-secondary" on:click={continueAndShowDownload}>
					Continue without donating
				</button>
			</div>
			<div id="continue" title="continue"></div>
		</JDGBodyCopy>
		{#if isDownloadShown}
			<JDGBodyCopy paddingTop="0">
				Let's rock!
				<br /><br />
				A few things to keep in mind about the simulation:
				<ul>
					<li>It's a work in progress and many storefronts are unfinished.</li>
					<li>It's currently only available on Windows.</li>
				</ul>
				<br />
				Download the latest version
				<a href={urls.githubDownload}>here</a>.
			</JDGBodyCopy>
		{/if}
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	ul {
		margin: 4px;
	}

	.buttons-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	button {
		padding: 15px;
		width: 400px;
		border-radius: 20px;
		border: none;
		cursor: pointer;
		font-weight: bold;
	}

	button:hover {
		background-color: rgb(162, 233, 233);
		color: black;
	}

	.button-primary {
		color: white;
		background-color: #e19311;
	}

	.button-secondary {
		background-color: lightgray;
	}
</style>
