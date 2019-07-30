(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{124:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("parsers are used to generate the language specific query from the abstract config object. They are also used to initialy populate the ui with values from an existing query.")]),t._v(" "),t._m(1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://feathersjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeathersJS"),e("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("the general concept of the parser is, that it loops about each input-group, generates a query from it and appends this query to the global query.\nIf you have a use-case that is not covered by an existing parser, you can extend it by passing a parser option to the input group.\nThis option must be an Object with two functions specified:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser","aria-hidden":"true"}},[this._v("#")]),this._v(" Parser")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"available-parsers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-parsers","aria-hidden":"true"}},[this._v("#")]),this._v(" available Parsers")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"extend-a-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extend-a-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" extend a parser")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("parser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("generator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filterGroupConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* query */")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("parser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filterGroupConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* values { inputId: value } */")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[t._v("The "),e("code",[t._v("filterGroupConfig")]),t._v(" parameter contains an config object of the filter group.")]),t._v(" "),e("li",[e("code",[t._v("values")]),t._v(" is an Object, containing the input values. You can access the value by "),e("code",[t._v("values[filterGroupConfig[i].id]")]),t._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"custom-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" custom parser")])}],!1,null,null,null);a.default=n.exports}}]);