<script>
	import { jdgSharedUrlsStore } from 'jdg-ui-svelte';
	import imageMetaRegistry from '$lib/image-meta-registry';
	import {
		JDGBodyCopy,
		JDGButton,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '$lib/components/Donate.svelte';

	let showOriginalHours = false;
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageMeta={imageMetaRegistry.ccp_exhibit_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.7)"
		primaryText="EXPERIENCE THE FAIRYTALE"
		primaryTextFontFamily="Righteous"
		secondaryText="at the Historic Englewood Museum"
		overlapWithHeader={false}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <b>Cinderella City Project</b> partnered with
			<b><a href={$jdgSharedUrlsStore.historicEnglewood}>Historic Englewood</a></b> to create
			Englewood's first history museum, launching with an exhibition on
			<a href="./history">Cinderella City Mall</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="FEATURES">
		<JDGBodyCopy paddingTop="0">
			Immerse yourself in Cinderella City's history and design with life-size photos, little-known
			facts, and several artifacts from the mall, including the iconic Cinder Alley sign which has
			been restored to its former glory.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.ccp_exhibit_4,
				imageMetaRegistry.ccp_exhibit_2,
				imageMetaRegistry.ccp_exhibit_3
			]}
		/>
		<JDGBodyCopy>
			The exhibit includes a theater with a 175" projection screen showing the fully-interactive <a
				href="./simulation">Cinderella City Simulation</a
			>. <br /><br />Visitors can enjoy guided tours featuring real historic photos inside both eras
			of the mall, or use the included game controller to walk anywhere in the mall they please.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[
				imageMetaRegistry.ccp.exhibit.theater_2,
				imageMetaRegistry.ccp.exhibit.theater_1
			]}
			showAttribution={false}
			showCaption={false}
		/>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="HISTORIC CONTEXT">
		<JDGBodyCopy paddingTop="0">
			Adding a layer of history to the experience, the exhibit takes place inside the last surviving piece of the mall: the
			Broadway Southwest department store constructed in 1985.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageMetaSet={[imageMetaRegistry.ecc_abandoned_1, imageMetaRegistry.ecc_existing_south]}
			showAttribution={false}
			showCaption={false}
		/>
		<br />
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="HOURS AND ADMISSION">
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			The Cinderella City exhibit was open from May 2024 through August 2025 and is now closed.
			<br /><br />
			Thank you to everyone who visited and shared their memories!
			<br /><br />
			<div class="toggle-original-hours-container">
				<JDGButton
					faIcon={showOriginalHours ? 'fa-chevron-up' : 'fa-chevron-down'}
					label={showOriginalHours
						? 'Hide original hours and admission'
						: 'Show original hours and admission'}
					onClickFunction={() => (showOriginalHours = !showOriginalHours)}
					isPrimary={true}
				/>
			</div>
		</JDGBodyCopy>
		{#if showOriginalHours}
			<JDGBodyCopy paddingTop="0" textAlign="center">
				<h3>LOCATION</h3>
				<b>Historic Englewood Museum</b>
				<br />
				Englewood Civic Center, 2nd Floor
				<br />
				1000 Englewood Parkway
				<br />
				Englewood, Colorado 80110
				<br /><br />
				<h3>HOURS</h3>
				Saturdays 10am to 2pm MT
				<br />
				<div class="age">through August 30, 2025</div>
				<br />
				<h3>ADMISSION</h3>
				<table class="admission-table">
					<tr>
						<td class="left">Adult</td>
						<td class="right">$5.00</td>
					</tr>
					<tr>
						<td class="left"
							>Youth
							<div class="age">18 or under</div></td
						>
						<td class="right"><i>Free!</i></td>
					</tr>
					<tr>
						<td class="left">Historic Englewood members</td>
						<td class="right"><i>Free!</i></td>
					</tr>
					<tr>
						<td class="left">Military members</td>
						<td class="right"><i>Free!</i></td>
					</tr>
				</table>
			</JDGBodyCopy>
		{/if}
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageMetaRegistry.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageMetaRegistry.rose_mall_60s70s_construction_1}
		item3Label="MORE ON THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageMetaRegistry.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>

<style>
	h3 {
		margin: 5px;
	}

	.age {
		font-style: italic;
		font-size: 0.9rem;
		color: gray;
		padding: 0;
		margin-top: -8px;
	}

	.admission-table {
		width: 100%;
		table-layout: fixed;
		border-collapse: collapse;
	}

	.admission-table td {
		padding: 0.5rem;
		vertical-align: top;
	}

	.admission-table .left {
		width: 50%;
		text-align: right;
		white-space: nowrap;
		overflow-wrap: break-word;
		padding-left: 0.5rem;
		border-right: 2px solid gainsboro;
	}

	.admission-table .right {
		width: 50%;
		text-align: left;
		padding-left: 0.5rem;
	}

	.toggle-original-hours-container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 1rem;
	}
</style>
