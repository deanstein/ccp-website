<script>
	import { urls } from '$lib/strings';
	import imageAttributesCollection from '../image-attributes-collection';

	import {
		JDGAccentBlockWithText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageCarousel,
		JDGImageCompare,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';

	const jumpToNavItems = [
		instantiateObject(jdgNavItem, {
			label: 'SHORT HISTORY',
			href: '#SHORT-HISTORY'
		}),
		instantiateObject(jdgNavItem, {
			label: 'PROJECT BRIEF',
			href: '#PROJECT-BRIEF'
		}),
		instantiateObject(jdgNavItem, {
			label: 'EXPLORE FURTHER',
			href: '#EXPLORE-FURTHER'
		})
	];
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.blue_mall_60s70s_1}
		primaryText="STEP BACK IN TIME"
		primaryTextFontFamily="Righteous"
		secondaryText="to Cinderella City Mall"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <strong>Cinderella City Project</strong> is an immersive journey into an unconventional
			mid-century retail destination, hailed by its creator as a "city under a roof," which faded
			from fairytale to nightmare in just 30 years.
			<br /><br />
			Created by architectural designer and software developer
			<a href={urls.jdgLinkedIn}>Josh Goldstein</a>, a Colorado native whose career path was
			unknowingly influenced by Cinderella City's demolition, the project's goal is to document this
			unique place in <b>three ways</b>:
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label="DETAILED HISTORY"
				href="./history"
				imageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
				labelJustification={'center'}
			/>
			<JDGImageTile
				label="ARCHITECTURAL ANALYSIS"
				href="./anatomy"
				imageAttributes={imageAttributesCollection.plan_60s70s_1}
				labelJustification={'center'}
			/>
			<JDGImageTile
				label="IMMERSIVE SIMULATION"
				href="./simulation"
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_1}
				labelJustification={'center'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGJumpTo {jumpToNavItems} />
	<JDGContentBoxFloating title="SHORT HISTORY">
		<JDGBodyCopy paddingTop="0">
			The city of Englewood, Colorado changed forever in 1968 when mall magnate Gerri Von Frellick
			opened a controversial 1.35 million square-foot shopping center on the site of Englewood's
			beloved City Park.
			<br /><br />
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.blue_mall_60s70s_parking_2,
				imageAttributesCollection.blue_mall_60s70s_2,
				imageAttributesCollection.cinder_alley_1
			]}
		/>
		<JDGBodyCopy>
			Dubbed "Cinderella City," Von Frellick's new shopping center became the largest mall west of
			the Mississippi in spite of massive community resistance and a protracted legal battle over
			its final location.
			<br /><br />
			The result was an oversized complex squeezed into a tight boundary, employing a unique M-shaped
			layout surrounded by a 2-level parking garage. It was so large that in order to make navigation
			easier for customers, the mall was broken up into five sub-malls, each with its own unique color
			and character.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.aerial_60s_70s_1,
					imageAttributesCollection.plan_60s70s_1
				]}
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy>
			True to its name, Cinderella City was more than a mall: it was a city under a roof, and a
			novel precursor to today’s mixed-use developments. It not only offered retail by local
			artisans, it featured office space, city services, and an outpost of Englewood High School.
			<br /><br />
			The mall served as Englewood's gathering place, frequently hosting community events like performances,
			competitions, and trade shows. The floors themselves featured imprinted busts of civic and business
			leaders who helped make the fairytale a reality.
			<br /><br />
		</JDGBodyCopy>

		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.rose_mall_60s70s_2,
				imageAttributesCollection.city_campus_1,
				imageAttributesCollection.blue_mall_60s70s_event_1
			]}
		></JDGImageHybridGridCarousel>

		<JDGBodyCopy>
			Not all fairytales last, and despite accounting for 52% of Englewood's revenue in at its peak
			in 1974, Cinderella City eventually fell on hard times. Changing customer trends, an outdated
			design and layout, and skyrocketing maintenance costs forced the original owners to sell in
			the late 1970s.
			<br /><br />
			A modernization effort in the 1980s by the new owners helped somewhat, but the mall continued to
			decline and decay. Cinderella City eventually closed in 1997 with just one store left.
			<br /><br />
			The City of Englewood redeveloped the mall in 1998, resulting in a new transit-oriented open-air
			development called CityCenter.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.rose_mall_80s90s_1,
				imageAttributesCollection.blue_mall_80s90s_exterior_1,
				imageAttributesCollection.blue_mall_80s90s_demolition_1
			]}
		/>
		<JDGBodyCopy>
			Lasting only 30 years from construction to demolition, the impacts from Cinderella City's
			sharp rise and fall are still being felt in Englewood today.
			<br /><br />
			There's even more to Cinderella City's story. <a href="./history">Read the full history</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGFullWidthContainer>
		<JDGAccentBlockWithText
			primaryText={"Cinderella City's short but explosive life offers lessons in retail design, land use, and placemaking."}
			backgroundColor={jdgColors.accentColorsCCP[1]}
		/>
	</JDGFullWidthContainer>
	<JDGContentBoxFloating title="PROJECT BRIEF">
		<JDGBodyCopy paddingTop="0">
			Seeing Cinderella City fall to the wrecking ball in 1998 made 8-year-old <a
				href={urls.jdgLinkedIn}>Josh Goldstein</a
			>
			vow to become an architect in pursuit of making great places that honor and learn from our architectural
			past.
			<br /><br />
			<JDGFullWidthContainer>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.blue_mall_80s90s_demolition_1}
					fillContainer={false}
					showCaption={true}
					maxHeight="40vh"
				/>
			</JDGFullWidthContainer>
			<br /><br />
			After receiving a Master of Architecture degree and working at a world-class architectural design
			firm, Josh pivoted his career into 3D architectural software, where he harnessed new skills to
			pay tribute to the place that changed his life.
			<br /><br />
			Extracting details from floor plans, directories, and photos, Josh used cutting-edge 3D modeling
			technology to accurately reconstruct Cinderella City in impressive detail, including period-correct
			architecture, signage, and lighting.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.ccp_construction_60s70s_2,
				imageAttributesCollection.ccp_blue_mall_60s70s_2,
				imageAttributesCollection.ccp_blue_mall_60s70s_exterior_1
			]}
		/>
		<JDGBodyCopy>
			The 3D modeling effort covers both the first 10 years (1968-1978) and the last 10 years
			(1987-1997) of the mall's operational existence - dramatically illustrating the evolution of
			retail and design over three decades.
			<br /><br />
			Bringing together his architecture experience and a desire to learn software and videogame development,
			Josh fused the two versions of the mall into the
			<a href="./simulation">Cinderella City Simulation:</a> an immersive, interactive history
			exhibit where visitors can experience Cinderella City as an accurate and detailed
			reconstruction in 3D space.
			<br /><br />
			The simulation can also time-travel between Cinderella City's distinct eras to see how its unique
			mid-century vibe evolved over time, each era complete with floating historical photographs to ground
			the simulation in reality:
		</JDGBodyCopy>
		<JDGGridLayout maxColumns={2}>
			<div style="display: flex; width: fit-content; margin-left: auto;">
				<JDGImageCompare
					imageAttributes1={imageAttributesCollection.ccp_blue_mall_60s70s_1}
					imageAttributes2={imageAttributesCollection.ccp_blue_mall_80s90s_1}
					maxHeight="400px"
					showBlurInUnfilledSpace={false}
				/>
			</div>
			<div style="width: fit-content; display: flex; flex-direction: row-reverse">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.ccp_historic_photos_gold_mall_60s70s_1}
					fillContainer={false}
					maxHeight="400px"
				/>
			</div>
		</JDGGridLayout>

		<JDGBodyCopy>
			The Cinderella City Project also aims to document the mall through the curation and
			preservation of historic photographs, blueprints, and artifacts.
			<br /><br />
			The project regularly shares rare photographs and little-known facts on
			<a href="./contact">its channels</a>, and also helped design and build a new Historic
			Englewood Museum which debuted with a <a href="./exhibit">Cinderella City exhibit</a> - on now
			through 2024.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="EXPLORE FURTHER">
		<JDGGridLayout>
			<JDGImageTile
				label="LEARN MORE ABOUT THE PROJECT"
				href="./about"
				labelJustification={'center'}
				imageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
			/>
			<JDGImageTile
				label="READ THE FULL HISTORY"
				href="./history"
				imageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
				labelJustification={'center'}
			/>
			<JDGImageTile
				label="EXPERIENCE THE SIMULATION"
				href="./simulation"
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
				labelJustification={'center'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
