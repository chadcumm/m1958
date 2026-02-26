import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-OFQI67IQ.js";

// src/app/shared/components/mermaid-diagram.ts
var _c0 = ["mermaidContainer"];
function MermaidDiagramComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275text(1, "Loading diagram...");
    \u0275\u0275domElementEnd();
  }
}
function MermaidDiagramComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "strong");
    \u0275\u0275text(2, "Diagram Error:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
var MermaidDiagramComponent = class _MermaidDiagramComponent {
  /** The Mermaid diagram definition string */
  definition = input.required(...ngDevMode ? [{ debugName: "definition" }] : []);
  /** Optional unique ID for the diagram (auto-generated if not provided) */
  diagramId = input("mermaid-diagram-" + Math.random().toString(36).substring(2, 9), ...ngDevMode ? [{ debugName: "diagramId" }] : []);
  /** Reference to the container element */
  container = viewChild.required("mermaidContainer");
  /** Loading state */
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Error message if rendering fails */
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  /** Track if mermaid has been initialized */
  mermaidInitialized = false;
  /** Counter for unique diagram IDs */
  static renderCount = 0;
  constructor() {
    effect(() => {
      const def = this.definition();
      if (def && this.container()) {
        this.renderDiagram(def);
      }
    });
  }
  ngAfterViewInit() {
  }
  /**
   * Renders the Mermaid diagram using dynamic import.
   */
  async renderDiagram(definition) {
    this.loading.set(true);
    this.error.set(null);
    try {
      const mermaid = await import("./chunk-N6TGOMES.js");
      if (!this.mermaidInitialized) {
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: "basis"
          }
        });
        this.mermaidInitialized = true;
      }
      const uniqueId = `${this.diagramId()}-${++_MermaidDiagramComponent.renderCount}`;
      const { svg } = await mermaid.default.render(uniqueId, definition);
      const containerEl = this.container().nativeElement;
      containerEl.innerHTML = svg;
      this.loading.set(false);
    } catch (err) {
      console.error("Mermaid rendering error:", err);
      this.error.set(err instanceof Error ? err.message : "Failed to render diagram");
      this.loading.set(false);
    }
  }
  static \u0275fac = function MermaidDiagramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MermaidDiagramComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MermaidDiagramComponent, selectors: [["app-mermaid-diagram"]], viewQuery: function MermaidDiagramComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.container, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { definition: [1, "definition"], diagramId: [1, "diagramId"] }, decls: 5, vars: 2, consts: [["mermaidContainer", ""], [1, "mermaid-container"], [1, "mermaid-loading"], [1, "mermaid-error"], [1, "mermaid-content"]], template: function MermaidDiagramComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, MermaidDiagramComponent_Conditional_1_Template, 2, 0, "div", 2);
      \u0275\u0275conditionalCreate(2, MermaidDiagramComponent_Conditional_2_Template, 4, 1, "div", 3);
      \u0275\u0275domElement(3, "div", 4, 0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
    }
  }, styles: ["\n\n.mermaid-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 4px;\n}\n.mermaid-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.mermaid-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(svg) {\n  max-width: 100%;\n  height: auto;\n}\n.mermaid-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  padding: 24px;\n  font-style: italic;\n}\n.mermaid-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n  font-size: 0.875rem;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MermaidDiagramComponent, [{
    type: Component,
    args: [{ selector: "app-mermaid-diagram", standalone: true, template: `
    <div class="mermaid-container">
      @if (loading()) {
        <div class="mermaid-loading">Loading diagram...</div>
      }
      @if (error()) {
        <div class="mermaid-error">
          <strong>Diagram Error:</strong> {{ error() }}
        </div>
      }
      <div #mermaidContainer class="mermaid-content"></div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;d733a38c9a5ea9769d4317b79121b226cd997c2e26ad5b33b6a27dc9ac00fa0c;/Users/chadcummings/Github/gbin-mha-pds/src/app/shared/components/mermaid-diagram.ts */\n.mermaid-container {\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 4px;\n}\n.mermaid-content {\n  display: flex;\n  justify-content: center;\n}\n.mermaid-content :deep(svg) {\n  max-width: 100%;\n  height: auto;\n}\n.mermaid-loading {\n  text-align: center;\n  color: #6c757d;\n  padding: 24px;\n  font-style: italic;\n}\n.mermaid-error {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n  font-size: 0.875rem;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MermaidDiagramComponent, { className: "MermaidDiagramComponent", filePath: "src/app/shared/components/mermaid-diagram.ts", lineNumber: 76 });
})();

export {
  MermaidDiagramComponent
};
