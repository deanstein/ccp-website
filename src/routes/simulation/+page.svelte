<script>
	import { scrollToAnchor } from 'jdg-ui-svelte/jdg-utils.js';
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';

	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGButton,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFeatureCard,
		JDGFullWidthContainer,
		JDGImageCompare,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '../../components/Donate.svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-shared-styles.js';
	import { onMount } from 'svelte';
	import { repoOwner } from 'jdg-ui-svelte/jdg-persistence-management.js';

	// latest version of the simulation
	let latestTag = { name: '', date: '', url: '' };

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
			scrollToAnchor('continue', true, 0);
		}, 100);
	};

	// get the latest tag for the simulation
	// TODO: move this to jdg-ui-svelte utils
	/**
	 * Fetches the latest tag and its details from a GitHub repository.
	 * @param {string} owner - The owner of the repository.
	 * @param {string} repo - The name of the repository.
	 * @returns {Promise<{name: string, date: string}>} An object containing the name of the latest tag and its date.
	 */
	/**
	 * Fetches the latest tag and its commit details from a GitHub repository.
	 * @param {string} owner - The owner of the repository.
	 * @param {string} repo - The name of the repository.
	 * @returns {Promise<{name: string, date: string}>} An object containing the name of the latest tag and the date of the associated commit.
	 */
	/**
	 * Fetches the latest tag and its commit details from a GitHub repository.
	 * @param {string} owner - The owner of the repository.
	 * @param {string} repo - The name of the repository.
	 * @returns {Promise<{name: string, date: string}>} An object containing the name of the latest tag and the formatted date of the associated commit.
	 */
	/**
	 * Fetches the latest tag and its commit details from a GitHub repository.
	 * @param {string} owner - The owner of the repository.
	 * @param {string} repo - The name of the repository.
	 * @returns {Promise<{name: string, date: string}>} An object containing the name of the latest tag and the formatted date of the associated commit.
	 */
	/**
	 * Fetches the latest tag and its commit details from a GitHub repository.
	 * @param {string} owner - The owner of the repository.
	 * @param {string} repo - The name of the repository.
	 * @returns {Promise<{name: string, date: string, url: string}>} An object containing the name of the latest tag, the formatted date of the associated commit, and the URL to the tag.
	 */
	export const fetchLatestTagWithCommitDate = async (owner, repo) => {
		const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/tags`);
		const tags = await response.json();

		if (tags.length === 0) {
			throw new Error('No tags found in the repository');
		}

		const latestTag = tags[0];

		if (!latestTag.commit.sha) {
			throw new Error('SHA for the latest tag commit is undefined');
		}

		const commitDetailsResponse = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/commits/${latestTag.commit.sha}`
		);
		const commitDetails = await commitDetailsResponse.json();

		const date = new Date(commitDetails.commit.committer.date);
		const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1)
			.toString()
			.padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;

		const url = `https://github.com/${owner}/${repo}/releases/tag/${latestTag.name}`;

		return {
			name: latestTag.name,
			date: formattedDate,
			url: url
		};
	};

	onMount(async () => {
		try {
			latestTag = await fetchLatestTagWithCommitDate(repoOwner, 'CinderellaCityProject');
		} catch (error) {
			console.error(error);
			latestTag = { name: 'No tags available', date: '', url: '' };
		}
	});
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
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
	<JDGContentBoxFloating animateWhenVisible={false}>
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
			featureTitle="HISTORIC ACCURACY"
			featureDescription="Experience Cinderella City Mall in full 3D, complete with accurate architectural details
			and signage based on real photographs and original blueprints of the mall"
			titleFontFamily="Righteous"
			backgroundColor={jdgColors.accentColorsCCP[1]}
		>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_exterior_1}
				maxHeight={'400px'}
				useCompactHeightOnMobile={true}
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
				useCompactHeightOnMobile={true}
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
				useCompactHeightOnMobile={true}
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
			{#if !isDownloadShown}
				<div id="latest-version" style="padding-top: 25px; color: gray; font-size: 12pt">
					Latest version: {latestTag.name}
				</div>
			{/if}
		</JDGBodyCopy>
		{#if isDownloadShown}
			<JDGBodyCopy paddingTop="0">
				Let's rock!
				<br /><br />
				<i>Once Upon a Time at Cinderella City</i> is under development, but in-progress builds are
				available for intrepid mall fans to try out.
				<br /><br />
				A few things to keep in mind about the simulation:
				<ul>
					<li>It's a work in progress and many storefronts are unfinished.</li>
					<li>It's currently only available on Microsoft Windows.</li>
				</ul>
				<br />
				<h3 style="text-align: left;">DOWNLOAD</h3>
				<ul>
					<li>
						Download the latest release: <a href={latestTag.url} target="_blank">{latestTag.name}</a
						>
					</li>
					<li>Click "Assets" below the release notes</li>
					<li>Download the .7z file ending in "_Win"</li>
				</ul>
				<h3 style="text-align: left;">EXTRACT</h3>
				<ul>
					<li>
						If you're on Windows 10, you may need to install <a
							href="https://www.7-zip.org/a/7z2201-x64.exe"
							target="_blank">7-Zip</a
						> first
					</li>
					<li>
						Extract the .7z file
						<ul>
							<li>
								On Windows 10: Right-click the .7z file, 7-Zip -> Extract To
								"CinderellaCityProject..."
							</li>
							<li>On Windows 11: Right-click the .7z file -> Extract All...</li>
						</ul>
					</li>
				</ul>
				<h3 style="text-align: left;">RUN</h3>
				<ul>
					<li>Double-click on "Cinderella City Simulation.exe"</li>
					<li>Optionally choose your desired resolution</li>
					<ul>
						<li>Recommended starting resolution: 1920x1080 or similar</li>
						<li>Higher resolutions may result in slower performance depending on your hardware</li>
					</ul>
				</ul>
				<br /><br />
				This is a work-in-progress, so these builds may exhibit bugs and unexpected behavior.
			</JDGBodyCopy>
		{/if}
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="CONTROLS">
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			After the simulation loads, you'll find yourself at the Main Menu, where you can pick a time
			and place to start.
			<br /><br />
			Once you're in the simulation, here's how to navigate:
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
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
		<JDGBodyCopy textAlign="center" paddingTop="0" paddingBottom="0">
			<h3>XBOX ONE</h3>
			Simulation v0.8.0 and newer supports an Xbox One controller attached to the PC.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.ccp_xbox_one_controller_diagram}
			cropToFillContainer={false}
		/>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="KNOWN ISSUES">
		<JDGBodyCopy paddingTop="0">
			The simulation is still under development, so it has a few known issues:
			<br /><br />
			<ul>
				<li>Many storefronts in both time periods are blank/unfinished</li>
				<li>The audio when walking outside the mall is too short and loops too quickly</li>
				<li>
					Jumping or using anti-gravity mode while walking outside the mall will play the interior
					audio unexpectedly
				</li>
			</ul>
			<br />
			Noticing an issue not listed? <a href="./contact">Get in touch</a>!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGUpNext
		item1Label={'LEARN MORE ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
		item3Label="SEE THE EXHIBIT"
		item3Href="./exhibit"
		item3ImageAttributes={imageAttributesCollection.ccp_exhibit_4}
	/>
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
