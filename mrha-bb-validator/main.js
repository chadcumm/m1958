import {
  APP_BOOTSTRAP_LISTENER,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConfigService,
  Console,
  ContentChildren,
  CustomService,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  ErrorHandlerService,
  EventEmitter,
  HashLocationStrategy,
  HostAttributeToken,
  HostBinding,
  HostListener,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  MPageService,
  MpageLogComponent,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Observable,
  Output,
  PRECOMMIT_HANDLER_SUPPORTED,
  PathLocationStrategy,
  PendingTasksInternal,
  PlatformLocation,
  PlatformNavigation,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  Title,
  ViewContainerRef,
  ViewportScroller,
  __objRest,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  bootstrapApplication,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  createEnvironmentInjector,
  defer,
  filter,
  finalize,
  first,
  formatRuntimeError,
  from,
  inject,
  input,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  makeEnvironmentProviders,
  map,
  mergeAll,
  mergeMap,
  of,
  output,
  performanceMarkFeature,
  pipe,
  promiseWithResolvers,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZonelessChangeDetection,
  publishExternalGlobalUtil,
  reflectComponentType,
  runInInjectionContext,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-I2AZQYOQ.js";

// node_modules/@angular/router/fesm2022/_router-chunk.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  params;
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function matchParts(routeParts, urlSegments, posParams) {
  for (let i = 0; i < routeParts.length; i++) {
    const part = routeParts[i];
    const segment = urlSegments[i];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return false;
    }
  }
  return true;
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  const wildcardIndex = parts.indexOf("**");
  if (wildcardIndex === -1) {
    if (parts.length > segments.length) {
      return null;
    }
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
      return null;
    }
    const posParams2 = {};
    const consumed = segments.slice(0, parts.length);
    if (!matchParts(parts, consumed, posParams2)) {
      return null;
    }
    return {
      consumed,
      posParams: posParams2
    };
  }
  if (wildcardIndex !== parts.lastIndexOf("**")) {
    return null;
  }
  const pre = parts.slice(0, wildcardIndex);
  const post = parts.slice(wildcardIndex + 1);
  if (pre.length + post.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && segmentGroup.hasChildren() && route.path !== "**") {
    return null;
  }
  const posParams = {};
  if (!matchParts(pre, segments.slice(0, pre.length), posParams)) {
    return null;
  }
  if (!matchParts(post, segments.slice(segments.length - post.length), posParams)) {
    return null;
  }
  return {
    consumed: segments,
    posParams
  };
}
function firstValueFrom(source) {
  return new Promise((resolve, reject) => {
    source.pipe(first()).subscribe({
      next: (value) => resolve(value),
      error: (err) => reject(err)
    });
  });
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function wrapIntoPromise(value) {
  if (isObservable(value)) {
    return firstValueFrom(value);
  }
  return Promise.resolve(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function isActive(url, router, matchOptions) {
  const urlTree = url instanceof UrlTree ? url : router.parseUrl(url);
  return computed(() => containsTree(router.lastSuccessfulNavigation()?.finalUrl ?? new UrlTree(), urlTree, matchOptions));
}
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  root;
  queryParams;
  fragment;
  _queryParamMap;
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  segments;
  children;
  parent = null;
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    Object.values(children).forEach((v) => v.parent = this);
  }
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  path;
  parameters;
  _parameterMap;
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static \u0275fac = function UrlSerializer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlSerializer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  url;
  remaining;
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName ?? PRIMARY_OUTLET] = Object.keys(children).length === 1 && children[PRIMARY_OUTLET] ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null, urlSerializer = new DefaultUrlSerializer()) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment, urlSerializer);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment, urlSerializer) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment, urlSerializer);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment, urlSerializer);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function normalizeQueryParams(k, v, urlSerializer) {
  k ||= "\u0275";
  const tree2 = new UrlTree();
  tree2.queryParams = {
    [k]: v
  };
  return urlSerializer.parse(urlSerializer.serialize(tree2)).queryParams[k];
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer) {
  const qp = {};
  for (const [key, value] of Object.entries(queryParams ?? {})) {
    qp[key] = Array.isArray(value) ? value.map((v) => normalizeQueryParams(key, v, urlSerializer)) : normalizeQueryParams(key, value, urlSerializer);
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  segmentGroup;
  processChildren;
  index;
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  id;
  url;
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  type = EventType.NavigationStart;
  navigationTrigger;
  restoredState;
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  urlAfterRedirects;
  type = EventType.NavigationEnd;
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
  }
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
  NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationCancel;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
function isRedirectingEvent(event) {
  return event instanceof NavigationCancel && (event.code === NavigationCancellationCode.Redirect || event.code === NavigationCancellationCode.SupersededByNewNavigation);
}
var NavigationSkipped = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationSkipped;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
};
var NavigationError = class extends RouterEvent {
  error;
  target;
  type = EventType.NavigationError;
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
  }
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.RoutesRecognized;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.GuardsCheckStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  shouldActivate;
  type = EventType.GuardsCheckEnd;
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveEnd;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  route;
  type = EventType.RouteConfigLoadStart;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  route;
  type = EventType.RouteConfigLoadEnd;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  snapshot;
  type = EventType.ChildActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  snapshot;
  type = EventType.ChildActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  snapshot;
  type = EventType.ActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  snapshot;
  type = EventType.ActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  routerEvent;
  position;
  anchor;
  scrollBehavior;
  type = EventType.Scroll;
  constructor(routerEvent, position, anchor, scrollBehavior) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.scrollBehavior = scrollBehavior;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  url;
  navigationBehaviorOptions;
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  rootInjector;
  outlet = null;
  route = null;
  children;
  attachRef = null;
  get injector() {
    return this.route?.snapshot._environmentInjector ?? this.rootInjector;
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.children = new ChildrenOutletContexts(this.rootInjector);
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  rootInjector;
  contexts = /* @__PURE__ */ new Map();
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
  }
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static \u0275fac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenOutletContexts)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  _root;
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2) return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  value;
  children;
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  snapshot;
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent, injector) {
  const snapshot = createEmptyStateSnapshot(rootComponent, injector);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent, injector) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {}, injector);
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || routeConfig?.path === "" || !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  url;
  params;
  queryParams;
  fragment;
  data;
  outlet;
  component;
  routeConfig;
  _resolve;
  _resolvedData;
  _routerState;
  _paramMap;
  _queryParamMap;
  _environmentInjector;
  get title() {
    return this.data?.[RouteTitleKey];
  }
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve, environmentInjector) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
    this._environmentInjector = environmentInjector;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  url;
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var ROUTER_OUTLET_DATA = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "RouterOutlet data" : "");
var RouterOutlet = class _RouterOutlet {
  activated = null;
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  name = PRIMARY_OUTLET;
  activateEvents = new EventEmitter();
  deactivateEvents = new EventEmitter();
  attachEvents = new EventEmitter();
  detachEvents = new EventEmitter();
  routerOutletData = input(...ngDevMode ? [void 0, {
    debugName: "routerOutletData"
  }] : []);
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  changeDetector = inject(ChangeDetectorRef);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  supportsBindingToComponentInputs = true;
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static \u0275fac = function RouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name",
      routerOutletData: [1, "routerOutletData"]
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet"
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }],
    routerOutletData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerOutletData",
        required: false
      }]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  outletData;
  constructor(route, childContexts, parent, outletData) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.outletData = outletData;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    if (token === ROUTER_OUTLET_DATA) {
      return this.outletData;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Input Binder" : "");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static \u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static \u0275fac = function \u0275EmptyOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275EmptyOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _\u0275EmptyOutletComponent,
    selectors: [["ng-component"]],
    exportAs: ["emptyRouterOutlet"],
    decls: 1,
    vars: 0,
    template: function _EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet />`,
      imports: [RouterOutlet],
      exportAs: "emptyRouterOutlet"
    }]
  }], null, null);
})();
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var RedirectCommand = class {
  redirectTo;
  navigationBehaviorOptions;
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var ActivateRoutes = class {
  routeReuseStrategy;
  futureState;
  currState;
  forwardEvent;
  inputBindingEnabled;
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  path;
  route;
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  component;
  route;
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = /* @__PURE__ */ Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return runInInjectionContext(future._environmentInjector, () => mode(curr, future));
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function abortSignalToObservable(signal2) {
  if (signal2.aborted) {
    return of(void 0).pipe(take(1));
  }
  return new Observable((subscriber) => {
    const handler = () => {
      subscriber.next();
      subscriber.complete();
    };
    signal2.addEventListener("abort", handler);
    return () => signal2.removeEventListener("abort", handler);
  });
}
function takeUntilAbort(signal2) {
  return takeUntil(abortSignalToObservable(signal2));
}
function checkGuards(forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path), runCanActivate(futureSnapshot, check.route));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = futureARS._environmentInjector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = d.node._environmentInjector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = currARS._environmentInjector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer, abortSignal) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    const obs$ = wrapIntoObservable(guardVal);
    return abortSignal ? obs$.pipe(takeUntilAbort(abortSignal)) : obs$;
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer, abortSignal) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal).pipe(takeUntilAbort(abortSignal));
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class _NoMatch extends Error {
  segmentGroup;
  constructor(segmentGroup) {
    super();
    this.segmentGroup = segmentGroup || null;
    Object.setPrototypeOf(this, _NoMatch.prototype);
  }
};
var AbsoluteRedirect = class _AbsoluteRedirect extends Error {
  urlTree;
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
    Object.setPrototypeOf(this, _AbsoluteRedirect.prototype);
  }
};
function namedOutletsRedirect(redirectTo) {
  throw new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`);
}
function canLoadFails(route) {
  throw navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected);
}
var ApplyRedirects = class {
  urlSerializer;
  urlTree;
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  async lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return res;
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        throw namedOutletsRedirect(`${route.redirectTo}`);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  async applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    const redirect = await getRedirectResult(redirectTo, currentSnapshot, injector);
    if (redirect instanceof UrlTree) {
      throw new AbsoluteRedirect(redirect);
    }
    const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
    if (redirect[0] === "/") {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v[0] === ":";
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return Promise.resolve(redirectTo);
  }
  const redirectToFn = redirectTo;
  const {
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    params,
    data,
    title,
    paramMap,
    queryParamMap
  } = currentSnapshot;
  return firstValueFrom(wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn({
    params,
    data,
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    title,
    paramMap,
    queryParamMap
  }))));
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes2.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer, abortSignal) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer, abortSignal).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes2) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
async function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly", abortSignal) {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  injector;
  configLoader;
  rootComponentType;
  config;
  urlTree;
  paramsInheritanceStrategy;
  urlSerializer;
  abortSignal;
  applyRedirects;
  absoluteRedirectCount = 0;
  allowRedirects = true;
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.abortSignal = abortSignal;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  async recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    const {
      children,
      rootSnapshot
    } = await this.match(rootSegmentGroup);
    const rootNode = new TreeNode(rootSnapshot, children);
    const routeState = new RouterStateSnapshot("", rootNode);
    const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
    tree2.queryParams = this.urlTree.queryParams;
    routeState.url = this.urlSerializer.serialize(tree2);
    return {
      state: routeState,
      tree: tree2
    };
  }
  async match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {}, this.injector);
    try {
      const children = await this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot);
      return {
        children,
        rootSnapshot
      };
    } catch (e) {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }
  }
  async processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    const child = await this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute);
    return child instanceof TreeNode ? [child] : [];
  }
  async processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    let children = [];
    for (const childOutlet of childOutlets) {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      const outletChildren = await this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
      children.push(...outletChildren);
    }
    const mergedChildren = mergeEmptyPathMatches(children);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkOutletNameUniqueness(mergedChildren);
    }
    sortActivatedRouteSnapshots(mergedChildren);
    return mergedChildren;
  }
  async processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    for (const r of routes2) {
      try {
        return await this.processSegmentAgainstRoute(r._injector ?? injector, routes2, r, segmentGroup, segments, outlet, allowRedirects, parentRoute);
      } catch (e) {
        if (e instanceof NoMatch || isEmptyError(e)) {
          continue;
        }
        throw e;
      }
    }
    if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
      return new NoLeftoversInUrl();
    }
    throw new NoMatch(segmentGroup);
  }
  async processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      throw new NoMatch(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet, parentRoute);
    }
    throw new NoMatch(rawSegment);
  }
  async expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) throw new NoMatch(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route), injector);
    const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
    currentSnapshot.params = Object.freeze(inherited.params);
    currentSnapshot.data = Object.freeze(inherited.data);
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const newTree = await this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
    const newSegments = await this.applyRedirects.lineralizeSegments(route, newTree);
    return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
  }
  async matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const result = await firstValueFrom(matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer, this.abortSignal));
    if (route.path === "**") {
      rawSegment.children = {};
    }
    if (!result?.matched) {
      throw new NoMatch(rawSegment);
    }
    injector = route._injector ?? injector;
    const {
      routes: childConfig
    } = await this.getChildConfig(injector, route, segments);
    const childInjector = route._loadedInjector ?? injector;
    const {
      parameters,
      consumedSegments,
      remainingSegments
    } = result;
    const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route), injector);
    const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
    snapshot.params = Object.freeze(inherited.params);
    snapshot.data = Object.freeze(inherited.data);
    const {
      segmentGroup,
      slicedSegments
    } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
      const children = await this.processChildren(childInjector, childConfig, segmentGroup, snapshot);
      return new TreeNode(snapshot, children);
    }
    if (childConfig.length === 0 && slicedSegments.length === 0) {
      return new TreeNode(snapshot, []);
    }
    const matchedOnOutlet = getOutlet(route) === outlet;
    const child = await this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot);
    return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
  }
  async getChildConfig(injector, route, segments) {
    if (route.children) {
      return {
        routes: route.children,
        injector
      };
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        const ngModuleFactory = route._loadedNgModuleFactory;
        if (ngModuleFactory && !route._loadedInjector) {
          route._loadedInjector = ngModuleFactory.create(injector).injector;
        }
        return {
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        };
      }
      if (this.abortSignal.aborted) {
        throw new Error(this.abortSignal.reason);
      }
      const shouldLoadResult = await firstValueFrom(runCanLoadGuards(injector, route, segments, this.urlSerializer, this.abortSignal));
      if (shouldLoadResult) {
        const cfg = await this.configLoader.loadChildren(injector, route);
        route._loadedRoutes = cfg.routes;
        route._loadedInjector = cfg.injector;
        route._loadedNgModuleFactory = cfg.factory;
        return cfg;
      }
      throw canLoadFails(route);
    }
    return {
      routes: [],
      injector
    };
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET) return -1;
    if (b.value.outlet === PRIMARY_OUTLET) return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy, abortSignal) {
  return mergeMap(async (t) => {
    const {
      state: targetSnapshot,
      tree: urlAfterRedirects
    } = await recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy, abortSignal);
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  });
}
function resolveData(paramsInheritanceStrategy) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS) {
  const closestInjector = futureARS._environmentInjector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static \u0275fac = function TitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitleStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static \u0275fac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  factory: () => ({})
});
var ROUTES = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  componentLoaders = /* @__PURE__ */ new WeakMap();
  childrenLoaders = /* @__PURE__ */ new WeakMap();
  onLoadStartListener;
  onLoadEndListener;
  compiler = inject(Compiler);
  async loadComponent(injector, route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return Promise.resolve(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const loaded = await wrapIntoPromise(runInInjectionContext(injector, () => route.loadComponent()));
        const component = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
        if (this.onLoadEndListener) {
          this.onLoadEndListener(route);
        }
        (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
        route._loadedComponent = component;
        return component;
      } finally {
        this.componentLoaders.delete(route);
      }
    })();
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return Promise.resolve({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const result = await loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
        route._loadedRoutes = result.routes;
        route._loadedInjector = result.injector;
        route._loadedNgModuleFactory = result.factory;
        return result;
      } finally {
        this.childrenLoaders.delete(route);
      }
    })();
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static \u0275fac = function RouterConfigLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterConfigLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
async function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  const loaded = await wrapIntoPromise(runInInjectionContext(parentInjector, () => route.loadChildren()));
  const t = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
  let factoryOrRoutes;
  if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
    factoryOrRoutes = t;
  } else {
    factoryOrRoutes = await compiler.compileModuleAsync(t);
  }
  if (onLoadEndListener) {
    onLoadEndListener(route);
  }
  let injector;
  let rawRoutes;
  let requireStandaloneComponents = false;
  let factory = void 0;
  if (Array.isArray(factoryOrRoutes)) {
    rawRoutes = factoryOrRoutes;
    requireStandaloneComponents = true;
  } else {
    injector = factoryOrRoutes.create(parentInjector).injector;
    factory = factoryOrRoutes;
    rawRoutes = injector.get(ROUTES, [], {
      optional: true,
      self: true
    }).flat();
  }
  const routes2 = rawRoutes.map(standardizeConfig);
  (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
  return {
    routes: routes2,
    injector,
    factory
  };
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
async function maybeResolveResources(value) {
  if (false) {
    try {
      await resolveComponentResources(fetch);
    } catch (error) {
      console.error(error);
    }
  }
  return value;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static \u0275fac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static \u0275fac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
    transitionOptions.skipNextTransition = false;
    return new Promise((resolve) => setTimeout(resolve));
  }
  let resolveViewTransitionStarted;
  const viewTransitionStarted = new Promise((resolve) => {
    resolveViewTransitionStarted = resolve;
  });
  const transition = document2.startViewTransition(() => {
    resolveViewTransitionStarted();
    return createRenderPromise(injector);
  });
  transition.updateCallbackDone.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.ready.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.finished.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  const {
    onViewTransitionCreated
  } = transitionOptions;
  if (onViewTransitionCreated) {
    runInInjectionContext(injector, () => onViewTransitionCreated({
      transition,
      from: from2,
      to
    }));
  }
  return viewTransitionStarted;
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var noop = () => {
};
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  currentNavigation = signal(null, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "currentNavigation"
  } : {}), {
    equal: () => false
  }));
  currentTransition = null;
  lastSuccessfulNavigation = signal(null, ...ngDevMode ? [{
    debugName: "lastSuccessfulNavigation"
  }] : []);
  events = new Subject();
  transitionAbortWithErrorSubject = new Subject();
  configLoader = inject(RouterConfigLoader);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  urlSerializer = inject(UrlSerializer);
  rootContexts = inject(ChildrenOutletContexts);
  location = inject(Location);
  inputBindingEnabled = inject(INPUT_BINDER, {
    optional: true
  }) !== null;
  titleStrategy = inject(TitleStrategy);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  createViewTransition = inject(CREATE_VIEW_TRANSITION, {
    optional: true
  });
  navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
    optional: true
  });
  navigationId = 0;
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  transitions;
  afterPreactivation = () => of(void 0);
  rootComponentType = null;
  destroyed = false;
  constructor() {
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    untracked(() => {
      this.transitions?.next(__spreadProps(__spreadValues({}, request), {
        extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
        targetSnapshot: null,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null,
        id
      }));
    });
  }
  setupNavigations(router) {
    this.transitions = new BehaviorSubject(null);
    return this.transitions.pipe(filter((t) => t !== null), switchMap((overallTransitionState) => {
      let completedOrAborted = false;
      const abortController = new AbortController();
      const shouldContinueNavigation = () => {
        return !completedOrAborted && this.currentTransition?.id === overallTransitionState.id;
      };
      return of(overallTransitionState).pipe(switchMap((t) => {
        if (this.navigationId > overallTransitionState.id) {
          const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
          return EMPTY;
        }
        this.currentTransition = overallTransitionState;
        const lastSuccessfulNavigation = this.lastSuccessfulNavigation();
        this.currentNavigation.set({
          id: t.id,
          initialUrl: t.rawUrl,
          extractedUrl: t.extractedUrl,
          targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
          trigger: t.source,
          extras: t.extras,
          previousNavigation: !lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, lastSuccessfulNavigation), {
            previousNavigation: null
          }),
          abort: () => abortController.abort()
        });
        const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
        const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
        if (!urlTransition && onSameUrlNavigation !== "reload") {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
          this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
          t.resolve(false);
          return EMPTY;
        }
        if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
          return of(t).pipe(switchMap((t2) => {
            this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
            if (t2.id !== this.navigationId) {
              return EMPTY;
            }
            return Promise.resolve(t2);
          }), recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy, abortController.signal), tap((t2) => {
            overallTransitionState.targetSnapshot = t2.targetSnapshot;
            overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
            this.currentNavigation.update((nav) => {
              nav.finalUrl = t2.urlAfterRedirects;
              return nav;
            });
            const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
            this.events.next(routesRecognized);
          }));
        } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
          const {
            id,
            extractedUrl,
            source,
            restoredState,
            extras
          } = t;
          const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
          this.events.next(navStart);
          const targetSnapshot = createEmptyState(this.rootComponentType, this.environmentInjector).snapshot;
          this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
            targetSnapshot,
            urlAfterRedirects: extractedUrl,
            extras: __spreadProps(__spreadValues({}, extras), {
              skipLocationChange: false,
              replaceUrl: false
            })
          });
          this.currentNavigation.update((nav) => {
            nav.finalUrl = extractedUrl;
            return nav;
          });
          return of(overallTransitionState);
        } else {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
          this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
          t.resolve(false);
          return EMPTY;
        }
      }), map((t) => {
        const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
        this.events.next(guardsStart);
        this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
          guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
        });
        return overallTransitionState;
      }), checkGuards((evt) => this.events.next(evt)), switchMap((t) => {
        overallTransitionState.guardsResult = t.guardsResult;
        if (t.guardsResult && typeof t.guardsResult !== "boolean") {
          throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
        }
        const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
        this.events.next(guardsEnd);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        if (!t.guardsResult) {
          this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
          return EMPTY;
        }
        if (t.guards.canActivateChecks.length === 0) {
          return of(t);
        }
        const resolveStart = new ResolveStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
        this.events.next(resolveStart);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        let dataResolved = false;
        return of(t).pipe(resolveData(this.paramsInheritanceStrategy), tap({
          next: () => {
            dataResolved = true;
            const resolveEnd = new ResolveEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(resolveEnd);
          },
          complete: () => {
            if (!dataResolved) {
              this.cancelNavigationTransition(t, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
            }
          }
        }));
      }), switchTap((t) => {
        const loadComponents = (route) => {
          const loaders2 = [];
          if (route.routeConfig?._loadedComponent) {
            route.component = route.routeConfig?._loadedComponent;
          } else if (route.routeConfig?.loadComponent) {
            const injector = route._environmentInjector;
            loaders2.push(this.configLoader.loadComponent(injector, route.routeConfig).then((loadedComponent) => {
              route.component = loadedComponent;
            }));
          }
          for (const child of route.children) {
            loaders2.push(...loadComponents(child));
          }
          return loaders2;
        };
        const loaders = loadComponents(t.targetSnapshot.root);
        return loaders.length === 0 ? of(t) : from(Promise.all(loaders).then(() => t));
      }), switchTap(() => this.afterPreactivation()), switchMap(() => {
        const {
          currentSnapshot,
          targetSnapshot
        } = overallTransitionState;
        const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
        return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
      }), take(1), map((t) => {
        const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
        this.currentTransition = overallTransitionState = t = __spreadProps(__spreadValues({}, t), {
          targetRouterState
        });
        this.currentNavigation.update((nav) => {
          nav.targetRouterState = targetRouterState;
          return nav;
        });
        this.events.next(new BeforeActivateRoutes());
        if (!shouldContinueNavigation()) {
          return;
        }
        new ActivateRoutes(router.routeReuseStrategy, overallTransitionState.targetRouterState, overallTransitionState.currentRouterState, (evt) => this.events.next(evt), this.inputBindingEnabled).activate(this.rootContexts);
        if (!shouldContinueNavigation()) {
          return;
        }
        completedOrAborted = true;
        this.currentNavigation.update((nav) => {
          nav.abort = noop;
          return nav;
        });
        this.lastSuccessfulNavigation.set(untracked(this.currentNavigation));
        this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
        this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
        t.resolve(true);
      }), takeUntil(abortSignalToObservable(abortController.signal).pipe(filter(() => !completedOrAborted && !overallTransitionState.targetRouterState), tap(() => {
        this.cancelNavigationTransition(overallTransitionState, abortController.signal.reason + "", NavigationCancellationCode.Aborted);
      }))), tap({
        complete: () => {
          completedOrAborted = true;
        }
      }), takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
        throw err;
      }))), finalize(() => {
        abortController.abort();
        if (!completedOrAborted) {
          const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
        }
        if (this.currentTransition?.id === overallTransitionState.id) {
          this.currentNavigation.set(null);
          this.currentTransition = null;
        }
      }), catchError((e) => {
        completedOrAborted = true;
        if (this.destroyed) {
          overallTransitionState.resolve(false);
          return EMPTY;
        }
        if (isNavigationCancelingError(e)) {
          this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
          if (!isRedirectingNavigationCancelingError(e)) {
            overallTransitionState.resolve(false);
          } else {
            this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
          }
        } else {
          const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
          try {
            const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
            if (navigationErrorHandlerResult instanceof RedirectCommand) {
              const {
                message,
                cancellationCode
              } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
              this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
            } else {
              this.events.next(navigationError);
              throw e;
            }
          } catch (ee) {
            if (this.options.resolveNavigationPromiseOnError) {
              overallTransitionState.resolve(false);
            } else {
              overallTransitionState.reject(ee);
            }
          }
        }
        return EMPTY;
      }));
    }));
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const currentNavigation = untracked(this.currentNavigation);
    const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
  }
  static \u0275fac = function NavigationTransitions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationTransitions)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var ROUTE_INJECTOR_CLEANUP = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "RouteInjectorCleanup" : "");
var RouteReuseStrategy = class _RouteReuseStrategy {
  static \u0275fac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteReuseStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  shouldDetach(route) {
    return false;
  }
  store(route, detachedTree) {
  }
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
  shouldDestroyInjector(route) {
    return true;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
      return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  urlSerializer = inject(UrlSerializer);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  currentUrlTree = new UrlTree();
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  rawUrlTree = this.currentUrlTree;
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  createBrowserPath({
    finalUrl,
    initialUrl,
    targetBrowserUrl
  }) {
    const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
    const url = targetBrowserUrl ?? rawUrl;
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    return path;
  }
  commitTransition({
    targetRouterState,
    finalUrl,
    initialUrl
  }) {
    if (finalUrl && targetRouterState) {
      this.currentUrlTree = finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
      this.routerState = targetRouterState;
    } else {
      this.rawUrlTree = initialUrl;
    }
  }
  routerState = createEmptyState(null, inject(EnvironmentInjector));
  getRouterState() {
    return this.routerState;
  }
  _stateMemento = this.createStateMemento();
  get stateMemento() {
    return this._stateMemento;
  }
  updateStateMemento() {
    this._stateMemento = this.createStateMemento();
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  restoredState() {
    return this.location.getState();
  }
  static \u0275fac = function StateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  currentPageId = 0;
  lastSuccessfulId = -1;
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        setTimeout(() => {
          listener(event["url"], event.state, "popstate");
        });
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.commitTransition(currentTransition);
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.commitTransition(currentTransition);
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
      }
    } else if (e instanceof NavigationCancel && !isRedirectingEvent(e)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(path, {
    extras,
    id
  }) {
    const {
      replaceUrl,
      state
    } = extras;
    if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId));
      this.location.replaceState(path, "", newState);
    } else {
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1));
      this.location.go(path, "", newState);
    }
  }
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
        this.resetInternalState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else ;
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetInternalState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetInternalState({
    finalUrl
  }) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(__ngFactoryType__) {
      return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter((result) => result !== 2), take(1)).subscribe(() => {
    action();
  });
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  disposed = false;
  nonRouterCurrentEntryChangeSubscription;
  console = inject(Console);
  stateManager = inject(StateManager);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  pendingTasks = inject(PendingTasksInternal);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  navigationTransitions = inject(NavigationTransitions);
  urlSerializer = inject(UrlSerializer);
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  injector = inject(EnvironmentInjector);
  _events = new Subject();
  get events() {
    return this._events;
  }
  get routerState() {
    return this.stateManager.getRouterState();
  }
  navigated = false;
  routeReuseStrategy = inject(RouteReuseStrategy);
  injectorCleanup = inject(ROUTE_INJECTOR_CLEANUP, {
    optional: true
  });
  onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
  config = inject(ROUTES, {
    optional: true
  })?.flat() ?? [];
  componentInputBindingEnabled = !!inject(INPUT_BINDER, {
    optional: true
  });
  currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
  constructor() {
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this).subscribe({
      error: (e) => {
      }
    });
    this.subscribeToNavigationEvents();
  }
  eventsSubscription = new Subscription();
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
            this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
          } else if (e instanceof RedirectRequest) {
            const opts = e.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = __spreadValues({
              scroll: currentTransition.extras.scroll,
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source) => {
      this.navigateToSyncWithBrowser(url, source, state);
    });
  }
  navigateToSyncWithBrowser(url, source, state) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e) => {
      if (this.disposed) {
        return;
      }
      this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e);
    });
  }
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  getCurrentNavigation() {
    return untracked(this.navigationTransitions.currentNavigation);
  }
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  ngOnDestroy() {
    this.dispose();
  }
  dispose() {
    this._events.unsubscribe();
    this.navigationTransitions.complete();
    this.nonRouterCurrentEntryChangeSubscription?.unsubscribe();
    this.nonRouterCurrentEntryChangeSubscription = void 0;
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null, this.urlSerializer);
  }
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch (e) {
      this.console.warn(formatRuntimeError(4018, ngDevMode && `Error parsing URL ${url}. Falling back to '/' instead. 
` + e));
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
  static \u0275fac = function Router_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Router)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Router,
    factory: _Router.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}

// node_modules/@angular/router/fesm2022/_router_module-chunk.mjs
var RouterLink = class _RouterLink {
  router;
  route;
  tabIndexAttribute;
  renderer;
  el;
  locationStrategy;
  reactiveHref = signal(null, ...ngDevMode ? [{
    debugName: "reactiveHref"
  }] : []);
  get href() {
    return untracked(this.reactiveHref);
  }
  set href(value) {
    this.reactiveHref.set(value);
  }
  target;
  queryParams;
  fragment;
  queryParamsHandling;
  state;
  info;
  relativeTo;
  isAnchorElement;
  subscription;
  onChanges = new Subject();
  applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  });
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.reactiveHref.set(inject(new HostAttributeToken("href"), {
      optional: true
    }));
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area" || !!(typeof customElements === "object" && customElements.get(tagName)?.observedAttributes?.includes?.("href"));
    if (this.isAnchorElement) {
      this.setTabIndexIfNotOnNativeEl("0");
      this.subscribeToNavigationEventsIfNecessary();
    }
  }
  subscribeToNavigationEventsIfNecessary() {
    if (this.subscription !== void 0) {
      return;
    }
    this.subscription = this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateHref();
      }
    });
  }
  preserveFragment = false;
  skipLocationChange = false;
  replaceUrl = false;
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  ngOnChanges(changes) {
    if (ngDevMode && isUrlTree(this.routerLinkInput) && (this.fragment !== void 0 || this.queryParams || this.queryParamsHandling || this.preserveFragment || this.relativeTo)) {
      throw new RuntimeError(4017, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
    }
    if (this.isAnchorElement) {
      this.updateHref();
    }
    this.onChanges.next(this);
  }
  routerLinkInput = null;
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput = null;
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput = commandsOrUrlTree;
      } else {
        this.routerLinkInput = Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree];
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras)?.catch((e) => {
      this.applicationErrorHandler(e);
    });
    return !this.isAnchorElement;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.reactiveHref.set(urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) ?? "" : null);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.routerLinkInput === null) {
      return null;
    } else if (isUrlTree(this.routerLinkInput)) {
      return this.routerLinkInput;
    }
    return this.router.createUrlTree(this.routerLinkInput, {
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static \u0275fac = function RouterLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("href", ctx.reactiveHref(), \u0275\u0275sanitizeUrlOrResourceUrl)("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      info: "info",
      relativeTo: "relativeTo",
      preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      host: {
        "[attr.href]": "reactiveHref()"
      }
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  router;
  element;
  renderer;
  cdr;
  links;
  classes = [];
  routerEventsSubscription;
  linkInputChangesSubscription;
  _isActive = false;
  get isActive() {
    return this._isActive;
  }
  routerLinkActiveOptions = {
    exact: false
  };
  ariaCurrentWhenActive;
  isActiveChange = new EventEmitter();
  link = inject(RouterLink, {
    optional: true
  });
  constructor(router, element, renderer, cdr) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? false ? __spreadValues({}, exactMatchOptions) : __spreadValues({}, subsetMatchOptions);
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? untracked(isActive(urlTree, router, options)) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static \u0275fac = function RouterLinkActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive"
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static \u0275fac = function PreloadAllModules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadAllModules)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PreloadAllModules,
    factory: _PreloadAllModules.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static \u0275fac = function NoPreloading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPreloading)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoPreloading,
    factory: _NoPreloading.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  router;
  injector;
  preloadingStrategy;
  loader;
  subscription;
  constructor(router, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, typeof ngDevMode === "undefined" || ngDevMode ? `Route: ${route.path}` : "");
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      if (route._loadedNgModuleFactory && !route._loadedInjector) {
        route._loadedInjector = route._loadedNgModuleFactory.create(injectorForCurrentRoute).injector;
      }
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      if (injector.destroyed) {
        return of(null);
      }
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = from(this.loader.loadChildren(injector, route));
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        route._loadedNgModuleFactory = config.factory;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(injector, route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static \u0275fac = function RouterPreloader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterPreloader,
    factory: _RouterPreloader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Scroller" : "");
var RouterScroller = class _RouterScroller {
  options;
  routerEventsSubscription;
  scrollEventsSubscription;
  lastId = 0;
  lastSource = IMPERATIVE_NAVIGATION;
  restoredId = 0;
  store = {};
  urlSerializer = inject(UrlSerializer);
  zone = inject(NgZone);
  viewportScroller = inject(ViewportScroller);
  transitions = inject(NavigationTransitions);
  constructor(options) {
    this.options = options;
    this.options.scrollPositionRestoration ||= "disabled";
    this.options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll) || e.scrollBehavior === "manual") return;
      const instantScroll = {
        behavior: "instant"
      };
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0], instantScroll);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position, instantScroll);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    const scroll = untracked(this.transitions.currentNavigation)?.extras.scroll;
    this.zone.runOutsideAngular(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(resolve);
        }
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor, scroll));
      });
    });
  }
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static \u0275fac = function RouterScroller_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterScroller,
    factory: _RouterScroller.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
function getLoadedRoutes(route) {
  return route._loadedRoutes;
}
function getRouterInstance(injector) {
  return injector.get(Router, null, {
    optional: true
  });
}
function navigateByUrl(router, url) {
  if (!(router instanceof Router)) {
    throw new Error("The provided router is not an Angular Router.");
  }
  return router.navigateByUrl(url);
}
var NavigationStateManager = class _NavigationStateManager extends StateManager {
  injector = inject(EnvironmentInjector);
  navigation = inject(PlatformNavigation);
  inMemoryScrollingEnabled = inject(ROUTER_SCROLLER, {
    optional: true
  }) !== null;
  base = new URL(inject(PlatformLocation).href).origin;
  appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
  precommitHandlerSupported = inject(PRECOMMIT_HANDLER_SUPPORTED);
  activeHistoryEntry = this.navigation.currentEntry;
  currentNavigation = {};
  nonRouterCurrentEntryChangeSubject = new Subject();
  nonRouterEntryChangeListener;
  get registered() {
    return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed;
  }
  constructor() {
    super();
    const navigateListener = (event) => {
      this.handleNavigate(event);
    };
    this.navigation.addEventListener("navigate", navigateListener);
    inject(DestroyRef).onDestroy(() => this.navigation.removeEventListener("navigate", navigateListener));
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    this.activeHistoryEntry = this.navigation.currentEntry;
    this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({
      path,
      state
    }) => {
      listener(path, state, "popstate");
    });
    return this.nonRouterEntryChangeListener;
  }
  async handleRouterEvent(e, transition) {
    this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
      routerTransition: transition
    });
    if (e instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.finishNavigation();
      this.commitTransition(transition);
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager" && !transition.extras.skipLocationChange) {
        this.createNavigationForTransition(transition);
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.commitTransition(transition);
      if (this.urlUpdateStrategy === "deferred" && !transition.extras.skipLocationChange) {
        this.createNavigationForTransition(transition);
      }
    } else if (e instanceof NavigationCancel || e instanceof NavigationError) {
      void this.cancel(transition, e);
    } else if (e instanceof NavigationEnd) {
      const {
        resolveHandler,
        removeAbortListener
      } = this.currentNavigation;
      this.currentNavigation = {};
      removeAbortListener?.();
      this.activeHistoryEntry = this.navigation.currentEntry;
      afterNextRender({
        read: () => resolveHandler?.()
      }, {
        injector: this.injector
      });
    }
  }
  createNavigationForTransition(transition) {
    const {
      navigationEvent
    } = this.currentNavigation;
    if (navigationEvent && (navigationEvent.navigationType === "traverse" || navigationEvent.navigationType === "reload") && this.eventAndRouterDestinationsMatch(navigationEvent, transition)) {
      return;
    }
    this.currentNavigation.removeAbortListener?.();
    const path = this.createBrowserPath(transition);
    this.navigate(path, transition);
  }
  navigate(internalPath, transition) {
    const path = transition.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(internalPath);
    const state = __spreadProps(__spreadValues({}, transition.extras.state), {
      navigationId: transition.id
    });
    const info = {
      \u0275routerInfo: {
        intercept: true
      }
    };
    if (!this.navigation.transition && this.currentNavigation.navigationEvent) {
      transition.extras.replaceUrl = false;
    }
    const history = this.location.isCurrentPathEqualTo(path) || transition.extras.replaceUrl || transition.extras.skipLocationChange ? "replace" : "push";
    handleResultRejections(this.navigation.navigate(path, {
      state,
      history,
      info
    }));
  }
  finishNavigation() {
    this.currentNavigation?.resolveHandler?.();
    this.currentNavigation = {};
  }
  async cancel(transition, cause) {
    this.currentNavigation.rejectNavigateEvent?.();
    const clearedState = {};
    this.currentNavigation = clearedState;
    if (isRedirectingEvent(cause)) {
      return;
    }
    const isTraversalReset = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key;
    this.resetInternalState(transition.finalUrl, isTraversalReset);
    if (this.navigation.currentEntry.id === this.activeHistoryEntry.id) {
      return;
    }
    if (cause instanceof NavigationCancel && cause.code === NavigationCancellationCode.Aborted) {
      await Promise.resolve();
      if (this.currentNavigation !== clearedState) {
        return;
      }
    }
    if (isTraversalReset) {
      handleResultRejections(this.navigation.traverseTo(this.activeHistoryEntry.key, {
        info: {
          \u0275routerInfo: {
            intercept: false
          }
        }
      }));
    } else {
      const internalPath = this.urlSerializer.serialize(this.getCurrentUrlTree());
      const pathOrUrl = this.location.prepareExternalUrl(internalPath);
      handleResultRejections(this.navigation.navigate(pathOrUrl, {
        state: this.activeHistoryEntry.getState(),
        history: "replace",
        info: {
          \u0275routerInfo: {
            intercept: false
          }
        }
      }));
    }
  }
  resetInternalState(finalUrl, traversalReset) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = traversalReset ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  handleNavigate(event) {
    if (!event.canIntercept) {
      return;
    }
    const routerInfo = event?.info?.\u0275routerInfo;
    if (routerInfo && !routerInfo.intercept) {
      return;
    }
    const isTriggeredByRouterTransition = !!routerInfo;
    if (!isTriggeredByRouterTransition) {
      this.currentNavigation.routerTransition?.abort();
      if (!this.registered) {
        this.finishNavigation();
        return;
      }
    }
    this.currentNavigation = __spreadValues({}, this.currentNavigation);
    this.currentNavigation.navigationEvent = event;
    const abortHandler = () => {
      this.currentNavigation.routerTransition?.abort();
    };
    event.signal.addEventListener("abort", abortHandler);
    this.currentNavigation.removeAbortListener = () => event.signal.removeEventListener("abort", abortHandler);
    let scroll = this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition";
    const interceptOptions = {
      scroll
    };
    const {
      promise: handlerPromise,
      resolve: resolveHandler,
      reject: rejectHandler
    } = promiseWithResolvers();
    this.currentNavigation.resolveHandler = () => {
      this.currentNavigation.removeAbortListener?.();
      resolveHandler();
    };
    this.currentNavigation.rejectNavigateEvent = () => {
      this.currentNavigation.removeAbortListener?.();
      rejectHandler();
    };
    handlerPromise.catch(() => {
    });
    interceptOptions.handler = () => handlerPromise;
    event.intercept(interceptOptions);
    if (!isTriggeredByRouterTransition) {
      this.handleNavigateEventTriggeredOutsideRouterAPIs(event);
    }
  }
  handleNavigateEventTriggeredOutsideRouterAPIs(event) {
    const path = event.destination.url.substring(this.appRootURL.length - 1);
    const state = event.destination.getState();
    this.nonRouterCurrentEntryChangeSubject.next({
      path,
      state
    });
  }
  eventAndRouterDestinationsMatch(navigateEvent, transition) {
    const internalPath = this.createBrowserPath(transition);
    const eventDestination = new URL(navigateEvent.destination.url);
    const routerDestination = this.location.prepareExternalUrl(internalPath);
    return new URL(routerDestination, eventDestination.origin).href === eventDestination.href;
  }
  static \u0275fac = function NavigationStateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationStateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationStateManager,
    factory: _NavigationStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function handleResultRejections(result) {
  result.finished.catch(() => {
  });
  result.committed.catch(() => {
  });
  return result;
}
function provideRouter(routes2, ...features) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    publishExternalGlobalUtil("\u0275getLoadedRoutes", getLoadedRoutes);
    publishExternalGlobalUtil("\u0275getRouterInstance", getRouterInstance);
    publishExternalGlobalUtil("\u0275navigateByUrl", navigateByUrl);
  }
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes2
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute() {
  return inject(Router).routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router is provided" : "", {
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, {
      optional: true
    })?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, {
      optional: true
    })?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  factory: () => 1
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
    useValue: true
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 0
  }, provideAppInitializer(() => {
    const injector = inject(Injector);
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    return locationInitialized.then(() => {
      return new Promise((resolve) => {
        const router = injector.get(Router);
        const bootstrapDone = injector.get(BOOTSTRAP_DONE);
        afterNextNavigation(router, () => {
          resolve(true);
        });
        injector.get(NavigationTransitions).afterPreactivation = () => {
          resolve(true);
          return bootstrapDone.closed ? of(void 0) : bootstrapDone;
        };
        router.initialNavigation();
      });
    });
  })];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [provideAppInitializer(() => {
    inject(Router).setUpLocationChangeListener();
  }), {
    provide: INITIAL_NAVIGATION,
    useValue: 2
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withHashLocation() {
  const providers = [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }];
  return routerFeature(6, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  performanceMarkFeature("NgRouterViewTransitions");
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "");
var ROUTER_PROVIDERS = [Location, {
  provide: UrlSerializer,
  useClass: DefaultUrlSerializer
}, Router, ChildrenOutletContexts, {
  provide: ActivatedRoute,
  useFactory: rootRoute
}, RouterConfigLoader, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: ROUTER_IS_PROVIDED,
  useValue: true
} : []];
var RouterModule = class _RouterModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      inject(ROUTER_FORROOT_GUARD, {
        optional: true
      });
    }
  }
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard
      } : [], config?.errorHandler ? {
        provide: NAVIGATION_ERROR_HANDLER,
        useValue: config.errorHandler
      } : [], {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
  static \u0275fac = function RouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RouterModule,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent],
    exports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const config = inject(ROUTER_CONFIGURATION);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard() {
  const router = inject(Router, {
    optional: true,
    skipSelf: true
  });
  if (router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [{
    provide: ROUTER_INITIALIZER,
    useFactory: getBootstrapListener
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useExisting: ROUTER_INITIALIZER
  }];
}

// src/app/app.routes.ts
var routes = [
  {
    path: "ccl-test",
    loadComponent: () => import("./chunk-CHA46MHN.js").then((m) => m.CclTest),
    title: "CCL Script Testing"
  }
];

// src/app/app.config.ts
var CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ["dd-MMM-yyyy"]
  },
  display: {
    dateInput: "dd-MMM-yyyy",
    dateLabel: "dd-MMM-yyyy",
    dateTimeLabel: "dd-MMM-yyyy HH:mm",
    locale: "en-US",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM yyyy"
  }
};
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withFetch()),
    // Load config.json before app initializes - required for Clinical Office CCL proxy
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig();
    }),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    // Provide Renderer2 at application level for Clinical Office Dialog service
    // The Dialog service incorrectly injects Renderer2 at root level
    {
      provide: Renderer2,
      useFactory: (rendererFactory) => rendererFactory.createRenderer(null, null),
      deps: [RendererFactory2]
    },
    // Provide ElementRef at application level for Clinical Office Dialog service
    {
      provide: ElementRef,
      useFactory: () => new ElementRef(document.body)
    }
  ]
};

// src/app/version.ts
var buildVersion = "v0.0.33-feature/template-rebuild";
var packageVersion = "0.0.33";
var gitBranch = "feature/template-rebuild";

// src/app/app-version/app-version.ts
var AppVersion = class _AppVersion {
  /**
   * The current application version string, including branch (e.g., v1.0.0-master)
   * This is generated at build time by scripts/build-version.js
   */
  buildVersion = buildVersion;
  /**
   * The package version from package.json (e.g., 1.0.0)
   */
  packageVersion = packageVersion;
  /**
   * The current git branch (e.g., master, develop)
   */
  gitBranch = gitBranch;
  static \u0275fac = function AppVersion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppVersion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppVersion, selectors: [["app-app-version"]], decls: 3, vars: 1, consts: [[1, "app-version"], [1, "version-text"]], template: function AppVersion_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buildVersion);
    }
  }, styles: ["\n\n.app-version[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  color: #666;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.app-version[_ngcontent-%COMP%]   .version-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=app-version.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppVersion, [{
    type: Component,
    args: [{ selector: "app-app-version", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="app-version">\n  <span class="version-text">{{ buildVersion }}</span>\n</div>\n', styles: ["/* src/app/app-version/app-version.scss */\n.app-version {\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  color: #666;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.app-version .version-text {\n  font-weight: 500;\n}\n/*# sourceMappingURL=app-version.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppVersion, { className: "AppVersion", filePath: "src/app/app-version/app-version.ts", lineNumber: 15 });
})();

// src/app/services/file-browser.service.ts
var FileBrowserService = class _FileBrowserService {
  // Clinical Office CustomService for CCL calls
  customService = inject(CustomService);
  // Reactive state using signals
  _files = signal([], ...ngDevMode ? [{ debugName: "_files" }] : []);
  _loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  _directory = signal("cclscratch:", ...ngDevMode ? [{ debugName: "_directory" }] : []);
  _offlineMode = signal(true, ...ngDevMode ? [{ debugName: "_offlineMode" }] : []);
  // Public readonly accessors
  files = this._files.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();
  directory = this._directory.asReadonly();
  offlineMode = this._offlineMode.asReadonly();
  // Computed values
  fileCount = computed(() => this._files().length, ...ngDevMode ? [{ debugName: "fileCount" }] : []);
  hasFiles = computed(() => this._files().length > 0, ...ngDevMode ? [{ debugName: "hasFiles" }] : []);
  hasError = computed(() => this._error() !== null, ...ngDevMode ? [{ debugName: "hasError" }] : []);
  /**
   * Enable online mode for CCL-based file operations
   * Used when running in Cerner MPage context
   */
  enableOnlineMode() {
    this._offlineMode.set(false);
    this._directory.set("cclscratch:");
    this._error.set(null);
  }
  /**
   * Enable offline mode for local file browsing
   * Used when running outside Cerner (GitHub Pages, local dev)
   */
  enableOfflineMode() {
    this._offlineMode.set(true);
    this._directory.set("Local Files");
    this._error.set(null);
  }
  /**
   * List files in directory via CCL (online mode) or return empty (offline mode)
   *
   * Uses Clinical Office CustomService pattern:
   * - Script name with :group1 suffix
   * - Parameters in customScript.script[].parameters object
   * - Response via customService.get(requestId)
   */
  listFiles(directory = "cclscratch:") {
    if (this._offlineMode()) {
      return;
    }
    this._loading.set(true);
    this._error.set(null);
    this._directory.set(directory);
    const self = this;
    this.customService.load({
      customScript: {
        script: [{
          name: "mrha_bb_val_list_dir:group1",
          run: "pre",
          id: "listDir",
          parameters: {
            directory
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], function() {
      const response = self.customService.get("listDir");
      if (response && response.statusData && response.statusData.status === "S" && response.files) {
        self._files.set(response.files.map(function(f) {
          return {
            filename: f.filename,
            filesize: f.filesize,
            filedate: f.filedate,
            filetype: f.filetype || self.deriveFileType(f.filename)
          };
        }));
        self._error.set(null);
      } else {
        const errorMsg = response && response.error ? response.error : "Failed to list directory";
        self._error.set(errorMsg);
        self._files.set([]);
      }
      self._loading.set(false);
    });
  }
  /**
   * Read file content via CCL (online mode) or return local content (offline mode)
   *
   * Uses Clinical Office CustomService pattern for CCL calls.
   */
  readFile(directory, filename, callback) {
    if (this._offlineMode()) {
      const file = this._files().find(function(f) {
        return f.filename === filename;
      });
      if (file && file.content) {
        callback(file.content, null);
      } else {
        callback(null, "File content not available - use local file picker");
      }
      return;
    }
    const self = this;
    this.customService.load({
      customScript: {
        script: [{
          name: "mrha_bb_val_read_file:group1",
          run: "pre",
          id: "readFile",
          parameters: {
            directory,
            filename
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], function() {
      const response = self.customService.get("readFile");
      if (response && response.statusData && response.statusData.status === "S" && response.content !== void 0) {
        callback(response.content, null);
      } else {
        const errorMsg = response && response.error ? response.error : "Failed to read file: " + filename;
        callback(null, errorMsg);
      }
    });
  }
  /**
   * Clear the current files list and error state
   */
  clearFiles() {
    this._files.set([]);
    this._error.set(null);
  }
  /**
   * Derive file type from filename pattern
   */
  deriveFileType(filename) {
    const lowerName = filename.toLowerCase();
    if (/^ptnt_instr.*\.txt$/i.test(lowerName))
      return "PTNT_INSTR";
    if (/^ptnt_cmt.*\.txt$/i.test(lowerName))
      return "PTNT_CMT";
    if (/^ptnt_(?!cmt|instr).*\.txt$/i.test(lowerName))
      return "PTNT";
    if (/^unit_cmt.*\.txt$/i.test(lowerName))
      return "UNIT_CMT";
    if (/^unit_(?!cmt).*\.txt$/i.test(lowerName))
      return "UNIT";
    if (/^spec_attr.*\.txt$/i.test(lowerName))
      return "SPEC_ATTR";
    return "OTHER";
  }
  /**
   * Add files from local file picker (offline mode)
   */
  async addLocalFiles(fileList) {
    this._loading.set(true);
    this._error.set(null);
    const newFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (!file.name.toLowerCase().endsWith(".txt")) {
        continue;
      }
      try {
        const content = await this.readLocalFile(file);
        newFiles.push({
          filename: file.name,
          filesize: file.size,
          filedate: file.lastModified ? new Date(file.lastModified).toISOString() : "",
          filetype: this.deriveFileType(file.name),
          content
        });
      } catch {
      }
    }
    const existingNames = new Set(this._files().map((f) => f.filename));
    const uniqueNewFiles = newFiles.filter((f) => !existingNames.has(f.filename));
    this._files.update((files) => [...files, ...uniqueNewFiles]);
    this._loading.set(false);
  }
  /**
   * Read a local file using FileReader API
   */
  readLocalFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }
  /**
   * Get file content (for offline mode, content is already loaded)
   */
  getLocalFileContent(filename) {
    const file = this._files().find((f) => f.filename === filename);
    return file && file.content ? file.content : null;
  }
  /**
   * Remove a file from the list (offline mode only)
   */
  removeFile(filename) {
    this._files.update((files) => files.filter((f) => f.filename !== filename));
  }
  static \u0275fac = function FileBrowserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileBrowserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileBrowserService, factory: _FileBrowserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileBrowserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/file-browser/file-browser.component.ts
var _forTrack0 = ($index, $item) => $item.filename;
function FileBrowserComponent_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.totalSelectedCount, " selected");
  }
}
function FileBrowserComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 22)(2, "button", 23);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll());
    });
    \u0275\u0275text(3, " Select All ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 23);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectAll());
    });
    \u0275\u0275text(5, " Deselect All ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 24);
    \u0275\u0275conditionalCreate(7, FileBrowserComponent_Conditional_17_Conditional_7_Template, 2, 1, "span", 25);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 26);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValidateSelected());
    });
    \u0275\u0275text(9, " Validate Selected ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.isLoading || ctx_r1.totalFileCount === 0 || ctx_r1.areAllSelected);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.isLoading || ctx_r1.totalFileCount === 0 || ctx_r1.areNoneSelected);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.totalSelectedCount > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.isLoading || !ctx_r1.hasAnySelectedFiles);
  }
}
function FileBrowserComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "div", 27);
    \u0275\u0275domElementStart(2, "p")(3, "strong");
    \u0275\u0275text(4, "Loading files from CCL...");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "p", 28);
    \u0275\u0275text(6, "If this takes too long, CCL scripts may not be available.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 29);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchToOfflineMode());
    });
    \u0275\u0275text(8, " Switch to Offline Mode ");
    \u0275\u0275domElementEnd()();
  }
}
function FileBrowserComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13)(1, "div", 30);
    \u0275\u0275text(2, "!");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 31)(4, "strong");
    \u0275\u0275text(5, "Error loading files");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 32);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275text(9, " Retry ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function FileBrowserComponent_Conditional_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 40);
  }
}
function FileBrowserComponent_Conditional_20_For_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 40)(1, "button", 49);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_20_For_15_Conditional_12_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const file_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFile(file_r9.filename, $event));
    });
    \u0275\u0275text(2, " \xD7 ");
    \u0275\u0275domElementEnd()();
  }
}
function FileBrowserComponent_Conditional_20_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 44);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_20_For_15_Template_tr_click_0_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFileSelection($index_r7));
    });
    \u0275\u0275domElementStart(1, "td", 35)(2, "input", 45);
    \u0275\u0275domListener("click", function FileBrowserComponent_Conditional_20_For_15_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function FileBrowserComponent_Conditional_20_For_15_Template_input_change_2_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFileSelection($index_r7));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "td", 37)(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "td", 38)(7, "span", 47);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td", 39)(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(12, FileBrowserComponent_Conditional_20_For_15_Conditional_12_Template, 3, 0, "td", 40);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", file_r9.selected);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", file_r9.selected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r9.filename);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(file_r9.filesize));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFileTypeBadgeClass(file_r9.filetype));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", file_r9.filetype, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isOfflineMode ? 12 : -1);
  }
}
function FileBrowserComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 33)(1, "table", 34)(2, "thead")(3, "tr")(4, "th", 35)(5, "input", 36);
    \u0275\u0275domListener("change", function FileBrowserComponent_Conditional_20_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.areAllSelected ? ctx_r1.deselectAll() : ctx_r1.selectAll());
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "th", 37);
    \u0275\u0275text(7, "Filename");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 38);
    \u0275\u0275text(9, "Size");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 39);
    \u0275\u0275text(11, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, FileBrowserComponent_Conditional_20_Conditional_12_Template, 1, 0, "th", 40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, FileBrowserComponent_Conditional_20_For_15_Template, 13, 9, "tr", 41, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 42)(17, "span", 43);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("checked", ctx_r1.areAllSelected)("indeterminate", ctx_r1.hasAnySelectedFiles && !ctx_r1.areAllSelected);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.isOfflineMode ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.files);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.totalFileCount, " file(s)");
  }
}
function FileBrowserComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "div", 50);
    \u0275\u0275text(2, "\u{1F4C1}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 51)(4, "strong");
    \u0275\u0275text(5, "No extract files found");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("No .txt files found in ", ctx_r1.directoryPath);
  }
}
function FileBrowserComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "div", 50);
    \u0275\u0275text(2, "\u{1F4C1}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 51)(4, "strong");
    \u0275\u0275text(5, "No files selected");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, 'Click "Browse for Extract Files" above to select files for validation.');
    \u0275\u0275domElementEnd()()();
  }
}
function isCernerEnvironment() {
  try {
    const win = window;
    const ext = win.external;
    if (ext && typeof ext.DiscernObjectFactory !== "undefined") {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
var FileBrowserComponent = class _FileBrowserComponent {
  fileBrowserService = inject(FileBrowserService);
  /** Flag to track if we're in Cerner environment - checked once at startup */
  inCernerEnvironment = isCernerEnvironment();
  // Output events for parent components
  validateFiles = output();
  // Internal state for file selection
  _selectableFiles = signal([], ...ngDevMode ? [{ debugName: "_selectableFiles" }] : []);
  // Public readonly state (signals)
  loading = this.fileBrowserService.loading;
  error = this.fileBrowserService.error;
  directory = this.fileBrowserService.directory;
  offlineMode = this.fileBrowserService.offlineMode;
  selectableFiles = this._selectableFiles.asReadonly();
  // Simple properties set during init (avoids signal calls in template)
  // Updated via polling interval for change detection
  inCerner = false;
  isOfflineMode = true;
  isLoading = false;
  directoryPath = "";
  errorMessage = null;
  files = [];
  totalFileCount = 0;
  totalSelectedCount = 0;
  hasAnySelectedFiles = false;
  areAllSelected = false;
  areNoneSelected = true;
  // Debug console log messages
  debugLogs = [];
  // Update properties from signals (called periodically)
  updatePropertiesFromSignals() {
    try {
      this.isOfflineMode = this.fileBrowserService.offlineMode();
      this.isLoading = this.fileBrowserService.loading();
      this.directoryPath = this.fileBrowserService.directory();
      this.errorMessage = this.fileBrowserService.error();
      this.files = this._selectableFiles();
      this.totalFileCount = this.files.length;
      this.totalSelectedCount = this.files.filter((f) => f.selected).length;
      this.hasAnySelectedFiles = this.totalSelectedCount > 0;
      this.areAllSelected = this.totalFileCount > 0 && this.files.every((f) => f.selected);
      this.areNoneSelected = this.files.every((f) => !f.selected);
    } catch (e) {
    }
  }
  // Computed values (keep for compatibility)
  fileCount = computed(() => this._selectableFiles().length, ...ngDevMode ? [{ debugName: "fileCount" }] : []);
  selectedCount = computed(() => this._selectableFiles().filter((f) => f.selected).length, ...ngDevMode ? [{ debugName: "selectedCount" }] : []);
  hasSelectedFiles = computed(() => this.selectedCount() > 0, ...ngDevMode ? [{ debugName: "hasSelectedFiles" }] : []);
  allSelected = computed(() => this._selectableFiles().length > 0 && this._selectableFiles().every((f) => f.selected), ...ngDevMode ? [{ debugName: "allSelected" }] : []);
  noneSelected = computed(() => this._selectableFiles().every((f) => !f.selected), ...ngDevMode ? [{ debugName: "noneSelected" }] : []);
  ngOnInit() {
    this.safeUpdateDebugStatus("v0.0.21 ngOnInit started | cerner:" + this.inCernerEnvironment);
    try {
      this.inCerner = this.inCernerEnvironment;
      this.safeLoadFiles();
      setTimeout(() => this.updateDOMDirectly(), 100);
      setInterval(() => this.updateDOMDirectly(), 500);
      this.safeUpdateDebugStatus("v0.0.21 ngOnInit complete | cerner:" + this.inCerner + " | offline:" + this.isOfflineMode);
    } catch (e) {
      this.safeUpdateDebugStatus("v0.0.21 ERROR in ngOnInit: " + (e instanceof Error ? e.message : String(e)));
    }
  }
  /**
   * Safely update debug status element and add to debug log
   */
  safeUpdateDebugStatus(message) {
    try {
      const el = document.getElementById("debug-status");
      if (el) {
        el.textContent = message;
      }
      this.addDebugLog(message);
    } catch {
    }
  }
  /**
   * Add a message to the debug log (like console.log but visible in UI)
   */
  addDebugLog(message) {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
      const logMessage = "[" + timestamp + "] " + message;
      this.debugLogs.push(logMessage);
      if (this.debugLogs.length > 50) {
        this.debugLogs.shift();
      }
      this.updateDebugConsoleDOM();
    } catch {
    }
  }
  /**
   * Update the debug console DOM element
   */
  updateDebugConsoleDOM() {
    try {
      const el = document.getElementById("debug-console-content");
      if (el) {
        el.innerHTML = this.debugLogs.map(function(log) {
          return '<div class="debug-line">' + log + "</div>";
        }).join("");
        el.scrollTop = el.scrollHeight;
      }
    } catch {
    }
  }
  /**
   * Clear debug logs
   */
  clearDebugLogs() {
    this.debugLogs = [];
    this.updateDebugConsoleDOM();
  }
  /**
   * Copy debug logs to clipboard
   */
  copyDebugLogs() {
    try {
      const text = this.debugLogs.join("\n");
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.addDebugLog("Copied to clipboard!");
    } catch (e) {
      this.addDebugLog("Copy failed: " + (e instanceof Error ? e.message : String(e)));
    }
  }
  /**
   * Recheck the environment and try to connect to Cerner again
   */
  recheckEnvironment() {
    this.addDebugLog("=== RECHECK ENVIRONMENT ===");
    this.addDebugLog("Cerner detected: " + this.inCernerEnvironment);
    this._selectableFiles.set([]);
    this.files = [];
    this.totalFileCount = 0;
    if (this.inCernerEnvironment) {
      this.addDebugLog("Attempting online mode...");
      try {
        this.fileBrowserService.enableOnlineMode();
        this.addDebugLog("enableOnlineMode() called OK");
        this.isOfflineMode = false;
        try {
          this.addDebugLog("Calling listFiles(cclscratch:)...");
          this.fileBrowserService.listFiles("cclscratch:");
          this.addDebugLog("listFiles() called - waiting for response...");
        } catch (e) {
          this.addDebugLog("ERROR in listFiles: " + (e instanceof Error ? e.message : String(e)));
          this.isOfflineMode = true;
        }
        this.watchForCclError();
        this.syncFilesFromService();
      } catch (e) {
        this.addDebugLog("ERROR in enableOnlineMode: " + (e instanceof Error ? e.message : String(e)));
        this.isOfflineMode = true;
      }
    } else {
      this.addDebugLog("Not in Cerner environment, using offline mode");
      this.enableOfflineMode();
    }
  }
  /**
   * Test CCL connectivity with multiple test scenarios
   */
  testCclConnection() {
    this.addDebugLog("=== CCL CONNECTION TEST v0.0.21 ===");
    if (!this.inCernerEnvironment) {
      this.addDebugLog("Not in Cerner environment - cannot test CCL");
      return;
    }
    const self = this;
    try {
      const win = window;
      if (!win.external || typeof win.external.DiscernObjectFactory !== "function") {
        this.addDebugLog("ERROR: Cerner API not available");
        return;
      }
      this.addDebugLog("--- TEST 1: Echo script (echo) ---");
      this.testCclScript("echo", "", function(success, response) {
        self.addDebugLog("Echo test: " + (success ? "SUCCESS" : "FAILED"));
        if (response) {
          self.addDebugLog("Echo response: " + response.substring(0, 200));
        }
        self.addDebugLog("--- TEST 2: Clinical Office entry (1co_mp_get_person:group1) ---");
        self.testClinicalOfficeScript("1co_mp_get_person:group1", {}, function(success2, response2) {
          self.addDebugLog("CO entry test: " + (success2 ? "SUCCESS" : "FAILED"));
          if (response2) {
            self.addDebugLog("CO response: " + response2.substring(0, 200));
          }
          self.addDebugLog("--- TEST 3: Our script (mrha_bb_val_list_dir:group1) ---");
          self.testClinicalOfficeScript("mrha_bb_val_list_dir:group1", { directory: "cclscratch:" }, function(success3, response3) {
            self.addDebugLog("Custom script test: " + (success3 ? "SUCCESS" : "FAILED"));
            if (response3) {
              self.addDebugLog("Custom response: " + response3.substring(0, 300));
            }
            self.addDebugLog("--- TEST 4: Standalone script (mrha_bb_val_list_dir:dba) ---");
            self.testCclScript("mrha_bb_val_list_dir:dba", '"MINE","cclscratch:","*.txt"', function(success4, response4) {
              self.addDebugLog("DBA script test: " + (success4 ? "SUCCESS" : "FAILED"));
              if (response4) {
                self.addDebugLog("DBA response: " + response4.substring(0, 300));
              }
              self.addDebugLog("=== ALL TESTS COMPLETE ===");
            });
          });
        });
      });
    } catch (e) {
      this.addDebugLog("Test FAILED: " + (e instanceof Error ? e.message : String(e)));
    }
  }
  /**
   * Test a CCL script directly (not via Clinical Office)
   */
  testCclScript(scriptName, params, callback) {
    const self = this;
    try {
      const win = window;
      const xmlReq = win.external.DiscernObjectFactory("XMLCCLREQUEST");
      if (!xmlReq) {
        callback(false, null);
        return;
      }
      const openFn = xmlReq["open"];
      const sendFn = xmlReq["send"];
      openFn.call(xmlReq, "GET", scriptName, true);
      sendFn.call(xmlReq, params);
      let checkCount = 0;
      const maxChecks = 30;
      const checkResponse = function() {
        checkCount++;
        try {
          const respProp = xmlReq["responseText"];
          let responseText = "";
          if (typeof respProp === "string") {
            responseText = respProp;
          } else if (typeof respProp === "function") {
            responseText = respProp.call(xmlReq);
          }
          if (responseText && responseText.length > 0) {
            callback(true, responseText);
          } else if (checkCount < maxChecks) {
            setTimeout(checkResponse, 100);
          } else {
            self.addDebugLog("Script " + scriptName + " timeout after 3s");
            callback(false, null);
          }
        } catch (e) {
          callback(false, "Error: " + String(e));
        }
      };
      setTimeout(checkResponse, 100);
    } catch (e) {
      callback(false, "Exception: " + String(e));
    }
  }
  /**
   * Test a CCL script via Clinical Office mp_exec_custom_script endpoint
   */
  testClinicalOfficeScript(scriptName, parameters, callback) {
    const self = this;
    try {
      const win = window;
      const xmlReq = win.external.DiscernObjectFactory("XMLCCLREQUEST");
      if (!xmlReq) {
        callback(false, null);
        return;
      }
      const payload = {
        customScript: {
          script: [{
            name: scriptName,
            run: "pre",
            id: "test",
            parameters
          }],
          clearPatientSource: true
        }
      };
      const openFn = xmlReq["open"];
      const sendFn = xmlReq["send"];
      openFn.call(xmlReq, "GET", "mp_exec_custom_script", true);
      sendFn.call(xmlReq, JSON.stringify(payload));
      let checkCount = 0;
      const maxChecks = 30;
      const checkResponse = function() {
        checkCount++;
        try {
          const respProp = xmlReq["responseText"];
          let responseText = "";
          if (typeof respProp === "string") {
            responseText = respProp;
          } else if (typeof respProp === "function") {
            responseText = respProp.call(xmlReq);
          }
          if (responseText && responseText.length > 0) {
            callback(true, responseText);
          } else if (checkCount < maxChecks) {
            setTimeout(checkResponse, 100);
          } else {
            self.addDebugLog("CO script " + scriptName + " timeout after 3s");
            callback(false, null);
          }
        } catch (e) {
          callback(false, "Error: " + String(e));
        }
      };
      setTimeout(checkResponse, 100);
    } catch (e) {
      callback(false, "Exception: " + String(e));
    }
  }
  /**
   * Safe version of loadFiles that catches all errors
   */
  safeLoadFiles() {
    try {
      if (this.inCernerEnvironment) {
        this.addDebugLog("Cerner environment detected");
        this.safeUpdateDebugStatus("Cerner detected, trying online mode...");
        try {
          this.fileBrowserService.enableOnlineMode();
          this.addDebugLog("enableOnlineMode() succeeded");
          this.isOfflineMode = false;
        } catch (e) {
          this.addDebugLog("enableOnlineMode() FAILED: " + (e instanceof Error ? e.message : String(e)));
          this.safeUpdateDebugStatus("enableOnlineMode FAILED: " + (e instanceof Error ? e.message : String(e)));
          this.isOfflineMode = true;
          return;
        }
        try {
          this.addDebugLog("Calling listFiles(cclscratch:)...");
          this.fileBrowserService.listFiles("cclscratch:");
          this.addDebugLog("listFiles() call initiated");
          this.safeUpdateDebugStatus("listFiles called - waiting for CCL...");
        } catch (e) {
          this.addDebugLog("listFiles() FAILED: " + (e instanceof Error ? e.message : String(e)));
          this.safeUpdateDebugStatus("listFiles FAILED: " + (e instanceof Error ? e.message : String(e)));
        }
        this.watchForCclError();
      } else {
        this.addDebugLog("Not in Cerner environment");
        this.safeUpdateDebugStatus("Not in Cerner, using offline mode");
        this.enableOfflineMode();
      }
      this.syncFilesFromService();
    } catch (e) {
      this.addDebugLog("safeLoadFiles ERROR: " + (e instanceof Error ? e.message : String(e)));
      this.safeUpdateDebugStatus("safeLoadFiles ERROR: " + (e instanceof Error ? e.message : String(e)));
      this.isOfflineMode = true;
    }
  }
  /**
   * Update DOM elements directly without Angular template binding
   * This bypasses any modern JS features Angular might use in compiled templates
   */
  updateDOMDirectly() {
    try {
      this.updatePropertiesFromSignals();
      const debugEl = document.getElementById("debug-status");
      if (debugEl) {
        debugEl.textContent = "v0.0.21 | offline:" + this.isOfflineMode + " | cerner:" + this.inCerner + " | load:" + this.isLoading + " | files:" + this.totalFileCount;
      }
      const badgesEl = document.getElementById("mode-badges");
      if (badgesEl) {
        if (this.isOfflineMode) {
          badgesEl.innerHTML = '<span class="badge-local" style="padding:4px 8px;font-size:12px;background:#fff3e0;color:#e65100;border-radius:4px;margin-left:8px;">Local Files</span><span class="offline-badge" style="padding:4px 8px;font-size:11px;font-weight:600;background:#fff3e0;color:#e65100;border-radius:4px;margin-left:8px;">Offline Mode</span>';
        } else {
          badgesEl.innerHTML = '<span class="directory-badge" style="padding:4px 8px;font-size:12px;background:#e3f2fd;color:#1565c0;border-radius:4px;margin-left:8px;">' + this.directoryPath + '</span><span class="online-badge" style="padding:4px 8px;font-size:11px;font-weight:600;background:#e8f5e9;color:#2e7d32;border-radius:4px;margin-left:8px;">Online Mode</span>';
        }
      }
      const pickerEl = document.getElementById("file-picker-container");
      if (pickerEl) {
        if (this.isOfflineMode) {
          pickerEl.innerHTML = '<div class="offline-picker" style="display:flex;align-items:center;gap:16px;padding:16px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;"><input type="file" id="fileInput" multiple accept=".txt" style="display:none;"><label for="fileInput" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#1976d2;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span>&#128193;</span> Browse for Extract Files</label><span style="font-size:13px;color:#666;">Select .txt extract files (PTNT, UNIT, SPEC_ATTR, etc.)</span></div>';
          const input2 = document.getElementById("fileInput");
          if (input2) {
            input2.onchange = (e) => this.onLocalFilesSelected(e);
          }
        } else if (this.isLoading) {
          pickerEl.innerHTML = '<div class="loading-container" style="display:flex;flex-direction:column;align-items:center;padding:48px;gap:12px;"><div class="spinner" style="width:32px;height:32px;border:3px solid #e0e0e0;border-top-color:#1976d2;border-radius:50%;animation:spin 1s linear infinite;"></div><p><strong>Loading files from CCL...</strong></p><p style="font-size:13px;color:#666;">If this takes too long, CCL scripts may not be available.</p><button id="switchOfflineBtn" class="btn btn-secondary" style="padding:8px 16px;background:#e0e0e0;border:none;border-radius:4px;cursor:pointer;">Switch to Offline Mode</button></div>';
          const btn = document.getElementById("switchOfflineBtn");
          if (btn) {
            btn.onclick = () => this.switchToOfflineMode();
          }
        } else if (this.totalFileCount === 0) {
          pickerEl.innerHTML = '<div class="empty-container" style="display:flex;flex-direction:column;align-items:center;padding:48px;gap:12px;"><div style="font-size:48px;opacity:0.5;">&#128193;</div><div style="text-align:center;"><strong style="color:#666;">No extract files found</strong><p style="color:#999;font-size:14px;">No .txt files found in ' + this.directoryPath + "</p></div></div>";
        }
      }
    } catch (e) {
    }
  }
  /**
   * Load files - detect Cerner environment and use appropriate mode
   */
  loadFiles() {
    if (this.inCernerEnvironment) {
      this.fileBrowserService.enableOnlineMode();
      this.fileBrowserService.listFiles("cclscratch:");
      this.watchForCclError();
    } else {
      this.enableOfflineMode();
    }
    this.syncFilesFromService();
  }
  /**
   * Watch for CCL errors and switch to offline mode if CCL fails
   */
  watchForCclError() {
    const self = this;
    let checkCount = 0;
    const checkInterval = setInterval(function() {
      checkCount++;
      try {
        const isLoading = self.fileBrowserService.loading();
        const hasError = self.fileBrowserService.error();
        const fileCount = self.fileBrowserService.files().length;
        if (!isLoading) {
          clearInterval(checkInterval);
          self.addDebugLog("CCL loading complete after " + checkCount + " checks");
          self.addDebugLog("Files found: " + fileCount);
          if (hasError) {
            self.addDebugLog("CCL error detected: " + hasError);
            self.enableOfflineMode();
          } else if (fileCount > 0) {
            self.addDebugLog("CCL succeeded with " + fileCount + " files");
            self.isOfflineMode = false;
          } else {
            self.addDebugLog("CCL returned 0 files, switching to offline");
            self.enableOfflineMode();
          }
        }
      } catch (e) {
        self.addDebugLog("watchForCclError check failed: " + (e instanceof Error ? e.message : String(e)));
      }
    }, 100);
    setTimeout(function() {
      clearInterval(checkInterval);
      try {
        const isLoading = self.fileBrowserService.loading();
        if (isLoading) {
          self.addDebugLog("CCL TIMEOUT after 3 seconds - still loading");
          self.addDebugLog("Falling back to offline mode");
          self.enableOfflineMode();
        }
      } catch (e) {
        self.addDebugLog("Timeout check failed: " + (e instanceof Error ? e.message : String(e)));
        self.enableOfflineMode();
      }
    }, 3e3);
  }
  /**
   * Manually switch to offline mode (for user button click)
   */
  switchToOfflineMode() {
    this.enableOfflineMode();
  }
  /**
   * Enable offline mode for local file browsing
   */
  enableOfflineMode() {
    this.addDebugLog("Switching to offline mode");
    this.isOfflineMode = true;
    this.fileBrowserService.enableOfflineMode();
  }
  /**
   * Refresh the file list
   */
  refresh() {
    this._selectableFiles.set([]);
    this.loadFiles();
  }
  /**
   * Sync files from service to local selectable files state
   */
  syncFilesFromService() {
    const checkInterval = setInterval(() => {
      const serviceFiles = this.fileBrowserService.files();
      const currentFiles = this._selectableFiles();
      if (serviceFiles.length > 0 && (currentFiles.length === 0 || serviceFiles.length !== currentFiles.length)) {
        this._selectableFiles.set(serviceFiles.map((file) => __spreadProps(__spreadValues({}, file), {
          selected: false
        })));
        clearInterval(checkInterval);
      }
      if (!this.fileBrowserService.loading() && serviceFiles.length === 0) {
        clearInterval(checkInterval);
      }
    }, 100);
    setTimeout(() => clearInterval(checkInterval), 1e4);
  }
  /**
   * Toggle selection for a specific file
   */
  toggleFileSelection(index) {
    this._selectableFiles.update((files) => {
      const updated = [...files];
      if (updated[index]) {
        updated[index] = __spreadProps(__spreadValues({}, updated[index]), {
          selected: !updated[index].selected
        });
      }
      return updated;
    });
  }
  /**
   * Select all files
   */
  selectAll() {
    this._selectableFiles.update((files) => files.map((file) => __spreadProps(__spreadValues({}, file), { selected: true })));
  }
  /**
   * Deselect all files
   */
  deselectAll() {
    this._selectableFiles.update((files) => files.map((file) => __spreadProps(__spreadValues({}, file), { selected: false })));
  }
  /**
   * Emit selected files for validation
   */
  onValidateSelected() {
    const selected = this._selectableFiles().filter((f) => f.selected).map((_a) => {
      var _b = _a, { selected: selected2 } = _b, file = __objRest(_b, ["selected"]);
      return file;
    });
    if (selected.length > 0) {
      this.validateFiles.emit(selected);
    }
  }
  /**
   * Format file size for display
   */
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  }
  /**
   * Get CSS class for file type badge
   */
  getFileTypeBadgeClass(filetype) {
    const typeClasses = {
      "PTNT": "badge-patient",
      "PTNT_CMT": "badge-patient-comment",
      "PTNT_INSTR": "badge-patient-instruction",
      "UNIT": "badge-unit",
      "UNIT_CMT": "badge-unit-comment",
      "SPEC_ATTR": "badge-spec-attr",
      "OTHER": "badge-other"
    };
    return typeClasses[filetype] || "badge-other";
  }
  /**
   * Track by function for ngFor performance
   */
  trackByFilename(index, file) {
    return file.filename;
  }
  /**
   * Handle local file selection (offline mode)
   */
  async onLocalFilesSelected(event) {
    const input2 = event.target;
    if (input2.files && input2.files.length > 0) {
      await this.fileBrowserService.addLocalFiles(input2.files);
      this.syncFilesFromService();
      input2.value = "";
    }
  }
  /**
   * Remove a file from the list (offline mode only)
   */
  removeFile(filename, event) {
    event.stopPropagation();
    this.fileBrowserService.removeFile(filename);
    this._selectableFiles.update((files) => files.filter((f) => f.filename !== filename));
  }
  static \u0275fac = function FileBrowserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileBrowserComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileBrowserComponent, selectors: [["app-file-browser"]], outputs: { validateFiles: "validateFiles" }, decls: 33, vars: 6, consts: [[1, "file-browser"], [2, "display", "flex", "align-items", "center", "gap", "8px", "background", "yellow", "color", "black", "padding", "8px"], ["id", "debug-status", 2, "font-weight", "bold", "flex", "1"], [2, "padding", "4px 12px", "background", "#ff9800", "color", "white", "border", "none", "border-radius", "4px", "cursor", "pointer", "font-size", "12px", 3, "click"], [2, "padding", "4px 12px", "background", "#1976d2", "color", "white", "border", "none", "border-radius", "4px", "cursor", "pointer", "font-size", "12px", 3, "click"], [2, "background", "lime", "color", "black", "padding", "4px"], [1, "file-browser-header"], [1, "header-title"], ["id", "mode-badges"], ["id", "refresh-button-container"], ["id", "file-picker-container"], [1, "file-browser-actions"], [1, "loading-container"], [1, "error-container"], [1, "empty-container"], [1, "debug-console", 2, "margin-top", "16px", "border", "1px solid #ccc", "border-radius", "4px", "background", "#1e1e1e"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "8px 12px", "background", "#333", "border-bottom", "1px solid #555", "border-radius", "4px 4px 0 0"], [2, "color", "#fff", "font-weight", "bold", "font-size", "12px"], [2, "display", "flex", "gap", "8px"], [2, "padding", "2px 8px", "background", "#4caf50", "color", "#fff", "border", "none", "border-radius", "3px", "cursor", "pointer", "font-size", "11px", 3, "click"], [2, "padding", "2px 8px", "background", "#666", "color", "#fff", "border", "none", "border-radius", "3px", "cursor", "pointer", "font-size", "11px", 3, "click"], ["id", "debug-console-content", 2, "height", "150px", "overflow-y", "auto", "padding", "8px", "font-family", "monospace", "font-size", "11px", "color", "#0f0", "line-height", "1.4"], [1, "selection-buttons"], [1, "btn", "btn-secondary", "btn-sm", 3, "click", "disabled"], [1, "selection-info"], [1, "selection-count"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "loading-hint"], [1, "btn", "btn-secondary", 3, "click"], [1, "error-icon"], [1, "error-message"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "file-table-container"], [1, "file-table"], [1, "col-checkbox"], ["type", "checkbox", "title", "Toggle all", 3, "change", "checked", "indeterminate"], [1, "col-filename"], [1, "col-size"], [1, "col-type"], [1, "col-actions"], [3, "selected"], [1, "file-table-footer"], [1, "file-count"], [3, "click"], ["type", "checkbox", 3, "click", "change", "checked"], [1, "filename"], [1, "filesize"], [1, "badge"], ["title", "Remove file", 1, "btn", "btn-icon", "btn-danger", "btn-sm", 3, "click"], [1, "empty-icon"], [1, "empty-message"]], template: function FileBrowserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Loading...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 3);
      \u0275\u0275domListener("click", function FileBrowserComponent_Template_button_click_4_listener() {
        return ctx.testCclConnection();
      });
      \u0275\u0275text(5, " Test CCL ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "button", 4);
      \u0275\u0275domListener("click", function FileBrowserComponent_Template_button_click_6_listener() {
        return ctx.recheckEnvironment();
      });
      \u0275\u0275text(7, " Recheck ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5);
      \u0275\u0275text(9, " STATIC-TEST-OK ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 6)(11, "div", 7)(12, "h3");
      \u0275\u0275text(13, "Extract Files");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(14, "span", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(15, "span", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(16, "div", 10);
      \u0275\u0275conditionalCreate(17, FileBrowserComponent_Conditional_17_Template, 10, 4, "div", 11);
      \u0275\u0275conditionalCreate(18, FileBrowserComponent_Conditional_18_Template, 9, 0, "div", 12);
      \u0275\u0275conditionalCreate(19, FileBrowserComponent_Conditional_19_Template, 10, 1, "div", 13);
      \u0275\u0275conditionalCreate(20, FileBrowserComponent_Conditional_20_Template, 19, 4);
      \u0275\u0275conditionalCreate(21, FileBrowserComponent_Conditional_21_Template, 8, 1, "div", 14);
      \u0275\u0275conditionalCreate(22, FileBrowserComponent_Conditional_22_Template, 8, 0, "div", 14);
      \u0275\u0275domElementStart(23, "div", 15)(24, "div", 16)(25, "span", 17);
      \u0275\u0275text(26, "Debug Console");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 18)(28, "button", 19);
      \u0275\u0275domListener("click", function FileBrowserComponent_Template_button_click_28_listener() {
        return ctx.copyDebugLogs();
      });
      \u0275\u0275text(29, " Copy ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "button", 20);
      \u0275\u0275domListener("click", function FileBrowserComponent_Template_button_click_30_listener() {
        return ctx.clearDebugLogs();
      });
      \u0275\u0275text(31, " Clear ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(32, "div", 21);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.totalFileCount > 0 ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage && !ctx.isOfflineMode ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.totalFileCount > 0 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.totalFileCount === 0 && !ctx.isOfflineMode ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.totalFileCount === 0 && ctx.isOfflineMode ? 22 : -1);
    }
  }, styles: ["\n\n.file-browser[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n}\n.file-browser-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .directory-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .offline-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 4px;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .online-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-radius: 4px;\n}\n.file-browser-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .badge-local[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 4px;\n}\n.offline-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n}\n.offline-picker[_ngcontent-%COMP%]   label.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.offline-picker[_ngcontent-%COMP%]   label.btn[_ngcontent-%COMP%]   .folder-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.offline-picker[_ngcontent-%COMP%]   .picker-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.file-browser-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #fafafa;\n}\n.file-browser-actions[_ngcontent-%COMP%]   .selection-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.file-browser-actions[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.file-browser-actions[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   .selection-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s, opacity 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: #fff;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #333;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0d0d0;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.btn.btn-icon[_ngcontent-%COMP%] {\n  padding: 8px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n}\n.btn.btn-icon[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e0e0e0;\n}\n.btn.btn-icon.btn-sm[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  font-size: 14px;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #d32f2f;\n  border-color: #ffcdd2;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ffcdd2;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n  color: #333;\n  background: #f9f9f9;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1976d2;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.spinner-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #666;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.refresh-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: #d32f2f;\n  background: #ffebee;\n  border-radius: 50%;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #d32f2f;\n  margin-bottom: 4px;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.file-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.file-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.file-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.file-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.file-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.file-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.file-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.file-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.file-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]:hover {\n  background: #bbdefb;\n}\n.file-table[_ngcontent-%COMP%]   .col-checkbox[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.file-table[_ngcontent-%COMP%]   .col-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.file-table[_ngcontent-%COMP%]   .col-filename[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.file-table[_ngcontent-%COMP%]   .col-filename[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n  color: #333;\n}\n.file-table[_ngcontent-%COMP%]   .col-size[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.file-table[_ngcontent-%COMP%]   .col-size[_ngcontent-%COMP%]   .filesize[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.file-table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.file-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.badge.badge-patient[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-patient-comment[_ngcontent-%COMP%] {\n  background: #f1f8e9;\n  color: #558b2f;\n}\n.badge.badge-patient-instruction[_ngcontent-%COMP%] {\n  background: #e0f2f1;\n  color: #00695c;\n}\n.badge.badge-unit[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.badge.badge-unit-comment[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.badge.badge-spec-attr[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.badge.badge-other[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #666;\n}\n.file-table-footer[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #fafafa;\n  border-top: 1px solid #e0e0e0;\n}\n.file-table-footer[_ngcontent-%COMP%]   .file-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.empty-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n}\n.empty-container[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.5;\n}\n.empty-container[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-container[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #666;\n  margin-bottom: 4px;\n}\n.empty-container[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #999;\n  font-size: 14px;\n}\n/*# sourceMappingURL=file-browser.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileBrowserComponent, [{
    type: Component,
    args: [{ selector: "app-file-browser", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="file-browser">\r\n  <!-- DEBUG: DOM-injected status (bypasses Angular template binding) -->\r\n  <div style="display: flex; align-items: center; gap: 8px; background: yellow; color: black; padding: 8px;">\r\n    <span id="debug-status" style="font-weight: bold; flex: 1;">Loading...</span>\r\n    <button\r\n      (click)="testCclConnection()"\r\n      style="padding: 4px 12px; background: #ff9800; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">\r\n      Test CCL\r\n    </button>\r\n    <button\r\n      (click)="recheckEnvironment()"\r\n      style="padding: 4px 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">\r\n      Recheck\r\n    </button>\r\n  </div>\r\n  <!-- Static test -->\r\n  <div style="background: lime; color: black; padding: 4px;">\r\n    STATIC-TEST-OK\r\n  </div>\r\n\r\n  <!-- Header - all static, no Angular binding -->\r\n  <div class="file-browser-header">\r\n    <div class="header-title">\r\n      <h3>Extract Files</h3>\r\n      <!-- Mode badges injected by DOM -->\r\n      <span id="mode-badges"></span>\r\n    </div>\r\n    <span id="refresh-button-container"></span>\r\n  </div>\r\n\r\n  <!-- File picker injected by DOM -->\r\n  <div id="file-picker-container"></div>\r\n\r\n  <!-- Action Bar -->\r\n  @if (totalFileCount > 0) {\r\n    <div class="file-browser-actions">\r\n      <div class="selection-buttons">\r\n        <button\r\n          class="btn btn-secondary btn-sm"\r\n          (click)="selectAll()"\r\n          [disabled]="isLoading || totalFileCount === 0 || areAllSelected">\r\n          Select All\r\n        </button>\r\n        <button\r\n          class="btn btn-secondary btn-sm"\r\n          (click)="deselectAll()"\r\n          [disabled]="isLoading || totalFileCount === 0 || areNoneSelected">\r\n          Deselect All\r\n        </button>\r\n      </div>\r\n      <div class="selection-info">\r\n        @if (totalSelectedCount > 0) {\r\n          <span class="selection-count">{{ totalSelectedCount }} selected</span>\r\n        }\r\n      </div>\r\n      <button\r\n        class="btn btn-primary"\r\n        (click)="onValidateSelected()"\r\n        [disabled]="isLoading || !hasAnySelectedFiles">\r\n        Validate Selected\r\n      </button>\r\n    </div>\r\n  }\r\n\r\n  <!-- Loading State -->\r\n  @if (isLoading) {\r\n    <div class="loading-container">\r\n      <div class="spinner"></div>\r\n      <p><strong>Loading files from CCL...</strong></p>\r\n      <p class="loading-hint">If this takes too long, CCL scripts may not be available.</p>\r\n      <button class="btn btn-secondary" (click)="switchToOfflineMode()">\r\n        Switch to Offline Mode\r\n      </button>\r\n    </div>\r\n  }\r\n\r\n  <!-- Error State (only show in online mode) -->\r\n  @if (errorMessage && !isOfflineMode) {\r\n    <div class="error-container">\r\n      <div class="error-icon">!</div>\r\n      <div class="error-message">\r\n        <strong>Error loading files</strong>\r\n        <p>{{ errorMessage }}</p>\r\n      </div>\r\n      <button class="btn btn-secondary btn-sm" (click)="refresh()">\r\n        Retry\r\n      </button>\r\n    </div>\r\n  }\r\n\r\n  <!-- File Table -->\r\n  @if (!isLoading && totalFileCount > 0) {\r\n    <div class="file-table-container">\r\n      <table class="file-table">\r\n        <thead>\r\n          <tr>\r\n            <th class="col-checkbox">\r\n              <input\r\n                type="checkbox"\r\n                [checked]="areAllSelected"\r\n                [indeterminate]="hasAnySelectedFiles && !areAllSelected"\r\n                (change)="areAllSelected ? deselectAll() : selectAll()"\r\n                title="Toggle all">\r\n            </th>\r\n            <th class="col-filename">Filename</th>\r\n            <th class="col-size">Size</th>\r\n            <th class="col-type">Type</th>\r\n            @if (isOfflineMode) {\r\n              <th class="col-actions"></th>\r\n            }\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          @for (file of files; track file.filename) {\r\n            <tr\r\n              [class.selected]="file.selected"\r\n              (click)="toggleFileSelection($index)">\r\n              <td class="col-checkbox">\r\n                <input\r\n                  type="checkbox"\r\n                  [checked]="file.selected"\r\n                  (click)="$event.stopPropagation()"\r\n                  (change)="toggleFileSelection($index)">\r\n              </td>\r\n              <td class="col-filename">\r\n                <span class="filename">{{ file.filename }}</span>\r\n              </td>\r\n              <td class="col-size">\r\n                <span class="filesize">{{ formatFileSize(file.filesize) }}</span>\r\n              </td>\r\n              <td class="col-type">\r\n                <span class="badge" [class]="getFileTypeBadgeClass(file.filetype)">\r\n                  {{ file.filetype }}\r\n                </span>\r\n              </td>\r\n              @if (isOfflineMode) {\r\n                <td class="col-actions">\r\n                  <button\r\n                    class="btn btn-icon btn-danger btn-sm"\r\n                    (click)="removeFile(file.filename, $event)"\r\n                    title="Remove file">\r\n                    &times;\r\n                  </button>\r\n                </td>\r\n              }\r\n            </tr>\r\n          }\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class="file-table-footer">\r\n      <span class="file-count">{{ totalFileCount }} file(s)</span>\r\n    </div>\r\n  }\r\n\r\n  <!-- Empty State -->\r\n  @if (!isLoading && totalFileCount === 0 && !isOfflineMode) {\r\n    <div class="empty-container">\r\n      <div class="empty-icon">&#128193;</div>\r\n      <div class="empty-message">\r\n        <strong>No extract files found</strong>\r\n        <p>No .txt files found in {{ directoryPath }}</p>\r\n      </div>\r\n    </div>\r\n  }\r\n\r\n  <!-- Offline Empty State -->\r\n  @if (!isLoading && totalFileCount === 0 && isOfflineMode) {\r\n    <div class="empty-container">\r\n      <div class="empty-icon">&#128193;</div>\r\n      <div class="empty-message">\r\n        <strong>No files selected</strong>\r\n        <p>Click "Browse for Extract Files" above to select files for validation.</p>\r\n      </div>\r\n    </div>\r\n  }\r\n\r\n  <!-- Debug Console Section -->\r\n  <div class="debug-console" style="margin-top: 16px; border: 1px solid #ccc; border-radius: 4px; background: #1e1e1e;">\r\n    <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #333; border-bottom: 1px solid #555; border-radius: 4px 4px 0 0;">\r\n      <span style="color: #fff; font-weight: bold; font-size: 12px;">Debug Console</span>\r\n      <div style="display: flex; gap: 8px;">\r\n        <button\r\n          (click)="copyDebugLogs()"\r\n          style="padding: 2px 8px; background: #4caf50; color: #fff; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">\r\n          Copy\r\n        </button>\r\n        <button\r\n          (click)="clearDebugLogs()"\r\n          style="padding: 2px 8px; background: #666; color: #fff; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">\r\n          Clear\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div\r\n      id="debug-console-content"\r\n      style="height: 150px; overflow-y: auto; padding: 8px; font-family: monospace; font-size: 11px; color: #0f0; line-height: 1.4;">\r\n      <!-- Debug logs will be injected here via DOM -->\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/file-browser/file-browser.component.scss */\n.file-browser {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n}\n.file-browser-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n}\n.file-browser-header .header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.file-browser-header .header-title h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.file-browser-header .header-title .directory-badge {\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n}\n.file-browser-header .header-title .offline-badge {\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 4px;\n}\n.file-browser-header .header-title .online-badge {\n  padding: 4px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-radius: 4px;\n}\n.file-browser-header .header-title .badge-local {\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 4px;\n}\n.offline-picker {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n}\n.offline-picker label.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.offline-picker label.btn .folder-icon {\n  font-size: 16px;\n}\n.offline-picker .picker-hint {\n  font-size: 13px;\n  color: #666;\n}\n.file-browser-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #fafafa;\n}\n.file-browser-actions .selection-buttons {\n  display: flex;\n  gap: 8px;\n}\n.file-browser-actions .selection-info {\n  flex: 1;\n  text-align: center;\n}\n.file-browser-actions .selection-info .selection-count {\n  font-size: 13px;\n  color: #666;\n}\n.btn {\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s, opacity 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background: #1976d2;\n  color: #fff;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #1565c0;\n}\n.btn.btn-secondary {\n  background: #e0e0e0;\n  color: #333;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: #d0d0d0;\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.btn.btn-icon {\n  padding: 8px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n}\n.btn.btn-icon:hover:not(:disabled) {\n  background: #e0e0e0;\n}\n.btn.btn-icon.btn-sm {\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  font-size: 14px;\n}\n.btn.btn-danger {\n  background: #ffebee;\n  color: #d32f2f;\n  border-color: #ffcdd2;\n}\n.btn.btn-danger:hover:not(:disabled) {\n  background: #ffcdd2;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n  color: #333;\n  background: #f9f9f9;\n}\n.loading-container .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1976d2;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.loading-container p {\n  margin: 0;\n  text-align: center;\n}\n.loading-container .loading-hint {\n  font-size: 13px;\n  color: #666;\n}\n.spinner-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #666;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.refresh-icon {\n  font-size: 18px;\n  color: #666;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n}\n.error-container .error-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: #d32f2f;\n  background: #ffebee;\n  border-radius: 50%;\n}\n.error-container .error-message {\n  text-align: center;\n}\n.error-container .error-message strong {\n  display: block;\n  color: #d32f2f;\n  margin-bottom: 4px;\n}\n.error-container .error-message p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.file-table-container {\n  overflow-x: auto;\n}\n.file-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.file-table th,\n.file-table td {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.file-table thead {\n  background: #fafafa;\n}\n.file-table thead th {\n  font-size: 13px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.file-table tbody tr {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.file-table tbody tr:hover {\n  background: #f5f5f5;\n}\n.file-table tbody tr.selected {\n  background: #e3f2fd;\n}\n.file-table tbody tr.selected:hover {\n  background: #bbdefb;\n}\n.file-table .col-checkbox {\n  width: 40px;\n  text-align: center;\n}\n.file-table .col-checkbox input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.file-table .col-filename {\n  min-width: 200px;\n}\n.file-table .col-filename .filename {\n  font-family: monospace;\n  font-size: 13px;\n  color: #333;\n}\n.file-table .col-size {\n  width: 80px;\n}\n.file-table .col-size .filesize {\n  font-size: 13px;\n  color: #666;\n}\n.file-table .col-type {\n  width: 120px;\n}\n.file-table .col-actions {\n  width: 40px;\n  text-align: center;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.badge.badge-patient {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-patient-comment {\n  background: #f1f8e9;\n  color: #558b2f;\n}\n.badge.badge-patient-instruction {\n  background: #e0f2f1;\n  color: #00695c;\n}\n.badge.badge-unit {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.badge.badge-unit-comment {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.badge.badge-spec-attr {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.badge.badge-other {\n  background: #f5f5f5;\n  color: #666;\n}\n.file-table-footer {\n  padding: 8px 16px;\n  background: #fafafa;\n  border-top: 1px solid #e0e0e0;\n}\n.file-table-footer .file-count {\n  font-size: 13px;\n  color: #666;\n}\n.empty-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  gap: 12px;\n}\n.empty-container .empty-icon {\n  font-size: 48px;\n  opacity: 0.5;\n}\n.empty-container .empty-message {\n  text-align: center;\n}\n.empty-container .empty-message strong {\n  display: block;\n  color: #666;\n  margin-bottom: 4px;\n}\n.empty-container .empty-message p {\n  margin: 0;\n  color: #999;\n  font-size: 14px;\n}\n/*# sourceMappingURL=file-browser.component.css.map */\n"] }]
  }], null, { validateFiles: [{ type: Output, args: ["validateFiles"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileBrowserComponent, { className: "FileBrowserComponent", filePath: "src/app/components/file-browser/file-browser.component.ts", lineNumber: 52 });
})();

// src/app/components/results-summary/results-summary.component.ts
function ResultsSummaryComponent_section_0_tr_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 17)(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const fileResult_r1 = ctx.ngIf;
    const fileType_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fileType_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(fileResult_r1.recordCount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", fileResult_r1.fieldCount, "/", fileResult_r1.expectedFields);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fileResult_r1.issues.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusBadgeClass(fileResult_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", fileResult_r1.status, " ");
  }
}
function ResultsSummaryComponent_section_0_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ResultsSummaryComponent_section_0_tr_38_ng_container_1_Template, 12, 7, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fileType_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getFileResult(fileType_r2));
  }
}
function ResultsSummaryComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3, "Executive Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275text(13, "Total Records");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18, "Critical Issues");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 9);
    \u0275\u0275text(23, "Warnings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "table", 14)(25, "thead")(26, "tr")(27, "th", 15);
    \u0275\u0275text(28, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 16);
    \u0275\u0275text(30, "Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 16);
    \u0275\u0275text(32, "Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 16);
    \u0275\u0275text(34, "Issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 17);
    \u0275\u0275text(36, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275template(38, ResultsSummaryComponent_section_0_tr_38_Template, 2, 1, "tr", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getTimestamp());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusBadgeClass(ctx_r2.overallStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.overallStatus, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(ctx_r2.totalRecords));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.criticalCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.warningCount);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.getFileTypes());
  }
}
var ResultsSummaryComponent = class _ResultsSummaryComponent {
  /** Validation results to display */
  results = null;
  /**
   * Get CSS classes for status badge
   */
  getStatusBadgeClass(status) {
    switch (status) {
      case "PASS":
        return "status-pass";
      case "WARN":
        return "status-warn";
      case "FAIL":
        return "status-fail";
      default:
        return "";
    }
  }
  /**
   * Format number with locale-specific separators
   */
  formatNumber(value) {
    return value.toLocaleString();
  }
  /**
   * Get timestamp as formatted string
   */
  getTimestamp() {
    return this.results?.timestamp?.toLocaleString() ?? "";
  }
  /**
   * Get file types as array for iteration
   */
  getFileTypes() {
    if (!this.results)
      return [];
    return Array.from(this.results.files.keys());
  }
  /**
   * Get file result for a type
   */
  getFileResult(type) {
    return this.results?.files.get(type);
  }
  /**
   * Get total records count
   */
  get totalRecords() {
    return this.results?.totalRecords ?? 0;
  }
  /**
   * Get critical issues count
   */
  get criticalCount() {
    return this.results?.criticalIssues.length ?? 0;
  }
  /**
   * Get warnings count
   */
  get warningCount() {
    return this.results?.warnings.length ?? 0;
  }
  /**
   * Get overall status
   */
  get overallStatus() {
    return this.results?.overallStatus ?? "PASS";
  }
  static \u0275fac = function ResultsSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResultsSummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultsSummaryComponent, selectors: [["app-results-summary"]], inputs: { results: "results" }, decls: 1, vars: 1, consts: [["class", "results-summary", 4, "ngIf"], [1, "results-summary"], [1, "summary-header"], [1, "summary-title"], [1, "timestamp"], [1, "status-badge", 3, "ngClass"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "stat-critical"], [1, "stat-value", "text-critical"], [1, "stat-card", "stat-warning"], [1, "stat-value", "text-warning"], [1, "file-summary-table"], [1, "text-left"], [1, "text-right"], [1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "file-name"], [1, "status-pill", 3, "ngClass"]], template: function ResultsSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ResultsSummaryComponent_section_0_Template, 39, 7, "section", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.results);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.results-summary[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.timestamp[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  color: white;\n  font-weight: 700;\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n}\n.status-pass[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.status-warn[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-fail[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (min-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n.stat-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n}\n.stat-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.text-critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.file-summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.875rem;\n  border-collapse: collapse;\n}\n.file-summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}\n.file-summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-weight: 600;\n  color: #374151;\n}\n.file-summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n}\n.file-summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n}\n.file-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n}\n/*# sourceMappingURL=results-summary.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultsSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-results-summary", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- Executive Summary Section -->\r\n<section *ngIf="results" class="results-summary">\r\n  <!-- Header with timestamp -->\r\n  <div class="summary-header">\r\n    <h2 class="summary-title">Executive Summary</h2>\r\n    <span class="timestamp">{{ getTimestamp() }}</span>\r\n  </div>\r\n\r\n  <!-- Status Badge -->\r\n  <div class="status-badge" [ngClass]="getStatusBadgeClass(overallStatus)">\r\n    {{ overallStatus }}\r\n  </div>\r\n\r\n  <!-- Stats Cards -->\r\n  <div class="stats-grid">\r\n    <div class="stat-card">\r\n      <div class="stat-value">{{ formatNumber(totalRecords) }}</div>\r\n      <div class="stat-label">Total Records</div>\r\n    </div>\r\n    <div class="stat-card stat-critical">\r\n      <div class="stat-value text-critical">{{ criticalCount }}</div>\r\n      <div class="stat-label">Critical Issues</div>\r\n    </div>\r\n    <div class="stat-card stat-warning">\r\n      <div class="stat-value text-warning">{{ warningCount }}</div>\r\n      <div class="stat-label">Warnings</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- File Summary Table -->\r\n  <table class="file-summary-table">\r\n    <thead>\r\n      <tr>\r\n        <th class="text-left">File</th>\r\n        <th class="text-right">Records</th>\r\n        <th class="text-right">Fields</th>\r\n        <th class="text-right">Issues</th>\r\n        <th class="text-center">Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor="let fileType of getFileTypes()">\r\n        <ng-container *ngIf="getFileResult(fileType) as fileResult">\r\n          <td class="file-name">{{ fileType }}</td>\r\n          <td class="text-right">{{ formatNumber(fileResult.recordCount) }}</td>\r\n          <td class="text-right">{{ fileResult.fieldCount }}/{{ fileResult.expectedFields }}</td>\r\n          <td class="text-right">{{ fileResult.issues.length }}</td>\r\n          <td class="text-center">\r\n            <span class="status-pill" [ngClass]="getStatusBadgeClass(fileResult.status)">\r\n              {{ fileResult.status }}\r\n            </span>\r\n          </td>\r\n        </ng-container>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n\r\n<style>\r\n.results-summary {\r\n  background: white;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.summary-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.summary-title {\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n  margin: 0;\r\n}\r\n\r\n.timestamp {\r\n  font-size: 0.875rem;\r\n  color: #6b7280;\r\n}\r\n\r\n.status-badge {\r\n  display: inline-block;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0.5rem;\r\n  color: white;\r\n  font-weight: 700;\r\n  font-size: 1.125rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.status-pass { background: #10b981; }\r\n.status-warn { background: #f59e0b; }\r\n.status-fail { background: #ef4444; }\r\n\r\n.stats-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .stats-grid {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n.stat-card {\r\n  background: #f9fafb;\r\n  border-radius: 0.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.stat-critical {\r\n  background: #fef2f2;\r\n}\r\n\r\n.stat-warning {\r\n  background: #fffbeb;\r\n}\r\n\r\n.stat-value {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #1f2937;\r\n}\r\n\r\n.text-critical {\r\n  color: #dc2626;\r\n}\r\n\r\n.text-warning {\r\n  color: #d97706;\r\n}\r\n\r\n.stat-label {\r\n  font-size: 0.875rem;\r\n  color: #6b7280;\r\n}\r\n\r\n.file-summary-table {\r\n  width: 100%;\r\n  font-size: 0.875rem;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.file-summary-table thead {\r\n  background: #f3f4f6;\r\n}\r\n\r\n.file-summary-table th {\r\n  padding: 0.5rem 0.75rem;\r\n  font-weight: 600;\r\n  color: #374151;\r\n}\r\n\r\n.file-summary-table tbody tr {\r\n  border-top: 1px solid #e5e7eb;\r\n}\r\n\r\n.file-summary-table td {\r\n  padding: 0.5rem 0.75rem;\r\n}\r\n\r\n.file-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.text-left { text-align: left; }\r\n.text-right { text-align: right; }\r\n.text-center { text-align: center; }\r\n\r\n.status-pill {\r\n  display: inline-block;\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n</style>\r\n' }]
  }], null, { results: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultsSummaryComponent, { className: "ResultsSummaryComponent", filePath: "src/app/components/results-summary/results-summary.component.ts", lineNumber: 27 });
})();

// src/app/components/critical-issues/critical-issues.component.ts
function CriticalIssuesComponent_section_0_li_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.formatCount(issue_r1.count), " records) ");
  }
}
function CriticalIssuesComponent_section_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, CriticalIssuesComponent_section_0_li_6_span_4_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFileSource(issue_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", issue_r1.message, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", issue_r1.count);
  }
}
function CriticalIssuesComponent_section_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "span", 8);
    \u0275\u0275text(2, "Cross-File");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(": ", ctx_r1.getCrossFileMessage(result_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r1.formatCount(ctx_r1.getOrphanCount(result_r3)), " orphan records) ");
  }
}
function CriticalIssuesComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "h2", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 3);
    \u0275\u0275element(3, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Critical Issues (Must Fix) ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "ul", 5);
    \u0275\u0275template(6, CriticalIssuesComponent_section_0_li_6_Template, 5, 3, "li", 6)(7, CriticalIssuesComponent_section_0_li_7_Template, 6, 2, "li", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.criticalIssues);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.crossFileErrors);
  }
}
var CriticalIssuesComponent = class _CriticalIssuesComponent {
  /** Critical issues from file validation */
  criticalIssues = [];
  /** Cross-file validation results with errors */
  crossFileErrors = [];
  /**
   * Check if there are any critical issues to display
   */
  get hasIssues() {
    return this.criticalIssues.length > 0 || this.crossFileErrors.length > 0;
  }
  /**
   * Get combined count of all critical issues
   */
  get totalCount() {
    return this.criticalIssues.length + this.crossFileErrors.length;
  }
  /**
   * Format count for display
   */
  formatCount(count) {
    return count.toLocaleString();
  }
  /**
   * Get file source display for issue
   */
  getFileSource(issue) {
    return issue.file || "Unknown";
  }
  /**
   * Get cross-file error message
   */
  getCrossFileMessage(result) {
    return result.rule;
  }
  /**
   * Get orphan count from cross-file result
   */
  getOrphanCount(result) {
    return result.orphans;
  }
  static \u0275fac = function CriticalIssuesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CriticalIssuesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CriticalIssuesComponent, selectors: [["app-critical-issues"]], inputs: { criticalIssues: "criticalIssues", crossFileErrors: "crossFileErrors" }, decls: 1, vars: 1, consts: [["class", "critical-issues-section", 4, "ngIf"], [1, "critical-issues-section"], [1, "critical-header"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "warning-icon"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "issues-list"], ["class", "issue-item", 4, "ngFor", "ngForOf"], [1, "issue-item"], [1, "issue-file"], ["class", "issue-count", 4, "ngIf"], [1, "issue-count"]], template: function CriticalIssuesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CriticalIssuesComponent_section_0_Template, 8, 2, "section", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.hasIssues);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.critical-issues-section[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.critical-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #991b1b;\n  margin: 0 0 1rem 0;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #dc2626;\n}\n.issues-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.issue-item[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.75rem 1rem;\n  border-radius: 0.375rem;\n  border-left: 4px solid #ef4444;\n  color: #1f2937;\n}\n.issue-file[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #991b1b;\n}\n.issue-count[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=critical-issues.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CriticalIssuesComponent, [{
    type: Component,
    args: [{ selector: "app-critical-issues", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- Critical Issues Banner (Hidden when no issues) -->\r\n<section *ngIf="hasIssues" class="critical-issues-section">\r\n  <h2 class="critical-header">\r\n    <svg class="warning-icon" viewBox="0 0 20 20" fill="currentColor">\r\n      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\r\n    </svg>\r\n    Critical Issues (Must Fix)\r\n  </h2>\r\n\r\n  <ul class="issues-list">\r\n    <!-- File-level critical issues -->\r\n    <li *ngFor="let issue of criticalIssues" class="issue-item">\r\n      <span class="issue-file">{{ getFileSource(issue) }}</span>:\r\n      {{ issue.message }}\r\n      <span *ngIf="issue.count" class="issue-count">\r\n        ({{ formatCount(issue.count) }} records)\r\n      </span>\r\n    </li>\r\n\r\n    <!-- Cross-file validation errors -->\r\n    <li *ngFor="let result of crossFileErrors" class="issue-item">\r\n      <span class="issue-file">Cross-File</span>:\r\n      {{ getCrossFileMessage(result) }}\r\n      <span class="issue-count">\r\n        ({{ formatCount(getOrphanCount(result)) }} orphan records)\r\n      </span>\r\n    </li>\r\n  </ul>\r\n</section>\r\n\r\n<style>\r\n.critical-issues-section {\r\n  background: #fef2f2;\r\n  border: 1px solid #fecaca;\r\n  border-radius: 0.5rem;\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.critical-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 1.125rem;\r\n  font-weight: 600;\r\n  color: #991b1b;\r\n  margin: 0 0 1rem 0;\r\n}\r\n\r\n.warning-icon {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  color: #dc2626;\r\n}\r\n\r\n.issues-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.issue-item {\r\n  background: white;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 0.375rem;\r\n  border-left: 4px solid #ef4444;\r\n  color: #1f2937;\r\n}\r\n\r\n.issue-file {\r\n  font-weight: 600;\r\n  color: #991b1b;\r\n}\r\n\r\n.issue-count {\r\n  color: #dc2626;\r\n}\r\n</style>\r\n' }]
  }], null, { criticalIssues: [{
    type: Input
  }], crossFileErrors: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CriticalIssuesComponent, { className: "CriticalIssuesComponent", filePath: "src/app/components/critical-issues/critical-issues.component.ts", lineNumber: 22 });
})();

// src/app/components/file-detail/file-detail.component.ts
function FileDetailComponent_div_0_div_15_ng_container_22_li_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Affected: ", ctx_r1.formatNumber(issue_r3.count), " records ");
  }
}
function FileDetailComponent_div_0_div_15_ng_container_22_li_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Samples: ", ctx_r1.formatSamples(issue_r3), " ");
  }
}
function FileDetailComponent_div_0_div_15_ng_container_22_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FileDetailComponent_div_0_div_15_ng_container_22_li_4_div_3_Template, 2, 1, "div", 25)(4, FileDetailComponent_div_0_div_15_ng_container_22_li_4_div_4_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.getIssueSeverityClass(issue_r3.severity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r3.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", issue_r3.count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", issue_r3.samples && issue_r3.samples.length > 0);
  }
}
function FileDetailComponent_div_0_div_15_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h4", 20);
    \u0275\u0275text(2, "Issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 21);
    \u0275\u0275template(4, FileDetailComponent_div_0_div_15_ng_container_22_li_4_Template, 5, 4, "li", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.issues);
  }
}
function FileDetailComponent_div_0_div_15_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "No issues found");
    \u0275\u0275elementEnd();
  }
}
function FileDetailComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275text(6, "Records");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275text(11, "Fields");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "div", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275text(16, "Required Field Completion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21, "Critical Issues");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, FileDetailComponent_div_0_div_15_ng_container_22_Template, 5, 1, "ng-container", 19)(23, FileDetailComponent_div_0_div_15_ng_template_23_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noIssues_r4 = \u0275\u0275reference(24);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(ctx_r1.recordCount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fieldCountDisplay);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.completionRate, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.criticalIssuesCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasIssues)("ngIfElse", noIssues_r4);
  }
}
function FileDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function FileDetailComponent_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpanded());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 11);
    \u0275\u0275element(14, "path", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, FileDetailComponent_div_0_div_15_Template, 25, 6, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(ctx_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fileType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.filename || ctx_r1.fileResult.filename);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatNumber(ctx_r1.recordCount), " records | ", ctx_r1.issues.length, " issues ");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.expanded());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.expanded());
  }
}
var FileDetailComponent = class _FileDetailComponent {
  /** File type being displayed */
  fileType = "PTNT";
  /** Validation result for this file */
  fileResult = null;
  /** Original filename */
  filename = "";
  /** Expanded state (using signal for reactivity) */
  expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  /**
   * Toggle expanded state
   */
  toggleExpanded() {
    this.expanded.update((v) => !v);
  }
  /**
   * Get CSS class for status badge
   */
  getStatusBadgeClass(status) {
    switch (status) {
      case "PASS":
        return "status-pass";
      case "WARN":
        return "status-warn";
      case "FAIL":
        return "status-fail";
      default:
        return "";
    }
  }
  /**
   * Get CSS class for issue severity
   */
  getIssueSeverityClass(severity) {
    switch (severity) {
      case "critical":
        return "issue-critical";
      case "warning":
        return "issue-warning";
      default:
        return "";
    }
  }
  /**
   * Format number with locale-specific separators
   */
  formatNumber(value) {
    return value.toLocaleString();
  }
  /**
   * Get record count
   */
  get recordCount() {
    return this.fileResult?.recordCount ?? 0;
  }
  /**
   * Get field count display (actual/expected)
   */
  get fieldCountDisplay() {
    if (!this.fileResult)
      return "0/0";
    return `${this.fileResult.fieldCount}/${this.fileResult.expectedFields}`;
  }
  /**
   * Get completion rate percentage
   */
  get completionRate() {
    return this.fileResult?.completionRate ?? 0;
  }
  /**
   * Get critical issues count
   */
  get criticalIssuesCount() {
    return this.fileResult?.issues.filter((i) => i.severity === "critical").length ?? 0;
  }
  /**
   * Get issues list
   */
  get issues() {
    return this.fileResult?.issues ?? [];
  }
  /**
   * Get file status
   */
  get status() {
    return this.fileResult?.status ?? "PASS";
  }
  /**
   * Check if there are any issues
   */
  get hasIssues() {
    return this.issues.length > 0;
  }
  /**
   * Format issue samples for display
   */
  formatSamples(issue) {
    if (!issue.samples || issue.samples.length === 0)
      return "";
    return issue.samples.slice(0, 3).map((s) => {
      if (s.line) {
        if (s.value !== void 0) {
          return `Line ${s.line}: "${s.value}"`;
        } else if (s.actual !== void 0) {
          return `Line ${s.line}: ${s.actual} fields`;
        }
        return `Line ${s.line}`;
      }
      return JSON.stringify(s);
    }).join(", ");
  }
  static \u0275fac = function FileDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileDetailComponent, selectors: [["app-file-detail"]], inputs: { fileType: "fileType", fileResult: "fileResult", filename: "filename" }, decls: 1, vars: 1, consts: [["noIssues", ""], ["class", "file-detail-card", 4, "ngIf"], [1, "file-detail-card"], ["type", "button", 1, "file-header", 3, "click"], [1, "file-header-left"], [1, "status-pill", 3, "ngClass"], [1, "file-type"], [1, "file-name"], [1, "file-header-right"], [1, "file-stats"], [1, "expand-icon"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["class", "file-content", 4, "ngIf"], [1, "file-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [4, "ngIf", "ngIfElse"], [1, "issues-header"], [1, "issues-list"], ["class", "issue-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "issue-item", 3, "ngClass"], [1, "issue-message"], ["class", "issue-count", 4, "ngIf"], ["class", "issue-samples", 4, "ngIf"], [1, "issue-count"], [1, "issue-samples"], [1, "no-issues"]], template: function FileDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FileDetailComponent_div_0_Template, 16, 9, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.fileResult);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.file-detail-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n.file-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: white;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.file-header[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.file-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n}\n.status-pass[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.status-warn[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-fail[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.file-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.file-name[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.file-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.file-stats[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  transition: transform 0.2s;\n}\n.expand-icon.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.file-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (min-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.issues-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #1f2937;\n}\n.issues-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.issue-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-radius: 0.375rem;\n  border-left: 4px solid;\n}\n.issue-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-left-color: #ef4444;\n}\n.issue-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-left-color: #f59e0b;\n}\n.issue-message[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n}\n.issue-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n.issue-samples[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 0.25rem;\n}\n.no-issues[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 500;\n}\n/*# sourceMappingURL=file-detail.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDetailComponent, [{
    type: Component,
    args: [{ selector: "app-file-detail", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- File Detail Card (Collapsible) -->\r\n<div class="file-detail-card" *ngIf="fileResult">\r\n\r\n  <!-- Collapsible Header -->\r\n  <button type="button" class="file-header" (click)="toggleExpanded()">\r\n    <div class="file-header-left">\r\n      <span class="status-pill" [ngClass]="getStatusBadgeClass(status)">\r\n        {{ status }}\r\n      </span>\r\n      <span class="file-type">{{ fileType }}</span>\r\n      <span class="file-name">{{ filename || fileResult.filename }}</span>\r\n    </div>\r\n    <div class="file-header-right">\r\n      <span class="file-stats">\r\n        {{ formatNumber(recordCount) }} records | {{ issues.length }} issues\r\n      </span>\r\n      <span class="expand-icon" [class.expanded]="expanded()">\r\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">\r\n          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>\r\n        </svg>\r\n      </span>\r\n    </div>\r\n  </button>\r\n\r\n  <!-- Expandable Content -->\r\n  <div class="file-content" *ngIf="expanded()">\r\n\r\n    <!-- Stats Cards -->\r\n    <div class="stats-grid">\r\n      <div class="stat-card">\r\n        <div class="stat-value">{{ formatNumber(recordCount) }}</div>\r\n        <div class="stat-label">Records</div>\r\n      </div>\r\n      <div class="stat-card">\r\n        <div class="stat-value">{{ fieldCountDisplay }}</div>\r\n        <div class="stat-label">Fields</div>\r\n      </div>\r\n      <div class="stat-card">\r\n        <div class="stat-value">{{ completionRate }}%</div>\r\n        <div class="stat-label">Required Field Completion</div>\r\n      </div>\r\n      <div class="stat-card">\r\n        <div class="stat-value">{{ criticalIssuesCount }}</div>\r\n        <div class="stat-label">Critical Issues</div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Issues List -->\r\n    <ng-container *ngIf="hasIssues; else noIssues">\r\n      <h4 class="issues-header">Issues</h4>\r\n      <ul class="issues-list">\r\n        <li *ngFor="let issue of issues"\r\n            class="issue-item"\r\n            [ngClass]="getIssueSeverityClass(issue.severity)">\r\n          <div class="issue-message">{{ issue.message }}</div>\r\n          <div *ngIf="issue.count" class="issue-count">\r\n            Affected: {{ formatNumber(issue.count) }} records\r\n          </div>\r\n          <div *ngIf="issue.samples && issue.samples.length > 0" class="issue-samples">\r\n            Samples: {{ formatSamples(issue) }}\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </ng-container>\r\n\r\n    <ng-template #noIssues>\r\n      <p class="no-issues">No issues found</p>\r\n    </ng-template>\r\n\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n.file-detail-card {\r\n  background: white;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n  margin-bottom: 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.file-header {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  background: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.file-header:hover {\r\n  background: #f9fafb;\r\n}\r\n\r\n.file-header-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.status-pill {\r\n  display: inline-block;\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n\r\n.status-pass { background: #10b981; }\r\n.status-warn { background: #f59e0b; }\r\n.status-fail { background: #ef4444; }\r\n\r\n.file-type {\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n}\r\n\r\n.file-name {\r\n  color: #6b7280;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.file-header-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.file-stats {\r\n  font-size: 0.875rem;\r\n  color: #6b7280;\r\n}\r\n\r\n.expand-icon {\r\n  color: #6b7280;\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.expand-icon.expanded {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.file-content {\r\n  padding: 1rem;\r\n  border-top: 1px solid #e5e7eb;\r\n}\r\n\r\n.stats-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .stats-grid {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n.stat-card {\r\n  background: #f9fafb;\r\n  border-radius: 0.5rem;\r\n  padding: 0.75rem;\r\n}\r\n\r\n.stat-value {\r\n  font-size: 1.125rem;\r\n  font-weight: 700;\r\n  color: #1f2937;\r\n}\r\n\r\n.stat-label {\r\n  font-size: 0.75rem;\r\n  color: #6b7280;\r\n}\r\n\r\n.issues-header {\r\n  font-weight: 600;\r\n  margin-bottom: 0.5rem;\r\n  color: #1f2937;\r\n}\r\n\r\n.issues-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.issue-item {\r\n  padding: 0.75rem;\r\n  border-radius: 0.375rem;\r\n  border-left: 4px solid;\r\n}\r\n\r\n.issue-critical {\r\n  background: #fef2f2;\r\n  border-left-color: #ef4444;\r\n}\r\n\r\n.issue-warning {\r\n  background: #fffbeb;\r\n  border-left-color: #f59e0b;\r\n}\r\n\r\n.issue-message {\r\n  font-weight: 500;\r\n  color: #1f2937;\r\n}\r\n\r\n.issue-count {\r\n  font-size: 0.875rem;\r\n  color: #6b7280;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.issue-samples {\r\n  font-size: 0.75rem;\r\n  color: #9ca3af;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.no-issues {\r\n  color: #10b981;\r\n  font-weight: 500;\r\n}\r\n</style>\r\n' }]
  }], null, { fileType: [{
    type: Input
  }], fileResult: [{
    type: Input
  }], filename: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileDetailComponent, { className: "FileDetailComponent", filePath: "src/app/components/file-detail/file-detail.component.ts", lineNumber: 28 });
})();

// src/app/services/validation.service.ts
var ValidationService = class _ValidationService {
  /**
   * Embedded WellSky DCU 4.0 specifications
   * Same structure as standalone validator.html
   */
  specs = {
    "version": "DCU 4.0",
    "generatedDate": "2026-01-15",
    "description": "WellSky Transfusion Data Conversion Utility field specifications",
    "formatRules": {
      "delimiter": "|",
      "lineEnding": "CRLF",
      "trailingPipe": true,
      "encoding": "UTF-8",
      "nullRepresentation": ""
    },
    "dateFormats": {
      "datetime": {
        "pattern": "^\\d{2}/\\d{2}/\\d{4} \\d{2}:\\d{2}$",
        "format": "MM/DD/YYYY HH:MM",
        "example": "04/18/2012 23:59"
      },
      "dateOnly": {
        "pattern": "^\\d{2}/\\d{2}/\\d{4}$",
        "format": "MM/DD/YYYY",
        "example": "04/18/2012"
      }
    },
    "validValues": {
      "abo": ["A", "A1", "A2", "A1B", "A2B", "AB", "B", "O", "U", ""],
      "rh": ["POS", "NEG", ""],
      "sex": ["F", "M", ""],
      "unitStatus": ["D", "T"],
      "designation": ["A", "G", "S"],
      "specAttrGroup": ["AG", "SA"],
      "yesNo": ["Y", "N", ""],
      "pooledIndicator": ["X", "P", ""],
      "adIndicator": ["A", "D", ""],
      "unitModType": ["M", "D", ""],
      "returnedIndicator": ["R", ""],
      "quarantineIndicator": ["Q", ""]
    },
    "files": {
      "PTNT": {
        "displayName": "Patient Demographics",
        "description": "Patient demographic information including identifiers, names, blood type, and facility",
        "expectedFields": 72,
        "filePattern": "^ptnt_(?!cmt|instr).*\\.txt$",
        "fields": [
          { "position": 1, "name": "INTNL_PTNT_NUM", "displayName": "Internal Patient Number (IPN)", "maxLength": 8, "dataType": "numeric", "required": true, "unique": true, "description": "Unique patient identifier linking all system records" },
          { "position": 2, "name": "UVS_PTNT_NUM", "displayName": "Universal Patient Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Leave NULL - not currently used in Transfusion" },
          { "position": 3, "name": "MED_REC_NUM", "displayName": "Medical Record Number (MRN)", "maxLength": 20, "dataType": "alphanumeric", "required": true, "description": "Patient's permanent ID number" },
          { "position": 4, "name": "PTNT_LST_NAM", "displayName": "Patient Last Name", "maxLength": 48, "dataType": "alphanumeric", "required": true, "description": "Patient's last name" },
          { "position": 5, "name": "PTNT_FST_NAM", "displayName": "Patient First Name", "maxLength": 48, "dataType": "alphanumeric", "required": true, "description": "Patient's first name" },
          { "position": 6, "name": "PTNT_MID_NAM", "displayName": "Patient Middle Name", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "Patient's middle name" },
          { "position": 7, "name": "SSN", "displayName": "Social Security Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Formatted SSN of patient" },
          { "position": 8, "name": "BRTH_DT", "displayName": "Birth Date", "maxLength": 16, "dataType": "datetime", "required": true, "description": "Patient's date of birth" },
          { "position": 9, "name": "DCSD_DT", "displayName": "Deceased Date", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Date patient deceased (if applicable)" },
          { "position": 10, "name": "SEX_CD", "displayName": "Sex Code", "maxLength": 1, "dataType": "alphanumeric", "required": true, "validValues": "sex", "description": "M, F, or blank" },
          { "position": 11, "name": "SEX_CD_DESC", "displayName": "Sex Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of sex code" },
          { "position": 12, "name": "RACE_CD", "displayName": "Race Code", "maxLength": 1, "dataType": "alphanumeric", "required": false, "description": "Race code of patient" },
          { "position": 13, "name": "RACE_CD_DESC", "displayName": "Race Code Description", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Description of race code" },
          { "position": 14, "name": "ETHNC_GRP_CD", "displayName": "Ethnic Group Code", "maxLength": 3, "dataType": "alphanumeric", "required": false, "description": "Ethnic group code" },
          { "position": 15, "name": "ETHNC_GRP_CD_DESC", "displayName": "Ethnic Group Description", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Description of ethnic code" },
          { "position": 16, "name": "ADDR_LN_1", "displayName": "Address Line 1", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Patient address line 1" },
          { "position": 17, "name": "ADDR_LN_2", "displayName": "Address Line 2", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Patient address line 2" },
          { "position": 18, "name": "CITY_NAM", "displayName": "City Name", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Patient city" },
          { "position": 19, "name": "ST_CD", "displayName": "State Code", "maxLength": 2, "dataType": "alphanumeric", "required": false, "description": "Patient state code" },
          { "position": 20, "name": "ZIP_CD", "displayName": "Zip Code", "maxLength": 15, "dataType": "alphanumeric", "required": false, "description": "Patient zip code" },
          { "position": 21, "name": "CNTRY_CD", "displayName": "Country Code", "maxLength": 2, "dataType": "alphanumeric", "required": false, "description": "Patient country code" },
          { "position": 22, "name": "HM_PH_NUM", "displayName": "Home Phone Number", "maxLength": 40, "dataType": "alphanumeric", "required": false, "description": "Patient home phone" },
          { "position": 23, "name": "WK_PH_NUM", "displayName": "Work Phone Number", "maxLength": 40, "dataType": "alphanumeric", "required": false, "description": "Patient work phone" },
          { "position": 24, "name": "PTNT_ABO", "displayName": "Patient ABO", "maxLength": 6, "dataType": "alphanumeric", "required": false, "validValues": "abo", "description": "Patient's ABO blood type" },
          { "position": 25, "name": "PTNT_RH", "displayName": "Patient Rh", "maxLength": 6, "dataType": "alphanumeric", "required": false, "validValues": "rh", "description": "Patient's Rh type (POS, NEG, or NULL)" },
          { "position": 26, "name": "ABSC_REC", "displayName": "Antibody Screen of Record", "maxLength": 3, "dataType": "alphanumeric", "required": false, "validValues": ["POS", "NEG", ""], "description": "POS if ever positive, NEG only if all negative" },
          { "position": 27, "name": "ABSC_REC_DTTM", "displayName": "Antibody Screen Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Date/time of positive antibody screen" },
          { "position": 28, "name": "ADMSN_NUM", "displayName": "Admission Number", "maxLength": 20, "dataType": "alphanumeric", "required": true, "description": "Billing/admission number. If unavailable, set = MRN" },
          { "position": 29, "name": "REG_INTO_FCLTY_CD", "displayName": "Registered Into Facility Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Must match FCLTY_CD entries" },
          { "position": 30, "name": "PTNT_LOC_CD", "displayName": "Patient Location Code", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 31, "name": "PTNT_LOC_DESC", "displayName": "Patient Location Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 32, "name": "PTNT_RM_CD", "displayName": "Patient Room Code", "maxLength": 8, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 33, "name": "PTNT_RM_DESC", "displayName": "Patient Room Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 34, "name": "PTNT_BED_CD", "displayName": "Patient Bed Code", "maxLength": 8, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 35, "name": "PTNT_BED_DESC", "displayName": "Patient Bed Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" },
          { "position": 36, "name": "FST_ADMSN_DTTM", "displayName": "First Admission Date/Time", "maxLength": 16, "dataType": "datetime", "required": true, "description": "Required for internal processing" },
          { "position": 37, "name": "LST_ADMSN_DTTM", "displayName": "Latest Admission Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Most recent admission date" },
          { "position": 38, "name": "LST_DISCHRG_DTTM", "displayName": "Latest Discharge Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Most recent discharge date" },
          { "position": 39, "name": "FINNCL_CLS_CD", "displayName": "Financial Class Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 40, "name": "FINNCL_CLS_DESC", "displayName": "Financial Class Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 41, "name": "ARMBD_NUM", "displayName": "Armband Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 42, "name": "SRVC_CD", "displayName": "Service Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 43, "name": "SRVC_CD_DESC", "displayName": "Service Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 44, "name": "DRG_CD", "displayName": "DRG Code", "maxLength": 3, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 45, "name": "DRG_CD_DESC", "displayName": "DRG Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 46, "name": "DIAG_CD", "displayName": "Diagnosis Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 47, "name": "DIAG_CD_DESC", "displayName": "Diagnosis Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 48, "name": "ICD9_CD", "displayName": "ICD9 Code", "maxLength": 7, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 49, "name": "ICD9_CD_DESC", "displayName": "ICD9 Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 50, "name": "ADMT_PHYSN_NUM", "displayName": "Admit Physician Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "NULL" },
          { "position": 51, "name": "ADMT_PHYSN_CD", "displayName": "Admit Physician Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 52, "name": "ATND_PHYSN_NUM", "displayName": "Attending Physician Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "NULL" },
          { "position": 53, "name": "ATND_PHYSN_CD", "displayName": "Attending Physician Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 54, "name": "SURG_PHYSN_NUM", "displayName": "Surgical Physician Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "NULL" },
          { "position": 55, "name": "SURG_PHYSN_CD", "displayName": "Surgical Physician Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "NULL" },
          { "position": 56, "name": "USR_DEF_FLD_1", "displayName": "User Defined Field 1", "maxLength": 100, "dataType": "alphanumeric", "required": false, "description": "Custom field 1" },
          { "position": 57, "name": "USR_DEF_FLD_2", "displayName": "User Defined Field 2", "maxLength": 100, "dataType": "alphanumeric", "required": false, "description": "Custom field 2" },
          { "position": 58, "name": "USR_DEF_FLD_3", "displayName": "User Defined Field 3", "maxLength": 100, "dataType": "alphanumeric", "required": false, "description": "Custom field 3" },
          { "position": 59, "name": "USR_DEF_FLD_4", "displayName": "User Defined Field 4", "maxLength": 100, "dataType": "alphanumeric", "required": false, "description": "Custom field 4" },
          { "position": 60, "name": "USR_DEF_FLD_5", "displayName": "User Defined Field 5", "maxLength": 100, "dataType": "alphanumeric", "required": false, "description": "Custom field 5" },
          { "position": 61, "name": "CURR_SPCMN_IN_DTTM", "displayName": "Current Specimen In Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Specimen collection datetime" },
          { "position": 62, "name": "CURR_SPCMN_OUT_DTTM", "displayName": "Current Specimen Out Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Specimen expiration datetime" },
          { "position": 63, "name": "ALIAS_MED_REC_NUM1", "displayName": "Alias Medical Record Number 1", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Original MRN if MRN conversion" },
          { "position": 64, "name": "ALIAS_MED_REC_NUM2", "displayName": "Alias Medical Record Number 2", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 65, "name": "ALIAS_MED_REC_NUM3", "displayName": "Alias Medical Record Number 3", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 66, "name": "ALIAS_MED_REC_NUM4", "displayName": "Alias Medical Record Number 4", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 67, "name": "ALIAS_MED_REC_NUM5", "displayName": "Alias Medical Record Number 5", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 68, "name": "ALIAS_MED_REC_NUM6", "displayName": "Alias Medical Record Number 6", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 69, "name": "ALIAS_MED_REC_NUM7", "displayName": "Alias Medical Record Number 7", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 70, "name": "ALIAS_MED_REC_NUM8", "displayName": "Alias Medical Record Number 8", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 71, "name": "ALIAS_MED_REC_NUM9", "displayName": "Alias Medical Record Number 9", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" },
          { "position": 72, "name": "ALIAS_MED_REC_NUM10", "displayName": "Alias Medical Record Number 10", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "DO NOT USE" }
        ]
      },
      "PTNT_CMT": {
        "displayName": "Patient Comments",
        "description": "Free-text comments associated with patients",
        "expectedFields": 11,
        "filePattern": "^ptnt_cmt.*\\.txt$",
        "criticalNotes": ["Field 4 (CMT_TXT) CANNOT be NULL - causes application errors"],
        "fields": [
          { "position": 1, "name": "INTNL_PTNT_NUM", "displayName": "Internal Patient Number (IPN)", "maxLength": 8, "dataType": "numeric", "required": true, "description": "Links to PTNT file" },
          { "position": 2, "name": "MED_REC_NUM", "displayName": "Medical Record Number", "maxLength": 20, "dataType": "alphanumeric", "required": true, "description": "Patient's MRN" },
          { "position": 3, "name": "CMT_CD", "displayName": "Comment Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Typically 'FT' for Free Text" },
          { "position": 4, "name": "CMT_TXT", "displayName": "Comment Text", "maxLength": 255, "dataType": "alphanumeric", "required": true, "critical": true, "description": "CANNOT BE NULL - causes application to prevent adding/editing comments" },
          { "position": 5, "name": "SGNFCNT_CMT_FLG", "displayName": "Significant Comment Flag", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "yesNo", "description": "Y, N, or NULL" },
          { "position": 6, "name": "ADD_TECH_ID", "displayName": "Added by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who added comment" },
          { "position": 7, "name": "ADD_DTTM", "displayName": "Added Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When comment was added" },
          { "position": 8, "name": "INACTV_TECH_ID", "displayName": "Inactivated by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who inactivated" },
          { "position": 9, "name": "INACTV_DTTM", "displayName": "Inactivated Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Will hide record in application" },
          { "position": 10, "name": "INACTV_RSN_CD", "displayName": "Inactivated Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Reason code for inactivation" },
          { "position": 11, "name": "INACTV_RSN_DESC", "displayName": "Inactivated Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of inactivation reason" }
        ]
      },
      "PTNT_INSTR": {
        "displayName": "Patient Instructions",
        "description": "Patient antibodies, antigens, and special instructions",
        "expectedFields": 16,
        "filePattern": "^ptnt_instr.*\\.txt$",
        "criticalNotes": ["Field 11 for 'G' (Antigen) records must be 'POS' or 'NEG'", "Field 6 must be 'N' for all records"],
        "fields": [
          { "position": 1, "name": "INTNL_PTNT_NUM", "displayName": "Internal Patient Number (IPN)", "maxLength": 8, "dataType": "numeric", "required": true, "description": "Links to PTNT file" },
          { "position": 2, "name": "MED_REC_NUM", "displayName": "Medical Record Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Patient's MRN" },
          { "position": 3, "name": "PTNT_CD", "displayName": "Patient Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Antibody/Antigen/Instruction code" },
          { "position": 4, "name": "PTNT_CD_DESC", "displayName": "Patient Code Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of the code" },
          { "position": 5, "name": "PTNT_CD_DSNT", "displayName": "Designation", "maxLength": 1, "dataType": "alphanumeric", "required": true, "validValues": "designation", "description": "A=Antibody, G=Antigen, S=Special Instruction" },
          { "position": 6, "name": "ELE_XMTCH_ALLW_FLG", "displayName": "Electronic Crossmatch Allowed Flag", "maxLength": 1, "dataType": "alphanumeric", "required": true, "validValues": ["N"], "description": "Must be 'N' for all records" },
          { "position": 7, "name": "ADD_DTTM", "displayName": "Added Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When instruction was added" },
          { "position": 8, "name": "EXP_DTTM", "displayName": "Expiration Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When instruction expires" },
          { "position": 9, "name": "ADD_REQ_NAM", "displayName": "Added Requested By Name", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "Person who requested addition" },
          { "position": 10, "name": "ADD_TECH_ID", "displayName": "Added by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who added instruction" },
          { "position": 11, "name": "ADD_RSN_DESC", "displayName": "Added Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "conditionalRequired": { "field": 5, "value": "G", "validValues": ["POS", "NEG"] }, "description": "CRITICAL: Must be 'POS' or 'NEG' for G (Antigen) records" },
          { "position": 12, "name": "CNL_REQ_NAM", "displayName": "Cancelled Requested By Name", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "Person who requested cancellation" },
          { "position": 13, "name": "CNL_TECH_ID", "displayName": "Cancelled by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who cancelled" },
          { "position": 14, "name": "PTNT_CNL_RSN_CD", "displayName": "Cancelled Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Reason code for cancellation" },
          { "position": 15, "name": "CNL_RSN_DESC", "displayName": "Cancelled Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of cancellation reason" },
          { "position": 16, "name": "CNL_DTTM", "displayName": "Cancelled Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Will hide record in application" }
        ]
      },
      "UNIT": {
        "displayName": "Unit Disposition History",
        "description": "Blood unit demographics, status, and disposition information",
        "expectedFields": 62,
        "filePattern": "^unit_(?!cmt).*\\.txt$",
        "criticalNotes": [
          "Field 2 (MST_IUN) should equal Field 1 (IUN)",
          "Fields 32-33 required when Field 23 = 'T', NULL when Field 23 = 'D'",
          "Field 9 (DONTN_ID) max 13 chars - truncate if longer, store full in Field 14"
        ],
        "fields": [
          { "position": 1, "name": "INTNL_UNIT_NUM", "displayName": "Internal Unit Number (IUN)", "maxLength": 8, "dataType": "numeric", "required": true, "unique": true, "description": "Unique unit identifier" },
          { "position": 2, "name": "INTNL_MST_UNIT_NUM", "displayName": "Internal Master Unit Number", "maxLength": 8, "dataType": "numeric", "required": true, "description": "Set equal to Field 1" },
          { "position": 3, "name": "RCV_FCLTY_CD", "displayName": "Receiving Facility Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Facility where unit received" },
          { "position": 4, "name": "RCV_DTTM", "displayName": "Receiving Date/Time", "maxLength": 16, "dataType": "datetime", "required": true, "description": "When unit was received" },
          { "position": 5, "name": "RCV_TECH_ID", "displayName": "Receiving Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who received unit" },
          { "position": 6, "name": "SRC_CD", "displayName": "Source Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Where unit came from" },
          { "position": 7, "name": "DONTN_TYP", "displayName": "Donation Type", "maxLength": 10, "dataType": "alphanumeric", "required": false, "validValues": ["V", "A", "D", ""], "description": "V=Allogeneic, A=Autologous, D=Directed" },
          { "position": 8, "name": "DONTN_TYP_DESC", "displayName": "Donation Type Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "ALLOGENEIC, AUTOLOGOUS, DIRECTED" },
          { "position": 9, "name": "DONTN_ID", "displayName": "Donation ID", "maxLength": 13, "dataType": "alphanumeric", "required": true, "description": "Unit number (Codabar or ISBT). Max 13 chars!" },
          { "position": 10, "name": "RCV_FCLTY_DONTN_ID", "displayName": "Receiving Facility Donation ID", "maxLength": 13, "dataType": "alphanumeric", "required": true, "description": "Usually same as Field 9" },
          { "position": 11, "name": "PROD_CD", "displayName": "Product Code", "maxLength": 8, "dataType": "alphanumeric", "required": true, "description": "Blood product code" },
          { "position": 12, "name": "PROD_ABO", "displayName": "Product ABO", "maxLength": 6, "dataType": "alphanumeric", "required": false, "validValues": "abo", "description": "A, B, AB, O, U, or NULL" },
          { "position": 13, "name": "PROD_RH", "displayName": "Product Rh", "maxLength": 10, "dataType": "alphanumeric", "required": false, "validValues": "rh", "description": "POS, NEG, or NULL" },
          { "position": 14, "name": "SEG_NUM", "displayName": "Segment Number", "maxLength": 30, "dataType": "alphanumeric", "required": false, "description": "Store full DONTN_ID here if >13 chars" },
          { "position": 15, "name": "CLLCTN_DTTM", "displayName": "Collection Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When blood was collected" },
          { "position": 16, "name": "EXP_DTTM", "displayName": "Expiration Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When unit expires" },
          { "position": 17, "name": "VOLUME", "displayName": "Volume", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Unit volume" },
          { "position": 18, "name": "PROD_MANF_ID", "displayName": "Product Manufacturer ID", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Manufacturer identifier" },
          { "position": 19, "name": "PROD_MANF_LOT_NUM", "displayName": "Product Manufacturer Lot Number", "maxLength": 30, "dataType": "alphanumeric", "required": false, "description": "Manufacturer lot number" },
          { "position": 20, "name": "AD_IND", "displayName": "A/D Indicator", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "adIndicator", "description": "A=Autologous, D=Directed" },
          { "position": 21, "name": "AD_PTNT_NUM", "displayName": "A/D Patient Internal Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Patient for Auto/Directed unit" },
          { "position": 22, "name": "AD_MRN", "displayName": "A/D Medical Record Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "MRN for Auto/Directed unit" },
          { "position": 23, "name": "UNIT_STAT_CD", "displayName": "Unit Status Code", "maxLength": 1, "dataType": "alphanumeric", "required": true, "validValues": "unitStatus", "description": "D=Disposed, T=Transfused" },
          { "position": 24, "name": "UNIT_STAT_DTTM", "displayName": "Unit Status Date/Time", "maxLength": 16, "dataType": "datetime", "required": true, "description": "When unit was disposed/transfused" },
          { "position": 25, "name": "UNIT_DISCRD_RSN_CD", "displayName": "Unit Discard Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Reason code for discard" },
          { "position": 26, "name": "UNIT_DISCRD_RSN_DESC", "displayName": "Unit Discard Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of discard reason" },
          { "position": 27, "name": "TRNSFN_RCTN_RSN_CD", "displayName": "Transfusion Reaction Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Reaction reason code" },
          { "position": 28, "name": "TRNSFN_RCTN_RSN_DESC", "displayName": "Transfusion Reaction Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of reaction" },
          { "position": 29, "name": "UNIT_TNSFR_RSN_CD", "displayName": "Unit Transfer Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Transfer reason code" },
          { "position": 30, "name": "UNIT_TNSFR_RSN_DESC", "displayName": "Unit Transfer Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of transfer" },
          { "position": 31, "name": "STAT_REG_FCLTY_CD", "displayName": "Status Register Facility Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Facility where patient registered" },
          { "position": 32, "name": "INTNL_PTNT_NUM", "displayName": "Internal Patient Number", "maxLength": 8, "dataType": "numeric", "required": false, "conditionalRequired": { "field": 23, "value": "T" }, "description": "REQUIRED when Status = T, NULL when Status = D" },
          { "position": 33, "name": "MED_REC_NUM", "displayName": "Medical Record Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "conditionalRequired": { "field": 23, "value": "T" }, "description": "REQUIRED when Status = T, NULL when Status = D" },
          { "position": 34, "name": "UNIT_MOD_TYP", "displayName": "Unit Modification Type", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "unitModType", "description": "M=Modified, D=Divided" },
          { "position": 35, "name": "POOLED_IND", "displayName": "Pooled Indicator", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "pooledIndicator", "description": "X=Pool, P=Unit in Pool" },
          { "position": 36, "name": "POOL_INTNL_UNIT_NUM", "displayName": "Pool Internal Unit Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "IUN of pool if this is unit in pool" },
          { "position": 37, "name": "POOL_DONTN_ID", "displayName": "Pool Donation ID", "maxLength": 13, "dataType": "alphanumeric", "required": false, "description": "Donation ID of pool" },
          { "position": 38, "name": "PL_PROD_CD", "displayName": "Pool Product Code", "maxLength": 8, "dataType": "alphanumeric", "required": false, "description": "Product code of pool" },
          { "position": 39, "name": "RTN_IND", "displayName": "Returned Indicator", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "returnedIndicator", "description": "R=Returned" },
          { "position": 40, "name": "QRNTN_REL_IND", "displayName": "Quarantine Released Indicator", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "quarantineIndicator", "description": "Q=Released from quarantine" },
          { "position": 41, "name": "INTNL_DNR_NUM", "displayName": "Internal Donor Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Donor internal number" },
          { "position": 42, "name": "DNR_ID", "displayName": "Donor ID", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Donor identifier" },
          { "position": 43, "name": "PTNT_SRVC_CD", "displayName": "Patient Service Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Patient service at time of status" },
          { "position": 44, "name": "PTNT_SRVC_DESC", "displayName": "Patient Service Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of patient service" },
          { "position": 45, "name": "PHYSN_NUM", "displayName": "Physician Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Ordering physician number" },
          { "position": 46, "name": "PHYSN_CD", "displayName": "Physician Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Ordering physician code" },
          { "position": 47, "name": "ACCESSION_NUM", "displayName": "Accession Number", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "Order accession number" },
          { "position": 48, "name": "INV_LOC_CD", "displayName": "Inventory Location Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Sub-location code" },
          { "position": 49, "name": "INV_LOC_CD_DESC", "displayName": "Inventory Location Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of sub-location" },
          { "position": 50, "name": "LBL_VRFD_FLG", "displayName": "Label Verified Flag", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "yesNo", "description": "Y=Label verified" },
          { "position": 51, "name": "LBL_TECH_ID", "displayName": "Label Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who labeled unit" },
          { "position": 52, "name": "LBL_DTTM", "displayName": "Label Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When unit was labeled" },
          { "position": 53, "name": "STRG_FCLTY_CD", "displayName": "Storage Facility Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Where unit physically stored" },
          { "position": 54, "name": "INTND_USR_SSN", "displayName": "Intended User SSN (Orphan)", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" },
          { "position": 55, "name": "INTND_USR_LST_NAM", "displayName": "Intended User Last Name (Orphan)", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" },
          { "position": 56, "name": "INTND_USR_FST_NAM", "displayName": "Intended User First Name (Orphan)", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" },
          { "position": 57, "name": "INTND_USR_MID_NAM", "displayName": "Intended User Middle Name (Orphan)", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" },
          { "position": 58, "name": "INTND_USR_DOB", "displayName": "Intended User DOB (Orphan)", "maxLength": 16, "dataType": "datetime", "required": false, "description": "For A/D orphan units" },
          { "position": 59, "name": "INTND_USE_DTTM", "displayName": "Intended Use Date/Time (Orphan)", "maxLength": 16, "dataType": "datetime", "required": false, "description": "For A/D orphan units" },
          { "position": 60, "name": "RSRV_UNTIL_DTTM", "displayName": "Reserve Until Date/Time (Orphan)", "maxLength": 16, "dataType": "datetime", "required": false, "description": "For A/D orphan units" },
          { "position": 61, "name": "INTND_USR_PHYSN_NAM", "displayName": "Intended User Physician Name (Orphan)", "maxLength": 48, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" },
          { "position": 62, "name": "REF_ID", "displayName": "Reference ID", "maxLength": 20, "dataType": "alphanumeric", "required": false, "description": "For A/D orphan units" }
        ]
      },
      "UNIT_CMT": {
        "displayName": "Unit Comments",
        "description": "Free-text comments associated with blood units",
        "expectedFields": 13,
        "filePattern": "^unit_cmt.*\\.txt$",
        "fields": [
          { "position": 1, "name": "INTNL_UNIT_NUM", "displayName": "Internal Unit Number (IUN)", "maxLength": 8, "dataType": "numeric", "required": true, "description": "Links to UNIT file" },
          { "position": 2, "name": "INTNL_MST_UNIT_NUM", "displayName": "Internal Master Unit Number", "maxLength": 8, "dataType": "numeric", "required": true, "description": "Set equal to Field 1" },
          { "position": 3, "name": "DONTN_ID", "displayName": "Donation ID", "maxLength": 13, "dataType": "alphanumeric", "required": true, "description": "Unit donation ID" },
          { "position": 4, "name": "PROD_CD", "displayName": "Product Code", "maxLength": 8, "dataType": "alphanumeric", "required": false, "description": "Product code of unit" },
          { "position": 5, "name": "CMT_CD", "displayName": "Comment Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Typically 'FT' for Free Text" },
          { "position": 6, "name": "CMT_TXT", "displayName": "Comment Text", "maxLength": 255, "dataType": "alphanumeric", "required": true, "description": "The comment text" },
          { "position": 7, "name": "SGNFCNT_CMT_FLG", "displayName": "Significant Comment Flag", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": "yesNo", "description": "Y, N, or NULL" },
          { "position": 8, "name": "ADD_TECH_ID", "displayName": "Added by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who added comment" },
          { "position": 9, "name": "ADD_DTTM", "displayName": "Added Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "When comment was added" },
          { "position": 10, "name": "INACTV_TECH_ID", "displayName": "Inactivated by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": false, "description": "Tech who inactivated" },
          { "position": 11, "name": "INACTV_DTTM", "displayName": "Inactivated Date/Time", "maxLength": 16, "dataType": "datetime", "required": false, "description": "Will hide record in application" },
          { "position": 12, "name": "INACTV_RSN_CD", "displayName": "Inactivated Reason Code", "maxLength": 10, "dataType": "alphanumeric", "required": false, "description": "Reason code for inactivation" },
          { "position": 13, "name": "INACTV_RSN_DESC", "displayName": "Inactivated Reason Description", "maxLength": 50, "dataType": "alphanumeric", "required": false, "description": "Description of inactivation reason" }
        ]
      },
      "SPEC_ATTR": {
        "displayName": "Special Attributes",
        "description": "Unit antigens and special markers (CMV-, IRR, etc.)",
        "expectedFields": 13,
        "filePattern": "^spec_attr.*\\.txt$",
        "criticalNotes": [
          "Fields 9 (Add DTTM) and 10 (Add Tech) are REQUIRED - records won't load without them",
          "Field 7/8 must be AG/Antigen or SA/Special Attribute ONLY",
          "Field 12 (ValidFlag) must be 'Y' for all records"
        ],
        "fields": [
          { "position": 1, "name": "INTNL_UNIT_NUM", "displayName": "Internal Unit Number", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Set to same value as Field 2" },
          { "position": 2, "name": "INTNL_MST_UNIT_NUM", "displayName": "Internal Master Unit Number (IUN)", "maxLength": 8, "dataType": "numeric", "required": false, "description": "Links to UNIT file" },
          { "position": 3, "name": "DONTN_ID", "displayName": "Donation ID", "maxLength": 13, "dataType": "alphanumeric", "required": false, "description": "Unit donation ID" },
          { "position": 4, "name": "PROD_CD", "displayName": "Product Code", "maxLength": 8, "dataType": "alphanumeric", "required": false, "description": "Product code of unit" },
          { "position": 5, "name": "SPEC_ATTR_CD", "displayName": "Special Attribute Code", "maxLength": 10, "dataType": "alphanumeric", "required": true, "description": "Attribute code (e.g., K+, C-, IRR)" },
          { "position": 6, "name": "SPEC_ATTR_DESC", "displayName": "Special Attribute Description", "maxLength": 50, "dataType": "alphanumeric", "required": true, "description": "Description displays literally in WellSky" },
          { "position": 7, "name": "SPEC_ATTR_GRP_CD", "displayName": "Special Attribute Group Code", "maxLength": 5, "dataType": "alphanumeric", "required": true, "validValues": "specAttrGroup", "description": "AG or SA ONLY" },
          { "position": 8, "name": "SPEC_ATTR_GRP_DESC", "displayName": "Special Attribute Group Description", "maxLength": 50, "dataType": "alphanumeric", "required": true, "validValues": ["Antigen", "Special Attribute"], "description": "Antigen or Special Attribute ONLY" },
          { "position": 9, "name": "ADD_DTTM", "displayName": "Added Date/Time", "maxLength": 16, "dataType": "datetime", "required": true, "critical": true, "description": "REQUIRED - records won't load without this" },
          { "position": 10, "name": "ADD_TECH_ID", "displayName": "Added by Tech ID", "maxLength": 6, "dataType": "alphanumeric", "required": true, "critical": true, "description": "REQUIRED - records won't load without this" },
          { "position": 11, "name": "RESULT", "displayName": "Result", "maxLength": 1, "dataType": "alphanumeric", "required": false, "validValues": ["0", "1", ""], "description": "1=POS, 0=NEG for antigens. NULL for markers" },
          { "position": 12, "name": "VALID_FLG", "displayName": "Valid Flag", "maxLength": 1, "dataType": "alphanumeric", "required": true, "validValues": ["Y"], "description": "Must be 'Y' for all records" },
          { "position": 13, "name": "COMMENT", "displayName": "Comment", "maxLength": 255, "dataType": "alphanumeric", "required": false, "description": "Leave NULL" }
        ]
      }
    },
    "crossFileRules": [
      {
        "id": "ptnt_cmt_ipn",
        "name": "PTNT_CMT IPN exists in PTNT",
        "description": "All Internal Patient Numbers in PTNT_CMT must exist in PTNT",
        "sourceFile": "PTNT_CMT",
        "sourceField": 1,
        "targetFile": "PTNT",
        "targetField": 1,
        "severity": "error"
      },
      {
        "id": "ptnt_instr_ipn",
        "name": "PTNT_INSTR IPN exists in PTNT",
        "description": "All Internal Patient Numbers in PTNT_INSTR must exist in PTNT",
        "sourceFile": "PTNT_INSTR",
        "sourceField": 1,
        "targetFile": "PTNT",
        "targetField": 1,
        "severity": "error"
      },
      {
        "id": "unit_cmt_iun",
        "name": "UNIT_CMT IUN exists in UNIT",
        "description": "All Internal Unit Numbers in UNIT_CMT must exist in UNIT",
        "sourceFile": "UNIT_CMT",
        "sourceField": 1,
        "targetFile": "UNIT",
        "targetField": 1,
        "severity": "error"
      },
      {
        "id": "spec_attr_iun",
        "name": "SPEC_ATTR IUN exists in UNIT",
        "description": "All Internal Unit Numbers in SPEC_ATTR must exist in UNIT",
        "sourceFile": "SPEC_ATTR",
        "sourceField": 2,
        "targetFile": "UNIT",
        "targetField": 1,
        "severity": "error"
      },
      {
        "id": "unit_transfused_patient",
        "name": "Transfused units have valid patient",
        "description": "When UNIT.23 = 'T', UNIT.32 must exist in PTNT.1",
        "sourceFile": "UNIT",
        "sourceField": 32,
        "targetFile": "PTNT",
        "targetField": 1,
        "condition": { "field": 23, "value": "T" },
        "severity": "error"
      }
    ]
  };
  /**
   * Get the embedded specifications
   */
  getSpecs() {
    return this.specs;
  }
  /**
   * Get spec for a specific file type
   */
  getFileSpec(fileType) {
    return this.specs.files[fileType];
  }
  /**
   * Get all supported file types
   */
  getSupportedFileTypes() {
    return Object.keys(this.specs.files);
  }
  // ============================================================================
  // Parsing Methods
  // ============================================================================
  /**
   * Parse pipe-delimited records from file content
   * Handles header row detection and trailing pipe
   */
  parseRecords(content) {
    const lines = content.split(/\r?\n/).filter((line) => line.trim());
    let startIndex = 0;
    if (lines.length > 0) {
      const firstLine = lines[0].toUpperCase();
      if (firstLine.includes("INTNL_PTNT_NUM") || firstLine.includes("INTNL_UNIT_NUM") || firstLine.includes("CMT_CD") || firstLine.includes("SPEC_ATTR_CD") || firstLine.includes("PTNT_CD")) {
        startIndex = 1;
      }
    }
    return lines.slice(startIndex).map((line, index) => ({
      lineNumber: index + startIndex + 1,
      raw: line,
      fields: line.split("|").slice(0, -1),
      // Remove empty element after trailing pipe
      isHeader: false
    }));
  }
  /**
   * Match a filename to its corresponding file type specification
   */
  matchFileToSpec(filename) {
    const name = filename.toLowerCase();
    for (const [type, spec] of Object.entries(this.specs.files)) {
      const pattern = new RegExp(spec.filePattern, "i");
      if (pattern.test(name)) {
        return type;
      }
    }
    if (name.includes("ptnt_cmt"))
      return "PTNT_CMT";
    if (name.includes("ptnt_instr"))
      return "PTNT_INSTR";
    if (name.includes("ptnt"))
      return "PTNT";
    if (name.includes("unit_cmt"))
      return "UNIT_CMT";
    if (name.includes("spec_attr"))
      return "SPEC_ATTR";
    if (name.includes("unit"))
      return "UNIT";
    return null;
  }
  // ============================================================================
  // Single File Validation
  // ============================================================================
  /**
   * Validate a single parsed file against its specification
   */
  validateFile(type, data) {
    const spec = data.spec;
    const records = data.records;
    const issues = [];
    const problemRecords = [];
    if (records.length === 0) {
      issues.push({
        severity: "warning",
        message: "File is empty (no data records)",
        field: null,
        count: 0
      });
    }
    const fieldCountIssues = records.filter((r) => r.fields.length !== spec.expectedFields);
    if (fieldCountIssues.length > 0) {
      issues.push({
        severity: "critical",
        message: `Field count mismatch: expected ${spec.expectedFields} fields`,
        field: null,
        count: fieldCountIssues.length,
        samples: fieldCountIssues.slice(0, 5).map((r) => ({
          line: r.lineNumber,
          actual: r.fields.length
        }))
      });
      problemRecords.push(...fieldCountIssues.slice(0, 5));
    }
    const noTrailingPipe = records.filter((r) => !r.raw.endsWith("|"));
    if (noTrailingPipe.length > 0) {
      issues.push({
        severity: "warning",
        message: "Records missing trailing pipe delimiter",
        field: null,
        count: noTrailingPipe.length
      });
    }
    spec.fields.filter((f) => f.required).forEach((field) => {
      const emptyCount = records.filter((r) => r.fields.length >= field.position && (!r.fields[field.position - 1] || r.fields[field.position - 1].trim() === "")).length;
      if (emptyCount > 0) {
        const severity = field.critical ? "critical" : "warning";
        issues.push({
          severity,
          message: `Required field ${field.position} (${field.name}) is empty`,
          field: field.position,
          count: emptyCount
        });
      }
    });
    spec.fields.filter((f) => f.validValues).forEach((field) => {
      let validSet;
      if (typeof field.validValues === "string") {
        validSet = new Set(this.specs.validValues[field.validValues] || []);
      } else {
        validSet = new Set(field.validValues);
      }
      const invalidRecords = records.filter((r) => {
        if (r.fields.length < field.position)
          return false;
        const value = r.fields[field.position - 1];
        if (!value || value.trim() === "")
          return false;
        return !validSet.has(value);
      });
      if (invalidRecords.length > 0) {
        issues.push({
          severity: "warning",
          message: `Invalid values in field ${field.position} (${field.name})`,
          field: field.position,
          count: invalidRecords.length,
          samples: invalidRecords.slice(0, 3).map((r) => ({
            line: r.lineNumber,
            value: r.fields[field.position - 1]
          }))
        });
      }
    });
    const uniqueField = spec.fields.find((f) => f.unique);
    if (uniqueField) {
      const values = records.map((r) => r.fields[uniqueField.position - 1]);
      const seen = /* @__PURE__ */ new Map();
      const duplicates = [];
      values.forEach((v, i) => {
        if (seen.has(v)) {
          duplicates.push({ value: v, lines: [seen.get(v) + 1, i + 1] });
        } else {
          seen.set(v, i);
        }
      });
      if (duplicates.length > 0) {
        issues.push({
          severity: "critical",
          message: `Duplicate ${uniqueField.name} values found`,
          field: uniqueField.position,
          count: duplicates.length,
          samples: duplicates.slice(0, 5).map((d) => ({
            line: d.lines[0],
            value: d.value,
            lines: d.lines
          }))
        });
      }
    }
    this.validateFileSpecific(type, records, issues);
    const requiredFields = spec.fields.filter((f) => f.required);
    let totalRequired = 0;
    let totalPopulated = 0;
    requiredFields.forEach((field) => {
      records.forEach((r) => {
        if (r.fields.length >= field.position) {
          totalRequired++;
          if (r.fields[field.position - 1] && r.fields[field.position - 1].trim() !== "") {
            totalPopulated++;
          }
        }
      });
    });
    const completionRate = totalRequired > 0 ? Math.round(totalPopulated / totalRequired * 100) : 100;
    let status = "PASS";
    if (issues.some((i) => i.severity === "critical"))
      status = "FAIL";
    else if (issues.some((i) => i.severity === "warning"))
      status = "WARN";
    return {
      filename: data.filename,
      recordCount: records.length,
      fieldCount: records.length > 0 ? records[0].fields.length : 0,
      expectedFields: spec.expectedFields,
      completionRate,
      issues,
      problemRecords,
      status
    };
  }
  /**
   * File-specific validation rules
   */
  validateFileSpecific(type, records, issues) {
    switch (type) {
      case "PTNT_INSTR":
        const gRecords = records.filter((r) => r.fields[4] === "G");
        const invalidG = gRecords.filter((r) => {
          const val = r.fields[10];
          return !val || val !== "POS" && val !== "NEG";
        });
        if (invalidG.length > 0) {
          issues.push({
            severity: "critical",
            message: "Antigen (G) records missing POS/NEG in field 11",
            field: 11,
            count: invalidG.length,
            samples: invalidG.slice(0, 5).map((r) => ({
              line: r.lineNumber,
              value: r.fields[10] || "(empty)"
            }))
          });
        }
        break;
      case "PTNT_CMT":
        const nullComments = records.filter((r) => !r.fields[3] || r.fields[3].trim() === "");
        if (nullComments.length > 0) {
          issues.push({
            severity: "critical",
            message: "CMT_TXT (field 4) is NULL - causes application errors",
            field: 4,
            count: nullComments.length
          });
        }
        break;
      case "UNIT":
        const transfused = records.filter((r) => r.fields[22] === "T");
        const missingPatient = transfused.filter((r) => !r.fields[31] || r.fields[31].trim() === "");
        if (missingPatient.length > 0) {
          issues.push({
            severity: "critical",
            message: "Transfused units (Status=T) missing patient IPN in field 32",
            field: 32,
            count: missingPatient.length
          });
        }
        break;
      case "SPEC_ATTR":
        const missingAddDttm = records.filter((r) => !r.fields[8] || r.fields[8].trim() === "");
        if (missingAddDttm.length > 0) {
          issues.push({
            severity: "critical",
            message: "ADD_DTTM (field 9) is required - records won't load without it",
            field: 9,
            count: missingAddDttm.length
          });
        }
        const missingAddTech = records.filter((r) => !r.fields[9] || r.fields[9].trim() === "");
        if (missingAddTech.length > 0) {
          issues.push({
            severity: "critical",
            message: "ADD_TECH_ID (field 10) is required - records won't load without it",
            field: 10,
            count: missingAddTech.length
          });
        }
        const invalidValid = records.filter((r) => r.fields[11] !== "Y");
        if (invalidValid.length > 0) {
          issues.push({
            severity: "warning",
            message: 'VALID_FLG (field 12) should be "Y" for all records',
            field: 12,
            count: invalidValid.length
          });
        }
        break;
    }
  }
  // ============================================================================
  // Cross-File Validation
  // ============================================================================
  /**
   * Validate relationships between files (foreign key checks)
   */
  validateCrossFile(parsedFiles) {
    const results = [];
    if (!this.specs.crossFileRules)
      return results;
    for (const rule of this.specs.crossFileRules) {
      const sourceData = parsedFiles.get(rule.sourceFile);
      const targetData = parsedFiles.get(rule.targetFile);
      if (!sourceData || !targetData)
        continue;
      const targetValues = new Set(targetData.records.map((r) => r.fields[rule.targetField - 1]));
      let sourceRecords = sourceData.records;
      if (rule.condition) {
        sourceRecords = sourceRecords.filter((r) => r.fields[rule.condition.field - 1] === rule.condition.value);
      }
      const orphans = sourceRecords.filter((r) => {
        const value = r.fields[rule.sourceField - 1];
        return value && !targetValues.has(value);
      });
      const total = sourceRecords.length;
      const valid = total - orphans.length;
      const percentage = total > 0 ? Math.round(valid / total * 100) : 100;
      results.push({
        rule: rule.name,
        description: rule.description,
        sourceFile: rule.sourceFile,
        targetFile: rule.targetFile,
        total,
        valid,
        orphans: orphans.length,
        percentage,
        severity: orphans.length > 0 ? rule.severity : "ok",
        samples: orphans.slice(0, 5).map((r) => ({
          line: r.lineNumber,
          value: r.fields[rule.sourceField - 1]
        }))
      });
    }
    return results;
  }
  // ============================================================================
  // Main Validation Entry Point
  // ============================================================================
  /**
   * Validate all files and return complete results
   */
  validateAll(parsedFiles) {
    const results = {
      files: /* @__PURE__ */ new Map(),
      crossFile: [],
      totalRecords: 0,
      criticalIssues: [],
      warnings: [],
      overallStatus: "PASS",
      timestamp: /* @__PURE__ */ new Date()
    };
    parsedFiles.forEach((data, type) => {
      const fileResult = this.validateFile(type, data);
      results.files.set(type, fileResult);
      results.totalRecords += data.records.length;
      fileResult.issues.filter((i) => i.severity === "critical").forEach((issue) => {
        results.criticalIssues.push(__spreadValues({ file: type }, issue));
      });
      fileResult.issues.filter((i) => i.severity === "warning").forEach((issue) => {
        results.warnings.push(__spreadValues({ file: type }, issue));
      });
      if (fileResult.status === "FAIL")
        results.overallStatus = "FAIL";
      else if (fileResult.status === "WARN" && results.overallStatus !== "FAIL") {
        results.overallStatus = "WARN";
      }
    });
    results.crossFile = this.validateCrossFile(parsedFiles);
    if (results.crossFile.some((r) => r.severity === "error")) {
      results.overallStatus = "FAIL";
      results.crossFile.filter((r) => r.severity === "error").forEach((issue) => {
        results.criticalIssues.push({
          file: issue.sourceFile,
          severity: "critical",
          message: issue.rule,
          field: null,
          count: issue.orphans
        });
      });
    }
    return results;
  }
  // ============================================================================
  // Utility Methods
  // ============================================================================
  /**
   * Create a ParsedFile from filename and content
   */
  createParsedFile(filename, content) {
    const fileType = this.matchFileToSpec(filename);
    if (!fileType)
      return null;
    return {
      filename,
      content,
      records: this.parseRecords(content),
      spec: this.specs.files[fileType]
    };
  }
  /**
   * Get validation summary from results
   */
  getValidationSummary(results) {
    return {
      overallStatus: results.overallStatus,
      totalRecords: results.totalRecords,
      criticalCount: results.criticalIssues.length,
      warningCount: results.warnings.length,
      filesProcessed: results.files.size,
      timestamp: results.timestamp.toLocaleString()
    };
  }
  static \u0275fac = function ValidationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ValidationService, factory: _ValidationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.ts
function App_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Validating files...");
    \u0275\u0275elementEnd()()();
  }
}
function App_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 19)(5, "strong");
    \u0275\u0275text(6, "Validation Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function App_Conditional_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearResults());
    });
    \u0275\u0275text(10, " Dismiss ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.validationError());
  }
}
function App_Conditional_15_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-file-detail", 27);
  }
  if (rf & 2) {
    const fileType_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("fileType", fileType_r4)("fileResult", ctx_r1.getFileResult(fileType_r4))("filename", ctx_r1.getFilename(fileType_r4));
  }
}
function App_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275listener("click", function App_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearResults());
    });
    \u0275\u0275text(2, " Clear Results / Start Over ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "app-results-summary", 23)(4, "app-critical-issues", 24);
    \u0275\u0275elementStart(5, "section", 25)(6, "h2", 26);
    \u0275\u0275text(7, "File-by-File Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, App_Conditional_15_For_9_Template, 1, 3, "app-file-detail", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("results", ctx_r1.validationResults());
    \u0275\u0275advance();
    \u0275\u0275property("criticalIssues", ctx_r1.criticalIssues())("crossFileErrors", ctx_r1.crossFileErrors());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.fileTypes());
  }
}
function App_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "h2");
    \u0275\u0275text(2, "Validation Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, " Results will appear here after files are selected and validated. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 30);
    \u0275\u0275element(8, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Select files to begin validation");
    \u0275\u0275elementEnd()()();
  }
}
var App = class _App {
  // Clinical Office MPage service - MUST be injected and initialized
  MPage = inject(MPageService);
  // Application services
  fileBrowserService = inject(FileBrowserService);
  validationService = inject(ValidationService);
  // Version displayed in header subtitle
  appVersion = buildVersion;
  // Reactive state using Angular signals
  _isValidating = signal(false, ...ngDevMode ? [{ debugName: "_isValidating" }] : []);
  _validationResults = signal(null, ...ngDevMode ? [{ debugName: "_validationResults" }] : []);
  _validationError = signal(null, ...ngDevMode ? [{ debugName: "_validationError" }] : []);
  _selectedFilenames = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "_selectedFilenames" }] : []);
  // Public readonly state
  isValidating = this._isValidating.asReadonly();
  validationResults = this._validationResults.asReadonly();
  validationError = this._validationError.asReadonly();
  // Computed values
  hasResults = computed(() => this._validationResults() !== null, ...ngDevMode ? [{ debugName: "hasResults" }] : []);
  fileTypes = computed(() => {
    const results = this._validationResults();
    if (!results)
      return [];
    return Array.from(results.files.keys());
  }, ...ngDevMode ? [{ debugName: "fileTypes" }] : []);
  criticalIssues = computed(() => {
    return this._validationResults()?.criticalIssues ?? [];
  }, ...ngDevMode ? [{ debugName: "criticalIssues" }] : []);
  crossFileErrors = computed(() => {
    const results = this._validationResults();
    if (!results)
      return [];
    return results.crossFile.filter((r) => r.severity === "error");
  }, ...ngDevMode ? [{ debugName: "crossFileErrors" }] : []);
  ngOnInit() {
    this.MPage.setMaxInstances(2, true, "ORGANIZER", false);
    this.MPage.defaultDateFormats = CUSTOM_DATE_FORMATS;
    this.detectNetworkAndInitialize();
  }
  /**
   * Detect network availability by waiting for serviceReady with 3-second timeout.
   * setMaxInstances() internally calls ping(), so serviceReady becoming true
   * means we have a working CCL connection.
   */
  async detectNetworkAndInitialize() {
    const startTime = Date.now();
    const TIMEOUT_MS = 3e3;
    while (!this.MPage.serviceReady) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (Date.now() - startTime >= TIMEOUT_MS) {
        break;
      }
    }
    const isOnline = this.MPage.serviceReady;
    if (isOnline) {
      this.fileBrowserService.enableOnlineMode();
    } else {
      this.fileBrowserService.enableOfflineMode();
    }
  }
  /**
   * Handle file validation request from file browser component
   */
  async onValidateFiles(selectedFiles) {
    this._isValidating.set(true);
    this._validationResults.set(null);
    this._validationError.set(null);
    this._selectedFilenames.set(/* @__PURE__ */ new Map());
    try {
      const parsedFiles = /* @__PURE__ */ new Map();
      const filenameMap = /* @__PURE__ */ new Map();
      const directory = this.fileBrowserService.directory();
      for (const file of selectedFiles) {
        const fileType = this.validationService.matchFileToSpec(file.filename);
        if (!fileType) {
          continue;
        }
        let content;
        if (this.fileBrowserService.offlineMode() && file.content) {
          content = file.content;
        } else {
          content = await this.readFileAsync(directory, file.filename);
        }
        if (content === null) {
          continue;
        }
        const parsedFile = this.validationService.createParsedFile(file.filename, content);
        if (parsedFile) {
          parsedFiles.set(fileType, parsedFile);
          filenameMap.set(fileType, file.filename);
        }
      }
      if (parsedFiles.size === 0) {
        this._validationError.set("No valid extract files could be loaded");
        this._isValidating.set(false);
        return;
      }
      const results = this.validationService.validateAll(parsedFiles);
      this._validationResults.set(results);
      this._selectedFilenames.set(filenameMap);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error during validation";
      this._validationError.set(errorMsg);
    }
    this._isValidating.set(false);
  }
  /**
   * Read file content asynchronously via CCL or mock
   */
  readFileAsync(directory, filename) {
    return new Promise((resolve) => {
      if (this.fileBrowserService.offlineMode()) {
        resolve(this.getMockFileContent(filename));
      } else {
        this.fileBrowserService.readFile(directory, filename, (content, error) => {
          if (error) {
            resolve(null);
          } else {
            resolve(content);
          }
        });
      }
    });
  }
  /**
   * Get mock file content for local development/demo
   */
  getMockFileContent(filename) {
    const name = filename.toLowerCase();
    if (name.includes("ptnt_cmt")) {
      return [
        "1|MRN001|FT|Patient has history of transfusion reactions|Y|TECH01|01/15/2026 10:30|||||",
        "2|MRN002|FT|Prefers irradiated products|N|TECH02|01/14/2026 14:22|||||",
        "3|MRN003|FT|CMV negative products required|Y|TECH01|01/13/2026 09:15|||||"
      ].join("\r\n");
    }
    if (name.includes("ptnt_instr")) {
      return [
        "1|MRN001|ANTI-K|Anti-K Antibody|A|N|01/10/2026 08:00||Dr. Smith|TECH01||||||",
        "2|MRN002|K|K Antigen|G|N|01/12/2026 11:30|||TECH02|POS|||||",
        "3|MRN003|IRR|Irradiated Products|S|N|01/11/2026 15:45||Dr. Jones|TECH01||||||"
      ].join("\r\n");
    }
    if (name.includes("unit_cmt")) {
      return [
        "101|101|W123456789012|PRBC|FT|Segment attached|N|TECH01|01/15/2026 08:00|||||",
        "102|102|W123456789013|PLT|FT|Special testing required|Y|TECH02|01/14/2026 16:30|||||",
        "103|103|W123456789014|FFP|FT|Extended storage approved|N|TECH01|01/13/2026 12:15|||||"
      ].join("\r\n");
    }
    if (name.includes("spec_attr")) {
      return [
        "101|101|W123456789012|PRBC|K-|K Negative|AG|Antigen|01/10/2026 08:00|TECH01|0|Y||",
        "102|102|W123456789013|PLT|IRR|Irradiated|SA|Special Attribute|01/11/2026 09:30|TECH02||Y||",
        "103|103|W123456789014|FFP|CMV-|CMV Negative|SA|Special Attribute|01/12/2026 10:45|TECH01||Y||"
      ].join("\r\n");
    }
    if (name.includes("unit")) {
      return [
        "101|101|MAIN|01/01/2026 08:00|TECH01|REDCROSS|V|ALLOGENEIC|W123456789012|W123456789012|PRBC|A|POS||01/01/2026 06:00|02/01/2026 23:59|300|||||||T|01/15/2026 10:30||||||MAIN|1|MRN001|||||||||||||||||||||||||||||||||",
        "102|102|MAIN|01/02/2026 09:00|TECH02|LOCAL|A|AUTOLOGOUS|W123456789013|W123456789013|PLT|O|NEG||01/02/2026 07:00|01/07/2026 23:59|250|||A|2|MRN002|||D|01/10/2026 14:00|EXP|Expired||||||||||||||||||||||||||||||||||||",
        "103|103|MAIN|01/03/2026 10:00|TECH01|REDCROSS|D|DIRECTED|W123456789014|W123456789014|FFP|B|POS||01/03/2026 08:00|02/03/2026 23:59|200|||D|3|MRN003|||T|01/12/2026 16:45||||||MAIN|3|MRN003|||||||||||||||||||||||||||||||||"
      ].join("\r\n");
    }
    if (name.includes("ptnt")) {
      return [
        "1||MRN001|Smith|John|William||01/15/1980 00:00||M|Male|W|White|||123 Main St||Anytown|CA|12345|US|555-1234||A|POS|NEG||ADM001|MAIN||||||||01/01/2026 08:00|01/05/2026 09:00||||||||||||||||||||||||||||||||||||||",
        "2||MRN002|Johnson|Jane|Marie||03/22/1975 00:00||F|Female|B|Black|||456 Oak Ave|Apt 2|Somewhere|TX|67890|US|555-5678||O|NEG|POS|01/10/2026 14:00|ADM002|MAIN||||||||12/15/2025 10:00|01/10/2026 08:00||||||||||||||||||||||||||||||||||||||",
        "3||MRN003|Williams|Robert|Lee||07/04/1990 00:00||M|Male|A|Asian|||789 Pine Rd||Elsewhere|NY|11111|US|555-9999||B|POS|||ADM003|MAIN||||||||01/03/2026 07:30|||||||||||||||||||||||||||||||||||||||"
      ].join("\r\n");
    }
    return "";
  }
  /**
   * Get filename for a file type from validation
   */
  getFilename(fileType) {
    return this._selectedFilenames().get(fileType) ?? "";
  }
  /**
   * Get file result for a specific file type
   */
  getFileResult(fileType) {
    return this._validationResults()?.files.get(fileType) ?? null;
  }
  /**
   * Clear validation results and start over
   */
  clearResults() {
    this._validationResults.set(null);
    this._validationError.set(null);
    this._selectedFilenames.set(/* @__PURE__ */ new Map());
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 23, vars: 5, consts: [[1, "header"], [1, "header-content"], [1, "header-title"], [1, "header-subtitle"], [1, "main-content"], [1, "card", "file-browser-section"], [1, "description"], [3, "validateFiles"], [1, "card", "loading-section"], [1, "card", "error-section"], [1, "card", "results-placeholder"], [1, "footer"], [1, "footer-content"], [1, "loading-container"], [1, "spinner"], [1, "loading-text"], [1, "error-banner"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "error-icon"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "error-content"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "results-actions"], [1, "btn", "btn-secondary", 3, "click"], [3, "results"], [3, "criticalIssues", "crossFileErrors"], [1, "file-details-section"], [1, "section-title"], [3, "fileType", "fileResult", "filename"], [1, "placeholder-content"], [1, "placeholder-icon"], ["viewBox", "0 0 24 24", "width", "48", "height", "48", "stroke", "currentColor", "fill", "none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "WellSky Blood Bank Extract Validator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "main", 4)(7, "section", 5)(8, "h2");
      \u0275\u0275text(9, "Select Extract Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, " Choose extract files from the backend node to validate against WellSky DCU 4.0 specifications. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-file-browser", 7);
      \u0275\u0275listener("validateFiles", function App_Template_app_file_browser_validateFiles_12_listener($event) {
        return ctx.onValidateFiles($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, App_Conditional_13_Template, 5, 0, "section", 8);
      \u0275\u0275conditionalCreate(14, App_Conditional_14_Template, 11, 1, "section", 9);
      \u0275\u0275conditionalCreate(15, App_Conditional_15_Template, 10, 3);
      \u0275\u0275conditionalCreate(16, App_Conditional_16_Template, 11, 0, "section", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "mpage-log-component");
      \u0275\u0275elementStart(18, "footer", 11)(19, "div", 12)(20, "span");
      \u0275\u0275text(21, "WellSky DCU 4.0 Extract Validator | MPage Edition");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "app-app-version");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("DCU 4.0 Specification Compliance Checker - MPage Edition (", ctx.appVersion, ")");
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isValidating() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationError() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasResults() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hasResults() && !ctx.isValidating() && !ctx.validationError() ? 16 : -1);
    }
  }, dependencies: [
    MpageLogComponent,
    AppVersion,
    FileBrowserComponent,
    ResultsSummaryComponent,
    CriticalIssuesComponent,
    FileDetailComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background-color: #f3f4f6;\n}\n.header[_ngcontent-%COMP%] {\n  background-color: #1e40af;\n  color: white;\n  padding: 1.5rem 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: 0 auto;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  color: #bfdbfe;\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n}\n.main-content[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 1.5rem 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 1rem;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 1rem 0;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border: none;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8125rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #16a34a;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #15803d;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.selected-files[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.selected-files[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.selected-files.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.loading-section[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.loading-section[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-section[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n.error-section[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #dc2626;\n  flex-shrink: 0;\n}\n.error-section[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-section[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #991b1b;\n  margin-bottom: 0.25rem;\n}\n.error-section[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f1d1d;\n  font-size: 0.875rem;\n}\n.results-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.file-details-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.results-placeholder[_ngcontent-%COMP%]   .placeholder-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #9ca3af;\n}\n.results-placeholder[_ngcontent-%COMP%]   .placeholder-content[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.results-placeholder[_ngcontent-%COMP%]   .placeholder-content[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.results-placeholder[_ngcontent-%COMP%]   .placeholder-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: #1f2937;\n  color: #9ca3af;\n  padding: 1rem;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 2rem;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  max-width: 80rem;\n  margin: 0 auto;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      MpageLogComponent,
      AppVersion,
      FileBrowserComponent,
      ResultsSummaryComponent,
      CriticalIssuesComponent,
      FileDetailComponent
    ], standalone: true, template: '<!-- Header -->\n<header class="header">\n  <div class="header-content">\n    <h1 class="header-title">WellSky Blood Bank Extract Validator</h1>\n    <p class="header-subtitle">DCU 4.0 Specification Compliance Checker - MPage Edition ({{ appVersion }})</p>\n  </div>\n</header>\n\n<!-- Main Content -->\n<main class="main-content">\n\n  <!-- File Browser Section -->\n  <section class="card file-browser-section">\n    <h2>Select Extract Files</h2>\n    <p class="description">\n      Choose extract files from the backend node to validate against WellSky DCU 4.0 specifications.\n    </p>\n    <app-file-browser (validateFiles)="onValidateFiles($event)" />\n  </section>\n\n  <!-- Validation Loading State -->\n  @if (isValidating()) {\n    <section class="card loading-section">\n      <div class="loading-container">\n        <div class="spinner"></div>\n        <span class="loading-text">Validating files...</span>\n      </div>\n    </section>\n  }\n\n  <!-- Validation Error -->\n  @if (validationError()) {\n    <section class="card error-section">\n      <div class="error-banner">\n        <svg class="error-icon" viewBox="0 0 20 20" fill="currentColor">\n          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\n        </svg>\n        <div class="error-content">\n          <strong>Validation Error</strong>\n          <p>{{ validationError() }}</p>\n        </div>\n        <button class="btn btn-secondary btn-sm" (click)="clearResults()">\n          Dismiss\n        </button>\n      </div>\n    </section>\n  }\n\n  <!-- Results Section (only show when results exist) -->\n  @if (hasResults()) {\n    <!-- Clear Results Button -->\n    <div class="results-actions">\n      <button class="btn btn-secondary" (click)="clearResults()">\n        Clear Results / Start Over\n      </button>\n    </div>\n\n    <!-- Executive Summary -->\n    <app-results-summary [results]="validationResults()" />\n\n    <!-- Critical Issues Banner -->\n    <app-critical-issues\n      [criticalIssues]="criticalIssues()"\n      [crossFileErrors]="crossFileErrors()" />\n\n    <!-- File-by-File Details -->\n    <section class="file-details-section">\n      <h2 class="section-title">File-by-File Analysis</h2>\n      @for (fileType of fileTypes(); track fileType) {\n        <app-file-detail\n          [fileType]="fileType"\n          [fileResult]="getFileResult(fileType)"\n          [filename]="getFilename(fileType)" />\n      }\n    </section>\n  }\n\n  <!-- Results Placeholder (only show when no results and not loading) -->\n  @if (!hasResults() && !isValidating() && !validationError()) {\n    <section class="card results-placeholder">\n      <h2>Validation Results</h2>\n      <p class="description">\n        Results will appear here after files are selected and validated.\n      </p>\n      <div class="placeholder-content">\n        <div class="placeholder-icon">\n          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>\n          </svg>\n        </div>\n        <p>Select files to begin validation</p>\n      </div>\n    </section>\n  }\n\n</main>\n\n<!-- Clinical Office Debug Log (visible in Cerner) -->\n<mpage-log-component />\n\n<!-- Footer -->\n<footer class="footer">\n  <div class="footer-content">\n    <span>WellSky DCU 4.0 Extract Validator | MPage Edition</span>\n    <app-app-version />\n  </div>\n</footer>\n', styles: ["/* src/app/app.scss */\n:host {\n  display: block;\n  min-height: 100vh;\n  background-color: #f3f4f6;\n}\n.header {\n  background-color: #1e40af;\n  color: white;\n  padding: 1.5rem 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  max-width: 80rem;\n  margin: 0 auto;\n}\n.header-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.header-subtitle {\n  color: #bfdbfe;\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n}\n.main-content {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 1.5rem 1rem;\n}\n.card {\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.card h2 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 1rem;\n}\n.card .description {\n  color: #6b7280;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 1rem 0;\n}\n.button-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border: none;\n}\n.btn-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8125rem;\n}\n.btn-primary {\n  background-color: #2563eb;\n  color: white;\n}\n.btn-primary:hover {\n  background-color: #1d4ed8;\n}\n.btn-success {\n  background-color: #16a34a;\n  color: white;\n}\n.btn-success:hover {\n  background-color: #15803d;\n}\n.btn-secondary {\n  background-color: #6b7280;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n.btn-secondary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.file-input {\n  display: none;\n}\n.selected-files {\n  margin-top: 1rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.selected-files .label {\n  font-weight: 500;\n}\n.selected-files.hidden {\n  display: none;\n}\n.loading-section .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.loading-section .loading-text {\n  margin-top: 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-section .error-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n.error-section .error-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #dc2626;\n  flex-shrink: 0;\n}\n.error-section .error-content {\n  flex: 1;\n}\n.error-section .error-content strong {\n  display: block;\n  color: #991b1b;\n  margin-bottom: 0.25rem;\n}\n.error-section .error-content p {\n  margin: 0;\n  color: #7f1d1d;\n  font-size: 0.875rem;\n}\n.results-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.file-details-section {\n  margin-top: 1.5rem;\n}\n.results-placeholder .placeholder-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: #9ca3af;\n}\n.results-placeholder .placeholder-content .placeholder-icon {\n  margin-bottom: 1rem;\n}\n.results-placeholder .placeholder-content .placeholder-icon svg {\n  color: #d1d5db;\n}\n.results-placeholder .placeholder-content p {\n  margin: 0;\n}\n.footer {\n  background-color: #1f2937;\n  color: #9ca3af;\n  padding: 1rem;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 2rem;\n}\n.footer .footer-content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  max-width: 80rem;\n  margin: 0 auto;\n}\n.hidden {\n  display: none !important;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 40 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
