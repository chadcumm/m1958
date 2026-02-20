import {
  package_default
} from "./chunk-R4RNBZHI.js";
import {
  selectSvgElement
} from "./chunk-5U6EBMRZ.js";
import {
  parse
} from "./chunk-KEQX6ZUK.js";
import "./chunk-NRAVRZAP.js";
import "./chunk-VVH27E6H.js";
import "./chunk-6UL4JAWY.js";
import "./chunk-LG3UQ2WK.js";
import "./chunk-CW4WWJOQ.js";
import {
  configureSvgSize
} from "./chunk-U36H62CM.js";
import {
  __name,
  log
} from "./chunk-HBX7S24A.js";
import "./chunk-JDI6P7IM.js";
import "./chunk-LN3G5W7W.js";
import "./chunk-BSKFWPNP.js";
import "./chunk-3OLD64DX.js";
import "./chunk-J4PSR23J.js";
import "./chunk-2XDQVYK3.js";
import "./chunk-I7D2VZMI.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-WHAUD3N6.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
