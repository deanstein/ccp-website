<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
	import Layout from '../+layout.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.ccp_exhibit_composite}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.8)"
		primaryText="EXPERIENCE THE FAIRYTALE"
		primaryTextFontFamily="Righteous"
		secondaryText="at the Historic Englewood Museum"
		secondaryTextFontFamily="Righteous"
	/>
	<JDGContentBoxFloating>
		<JDGBodyCopy>
			The <b>Cinderella City Project</b> has teamed up with
			<a href="https://historicenglewood.org/">Historic Englewood</a> to create Englewood's first history museum, bringing to life the story of <a href="./history">Cinderella City Mall</a> as the inaugural exhibit.
			<br><br>
			Immerse yourself in Cinderella City's history and design with life-size photos, little-known facts, and several artifacts from the mall, including the iconic Cinder Alley sign which has been restored to its former glory. 
			<br><br>
			The Cinderella City exhibit is on now through fall 2024.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="EXHIBIT INFORMATION">
		<JDGBodyCopy paddingTop="0">
			<h3>LOCATION</h3>
			Catch the Cinderella City exhibit inside the last remaining piece of Cinderella City Mall:
			<br><br>
			<b>Historic Englewood museum</b>
			<br>
			Englewood Civic Center, 2nd Floor
			<br>
			1000 Englewood Parkway
			<br>
			Englewood, Colorado 80110
			<br><br>
			<h3>HOURS</h3>
			Saturdays 10am to 2pm MST
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
