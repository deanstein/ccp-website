<script>
	import {
		JDGAccentBlock,
		JDGAccentText,
		JDGBodyCopy,
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
		imageAttributes={imageAttributesCollection.blue_mall_60s70s_1}
		primaryText="STEP BACK IN TIME"
		primaryTextFontFamily="Righteous"
		secondaryText="to Cinderella City Mall"
	/>
	<JDGContentBoxFloating>
		<JDGBodyCopy>
			The <strong>Cinderella City Project</strong> is an immersive look at a unique mid-century shopping
			destination, developed by its creator as a "city under a roof," which became both a fairtyale and
			a nightmare for the actual city of Englewood, Colorado.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.aerial_60s_70s_1}
				showCaption={true}
				showAttribution={true}
				compactModeOnMobile={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.blue_mall_60s70s_2}
				showCaption={true}
				showAttribution={true}
				compactModeOnMobile={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.cinder_alley_1}
				showBlurInUnfilledSpace={true}
				showCaption={true}
				showAttribution={true}
				compactModeOnMobile={true}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			From concept to layout to construction, Cinderella City was an unconventional experiment in
			mixed-use development, and its short but explosive 30-year life provides lessons in retail
			design, land use, and placemaking.
		</JDGBodyCopy>
		<JDGBodyCopy>
			The <strong>Cinderella City Project</strong> aims to document Cinderella City as an
			architectural artifact - from a detailed history, to an anatomical analysis, to a
			fully-fledged interactive simulation.
			<br /><br />
			Take a trip into history and see the good, the bad, and the ugly of Cinderella City through a
			<a href="./history">detailed history</a>
			and an accurate digital 3D re-creation called the
			<a href="./simulation">Cinderella City Simulation.</a>
		</JDGBodyCopy>
		<JDGImageTile
			maxHeight="400px"
			imageAttributes={imageAttributesCollection.rose_mall_60s70s_1}
			fillContainer={false}
			showCaption={true}
			showAttribution={true}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="SHORT HISTORY">
		<JDGBodyCopy>
			In 1968, the city of Englewood, Colorado changed forever when mall magnate Gerri Von Frellick
			opened a controversial 1.35 million-square foot shopping center on the site of Englewood’s
			beloved City Park.
			<br /><br />
			Originally planned for another location, Cinderella City was thrust upon an unwitting community
			after a protracted legal battle, replacing a beloved park but ushering in an era of prosperity
			never seen in Englewood before.
			<br /><br />
			Dubbed "Cinderella City," Von Frellick's new development was more than a mall - it was a city under
			a roof, and a novel precursor to today’s mixed-use retail developments. It not only offered retail
			by local artisans, it featured office space, city services, and an outpost of Englewood High School.
			The floors themselves were designed with imprinted busts of civic and business leaders who helped
			make the fairytale a reality.
			<br /><br />
			Not all fairytales last, and despite accounting for 52% of Englewood's revenue in 1974, Cinderella
			City eventually fell on hard times. Modernization in the 1980s helped somewhat, but the mall eventually
			closed with just one store left. The City of Englewood redeveloped the mall in 1998, resulting
			in a new transit-oriented open-air development called CityCenter.
			<br /><br />
			Cinderella City is being brought back to life virtually as an interactive exhibit known as The
			Cinderella City Project - an accurate simulation of the mall which transports visitors back in
			time to the mall’s two distinct periods: 1968-1987, and 1988-1997.
			<br /><br />
			Read more about <a href="./history">Cinderella City's history</a>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
