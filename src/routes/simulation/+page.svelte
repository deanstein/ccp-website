<script>
	import { scrollToAnchor } from 'jdg-ui-svelte/jdg-utils.js';
	import { getDistanceToBottomOfHeader } from 'jdg-ui-svelte/jdg-ui-management.js';

	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGButton,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFeatureCard,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageCompare,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-shared-styles.js';
	import Donate from '../../components/Donate.svelte';
	import { urls } from '$lib/strings';

	// in order to download, name a price
	let isDownloadShown = false;
	const showDownload = () => {
		isDownloadShown = true;
	};
	const donateAndShowDownload = () => {
		scrollToAnchor('donate');
		showDownload();
	};
	const continueAndShowDownload = () => {
		showDownload();
		const element = document.getElementById('continue');
		setTimeout(() => {
			scrollToAnchorAlt('continue', true, 0);
		}, 100);
	};

	// @ts-expect-error
	const scrollToAnchorAlt = (anchorId, accountForHeader = true, additionalOffset = 0) => {
		const element = document.getElementById(anchorId);
		if (element) {
			const topValue = accountForHeader
				? element.offsetTop -
					getDistanceToBottomOfHeader().value -
					additionalOffset +
					window.scrollY
				: element.offsetTop - additionalOffset + window.scrollY;
			window.scrollTo({
				top: topValue,
				behavior: 'smooth'
			});
		} else {
			console.error('No scroll element found.');
		}
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
	<JDGJumpTo />
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
				<JDGButton
					faIcon="fa-mug-saucer"
					label="Buy the project a coffee"
					onClickFunction={donateAndShowDownload}
					backgroundColor={jdgColors.accentColorsCCP[1]}
					width="300px"
					gap="15px"
				/>
				{#if !isDownloadShown}
					<JDGButton
						faIcon="fa-circle-arrow-right"
						label="Continue without donating"
						onClickFunction={continueAndShowDownload}
						isPrimary={false}
						width="300px"
						gap="15px"
						isEnabled={!isDownloadShown}
					/>
				{/if}
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
	<JDGContentBoxFloating title="CONTROLS">
		<JDGBodyCopy paddingTop="0">
			After the simulation loads, you'll find yourself at the Main Menu, where you can pick a time
			and place to start.
			<br /><br />
			Once you're in the simulation, here's how to navigate:
			<br /><br />
			<h3>KEYBOARD</h3>
			<ul>
				<li>
					<b>WASD</b> to walk forward, left, right, and backward
				</li>
				<ul>
					<li>
						<i>Hold <b>Shift</b> to run!</i>
					</li>
				</ul>
				<li>
					Use your <b>mouse</b> to look around
				</li>
				<li>
					<b>Spacebar</b> to jump
				</li>
				<li>
					<b>Q</b> and <b>E</b> to time-travel
				</li>
				<li>
					<b>P</b> to toggle people on/off
				</li>
				<li>
					<b>O</b> to reset the people to their original positions
				</li>
				<li>
					<b>G</b> to enter/exit anti-gravity mode. While in anti-gravity mode:
				</li>
				<ul>
					<li>
						Hold <b>R</b> to rise/ascend
					</li>
					<li>
						Hold <b>F</b> to fall/descend
					</li>
					<li>
						Hit <b>G</b> again to toggle gravity back on
					</li>
				</ul>
				<li>
					<b>X</b> to take a screenshot (stored at users/AppData/The Cinderella City Project/Cinderella
					City Simulation/Screenshots)
				</li>
				<li>
					<b>1</b>, <b>2</b>, <b>3</b>, <b>4</b> to cycle between special post-processing camera modes.
					Tap the number again to return to the default.
				</li>
				<li>
					<b>ESC</b> to go to the Pause Menu
					<ul>
						<li>
							<i
								>You can also time-travel from here, with a visual showing what the other eras look
								like at this point in space</i
							>
						</li>
					</ul>
				</li>
				<li>
					<b>M</b> to go to the Main Menu
				</li>
				<li>
					<b>V</b> to go to the Visualization Menu
				</li>
				<li>
					<b>U</b> to go to the Audio Menu
				</li>
			</ul>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="UP NEXT" includeInJumpTo={false}>
		<JDGGridLayout>
			<JDGImageTile
				label="LEARN MORE ABOUT THE PROJECT"
				href="./about"
				labelJustification={'center'}
				imageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
			/>
			<JDGImageTile
				label="READ THE FULL HISTORY"
				href="./history"
				imageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
				labelJustification={'center'}
			/>
			<JDGImageTile
				label="SEE THE EXHIBIT"
				href="./exhibit"
				imageAttributes={imageAttributesCollection.ccp_exhibit_4}
				labelJustification={'center'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	h3 {
		text-align: center;
	}

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
</style>
