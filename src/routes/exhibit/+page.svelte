<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '../../components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.ccp_exhibit_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		primaryText="EXPERIENCE THE FAIRYTALE"
		primaryTextFontFamily="Righteous"
		secondaryText="at the Historic Englewood Museum"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <b>Cinderella City Project</b> has teamed up with
			<a href={$jdgSharedUrlsStore.historicEnglewood}>Historic Englewood</a> to create Englewood's
			first history museum, bringing to life the story of
			<a href="./history">Cinderella City Mall</a>
			as the inaugural exhibit.
			<br /><br />
			Immerse yourself in Cinderella City's history and design with life-size photos, little-known facts,
			and several artifacts from the mall, including the iconic Cinder Alley sign which has been restored
			to its former glory.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.ccp_exhibit_4,
				imageAttributesCollection.ccp_exhibit_2,
				imageAttributesCollection.ccp_exhibit_3
			]}
		/>
		<JDGBodyCopy>
			The exhibit also features the fully-interactive <a href="./simulation"
				>Cinderella City Simulation</a
			>, which guides visitors on a tour of historic photos inside both eras of the mall, and also
			offers a game controller for intrepid mall walkers to take control and go where they please.
			<br /><br />
			As an added bonus, the building that hosts the Historic Englewood museum was originally built in
			1985 as Cinderella City's Broadway Southwest department store.
			<br /><br />
			<div><b>Update: Extended by popular demand!</b></div>
			The Cinderella City exhibit is on now through&nbsp;<s>July 26, 2025</s>&nbsp;<b
				>August 30, 2025</b
			>!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="EXHIBIT INFORMATION">
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
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
		item3Label="MORE ON THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
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
</style>
