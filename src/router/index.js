import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	routes: [
	{
		name: "details",
		path: "/details",
		component: () => import("@/views/ArticleDetails"),
		props: { debugger: true }
	},
	{
		name: "mosaic",
		path: "/mosaic",
		component: () => import("@/views/ArticleMosaic"),
		props: { debugger: true }
	}]
});

export default router;
