<script>
	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer overlapWithHeader={true}>
	<JDGImageFullWidth imgSrc={'./blue-mall/blue-mall-1.jpg'} />
	<JDGContentBoxFloating>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>
