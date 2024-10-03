<script>
	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';
	import jdgNotificationTypes from 'jdg-ui-svelte/schemas/jdg-notification-types.js';

	import { ccpWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import { getAccentColors } from 'jdg-ui-svelte/jdg-state-management.js';
	import {
		accentColors,
		doShowImageDetailOverlay,
		imageDetailAttributes
	} from 'jdg-ui-svelte/states/ui-state.js';

	import {
		JDGAppContainer,
		JDGBackground,
		JDGFooter,
		JDGHeader,
		JDGImageDetailOverlay,
		JDGNotificationBanner
	} from 'jdg-ui-svelte';
	import SocialMedia from '../components/SocialMedia.svelte';

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
	>
		<SocialMedia />
	</JDGFooter>
	{#if $doShowImageDetailOverlay}
		<JDGImageDetailOverlay imageAttributes={$imageDetailAttributes} />
	{/if}
</JDGAppContainer>
