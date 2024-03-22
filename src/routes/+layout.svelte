<script>
	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';

	import { ccpWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader, JDGNotificationBanner } from 'jdg-ui-svelte';
	import 'jdg-ui-svelte/jdg-styling-root.css';
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';

	// define the nav items in the header
	const newNavItem1 = instantiateObject(jdgNavItem);
	newNavItem1.label = 'HOME';
	newNavItem1.href = '/';

	const newNavItem2 = instantiateObject(jdgNavItem);
	newNavItem2.label = 'ABOUT THE PROJECT';
	newNavItem2.href = '/about';

	const newNavItem3 = instantiateObject(jdgNavItem);
	newNavItem3.label = 'HISTORY OF CINDERELLA CITY';
	newNavItem3.href = '/history';

	const newNavItem4 = instantiateObject(jdgNavItem);
	newNavItem4.label = 'CINDERELLA CITY SIMULATION';
	newNavItem4.href = '/simulation';

	const newNavItem5 = instantiateObject(jdgNavItem);
	newNavItem5.label = 'CONTACT';
	newNavItem5.href = '/contact';

	const navItems = [newNavItem1, newNavItem2, newNavItem3, newNavItem4, newNavItem5];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
	//@ts-expect-error
	const jdgUIVersion = packageJson?.dependencies['jdg-ui-svelte'];

	const additionalVersionData = `JDG UI: v${jdgUIVersion}`;

	const disclaimer =
		'Photographs are from public domain sources or are used with permission and credited accordingly. See a photo with missing or wrong credit? Let us know.';
</script>

<JDGAppContainer appLoadingIconSrc="./ccp-logo.png">
	<JDGNotificationBanner message="Coming soon! This site is under construction." color={jdgColors.notificationWarning} />
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
	<JDGFooter repoName={ccpWebsiteRepoName} {appVersion} {additionalVersionData} {disclaimer} />
</JDGAppContainer>
