import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-OXEOREKJ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/vt/code/gaming-vault/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/Header.tsx
init_react();
function Header() {
  return /* @__PURE__ */ React.createElement("header", {
    className: "bg-gradient-to-r from-fuchsia-500 to-fuchsia-500 py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-4xl mx-auto px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white text-lg font-semibold"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Gaming Vault"))));
}

// app/styles/app.css
var app_default = "/build/_assets/app-DH6QYBHE.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Gaming Vault",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-gray-100"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-XBEY2NOT.js.map
