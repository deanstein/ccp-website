<script>
	import {
		JDGAccentBlock,
		JDGAccentText,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';

	import imageAttributesCollection from './image-attributes-collection';

	import {
		setShowImageDetailModal,
		setImageDetailAttributes
	} from 'jdg-ui-svelte/jdg-ui-management.js';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.get('blue-mall-1')}
		primaryText="STEP BACK IN TIME"
		primaryTextFontFamily="Righteous"
		secondaryText="to Cinderella City Mall"
	/>
	<JDGContentBoxFloating isForBodyCopy={true}>
		In 1968, the city of Englewood, Colorado changed forever when mall magnate Gerri Von Frellick
		opened a 1.35 million-square foot shopping center on the site of Englewood’s beloved City Park.
		Cinderella City was more than a mall - it was a city under a roof, and a novel precursor to
		today’s mixed-use retail developments.
		<br /><br />
		Not all fairytales last, and Cinderella City eventually fell on hard times. Modernization in the
		1980s helped somewhat, but the mall eventually closed with just one store left. The City of Englewood
		redeveloped the mall in 1998, resulting in the City Center you’re standing in today.
		<br /><br />
		But the legend lives on! Cinderella City is being brought back to life virtually as an interactive
		exhibit known as The Cinderella City Project - an accurate simulation of the mall which transports
		visitors back in time to the mall’s two distinct periods: 1968-1987, and 1988-1997.
	</JDGContentBoxFloating>
	<JDGContentBoxFloating isForBodyCopy={true}>
		In 1952, real estate developer Gerri Von Frellick was looking for a new beginning after the
		collapse of his construction empire in Texas, and chose Colorado for his fresh start. By 1956,
		he had gotten back on his feet and opened Lakeside Mall in north Denver. Lakeside joined Cherry
		Creek as Colorado’s two main shopping centers, with Lakeside being the first enclosed,
		air-conditioned mall experience in Colorado.
		<br /><br />
		<JDGImageTile
			onClickFunction={() => {
				setShowImageDetailModal(true);
				setImageDetailAttributes(imageAttributesCollection.get('lakeside-1'));
			}}
			imageAttributes={imageAttributesCollection.get('lakeside-1')}
			fillContainer={false}
		/>
		<br /><br />
		After Lakeside, Von Frellick set his eyes on the southern suburbs. By 1960, he announced plans to
		build a shopping mall on the KLZ radio tower land at East Hampden Ave and South University Boulevard
		in the Cherry Hills neighborhood. Code-named Cinderella City, the design was originally intended
		to be Victorian, with an emphasis on landscape to shield the mall from the surrounding neighborhood.
		<br /><br />
		The proposed zoning change for a shopping center in Cherry Hills was denied by Arapahoe County. Von
		Frellick publicly clashed with citizens and lawsuits were filed. Eventually, a group of businesses
		and City of Englewood leaders offered Von Frellick Englewood’s City Park as an alternative to the
		KLZ radio tower site. Englewood residents fiercely opposed this site too, and lawsuits went to the
		Colorado Supreme Court, where it was decided that Von Frellick could build his shopping mall on the
		City Park site.
		<br /><br />
		The original landscaped concept with retro architecture would eventually be used for Villa Italia
		(1966), while the tenant list and square footage requirements would carry over into the new location
		for Cinderella City.
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
	<JDGContentBoxFloating>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
