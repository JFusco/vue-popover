<template>
	<div class="container">
		<h1>vue-popover</h1>
		<p>Below are a few implementations of the component, for more options and events please see the <a href="https://github.com/JFusco/vue-popover/blob/master/README.md#options">README</a> file documentation</p>

		<h2>Tests</h2>
		<p>View coverage report <a href="https://jfusco.github.io/vue-popover/coverage/reports/lcov-report/js/index.html">here</a></p>

		<div className="example">
			<h2>Custom face for popover</h2>
			<p>Use the "face" slot to inject your own popover face.</p>


		</div>

		<div className="example">
			<h2>Custom content for popover</h2>
			<p>Use the "content" slot to inject your own popover content.</p>


		</div>
	</div>
</template>

<script type="text/babel">
	import popover from '../component/js/Popover.vue'

	export default {
		components: {
			popover
		}
	}
</script>
