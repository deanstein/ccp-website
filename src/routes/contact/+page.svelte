<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
	import Donate from '../../components/Donate.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'GET IN TOUCH'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			The Cinderella City Project would love to hear from you!
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			<h3 style="margin-bottom: 0;">SOCIAL MEDIA</h3>
			Follow along for historic photographs and project updates.
			<br />
			<div style="margin-top: 10px;">
				<SocialMedia />
			</div>
			<br />
			<br />
			<h3 style="margin-bottom: 0;">LEAVE A MEMORY</h3>
			Share your memories of Cinderella City as a voicemail.
			<br />
			Memories may be used in a future version of the simulation.
			<br />
			<div class="phone-icon-number-container">
				<i
					class="fa-solid fa-phone"
					style="display: flex; justify-content: center; font-size: 24px; padding: 10px;"
				/>
				<div style="font-size: 20px; font-weight: bold;">7-CIN-CITY-68</div>
				<div style="font-size: 15px; line-height: 10px;">(724) 624-8968</div>
			</div>
			<br /><br />
			<h3 style="margin-bottom: 10px;">CONTACT FORM</h3>
		</JDGBodyCopy>
		<div class="iframe-wrapper">
			<JDGIFrame
				title={'Contact The Cinderella City Project'}
				src={'https://docs.google.com/forms/d/e/1FAIpQLSc_zDmHr4Ug1HJREfxIqIWC7Kwz9g7DJhtQy_aia-rwVCtrYg/viewform?embedded=true'}
				maxHeightPx="900"
			/>
		</div>
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
	.iframe-wrapper {
		width: 100%;
		margin-top: -40px;
	}
</style>
