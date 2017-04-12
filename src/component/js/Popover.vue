<template>
	<div class="popover" v-bind:class="{ open: isOpen, [name]: true }">
		<div class="popover__face" :aria-owns="id" v-on:click="onPopoverToggle">
			<slot name="face" >
				<a href="#">popover</a>
			</slot>
		</div>

		<div class="popover__container" :id="id" v-if="isOpen" v-on:click="onPopoverContentClick">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script type="text/babel">
	'use strict'

	import Vue from 'vue'

	const popovers = []

	export default {
		props: {
			name: {
				type: String,
				required: true
			},
			closeOnContentClick: {
				'default': true,
				type: Boolean,
				required: false
			}
		},

		data(){
			return {
				isOpen: false
			}
		},

		methods: {
			onPopoverToggle(e) {
				e.stopPropagation()

				if (this.isOpen){
					this.isOpen = false

					this.$emit('popover:close')

					return
				}

				const length = popovers.length

				if (length > 1) {
					for(let i = 0; i < length; i++) {
						const popover = popovers[i]

						if (popover.isOpen){
							popover.isOpen = false

							this.$emit('popover:close')
						}
					}
				}

				this.isOpen = true

				document.documentElement.addEventListener('click', this.onDocumentClick, false)

				this.$emit('popover:open')
			},

			onDocumentClick(){
				this.isOpen = false

				this.$emit('popover:close')
			},

			onPopoverContentClick(e){
				e.stopPropagation()

				if (this.closeOnContentClick) {
					this.isOpen = false

					this.$emit('popover:close')
				}
			},

			removeDocumentEvent(){
				document.documentElement.removeEventListener('click', this.onDocumentClick, false)
			}
		},

		computed: {
			id(){
				return `popover-${this.name}`
			}
		},

		mounted(){
			popovers.push(this)

			this.$on('popover:close', this.removeDocumentEvent)
		},

		beforeDestroy(){
			this.removeDocumentEvent()

			popovers.length = 0
		}
	}
</script>

<style lang="scss">
	@import '~styles/variables';

	.popover {
		position: relative;

		&__container {
			position: absolute;
			z-index: $popover-z-index;
			left: 0;
		}
	}
</style>
