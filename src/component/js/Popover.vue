<template>
	<popover-wrapper v-if="!slim"
		v-bind="{ id, isOpen, name }"
		@togglePopover="onPopoverToggle">
		<template slot="face">
			<slot name="face"/>
		</template>
		<template slot="content">
			<div class="popover__container" :id="id" v-on:click="onPopoverContentClick">
				<slot name="content"></slot>
			</div>
		</template>
	</popover-wrapper>
	<popover-wrapperless v-else v-bind="{ isOpen }">
		<template slot="face">
			<slot name="face" v-bind="{ id, isOpen, name, onPopoverToggle }"/>
		</template>
		<template slot="content">
			<div class="popover__container" :id="id" v-on:click="onPopoverContentClick">
				<slot name="content"></slot>
			</div>
		</template>
	</popover-wrapperless>
</template>

<script type="text/babel">
	'use strict'

	import Vue from 'vue'
	import PopoverWrapper from './PopoverWrapper.vue'
	import PopoverWrapperless from './PopoverWrapperless.js'

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
			},
			slim: {
				type: Boolean,
				'default': false
			}
		},

		components: {
			PopoverWrapper,
    		PopoverWrapperless
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
