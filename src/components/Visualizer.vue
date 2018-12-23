<template>
	<div class="visualizer">
		<router-view :post="post"/>
	</div>
</template>

<script>
export default {
  name: "Visualizer",
  components: {},
  props: [ 'post' ]
};
</script>

<style scoped>
.visualizer {
	background-color: #e0e0d1;
	width: 410px;
	overflow: auto;
}

article.article-details, article.article-mosaic {
	padding-top: 10px;
	position: relative;
	background-color: white;
	height: 100%;
	width: 375px;
	margin: 10px;
}
</style>
