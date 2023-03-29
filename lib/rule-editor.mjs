import { defineComponent as w, ref as h, resolveComponent as a, resolveDirective as U, openBlock as n, createElementBlock as s, createElementVNode as d, createVNode as l, withCtx as i, createTextVNode as k, toDisplayString as b, unref as c, Fragment as y, renderList as C, createBlock as L, mergeProps as j, createCommentVNode as m, withDirectives as G, pushScopeId as M, popScopeId as P, isRef as z, renderSlot as A } from "vue";
function H(e, t) {
  for (let o = 0; o < e.length; o++)
    if (e[o].value === t)
      return e[o].label;
}
const D = [
  {
    label: "并且",
    value: 1
  },
  {
    label: "或者",
    value: 2
  }
], J = (e) => (M("data-v-6aacbc41"), e = e(), P(), e), K = { class: "single-rule" }, Q = { class: "if-content" }, W = /* @__PURE__ */ J(() => /* @__PURE__ */ d("div", { class: "common-title" }, "如果", -1)), X = { class: "content" }, Y = {
  key: 0,
  class: "line"
}, Z = { class: "condition-container" }, ee = {
  key: 0,
  class: "condition-border-left"
}, te = { class: "condition-content" }, oe = { class: "condition" }, ne = /* @__PURE__ */ w({
  __name: "SingleRule",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    isRoot: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["on-delete"],
  setup(e, { emit: t }) {
    const o = e;
    let r = h(o.modelValue);
    const u = {
      label: "",
      value: ""
    };
    let p = D.map((v) => ({
      label: v.label,
      handleClick: () => {
        r.value.ifData.keyword = v.value;
      }
    }));
    const I = [
      {
        label: "添加条件",
        handleClick: R,
        attrs: {
          divided: !0
        }
      },
      {
        label: "添加联合条件",
        handleClick: B
      }
    ];
    p = p.concat(I), o.isRoot || p.push({
      label: "删除",
      handleClick: () => {
        t("on-delete");
      }
    });
    let f = h([]);
    function R() {
      f.value.push({
        modelValue: null,
        type: null
      });
    }
    function B() {
    }
    return (v, pe) => {
      const x = a("Text"), g = a("Button"), S = a("Icon"), E = a("DropdownItem"), N = a("DropdownMenu"), $ = a("Dropdown"), O = a("ButtonGroup"), q = a("Cascader"), F = U("width");
      return n(), s("div", K, [
        d("div", Q, [
          W,
          d("div", X, [
            l(O, { class: "if-content-button-group" }, {
              default: i(() => [
                l(g, null, {
                  default: i(() => [
                    l(x, null, {
                      default: i(() => [
                        k(b(c(H)(c(D), c(r).ifData.keyword)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(g, { class: "if-content-button" }, {
                  default: i(() => [
                    l($, { trigger: "hover" }, {
                      list: i(() => [
                        l(N, null, {
                          default: i(() => [
                            (n(!0), s(y, null, C(c(p), (_) => (n(), L(E, j(_.attrs, {
                              onClick: _.handleClick
                            }), {
                              default: i(() => [
                                k(b(_.label), 1)
                              ]),
                              _: 2
                            }, 1040, ["onClick"]))), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      default: i(() => [
                        l(S, {
                          size: "25",
                          type: "ios-more"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c(f).length ? (n(), s("div", Y)) : m("", !0),
            d("div", Z, [
              c(f).length > 1 ? (n(), s("div", ee)) : m("", !0),
              d("div", te, [
                (n(!0), s(y, null, C(c(f), (_) => (n(), s("div", oe, [
                  G(l(q, {
                    data: u,
                    modelValue: _.modelValue,
                    "onUpdate:modelValue": (T) => _.modelValue = T
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [F, 200]
                  ])
                ]))), 256))
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const V = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, u] of t)
    o[r] = u;
  return o;
}, le = /* @__PURE__ */ V(ne, [["__scopeId", "data-v-6aacbc41"]]), se = { class: "rule-editor" }, ae = { class: "rule-editor-container" }, ie = { class: "rule-editor-main" }, ce = {
  key: 0,
  class: "rule-editor-title"
}, de = { class: "rule-editor-content" }, re = {
  key: 0,
  class: "rule-editor-form"
}, ue = /* @__PURE__ */ w({
  __name: "RuleEditor",
  props: {
    // 名称
    title: {
      type: [String, Boolean],
      required: !1,
      default: (e) => {
        let t = e.title;
        return !t && t !== !1 && (t = "规则编辑器"), t;
      }
    },
    // 是否展示表单
    showForm: {
      type: Boolean,
      required: !1,
      default: !0
    },
    // 配置数据
    config: {
      type: Object,
      required: !1,
      default: (e) => e || {
        ruleName: "",
        isPublic: !1,
        isLoop: !0
      }
    }
  },
  setup(e) {
    let t = h({
      ifData: {
        keyword: 1
      }
    });
    return (o, r) => (n(), s("div", se, [
      d("div", ae, [
        d("div", ie, [
          e.title ? (n(), s("div", ce, b(e.title), 1)) : m("", !0),
          d("div", de, [
            l(le, {
              modelValue: c(t),
              "onUpdate:modelValue": r[0] || (r[0] = (u) => z(t) ? t.value = u : t = u)
            }, null, 8, ["modelValue"])
          ])
        ]),
        e.showForm ? (n(), s("div", re, [
          A(o.$slots, "ruleForm", {}, void 0, !0)
        ])) : m("", !0)
      ])
    ]));
  }
});
const _e = /* @__PURE__ */ V(ue, [["__scopeId", "data-v-e31215ef"]]), me = {
  install: (e, t) => {
    e.component("RuleEditor", _e);
  }
};
export {
  me as default
};
