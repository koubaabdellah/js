"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (!utilitiesChecksum) var utilitiesChecksum = '898b11afb72bd20376132edcfb82fe769de84a3b6a4ca5f5cc777f5a5e61ed30';
/* Polyfill(s) */

if (!Object.values) {
  Object.values = function values(O) {
    return Object.keys(O).reduce(function (v, k) {
      return v.concat(typeof k === 'string' && O.propertyIsEnumerable(k) ? [O[k]] : []);
    }, []);
  };
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}

if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function value(search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    }
  });
}
/*
 * Utility functions for measuring InVision feature success
 *
 * Do more of what works for users, less of what doesn't!
 *
 */

/*
 * Initialize libraries
 *
 */


!function () {
  // Do not reinitialize utilities more than once
  if (window.measure && window.measure.fullyLoaded) {
    return;
  }

  var runningInAppShellContext = function runningInAppShellContext() {
    return window.inGlobalContext && window.inGlobalContext.appShell;
  };

  var appShell = runningInAppShellContext() ? window.inGlobalContext.appShell : null; // app shell handles pulling in utilities on behalf of features. But there are some
  // features (such as inbox) that pulls utilities into the frame again. This creates
  // a race condition for the async loaded utilities at the root frame level and the
  // one pulled in by other tools. In the appShell context, should never run if injected within
  // the app shell context

  if (appShell && appShell.frameManager && appShell.frameManager.getFeatureFrameByWindow) {
    var currentFrameIsFeatureFrame = !!window.inGlobalContext.appShell.frameManager.getFeatureFrameByWindow(self);

    if (currentFrameIsFeatureFrame) {
      return;
    }
  } // Initialize Measure


  var measure = window.measure = window.measure || {};
  measure.queue = measure.queue || [];
  measure.identifyAttempted = measure.identifyAttempted || false; // mark that the utilities measure library has been fully loaded
  // and any subsequent loads should reuse the window.measure that already exists

  measure.fullyLoaded = true; // mark that the utilities measure library has NOT called the Segment page method

  measure.pageMethodFired = false;
  measure.origin = '';

  measure.setOrigin = function (origin) {
    measure.origin = origin;
    init();
  };

  measure.customSegmentKey = null;

  measure.initializeSegment = function (key) {
    if (key) {
      measure.customSegmentKey = key;
    }
  };

  var segmentLoadCalled = false;
  var segmentMethodQueue = [];
  var propsToAppend = {};

  function stampProps(rawProps) {
    var result = {};

    if (rawProps && _typeof(rawProps) === "object") {
      result = Object.assign({}, rawProps);
    }

    if (!result.teamId) {
      result.teamId = traitUtils.traits && traitUtils.traits.teamId ? traitUtils.traits.teamId : '';
    }

    if (!result.invisionVersion && traitUtils.context && traitUtils.context.invisionVersion) {
      result.invisionVersion = traitUtils.context.invisionVersion;
    }

    if (!result.invisionEnv && traitUtils.context && traitUtils.context.invisionEnv) {
      result.invisionEnv = traitUtils.context.invisionEnv;
    }

    if (!result.invisionTier && traitUtils.context && traitUtils.context.invisionTier) {
      result.invisionTier = traitUtils.context.invisionTier;
    }

    if (!result.invisionNamespace && traitUtils.context && traitUtils.context.invisionNamespace) {
      result.invisionNamespace = traitUtils.context.invisionNamespace;
    }

    if (!result.analyticsUIVersion) {
      result.analyticsUIVersion = utilitiesChecksum;
    }

    if (!result.planName && traitUtils.traits) {
      result.planName = traitUtils.traits.planName;
    }

    if (!result.isFirstFreehandVisit && traitUtils.traits && traitUtils.traits.isFirstFreehandVisit) {
      result.isFirstFreehandVisit = traitUtils.traits.isFirstFreehandVisit;
    }

    if (!result.createdFreehandCount && traitUtils.traits && traitUtils.traits.createdFreehandCount) {
      result.createdFreehandCount = traitUtils.traits.createdFreehandCount;
    }

    if (!result.isFreehandCreator && traitUtils.traits && traitUtils.traits.isFreehandCreator) {
      result.isFreehandCreator = traitUtils.traits.isFreehandCreator;
    }

    result.featureName = window.rum ? window.rum.config().appName : window.inGlobalContext && window.inGlobalContext.appMetaData ? window.inGlobalContext.appMetaData.appName : 'unknown';
    return result;
  } // queue lower priority work to allow
  // more important logic to run - avoiding issues
  // where analytics-ui causes poor frame rate
  // and responsiveness on the apps because of it's
  // slow processing time.


  var idleCBQueue = [];

  var flushIdleCBQueue = function flushIdleCBQueue() {
    var cb;

    while (cb = idleCBQueue.shift()) {
      cb && cb();
    }
  };

  var whenIdle = function whenIdle(cb) {
    if (window.__isTesting__) {
      return cb();
    }

    idleCBQueue.push(cb); // schedule a single handler to
    // process everything queued up

    if (idleCBQueue.length === 1) {
      if (window.requestIdleCallback) {
        // defer this work until the cpu is free or 2000ms
        window.requestIdleCallback(flushIdleCBQueue, {
          timeout: 2000
        });
      } else {
        // for safari, we can't pause waiting for
        // cpu to be free, so we will defer to a reasonable
        // amount of time for the primary work to complete
        // then work within the next frame
        setTimeout(function () {
          if (window.requestAnimationFrame) {
            requestAnimationFrame(flushIdleCBQueue);
          } else {
            flushIdleCBQueue();
          }
        }, 300);
      }
    }
  };

  function gaTracker(id, options) {
    var tracker = gaTracker[id];
    if (tracker) return tracker;
    ga('create', Object.assign({
      trackingId: id,
      cookieDomain: 'auto',
      hostname: window.location.hostname
    }, options));
    return gaTracker[id] = function () {
      var name = options.name;
      var args = Array.prototype.slice.call(arguments);
      if (name) name += '.' + args.shift();
      args.unshift(name);
      ga.apply(window, args);
    };
  }

  function callGaMethod() {
    if (!window.ga || measure.isEnvironmentDenyListed() || !StorageConsent.canRunFunctionalScripts()) {
      return;
    }

    var args = Array.prototype.slice.call(arguments);
    var tracker = gaTracker('UA-24306919-1', {
      name: 'dashOneTracker'
    });
    tracker.apply(null, args);
  }

  function analyticsMethodCall(method, args) {
    try {
      return window.analytics[method].apply(window.analytics, args);
    } catch (e) {
      console.error('utilities.js to analytics.js call error when calling method', method, e);
      return null;
    }
  }

  function callSegmentMethod(name) {
    if (measure.isEnvironmentDenyListed()) {
      // Don't send events in these environments
      return;
    } else if (window.analytics && typeof window.analytics[name] === 'function') {
      // Pass all arguments after 'name' to the Segment method
      var args = Array.prototype.slice.call(arguments, 1);

      if (!segmentLoadCalled) {
        // queue all attempts to use segment until load is called
        // this is needed because load decides what integrations can be
        // used based on consent and we can't rely on their internal
        // buffer for this because some integrations are being invoked
        // before consent is provided
        if (name !== 'load') {
          segmentMethodQueue.push({
            name: name,
            args: args
          });
        } else if (name === 'load') {
          segmentLoadCalled = true;
          analyticsMethodCall(name, args);
          whenIdle(function () {
            // flush the queue of events that were attempted before load called
            var analyticsMethod;

            while (analyticsMethod = segmentMethodQueue.shift()) {
              analyticsMethodCall(analyticsMethod.name, analyticsMethod.args);
            }
          });
        }

        return;
      } // Avoiding multiple load calls which seems to introduce Appboy initialization error


      if (segmentLoadCalled && name === 'load') {
        return;
      }

      return name === 'user' ? analyticsMethodCall(name, args) : whenIdle(function () {
        return analyticsMethodCall(name, args);
      });
    } else {// TODO: Log error
    }
  }

  measure.collect = function (name, props, options) {
    // Check if we've tried to identify the user yet. If not, queue this event.
    if (!measure.identifyAttempted) {
      var args = Array.prototype.slice.call(arguments);
      args.unshift('collect');
      measure.queue.push(args);
      return;
    }

    var user = callSegmentMethod('user'); // Check if segmentUserId matches Segment cookie ID. If a user is using
    // multiple Invision environments in the same browser, their Segment cookie
    // can change mid-session based on where they were last identified. We want
    // to compare the current Segment cookie ID to the one we determined for the
    // user on load of this script, and re-set it if they differ.

    if (user && measure.segmentUserId && measure.segmentUserId != user.id()) {
      measure.identify(measure.segmentUserId);
    } // append any custom props


    var extendedProps = Object.assign({}, propsToAppend, props);
    var stampedProps = stampProps(extendedProps);
    var optionsIntegrations = Object.assign({}, options);
    var optedOutOfAmplitude = optionsIntegrations.integrations && (optionsIntegrations.integrations.All === false || optionsIntegrations.integrations.Amplitude === false);

    if (stampedProps.teamId && !optedOutOfAmplitude) {
      // Set the event group level for Amplitude // https://segment.com/docs/destinations/amplitude/#setting-event-level-groups-via-track-
      optionsIntegrations.integrations = Object.assign(optionsIntegrations.integrations || {}, {
        'Amplitude': {
          'groups': {
            'teamId': stampedProps.teamId
          }
        }
      });
    }

    if (stampedProps.invisionVersion !== '7.0' || !user || !user.id() || user.id() == "") {
      optionsIntegrations.integrations = Object.assign(optionsIntegrations.integrations || {}, {
        'Appboy': false
      });
    } // fire events to segment and all integrations


    callSegmentMethod('track', name, stampedProps, optionsIntegrations); // As part of https://invisionapp.atlassian.net/browse/FH-195 we learned Segment can only forward events to
    // a single GA property. We are mirroring Segment -> GA mapping below to forward events to an additional
    // GA property IF we're in prod and IF the app is auth-ui.

    if (window.inGlobalContext && window.inGlobalContext.appShell) {
      var isAuth = window.inGlobalContext.appShell.currentApp.getFeatureContext().featureName === 'auth-ui';
      var isProd = ['multi-tenant', 'single-tenant'].indexOf(window.inGlobalContext.appShell.currentApp.getFeatureContext().envContext.tier) > -1;

      if (isAuth && isProd) {
        callGaMethod('send', {
          hitType: 'event',
          eventCategory: stampedProps.category || 'All',
          eventAction: name,
          eventLabel: stampedProps.label
        });
      }
    }
  };

  var traitUtils = {};
  traitUtils.traits = null;

  traitUtils.setTraits = function (traits) {
    traitUtils.traits = traits;
  };

  traitUtils.context = null;

  traitUtils.setContext = function (context) {
    traitUtils.context = context;
  };

  traitUtils.requestInProgress = false;
  traitUtils.cbQueue = [];

  traitUtils.fetchTraits = function (callback) {
    callback = callback || function () {};

    traitUtils.cbQueue.push(callback);

    if (traitUtils.requestInProgress == true) {
      return;
    }

    traitUtils.requestInProgress = true;
    var url = measure.origin + '/measure/traits?credentials=include';
    var request = new window.XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status != 0) {
        if (request.status == 200) {
          try {
            var json = JSON.parse(request.responseText);

            if (json.context) {
              traitUtils.setContext(json.context);
            }

            if (json.traits) {
              traitUtils.setTraits(json.traits);
            }
          } catch (e) {// error handling?
          }
        } else {// error handling?
        }

        var cb;

        while (cb = traitUtils.cbQueue.shift()) {
          cb();
        }

        traitUtils.requestInProgress = false;
      }
    };

    var timeout = 5000;
    setTimeout(function (request, callback) {
      if (request.readyState != 4 || request.status == 0) {
        request.onreadystatechange = null;
        request.abort();
        measure.identifyAttempted = true;
        var cb;

        while (cb = traitUtils.cbQueue.shift()) {
          cb();
        }

        traitUtils.requestInProgress = false;
      }
    }, timeout, request, callback);
    request.open('GET', url, true);
    request.send();
  };

  var init = function init() {
    return traitUtils.fetchTraits(function () {
      if (traitUtils.context && traitUtils.context.allowExternalScripts === false) {
        console.log('Environment does not allow external scripts - abort initializing segment');
        return;
      } // Storage Consent Library
      // From storage-consent@8831f7c


      "use strict";

      function _defineProperty(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[b] = c, a;
      }

      function _slicedToArray(a, b) {
        return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(a, b) {
        if (a) {
          if ("string" == typeof a) return _arrayLikeToArray(a, b);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0;
        }
      }

      function _arrayLikeToArray(a, b) {
        (null == b || b > a.length) && (b = a.length);

        for (var c = 0, d = Array(b); c < b; c++) {
          d[c] = a[c];
        }

        return d;
      }

      function _iterableToArrayLimit(a, b) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) {
          var c = [],
              d = !0,
              e = !1,
              f = void 0;

          try {
            for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b)); d = !0) {
              ;
            }
          } catch (a) {
            e = !0, f = a;
          } finally {
            try {
              d || null == h["return"] || h["return"]();
            } finally {
              if (e) throw f;
            }
          }

          return c;
        }
      }

      function _arrayWithHoles(a) {
        if (Array.isArray(a)) return a;
      }

      (function () {
        var a,
            b = function b(a) {
          a = a.replace(/[[\]]/g, "\\$&");
          var b = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
              c = b.exec(window.location.href);
          return c ? c[2] ? decodeURIComponent(c[2].replace(/\+/g, " ")) : "" : null;
        },
            c = null !== b("enable-storage-consent-logger"),
            d = function d(a) {
          for (var b, d = arguments.length, e = Array(1 < d ? d - 1 : 0), f = 1; f < d; f++) {
            e[f - 1] = arguments[f];
          }

          return c ? (b = console).log.apply(b, ["[storage-consent] ".concat(a)].concat(e)) : void 0;
        },
            e = window.forceStorageConsentScript || null !== b("force-storage-consent-script"),
            f = b("override-storage-consent-domain");

        if (window.__storageConsentAdded) return void d("Library already initialized.");
        window.__storageConsentAdded = !0, "function" != typeof Object.assign && (Object.assign = function (a) {
          if (null == a) throw new TypeError("Cannot convert undefined or null to object");

          for (var b, c = Object(a), d = 1; d < arguments.length; d++) {
            if (b = arguments[d], null != b) for (var f in b) {
              b.hasOwnProperty(f) && (c[f] = b[f]);
            }
          }

          return c;
        }), "function" != typeof Object.entries && (Object.entries = function (a) {
          for (var b = Object.keys(a), c = b.length, d = Array(c); c--;) {
            d[c] = [b[c], a[b[c]]];
          }

          return d;
        }), Array.prototype.includes || (Array.prototype.includes = function (a) {
          if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
          var b = Object(this),
              c = parseInt(b.length, 10) || 0;
          if (0 === c) return !1;
          var d,
              e,
              f = parseInt(arguments[1], 10) || 0;

          for (0 <= f ? d = f : 0 > (d = c + f) && (d = 0); d < c;) {
            if (a === (e = b[d]) || a != a && e != e) return !0;
            d++;
          }

          return !1;
        });

        var g,
            h,
            i = function i(a) {
          return -1 < document.cookie.indexOf(a);
        },
            j = function j(a) {
          return (document.cookie.match(new RegExp("(^| )".concat(a, "=([^;]+)"))) || [])[2];
        },
            k = function k(a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 365,
              e = new Date();
          e.setTime(e.getTime() + 1e3 * (60 * (60 * (24 * c)))), document.cookie = "".concat(a, "=").concat(b, ";expires=").concat(e.toUTCString(), ";path=/");
        },
            l = function l() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.entries(a).map(function (a) {
            var b = _slicedToArray(a, 2),
                c = b[0],
                d = b[1];

            return "".concat(encodeURIComponent(c), "=").concat(encodeURIComponent(d));
          }).join("&");
        },
            m = function m() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
          return a.split("&").reduce(function (a, b) {
            var c = b.split("="),
                d = _slicedToArray(c, 2),
                e = d[0],
                f = d[1];

            return a[decodeURIComponent(e)] = decodeURIComponent(f), a;
          }, {});
        },
            n = {
          STRICTLY_NECESSARY_COOKIES: "C0001",
          PERFORMANCE_COOKIES: "C0002",
          FUNCTIONAL_COOKIES: "C0003",
          TARGETING_COOKIES: "C0004",
          SOCIAL_MEDIA_COOKIES: "C0005"
        },
            o = {
          REQUIRED: 1,
          FUNCTIONAL: 2,
          ADVERTISING: 3
        },
            p = (a = {}, _defineProperty(a, o.REQUIRED, [n.STRICTLY_NECESSARY_COOKIES]), _defineProperty(a, o.FUNCTIONAL, [n.PERFORMANCE_COOKIES, n.FUNCTIONAL_COOKIES]), _defineProperty(a, o.ADVERTISING, [n.TARGETING_COOKIES, n.SOCIAL_MEDIA_COOKIES]), a),
            q = {
          "clearbrain.com": o.FUNCTIONAL,
          "facebook.com": o.ADVERTISING,
          "atdmt.com": o.ADVERTISING,
          "marketo.com": o.FUNCTIONAL,
          "google-analytics.com:": o.FUNCTIONAL,
          "hubspot.com": o.FUNCTIONAL,
          "madkuku.com": o.ADVERTISING,
          "twitter.com": o.ADVERTISING,
          "pendo.com": o.FUNCTIONAL,
          "hotjar.com": o.FUNCTIONAL,
          "amplitude.com": o.REQUIRED,
          "atlassian.net": o.REQUIRED,
          "bizible.com": o.FUNCTIONAL,
          "braze.com": o.FUNCTIONAL,
          "bugsnag.com": o.REQUIRED,
          "codepen.io": o.REQUIRED,
          "googleapis.com": o.REQUIRED,
          "google.com": o.REQUIRED,
          "googletagmanager.com": o.ADVERTISING,
          "launchdarkly.com": o.REQUIRED,
          "linkedin.com": o.ADVERTISING,
          "bizographics.com": o.ADVERTISING,
          "newrelic.com": o.REQUIRED,
          "pusher.com": o.REQUIRED,
          "pusherapp.com": o.REQUIRED,
          "segment.com": o.REQUIRED,
          "typekit.net": o.REQUIRED,
          "vimeo.com": o.REQUIRED,
          "webobserver.io": o.FUNCTIONAL,
          "wistia.com": o.REQUIRED,
          "wistia.net": o.REQUIRED,
          "youtube.com": o.REQUIRED,
          "zendesk.com": o.FUNCTIONAL,
          "zuora.com": o.REQUIRED
        },
            r = "inv-storage-consent",
            s = !1;

        try {
          if (!e) if (h = m(j(r)).consentModel, d("Consent model from the storage-consent cookie: ", h), h) {
            var t = "notice only" === h,
                u = i("OptanonAlertBoxClosed");

            if (d("Is the consent model notice only?", t), d("Was the alert box closed?", u), t || u) {
              d("We should be able to skip the OneTrust script. Validating the \"OptanonConsent\" cookie...");
              var v = m(j("OptanonConsent")),
                  w = v.groups,
                  x = void 0 === w ? "" : w,
                  y = x.split(",").filter(function (a) {
                return "1" === a.split(":")[1];
              }).map(function (a) {
                return a.split(":")[0];
              });
              y.includes(n.STRICTLY_NECESSARY_COOKIES) ? (d("The \"OptanonConsent\" cookie was validated successfully and we can skip the OneTrust script. Consented categories from the cookie:", y), g = y, s = !0) : d("The \"OptanonConsent\" cookie was not valid. Consented categories from the cookie:", y);
            }
          } else d("No storage-consent cookie with a valid consent model has been found so we will run the OneTrust script.");
        } catch (a) {
          console.error("Storage Consent - Unable to check if we can skip the OneTrust script initialization");
        }

        var z,
            A,
            B = top && self && top !== self,
            C = B || ["invisionapp_ima", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/76.0.3809.132 Mobile Safari/605.1.15", "InVisionStudio", "WebView"].some(function (a) {
          return -1 < window.navigator.userAgent.toLowerCase().indexOf(a.toLowerCase());
        }) || [/(IMA|IMI|IFI|CraftManager|InVisionStudio|Conv|FreehandTeams)(\s|\/)/gi, /(iPhone|iPod|iPad)(?!.*Safari)/gi, /Android.*(wv|\.0\.0\.0)/gi, /Linux; U; Android/gi].some(function (a) {
          return a.test(window.navigator.userAgent);
        }),
            D = {
          test: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js?cachebust=".concat(Date.now()),
          prod: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
        },
            E = {
          "designbetter.co": {
            test: "a15010c1-60be-42de-9ea7-ebb81d957e48-test",
            prod: "a15010c1-60be-42de-9ea7-ebb81d957e48"
          },
          "designdisruptors.com": {
            test: "5ad0f30b-3ec6-4887-8600-a377c9bc71cb-test",
            prod: "5ad0f30b-3ec6-4887-8600-a377c9bc71cb"
          },
          "invisionapp.com": {
            test: "d0d9132f-a6e0-4094-81da-798f2d0285d2-test",
            prod: "d0d9132f-a6e0-4094-81da-798f2d0285d2"
          },
          "invisionbeta.com": {
            test: "d0d9132f-a6e0-4094-81da-798f2d0285d2-test",
            prod: "d0d9132f-a6e0-4094-81da-798f2d0285d2-test"
          },
          "muz.li": {
            test: "7a37cfa3-f3ec-488e-8770-a46d01ff098a-test",
            prod: "7a37cfa3-f3ec-488e-8770-a46d01ff098a"
          },
          "switchtosketchapp.com": {
            test: "022a63af-f511-4079-bb8d-5ce5f524184e-test",
            prod: "022a63af-f511-4079-bb8d-5ce5f524184e"
          },
          "wake.com": {
            test: "6087eb17-e962-403c-a83d-ef62bbec6fec-test",
            prod: "6087eb17-e962-403c-a83d-ef62bbec6fec"
          }
        },
            F = !1;
        if (f) d("Overriding the domain with \"".concat(f, "\"")), z = f, A = "test";else {
          A = window.inGlobalContext && window.inGlobalContext.appMetaData && "testing" === window.inGlobalContext.appMetaData.tier ? "test" : "prod";
          var V = window.location.hostname || "";
          z = V.substring(V.lastIndexOf(".", V.lastIndexOf(".") - 1) + 1);
        }
        var G = D[A],
            H = E[z] && E[z][A];

        if (H || (console.warn("Storage-Consent - Cannot find a valid script domain ID for \"".concat(z, "\" - Skipping OneTrust script injection set Storage-Consent to ready immediately")), s = !0), !s && G && H) {
          d("Running the OneTrust script...");
          var W = document.createElement("script");
          W.src = G, W.setAttribute("data-domain-script", H), W.async = !0, (document.body || document.head).appendChild(W), window.OptanonWrapper = function () {
            if (C) {
              d("OneTrust banner was forced to hide because we're in an embedded context.");
              var a = document.querySelector("#onetrust-consent-sdk");
              a && (a.style.display = "none");
            }

            if (s = !0, g = (window.OnetrustActiveGroups || "").split(",").filter(function (a) {
              return !!a;
            }), !F) {
              d("OneTrust is ready.");

              try {
                J.forEach(function (a) {
                  return a();
                });
              } catch (a) {
                console.error("StorageContent - error while running the consent level ready callbacks", a);
              }

              F = !0;
              var b = window.Optanon && window.Optanon.GetDomainData && window.Optanon.GetDomainData();
              h = b && b.ConsentModel && b.ConsentModel.Name, h && (k(r, l({
                consentModel: h
              })), d("Created a cookie with the \"consentModel\" info."));
            } else {
              d("OneTrust consent changed.");

              try {
                L.forEach(function (a) {
                  return a();
                });
              } catch (a) {
                console.error("StorageContent - error while running the consent level change callbacks", a);
              }
            }
          };
        }

        var I,
            J = [],
            K = function K(a) {
          s && setTimeout(a, 15), J.push(a);
        },
            L = [],
            M = function M(a) {
          var b = p[a] || [];
          return !!(g && g.find(function (a) {
            return b.includes(a);
          }));
        },
            N = function N() {
          return g;
        },
            O = function O() {
          return h;
        },
            P = function P() {
          return z;
        },
            Q = function Q() {
          return A;
        },
            R = function R() {
          return h && "notice only" !== h;
        },
            S = function S() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          window.rum && window.rum.markCustomEvent ? window.rum.markCustomEvent("StorageConsentDeprecationReport", a) : window.newrelic && window.newrelic.addPageAction ? window.newrelic.addPageAction("StorageConsentDeprecationReport", a) : window.DD_RUM && window.DD_RUM.addAction && window.DD_RUM.addAction("StorageConsentDeprecationReport", a), console.error("The \"StorageContent.".concat(a.apiName, "\" API is deprecated and should not be used anymore. Please check the Storage Content documentation to see what APIs you can use instead (https://github.com/InVisionApp/storage-consent)."));
        },
            T = function T(a) {
          S({
            apiName: "consentedToDomain",
            hostname: a
          });
          var b = M(o.FUNCTIONAL);
          a && -1 < a.indexOf("/") && (!I && (I = document.createElement("a")), I.href = a, a = I.hostname || a);
          var c = q[a];
          return c && (b = M(c)), b;
        },
            U = function U() {
          return S({
            apiName: "hasGDPRCookies"
          }), h && "notice only" !== h;
        };

        window.StorageConsent = window.StorageConsent || {
          consentCategories: o,
          cookieCategories: n,
          onConsentLevelReady: K,
          onConsentLevelChange: function onConsentLevelChange(a) {
            L.push(a);
          },
          consentedToCategory: M,
          consentedToDomain: T,
          canRunFunctionalScripts: function canRunFunctionalScripts() {
            return M(o.FUNCTIONAL);
          },
          canRunAdvertisingScripts: function canRunAdvertisingScripts() {
            return M(o.ADVERTISING);
          },
          hasGDPRCookies: U,
          showConsentPreferencesDialog: function showConsentPreferencesDialog() {
            return window.Optanon && window.Optanon.ToggleInfoDisplay ? void window.Optanon.ToggleInfoDisplay() : void console.error("Cannot show the consent alert because the OneTrust script did not ran. To force the script to run you can either use the \"?force-script-execution\" query-param or set \"window.forceStorageConsentScript = true\" before running the StorageConsent.");
          },
          qualifiesForGDPR: R,
          getConsentDecisionForDomain: function getConsentDecisionForDomain() {
            S({
              apiName: "getConsentDecisionForDomain"
            });
          },
          getConsentDecision: function getConsentDecision() {
            S({
              apiName: "getConsentDecision"
            });
          },
          getGDPRConsentDecision: function getGDPRConsentDecision() {
            S({
              apiName: "getGDPRConsentDecision"
            });
          },
          getConsentedCategories: N,
          getConsentCategories: function getConsentCategories() {
            return S({
              apiName: "getConsentCategories"
            }), N();
          },
          getConsentModel: O,
          getScriptDomain: P,
          getScriptEnvironment: Q
        };
      })(); // Segment include snippet -- non minified


      var analytics = window.analytics = window.analytics || [];
      if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");else {
        analytics.invoked = !0;
        analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];

        analytics.factory = function (t) {
          return function () {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };

        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }

        analytics.load = function (t, e) {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
          n.crossOrigin = "anonymous";

          n.onerror = function (e) {
            // if segment lib fails to load send a failure message to analytics-api
            var properties = stampProps({
              "href": getSafeHref()
            });
            var key;

            if (traitUtils.context && traitUtils.context.segmentKey) {
              key = traitUtils.context.segmentKey;
              properties["segmentKeyMissing"] = false;
            } else {
              key = "DWbnZBBFMh0032NAb32QRdQpIagKlzFS";
              properties["segmentKeyMissing"] = true;
            }

            measure.callAnalyticsAPI(null, JSON.stringify({
              "event": "App.Analytics.Load.Failed",
              "type": "track",
              "writeKey": key,
              "properties": properties
            }));
          };

          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };

        analytics.SNIPPET_VERSION = "4.1.0";
      }
      ;

      function getSafeHref() {
        return window.location ? window.location.href : 'unavailable';
      }

      function transformPayload(payload) {
        // userId must be a string
        if (typeof payload.userId === "number" || payload.userId instanceof Number) {
          payload.userId = payload.userId + '';
        }

        return payload;
      }

      measure._pendoInitializeBuffer = [];
      var pendoInstance = null; // Add the pendo snippet to the page
      // passing in the window allows us to make sure pendo
      // is injected in the right DOM context

      measure.addPendoToPage = function (win) {
        var apiKey = '05702be8-88e5-4f89-628f-905192874137'; // don't add it again if it's already in this frame

        if (!win || measure.isEnvironmentDenyListed()) {
          return;
        }

        if (win.pendo) {
          // if pendo was already loaded on the page, reuse it
          if (!pendoInstance) {
            pendoInstance = win.pendo;
          }

          return;
        }

        try {
          // don't add it if the sessionStorage is not available;
          // this should stop some JS errors caused by pendo trying to access
          // session storage when cookies are blocked
          // we wrap it in a try/catch because accessing the sessionSotrage when
          // cookies are disabled would throw (and we don't want to add pendo in
          // that case)
          var dummyItemKey = '__TEST_SESSION_STORAGE_ANALYTICS_UI__';
          win.sessionStorage.setItem(dummyItemKey, 1);
          win.sessionStorage.removeItem(dummyItemKey);
        } catch (err) {
          return;
        } // unset the global pendoInstance if we set it but
        // can see that the snippet never ran in the frame.


        if (pendoInstance && !win.pendo) {
          pendoInstance = null;
        }

        (function (p, e, n, d, o) {
          var v, w, x, y, z;
          o = p[d] = p[d] || {};
          o._q = [];
          v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];

          for (w = 0, x = v.length; w < x; ++w) {
            (function (m) {
              o[m] = o[m] || function () {
                o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
              };
            })(v[w]);
          }

          y = e.createElement(n);
          y.async = !0;
          y.crossOrigin = 'anonymous';
          y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
          z = e.getElementsByTagName(n)[0];

          if (z && z.parentNode) {
            z.parentNode.insertBefore(y, z);
          } else if (document.head) {
            document.head.appendChild(y);
          } else {
            console.error("pendo missing a script tag to add content to");
          }
        })(win, win.document, 'script', 'pendo');

        pendoInstance = win.pendo; // clear out the early initialization buffer
        // and make sure we are initializing pendo after
        // it was first added to the page

        if (measure._pendoInitializeBuffer.length > 0) {
          measure._pendoInitializeBuffer.forEach(measure.initializePendoUserData);

          measure._pendoInitializeBuffer = [];
        }
      }; // flag to know if we've called init on pendo with actual data


      measure._pendoDataInitialized = false; // initialize the pendo instance with user and account traits
      // pendo has specific requirements for clean data inside their system
      // so this function takes in the same data that goes to segment and
      // rearranges the data into how pendo needs it - specifically by
      // differentiating between user and account data and only doing this for
      // users with vendorId
      // Docs for initialization: https://support.pendo.io/hc/en-us/articles/360032201071-Client-side-data-installation

      measure.initializePendoUserData = function (traits) {
        // make sure we buffer this call in the case that we have a race
        // condition where this is called before addPendoToPage
        if (!pendoInstance) {
          measure._pendoInitializeBuffer.push(traits);

          return;
        }

        var vendorId = traits && traits.vendorID || traitUtils.traits && traitUtils.traits.vendorID;
        var teamId = traits && traits.teamId || traitUtils.traits && traitUtils.traits.teamId;
        var traitsForPendo = Object.assign({}, traitUtils.traits || {}, traits || {});
        var firstName = traitsForPendo.firstName,
            firstname = traitsForPendo.firstname,
            lastName = traitsForPendo.lastName,
            lastname = traitsForPendo.lastname,
            invisionUserID = traitsForPendo.invisionUserID,
            segmentUserId = traitsForPendo.segmentUserId,
            lastKnownIPAddress = traitsForPendo.lastKnownIPAddress,
            email = traitsForPendo.email,
            userRole = traitsForPendo.userRole,
            createdAt = traitsForPendo.createdAt; // for data cleanliness we only initialize pendo
        // with vendorId data.

        if (vendorId) {
          var initializationOptions = {};
          var fullName = ((firstName || firstname || '') + ' ' + (lastName || lastname || '')).trim(); // clear up known properties that are used in different pendo fields even if they are set
          // or properties that only map to user or account level details

          delete traitsForPendo.vendorId;
          delete traitsForPendo.vendorID;
          delete traitsForPendo.firstName;
          delete traitsForPendo.firstname;
          delete traitsForPendo.lastname;
          delete traitsForPendo.lastName;
          delete traitsForPendo.createdAt;
          delete traitsForPendo.email;
          delete traitsForPendo.userRole;
          delete traitsForPendo.lastKnownIPAddress;
          delete traitsForPendo.invisionUserID;
          delete traitsForPendo.segmentUserId; // User/Visiter Level Data

          var visitorContext = Object.assign({
            id: vendorId,
            full_name: fullName,
            // user level only traits
            createdAt: createdAt,
            email: email,
            userRole: userRole,
            lastKnownIPAddress: lastKnownIPAddress,
            invisionUserID: invisionUserID,
            segmentUserId: segmentUserId
          }, traitsForPendo); // we don't want to unset values about the user in pendo if they aren't set here
          // so here we only keep truthy values unless the value is 0 or false

          Object.keys(visitorContext).forEach(function (key) {
            var val = visitorContext[key];

            if (!val && val !== false && isNaN(val)) {
              delete visitorContext[key];
            }
          });
          initializationOptions.visitor = visitorContext;

          if (teamId) {
            // Account/Team Level Data
            var accountContext = Object.assign({
              id: teamId
            }, traitsForPendo); // we don't want to unset values about the team in pendo if they aren't set here
            // so here we only keep truthy values unless the value is 0 or false

            Object.keys(accountContext).forEach(function (key) {
              var val = accountContext[key];

              if (!val && val !== false && isNaN(val)) {
                delete accountContext[key];
              }
            });
            initializationOptions.account = accountContext;
          }

          if (!measure._pendoDataInitialized) {
            pendoInstance.initialize(initializationOptions);
            measure._pendoDataInitialized = true;
          } else {
            pendoInstance.updateOptions(initializationOptions);
          }
        }
      };

      measure.callAnalyticsAPI = function (onAnalyticsApiResponseCb, args) {
        onAnalyticsApiResponseCb = onAnalyticsApiResponseCb || function () {};

        var timeout = 1300; // Translate args into specific payload

        var segmentCallBodyAsJSON = JSON.parse(args);
        var destinationUrl = measure.getAnalyticsAPIDestinationURL(segmentCallBodyAsJSON.type);

        if (destinationUrl === null) {
          // unsupported method
          var result = {};
          result.status = 0;
          result.responseText = "Url not supported";
          onAnalyticsApiResponseCb(result);
          return;
        }

        var payload = transformPayload(segmentCallBodyAsJSON);
        var envelope = createAnalyticsAPIEnvelope(payload);
        var xhr = new window.XMLHttpRequest();
        xhr.open('POST', destinationUrl, true);
        xhr.timeout = timeout;
        xhr.setRequestHeader('Content-Type', 'application/json'); // the edge gateway requires all calls routing through the gateway to require v7 tracing headers.
        //   Request-id is implemented in the edge gateway.
        // https://invisionapp.atlassian.net/wiki/spaces/EDOC/pages/752817588/V7+Tracing+Headers

        xhr.setRequestHeader('Request-Source', 'analytics-ui');
        xhr.setRequestHeader('Calling-Service', 'analytics-ui');

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status !== 0) {
            var result = {};
            result.status = xhr.status;
            result.responseText = xhr.responseText;
            onAnalyticsApiResponseCb(result);
          }
        };

        xhr.onerror = function () {
          var result = {};
          result.status = 404;
          result.responseText = 'failed to reach analytics-api';
          onAnalyticsApiResponseCb(result);
        };

        xhr.ontimeout = function (x) {
          var result = {};
          result.status = xhr.status;
          result.responseText = "timeout";
          onAnalyticsApiResponseCb(result);
        };

        xhr.send(JSON.stringify(envelope));
      };

      measure.getAnalyticsAPIDestinationURL = function (callType) {
        var analyticsAPIPath = measure.origin + '/analytics-api';

        switch (callType) {
          case 'track':
            return analyticsAPIPath + '/track';

          case 'page':
            return analyticsAPIPath + '/page';
        }

        return null;
      };

      function createAnalyticsAPIEnvelope(payload) {
        return {
          client_source: 'analytics-ui',
          team_id: traitUtils.traits ? traitUtils.traits.teamId : '',
          segment_user_id: measure.segmentUserId,
          vendor_id: traitUtils.traits ? traitUtils.traits.vendorID : '',
          write_key: payload.writeKey,
          payload: payload
        };
      }

      measure.getSegmentSourceNameFromKey = function (writeKey) {
        var projectName = measure.analyticsApiEnabledProjects[writeKey];

        if (!!projectName) {
          projectName = traitUtils.context && traitUtils.context.defaultSegmentSourceName;
        }

        return projectName;
      };

      measure.debugLog = function (key) {
        // Check if segment debug is enabled and if it is console log
        try {
          if (window.localStorage && window.localStorage.debug == 'analytics:*') {
            console['log'].apply(window, arguments);
          }
        } catch (e) {// can fail if in private browsing mode
        }
      }; // patches XMLHTTPREQUEST to dual dispach calls to segment to analytics-api


      measure.patchXMLHTTPREQUEST = function (callAnalyticsAPI) {
        callAnalyticsAPI = callAnalyticsAPI || measure.callAnalyticsAPI;
        var originalSend = XMLHttpRequest.prototype.send;
        var originalOpen = XMLHttpRequest.prototype.open;

        XMLHttpRequest.prototype.send = function () {
          var overideSendContext = this;
          var overideSendArguments = arguments;

          if (this.patchUrl.indexOf('https://api.segment.io/v1') === 0) {
            var onAnalyticsAPIResponse = function onAnalyticsAPIResponse(results) {
              if (results.status != 200 || results.responseText == "timeout" || results.responseText == "Url not supported") {
                overideSendContext.sentToSegment = true;

                if (results.status == 422 || results.responseText == "timeout" || results.responseText == "Url not supported") {
                  // we no longer want to send direct to segment unless no seg proj is configured or if we timed out
                  originalSend.apply(overideSendContext, overideSendArguments);
                }
              }

              if (results.status == 403) {
                try {
                  var segmentCallBodyAsJSON = JSON.parse(overideSendArguments[0]);
                  var rumArgs = {
                    analyticsEventName: segmentCallBodyAsJSON.event,
                    analyticsInvisionVersion: segmentCallBodyAsJSON.properties ? segmentCallBodyAsJSON.properties.invisionVersion : 'unknown',
                    analyticsApiResponseText: results.responseText,
                    analyticsApiResponseStatus: results.status
                  };
                  window.rum.markError("Unknown analytics event", rumArgs);
                } catch (e) {
                  console.error('Unable to JSON.parse args', e);
                }
              }
            };

            this.sentToAnalyticsAPI = true;
            callAnalyticsAPI(onAnalyticsAPIResponse, overideSendArguments[0]);
          } else {
            originalSend.apply(overideSendContext, overideSendArguments);
          }
        };

        XMLHttpRequest.prototype.open = function (method, url) {
          this.patchUrl = url;
          this.sentToAnalyticsAPI = false;
          this.sentToSegment = false;
          originalOpen.apply(this, arguments);
        };
      }; // Keep track of the Marketo consent state used in the Segment initialization
      // to re-use it later on.


      var userConsentedToMarketo; // Key param is optional.
      // If no key provided, default will be used.

      var initSegment = function initSegment(key) {
        // patch xmlhttp request to capture segment call for dual dispatch
        if (!measure.patchedForAnalyticsAPI) {
          measure.patchXMLHTTPREQUEST(measure.callAnalyticsAPI);
          measure.patchedForAnalyticsAPI = true;
        }

        if (!key) {
          key = traitUtils.context && traitUtils.context.segmentKey;
        }

        var segmentScript = window.document.querySelectorAll('script[src*="/analytics.min.js"]'),
            isIE11orOlder = /(MSIE|Trident)/.test(window.navigator.userAgent);

        if (!segmentScript.length) {
          StorageConsent.onConsentLevelReady(function () {
            var userConsentedToPendo = StorageConsent.canRunFunctionalScripts();
            userConsentedToMarketo = StorageConsent.canRunFunctionalScripts();
            var segmentIntegrationsObj = {
              integrations: {
                'All': false,
                // required integrations the user can't opt out of
                'Amplitude': true,
                'Segment.io': true,
                'Webhooks': true,
                // functional and advertising require consent approval
                'Appboy': false,
                'Clear Brain': StorageConsent.canRunFunctionalScripts(),
                'Facebook Pixel': StorageConsent.canRunAdvertisingScripts(),
                'Google Analytics': StorageConsent.canRunFunctionalScripts(),
                'HubSpot': StorageConsent.canRunAdvertisingScripts(),
                'Madkudu': StorageConsent.canRunAdvertisingScripts() && !isIE11orOlder,
                'Twitter': StorageConsent.canRunAdvertisingScripts(),
                'Bing Ads': StorageConsent.canRunAdvertisingScripts(),
                'LinkedIn Insight Tag': StorageConsent.canRunAdvertisingScripts(),
                'Gainsight': StorageConsent.canRunFunctionalScripts(),
                // Tray.io currently configured to send only to marketo
                'tray.io': userConsentedToMarketo,
                'Marketo V2': userConsentedToMarketo,
                // Pendo custom segment function is how Pendo track events are
                // sent to pendo. This is required so that data can be guaranteed to
                // have the vendor id attached to it
                'Pendo Custom (InVisionApp)': userConsentedToPendo,
                // Hotjar does lots of DOM inspecting, copying, etc. in order to create "recordings"
                // but in the CAFE 2.0 world, our apps are ran in isolated frames which breaks hotjar's
                // ability to inspect the DOM of an app. So, when running in that context, we expect that
                // Hotjar will be pulled in manually by the app shell using the third-party manager.
                // Eventually, all apps will be on CAFE 2.0 and Hotjar will always be pulled in outside
                // of Segment.
                'Hotjar': !runningInAppShellContext() && StorageConsent.canRunFunctionalScripts()
              }
            };
            callSegmentMethod('load', key, segmentIntegrationsObj); // Pendo is not pulled directly by segment because it limits our ability to control
            // what data to send to pendo directly - For example, we only ever want to send user information
            // to Pendo if the user has vendor information.

            if (userConsentedToPendo) {
              // when running in the app shell / CAFE 2.0 context, it's important that we add pendo
              // into the feature frame which in some cases is in an iframe but it could not be. Using
              // these APIs from appShell abstracts the need to understand what level the feature is in.
              // Unlike the rest of Segment integrations, Pendo has to be ran at the same level of the feature
              // because it needs access to the DOM.
              if (runningInAppShellContext() && window.inGlobalContext.appShell.currentApp) {
                var _appShell = window.inGlobalContext.appShell;
                measure.addPendoToPage(_appShell.currentApp.getFeatureContext().getFeatureFrameWindow());

                _appShell.on('after:unmount', function () {
                  pendoInstance = null;
                }); // when we change app locations, let's add pendo inside of the feature frame


                _appShell.on('after:mount', function (commandInfo) {
                  var appIsFeature = _appShell.getFeatureContext(commandInfo.featureName).isFeatureAnApp(); // some mounts are triggered on non-apps such as sidebar. Only run
                  // this reidenify if we are confident that it's not going to impact rendering processes


                  if (appIsFeature) {
                    // delay running this so that feature rendering can complete.
                    setTimeout(function () {
                      // verify that we didn't change apps during the duration of our delay
                      if (_appShell.currentApp.getFeatureContext().featureName === commandInfo.featureName) {
                        measure.addPendoToPage(_appShell.currentApp.getFeatureContext().getFeatureFrameWindow());
                        measure.initializePendoUserData(measure.identityTraits);
                      }
                    }, 5000);
                  }
                });
              } else {
                // not running in app shell context means we will always have the right DOM level
                measure.addPendoToPage(window);
              }
            }
          });
        }

        if (!measure.pageMethodFired) {
          var name = page_allowed_list[location.pathname.replace(/\/$/, "")] || null;
          measure.page(name);
          measure.pageMethodFired = true; // in CAFE 2.0, app's no longer have full page refreshes and this event listener
          // allows utilities to know when a new app is mounted which, historically, has always
          // been a new page. Calling page here allows us to retain the same page capturing
          // that existed in the multi-page arch while running in a single page arch.

          if (runningInAppShellContext() && window.inGlobalContext.appShell.on) {
            window.inGlobalContext.appShell.on('after:mount', function () {
              var name = page_allowed_list[(location.pathname || '').replace(/\/$/, "")] || null;
              measure.page(name);
            });
          }
        }
      };

      measure.setSegmentKey = function (key) {
        // TODO: Log usage
        console.warn('`measure.setSegmentKey` is deprecated. Please use `measure.initializeSegment` instead.');
        measure.initializeSegment(key);
      };

      measure.segmentUserId = '';
      /*
      * Specify one or more properties (in object form)
      * to append to every collect() call, including translations.
      *
      * Calling this function multiple times is cumulative.
      * However, calling append() with no param, will clear
      * the appended properties to an empty set.
      */

      measure.append = function (customProps) {
        if (!customProps) {
          propsToAppend = {}; // clear the list
        } else if (customProps && _typeof(customProps) === "object") {
          propsToAppend = Object.assign({}, propsToAppend, customProps);
        }
      };

      measure.identify = function (id, traits, options, fn) {
        var stampedTraits = stampProps(traits);
        measure.identityTraits = Object.assign({}, measure.identityTraits || {}, stampedTraits);
        var optionsIntegrations = Object.assign({}, options || {}); // Marketo has a V2 version that we are using but as of July 22nd they have a bug
        // in their V2 integration that requires that this non-V2 version is set on identify and page calls

        optionsIntegrations.integrations = Object.assign({
          'Marketo': userConsentedToMarketo
        }, optionsIntegrations.integrations || {});
        callSegmentMethod('identify', id, stampedTraits, optionsIntegrations, fn);
        measure.initializePendoUserData(stampedTraits);
      };

      var page_allowed_list = {
        '/auth/success': '/auth/success',
        '/auth/sign-up': '/auth/sign-up',
        '/auth/sign-in': '/auth/sign-in',
        '/auth/select-a-team': '/auth/select-a-team',
        '/auth/sign-in/subdomain': '/auth/sign-in/subdomain',
        '/auth/sign-up/create-team': '/auth/sign-up/create-team',
        '/auth/sign-up/new-user': '/auth/sign-up/new-user'
      };

      measure.page = function (name) {
        var rawProps = {
          // We've seen nondeterministic deployments with storage consent
          // this will allow us to be sure that the rollout is propagated as expected
          hasUpdatedStorageConsent: !!(window.StorageConsent && window.StorageConsent.consentCategories && window.StorageConsent.consentCategories.FUNCTIONAL)
        };
        var options = {
          // Marketo has a V2 version that we are using but as of July 22nd they have a bug
          // in their V2 integration that requires that this non-V2 version is set on identify and page calls
          'Marketo': userConsentedToMarketo
        };
        callSegmentMethod('page', null, name, stampProps(rawProps), options);
      };

      measure.debug = callSegmentMethod.bind(null, 'debug'); // CAUTION: **** We are using a timeout when injecting the script tag as
      // changing the DOM structure is breaking in the context of some Chrome
      // browser plugins (that block and remove certain DOM elements). The
      // plugin-based change of the DOM is breaking the AngularJS $compile() and
      // linking workflow. By deferring the injection of the script tag, we seem to
      // get around this problem.

      setTimeout(measure.optimizelySync, 10, false);

      measure.optimizelySync = function () {
        measure.loadScript('//cdn.optimizely.com/js/10316326513.js'); // default this value

        window.optimizely = window.optimizely || [];
      };

      measure.loadScript = function (url, cb) {
        var el = document.createElement('script');
        el.async = true;
        el.src = url;
        el.crossOrigin = 'anonymous';

        if (cb && typeof cb === "function") {
          el.onload = el.onreadystatechange = cb;
        }

        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(el, s);
      };

      measure.identifyUser = function (callback) {
        callback = callback || function () {};

        traitUtils.fetchTraits(function () {
          measure.identifyAttempted = true;

          if (traitUtils.traits) {
            measure.segmentUserId = traitUtils.traits.vendorID;
            measure.identify(measure.segmentUserId, traitUtils.traits); // in CAFE 2.0, a user vendor context represents traits about users that should be used
            // when interacting with external vendors. This logic maps what utilities knows about
            // the user's vendor context to app shell for it to use as needed.

            if (window.inGlobalContext && window.inGlobalContext.appShell && window.inGlobalContext.appShell.user && window.inGlobalContext.appShell.user.updateVendorContext && traitUtils.traits) {
              inGlobalContext.appShell.user.updateVendorContext({
                createdAt: traitUtils.traits.createdAt,
                createdAtDateFormatIso8601: traitUtils.traits.createdAtDateFormatIso8601,
                email: traitUtils.traits.email,
                firstName: traitUtils.traits.firstName || traitUtils.traits.firstname,
                lastName: traitUtils.traits.lastName || traitUtils.traits.lastname,
                lastKnownIPAddress: traitUtils.traits.lastKnownIPAddress,
                teamName: traitUtils.traits.team_name,
                teamSubdomain: traitUtils.traits.team_subdomain,
                teamID: traitUtils.traits.teamId,
                vendorID: traitUtils.traits.vendorID,
                userID: traitUtils.traits.invisionUserID,
                segmentID: measure.segmentUserId
              });
            }

            measure.identifyAttempted = true;
          }

          callback();
        });
      };

      measure.dequeue = function () {
        // Dequeue any existing events that were sent to the stubs
        // created by our snippet.
        //
        // Events are arrays in the format:
        //   [methodName, firstArg, secondArg, ..., lastArg]
        while (measure.queue && measure.queue.length) {
          var event = measure.queue.shift();
          var method = event.shift();
          measure[method].apply(this, event);
        }
      }; // Some environments, such as automated testing environments, can skew our
      // metrics upstream because of how often they can trigger any given event.
      // This function allows us to look at environment features to determine if
      // we consider this environment bad for sending data upstream.


      measure.isEnvironmentDenyListed = function () {
        // adding defensive check incase privacy modes throw errors when accessing session storage
        var sessionStorage;

        try {
          sessionStorage = window.sessionStorage;
          sessionStorage.setItem('ana-test', 1);
          sessionStorage.removeItem('ana-test');
        } catch (e) {
          sessionStorage = {
            setItem: function setItem() {},
            getItem: function getItem() {},
            removeItem: function removeItem() {}
          };
        }

        var sessionState = sessionStorage.getItem('analytics-force');
        var forceAllowInSessionState = sessionState && sessionState === 'allow';
        var forceDenyInSessionState = sessionState && sessionState === 'deny';
        var isForceAllow = window.location.href.includes('analytics-force-allow') || !!forceAllowInSessionState;
        var isForceDeny = window.location.href.includes('analytics-force-deny') || !!forceDenyInSessionState;

        if (forceAllowInSessionState && isForceDeny) {
          // we have previously opted into forcing allow but now want it off
          sessionStorage.setItem('analytics-force', 'deny');
          isForceAllow = false;
        } else if (!forceAllowInSessionState && isForceAllow) {
          // we have not previously opted into forcing allow and now we want to
          sessionStorage.setItem('analytics-force', 'allow');
        }

        return function () {
          var URL_DENYLIST_PATTERNS = [/^https:\/\/performance.invisionapp.com/i];
          var isURLDenied = URL_DENYLIST_PATTERNS.some(function (pattern) {
            return pattern.test(window.location.href);
          });
          var isGlobalStateDenied = !!window.analyticsForceDeny;
          return isForceAllow ? false : isForceDeny || isGlobalStateDenied || isURLDenied;
        };
      }(); // to help with correlating performance changes to user impact,
      // we set a new relic custom attribute that will persist the
      // data across pages


      function initializeRUMWithUserData(traits) {
        var rum = window.rum;

        if (rum) {
          if (traits) {
            rum.config({
              vendorID: traits.vendorID,
              userID: traits.invisionUserID,
              teamID: traits.teamId,
              email: traits.email
            });
          } else {
            // If we don't have traits, use the anonymous id.
            // If we see, however, that the user.id() is not the anonymous id
            // we assume that that the user has likely had a vendorID set in
            // the past and we won't override what's in newrelic with the anonymous
            // id in that case.
            var user = callSegmentMethod('user') || {
              id: function id() {},
              anonymousId: function anonymousId() {}
            };

            if (!user.id() && user.id() !== user.anonymousId()) {
              rum.config({
                vendorID: user.anonymousId()
              });
            }
          }
        }
      }

      var runIdentifyUserProcesses = function runIdentifyUserProcesses() {
        // rerun these if the user specific details are not set
        // because it's the initial load or because the user authed
        // during the page session.
        if (!measure.identityTraits || !measure.identityTraits.email) {
          measure.identifyUser(function () {
            measure.dequeue();
            measure.initializePendoUserData(measure.identityTraits);
            initializeRUMWithUserData(measure.identityTraits);
          });
        }
      }; // this mechanism allows us to synchronously load in prod but delay loading
      // in testing environments.


      var initializeAnalyticsUI = window.__analytics_ui_init_cb__ || function (cb) {
        cb();
      };

      initializeAnalyticsUI(function () {
        var initKey = measure.customSegmentKey || traitUtils.context && traitUtils.context.segmentKey;
        initSegment(initKey);

        if (traitUtils.context && traitUtils.context.invisionVersion == '7.0') {
          runIdentifyUserProcesses(); // for CAFE 2.0 apps, the user can be unauthenticated initially
          // and the authenticate later in their user journey without a page refresh.
          // To account for that, we should reidentify the user when the apps change.

          if (runningInAppShellContext() && window.inGlobalContext.appShell.on) {
            var _appShell2 = window.inGlobalContext.appShell;

            _appShell2.on('after:mount', function (commandInfo) {
              var appIsFeature = _appShell2.getFeatureContext(commandInfo.featureName).isFeatureAnApp(); // some mounts are triggered on non-apps such as sidebar. Only run
              // this reidenify if we are confident that it's not going to impact rendering processes


              if (appIsFeature) {
                // delay running this so that feature rendering can complete.
                setTimeout(function () {
                  // verify that we didn't change apps during the duration of our delay
                  if (_appShell2.currentApp.getFeatureContext().featureName === commandInfo.featureName) {
                    runIdentifyUserProcesses();
                  }
                }, 5000);
              }
            });
          }
        } else {
          measure.identifyAttempted = true;
          measure.dequeue();
          measure.initializePendoUserData(measure.identityTraits);
          initializeRUMWithUserData(measure.identityTraits);
        }

        if (measure.isEnvironmentDenyListed()) {
          console.log('This environment is denylisted in analytics-ui (utilities.js) and will not send events to Segment');
        }
      });
    });
  };

  if (!window.location.origin.startsWith("file://")) {
    init();
  }
}();