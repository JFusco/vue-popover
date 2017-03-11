'use strict';

import Vue from 'vue';
import sinon from 'sinon';
import Popover from '../src/component/js/Popover.vue';

describe('Popover', () => {
	let app;

	beforeEach(() => {
		app = new Vue({
			template: `<div>
							<popover name="test"></popover>
						</div>`,
			components: {
				Popover
			}
		}).$mount();
	});

	afterEach(() => {
		app.$destroy();

		app = null;
	});

	it('should test the default data', () => {
		const defaultData = Popover.data();

		expect(defaultData.isOpen).toBe(false);
	});

	it('should set a unique name', () => {
		const id = app.$el.querySelector('.popover__face').getAttribute('aria-owns');

		expect(id).toEqual('popover-test');
	});

	it('should not render the popover container', () => {
		const container = app.$el.querySelector('.popover__container');

		expect(container).toBe(null);
	});

	it('should render a default face', () => {
		const face = app.$el.querySelector('.popover__face');

		expect(face.nodeName).toBe('DIV');
		expect(face.querySelector('div').textContent).toBe('popover');
	});
});

describe('Popover - custom face', () => {
	it('should render a custom face', () => {
		let app = new Vue({
			template: `<div>
							<popover name="test">
								<div slot="face">
									<button>custom face</button>
								</div>
							</popover>
						</div>`,
			components: {
				Popover
			}
		}).$mount();

		const face = app.$el.querySelector('.popover__face button');

		expect(face).not.toBeUndefined();
		expect(face.textContent).toBe('custom face');

		app.$destroy();
	});
});

describe('Popover - events', () => {
	let app,
		openSpy,
		closeSpy;

	beforeEach(() => {
		openSpy = sinon.spy();
		closeSpy = sinon.spy();

		app = new Vue({
			template: `<div>
							<popover name="test"
								v-on:popover:open="onPopoverOpen"
								v-on:popover:close="onPopoverClose">
							</popover>
						</div>`,
			components: {
				Popover
			},
			methods: {
				onPopoverOpen: openSpy,
				onPopoverClose: closeSpy
			}
		}).$mount();
	});

	afterEach(() => {
		app.$destroy();

		app = null;
		openSpy = null;
		closeSpy = null;
	});

	it('should add "open" class on click', done => {
		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			const popover = face.parentElement;
			const openClass = (` ${popover.className} `).replace(/[\n\t]/g, ' ').indexOf('open') > -1;

			expect(openClass).toBe(true);

			done();
		});
	});

	it('should trigger "popover:open" event when clicked on face', done => {
		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			expect(openSpy.calledOnce).toBe(true);

			done();
		});
	});

	it('should trigger "popover:close" event when clicked on face if open', done => {
		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			face.click();
		});

		Vue.nextTick(() => {
			expect(closeSpy.calledOnce).toBe(true);

			done();
		});
	});

	it('should trigger "popover:close" event when clicked outside', done => {
		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			document.documentElement.click();
		});

		Vue.nextTick(() => {
			expect(closeSpy.calledOnce).toBe(true);

			done();
		});
	});

	it('should not add document click event until opened', done => {
		const face = app.$el.querySelector('.popover__face');

		Vue.nextTick(() => {
			document.documentElement.click();
		});

		Vue.nextTick(() => {
			expect(closeSpy.calledOnce).toBe(false);

			face.click();
		});

		Vue.nextTick(() => {
			document.documentElement.click();
		});

		Vue.nextTick(() => {
			expect(closeSpy.calledOnce).toBe(true);

			done();
		});
	});

	it('should render content container on click', done => {
		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			const popoverContainer = app.$el.querySelector('.popover__container');

			expect(popoverContainer).not.toBeUndefined();
			expect(popoverContainer.getAttribute('id')).toBe('popover-test');

			done();
		});
	});
});

describe('Popover - custom content', () => {
	it('should render custom content', done => {
		let app = new Vue({
			template: `<div>
							<popover name="test">
								<div slot="content">
									<p>test some custom content</p>
								</div>
							</popover>
						</div>`,
			components: {
				Popover
			}
		}).$mount();

		const face = app.$el.querySelector('.popover__face');

		face.click();

		Vue.nextTick(() => {
			const popoverContainer = app.$el.querySelector('.popover__container');
			const content = popoverContainer.querySelector('p');

			expect(popoverContainer).not.toBeUndefined();
			expect(content.textContent).toBe('test some custom content');

			app.$destroy();

			done();
		});
	});
});
