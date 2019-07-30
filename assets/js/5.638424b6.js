(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Used as the primary Action title to add a new Filter.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Option to replace the component that renders the list of available filters that are not currently applied. Read more under "),s("router-link",{attrs:{to:"./Customize/1-Select.html"}},[t._v("customization")]),t._v(".")],1),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("Option to replace the component that renders the list of currently active and applied filters. Read more under "),s("router-link",{attrs:{to:"./Customize/2-Chips.html"}},[t._v("customization")]),t._v(".")],1),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Wrapper-Component for the dialog where the user can enter there filter settings. You can exchange the default modal by specifing your new modal here. Your custom modal must implement the "),s("router-link",{attrs:{to:"./Customize/3-Modal.html"}},[t._v("Modal specifications")]),t._v(".")],1),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("The parsers are used to generate the language specific query from the abstract config object. They are also used to initialy populate the ui with values from an existing query.\nTo use an existing parser, you can simply import it.")]),t._v(" "),t._m(19),s("p",[t._v("You can find the "),s("router-link",{attrs:{to:"./Customize/6-Parser.html#available-parsers"}},[t._v("complete list of available parsers here")]),t._v(".")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("Each filter-group is an Object and must define the following attributes:")]),t._v(" "),s("table",[t._m(23),t._v(" "),s("tbody",[t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("tr",[t._m(27),t._v(" "),t._m(28),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("You can import some predefined designs from "),s("code",[t._v('import { layouts } from "vue-filter.ui"')]),t._v(". The Component must implement the interface "),s("router-link",{attrs:{to:"/Customize/4-Layout.html"}},[t._v("described under customization")]),t._v(".")],1)]),t._v(" "),t._m(29),t._v(" "),s("tr",[t._m(30),t._v(" "),t._m(31),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("Can override the parser used for the group where it is defined. This must implement "),s("router-link",{attrs:{to:"/Customize/6-Parser.html#extend-a-parser"}},[t._v("the parser interface")]),t._v(".")],1)])])]),t._v(" "),t._m(32),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),s("table",[t._m(36),t._v(" "),s("tbody",[t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),s("tr",[t._m(40),t._v(" "),t._m(41),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("Specifies the component which will be used for the input. You can import some predefined designs from "),s("code",[t._v('import { inputs } from "vue-filter.ui"')]),t._v(". Read more about custom inputs "),s("router-link",{attrs:{to:"/Customize/5-Input.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),t._m(42),t._v(" "),s("tr",[t._m(43),t._v(" "),t._m(44),t._v(" "),s("td",[t._v("(✔)")]),t._v(" "),s("td",[t._v("Some Inputs require a label. This is often the case for free text inputs without options. Read more in the "),s("router-link",{attrs:{to:"/Components/Inputs.html"}},[t._v("inputs documentation")])],1)])])]),t._v(" "),t._m(45)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"how-to-configure-a-filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-filter","aria-hidden":"true"}},[this._v("#")]),this._v(" How to Configure a Filter")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#labeladd"}},[t._v("labelAdd")])]),s("li",[s("a",{attrs:{href:"#labelapply"}},[t._v("labelApply")])]),s("li",[s("a",{attrs:{href:"#labelcancle"}},[t._v("labelCancle")])]),s("li",[s("a",{attrs:{href:"#labelremove"}},[t._v("labelRemove")])]),s("li",[s("a",{attrs:{href:"#componentselect"}},[t._v("componentSelect")])]),s("li",[s("a",{attrs:{href:"#componentchips"}},[t._v("componentChips")])]),s("li",[s("a",{attrs:{href:"#componentmodal"}},[t._v("componentModal")])]),s("li",[s("a",{attrs:{href:"#handleurl"}},[t._v("handleUrl")])]),s("li",[s("a",{attrs:{href:"#parser"}},[t._v("parser")])]),s("li",[s("a",{attrs:{href:"#filter"}},[t._v("filter")]),s("ul",[s("li",[s("a",{attrs:{href:"#filter-groups"}},[t._v("filter-groups")])]),s("li",[s("a",{attrs:{href:"#filter-inputs"}},[t._v("filter-inputs")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"labeladd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labeladd","aria-hidden":"true"}},[this._v("#")]),this._v(" labelAdd")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("default:")]),this._v(" "),e("code",[this._v("add filter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"labelapply"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labelapply","aria-hidden":"true"}},[this._v("#")]),this._v(" labelApply")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Label of the Apply Button of the Modal. Used in the "),e("a",{attrs:{href:"#componentModal"}},[this._v("componentModal")]),this._v("-Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("default:")]),this._v(" "),e("code",[this._v("apply")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"labelcancle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labelcancle","aria-hidden":"true"}},[this._v("#")]),this._v(" labelCancle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Label of the Cancle Button of the Modal. Used in the "),e("a",{attrs:{href:"#componentModal"}},[this._v("componentModal")]),this._v("-Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("default:")]),this._v(" "),e("code",[this._v("cancle")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"labelremove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labelremove","aria-hidden":"true"}},[this._v("#")]),this._v(" labelRemove")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Label of the Remove Button of the Modal. Used in the "),e("a",{attrs:{href:"#componentModal"}},[this._v("componentModal")]),this._v("-Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("default:")]),this._v(" "),e("code",[this._v("remove")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"componentselect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentselect","aria-hidden":"true"}},[this._v("#")]),this._v(" componentSelect")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"componentchips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentchips","aria-hidden":"true"}},[this._v("#")]),this._v(" componentChips")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"componentmodal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentmodal","aria-hidden":"true"}},[this._v("#")]),this._v(" componentModal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"handleurl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handleurl","aria-hidden":"true"}},[this._v("#")]),this._v(" handleUrl")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Every filtered page should be accessible with an unique url for shareability. If you wan't to let this module handle the url update for you, simply set this option to "),e("code",[this._v("true")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"parser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parser","aria-hidden":"true"}},[this._v("#")]),this._v(" parser")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FilterComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":parser")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" parser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-filter-ui"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\tparser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" parser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FeathersJS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[this._v("#")]),this._v(" filter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Filter Attribute gets an Array of "),e("a",{attrs:{href:"#filter-groups"}},[this._v("filter-groups")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"filter-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" filter-groups")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("attribute")]),this._v(" "),e("th",[this._v("type")]),this._v(" "),e("th",[this._v("required")]),this._v(" "),e("th",[this._v("description")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("title")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("Used as the title in the "),s("a",{attrs:{href:"#componentModal"}},[t._v("componentModal")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("chipTemplate")])]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("/"),s("code",[t._v("Function")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("Used as a template for the strings displayed in the "),s("a",{attrs:{href:"#componentChips"}},[t._v("componentChips")]),t._v(". If it is a string, it needs to define a placeholder for each input of the group (in order). The Placeholderformat is "),s("code",[t._v("%n")]),t._v(" with n beeing the index of the input in the config. If defined as a function, the function gets the values of the inputs as an array of values v. The value for "),s("code",[t._v("input[i]")]),t._v(" is in "),s("code",[t._v("v[i]")]),t._v(". The Method must return a String.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("filter")])]),t._v(" "),s("td",[s("code",[t._v("Array")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("List of Filter Inputs. Each Filter must be an Object with the format "),s("a",{attrs:{href:"#filter-inputs"}},[t._v("described below")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("layout")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("Component")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("required")])]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("true")]),t._v(", the filter-group can not be removed from the applied filters list once it was applied. Usefull for static filters like "),s("em",[t._v('"item per page"')]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("parser")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("Object")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyCustomLayout "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./MyCustomLayout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Year"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tchipTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from %1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tlayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyCustomLayout\n\tfilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sort"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chipTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Sort by ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attribute"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"↗"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"↘"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tlayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sort"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\trequired"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tfilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"filter-inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-inputs","aria-hidden":"true"}},[this._v("#")]),this._v(" filter-inputs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Sort Edge Case")]),this._v(" "),e("p",[this._v("There is an edge case for sorting. The query for sorting must be generated from two inputs. One for the attribute to sort for and one for ASC/DESC sort order. Therefore the sort inputs must use the attributes "),e("code",[this._v("$sort-attribute")]),this._v(" and "),e("code",[this._v("$sort-order")]),this._v(", so the parser can respect this edge case.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("attribute")]),this._v(" "),e("th",[this._v("type")]),this._v(" "),e("th",[this._v("required")]),this._v(" "),e("th",[this._v("description")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("attribute")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("the database attribute that should get queried. "),s("br"),s("strong",[t._v("Be aware:")]),t._v(" there is an edge case for the sort filter.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("options")])]),t._v(" "),s("td",[s("code",[t._v("Array")])]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("Available Options for the input. If defined, each entry must be an object with the keys "),s("code",[t._v("label")]),t._v(" and "),s("code",[t._v("value")]),t._v(". "),s("br"),s("strong",[t._v("Note:")]),t._v(" some inputs may define default options, but you should always specify your own to be safe.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("applyNegated")])]),t._v(" "),s("td",[s("code",[t._v("Boolean")]),t._v("/"),s("code",[t._v("Function")])]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("• Defines, whether the user selected value should be negated in the generated query. Example: User: "),s("code",[t._v("true")]),t._v(", applyNegated: "),s("code",[t._v("true")]),t._v(" results in the query for "),s("code",[t._v("not true")]),t._v(". "),s("br"),t._v("• Defaults to false. "),s("br"),t._v("• When used as a function, those function gets the current input value and must return a Boolean.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("Component")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[s("code",[t._v("operator")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("(✔)")]),t._v(" "),s("td",[t._v("• Defines the operator used in the generated query. "),s("br"),t._v("• defaults to "),s("code",[t._v("=")]),t._v(" "),s("br"),t._v(" • Must be one of the following options: "),s("code",[t._v(">")]),t._v(", "),s("code",[t._v(">=")]),t._v(", "),s("code",[t._v("=")]),t._v(" or "),s("code",[t._v("includes")]),t._v("."),s("br"),t._v(" • "),s("code",[t._v("<")]),t._v(" and "),s("code",[t._v("<=")]),t._v(" can be achived by negating the input with "),s("code",[t._v("applyNegated")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("label")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("String")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("filter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$year"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    applyNegated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    operator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    design"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])}],!1,null,null,null);e.default=n.exports}}]);