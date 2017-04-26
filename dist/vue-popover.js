!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("vue")) : "function" == typeof define && define.amd ? define([ "vue" ], factory) : "object" == typeof exports ? exports.VuePopover = factory(require("vue")) : root.VuePopover = factory(root.Vue);
}(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.i = function(value) {
            return value;
        }, __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/", __webpack_require__(__webpack_require__.s = 4);
    }([ function(module, exports, __webpack_require__) {
        "use strict";
        eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _vue = __webpack_require__(5);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar popovers = [];\n\nexports.default = {\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true\n\t\t},\n\t\tcloseOnContentClick: {\n\t\t\t'default': true,\n\t\t\ttype: Boolean,\n\t\t\trequired: false\n\t\t}\n\t},\n\n\tdata: function data() {\n\t\treturn {\n\t\t\tisOpen: false\n\t\t};\n\t},\n\n\n\tmethods: {\n\t\tonPopoverToggle: function onPopoverToggle(e) {\n\t\t\te.stopPropagation();\n\n\t\t\tif (this.isOpen) {\n\t\t\t\tthis.isOpen = false;\n\n\t\t\t\tthis.$emit('popover:close');\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar length = popovers.length;\n\n\t\t\tif (length > 1) {\n\t\t\t\tfor (var i = 0; i < length; i++) {\n\t\t\t\t\tvar popover = popovers[i];\n\n\t\t\t\t\tif (popover.isOpen) {\n\t\t\t\t\t\tpopover.isOpen = false;\n\n\t\t\t\t\t\tthis.$emit('popover:close');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.isOpen = true;\n\n\t\t\tdocument.documentElement.addEventListener('click', this.onDocumentClick, false);\n\n\t\t\tthis.$emit('popover:open');\n\t\t},\n\t\tonDocumentClick: function onDocumentClick() {\n\t\t\tthis.isOpen = false;\n\n\t\t\tthis.$emit('popover:close');\n\t\t},\n\t\tonPopoverContentClick: function onPopoverContentClick(e) {\n\t\t\te.stopPropagation();\n\n\t\t\tif (this.closeOnContentClick) {\n\t\t\t\tthis.isOpen = false;\n\n\t\t\t\tthis.$emit('popover:close');\n\t\t\t}\n\t\t},\n\t\tremoveDocumentEvent: function removeDocumentEvent() {\n\t\t\tdocument.documentElement.removeEventListener('click', this.onDocumentClick, false);\n\t\t}\n\t},\n\n\tcomputed: {\n\t\tid: function id() {\n\t\t\treturn 'popover-' + this.name;\n\t\t}\n\t},\n\n\tmounted: function mounted() {\n\t\tpopovers.push(this);\n\n\t\tthis.$on('popover:close', this.removeDocumentEvent);\n\t},\n\tbeforeDestroy: function beforeDestroy() {\n\t\tthis.removeDocumentEvent();\n\n\t\tpopovers.length = 0;\n\t}\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/js/Popover.vue\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0");
    }, function(module, exports) {
        eval('// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"remove":true}!./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-compiler?{"id":"data-v-cba4a60a","scoped":false,"hasInlineConfig":false}!./~/sass-loader/lib/loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/component/js/Popover.vue\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/extract-text-webpack-plugin/loader.js?%7B%22omit%22:1,%22remove%22:true%7D!./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-compiler?%7B%22id%22:%22data-v-cba4a60a%22,%22scoped%22:false,%22hasInlineConfig%22:false%7D!./~/sass-loader/lib/loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0');
    }, function(module, exports) {
        eval("// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = Object.create(options.computed || null)\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n    options.computed = computed\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/component-normalizer.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/vue-loader/lib/component-normalizer.js?");
    }, function(module, exports) {
        eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'div\', {\n    staticClass: "popover",\n    class: ( _obj = {\n      open: _vm.isOpen\n    }, _obj[_vm.name] = true, _obj )\n  }, [_c(\'div\', {\n    staticClass: "popover__face",\n    attrs: {\n      "aria-owns": _vm.id\n    },\n    on: {\n      "click": _vm.onPopoverToggle\n    }\n  }, [_vm._t("face", [_c(\'a\', {\n    attrs: {\n      "href": "#"\n    }\n  }, [_vm._v("popover")])])], 2), _vm._v(" "), (_vm.isOpen) ? _c(\'div\', {\n    staticClass: "popover__container",\n    attrs: {\n      "id": _vm.id\n    },\n    on: {\n      "click": _vm.onPopoverContentClick\n    }\n  }, [_vm._t("content")], 2) : _vm._e()])\n  var _obj;\n},staticRenderFns: []}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/template-compiler?{"id":"data-v-cba4a60a"}!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/js/Popover.vue\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?./~/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-cba4a60a%22%7D!./~/vue-loader/lib/selector.js?type=template&index=0');
    }, function(module, exports, __webpack_require__) {
        eval("\n/* styles */\n__webpack_require__(1)\n\nvar Component = __webpack_require__(2)(\n  /* script */\n  __webpack_require__(0),\n  /* template */\n  __webpack_require__(3),\n  /* scopeId */\n  null,\n  /* cssModules */\n  null\n)\n\nmodule.exports = Component.exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/component/js/Popover.vue\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/component/js/Popover.vue?");
    }, function(module, exports) {
        eval('module.exports = __WEBPACK_EXTERNAL_MODULE_5__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"}\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22Vue%22,%22commonjs2%22:%22vue%22,%22commonjs%22:%22vue%22,%22amd%22:%22vue%22%7D?');
    } ]);
});