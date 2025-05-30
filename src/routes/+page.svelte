<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';
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
		JDGJumpTo,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-shared-styles.js';
	import Donate from '../components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.blue_mall_60s70s_1}
		primaryText="STEP BACK IN TIME"
		primaryTextFontFamily="Righteous"
		secondaryText="to Cinderella City Mall"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <strong>Cinderella City Project</strong> is an immersive journey into an unconventional
			mid-century retail destination, hailed by its creator as a "city under a roof," which faded
			from fairytale to nightmare in just 30 years.
			<br /><br />
			Created by architectural designer and software developer
			<a href={$jdgSharedUrlsStore.jdgLinkedIn}>Josh Goldstein</a>, a Colorado native whose career
			path was unknowingly influenced by Cinderella City's demolition, the project's goal is to
			document this unique place in <b>three ways</b>:
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label="DETAILED HISTORY"
				href="./history"
				imageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
				labelJustification={'center'}
				useAutoHeightOnMobile={false}
				maxHeight={'300px'}
			/>
			<JDGImageTile
				label="ARCHITECTURAL ANALYSIS"
				href="./analysis"
				imageAttributes={imageAttributesCollection.plan_60s70s_1}
				labelJustification={'center'}
				useAutoHeightOnMobile={false}
				maxHeight={'300px'}
			/>
			<JDGImageTile
				label="IMMERSIVE SIMULATION"
				href="./simulation"
				imageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_1}
				labelJustification={'center'}
				useAutoHeightOnMobile={false}
				maxHeight={'300px'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGJumpTo />
	<JDGContentBoxFloating title="SHORT HISTORY">
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
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
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			Seeing Cinderella City fall to the wrecking ball in 1998 made 8-year-old <a
				href={$jdgSharedUrlsStore.jdgLinkedIn}>Josh Goldstein</a
			>
			vow to become an architect in pursuit of making great places that honor and learn from our architectural
			past.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.blue_mall_80s90s_demolition_1}
			cropToFillContainer={false}
			showCaption={true}
			maxHeight="40vh"
		/>
		<JDGBodyCopy>
			After receiving a Master of Architecture degree and working at a world-class architectural
			design firm, Josh pivoted his career into 3D architectural software, where he harnessed new
			skills to pay tribute to the place that changed his life.
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
		<JDGGridLayout>
			<JDGImageCompare
				imageAttributes1={imageAttributesCollection.ccp_blue_mall_60s70s_1}
				imageAttributes2={imageAttributesCollection.ccp_blue_mall_80s90s_1}
				maxHeight="400px"
				showBlurInUnfilledSpace={false}
				caption={"Cinderella City's Blue Mall, seen in two distinct time periods."}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ccp_historic_photos_gold_mall_60s70s_1}
				cropToFillContainer={true}
				showCaption={true}
				maxHeight="400px"
			/>
		</JDGGridLayout>

		<JDGBodyCopy>
			The Cinderella City Project also aims to document the mall through the curation and
			preservation of historic photographs, blueprints, and artifacts.
			<br /><br />
			The project regularly shares rare photographs and little-known facts on
			<a href="./contact">social media channels</a>, and also helped design and build a new Historic
			Englewood Museum which debuted with a <a href="./exhibit">Cinderella City exhibit</a> - on now
			through July 2025.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="LATEST UPDATES">
		<JDGBodyCopy paddingTop="0" simpleHyperlinkStyle={true}>
			<ul>
				<li>
					June 22, 2024: <a href="./exhibit" target="_blank"
						>The Cinderella City exhibit at the Historic Englewood Museum is now open</a
					>
				</li>
				<li>
					July 29, 2023: <a href="https://youtu.be/GUgowEJG9HY" target="_blank"
						>See the latest progress: Simulation v0.7 update video</a
					>
				</li>
				<li>
					April 26, 2022: <a href="https://youtu.be/va9xoslXjQo" target="_blank"
						>Watch the latest history and simulation presentation</a
					>
				</li>
			</ul>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="PRESS COVERAGE">
		<JDGBodyCopy paddingTop="0" simpleHyperlinkStyle={true}>
			<h3>LATEST</h3>
			<ul>
				<li>
					December 6, 2024 (<i>Westword</i>)
					<a
						href="https://www.westword.com/arts/cinderella-city-exhibit-brings-famed-metro-denver-mall-back-to-life-22705262"
						target="_blank"
					>
						Cinderella City Exhibit Brings Famed Mall Back to Life
					</a>
				</li>
				<li>
					March 21, 2024 (<i>Englewood Herald</i>)
					<a
						href="https://coloradocommunitymedia.com/2024/03/21/englewood-historic-museum/"
						target="_blank"
					>
						Immersive retro Cinderella City display on tap at soon-to-open Englewood museum
					</a>
				</li>
				<li>
					April 26, 2022 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/cinderella-city-famous-colorado-mall-virtual-online-project-update-13955248"
						target="_blank">Once Upon a Time at Cinderella City: Project Update</a
					>
				</li>
				<li>
					February 19, 2021 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/englewood-citycenter-development-and-fight-to-save-cinderella-citys-final-remains-11853344"
						target="_blank"
						>Fight to Save the Final Remains of Cinderella City
					</a>
				</li>
			</ul>
			<br />
			<h3>OLDER</h3>
			<ul>
				<li>
					April 23, 2020 (<i>5280 Magazine</i>):
					<a
						href="https://www.5280.com/2020/04/one-denverite-is-creating-a-virtual-tour-of-the-iconic-cinderella-city-mall/"
						target="_blank"
						>One Denverite is Creating a Virtual tour of the Iconic Cinderella City Mall</a
					>
				</li>
				<li>
					January 28, 2020 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/cinderella-city-virtual-video-game-project-update-2020-11516741/"
						target="_blank"
						>Cinderella City Virtual Video Game Project Update
					</a>
				</li>
				<li>
					November 1, 2018 (<i>Very Famous Magazine</i>):
					<a
						href="http://veryfamousmagazine.com/fairytale-mall-colorado-virtual-life/"
						target="_blank"
						>A Giant Fairytale Mall in Colorado Is Being Brought Back to Virtual Life</a
					>
				</li>
				<li>
					June 28, 2018 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/cinderella-city-vintage-photos-helping-to-turn-famed-mall-into-video-game-10303551"
						target="_blank"
						>Cinderella City Vintage Photos Helping to Turn famed Mall Into video Game</a
					>
				</li>
				<li>
					March 16, 2018 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/bringing-cinderella-city-back-to-virtual-life-for-its-50th-anniversary-10069280"
						target="_blank"
						>Bringing Cinderella City Back to virtual Life for its 50th Anniversary
					</a>
				</li>
				<li>
					January 16, 2018 (<i>Westword</i>):
					<a
						href="https://www.westword.com/news/cinderella-city-project-video-preview-new-effects-music-by-dead-mall-10983679"
						target="_blank"
						>Cinderella City Project Video Preview new Effects, Music by Dead Mall
					</a>
				</li>
			</ul>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'LEARN MORE ABOUT THE PROJECT'}
		item1Href={'./about'}
		item1ImageAttributes={imageAttributesCollection.ccp_construction_60s70s_4}
		item2Label={'READ THE FULL HISTORY'}
		item2Href="./history"
		item2ImageAttributes={imageAttributesCollection.rose_mall_60s70s_construction_1}
		item3Label="EXPERIENCE THE SIMULATION"
		item3Href="./simulation"
		item3ImageAttributes={imageAttributesCollection.ccp_blue_mall_60s70s_2}
	/>
</JDGContentContainer>

<style>
	h3 {
		text-align: center;
		margin: 5px;
	}
</style>
