<template>
	<div>
		<!-- component -->
		<popover name="news" v-on:popover:open="onOpen" v-on:popover:close="onClose">
			<div slot="content">
				<ul>
					<li><a href="http://google.com">Google</a></li>
					<li><a href="http://cnn.com">CNN</a></li>
					<li><a href="http://finance.yahoo.com">Yahoo</a></li>
				</ul>
			</div>
		</popover>
	</div>
</template>

<script type="text/babel">
	import popover from './js/Popover.vue'

	export default {
		components: {
			popover
		},
		methods: {
			onOpen(){
				console.log('OPEN');
			},

			onClose(){
				console.log('CLOSE');
			}
		}
	}
</script>
