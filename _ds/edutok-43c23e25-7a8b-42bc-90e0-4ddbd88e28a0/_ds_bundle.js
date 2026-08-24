/* @ds-bundle: {"namespace":"EduTokUI","components":[{"name":"Avatar","sourcePath":"components/general/Avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/general/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"Chip","sourcePath":"components/general/Chip/Chip.jsx"},{"name":"Divider","sourcePath":"components/general/Divider/Divider.jsx"},{"name":"IconButton","sourcePath":"components/general/IconButton/IconButton.jsx"},{"name":"Input","sourcePath":"components/general/Input/Input.jsx"},{"name":"Modal","sourcePath":"components/general/Modal/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/general/ProgressBar/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/general/Spinner/Spinner.jsx"},{"name":"Switch","sourcePath":"components/general/Switch/Switch.jsx"},{"name":"Text","sourcePath":"components/general/Text/Text.jsx"},{"name":"VideoCard","sourcePath":"components/general/VideoCard/VideoCard.jsx"}],"sourceHashes":{"components/general/Avatar/Avatar.jsx":"577229ecaa5c","components/general/Avatar/Avatar.d.ts":"a76bc01923eb","components/general/Avatar/Avatar.prompt.md":"d63a18884f84","components/general/Badge/Badge.jsx":"e5e0bb1aa895","components/general/Badge/Badge.d.ts":"a527048631cc","components/general/Badge/Badge.prompt.md":"bf25ef25d522","components/general/Button/Button.jsx":"bd5066ea85c3","components/general/Button/Button.d.ts":"f8587e32bf2b","components/general/Button/Button.prompt.md":"8f0501635801","components/general/Card/Card.jsx":"849959f27fd5","components/general/Card/Card.d.ts":"526b032e8743","components/general/Card/Card.prompt.md":"3cf6a49403db","components/general/Chip/Chip.jsx":"a001b0f1f375","components/general/Chip/Chip.d.ts":"d7177fe2476a","components/general/Chip/Chip.prompt.md":"28abcbe2a9fa","components/general/Divider/Divider.jsx":"67560389116d","components/general/Divider/Divider.d.ts":"15f7390abf8d","components/general/Divider/Divider.prompt.md":"771b36ec3947","components/general/IconButton/IconButton.jsx":"204321ba39f2","components/general/IconButton/IconButton.d.ts":"54775a7a29be","components/general/IconButton/IconButton.prompt.md":"4d70c3f1488e","components/general/Input/Input.jsx":"1d471f8b1893","components/general/Input/Input.d.ts":"7dc5581818eb","components/general/Input/Input.prompt.md":"bf3830099684","components/general/Modal/Modal.jsx":"e42f8e9cd867","components/general/Modal/Modal.d.ts":"89f7c5235fbd","components/general/Modal/Modal.prompt.md":"0ce287b0b91a","components/general/ProgressBar/ProgressBar.jsx":"8d3a293cbf2c","components/general/ProgressBar/ProgressBar.d.ts":"c029e1444bd8","components/general/ProgressBar/ProgressBar.prompt.md":"0fe63925463a","components/general/Spinner/Spinner.jsx":"4bc33c31aae3","components/general/Spinner/Spinner.d.ts":"4903f960abaf","components/general/Spinner/Spinner.prompt.md":"bf313370272d","components/general/Switch/Switch.jsx":"19198fc2dbba","components/general/Switch/Switch.d.ts":"869c212d3a3e","components/general/Switch/Switch.prompt.md":"5bf0da2f1cf5","components/general/Text/Text.jsx":"75fb42817f80","components/general/Text/Text.d.ts":"2bee961b37b1","components/general/Text/Text.prompt.md":"b2e596c053b8","components/general/VideoCard/VideoCard.jsx":"f9a821014897","components/general/VideoCard/VideoCard.d.ts":"ff95033b0760","components/general/VideoCard/VideoCard.prompt.md":"61b72482157b"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var EduTokUI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx14(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs6(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx14;
      module.exports.jsxs = jsxs6;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs6 : jsx14)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Chip: () => Chip,
    Divider: () => Divider,
    IconButton: () => IconButton,
    Input: () => Input,
    Modal: () => Modal,
    ProgressBar: () => ProgressBar,
    Spinner: () => Spinner,
    Switch: () => Switch,
    Text: () => Text,
    VideoCard: () => VideoCard
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime13 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime14 = __toESM(require_react_shim(), 1);
  function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  }) {
    const classes = [
      "edutok-button",
      `edutok-button--${variant}`,
      `edutok-button--${size}`,
      fullWidth ? "edutok-button--fullWidth" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: classes, ...rest, children: [
      leftIcon,
      children,
      rightIcon
    ] });
  }
  function IconButton({
    size = "md",
    active = false,
    className,
    children,
    ...rest
  }) {
    const classes = [
      "edutok-icon-button",
      `edutok-icon-button--${size}`,
      active ? "edutok-icon-button--active" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: classes, ...rest, children });
  }
  function Input({ label, error, icon, id, className, ...rest }) {
    const inputId = id ?? `edutok-input-${label?.replace(/\s+/g, "-").toLowerCase() ?? "field"}`;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: ["edutok-input-group", className ?? ""].filter(Boolean).join(" "), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "edutok-input-label", htmlFor: inputId, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: ["edutok-input-wrap", error ? "edutok-input-wrap--error" : ""].filter(Boolean).join(" "), children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "edutok-input-icon", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { id: inputId, className: "edutok-input", ...rest })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "edutok-input-error", children: error })
    ] });
  }
  function Card({ padding = "md", interactive = false, className, children, ...rest }) {
    const classes = [
      "edutok-card",
      `edutok-card--padding-${padding}`,
      interactive ? "edutok-card--interactive" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: classes, ...rest, children });
  }
  function Badge({ variant = "default", className, children, ...rest }) {
    const classes = ["edutok-badge", `edutok-badge--${variant}`, className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: classes, ...rest, children });
  }
  function Chip({ selected = false, className, children, ...rest }) {
    const classes = ["edutok-chip", selected ? "edutok-chip--selected" : "", className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: classes, "aria-pressed": selected, ...rest, children });
  }
  function initialsFrom(name) {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  }
  function Avatar({ src, name, size = "md", className, ...rest }) {
    const classes = ["edutok-avatar", `edutok-avatar--${size}`, className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: classes, ...rest, children: src ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src, alt: name }) : initialsFrom(name) });
  }
  function Divider({ orientation = "horizontal", className, ...rest }) {
    const classes = ["edutok-divider", `edutok-divider--${orientation}`, className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", { className: classes, ...rest });
  }
  var TAG_BY_VARIANT = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    caption: "span",
    label: "span"
  };
  function Text({ as = "body", className, children, ...rest }) {
    const Tag = TAG_BY_VARIANT[as];
    const classes = ["edutok-text", `edutok-text--${as}`, className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Tag, { className: classes, ...rest, children });
  }
  function Modal({ open, onClose, title, children, footer }) {
    if (!open) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "edutok-modal-overlay", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "edutok-modal", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "edutok-modal-header", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { as: "h2", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconButton, { "aria-label": "Close", onClick: onClose, children: "\u2715" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "edutok-modal-body", children }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "edutok-modal-footer", children: footer })
    ] }) });
  }
  function Spinner({ size = "md", className, ...rest }) {
    const classes = ["edutok-spinner", `edutok-spinner--${size}`, className ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { role: "status", "aria-label": "Loading", className: classes, ...rest });
  }
  function ProgressBar({ value, variant = "accent", className, ...rest }) {
    const clamped = Math.min(100, Math.max(0, value));
    const fillClass = variant === "accent" ? "edutok-progress-fill" : `edutok-progress-fill edutok-progress-fill--${variant}`;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: ["edutok-progress-track", className ?? ""].filter(Boolean).join(" "),
        role: "progressbar",
        "aria-valuenow": clamped,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: fillClass, style: { width: `${clamped}%` } })
      }
    );
  }
  function Switch({ label, checked, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { className: ["edutok-switch", className ?? ""].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: ["edutok-switch-track", checked ? "edutok-switch-track--checked" : ""].filter(Boolean).join(" "), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "edutok-switch-thumb" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "checkbox", checked, ...rest }),
      label
    ] });
  }
  function VideoCard({
    thumbnailUrl,
    title,
    channel,
    duration,
    meta,
    kind,
    className,
    ...rest
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: ["edutok-video-card", className ?? ""].filter(Boolean).join(" "), ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "edutok-video-card-thumb", children: [
        thumbnailUrl && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: thumbnailUrl, alt: "" }),
        kind && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "edutok-video-card-kind", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Badge, { variant: "primary", children: kind === "short" ? "Short" : "Video" }) }),
        duration && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "edutok-video-card-duration", children: duration })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "edutok-video-card-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "edutok-video-card-meta", children: [
        channel,
        meta ? ` \xB7 ${meta}` : ""
      ] })
    ] });
  }
  return __toCommonJS(index_exports);
})();
window.EduTokUI=EduTokUI.__dsMainNs?Object.assign({},EduTokUI,EduTokUI.__dsMainNs,{__dsMainNs:undefined}):EduTokUI;
