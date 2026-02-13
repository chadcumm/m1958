import {
  StateDB,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-BUFWWIMH.js";
import "./chunk-NDOVVCWT.js";
import "./chunk-VBIJCP7Q.js";
import "./chunk-IKTMHBV3.js";
import "./chunk-3RE3EWZO.js";
import "./chunk-EYKZ3OZM.js";
import "./chunk-SQTCMOO7.js";
import "./chunk-OXBY2XW6.js";
import "./chunk-DCGUAWPX.js";
import "./chunk-6LRCEHUM.js";
import "./chunk-XDGA4UT3.js";
import "./chunk-SUY46IQH.js";
import "./chunk-U36H62CM.js";
import {
  __name
} from "./chunk-HBX7S24A.js";
import "./chunk-HBUOBYQU.js";
import "./chunk-2XDQVYK3.js";
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
