(function (e) {
  function t(t) {
    for (
      var s, o, a = t[0], c = t[1], l = t[2], p = 0, h = [];
      p < a.length;
      p++
    )
      (o = a[p]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]),
        (r[o] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    d && d(t);
    while (h.length) h.shift()();
    return n.push.apply(n, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < n.length; t++) {
      for (var i = n[t], s = !0, a = 1; a < i.length; a++) {
        var c = i[a];
        0 !== r[c] && (s = !1);
      }
      s && (n.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var s = {},
    r = { app: 0 },
    n = [];
  function o(t) {
    if (s[t]) return s[t].exports;
    var i = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = s),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          o.d(
            i,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/dom-css/");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var l = 0; l < a.length; l++) t(a[l]);
  var d = c;
  n.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  "034f": function (e, t, i) {
    "use strict";
    i("85ec");
  },
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i("2b0e"),
      r = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { class: { embed: e.embed }, attrs: { id: "app" } }, [
          e.embed
            ? e._e()
            : i("header", [i("h1", [e._v("DOM Tree Visualizer")])]),
          i("main", [
            i(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.embed,
                    expression: "!embed",
                  },
                ],
                staticClass: "col1",
              },
              [
                i("h2", [e._v("HTML")]),
                i("div", [
                  i("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.html,
                        expression: "html",
                      },
                    ],
                    staticClass: "html-input",
                    domProps: { value: e.html },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.html = t.target.value);
                      },
                    },
                  }),
                ]),
                i("h2", [e._v("CSS")]),
                i("div", { staticClass: "input-wrap" }, [
                  i("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.selector,
                        expression: "selector",
                      },
                    ],
                    staticClass: "input",
                    attrs: {
                      divte: "off",
                      autocorrect: "off",
                      spellcheck: "false",
                    },
                    domProps: { value: e.selector },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.selector = t.target.value);
                      },
                    },
                  }),
                  i(
                    "div",
                    { staticClass: "selector" },
                    e._l(e.selectorParts, function (t, s) {
                      return i("span", { key: s, class: "type-" + t.type }, [
                        e._v(e._s(t.selector)),
                      ]);
                    }),
                    0
                  ),
                ]),
                i("h2", [e._v("Specificity")]),
                i("div", { staticClass: "specificity" }, [
                  i("span", { staticClass: "type-a" }, [
                    e._v(e._s(e.specificity.specificityArray[1])),
                  ]),
                  i("span", { staticClass: "type-b" }, [
                    e._v(e._s(e.specificity.specificityArray[2])),
                  ]),
                  i("span", { staticClass: "type-c" }, [
                    e._v(e._s(e.specificity.specificityArray[3])),
                  ]),
                ]),
              ]
            ),
            i("section", [
              e.embed ? e._e() : i("h2", [e._v("DOM Tree")]),
              i("div", { ref: "tree", attrs: { id: "tree" } }),
              i("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.embed,
                    expression: "!embed",
                  },
                ],
                ref: "graphOptions",
              }),
            ]),
          ]),
          i("footer", [
            i("iframe", { ref: "iframe" }),
            e.embed
              ? e._e()
              : i("p", [
                  e._v("Compiled By"),
                  i(
                    "a",
                    { attrs: { href: "https://www.linkedin.com/in/mealokchaube/" } },
                    [e._v(" mealokchaube")]
                  ),
                ]),
          ]),
        ]);
      },
      n = [],
      o = i("9ceb"),
      a = (i("5207"), i("4f27")),
      c = i.n(a);
    let l;
    const d = "skip_me";
    function p(e, t, i = "1") {
      let s = 1;
      for (const n of [...e.childNodes].filter(
        (e) => Node.ELEMENT_NODE === e.nodeType && e.id !== d
      )) {
        const e = i + s;
        let o = `*${n.tagName.toLowerCase()}*`;
        n.id && (o += ` _#${n.id}_`);
        const a = [...n.classList];
        a.length > 0 && (o += ` _.${a.join(".")}_`);
        const c = { id: e, label: o, shape: "box" };
        t.nodes.push(c), t.edges.push({ from: i, to: e });
        try {
          const e = getComputedStyle(n);
          "50px" === e.getPropertyValue("margin-left") &&
            (c.group = "highlighted");
        } catch (r) {
          console.log(r);
        }
        p(n, t, e), s++;
      }
      return t;
    }
    var h = {
        name: "App",
        data() {
          return {
            html: '<h1 class="abc"></h1>\n<p></p>\n<p></p>\n<ul>\n  <li class="test abc"></li>\n  <li><img></li>\n</ul>\n<p></p>\n<h1 id="abc"></h1>',
            selector: "li.abc",
            embed: !1,
          };
        },
        computed: {
          specificity() {
            const e = Object(o["a"])(this.selector);
            return e && e.length > 0
              ? e[0]
              : { parts: [], specificityArray: [0, 0, 0, 0] };
          },
          selectorParts() {
            let e = 0;
            const t = [];
            return (
              this.specificity.parts.forEach((i) => {
                i.index > e &&
                  t.push({
                    type: "whitespace",
                    selector: this.selector.substr(e, i.index - e),
                  }),
                  t.push(i),
                  (e = i.index + i.length);
              }),
              e < this.selector.length &&
                t.push({
                  type: "whitespace",
                  selector:
                    this.selector.substr(e, this.selector.length - e) + " ",
                }),
              t
            );
          },
        },
        mounted() {
          (this.d = this.$refs.iframe.contentDocument),
            (this.style = document.createElement("style")),
            (this.style.id = d),
            this.build(),
            window.top != window &&
              ((this.embed = !0),
              (this.html = ""),
              window.addEventListener(
                "message",
                (e) => {
                  let t = e.data;
                  ("object" === typeof t && "vueDetected" in t) ||
                    ("object" === typeof t &&
                      "html" in t &&
                      (this.html = t.html));
                },
                !1
              )),
            window.addEventListener("resize", () => {
              l && l.redraw();
            });
        },
        methods: {
          build() {
            l && l.destroy(), (this.$refs.graphOptions.innerHTML = "");
            let e = this.d.body;
            const t = this.html.toLowerCase().includes("<html");
            t && (e = this.d.children[0]),
              (e.innerHTML = this.html),
              this.d.head.append(this.style),
              (this.style.textContent =
                this.selector + " { margin-left:50px; }"),
              (this.$refs.tree.innerHTML = "");
            const i = p(e, {
                nodes: [{ id: "1", label: `*${t ? "html" : "body"}*` }],
                edges: [],
              }),
              s = {
                autoResize: !1,
                height: "100%",
                width: "100%",
                layout: {
                  hierarchical: {
                    direction: "UD",
                    sortMethod: "directed",
                    levelSeparation: 100,
                    nodeSpacing: 100,
                    parentCentralization: !0,
                    edgeMinimization: !0,
                    blockShifting: !0,
                  },
                },
                interaction: { dragNodes: !1 },
                physics: { enabled: !1 },
                nodes: {
                  borderWidth: 0,
                  color: { background: "#00171d" },
                  font: { color: "white", size: 24, multi: "md", face: "Lato" },
                },
                groups: {
                  highlighted: {
                    font: { color: "black" },
                    color: { background: "#FFEB3B" },
                  },
                },
                configure: {
                  filter: (e) => e.includes("direction"),
                  container: this.$refs.graphOptions,
                  showButton: !1,
                },
              };
            l = new c.a.Network(
              this.$refs.tree,
              {
                nodes: new c.a.DataSet(i.nodes),
                edges: new c.a.DataSet(i.edges),
              },
              s
            );
          },
        },
        watch: {
          html() {
            this.build();
          },
          selector() {
            this.build();
          },
        },
      },
      u = h,
      f = (i("034f"), i("2877")),
      m = Object(f["a"])(u, r, n, !1, null, null, null),
      y = m.exports;
    (s["a"].config.productionTip = !1),
      new s["a"]({ render: (e) => e(y) }).$mount("#app");
  },
  "85ec": function (e, t, i) {},
});
//# sourceMappingURL=app.76295796.js.map
