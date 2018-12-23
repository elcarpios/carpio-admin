<template>
	<main>
		<ArticleCreate v-on:updateVisualizer="updateVisualizer"/>
		<Visualizer :post="post"/>
	</main>
</template>

<script>
import ArticleCreate from '@/components/ArticleCreate';
import Visualizer from '@/components/Visualizer';

export default {
  name: "Main",
  components: { ArticleCreate, Visualizer },
  props: {},
  data() {
	  return {
		post: {}
	  }
  },
  methods: {
	  updateVisualizer: function(post){
		  this.post = post;
	  }
  }
};
</script>

<style scoped>
main {
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	height: 100%;
}

ArticleCreate, Visualizer {
	flex-grow: 1;
}
</style>
