<script>
	import imageAttributesCollection from '../image-attributes-collection';

	import {
		JDGAccentBlock,
		JDGAccentText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImage,
		JDGImageCarousel,
		JDGImageTile
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title="COMING SOON">
		<JDGBodyCopy paddingTop="0">
			<span style="display: flex; justify-content: center;">
				This page is under construction. Check back soon!
			</span>
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.construction_1}
			maxHeight="60vh"
			showCaption={true}
			showAttribution={true}
		/>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating>
		<JDGBodyCopy>
			Cinderella City Mall debuted on March 7, 1968 in Englewood, Colorado changing the city forever
			when mall magnate Gerri Von Frellick opened his controversial 1.35 million-square foot
			shopping center on the site of the community's City Park. But the story actually starts much
			earlier.
			<br /><br />
			In 1952, real estate developer Gerri Von Frellick was looking for a new beginning after the collapse
			of his construction empire in Texas, and chose Colorado for his fresh start. By 1956, he had gotten
			back on his feet and opened Lakeside Mall in north Denver. Lakeside joined Cherry Creek as Colorado’s
			two main shopping centers, with Lakeside being the first enclosed, air-conditioned mall experience
			in Colorado.
			<br /><br />
			<JDGImageTile imageAttributes={imageAttributesCollection.lakeside_1} fillContainer={false} />
			<br /><br />
			After Lakeside, Von Frellick set his eyes on the southern suburbs. By 1960, he announced plans
			to build a shopping mall on the KLZ radio tower land at East Hampden Ave and South University Boulevard
			in the Cherry Hills neighborhood. Code-named Cinderella City, the design was originally intended
			to be Victorian, with an emphasis on landscape to shield the mall from the surrounding neighborhood.
			<br /><br />
			The proposed zoning change for a shopping center in Cherry Hills was denied by Arapahoe County.
			Von Frellick publicly clashed with citizens and lawsuits were filed. Eventually, a group of businesses
			and City of Englewood leaders offered Von Frellick Englewood’s City Park as an alternative to the
			KLZ radio tower site. Englewood residents fiercely opposed this site too, and lawsuits went to
			the Colorado Supreme Court, where it was decided that Von Frellick could build his shopping mall
			on the City Park site.
			<br /><br />
			The original landscaped concept with retro architecture would eventually be used for Villa Italia
			(1966), while the tenant list and square footage requirements would carry over into the new location
			for Cinderella City.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.parking_blue_mall_1,
				imageAttributesCollection.blue_mall_60s70s_1
			]}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGAccentBlock>
		<JDGAccentText
			primaryText={`“… because three years of surveys show that’s the place a regional shopping center is needed and
			should be located.”`}
			secondaryText="Gerri Von Frellick, 1960"
		/>
	</JDGAccentBlock>
</JDGContentContainer>
