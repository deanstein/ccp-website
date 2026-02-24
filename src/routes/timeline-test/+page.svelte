<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import {
		// Helpers, constants, persistence
		buildingDataCollectionKey,
		fetchJsonFileList,
		jdgBuildingDataRepoName,
		jdgRepoOwner,
		readJsonFileFromRepo,
		// Components
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGLoadingSpinner,
		JDGTimeline
	} from 'jdg-ui-svelte';

	// Age-display wording for timeline events (use JDG_CONTEXTS from jdg-contexts when the package exports it)
	setContext('jdg-event-age-suffix-positive', 'after opening');
	setContext('jdg-event-age-suffix-negative', 'before opening');

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
	<JDGContentBoxFloating title="Timeline Test" animateWhenVisible={false}>
		<JDGBodyCopy>This is a test of the timeline component.</JDGBodyCopy>
		<div class="timeline-area">
			{#if loading}
				<div class="timeline-loading-overlay" aria-busy="true" aria-label="Loading timeline">
					<div class="timeline-loading-content">
						<JDGLoadingSpinner strokeColor="#2c2c2c" spinnerHeightPx={40} strokeWidthPx={3} />
						<span class="timeline-loading-text">Loading…</span>
					</div>
				</div>
			{:else if $hostStore}
				<JDGTimeline
					timelineHost={$hostStore}
					allowEditing={false}
					minHeight="100%"
					maxHeight="100%"
				/>
			{:else}
				<p class="timeline-empty">No timeline data available.</p>
			{/if}
		</div>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	.timeline-area {
		position: relative;
		/* Constrain to viewport so timeline doesn’t overflow the content container */
		height: 70vh;
		min-height: 300px;
		max-height: 70vh;
	}

	.timeline-loading-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(4px);
		z-index: 1;
	}

	.timeline-loading-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.timeline-loading-text {
		font-size: 1rem;
		color: #2c2c2c;
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
