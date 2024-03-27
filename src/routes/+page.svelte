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
	} from 'jdg-ui-svelte/jdg-state-management.js';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
	<JDGImageFullWidth
	imageAttributes={imageAttributesCollection.get('blue-mall-1')}
	primaryText="STEP BACK IN TIME"
	primaryTextFontFamily="Righteous"
	secondaryText="to Cinderella City Mall"
/>
	<JDGContentBoxFloating isForBodyCopy={true}>
		<span>
		The Cinderella City Project is an examination of a unique mid-century shopping destination, developed by its creator as a "city under a roof", which became both a fairtyale and a nightmare for its actual city: Englewood, Colorado.
			<br><br>
		<JDGImageTile maxHeight="400px" imageAttributes={imageAttributesCollection.get('aerial-60s70s-1')} fillContainer={false} showCaption={true} showAttribution={true}/>
		<br><br>
		From concept to layout, Cinderella City was quirky, thematic, and unconventional in its every detail, and its short 30-year life provided lessons in retail design, architecture, and placemaking. 
		<br><br>
		Take a trip into history and see the good, the bad, and the ugly of Cinderella City through <a href="./history">historic photographs</a> and an accurate digital 3D re-creation called the <a href="./simulation">Cinderella City Simulation.</a>
		</span>
</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
<JDGContentBoxFloating title="SHORT HISTORY" isForBodyCopy={true}>
		In 1968, the city of Englewood, Colorado changed forever when mall magnate Gerri Von Frellick
		opened a 1.35 million-square foot shopping center on the site of Englewood’s beloved City Park.
		<br><br>
		Dubbed "Cinderella City," Von Frellick's new development was more than a mall - it was a city under a roof, and a novel precursor to
		today’s mixed-use retail developments. It not only offered retail by local artisans, it featured office space, city services, and an outpost of Englewood High School. The floors themselves were designed with imprinted busts of civic and business leaders who helped make the fairytale a reality.
		<br /><br />
		Not all fairytales last, and despite accounting for 52% of Englewood's revenue in 1974, Cinderella City eventually fell on hard times. Modernization in the
		1980s helped somewhat, but the mall eventually closed with just one store left. The City of Englewood
		redeveloped the mall in 1998, resulting in a new transit-oriented open-air development called CityCenter.
		<br /><br />
		Cinderella City is being brought back to life virtually as an interactive
		exhibit known as The Cinderella City Project - an accurate simulation of the mall which transports
		visitors back in time to the mall’s two distinct periods: 1968-1987, and 1988-1997.
		<span>
			Read more about <a href="./history">Cinderella City's history</a>
		</span>

		This website is under construction. Check back soon!
	</JDGContentBoxFloating>
</JDGContentContainer>
