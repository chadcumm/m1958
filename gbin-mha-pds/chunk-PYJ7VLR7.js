import {
  StateDB,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-REQDR32P.js";
import "./chunk-NDOVVCWT.js";
import "./chunk-GC75ZY7D.js";
import "./chunk-VBIJCP7Q.js";
import "./chunk-5ZYGCQFY.js";
import "./chunk-KI5N2NNK.js";
import "./chunk-OXBY2XW6.js";
import "./chunk-DCGUAWPX.js";
import "./chunk-SQTCMOO7.js";
import "./chunk-5AA7DWSC.js";
import "./chunk-TFHFSFL7.js";
import "./chunk-SUY46IQH.js";
import "./chunk-U36H62CM.js";
import "./chunk-IHUGZWAQ.js";
import {
  __name
} from "./chunk-HBX7S24A.js";
import "./chunk-I7D2VZMI.js";

// node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-4FDKWEC3.mjs
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
