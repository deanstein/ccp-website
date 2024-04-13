<script>
	import {
		JDGAccentBlock,
		JDGAccentText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGImageTile
	} from 'jdg-ui-svelte';

	import imageAttributesCollection from './image-attributes-collection';
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
			The <strong>Cinderella City Project</strong> is an immersive journey into an unconventional mid-century
			retail destination, hailed by its creator as a "city under a roof," which faded from fairytale
			to nightmare in just 30 years.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.aerial_60s_70s_1,
				imageAttributesCollection.blue_mall_60s70s_2,
				imageAttributesCollection.cinder_alley_1
			]}
		></JDGImageHybridGridCarousel>
		<JDGBodyCopy>
			The city of Englewood, Colorado changed forever in 1968 when mall magnate Gerri Von Frellick
			opened a controversial 1.35 million-square foot shopping center on the site of the community's
			beloved City Park.
			<br /><br />
			Dubbed "Cinderella City," Von Frellick's new development was thrust upon an unwitting community
			after a protracted legal battle over its location. The result was an oversized complex squeezed
			into an incompatible site, featuring a unique M-shaped complex broken up into 5 sub-malls and surrounded
			by a two-level parking garage.
			<br /><br />
			True to its name, Cinderella City was more than a mall - it was a city under a roof, and a novel
			precursor to today’s mixed-use retail developments. It not only offered retail by local artisans,
			it featured office space, city services, and an outpost of Englewood High School.
			<br /><br />
			The mall served as Englewood's gathering place, frequently hosting community events like performances,
			competitions, and trade shows. The floors themselves featured imprinted busts of civic and business
			leaders who helped make the fairytale a reality.
			<br /><br />
		</JDGBodyCopy>

		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.plan_60s70s_1,
				imageAttributesCollection.rose_mall_60s70s_2,
				imageAttributesCollection.city_campus_1
			]}
		></JDGImageHybridGridCarousel>

		<JDGBodyCopy>
			Not all fairytales last, and despite accounting for 52% of Englewood's revenue in at its peak
			in 1974, Cinderella City eventually fell on hard times. Changing customer trends, an outmoded
			layout, and skyrocketing maintenance costs forced the original owners to sell in the late
			1970s.
			<br /><br />
			A modernization effort in the 1980s by the new owners helped somewhat, but the mall continued to
			decline and decay. Cinderella City eventually closed in 1997 with just one store left. The City
			of Englewood redeveloped the mall in 1998, resulting in a new transit-oriented open-air development
			called CityCenter.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.rose_mall_80s90s_1,
				imageAttributesCollection.blue_mall_80s90s_exterior_1,
				imageAttributesCollection.blue_mall_80s90s_demolition_1
			]}
		/>
		<JDGBodyCopy>
			<JDGFullWidthContainer>
				<JDGAccentBlock>
					<JDGAccentText
						primaryText={`Cinderella City's short but explosive life offers lessons in retail design, land use, and placemaking.`}
					></JDGAccentText>
				</JDGAccentBlock>
			</JDGFullWidthContainer>
			<br /><br />
			Created by an architectural designer and software developer, the
			<strong>Cinderella City Project</strong>
			aims to document this unique place through a <a href="./history">detailed history</a>, an
			<a href="./layout">architectural dissection</a>
			of its layout, and a fully-fledged <a href="./simulation">interactive simulation</a> which transports
			visitors back in time to the mall's two distinct periods: 1968-1987, and 1988-1997.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGContentBoxFloating title="ABOUT THE PROJECT">
		<JDGBodyCopy>
			Seeing Cinderella City fall to the wrecking ball in 1998 made Josh Goldstein want to become an
			architect at a young age. After living that dream, Josh pivoted his career into 3D
			architectural software, and decided to harness his new skills to pay tribute to the place that
			changed his life.
			<br /><br />
			Using blueprints, directories, and photos, Josh used cutting-edge 3D software to faithfully recreate
			Cinderella City in stunning detail, for both the 1968-1977 era and the 1988-1997 era of the mall’s
			life.
			<br /><br />
			The two versions of the digital mall were combined into the Cinderella City Simulation, where anyone
			can revisit Cinderella City in three dimensions and time-travel to see how its unique details,
			signage, shoppers, and music changed over time.
			<br /><br />
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
