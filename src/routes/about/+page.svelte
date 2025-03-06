<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';

	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import Donate from '../../components/Donate.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.ccp_construction_60s70s_3}
		showOverlay={true}
		overlayColorRgba="rgba(30, 30, 30, 0.6)"
		primaryText="THE ORIGIN"
		secondaryText="of The Cinderella City Project"
		primaryTextFontFamily="Righteous"
		overlayImageTextFontFamily="Righteous"
		overlapWithHeader={true}
	/>
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy fontSizeMultiplier={1.15}>
			The <b>Cinderella City Project</b> is one man's quest to document and reconstruct a quirky
			mid-century shopping center in Englewood, Colorado which inspired his career in architecture
			and software development.
			<br /><br />
			The project examines the design trends and development decisions that led to
			<a href="./history">Cinderella City Mall</a>
			and its subsequent failure, as well as the lasting effects it had on Englewood which can still
			be felt today.
			<br /><br />
			Cinderella City's dramatic story set a career path in motion, resulting in a unique project that
			pays homage to a special place and draws lessons from its demise that can be applied today in retail
			design, land use, and placemaking.
			<br /><br />
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<JDGContentContainer>
	<JDGJumpTo />
	<JDGContentBoxFloating title="BACKGROUND">
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			In 1998, a young <a href={$jdgSharedUrlsStore.jdgLinkedIn}>Josh Goldstein</a> was in his parents'
			car when they passed by a vast and shocking demolition site in Englewood, Colorado.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.blue_mall_80s90s_demolition_1}
			cropToFillContainer={false}
			showCaption={true}
			maxHeight="40vh"
		/>
		<JDGBodyCopy>
			The hulking expanse of a partially-demolished structure and its surrounding parking deck was
			jarring, providing eerie views into cavernous spaces of a once-thriving place. Josh asked his
			parents what he was seeing and they described the former magic of a defunct shopping center
			called
			<a href="./history">Cinderella City Mall</a>.
			<br /><br />
			Thanks to a burgeoning internet and the City of Englewood's efforts to track the redevelopment
			progress on their website, Josh delved into the history of Cinderella City and began to understand
			its original design intent, sharply contrasted with the mall's final state.
			<br /><br />
			The speed of Cinderella City's decline was particularly striking. In just three decades, it deteriorated
			from Englewood's crown jewel to the colossal demolition site Josh saw. His research ignited a desire
			to pursue a career in architecture and retail development, with the goal of creating great places
			that honor and learn from our architectural past.
			<br /><br />
			Like other 90s kids, Josh played with LEGOs. But his focus was on structural systems and building
			designs, often evoking what he saw at the mall demolition site. In the early 2000s, Josh taught
			himself how to use 3D modeling software on his childhood computer, leading to a new passion for
			digital design and curiosity about software development.
			<br /><br />
			In 2006, Josh started a high school internship at Alberta Development Partners, working on the
			redevelopment of the 1974 Southglenn Mall. After spending a year documenting the demolition and
			site preparation for new construction, Josh joined the design team and witnessed firsthand how
			retail centers are crafted and built.
			<br /><br />
			After receiving his Master of Architecture degree from Kansas State University in 2013, Josh jumped
			in to his early career at a world-class design firm where he designed mixed-use retail developments
			as well as major renovations for existing enclosed shopping centers.
			<br /><br />
			In 2015, Josh jumped at an opportunity to join the tech world, creating cutting-edge architectural
			3D modeling software for architects around the world at Autodesk.
			<br /><br />
			While at Autodesk, Josh regularly exercised his team's 3D software by designing various fictional
			adaptive reuse solutions for buildings at risk of demolition around Denver. But one day, he decided
			to start reconstructing Cinderella City. Its enormous scale, rotated structural grid, and sheer
			amount of unique details and materials made it an excellent testing candidate for performance and
			reliability.
			<br /><br />
			The Cinderella City model became detailed enough that Josh felt it could be taken a step further.
			What if he put the 3D model into a videogame engine, enlivening the space with light, music, and
			animation? That's what he did, and the Cinderella City Simulation was born.
			<br /><br />
			Over the years, his collection of photographs, blueprints, and documents about Cinderella City
			had grown considerably - painting a nuanced picture of the mall's successes and failures. Along
			with the simulation, he saw an opportunity to share those with the world to tell a deeper story
			about the mall.
			<br /><br />
			On March 7, 2018 - the 50th anniversary of Cinderella City's grand opening -
			<b>The Cinderella City Project</b>
			launched on social media offering historic photos, updates on the digital reconstruction, and little-known
			facts about this unique retail icon.
			<br /><br />
			The project continues in the spare time of its creator and perhaps always will. Read about its
			goals and progress below.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="GOALS">
		<JDGBodyCopy paddingTop="0">
			Wide-ranging and ambitious, the Cinderella City Project set out to achieve several goals for
			both the personal development of its creator and for the community at large:
			<br />
			<ol>
				<li>
					<b>Share the memories</b>
					<ul>
						<li>
							The project has collected myriad photographs, videos, and documents of this retail
							icon. Why not share them?
						</li>
						<li>
							Visit on <a href={$jdgSharedUrlsStore.ccpInstagram}>Instagram</a>,
							<a href={$jdgSharedUrlsStore.ccpFacebook}>Facebook</a>, or
							<a href={$jdgSharedUrlsStore.ccpYouTube}>YouTube</a>.
						</li>
					</ul>
				</li>
				<li>
					<b>Create a simulation</b>
					<ul>
						<li>
							The next best thing to bringing it back: Josh learned video game development in his
							spare to bring a static 3D model to life.
						</li>
						<li>The simulation is <a href="./simulation">available now</a>.</li>
					</ul>
				</li>
				<li>
					<b>Record the story</b>
					<ul>
						<li>
							The story of Cinderella City is deeper than it appears, with present-day impacts and
							lessons for the future.
						</li>
						<li>
							Watch the whole story on <a href={$jdgSharedUrlsStore.ccpYouTube}>YouTube</a> or read
							the full history <a href="./history">here</a>.
						</li>
					</ul>
				</li>
				<li>
					<b>Offer an analysis</b>
					<ul>
						<li>
							Cinderella City was a unique place and deserves a deeper understanding. See it through
							an architect's eyes - from its layout and design to its challenges and failures.
						</li>
						<li><a href="./analysis">Let's get nerdy.</a></li>
					</ul>
				</li>
				<li>
					<b>Build a home</b>
					<ul>
						<li>You're here! It works. 🎉</li>
						<li>
							Josh built this website and its underpinnings specifically with a home for the
							Cinderella City Project in mind.
						</li>
						<!-- TODO, when Donate content is componentized -->
						<!-- <li>
							Love what you see? Consider donating to the project.
						</li> -->
					</ul>
				</li>
			</ol>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="OTHER INITIATIVES">
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			The creator of The Cinderella City Project is involved in other endeavors related to
			Cinderella City and adjacent topics:
		</JDGBodyCopy>
		<JDGBodyCopy paddingBottom="0" textAlign="center" textWrap="balance">
			<h3>Saving The Englewood Civic Center</h3>
			<!-- prettier-ignore -->
			One final piece of Cinderella City is still standing, but maybe not for long.</JDGBodyCopy
		>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.ecc_abandoned_1}
				showCaption
				cropToFillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy paddingBottom="0" paddingTop="0">
			Originally built as the Broadway Southwest in 1985 as part of Cinderella City's mid-life
			renovation, the building now known as the Englewood Civic Center was saved from the wrecking
			ball and adaptively reused into its current form in 2000.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.ecc_existing_south}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingBottom="0" paddingTop="0">
			Now, the Englewood Civic Center may be razed as part of an Englewood redevelopment plan
			currently taking shape.
			<br /><br />
			Harnessing his experience in retail design and software engineering, Josh put together an adaptive
			reuse concept for the City of Englewood to demonstrate the benefits and possibilities of reconfiguring
			the building and extending its life once more. The design includes new uses like Englewood's first
			food hall, public plazas with history exhibits, and other possible uses like a hotel and office
			space.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.ecc_reuse_opt_5_terraces}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingTop="0">
			Check out the proposed concept and support it by signing your name at
			<a href={$jdgSharedUrlsStore.ccpCivicCenterPetition} target="_blank">Change.org</a>.
		</JDGBodyCopy>
		<JDGBodyCopy paddingBottom="0">
			<h3>Historic Englewood Museum</h3>
			<!-- prettier-ignore -->
			As Secretary of &nbsp;<a href={$jdgSharedUrlsStore.historicEnglewood}>Historic Englewood</a>, Josh
			helped design and build Englewood's first history museum and its inaugural
			<a href="./exhibit">Cinderella City exhibit</a>.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.ccp_exhibit_4}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingTop="0">
			The Cinderella City exhibit is on now through July 2025.
		</JDGBodyCopy>
		<JDGBodyCopy paddingBottom="0">
			<h3>The Villa Italia Project</h3>
			Villa Italia was Cinderella City's sister mall: Designed and developed by the same man and experiencing
			an eerily similar timeline and trajectory.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.villa_italia_grand_opening_1}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingTop="0">
			Although it doesn't have the same cult following, Villa Italia has a fascinating story and
			design evolution. Josh is now documenting the mall's history and may eventually reconstruct it
			in a similar fashion as Cinderella City.
			<br /><br />
			Check out the Villa Italia Project on <a href={$jdgSharedUrlsStore.vipInstagram}>Instagram</a>
			and
			<a href={$jdgSharedUrlsStore.vipFacebook}>Facebook</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<Donate />
	<JDGUpNext
		item1Label={'SEE THE EXHIBIT'}
		item1Href={'./exhibit'}
		item1ImageAttributes={imageAttributesCollection.ccp_exhibit_4}
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
	}
</style>
