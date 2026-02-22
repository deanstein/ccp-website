<script>
	import { jdgSharedUrlsStore } from 'jdg-ui-svelte';
	import { JDGSocialMedia } from 'jdg-ui-svelte';
</script>

<JDGSocialMedia
	instagramHref={$jdgSharedUrlsStore.ccpInstagram}
	facebookHref={$jdgSharedUrlsStore.ccpFacebook}
	youtubeHref={$jdgSharedUrlsStore.ccpYouTube}
/>
