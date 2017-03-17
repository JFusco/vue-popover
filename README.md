# vue-popover

[![Build Status][build-image]][build-url]

[![peerDependency Status][peer-dep-image]][peer-dep-url]
[![devDependency Status][dev-dep-image]][dev-dep-url]

[![MIT][mit-image]][mit-url]
[![npm][npm-version-image]][npm-url]

> Reusable popover component for Vue

## Demo ##
https://jfusco.github.io/vue-popover

## Getting Started ##

#### Installation
From the root of your project.
```sh
npm install vue-popover --save
```

## Usage
Simple implementation of popover. See [options available](#options) below.
```js
<template>
	<div>
		<popover name="example">
			<div slot="content">
				<ul>
					<li><a href="#">npmjs.com</a></li>
					<li><a href="#">github.com</a></li>
				</ul>
			</div>
		</popover>
	<div>
</template>

<script type="text/babel">
	import popover from 'popover'

	export default {
		components: {
			popover
		}
	}
</script>
```

<a name="options"></a>
#### Options
* **[`name`](#name)**
* **[`popover:open`](#popoverOpen)**
* **[`popover:close`](#popoverClose)**
* **[`slots`](#slots)**

<a name="name"></a>
##### name ~ required
The `string` to be used for a unique ID for the component instance, also used to set aria attributes
```js
<template>
	<div>
		<popover name="example"></popover>
	</div>
</template>
```

<a name="popoverOpen"></a>
##### popover:open ~ optional
An `function` triggered any time the instance of the popover is opened
```js
<template>
	<div>
		<popover name="example" v-on:popover:open="onPopoverOpen"></popover>
	</div>
</template>

<script type="text/babel">
	import popover from 'popover'

	export default {
		components: {
			popover
		},
		methods: {
			onPopoverOpen(){
				console.log('popover open')
			}
		}
	}
</script>
```

<a name="popoverClose"></a>
##### popover:close ~ optional
An `function` triggered any time the instance of the popover is closed
```js
<template>
	<div>
		<popover name="example" v-on:popover:close="onPopoverClose"></popover>
	</div>
</template>

<script type="text/babel">
	import popover from 'popover'

	export default {
		components: {
			popover
		},
		methods: {
			onPopoverClose(){
				console.log('popover close')
			}
		}
	}
</script>
```

<a name="slots"></a>
##### available slots
* `face` - Set custom face for the popover
* `content` - Set custom content for the popover
```js
<template>
	<div>
		<popover name="example">
			<div slot="face">
				<button>popover face</button>
			</div>

			<div slot="content">
				<p>Some custom content for popover</p>
			</div>
		</popover>
	</div>
</template>
```

## Styling
#### Installation
Import the main SCSS file in to your application SCSS files
```scss
@import "node_modules/vue-popover/src/component/scss/styles.scss";
```

There are a few variables set to `!default` that can be overriden. If you need to change it more just override the actual styles.

**Any overriden variables needs to go above the `@import` statement to take effect**
```scss
//-- Global UI
$popover-z-index
```

If you don't care to override variables and just want to override actual styles you may choose to import the minified compiled version of the css instead
```scss
@import "node_modules/vue-popover/dist/styles.css";
```

## Tests ##
```
npm test
```

[build-image]: https://travis-ci.org/JFusco/vue-popover.svg?branch=master
[build-url]: https://travis-ci.org/JFusco/vue-popover
[mit-image]: https://img.shields.io/npm/l/vue-popover.svg?style=flat-square
[mit-url]: https://github.com/JFusco/vue-popover/blob/master/LICENSE
[npm-version-image]: https://img.shields.io/npm/v/npm.svg?maxAge=2592000
[npm-url]: https://www.npmjs.com/package/vue-popover
[dev-dep-image]: https://david-dm.org/JFusco/vue-popover/dev-status.svg
[dev-dep-url]: https://david-dm.org/JFusco/vue-popover?type=dev
[peer-dep-image]: https://david-dm.org/JFusco/vue-popover/peer-status.svg
[peer-dep-url]: https://david-dm.org/JFusco/vue-popover?type=peer
