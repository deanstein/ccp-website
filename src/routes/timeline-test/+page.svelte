<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import {
		// Helpers, constants, persistence
		JDG_CONTEXTS,
		buildingDataCollectionKey,
		fetchJsonFileList,
		jdgBuildingDataRepoName,
		jdgRepoOwner,
		readJsonFileFromRepo,
		// Components
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGTimeline
	} from 'jdg-ui-svelte';

	// Age-display wording for timeline events
	setContext(JDG_CONTEXTS.EVENT_AGE_SUFFIX_POSITIVE, 'after opening');
	setContext(JDG_CONTEXTS.EVENT_AGE_SUFFIX_NEGATIVE, 'before opening');

	const hostStore = writable(undefined);

	onMount(async () => {
		const files = await fetchJsonFileList(jdgRepoOwner, jdgBuildingDataRepoName);
		if (files?.length) {
			const data = await readJsonFileFromRepo(jdgRepoOwner, jdgBuildingDataRepoName, files[0]);
			const hosts = data?.[buildingDataCollectionKey];
			if (hosts?.length) {
				hostStore.set(hosts[0]);
			}
		}
	});
</script>

<JDGContentContainer overlapWithHeader={false}>
	<JDGContentBoxFloating title="Timeline Preview" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">An in-progress look at the Cinderella City timeline</JDGBodyCopy>
		<JDGTimeline timelineHost={$hostStore} minHeight="70vh" maxHeight="70vh" allowEditing={false} />
	</JDGContentBoxFloating>
</JDGContentContainer>
