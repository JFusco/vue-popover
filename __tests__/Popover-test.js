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

	it('should test class name of component', () => {
		const hasClass = (` ${app.$el.querySelector('.popover').className} `).replace(/[\n\t]/g, ' ').indexOf('test') > -1;

		expect(hasClass).toBe(true);
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
		expect(face.querySelector('a').textContent).toBe('popover');
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

describe('Popover - closeOnContentClick(true)', () => {
	let app,
		closeSpy;

	beforeEach(() => {
		closeSpy = sinon.spy();

		app = new Vue({
			template: `<div>
							<popover name="test"
								:closeOnContentClick="false"
								v-on:popover:close="onPopoverClose">
								<div slot="content">
									<p>test some custom content</p>
								</div>
							</popover>
						</div>`,
			components: {
				Popover
			},
			methods: {
				onPopoverClose: closeSpy
			}
		}).$mount();
	});

	afterEach(() => {
		app.$destroy();

		app = null;
		closeSpy = null;
	});

	it('should not trigger "popover:close" event when clicked inside', done => {
		const face = app.$el.querySelector('.popover__face');
		let content = null;

		face.click();

		Vue.nextTick(() => {
			content = app.$el.querySelector('.popover__container');
		});

		Vue.nextTick(() => {
			content.click();
			expect(closeSpy.calledOnce).toBe(false);

			done();
		});
	});
});

describe('Popover - multiple', () => {
	let app,
		openSpyOne,
		closeSpyOne,
		openSpyTwo,
		closeSpyTwo;

	beforeEach(() => {
		openSpyOne = sinon.spy();
		closeSpyOne = sinon.spy();
		openSpyTwo = sinon.spy();
		closeSpyTwo = sinon.spy();

		app = new Vue({
			template: `<div>
							<popover
									name="test-one"
									v-on:popover:open="onPopoverOneOpen"
									v-on:popover:close="onPopoverOneClose">
							</popover>
							<popover
									name="test-two"
									v-on:popover:open="onPopoverTwoOpen"
									v-on:popover:close="onPopoverTwoClose">
							</popover>
						</div>`,
			components: {
				Popover
			},
			methods: {
				onPopoverOneOpen: openSpyOne,
				onPopoverOneClose: closeSpyOne,
				onPopoverTwoOpen: openSpyTwo,
				onPopoverTwoClose: closeSpyTwo
			}
		}).$mount();
	});

	afterEach(() => {
		app.$destroy();

		app = null;
		openSpyOne = null;
		closeSpyOne = null;
		openSpyTwo = null;
		closeSpyTwo = null;
	});

	it('should render multiple popovers', () => {
		const popovers = app.$el.querySelectorAll('.popover');

		expect(popovers.length).toEqual(2);
		expect(popovers[0].querySelector('.popover__face').getAttribute('aria-owns')).toBe('popover-test-one');
		expect(popovers[1].querySelector('.popover__face').getAttribute('aria-owns')).toBe('popover-test-two');
	});

	it('should close one when another is open', done => {
		const popoverOne = app.$el.querySelectorAll('.popover')[0];
		const popoverTwo = app.$el.querySelectorAll('.popover')[1];

		const faceOne = popoverOne.querySelector('.popover__face');
		const faceTwo = popoverTwo.querySelector('.popover__face');

		faceOne.click();

		Vue.nextTick(() => {
			const popoverContainerOne = popoverOne.querySelector('.popover__container');
			const popoverContainerTwo = popoverTwo.querySelector('.popover__container');
			const openClass = (` ${popoverOne.className} `).replace(/[\n\t]/g, ' ').indexOf('open') > -1;

			expect(openClass).toBe(true);
			expect(popoverContainerOne).not.toBeNull();
			expect(popoverContainerTwo).toBeNull();
		});

		Vue.nextTick(() => {
			faceTwo.click();
		});

		setTimeout(() => {
			const popoverContainerOne = popoverOne.querySelector('.popover__container');
			const popoverContainerTwo = popoverTwo.querySelector('.popover__container');
			const openClass = (` ${popoverTwo.className} `).replace(/[\n\t]/g, ' ').indexOf('open') > -1;

			expect(openClass).toBe(true);
			expect(popoverContainerOne).toBeNull();
			expect(popoverContainerTwo).not.toBeNull();

			done();
		}, 1000);
	});
});
