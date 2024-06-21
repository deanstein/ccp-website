<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
	import Layout from '../+layout.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.ccp_exhibit_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.5)"
		primaryText="EXPERIENCE THE FAIRYTALE"
		primaryTextFontFamily="Righteous"
		secondaryText="at the Historic Englewood Museum"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating>
		<JDGBodyCopy>
			The <b>Cinderella City Project</b> has teamed up with
			<a href="https://historicenglewood.org/">Historic Englewood</a> to create Englewood's first
			history museum, bringing to life the story of <a href="./history">Cinderella City Mall</a> as
			the inaugural exhibit.
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
			As an added bonus, the building that hosts the Historic Englewood museum was originally built
			in 1985 as Cinderella City's Broadway Southwest department store.
			<br /><br />
			<b>The Cinderella City exhibit is on now through fall 2024.</b>
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
			Saturdays 10am to 2pm MST
			<br /><br />
			<h3>ADMISSION</h3>
			Adults: $10
			<br />
			Historic Englewood Members: $8
			<br />
			Seniors and Military Members: $8
			<br />
			Children 5-12: $5
			<br />
			Children under 5: Free
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	h3 {
		margin: 5px;
	}
</style>
