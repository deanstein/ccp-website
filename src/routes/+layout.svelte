<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import extend from 'just-extend';

	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';
	import jdgNotificationTypes from 'jdg-ui-svelte/schemas/jdg-notification-types.js';

	import { ccpWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import { accentColors } from 'jdg-ui-svelte/states/ui-state.js';

	import {
		JDGAppContainer,
		JDGBackground,
		JDGFooter,
		JDGHeader,
		JDGNotificationBanner
	} from 'jdg-ui-svelte';
	import SocialMedia from '../components/SocialMedia.svelte';

	// META TAGS
	// will be be sourced from +layout.js first,
	// then optionally +page.js as overrides via $page
	export let data; // meta tag data from $page
	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);

	// define the nav items in the header
	const navItemHome = instantiateObject(jdgNavItem);
	navItemHome.label = 'HOME';
	navItemHome.href = '/';

	const navItemAbout = instantiateObject(jdgNavItem);
	navItemAbout.label = 'ABOUT';
	navItemAbout.href = '/about';

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
		navItemHistory,
		navItemAnatomy,
		navItemSimulation,
		navItemExhibit,
		navItemContact
	];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
	//@ts-expect-error
	const jdgUIVersion = packageJson?.dependencies['jdg-ui-svelte'];

	const additionalVersionData = `JDG UI: v${jdgUIVersion}`;

	const disclaimer =
		'Photographs are from public domain sources or are used with permission and credited accordingly.';
</script>

<MetaTags {...metaTags} />
<JDGAppContainer
	appLoadingIconSrc="./ccp-logo.png"
	showHeaderStripes={true}
	appAccentColors={$accentColors}
	linkColorSimple={$accentColors[0]}
>
	<JDGNotificationBanner
		message="Coming soon! This website is under construction and may be unfinished in some places."
		notificationType={jdgNotificationTypes.warning.id}
	/>
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
		{additionalVersionData}
		{disclaimer}
		showDevToolsButton
	>
		<SocialMedia />
	</JDGFooter>
</JDGAppContainer>
