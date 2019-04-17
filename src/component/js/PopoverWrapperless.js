export default {
	functional: true,
	render: function(createElement, { slots, props }) {

		const faceSlot = slots().face;
		const face = Array.isArray(faceSlot) ? faceSlot[0] : faceSlot;

		// if the popover is open, render the content slot within the root
		// element of the face slot.
		if (props.isOpen) {
			const contentSlot = slots().content;
			const content = Array.isArray(contentSlot) ? contentSlot[0] : contentSlot;

			// support template markup, or a component
			const markUpOrComponent = face.commponentOptions || face;
			if (markUpOrComponent.children) {
				markUpOrComponent.children.push(content);
			} else {
				markUpOrComponent.children = [content];
			}
		}
		return face;
	}
};
