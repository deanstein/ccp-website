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
	let loading = true;

	onMount(async () => {
		try {
			const files = await fetchJsonFileList(jdgRepoOwner, jdgBuildingDataRepoName);
			if (files?.length) {
				const data = await readJsonFileFromRepo(jdgRepoOwner, jdgBuildingDataRepoName, files[0]);
				const hosts = data?.[buildingDataCollectionKey];
				if (hosts?.length) {
					hostStore.set(hosts[0]);
				}
			}
		} finally {
			loading = false;
		}
	});
</script>

<JDGContentContainer overlapWithHeader={false}>
	<JDGContentBoxFloating title="Timeline Preview" animateWhenVisible={false}>
		<JDGBodyCopy paddingTop="0">An in-progress look at the Cinderella City timeline</JDGBodyCopy>
		<div class="timeline-area">
			{#if $hostStore !== undefined || loading}
				<div class="timeline-slot">
					<JDGTimeline
						timelineHost={$hostStore}
						{loading}
						minHeight="0"
						maxHeight="100%"
						allowEditing={false}
					/>
				</div>
			{:else}
				<p class="timeline-empty">No timeline data available.</p>
			{/if}
		</div>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	.timeline-area {
		position: relative;
		align-self: stretch;
		width: 100%;
		/* Fixed height so timeline + title bar stay inside the content box */
		height: 70vh;
		min-height: 300px;
		max-height: 70vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	/* Force the timeline component to fit: flex shrink + min-height 0 so it can’t overflow */
	.timeline-slot {
		flex: 1 1 0;
		min-height: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	/* Timeline root (.timeline-wrapper) must fill the slot so maxHeight="100%" works */
	.timeline-slot :global(.timeline-wrapper) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.timeline-slot :global(.timeline-wrapper:not(.loading-overlay-visible)) {
		min-height: 0;
	}

	.timeline-slot :global(.timeline-container) {
		flex: 1 1 0;
		min-height: 0;
	}

	.timeline-empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70vh;
		min-height: 300px;
		margin: 0;
		color: var(--jdg-color-text-secondary, #666);
	}
</style>
