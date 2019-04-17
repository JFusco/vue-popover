<template>
	<div class="container">
		<h1>vue-popover</h1>
		<p>Below are a few implementations of the component, for more options and events please see the <a href="https://github.com/JFusco/vue-popover/blob/master/README.md#options">README</a> file documentation</p>

		<p>I've added my own custom styles in page to make it look a little more presentable</p>

		<h2>Tests</h2>
		<p>View coverage report <a href="https://jfusco.github.io/vue-popover/coverage/reports/lcov-report/js/index.html">here</a></p>

		<div className="example">
			<h2>Default face and custom content</h2>
			<p>The component provides a default face, which you will most likely want to override - click "popover"</p>

			<popover name="default">
				<div slot="content">
					<ul>
						<li><a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com</a></li>
						<li><a href="https://github.com/JFusco" target="_blank">github.com</a></li>
					</ul>
				</div>
			</popover>

			<pre>&lt;popover name="default"&gt;
    &lt;div slot="content"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://github.com/JFusco" target="_blank">github.com&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/popover&gt;</pre>
		</div>

		<div className="example">
			<h2>Custom face for popover</h2>
			<p>Use the "face" slot to inject your own popover face.</p>

			<popover name="custom-face">
				<div slot="face">
					<button>my links</button>
				</div>
				<div slot="content">
					<ul>
						<li><a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com</a></li>
						<li><a href="https://github.com/JFusco" target="_blank">github.com</a></li>
					</ul>
				</div>
			</popover>

			<pre>&lt;popover name="default"&gt;
    &lt;div slot="face"&gt;
        &lt;button>my links&lt;/button&gt;
    &lt;/div&gt;
    &lt;div slot="content"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://github.com/JFusco" target="_blank">github.com&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/popover&gt;</pre>
		</div>

    <div className="example">
      <h2>Slim component</h2>
      <p>Here the component renders without any wrapper elements around the "face" slot. As seen below,
        this allows for inlining of popovers. The slot is now scoped so the popover toggle can be triggered.
        When the content renders, it will do so inside the root face element.</p>

      <popover slim name="slim-face">
        <a
          href="#"
          class="slim-face"
          @click.prevent="onPopoverToggle"
          slot="face"
          slot-scope="{ onPopoverToggle }">
          slim popover</a>
        <div slot="content">
          <ul>
            <li><a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com</a></li>
            <li><a href="https://github.com/JFusco" target="_blank">github.com</a></li>
          </ul>
        </div>
      </popover>
      <span>&nbsp;|&nbsp;</span>
      <popover slim name="slim-face-2">
        <a
          href="#"
          class="slim-face"
          @click.prevent="onPopoverToggle"
          slot="face"
          slot-scope="{ onPopoverToggle }">
          slim popover</a>
        <div slot="content">
          <ul>
            <li><a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com</a></li>
            <li><a href="https://github.com/JFusco" target="_blank">github.com</a></li>
          </ul>
        </div>
      </popover>


      <pre>&lt;popover slim name="slim-face"&gt;
    &lt;a
      href="#"
      class="slim-face"
      @click.prevent="onPopoverToggle"
      slot="face"
      slot-scope="{ onPopoverToggle }"&gt;
      slim popover
    &lt;/a&gt;
    &lt;div slot="content"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="https://www.npmjs.com/~jfusco" target="_blank">npmjs.com&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://github.com/JFusco" target="_blank">github.com&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/popover&gt;</pre>
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

<style lang="scss" scoped>
	.default,
	.custom-face,
  .slim-face {
    .popover__container {
      ul {
        margin: 0;
        padding: 5px 0;
        list-style: none;
        background: white;
        -webkit-box-shadow: 0 2px 11px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 0 2px 11px -1px rgba(0,0,0,0.51);
        box-shadow: 0 2px 11px -1px rgba(0,0,0,0.51);
      }

      a {
        display: block;
        text-decoration: none;
        padding: 8px 10px;
        color: black;
        transition: background 0.3s ease;

        &:hover {
          background: lightgray;
        }
      }
		}
	}

  // To have the absolutely positioned content appear beside
  // the face, it should be positioned, relative works well to follow
  // document flow yet position to element.
  .slim-face {
    position: relative;
  }
</style>
