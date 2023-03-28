import { defineComponent as d, openBlock as r, createElementBlock as s, createElementVNode as l, toDisplayString as a, createCommentVNode as n, renderSlot as u, pushScopeId as _, popScopeId as p } from "vue";
const f = (e) => (_("data-v-3bca7071"), e = e(), p(), e), m = { class: "rule-editor" }, v = { class: "rule-editor-container" }, h = { class: "rule-editor-main" }, y = {
  key: 0,
  class: "rule-editor-title"
}, E = /* @__PURE__ */ f(() => /* @__PURE__ */ l("div", { class: "rule-editor-content" }, " content ", -1)), g = {
  key: 0,
  class: "rule-editor-form"
}, S = /* @__PURE__ */ d({
  __name: "RuleEditor",
  props: {
    title: {
      type: [String, Boolean],
      required: !1,
      default: (e) => {
        let t = e.title;
        return !t && t !== !1 && (t = "规则编辑器"), t;
      }
    },
    showForm: {
      type: Boolean,
      required: !1,
      default: !0
    },
    config: {
      type: Object,
      required: !1,
      default: (e) => (console.log(e), e || {
        ruleName: "",
        isPublic: !1,
        isLoop: !0
      })
    }
  },
  setup(e) {
    return (t, o) => (r(), s("div", m, [
      l("div", v, [
        l("div", h, [
          e.title ? (r(), s("div", y, a(e.title), 1)) : n("", !0),
          E
        ]),
        e.showForm ? (r(), s("div", g, [
          u(t.$slots, "ruleForm", {}, void 0, !0)
        ])) : n("", !0)
      ])
    ]));
  }
});
const b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, i] of t)
    o[c] = i;
  return o;
}, k = /* @__PURE__ */ b(S, [["__scopeId", "data-v-3bca7071"]]), B = {
  install: (e, t) => {
    e.component("RuleEditor", k);
  }
};
export {
  B as default
};
