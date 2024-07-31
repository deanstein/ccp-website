<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';

	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0" gap="0">
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
		<JDGBodyCopy paddingTop="0">
			In 1998, a young <a href={jdgSharedUrls.jdgLinkedIn}>Josh Goldstein</a> was in his parents'
			car when they passed by a vast and shocking demolition site in Englewood, Colorado.
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
			The hulking expanse of a partially-demolished structure and its surrounding parking deck was jarring,
			providing eerie views into cavernous spaces of a once-thriving place. Josh asked his parents what
			he was seeing and they described the former magic of a defunct shopping center called
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
							Visit on <a href={jdgSharedUrls.ccpInstagram}>Instagram</a>,
							<a href={jdgSharedUrls.ccpFacebook}>Facebook</a>, or
							<a href={jdgSharedUrls.ccpYouTube}>YouTube</a>.
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
							Watch the whole story on <a href={jdgSharedUrls.ccpYouTube}>YouTube</a> or read the
							full history <a href="./history">here</a>.
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
		<JDGBodyCopy paddingTop="0">
			The man behind the project is involved in other endeavors related to Cinderella City and
			adjacent topics:
			<br /><br />
			<h3>Historic Englewood Museum</h3>
			<!-- prettier-ignore -->
			As Secretary of  <a href={jdgSharedUrls.historicEnglewood}>Historic Englewood</a>, Josh helped
			design and build Englewood's first history museum and its inaugural
			<a href="./exhibit">Cinderella City exhibit</a>, on now through fall 2024.
			<br /><br />
			<h3>The Villa Italia Project</h3>
			Villa Italia was Cinderella City's sister: Designed and developed by the same man and experiencing
			an eerily similar timeline and trajectory.
			<br /><br />
			Although it doesn't have the same cult following, Villa Italia has a fascinating story and design
			evolution. Check it out on <a href={jdgSharedUrls.vipInstagram}>Instagram</a> and
			<a href={jdgSharedUrls.vipFacebook}>Facebook</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="UP NEXT" includeInJumpTo={false}>
		<JDGGridLayout>
			<JDGImageTile
				label="SEE THE EXHIBIT"
				href="./exhibit"
				imageAttributes={imageAttributesCollection.ccp_exhibit_4}
				labelJustification={'center'}
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

<style>
	h3 {
		text-align: center;
	}
</style>
