<template functional>
	<div class="popover" v-bind:class="{ open: props.isOpen, [props.name]: true }">
		<div class="popover__face" :aria-owns="props.id" v-on:click="listeners.togglePopover">
			<slot name="face" >
				<a href="#">popover</a>
			</slot>
		</div>
		<slot v-if="props.isOpen" name="content"></slot>
  </div>
</template>
