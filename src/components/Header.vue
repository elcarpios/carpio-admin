<template>
	<header>
		<h1>findMe</h1>
		<div class="level-selector">
			<router-link :to="{ path: '/mosaic' }">Mosaic</router-link>
			<router-link :to="{ path: '/details' }">Details</router-link>
		</div>
	</header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {}
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #4dc0b5;
	color: white;
	padding: 10px 30px;
	height: 46px;
}

.level-selector {
	display: flex;
	justify-content: space-around;
	width: 350px;
}

.level-selector a {
	padding: 5px 20px;
	border: 1px solid white;
	border-radius: 5px;
	background-color: #4dc0b5;
}
</style>
