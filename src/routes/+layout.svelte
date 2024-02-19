<script>
	import { css } from '@emotion/css';
	import { JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';

	import navItem from 'jdg-ui-svelte/schemas/nav-item.js';

	import { ccpWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';

	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import 'jdg-ui-svelte/jdg-styling-root.css';
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';

	// define the nav items in the header
	const newNavItem1 = instantiateObject(navItem);
	newNavItem1.label = 'HOME';
	newNavItem1.href = '/';

	const newNavItem2 = instantiateObject(navItem);
	newNavItem2.label = 'ABOUT';
	newNavItem2.href = '/about';

	const newNavItem3 = instantiateObject(navItem);
	newNavItem3.label = 'CONTACT';
	newNavItem3.href = '/contact';

	const navItems = [newNavItem1, newNavItem2, newNavItem3];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
	//@ts-expect-error
	const jdgUIVersion = packageJson?.dependencies['jdg-ui-svelte'];

	const additionalVersionData = `JDG UI: v${jdgUIVersion}`;

	const disclaimer =
		'Photographs are from public domain sources or are used with permission and credited accordingly. See a photo with missing or wrong credit? Let us know.';

	// global styles, but using emotion css
	const ccpLayoutCss = css`
		a {
			color: ${jdgColors.text};
		}
		a.no-initial-highlight::before,
		.jdg-highlight-container .jdg-highlight::before {
			background: ${jdgColors.accentStripesJDG[0]};
		}
		a:before {
			background-color: ${jdgColors.accentStripesJDG[0]};
		}
	`;
</script>

<div class="ccp-layout {ccpLayoutCss}">
	<JDGHeader
		logoTitle={'THE CINDERELLA CITY PROJECT'}
		logoSrc={'./ccp-logo.png'}
		logoJustification="center"
		{navItems}
		useMobileNav={true}
	/>

	<JDGBackground />

	<slot />

	<JDGFooter repoName={ccpWebsiteRepoName} {appVersion} {additionalVersionData} {disclaimer} />
</div>

<style>
	.ccp-layout {
		display: flex;
		flex-direction: column;
	}
</style>
