<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import extend from 'just-extend';

	import { ccpWebsiteRepoName, jdgColors, jdgNavItem, instantiateObject } from 'jdg-ui-svelte';

	import { pageMeta } from '$lib/shared-strings';
	import imageMetaRegistry from '$lib/image-meta-registry';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';

	// META TAGS
	// will be be sourced from +layout.js first,
	// then optionally +page.js as overrides via $page
	export let data; // meta tag data from $page
	/** @type {Object.<string, any>} */
	let metaTags;
	$: {
		metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
		// make the title template simply the website title
		// if the page title is the same as the website title
		if (metaTags.title === pageMeta.home.title) {
			metaTags.titleTemplate = pageMeta.home.title;
		} else {
			metaTags.titleTemplate = pageMeta.titleTemplate;
		}
	}

	// GOOGLE ANALYLTICS
	// this enables tracking of each page dynamically
	const trackingId = 'G-8Y56LMC5GF';
	$: {
		// @ts-expect-error
		if (typeof gtag !== 'undefined') {
			// @ts-expect-error
			gtag('config', trackingId, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

	// define the nav items in the header
	const navItemHome = instantiateObject(jdgNavItem);
	navItemHome.label = 'HOME';
	navItemHome.href = '/';

	const navItemAbout = instantiateObject(jdgNavItem);
	navItemAbout.label = 'ABOUT';
	navItemAbout.href = '/about';

	const navItemPress = instantiateObject(jdgNavItem);
	navItemPress.label = 'PRESS';
	navItemPress.href = '/#press-coverage';

	const navItemDonate = instantiateObject(jdgNavItem);
	navItemDonate.label = 'DONATE';
	navItemDonate.href = '/#donate';

	const navItemHistory = instantiateObject(jdgNavItem);
	navItemHistory.label = 'HISTORY';
	navItemHistory.href = '/history';

	const navItemAnatomy = instantiateObject(jdgNavItem);
	navItemAnatomy.label = 'ANALYSIS';
	navItemAnatomy.href = '/analysis';

	const navItemSimulation = instantiateObject(jdgNavItem);
	navItemSimulation.label = 'SIMULATION';
	navItemSimulation.href = '/simulation';

	const navItemExhibit = instantiateObject(jdgNavItem);
	navItemExhibit.label = 'EXHIBIT';
	navItemExhibit.href = '/exhibit';

	const navItemContact = instantiateObject(jdgNavItem);
	navItemContact.label = 'CONTACT';
	navItemContact.href = '/contact';

	const navItems = [
		navItemHome,
		navItemAbout,
		navItemPress,
		navItemDonate,
		navItemHistory,
		navItemAnatomy,
		navItemSimulation,
		navItemExhibit,
		navItemContact
	];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;

	const disclaimer =
		'Photographs are from public domain sources or are used with permission and credited.';
</script>

<!-- GOOGLE ANALYTICS -->
<svelte:head>
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', trackingId);
	</script>
</svelte:head>
<MetaTags {...metaTags} />
<JDGAppContainer
	{imageMetaRegistry}
	appLoadingIconSrc="./ccp-logo.png"
	showHeaderStripes={true}
	accentColors={jdgColors.accentColorsCCP}
	linkColorSimple={jdgColors.accentColorsCCP[0]}
>
	<JDGHeader
		logoTitle={'THE CINDERELLA CITY PROJECT'}
		logoSrc={'./ccp-logo.png'}
		logoJustification="center"
		{navItems}
		useMobileNav={true}
	/>
	<JDGBackground />
	<!-- all content goes in this slot -->
	<slot />
	<JDGFooter
		alignItems="center"
		repoName={ccpWebsiteRepoName}
		{appVersion}
		{disclaimer}
		showDevToolsButton={true}
		copyrightHref={'https://www.jdeangoldstein.com'}
	>
		<SocialMedia />
	</JDGFooter>
</JDGAppContainer>
