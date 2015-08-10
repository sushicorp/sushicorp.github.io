<template>
	<nav>
		<ul>
			<li>
				<a href="#/"><img src="logo.png" alt="" width="190"></a>
			</li>
			<li>
				<a href="#/about">Our vision</a>
			</li>
			<li>
				<a href="#/jobs">Jobs</a>
			</li>
		</ul>
	</nav>
	
	<component is="{{view}}" class="view" keep-alive
      v-transition
      transition-mode="out-in"></component>
	<footer>
		<p>&copy SushiCorp</p>
	</footer>

</template>
<script>
	module.exports = {
		el: ".main",
		data: {
			view: ""
		},
		components: {
			"about-view": require("./views/about-view.vue"),
			"main-view": require("./views/main-view.vue"),
			"jobs-view": require("./views/jobs-view.vue")
		}
	};
</script>

<style>
	.view.v-transition{
		transition: opacity .3s ease;
	}
	
	.view.v-enter, .view.v-leave{
		opacity: 0;
	}
</style>