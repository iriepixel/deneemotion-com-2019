/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (callback) {

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Already ready or interactive, execute callback
		callback.call();
	}
	else if (document.attachEvent) {
		// Old browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'interactive')
				callback.call();
		});
	}
	else if (document.addEventListener) {
		// Modern browsers
		document.addEventListener('DOMContentLoaded', callback);
	}
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lite_ready__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rafl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rafl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rafl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_global__);




const isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;

const supportTransform = (() => {
    const prefixes = 'transform WebkitTransform MozTransform'.split(' ');
    const div = document.createElement('div');
    for (let i = 0; i < prefixes.length; i++) {
        if (div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
        }
    }
    return false;
})();

// Window data
let wndW;
let wndH;
let wndY;
let forceResizeParallax = false;
let forceScrollParallax = false;
function updateWndVars(e) {
    wndW = __WEBPACK_IMPORTED_MODULE_2_global__["window"].innerWidth || document.documentElement.clientWidth;
    wndH = __WEBPACK_IMPORTED_MODULE_2_global__["window"].innerHeight || document.documentElement.clientHeight;
    if (typeof e === 'object' && (e.type === 'load' || e.type === 'dom-loaded')) {
        forceResizeParallax = true;
    }
}
updateWndVars();
__WEBPACK_IMPORTED_MODULE_2_global__["window"].addEventListener('resize', updateWndVars);
__WEBPACK_IMPORTED_MODULE_2_global__["window"].addEventListener('orientationchange', updateWndVars);
__WEBPACK_IMPORTED_MODULE_2_global__["window"].addEventListener('load', updateWndVars);
__WEBPACK_IMPORTED_MODULE_0_lite_ready___default()(() => {
    updateWndVars({
        type: 'dom-loaded',
    });
});

// list with all jarallax instances
// need to render all in one scroll/resize event
const jarallaxList = [];

// Animate if changed window size or scrolled page
let oldPageData = false;
function updateParallax() {
    if (!jarallaxList.length) {
        return;
    }

    if (__WEBPACK_IMPORTED_MODULE_2_global__["window"].pageYOffset !== undefined) {
        wndY = __WEBPACK_IMPORTED_MODULE_2_global__["window"].pageYOffset;
    } else {
        wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    const isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
    const isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;

    forceResizeParallax = false;
    forceScrollParallax = false;

    if (isResized || isScrolled) {
        jarallaxList.forEach((item) => {
            if (isResized) {
                item.onResize();
            }
            if (isScrolled) {
                item.onScroll();
            }
        });

        oldPageData = {
            width: wndW,
            height: wndH,
            y: wndY,
        };
    }

    __WEBPACK_IMPORTED_MODULE_1_rafl___default()(updateParallax);
}


// ResizeObserver
const resizeObserver = global.ResizeObserver ? new global.ResizeObserver((entry) => {
    if (entry && entry.length) {
        __WEBPACK_IMPORTED_MODULE_1_rafl___default()(() => {
            entry.forEach((item) => {
                if (item.target && item.target.jarallax) {
                    if (!forceResizeParallax) {
                        item.target.jarallax.onResize();
                    }
                    forceScrollParallax = true;
                }
            });
        });
    }
}) : false;


let instanceID = 0;

// Jarallax class
class Jarallax {
    constructor(item, userOptions) {
        const self = this;

        self.instanceID = instanceID++;

        self.$item = item;

        self.defaults = {
            type: 'scroll', // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
            speed: 0.5, // supported value from -1 to 2
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat', // supported only for background, not for <img> tag
            keepImg: false, // keep <img> tag in it's default place
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            automaticResize: true, // use ResizeObserver to recalculate position and size of parallax image

            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,

            // events
            onScroll: null, // function(calculations) {}
            onInit: null, // function() {}
            onDestroy: null, // function() {}
            onCoverImage: null, // function() {}
        };

        // DEPRECATED: old data-options
        const deprecatedDataAttribute = self.$item.getAttribute('data-jarallax');
        const oldDataOptions = JSON.parse(deprecatedDataAttribute || '{}');
        if (deprecatedDataAttribute) {
            // eslint-disable-next-line no-console
            console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');
        }

        // prepare data-options
        const dataOptions = self.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys(dataOptions).forEach((key) => {
            const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                pureDataOptions[loweCaseOption] = dataOptions[key];
            }
        });

        self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
        self.pureOptions = self.extend({}, self.options);

        // prepare 'true' and 'false' strings to boolean
        Object.keys(self.options).forEach((key) => {
            if (self.options[key] === 'true') {
                self.options[key] = true;
            } else if (self.options[key] === 'false') {
                self.options[key] = false;
            }
        });

        // fix speed option [-1.0, 2.0]
        self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));

        // deprecated noAndroid and noIos options
        if (self.options.noAndroid || self.options.noIos) {
            // eslint-disable-next-line no-console
            console.warn('Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices');

            // prepare fallback if disableParallax option is not used
            if (!self.options.disableParallax) {
                if (self.options.noIos && self.options.noAndroid) {
                    self.options.disableParallax = /iPad|iPhone|iPod|Android/;
                } else if (self.options.noIos) {
                    self.options.disableParallax = /iPad|iPhone|iPod/;
                } else if (self.options.noAndroid) {
                    self.options.disableParallax = /Android/;
                }
            }
        }

        // prepare disableParallax callback
        if (typeof self.options.disableParallax === 'string') {
            self.options.disableParallax = new RegExp(self.options.disableParallax);
        }
        if (self.options.disableParallax instanceof RegExp) {
            const disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = () => disableParallaxRegexp.test(navigator.userAgent);
        }
        if (typeof self.options.disableParallax !== 'function') {
            self.options.disableParallax = () => false;
        }

        // prepare disableVideo callback
        if (typeof self.options.disableVideo === 'string') {
            self.options.disableVideo = new RegExp(self.options.disableVideo);
        }
        if (self.options.disableVideo instanceof RegExp) {
            const disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = () => disableVideoRegexp.test(navigator.userAgent);
        }
        if (typeof self.options.disableVideo !== 'function') {
            self.options.disableVideo = () => false;
        }

        // custom element to check if parallax in viewport
        let elementInVP = self.options.elementInViewport;
        // get first item from array
        if (elementInVP && typeof elementInVP === 'object' && typeof elementInVP.length !== 'undefined') {
            [elementInVP] = elementInVP;
        }
        // check if dom element
        if (!(elementInVP instanceof Element)) {
            elementInVP = null;
        }
        self.options.elementInViewport = elementInVP;

        self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,

            // position fixed is needed for the most of browsers because absolute position have glitches
            // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // on mobile devices better scrolled with absolute position
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed',
        };

        if (self.initImg() && self.canInitParallax()) {
            self.init();
        }
    }

    // add styles to element
    css(el, styles) {
        if (typeof styles === 'string') {
            return __WEBPACK_IMPORTED_MODULE_2_global__["window"].getComputedStyle(el).getPropertyValue(styles);
        }

        // add transform property with vendor prefix
        if (styles.transform && supportTransform) {
            styles[supportTransform] = styles.transform;
        }

        Object.keys(styles).forEach((key) => {
            el.style[key] = styles[key];
        });
        return el;
    }

    // Extend like jQuery.extend
    extend(out) {
        out = out || {};
        Object.keys(arguments).forEach((i) => {
            if (!arguments[i]) {
                return;
            }
            Object.keys(arguments[i]).forEach((key) => {
                out[key] = arguments[i][key];
            });
        });
        return out;
    }

    // get window size and scroll position. Useful for extensions
    getWindowData() {
        return {
            width: wndW,
            height: wndH,
            y: wndY,
        };
    }

    // Jarallax functions
    initImg() {
        const self = this;

        // find image element
        let $imgElement = self.options.imgElement;
        if ($imgElement && typeof $imgElement === 'string') {
            $imgElement = self.$item.querySelector($imgElement);
        }
        // check if dom element
        if (!($imgElement instanceof Element)) {
            $imgElement = null;
        }

        if ($imgElement) {
            if (self.options.keepImg) {
                self.image.$item = $imgElement.cloneNode(true);
            } else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
            }
            self.image.useImgTag = true;
        }

        // true if there is img tag
        if (self.image.$item) {
            return true;
        }

        // get image src
        if (self.image.src === null) {
            self.image.src = self.css(self.$item, 'background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
        }
        return !(!self.image.src || self.image.src === 'none');
    }

    canInitParallax() {
        return supportTransform && !this.options.disableParallax();
    }

    init() {
        const self = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
        };
        let imageStyles = {};

        if (!self.options.keepImg) {
            // save default user styles
            const curStyle = self.$item.getAttribute('style');
            if (curStyle) {
                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            }
            if (self.image.useImgTag) {
                const curImgStyle = self.image.$item.getAttribute('style');
                if (curImgStyle) {
                    self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                }
            }
        }

        // set relative position and z-index to the parent
        if (self.css(self.$item, 'position') === 'static') {
            self.css(self.$item, {
                position: 'relative',
            });
        }
        if (self.css(self.$item, 'z-index') === 'auto') {
            self.css(self.$item, {
                zIndex: 0,
            });
        }

        // container for parallax image
        self.image.$container = document.createElement('div');
        self.css(self.image.$container, containerStyles);
        self.css(self.image.$container, {
            'z-index': self.options.zIndex,
        });

        // fix for IE https://github.com/nk-o/jarallax/issues/110
        if (isIE) {
            self.css(self.image.$container, {
                opacity: 0.9999,
            });
        }

        self.image.$container.setAttribute('id', `jarallax-container-${self.instanceID}`);
        self.$item.appendChild(self.image.$container);

        // use img tag
        if (self.image.useImgTag) {
            imageStyles = self.extend({
                'object-fit': self.options.imgSize,
                'object-position': self.options.imgPosition,
                // support for plugin https://github.com/bfred-it/object-fit-images
                'font-family': `object-fit: ${self.options.imgSize}; object-position: ${self.options.imgPosition};`,
                'max-width': 'none',
            }, containerStyles, imageStyles);

        // use div with background image
        } else {
            self.image.$item = document.createElement('div');
            if (self.image.src) {
                imageStyles = self.extend({
                    'background-position': self.options.imgPosition,
                    'background-size': self.options.imgSize,
                    'background-repeat': self.options.imgRepeat,
                    'background-image': `url("${self.image.src}")`,
                }, containerStyles, imageStyles);
            }
        }

        if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
            self.image.position = 'absolute';
        }

        // check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        // discussion - https://github.com/nk-o/jarallax/issues/9
        if (self.image.position === 'fixed') {
            let parentWithTransform = 0;
            let $itemParents = self.$item;
            while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                const parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                if (parentTransform && parentTransform !== 'none') {
                    parentWithTransform = 1;
                    self.image.position = 'absolute';
                }
                $itemParents = $itemParents.parentNode;
            }
        }

        // add position to parallax block
        imageStyles.position = self.image.position;

        // insert parallax image
        self.css(self.image.$item, imageStyles);
        self.image.$container.appendChild(self.image.$item);

        // set initial position and size
        self.onResize();
        self.onScroll(true);

        // ResizeObserver
        if (self.options.automaticResize && resizeObserver) {
            resizeObserver.observe(self.$item);
        }

        // call onInit event
        if (self.options.onInit) {
            self.options.onInit.call(self);
        }

        // remove default user background
        if (self.css(self.$item, 'background-image') !== 'none') {
            self.css(self.$item, {
                'background-image': 'none',
            });
        }

        self.addToParallaxList();
    }

    // add to parallax instances list
    addToParallaxList() {
        jarallaxList.push(this);

        if (jarallaxList.length === 1) {
            updateParallax();
        }
    }

    // remove from parallax instances list
    removeFromParallaxList() {
        const self = this;

        jarallaxList.forEach((item, key) => {
            if (item.instanceID === self.instanceID) {
                jarallaxList.splice(key, 1);
            }
        });
    }

    destroy() {
        const self = this;

        self.removeFromParallaxList();

        // return styles on container as before jarallax init
        const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
        self.$item.removeAttribute('data-jarallax-original-styles');
        // null occurs if there is no style tag before jarallax init
        if (!originalStylesTag) {
            self.$item.removeAttribute('style');
        } else {
            self.$item.setAttribute('style', originalStylesTag);
        }

        if (self.image.useImgTag) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
            self.image.$item.removeAttribute('data-jarallax-original-styles');
            // null occurs if there is no style tag before jarallax init
            if (!originalStylesImgTag) {
                self.image.$item.removeAttribute('style');
            } else {
                self.image.$item.setAttribute('style', originalStylesTag);
            }

            // move img tag to its default position
            if (self.image.$itemParent) {
                self.image.$itemParent.appendChild(self.image.$item);
            }
        }

        // remove additional dom elements
        if (self.$clipStyles) {
            self.$clipStyles.parentNode.removeChild(self.$clipStyles);
        }
        if (self.image.$container) {
            self.image.$container.parentNode.removeChild(self.image.$container);
        }

        // call onDestroy event
        if (self.options.onDestroy) {
            self.options.onDestroy.call(self);
        }

        // delete jarallax from item
        delete self.$item.jarallax;
    }

    // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    clipContainer() {
        // needed only when background in fixed position
        if (this.image.position !== 'fixed') {
            return;
        }

        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const { width, height } = rect;

        if (!self.$clipStyles) {
            self.$clipStyles = document.createElement('style');
            self.$clipStyles.setAttribute('type', 'text/css');
            self.$clipStyles.setAttribute('id', `jarallax-clip-${self.instanceID}`);
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(self.$clipStyles);
        }

        const styles = `#jarallax-container-${self.instanceID} {
           clip: rect(0 ${width}px ${height}px 0);
           clip: rect(0, ${width}px, ${height}px, 0);
        }`;

        // add clip styles inline (this method need for support IE8 and less browsers)
        if (self.$clipStyles.styleSheet) {
            self.$clipStyles.styleSheet.cssText = styles;
        } else {
            self.$clipStyles.innerHTML = styles;
        }
    }

    coverImage() {
        const self = this;

        const rect = self.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed } = self.options;
        const isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;

        // scroll parallax
        if (isScroll) {
            // scroll distance and height for image
            if (speed < 0) {
                scrollDist = speed * Math.max(contH, wndH);

                if (wndH < contH) {
                    scrollDist -= speed * (contH - wndH);
                }
            } else {
                scrollDist = speed * (contH + wndH);
            }

            // size for scroll parallax
            if (speed > 1) {
                resultH = Math.abs(scrollDist - wndH);
            } else if (speed < 0) {
                resultH = scrollDist / speed + Math.abs(scrollDist);
            } else {
                resultH += (wndH - contH) * (1 - speed);
            }

            scrollDist /= 2;
        }

        // store scroll distance
        self.parallaxScrollDistance = scrollDist;

        // vertical center
        if (isScroll) {
            resultMT = (wndH - resultH) / 2;
        } else {
            resultMT = (contH - resultH) / 2;
        }

        // apply result to item
        self.css(self.image.$item, {
            height: `${resultH}px`,
            marginTop: `${resultMT}px`,
            left: self.image.position === 'fixed' ? `${rect.left}px` : '0',
            width: `${rect.width}px`,
        });

        // call onCoverImage event
        if (self.options.onCoverImage) {
            self.options.onCoverImage.call(self);
        }

        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT,
            },
            container: rect,
        };
    }

    isVisible() {
        return this.isElementInViewport || false;
    }

    onScroll(force) {
        const self = this;

        const rect = self.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {};

        // check if in viewport
        let viewportRect = rect;
        if (self.options.elementInViewport) {
            viewportRect = self.options.elementInViewport.getBoundingClientRect();
        }
        self.isElementInViewport = viewportRect.bottom >= 0
            && viewportRect.right >= 0
            && viewportRect.top <= wndH
            && viewportRect.left <= wndW;

        // stop calculations if item is not in viewport
        if (force ? false : !self.isElementInViewport) {
            return;
        }

        // calculate parallax helping variables
        const beforeTop = Math.max(0, contT);
        const beforeTopEnd = Math.max(0, contH + contT);
        const afterTop = Math.max(0, -contT);
        const beforeBottom = Math.max(0, contT + contH - wndH);
        const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
        const afterBottom = Math.max(0, -contT + wndH - contH);
        const fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);

        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if (contH < wndH) {
            visiblePercent = 1 - (afterTop || beforeBottom) / contH;
        } else if (beforeTopEnd <= wndH) {
            visiblePercent = beforeTopEnd / wndH;
        } else if (beforeBottomEnd <= wndH) {
            visiblePercent = beforeBottomEnd / wndH;
        }

        // opacity
        if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }

        // scale
        if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
            let scale = 1;
            if (self.options.speed < 0) {
                scale -= self.options.speed * visiblePercent;
            } else {
                scale += self.options.speed * (1 - visiblePercent);
            }
            styles.transform = `scale(${scale}) translate3d(0,0,0)`;
        }

        // scroll
        if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
            let positionY = self.parallaxScrollDistance * fromViewportCenter;

            // fix if parallax block in absolute position
            if (self.image.position === 'absolute') {
                positionY -= contT;
            }

            styles.transform = `translate3d(0,${positionY}px,0)`;
        }

        self.css(self.image.$item, styles);

        // call onScroll event
        if (self.options.onScroll) {
            self.options.onScroll.call(self, {
                section: rect,

                beforeTop,
                beforeTopEnd,
                afterTop,
                beforeBottom,
                beforeBottomEnd,
                afterBottom,

                visiblePercent,
                fromViewportCenter,
            });
        }
    }

    onResize() {
        this.coverImage();
        this.clipContainer();
    }
}


// global definition
const plugin = function (items) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if (typeof HTMLElement === 'object' ? items instanceof HTMLElement : items && typeof items === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
        items = [items];
    }

    const options = arguments[1];
    const args = Array.prototype.slice.call(arguments, 2);
    const len = items.length;
    let k = 0;
    let ret;

    for (k; k < len; k++) {
        if (typeof options === 'object' || typeof options === 'undefined') {
            if (!items[k].jarallax) {
                items[k].jarallax = new Jarallax(items[k], options);
            }
        } else if (items[k].jarallax) {
            // eslint-disable-next-line prefer-spread
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
        }
        if (typeof ret !== 'undefined') {
            return ret;
        }
    }

    return items;
};
plugin.constructor = Jarallax;

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)

/**
 * `requestAnimationFrame()`
 */

var request = global.requestAnimationFrame
  || global.webkitRequestAnimationFrame
  || global.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = global.cancelAnimationFrame
  || global.webkitCancelAnimationFrame
  || global.mozCancelAnimationFrame
  || clearTimeout

if (Function.prototype.bind) {
  request = request.bind(global)
  cancel = cancel.bind(global)
}

exports = module.exports = request
exports.cancel = cancel


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(9);

var _jquery2 = _interopRequireDefault(_jquery);

var _whatInput = __webpack_require__(10);

var _whatInput2 = _interopRequireDefault(_whatInput);

var _jarallax = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = _jquery2.default;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// import {
//   jarallax,
//   jarallaxElement,
//   jarallaxVideo
// } from 'jarallax';

// $(document).foundation();

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
  // $(document).foundation();
  (0, _jarallax.jarallaxElement)();

  (0, _jarallax.jarallax)(document.querySelectorAll('.jarallax'), {
    speed: 0.5
  });
});

document.getElementById('hamburger--js').addEventListener('click', function () {
  this.classList.toggle("is-active");
  document.querySelector('.menu-main-menu-container').classList.toggle('active');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.3.1
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * variables
	   */

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = null;

	  // cache document.documentElement
	  var doc = document.documentElement;

	  // form input types
	  var formInputs = ['input', 'select', 'textarea'];

	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  // list of keys for which we change intent even for form inputs
	  var changeIntentMap = [9 // tab
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch'
	  };

	  // array of all used input types
	  var inputTypes = [];

	  // boolean: true if touch buffer is active
	  var isBuffering = false;

	  // boolean: true if the page is being scrolled
	  var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null
	  };

	  // map of IE 10 pointer events
	  var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'
	  };

	  var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    setInput();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      doc.addEventListener('pointerdown', updateInput);
	      doc.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      doc.addEventListener('MSPointerDown', updateInput);
	      doc.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      doc.addEventListener('mousedown', updateInput);
	      doc.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        doc.addEventListener('touchstart', touchBuffer, options);
	        doc.addEventListener('touchend', touchBuffer);
	      }
	    }

	    // mouse wheel
	    doc.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    doc.addEventListener('keydown', updateInput);
	    doc.addEventListener('keyup', updateInput);
	  };

	  // checks conditions before updating new input
	  var updateInput = function updateInput(event) {
	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentInput !== value || currentIntent !== value) {
	        var activeElem = document.activeElement;
	        var activeInput = false;
	        var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

	        if (notFormInput || changeIntentMap.indexOf(eventKey) !== -1) {
	          activeInput = true;
	        }

	        if (value === 'touch' ||
	        // ignore mouse modifier keys
	        value === 'mouse' ||
	        // don't switch if the current element is a form input
	        value === 'keyboard' && eventKey && activeInput && ignoreMap.indexOf(eventKey) === -1) {
	          // set the current and catch-all variable
	          currentInput = currentIntent = value;

	          setInput();
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var setInput = function setInput() {
	    doc.setAttribute('data-whatinput', currentInput);
	    doc.setAttribute('data-whatintent', currentInput);

	    if (inputTypes.indexOf(currentInput) === -1) {
	      inputTypes.push(currentInput);
	      doc.className += ' whatinput-types-' + currentInput;
	    }

	    fireFunctions('input');
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    // test to see if `mousemove` happened relative to the screen
	    // to detect scrolling versus mousemove
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }

	    // only execute if the touch buffer timer isn't running
	    // or scrolling isn't happening
	    if (!isBuffering && !isScrolling) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentIntent !== value) {
	        currentIntent = value;

	        doc.setAttribute('data-whatintent', currentIntent);

	        fireFunctions('intent');
	      }
	    }
	  };

	  // buffers touch events because they frequently also fire mouse events
	  var touchBuffer = function touchBuffer(event) {
	    if (event.type === 'touchstart') {
	      isBuffering = false;

	      // set the current input
	      updateInput(event);
	    } else {
	      isBuffering = true;
	    }
	  };

	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, currentIntent);
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function detectWheel() {
	    var wheelType = void 0;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'loose'|'strict'
	    // 'strict' (default): returns the same value as the `data-whatinput` attribute
	    // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'loose' ? currentIntent : currentInput;
	    },

	    // returns array: all the detected input types
	    types: function types() {
	      return inputTypes;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position) {
	        functionList.splice(position, 1);
	      }
	    }
	  };
	}();

/***/ }
/******/ ])
});
;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const jarallax = __webpack_require__(3).default;
const jarallaxVideo = __webpack_require__(12).default;
const jarallaxElement = __webpack_require__(15).default;

module.exports = {
    jarallax,
    jarallaxElement() {
        return jarallaxElement(jarallax);
    },
    jarallaxVideo() {
        return jarallaxVideo(jarallax);
    },
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = jarallaxVideo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_worker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_video_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_video_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_global__);



function jarallaxVideo(jarallax = __WEBPACK_IMPORTED_MODULE_1_global___default.a.jarallax) {
    if (typeof jarallax === 'undefined') {
        return;
    }

    const Jarallax = jarallax.constructor;

    // append video after init Jarallax
    const defInit = Jarallax.prototype.init;
    Jarallax.prototype.init = function () {
        const self = this;

        defInit.apply(self);

        if (self.video && !self.options.disableVideo()) {
            self.video.getVideo((video) => {
                const $parent = video.parentNode;
                self.css(video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    margin: 0,
                    zIndex: -1,
                });
                self.$video = video;
                self.image.$container.appendChild(video);

                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
            });
        }
    };

    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function () {
        const self = this;
        const imageData = defCoverImage.apply(self);
        const node = self.image.$item ? self.image.$item.nodeName : false;

        if (imageData && self.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
            let h = imageData.image.height;
            let w = h * self.image.width / self.image.height;
            let ml = (imageData.container.width - w) / 2;
            let mt = imageData.image.marginTop;

            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self.image.height / self.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }

            // add video height over than need to hide controls
            if (node === 'IFRAME') {
                h += 400;
                mt -= 200;
            }

            self.css(self.$video, {
                width: `${w}px`,
                marginLeft: `${ml}px`,
                height: `${h}px`,
                marginTop: `${mt}px`,
            });
        }

        return imageData;
    };

    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function () {
        const self = this;
        const defaultResult = defInitImg.apply(self);

        if (!self.options.videoSrc) {
            self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
        }

        if (self.options.videoSrc) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }

        return defaultResult;
    };

    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function () {
        const self = this;
        const defaultResult = defCanInitParallax.apply(self);

        if (!self.options.videoSrc) {
            return defaultResult;
        }

        const video = new __WEBPACK_IMPORTED_MODULE_0_video_worker___default.a(self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showContols: false,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0,
        });

        if (video.isValid()) {
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self.defaultInitImgResult) {
                    video.getImageURL((url) => {
                        // save default user styles
                        const curStyle = self.$item.getAttribute('style');
                        if (curStyle) {
                            self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                        }

                        // set new background
                        self.css(self.$item, {
                            'background-image': `url("${url}")`,
                            'background-position': 'center',
                            'background-size': 'cover',
                        });
                    });
                }

                // init video
            } else {
                video.on('ready', () => {
                    if (self.options.videoPlayOnlyVisible) {
                        const oldOnScroll = self.onScroll;
                        self.onScroll = function () {
                            oldOnScroll.apply(self);
                            if (self.options.videoLoop || (!self.options.videoLoop && !self.videoEnded)) {
                                if (self.isVisible()) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }
                        };
                    } else {
                        video.play();
                    }
                });

                video.on('started', () => {
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;

                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();

                    // hide image
                    if (self.image.$default_item) {
                        self.image.$default_item.style.display = 'none';
                    }
                });

                video.on('ended', () => {
                    self.videoEnded = true;

                    if (!self.options.videoLoop) {
                        // show image if Loop disabled
                        if (self.image.$default_item) {
                            self.image.$item = self.image.$default_item;
                            self.image.$item.style.display = 'block';

                            // set image width and height
                            self.coverImage();
                            self.clipContainer();
                            self.onScroll();
                        }
                    }
                });

                self.video = video;

                // set image if not exists
                if (!self.defaultInitImgResult) {
                    if (video.type !== 'local') {
                        video.getImageURL((url) => {
                            self.image.src = url;
                            self.init();
                        });

                        return false;
                    }

                    // set empty image on local video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    return true;
                }
            }
        }

        return defaultResult;
    };

    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function () {
        const self = this;

        if (self.image.$default_item) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }

        defDestroy.apply(self);
    };
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this._done = [];
    this._fail = [];
}
Deferred.prototype = {
    execute(list, args) {
        let i = list.length;
        args = Array.prototype.slice.call(args);
        while (i--) {
            list[i].apply(null, args);
        }
    },
    resolve() {
        this.execute(this._done, arguments);
    },
    reject() {
        this.execute(this._fail, arguments);
    },
    done(callback) {
        this._done.push(callback);
    },
    fail(callback) {
        this._fail.push(callback);
    },
};

let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = new Deferred();
const loadingVimeoDefer = new Deferred();

class VideoWorker {
    constructor(url, options) {
        const self = this;

        self.url = url;

        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showContols: true,

            // start / end video time in seconds
            startTime: 0,
            endTime: 0,
        };

        self.options = self.extend({}, self.options_default, options);

        // check URL
        self.videoID = self.parseURL(url);

        // init
        if (self.videoID) {
            self.ID = ID++;
            self.loadAPI();
            self.init();
        }
    }

    // Extend like jQuery.extend
    extend(out) {
        out = out || {};
        Object.keys(arguments).forEach((i) => {
            if (!arguments[i]) {
                return;
            }
            Object.keys(arguments[i]).forEach((key) => {
                out[key] = arguments[i][key];
            });
        });
        return out;
    }

    parseURL(url) {
        // parse youtube ID
        function getYoutubeID(ytUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            const match = ytUrl.match(regExp);
            return match && match[1].length === 11 ? match[1] : false;
        }

        // parse vimeo ID
        function getVimeoID(vmUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            const match = vmUrl.match(regExp);
            return match && match[3] ? match[3] : false;
        }

        // parse local string
        function getLocalVideos(locUrl) {
            // eslint-disable-next-line no-useless-escape
            const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
            const result = {};
            let ready = 0;
            videoFormats.forEach((val) => {
                // eslint-disable-next-line no-useless-escape
                const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                    // eslint-disable-next-line prefer-destructuring
                    result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
                    ready = 1;
                }
            });
            return ready ? result : false;
        }

        const Youtube = getYoutubeID(url);
        const Vimeo = getVimeoID(url);
        const Local = getLocalVideos(url);

        if (Youtube) {
            this.type = 'youtube';
            return Youtube;
        } else if (Vimeo) {
            this.type = 'vimeo';
            return Vimeo;
        } else if (Local) {
            this.type = 'local';
            return Local;
        }

        return false;
    }

    isValid() {
        return !!this.videoID;
    }

    // events
    on(name, callback) {
        this.userEventsList = this.userEventsList || [];

        // add new callback in events list
        (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }
    off(name, callback) {
        if (!this.userEventsList || !this.userEventsList[name]) {
            return;
        }

        if (!callback) {
            delete this.userEventsList[name];
        } else {
            this.userEventsList[name].forEach((val, key) => {
                if (val === callback) {
                    this.userEventsList[name][key] = false;
                }
            });
        }
    }
    fire(name) {
        const args = [].slice.call(arguments, 1);
        if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
            this.userEventsList[name].forEach((val) => {
                // call with all arguments
                if (val) {
                    val.apply(this, args);
                }
            });
        }
    }

    play(start) {
        const self = this;
        if (!self.player) {
            return;
        }

        if (self.type === 'youtube' && self.player.playVideo) {
            if (typeof start !== 'undefined') {
                self.player.seekTo(start || 0);
            }
            if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                self.player.playVideo();
            }
        }

        if (self.type === 'vimeo') {
            if (typeof start !== 'undefined') {
                self.player.setCurrentTime(start);
            }
            self.player.getPaused().then((paused) => {
                if (paused) {
                    self.player.play();
                }
            });
        }

        if (self.type === 'local') {
            if (typeof start !== 'undefined') {
                self.player.currentTime = start;
            }
            if (self.player.paused) {
                self.player.play();
            }
        }
    }

    pause() {
        const self = this;
        if (!self.player) {
            return;
        }

        if (self.type === 'youtube' && self.player.pauseVideo) {
            if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                self.player.pauseVideo();
            }
        }

        if (self.type === 'vimeo') {
            self.player.getPaused().then((paused) => {
                if (!paused) {
                    self.player.pause();
                }
            });
        }

        if (self.type === 'local') {
            if (!self.player.paused) {
                self.player.pause();
            }
        }
    }

    mute() {
        const self = this;
        if (!self.player) {
            return;
        }

        if (self.type === 'youtube' && self.player.mute) {
            self.player.mute();
        }

        if (self.type === 'vimeo' && self.player.setVolume) {
            self.player.setVolume(0);
        }

        if (self.type === 'local') {
            self.$video.muted = true;
        }
    }

    unmute() {
        const self = this;
        if (!self.player) {
            return;
        }

        if (self.type === 'youtube' && self.player.mute) {
            self.player.unMute();
        }

        if (self.type === 'vimeo' && self.player.setVolume) {
            self.player.setVolume(self.options.volume);
        }

        if (self.type === 'local') {
            self.$video.muted = false;
        }
    }

    setVolume(volume = false) {
        const self = this;
        if (!self.player || !volume) {
            return;
        }

        if (self.type === 'youtube' && self.player.setVolume) {
            self.player.setVolume(volume);
        }

        if (self.type === 'vimeo' && self.player.setVolume) {
            self.player.setVolume(volume);
        }

        if (self.type === 'local') {
            self.$video.volume = volume / 100;
        }
    }

    getVolume(callback) {
        const self = this;
        if (!self.player) {
            callback(false);
            return;
        }

        if (self.type === 'youtube' && self.player.getVolume) {
            callback(self.player.getVolume());
        }

        if (self.type === 'vimeo' && self.player.getVolume) {
            self.player.getVolume().then((volume) => {
                callback(volume);
            });
        }

        if (self.type === 'local') {
            callback(self.$video.volume * 100);
        }
    }

    getMuted(callback) {
        const self = this;
        if (!self.player) {
            callback(null);
            return;
        }

        if (self.type === 'youtube' && self.player.isMuted) {
            callback(self.player.isMuted());
        }

        if (self.type === 'vimeo' && self.player.getVolume) {
            self.player.getVolume().then((volume) => {
                callback(!!volume);
            });
        }

        if (self.type === 'local') {
            callback(self.$video.muted);
        }
    }

    getImageURL(callback) {
        const self = this;

        if (self.videoImage) {
            callback(self.videoImage);
            return;
        }

        if (self.type === 'youtube') {
            const availableSizes = [
                'maxresdefault',
                'sddefault',
                'hqdefault',
                '0',
            ];
            let step = 0;

            const tempImg = new Image();
            tempImg.onload = function () {
                // if no thumbnail, youtube add their own image with width = 120px
                if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                    // ok
                    self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                    callback(self.videoImage);
                } else {
                    // try another size
                    step++;
                    this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                }
            };
            tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
        }

        if (self.type === 'vimeo') {
            let request = new XMLHttpRequest();
            request.open('GET', `https://vimeo.com/api/v2/video/${self.videoID}.json`, true);
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status >= 200 && this.status < 400) {
                        // Success!
                        const response = JSON.parse(this.responseText);
                        self.videoImage = response[0].thumbnail_large;
                        callback(self.videoImage);
                    } else {
                        // Error :(
                    }
                }
            };
            request.send();
            request = null;
        }
    }

    // fallback to the old version.
    getIframe(callback) {
        this.getVideo(callback);
    }

    getVideo(callback) {
        const self = this;

        // return generated video block
        if (self.$video) {
            callback(self.$video);
            return;
        }

        // generate new video block
        self.onAPIready(() => {
            let hiddenDiv;
            if (!self.$video) {
                hiddenDiv = document.createElement('div');
                hiddenDiv.style.display = 'none';
            }

            // Youtube
            if (self.type === 'youtube') {
                self.playerOptions = {};
                self.playerOptions.videoId = self.videoID;
                self.playerOptions.playerVars = {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0,
                    // autoplay enable on mobile devices
                    playsinline: 1,
                };

                // hide controls
                if (!self.options.showContols) {
                    self.playerOptions.playerVars.iv_load_policy = 3;
                    self.playerOptions.playerVars.modestbranding = 1;
                    self.playerOptions.playerVars.controls = 0;
                    self.playerOptions.playerVars.showinfo = 0;
                    self.playerOptions.playerVars.disablekb = 1;
                }

                // events
                let ytStarted;
                let ytProgressInterval;
                self.playerOptions.events = {
                    onReady(e) {
                        // mute
                        if (self.options.mute) {
                            e.target.mute();
                        } else if (self.options.volume) {
                            e.target.setVolume(self.options.volume);
                        }

                        // autoplay
                        if (self.options.autoplay) {
                            self.play(self.options.startTime);
                        }
                        self.fire('ready', e);

                        // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                        // https://github.com/nk-o/video-worker/issues/2
                        if (self.options.loop && !self.options.endTime) {
                            const secondsOffset = 0.1;
                            self.options.endTime = self.player.getDuration() - secondsOffset;
                        }

                        // volumechange
                        setInterval(() => {
                            self.getVolume((volume) => {
                                if (self.options.volume !== volume) {
                                    self.options.volume = volume;
                                    self.fire('volumechange', e);
                                }
                            });
                        }, 150);
                    },
                    onStateChange(e) {
                        // loop
                        if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                            self.play(self.options.startTime);
                        }
                        if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                            ytStarted = 1;
                            self.fire('started', e);
                        }
                        if (e.data === YT.PlayerState.PLAYING) {
                            self.fire('play', e);
                        }
                        if (e.data === YT.PlayerState.PAUSED) {
                            self.fire('pause', e);
                        }
                        if (e.data === YT.PlayerState.ENDED) {
                            self.fire('ended', e);
                        }

                        // progress check
                        if (e.data === YT.PlayerState.PLAYING) {
                            ytProgressInterval = setInterval(() => {
                                self.fire('timeupdate', e);

                                // check for end of video and play again or stop
                                if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                    if (self.options.loop) {
                                        self.play(self.options.startTime);
                                    } else {
                                        self.pause();
                                    }
                                }
                            }, 150);
                        } else {
                            clearInterval(ytProgressInterval);
                        }
                    },
                };

                const firstInit = !self.$video;
                if (firstInit) {
                    const div = document.createElement('div');
                    div.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(div);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                    self.$video = document.getElementById(self.playerID);

                    // get video width and height
                    self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                    self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                }
            }

            // Vimeo
            if (self.type === 'vimeo') {
                self.playerOptions = {
                    id: self.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: self.options.autoplay ? 1 : 0,
                    loop: self.options.loop ? 1 : 0,
                    muted: self.options.mute ? 1 : 0,
                };

                if (self.options.volume) {
                    self.playerOptions.volume = self.options.volume;
                }

                // hide controls
                if (!self.options.showContols) {
                    self.playerOptions.badge = 0;
                    self.playerOptions.byline = 0;
                    self.playerOptions.portrait = 0;
                    self.playerOptions.title = 0;
                }


                if (!self.$video) {
                    let playerOptionsString = '';
                    Object.keys(self.playerOptions).forEach((key) => {
                        if (playerOptionsString !== '') {
                            playerOptionsString += '&';
                        }
                        playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;
                    });

                    // we need to create iframe manually because when we create it using API
                    // js events won't triggers after iframe moved to another place
                    self.$video = document.createElement('iframe');
                    self.$video.setAttribute('id', self.playerID);
                    self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);
                    self.$video.setAttribute('frameborder', '0');
                    self.$video.setAttribute('mozallowfullscreen', '');
                    self.$video.setAttribute('allowfullscreen', '');

                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions);

                // set current time for autoplay
                if (self.options.startTime && self.options.autoplay) {
                    self.player.setCurrentTime(self.options.startTime);
                }

                // get video width and height
                self.player.getVideoWidth().then((width) => {
                    self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then((height) => {
                    self.videoHeight = height || 720;
                });

                // events
                let vmStarted;
                self.player.on('timeupdate', (e) => {
                    if (!vmStarted) {
                        self.fire('started', e);
                        vmStarted = 1;
                    }

                    self.fire('timeupdate', e);

                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && e.seconds >= self.options.endTime) {
                            if (self.options.loop) {
                                self.play(self.options.startTime);
                            } else {
                                self.pause();
                            }
                        }
                    }
                });
                self.player.on('play', (e) => {
                    self.fire('play', e);

                    // check for the start time and start with it
                    if (self.options.startTime && e.seconds === 0) {
                        self.play(self.options.startTime);
                    }
                });
                self.player.on('pause', (e) => {
                    self.fire('pause', e);
                });
                self.player.on('ended', (e) => {
                    self.fire('ended', e);
                });
                self.player.on('loaded', (e) => {
                    self.fire('ready', e);
                });
                self.player.on('volumechange', (e) => {
                    self.fire('volumechange', e);
                });
            }

            // Local
            function addSourceToLocal(element, src, type) {
                const source = document.createElement('source');
                source.src = src;
                source.type = type;
                element.appendChild(source);
            }
            if (self.type === 'local') {
                if (!self.$video) {
                    self.$video = document.createElement('video');

                    // show controls
                    if (self.options.showContols) {
                        self.$video.controls = true;
                    }

                    // mute
                    if (self.options.mute) {
                        self.$video.muted = true;
                    } else if (self.$video.volume) {
                        self.$video.volume = self.options.volume / 100;
                    }

                    // loop
                    if (self.options.loop) {
                        self.$video.loop = true;
                    }

                    // autoplay enable on mobile devices
                    self.$video.setAttribute('playsinline', '');
                    self.$video.setAttribute('webkit-playsinline', '');

                    self.$video.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);

                    Object.keys(self.videoID).forEach((key) => {
                        addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);
                    });
                }

                self.player = self.player || self.$video;

                let locStarted;
                self.player.addEventListener('playing', (e) => {
                    if (!locStarted) {
                        self.fire('started', e);
                    }
                    locStarted = 1;
                });
                self.player.addEventListener('timeupdate', function (e) {
                    self.fire('timeupdate', e);

                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && this.currentTime >= self.options.endTime) {
                            if (self.options.loop) {
                                self.play(self.options.startTime);
                            } else {
                                self.pause();
                            }
                        }
                    }
                });
                self.player.addEventListener('play', (e) => {
                    self.fire('play', e);
                });
                self.player.addEventListener('pause', (e) => {
                    self.fire('pause', e);
                });
                self.player.addEventListener('ended', (e) => {
                    self.fire('ended', e);
                });
                self.player.addEventListener('loadedmetadata', function () {
                    // get video width and height
                    self.videoWidth = this.videoWidth || 1280;
                    self.videoHeight = this.videoHeight || 720;

                    self.fire('ready');

                    // autoplay
                    if (self.options.autoplay) {
                        self.play(self.options.startTime);
                    }
                });
                self.player.addEventListener('volumechange', (e) => {
                    self.getVolume((volume) => {
                        self.options.volume = volume;
                    });
                    self.fire('volumechange', e);
                });
            }
            callback(self.$video);
        });
    }

    init() {
        const self = this;

        self.playerID = `VideoWorker-${self.ID}`;
    }

    loadAPI() {
        const self = this;

        if (YoutubeAPIadded && VimeoAPIadded) {
            return;
        }

        let src = '';

        // load Youtube API
        if (self.type === 'youtube' && !YoutubeAPIadded) {
            YoutubeAPIadded = 1;
            src = 'https://www.youtube.com/iframe_api';
        }

        // load Vimeo API
        if (self.type === 'vimeo' && !VimeoAPIadded) {
            VimeoAPIadded = 1;
            src = 'https://player.vimeo.com/api/player.js';
        }

        if (!src) {
            return;
        }

        // add script in head section
        let tag = document.createElement('script');
        let head = document.getElementsByTagName('head')[0];
        tag.src = src;

        head.appendChild(tag);

        head = null;
        tag = null;
    }

    onAPIready(callback) {
        const self = this;

        // Youtube
        if (self.type === 'youtube') {
            // Listen for global YT player callback
            if ((typeof YT === 'undefined' || YT.loaded === 0) && !loadingYoutubePlayer) {
                // Prevents Ready event from being called twice
                loadingYoutubePlayer = 1;

                // Creates deferred so, other players know when to wait.
                window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeIframeAPIReady = null;
                    loadingYoutubeDefer.resolve('done');
                    callback();
                };
            } else if (typeof YT === 'object' && YT.loaded === 1) {
                callback();
            } else {
                loadingYoutubeDefer.done(() => {
                    callback();
                });
            }
        }

        // Vimeo
        if (self.type === 'vimeo') {
            if (typeof Vimeo === 'undefined' && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                const vimeoInterval = setInterval(() => {
                    if (typeof Vimeo !== 'undefined') {
                        clearInterval(vimeoInterval);
                        loadingVimeoDefer.resolve('done');
                        callback();
                    }
                }, 20);
            } else if (typeof Vimeo !== 'undefined') {
                callback();
            } else {
                loadingVimeoDefer.done(() => {
                    callback();
                });
            }
        }

        // Local
        if (self.type === 'local') {
            callback();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = VideoWorker;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = jarallaxElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_global__);
/* eslint no-case-declarations: "off" */


function jarallaxElement(jarallax = __WEBPACK_IMPORTED_MODULE_0_global___default.a.jarallax) {
    if (typeof jarallax === 'undefined') {
        return;
    }

    const Jarallax = jarallax.constructor;

    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'clipContainer',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize',
    ].forEach((key) => {
        const def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function () {
            const self = this;
            const args = arguments || [];

            if (key === 'initImg' && self.$item.getAttribute('data-jarallax-element') !== null) {
                self.options.type = 'element';
                self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
            }
            if (self.options.type !== 'element') {
                return def.apply(self, args);
            }

            self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';

            switch (key) {
            case 'init':
                const speedArr = self.pureOptions.speed.split(' ');
                self.options.speed = self.pureOptions.speed || 0;
                self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;

                const thresholdArr = self.pureOptions.threshold.split(' ');
                self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                break;
            case 'onResize':
                const defTransform = self.css(self.$item, 'transform');
                self.css(self.$item, { transform: '' });
                const rect = self.$item.getBoundingClientRect();
                self.itemData = {
                    width: rect.width,
                    height: rect.height,
                    y: rect.top + self.getWindowData().y,
                    x: rect.left,
                };
                self.css(self.$item, { transform: defTransform });
                break;
            case 'onScroll':
                const wnd = self.getWindowData();
                const centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                const moveY = centerPercent * self.options.speedY;
                const moveX = centerPercent * self.options.speedX;
                let my = moveY;
                let mx = moveX;
                if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
                if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
                self.css(self.$item, { transform: `translate3d(${mx}px,${my}px,0)` });
                break;
            case 'initImg':
            case 'isVisible':
            case 'clipContainer':
            case 'coverImage':
                return true;
            // no default
            }
            return def.apply(self, args);
        };
    });
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDdhOGRkN2FkYTYzMjViYjIyMWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0ZS1yZWFkeS9saXRlcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhZmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXQtaW5wdXQvZGlzdC93aGF0LWlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamFyYWxsYXgvc3JjL2phcmFsbGF4LXZpZGVvLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlkZW8td29ya2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aWRlby13b3JrZXIvc3JjL3ZpZGVvLXdvcmtlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC1lbGVtZW50LmVzbS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsInNwZWVkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOzs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ2lCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxxQ0FBcUM7QUFDckMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSx1RUFBdUUsZ0JBQWdCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0Isb0JBQW9CLDBCQUEwQjtBQUNsSDtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWU7QUFDL0QsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsZ0JBQWdCO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsZ0JBQWdCO0FBQzlELDBCQUEwQixNQUFNLEtBQUssT0FBTztBQUM1QywyQkFBMkIsTUFBTSxNQUFNLE9BQU87QUFDOUMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMEJBQTBCLFNBQVM7QUFDbkMsdURBQXVELFVBQVU7QUFDakUsc0JBQXNCLFdBQVc7QUFDakMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxVQUFVO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3R2QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOzs7O0FBQ0E7Ozs7QUFTQTs7OztBQVBBQSxPQUFPQyxDQUFQLEdBQVdBLGdCQUFYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUFDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQSwwQkFBU0QsU0FBU0UsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBVCxFQUFpRDtBQUMvQ0MsV0FBTztBQUR3QyxHQUFqRDtBQUlELENBVEQ7O0FBV0FILFNBQVNJLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNILGdCQUF6QyxDQUEwRCxPQUExRCxFQUFtRSxZQUFZO0FBQzdFLE9BQUtJLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixXQUF0QjtBQUNBTixXQUFTTyxhQUFULENBQXVCLDJCQUF2QixFQUFvREYsU0FBcEQsQ0FBOERDLE1BQTlELENBQXFFLFFBQXJFO0FBQ0QsQ0FIRCxFOzs7Ozs7QUNuQ0Esd0I7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsQ0FBQztBQUNELEM7Ozs7OztBQzNYQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCLCtCQUErQixHQUFHO0FBQ2xDLDJCQUEyQixFQUFFO0FBQzdCLDhCQUE4QixHQUFHO0FBQ2pDLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsSUFBSTtBQUM1RDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pPQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCLEdBQUcsS0FBSyxHQUFHLFFBQVE7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDdhOGRkN2FkYTYzMjViYjIyMWMiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XHJcblx0XHQvLyBBbHJlYWR5IHJlYWR5IG9yIGludGVyYWN0aXZlLCBleGVjdXRlIGNhbGxiYWNrXHJcblx0XHRjYWxsYmFjay5jYWxsKCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XHJcblx0XHQvLyBPbGQgYnJvd3NlcnNcclxuXHRcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKVxyXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcblx0XHQvLyBNb2Rlcm4gYnJvd3NlcnNcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xpdGUtcmVhZHkvbGl0ZXJlYWR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGRvbVJlYWR5IGZyb20gJ2xpdGUtcmVhZHknO1xuaW1wb3J0IHJhZiBmcm9tICdyYWZsJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJ2dsb2JhbCc7XG5cbmNvbnN0IGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUgJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VkZ2UvJykgPiAtMTtcblxuY29uc3Qgc3VwcG9ydFRyYW5zZm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4ZXMgPSAndHJhbnNmb3JtIFdlYmtpdFRyYW5zZm9ybSBNb3pUcmFuc2Zvcm0nLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGl2ICYmIGRpdi5zdHlsZVtwcmVmaXhlc1tpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8vIFdpbmRvdyBkYXRhXG5sZXQgd25kVztcbmxldCB3bmRIO1xubGV0IHduZFk7XG5sZXQgZm9yY2VSZXNpemVQYXJhbGxheCA9IGZhbHNlO1xubGV0IGZvcmNlU2Nyb2xsUGFyYWxsYXggPSBmYWxzZTtcbmZ1bmN0aW9uIHVwZGF0ZVduZFZhcnMoZSkge1xuICAgIHduZFcgPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgd25kSCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIGlmICh0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgKGUudHlwZSA9PT0gJ2xvYWQnIHx8IGUudHlwZSA9PT0gJ2RvbS1sb2FkZWQnKSkge1xuICAgICAgICBmb3JjZVJlc2l6ZVBhcmFsbGF4ID0gdHJ1ZTtcbiAgICB9XG59XG51cGRhdGVXbmRWYXJzKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlV25kVmFycyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVXbmRWYXJzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdXBkYXRlV25kVmFycyk7XG5kb21SZWFkeSgoKSA9PiB7XG4gICAgdXBkYXRlV25kVmFycyh7XG4gICAgICAgIHR5cGU6ICdkb20tbG9hZGVkJyxcbiAgICB9KTtcbn0pO1xuXG4vLyBsaXN0IHdpdGggYWxsIGphcmFsbGF4IGluc3RhbmNlc1xuLy8gbmVlZCB0byByZW5kZXIgYWxsIGluIG9uZSBzY3JvbGwvcmVzaXplIGV2ZW50XG5jb25zdCBqYXJhbGxheExpc3QgPSBbXTtcblxuLy8gQW5pbWF0ZSBpZiBjaGFuZ2VkIHdpbmRvdyBzaXplIG9yIHNjcm9sbGVkIHBhZ2VcbmxldCBvbGRQYWdlRGF0YSA9IGZhbHNlO1xuZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG4gICAgaWYgKCFqYXJhbGxheExpc3QubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd25kWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3bmRZID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUmVzaXplZCA9IGZvcmNlUmVzaXplUGFyYWxsYXggfHwgIW9sZFBhZ2VEYXRhIHx8IG9sZFBhZ2VEYXRhLndpZHRoICE9PSB3bmRXIHx8IG9sZFBhZ2VEYXRhLmhlaWdodCAhPT0gd25kSDtcbiAgICBjb25zdCBpc1Njcm9sbGVkID0gZm9yY2VTY3JvbGxQYXJhbGxheCB8fCBpc1Jlc2l6ZWQgfHwgIW9sZFBhZ2VEYXRhIHx8IG9sZFBhZ2VEYXRhLnkgIT09IHduZFk7XG5cbiAgICBmb3JjZVJlc2l6ZVBhcmFsbGF4ID0gZmFsc2U7XG4gICAgZm9yY2VTY3JvbGxQYXJhbGxheCA9IGZhbHNlO1xuXG4gICAgaWYgKGlzUmVzaXplZCB8fCBpc1Njcm9sbGVkKSB7XG4gICAgICAgIGphcmFsbGF4TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLm9uU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9sZFBhZ2VEYXRhID0ge1xuICAgICAgICAgICAgd2lkdGg6IHduZFcsXG4gICAgICAgICAgICBoZWlnaHQ6IHduZEgsXG4gICAgICAgICAgICB5OiB3bmRZLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJhZih1cGRhdGVQYXJhbGxheCk7XG59XG5cblxuLy8gUmVzaXplT2JzZXJ2ZXJcbmNvbnN0IHJlc2l6ZU9ic2VydmVyID0gZ2xvYmFsLlJlc2l6ZU9ic2VydmVyID8gbmV3IGdsb2JhbC5SZXNpemVPYnNlcnZlcigoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkgJiYgZW50cnkubGVuZ3RoKSB7XG4gICAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFyZ2V0ICYmIGl0ZW0udGFyZ2V0LmphcmFsbGF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm9yY2VSZXNpemVQYXJhbGxheCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50YXJnZXQuamFyYWxsYXgub25SZXNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3JjZVNjcm9sbFBhcmFsbGF4ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSkgOiBmYWxzZTtcblxuXG5sZXQgaW5zdGFuY2VJRCA9IDA7XG5cbi8vIEphcmFsbGF4IGNsYXNzXG5jbGFzcyBKYXJhbGxheCB7XG4gICAgY29uc3RydWN0b3IoaXRlbSwgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5pbnN0YW5jZUlEID0gaW5zdGFuY2VJRCsrO1xuXG4gICAgICAgIHNlbGYuJGl0ZW0gPSBpdGVtO1xuXG4gICAgICAgIHNlbGYuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc2Nyb2xsJywgLy8gdHlwZSBvZiBwYXJhbGxheDogc2Nyb2xsLCBzY2FsZSwgb3BhY2l0eSwgc2NhbGUtb3BhY2l0eSwgc2Nyb2xsLW9wYWNpdHlcbiAgICAgICAgICAgIHNwZWVkOiAwLjUsIC8vIHN1cHBvcnRlZCB2YWx1ZSBmcm9tIC0xIHRvIDJcbiAgICAgICAgICAgIGltZ1NyYzogbnVsbCxcbiAgICAgICAgICAgIGltZ0VsZW1lbnQ6ICcuamFyYWxsYXgtaW1nJyxcbiAgICAgICAgICAgIGltZ1NpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICBpbWdQb3NpdGlvbjogJzUwJSA1MCUnLFxuICAgICAgICAgICAgaW1nUmVwZWF0OiAnbm8tcmVwZWF0JywgLy8gc3VwcG9ydGVkIG9ubHkgZm9yIGJhY2tncm91bmQsIG5vdCBmb3IgPGltZz4gdGFnXG4gICAgICAgICAgICBrZWVwSW1nOiBmYWxzZSwgLy8ga2VlcCA8aW1nPiB0YWcgaW4gaXQncyBkZWZhdWx0IHBsYWNlXG4gICAgICAgICAgICBlbGVtZW50SW5WaWV3cG9ydDogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogLTEwMCxcbiAgICAgICAgICAgIGRpc2FibGVQYXJhbGxheDogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlVmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgYXV0b21hdGljUmVzaXplOiB0cnVlLCAvLyB1c2UgUmVzaXplT2JzZXJ2ZXIgdG8gcmVjYWxjdWxhdGUgcG9zaXRpb24gYW5kIHNpemUgb2YgcGFyYWxsYXggaW1hZ2VcblxuICAgICAgICAgICAgLy8gdmlkZW9cbiAgICAgICAgICAgIHZpZGVvU3JjOiBudWxsLFxuICAgICAgICAgICAgdmlkZW9TdGFydFRpbWU6IDAsXG4gICAgICAgICAgICB2aWRlb0VuZFRpbWU6IDAsXG4gICAgICAgICAgICB2aWRlb1ZvbHVtZTogMCxcbiAgICAgICAgICAgIHZpZGVvTG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHZpZGVvUGxheU9ubHlWaXNpYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBldmVudHNcbiAgICAgICAgICAgIG9uU2Nyb2xsOiBudWxsLCAvLyBmdW5jdGlvbihjYWxjdWxhdGlvbnMpIHt9XG4gICAgICAgICAgICBvbkluaXQ6IG51bGwsIC8vIGZ1bmN0aW9uKCkge31cbiAgICAgICAgICAgIG9uRGVzdHJveTogbnVsbCwgLy8gZnVuY3Rpb24oKSB7fVxuICAgICAgICAgICAgb25Db3ZlckltYWdlOiBudWxsLCAvLyBmdW5jdGlvbigpIHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gREVQUkVDQVRFRDogb2xkIGRhdGEtb3B0aW9uc1xuICAgICAgICBjb25zdCBkZXByZWNhdGVkRGF0YUF0dHJpYnV0ZSA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4Jyk7XG4gICAgICAgIGNvbnN0IG9sZERhdGFPcHRpb25zID0gSlNPTi5wYXJzZShkZXByZWNhdGVkRGF0YUF0dHJpYnV0ZSB8fCAne30nKTtcbiAgICAgICAgaWYgKGRlcHJlY2F0ZWREYXRhQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZXRlY3RlZCB1c2FnZSBvZiBkZXByZWNhdGVkIGRhdGEtamFyYWxsYXggSlNPTiBvcHRpb25zLCB5b3Ugc2hvdWxkIHVzZSBwdXJlIGRhdGEtYXR0cmlidXRlIG9wdGlvbnMuIFNlZSBpbmZvIGhlcmUgLSBodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9pc3N1ZXMvNTMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgZGF0YS1vcHRpb25zXG4gICAgICAgIGNvbnN0IGRhdGFPcHRpb25zID0gc2VsZi4kaXRlbS5kYXRhc2V0IHx8IHt9O1xuICAgICAgICBjb25zdCBwdXJlRGF0YU9wdGlvbnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YU9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG93ZUNhc2VPcHRpb24gPSBrZXkuc3Vic3RyKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKGxvd2VDYXNlT3B0aW9uICYmIHR5cGVvZiBzZWxmLmRlZmF1bHRzW2xvd2VDYXNlT3B0aW9uXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwdXJlRGF0YU9wdGlvbnNbbG93ZUNhc2VPcHRpb25dID0gZGF0YU9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5vcHRpb25zID0gc2VsZi5leHRlbmQoe30sIHNlbGYuZGVmYXVsdHMsIG9sZERhdGFPcHRpb25zLCBwdXJlRGF0YU9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgICAgICAgc2VsZi5wdXJlT3B0aW9ucyA9IHNlbGYuZXh0ZW5kKHt9LCBzZWxmLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHByZXBhcmUgJ3RydWUnIGFuZCAnZmFsc2UnIHN0cmluZ3MgdG8gYm9vbGVhblxuICAgICAgICBPYmplY3Qua2V5cyhzZWxmLm9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9uc1trZXldID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0aW9uc1trZXldID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZml4IHNwZWVkIG9wdGlvbiBbLTEuMCwgMi4wXVxuICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWQgPSBNYXRoLm1pbigyLCBNYXRoLm1heCgtMSwgcGFyc2VGbG9hdChzZWxmLm9wdGlvbnMuc3BlZWQpKSk7XG5cbiAgICAgICAgLy8gZGVwcmVjYXRlZCBub0FuZHJvaWQgYW5kIG5vSW9zIG9wdGlvbnNcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5ub0FuZHJvaWQgfHwgc2VsZi5vcHRpb25zLm5vSW9zKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZXRlY3RlZCB1c2FnZSBvZiBkZXByZWNhdGVkIG5vQW5kcm9pZCBvciBub0lvcyBvcHRpb25zLCB5b3Ugc2hvdWxkIHVzZSBkaXNhYmxlUGFyYWxsYXggb3B0aW9uLiBTZWUgaW5mbyBoZXJlIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvI2Rpc2FibGUtb24tbW9iaWxlLWRldmljZXMnKTtcblxuICAgICAgICAgICAgLy8gcHJlcGFyZSBmYWxsYmFjayBpZiBkaXNhYmxlUGFyYWxsYXggb3B0aW9uIGlzIG5vdCB1c2VkXG4gICAgICAgICAgICBpZiAoIXNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm5vSW9zICYmIHNlbGYub3B0aW9ucy5ub0FuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9IC9pUGFkfGlQaG9uZXxpUG9kfEFuZHJvaWQvO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5vcHRpb25zLm5vSW9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAvaVBhZHxpUGhvbmV8aVBvZC87XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLm9wdGlvbnMubm9BbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAvQW5kcm9pZC87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJlcGFyZSBkaXNhYmxlUGFyYWxsYXggY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9IG5ldyBSZWdFeHAoc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVQYXJhbGxheFJlZ2V4cCA9IHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXg7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gKCkgPT4gZGlzYWJsZVBhcmFsbGF4UmVnZXhwLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gKCkgPT4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGRpc2FibGVWaWRlbyBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gbmV3IFJlZ0V4cChzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZVZpZGVvUmVnZXhwID0gc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbztcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSAoKSA9PiBkaXNhYmxlVmlkZW9SZWdleHAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSAoKSA9PiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1c3RvbSBlbGVtZW50IHRvIGNoZWNrIGlmIHBhcmFsbGF4IGluIHZpZXdwb3J0XG4gICAgICAgIGxldCBlbGVtZW50SW5WUCA9IHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydDtcbiAgICAgICAgLy8gZ2V0IGZpcnN0IGl0ZW0gZnJvbSBhcnJheVxuICAgICAgICBpZiAoZWxlbWVudEluVlAgJiYgdHlwZW9mIGVsZW1lbnRJblZQID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZWxlbWVudEluVlAubGVuZ3RoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgW2VsZW1lbnRJblZQXSA9IGVsZW1lbnRJblZQO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIGRvbSBlbGVtZW50XG4gICAgICAgIGlmICghKGVsZW1lbnRJblZQIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnRJblZQID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQgPSBlbGVtZW50SW5WUDtcblxuICAgICAgICBzZWxmLmltYWdlID0ge1xuICAgICAgICAgICAgc3JjOiBzZWxmLm9wdGlvbnMuaW1nU3JjIHx8IG51bGwsXG4gICAgICAgICAgICAkY29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgdXNlSW1nVGFnOiBmYWxzZSxcblxuICAgICAgICAgICAgLy8gcG9zaXRpb24gZml4ZWQgaXMgbmVlZGVkIGZvciB0aGUgbW9zdCBvZiBicm93c2VycyBiZWNhdXNlIGFic29sdXRlIHBvc2l0aW9uIGhhdmUgZ2xpdGNoZXNcbiAgICAgICAgICAgIC8vIG9uIE1hY09TIHdpdGggc21vb3RoIHNjcm9sbCB0aGVyZSBpcyBhIGh1Z2UgbGFncyB3aXRoIGFic29sdXRlIHBvc2l0aW9uIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzc1XG4gICAgICAgICAgICAvLyBvbiBtb2JpbGUgZGV2aWNlcyBiZXR0ZXIgc2Nyb2xsZWQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblxuICAgICAgICAgICAgcG9zaXRpb246IC9pUGFkfGlQaG9uZXxpUG9kfEFuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJyxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc2VsZi5pbml0SW1nKCkgJiYgc2VsZi5jYW5Jbml0UGFyYWxsYXgoKSkge1xuICAgICAgICAgICAgc2VsZi5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgc3R5bGVzIHRvIGVsZW1lbnRcbiAgICBjc3MoZWwsIHN0eWxlcykge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRyYW5zZm9ybSBwcm9wZXJ0eSB3aXRoIHZlbmRvciBwcmVmaXhcbiAgICAgICAgaWYgKHN0eWxlcy50cmFuc2Zvcm0gJiYgc3VwcG9ydFRyYW5zZm9ybSkge1xuICAgICAgICAgICAgc3R5bGVzW3N1cHBvcnRUcmFuc2Zvcm1dID0gc3R5bGVzLnRyYW5zZm9ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIGxpa2UgalF1ZXJ5LmV4dGVuZFxuICAgIGV4dGVuZChvdXQpIHtcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd1bWVudHMpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJndW1lbnRzW2ldKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBvdXRba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIC8vIGdldCB3aW5kb3cgc2l6ZSBhbmQgc2Nyb2xsIHBvc2l0aW9uLiBVc2VmdWwgZm9yIGV4dGVuc2lvbnNcbiAgICBnZXRXaW5kb3dEYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHduZFcsXG4gICAgICAgICAgICBoZWlnaHQ6IHduZEgsXG4gICAgICAgICAgICB5OiB3bmRZLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEphcmFsbGF4IGZ1bmN0aW9uc1xuICAgIGluaXRJbWcoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGZpbmQgaW1hZ2UgZWxlbWVudFxuICAgICAgICBsZXQgJGltZ0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuaW1nRWxlbWVudDtcbiAgICAgICAgaWYgKCRpbWdFbGVtZW50ICYmIHR5cGVvZiAkaW1nRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICRpbWdFbGVtZW50ID0gc2VsZi4kaXRlbS5xdWVyeVNlbGVjdG9yKCRpbWdFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuICAgICAgICBpZiAoISgkaW1nRWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkaW1nRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGltZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMua2VlcEltZykge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSAkaW1nRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSAkaW1nRWxlbWVudDtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtUGFyZW50ID0gJGltZ0VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuaW1hZ2UudXNlSW1nVGFnID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRydWUgaWYgdGhlcmUgaXMgaW1nIHRhZ1xuICAgICAgICBpZiAoc2VsZi5pbWFnZS4kaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgaW1hZ2Ugc3JjXG4gICAgICAgIGlmIChzZWxmLmltYWdlLnNyYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS5zcmMgPSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAnYmFja2dyb3VuZC1pbWFnZScpLnJlcGxhY2UoL151cmxcXChbJ1wiXT8vZywgJycpLnJlcGxhY2UoL1snXCJdP1xcKSQvZywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKCFzZWxmLmltYWdlLnNyYyB8fCBzZWxmLmltYWdlLnNyYyA9PT0gJ25vbmUnKTtcbiAgICB9XG5cbiAgICBjYW5Jbml0UGFyYWxsYXgoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0VHJhbnNmb3JtICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGltYWdlU3R5bGVzID0ge307XG5cbiAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMua2VlcEltZykge1xuICAgICAgICAgICAgLy8gc2F2ZSBkZWZhdWx0IHVzZXIgc3R5bGVzXG4gICAgICAgICAgICBjb25zdCBjdXJTdHlsZSA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgaWYgKGN1clN0eWxlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VySW1nU3R5bGUgPSBzZWxmLmltYWdlLiRpdGVtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VySW1nU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VySW1nU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCByZWxhdGl2ZSBwb3NpdGlvbiBhbmQgei1pbmRleCB0byB0aGUgcGFyZW50XG4gICAgICAgIGlmIChzZWxmLmNzcyhzZWxmLiRpdGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNzcyhzZWxmLiRpdGVtLCAnei1pbmRleCcpID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnRhaW5lciBmb3IgcGFyYWxsYXggaW1hZ2VcbiAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwgY29udGFpbmVyU3R5bGVzKTtcbiAgICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kY29udGFpbmVyLCB7XG4gICAgICAgICAgICAnei1pbmRleCc6IHNlbGYub3B0aW9ucy56SW5kZXgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBmb3IgSUUgaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzExMFxuICAgICAgICBpZiAoaXNJRSkge1xuICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45OTk5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmltYWdlLiRjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBqYXJhbGxheC1jb250YWluZXItJHtzZWxmLmluc3RhbmNlSUR9YCk7XG4gICAgICAgIHNlbGYuJGl0ZW0uYXBwZW5kQ2hpbGQoc2VsZi5pbWFnZS4kY29udGFpbmVyKTtcblxuICAgICAgICAvLyB1c2UgaW1nIHRhZ1xuICAgICAgICBpZiAoc2VsZi5pbWFnZS51c2VJbWdUYWcpIHtcbiAgICAgICAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoe1xuICAgICAgICAgICAgICAgICdvYmplY3QtZml0Jzogc2VsZi5vcHRpb25zLmltZ1NpemUsXG4gICAgICAgICAgICAgICAgJ29iamVjdC1wb3NpdGlvbic6IHNlbGYub3B0aW9ucy5pbWdQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAvLyBzdXBwb3J0IGZvciBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzXG4gICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogYG9iamVjdC1maXQ6ICR7c2VsZi5vcHRpb25zLmltZ1NpemV9OyBvYmplY3QtcG9zaXRpb246ICR7c2VsZi5vcHRpb25zLmltZ1Bvc2l0aW9ufTtgLFxuICAgICAgICAgICAgICAgICdtYXgtd2lkdGgnOiAnbm9uZScsXG4gICAgICAgICAgICB9LCBjb250YWluZXJTdHlsZXMsIGltYWdlU3R5bGVzKTtcblxuICAgICAgICAvLyB1c2UgZGl2IHdpdGggYmFja2dyb3VuZCBpbWFnZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKHNlbGYuaW1hZ2Uuc3JjKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZXMgPSBzZWxmLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogc2VsZi5vcHRpb25zLmltZ1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogc2VsZi5vcHRpb25zLmltZ1NpemUsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6IHNlbGYub3B0aW9ucy5pbWdSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybChcIiR7c2VsZi5pbWFnZS5zcmN9XCIpYCxcbiAgICAgICAgICAgICAgICB9LCBjb250YWluZXJTdHlsZXMsIGltYWdlU3R5bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ29wYWNpdHknIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2NhbGUnIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2NhbGUtb3BhY2l0eScgfHwgc2VsZi5vcHRpb25zLnNwZWVkID09PSAxKSB7XG4gICAgICAgICAgICBzZWxmLmltYWdlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIG9uZSBvZiBwYXJlbnRzIGhhdmUgdHJhbnNmb3JtIHN0eWxlICh3aXRob3V0IHRoaXMgY2hlY2ssIHNjcm9sbCB0cmFuc2Zvcm0gd2lsbCBiZSBpbnZlcnRlZCBpZiB1c2VkIHBhcmFsbGF4IHdpdGggcG9zaXRpb24gZml4ZWQpXG4gICAgICAgIC8vIGRpc2N1c3Npb24gLSBodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9pc3N1ZXMvOVxuICAgICAgICBpZiAoc2VsZi5pbWFnZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgbGV0IHBhcmVudFdpdGhUcmFuc2Zvcm0gPSAwO1xuICAgICAgICAgICAgbGV0ICRpdGVtUGFyZW50cyA9IHNlbGYuJGl0ZW07XG4gICAgICAgICAgICB3aGlsZSAoJGl0ZW1QYXJlbnRzICE9PSBudWxsICYmICRpdGVtUGFyZW50cyAhPT0gZG9jdW1lbnQgJiYgcGFyZW50V2l0aFRyYW5zZm9ybSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRyYW5zZm9ybSA9IHNlbGYuY3NzKCRpdGVtUGFyZW50cywgJy13ZWJraXQtdHJhbnNmb3JtJykgfHwgc2VsZi5jc3MoJGl0ZW1QYXJlbnRzLCAnLW1vei10cmFuc2Zvcm0nKSB8fCBzZWxmLmNzcygkaXRlbVBhcmVudHMsICd0cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VHJhbnNmb3JtICYmIHBhcmVudFRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFdpdGhUcmFuc2Zvcm0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGl0ZW1QYXJlbnRzID0gJGl0ZW1QYXJlbnRzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgcG9zaXRpb24gdG8gcGFyYWxsYXggYmxvY2tcbiAgICAgICAgaW1hZ2VTdHlsZXMucG9zaXRpb24gPSBzZWxmLmltYWdlLnBvc2l0aW9uO1xuXG4gICAgICAgIC8vIGluc2VydCBwYXJhbGxheCBpbWFnZVxuICAgICAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRpdGVtLCBpbWFnZVN0eWxlcyk7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmltYWdlLiRpdGVtKTtcblxuICAgICAgICAvLyBzZXQgaW5pdGlhbCBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICBzZWxmLm9uUmVzaXplKCk7XG4gICAgICAgIHNlbGYub25TY3JvbGwodHJ1ZSk7XG5cbiAgICAgICAgLy8gUmVzaXplT2JzZXJ2ZXJcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hdXRvbWF0aWNSZXNpemUgJiYgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoc2VsZi4kaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIG9uSW5pdCBldmVudFxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uSW5pdCkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uSW5pdC5jYWxsKHNlbGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGRlZmF1bHQgdXNlciBiYWNrZ3JvdW5kXG4gICAgICAgIGlmIChzZWxmLmNzcyhzZWxmLiRpdGVtLCAnYmFja2dyb3VuZC1pbWFnZScpICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICdub25lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5hZGRUb1BhcmFsbGF4TGlzdCgpO1xuICAgIH1cblxuICAgIC8vIGFkZCB0byBwYXJhbGxheCBpbnN0YW5jZXMgbGlzdFxuICAgIGFkZFRvUGFyYWxsYXhMaXN0KCkge1xuICAgICAgICBqYXJhbGxheExpc3QucHVzaCh0aGlzKTtcblxuICAgICAgICBpZiAoamFyYWxsYXhMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBmcm9tIHBhcmFsbGF4IGluc3RhbmNlcyBsaXN0XG4gICAgcmVtb3ZlRnJvbVBhcmFsbGF4TGlzdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgamFyYWxsYXhMaXN0LmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaW5zdGFuY2VJRCA9PT0gc2VsZi5pbnN0YW5jZUlEKSB7XG4gICAgICAgICAgICAgICAgamFyYWxsYXhMaXN0LnNwbGljZShrZXksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnJlbW92ZUZyb21QYXJhbGxheExpc3QoKTtcblxuICAgICAgICAvLyByZXR1cm4gc3R5bGVzIG9uIGNvbnRhaW5lciBhcyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgICBjb25zdCBvcmlnaW5hbFN0eWxlc1RhZyA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpO1xuICAgICAgICBzZWxmLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcbiAgICAgICAgLy8gbnVsbCBvY2N1cnMgaWYgdGhlcmUgaXMgbm8gc3R5bGUgdGFnIGJlZm9yZSBqYXJhbGxheCBpbml0XG4gICAgICAgIGlmICghb3JpZ2luYWxTdHlsZXNUYWcpIHtcbiAgICAgICAgICAgIHNlbGYuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZXNUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gc3R5bGVzIG9uIGltZyB0YWcgYXMgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3R5bGVzSW1nVGFnID0gc2VsZi5pbWFnZS4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG4gICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcbiAgICAgICAgICAgIC8vIG51bGwgb2NjdXJzIGlmIHRoZXJlIGlzIG5vIHN0eWxlIHRhZyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgICAgICAgaWYgKCFvcmlnaW5hbFN0eWxlc0ltZ1RhZykge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1vdmUgaW1nIHRhZyB0byBpdHMgZGVmYXVsdCBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGl0ZW1QYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtUGFyZW50LmFwcGVuZENoaWxkKHNlbGYuaW1hZ2UuJGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFkZGl0aW9uYWwgZG9tIGVsZW1lbnRzXG4gICAgICAgIGlmIChzZWxmLiRjbGlwU3R5bGVzKSB7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi4kY2xpcFN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcikge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5pbWFnZS4kY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgb25EZXN0cm95IGV2ZW50XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25EZXN0cm95KSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMub25EZXN0cm95LmNhbGwoc2VsZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGUgamFyYWxsYXggZnJvbSBpdGVtXG4gICAgICAgIGRlbGV0ZSBzZWxmLiRpdGVtLmphcmFsbGF4O1xuICAgIH1cblxuICAgIC8vIGl0IHdpbGwgcmVtb3ZlIHNvbWUgaW1hZ2Ugb3ZlcmxhcHBpbmdcbiAgICAvLyBvdmVybGFwcGluZyBvY2N1ciBkdWUgdG8gYW4gaW1hZ2UgcG9zaXRpb24gZml4ZWQgaW5zaWRlIGFic29sdXRlIHBvc2l0aW9uIGVsZW1lbnRcbiAgICBjbGlwQ29udGFpbmVyKCkge1xuICAgICAgICAvLyBuZWVkZWQgb25seSB3aGVuIGJhY2tncm91bmQgaW4gZml4ZWQgcG9zaXRpb25cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCByZWN0ID0gc2VsZi5pbWFnZS4kY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlY3Q7XG5cbiAgICAgICAgaWYgKCFzZWxmLiRjbGlwU3R5bGVzKSB7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHNlbGYuJGNsaXBTdHlsZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzLnNldEF0dHJpYnV0ZSgnaWQnLCBgamFyYWxsYXgtY2xpcC0ke3NlbGYuaW5zdGFuY2VJRH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHNlbGYuJGNsaXBTdHlsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gYCNqYXJhbGxheC1jb250YWluZXItJHtzZWxmLmluc3RhbmNlSUR9IHtcbiAgICAgICAgICAgY2xpcDogcmVjdCgwICR7d2lkdGh9cHggJHtoZWlnaHR9cHggMCk7XG4gICAgICAgICAgIGNsaXA6IHJlY3QoMCwgJHt3aWR0aH1weCwgJHtoZWlnaHR9cHgsIDApO1xuICAgICAgICB9YDtcblxuICAgICAgICAvLyBhZGQgY2xpcCBzdHlsZXMgaW5saW5lICh0aGlzIG1ldGhvZCBuZWVkIGZvciBzdXBwb3J0IElFOCBhbmQgbGVzcyBicm93c2VycylcbiAgICAgICAgaWYgKHNlbGYuJGNsaXBTdHlsZXMuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcy5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdmVySW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzZWxmLmltYWdlLiRjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRIID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHsgc3BlZWQgfSA9IHNlbGYub3B0aW9ucztcbiAgICAgICAgY29uc3QgaXNTY3JvbGwgPSBzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ3Njcm9sbCcgfHwgc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY3JvbGwtb3BhY2l0eSc7XG4gICAgICAgIGxldCBzY3JvbGxEaXN0ID0gMDtcbiAgICAgICAgbGV0IHJlc3VsdEggPSBjb250SDtcbiAgICAgICAgbGV0IHJlc3VsdE1UID0gMDtcblxuICAgICAgICAvLyBzY3JvbGwgcGFyYWxsYXhcbiAgICAgICAgaWYgKGlzU2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgZGlzdGFuY2UgYW5kIGhlaWdodCBmb3IgaW1hZ2VcbiAgICAgICAgICAgIGlmIChzcGVlZCA8IDApIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXN0ID0gc3BlZWQgKiBNYXRoLm1heChjb250SCwgd25kSCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod25kSCA8IGNvbnRIKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbERpc3QgLT0gc3BlZWQgKiAoY29udEggLSB3bmRIKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbERpc3QgPSBzcGVlZCAqIChjb250SCArIHduZEgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzaXplIGZvciBzY3JvbGwgcGFyYWxsYXhcbiAgICAgICAgICAgIGlmIChzcGVlZCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRIID0gTWF0aC5hYnMoc2Nyb2xsRGlzdCAtIHduZEgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVlZCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRIID0gc2Nyb2xsRGlzdCAvIHNwZWVkICsgTWF0aC5hYnMoc2Nyb2xsRGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdEggKz0gKHduZEggLSBjb250SCkgKiAoMSAtIHNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Nyb2xsRGlzdCAvPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgIHNlbGYucGFyYWxsYXhTY3JvbGxEaXN0YW5jZSA9IHNjcm9sbERpc3Q7XG5cbiAgICAgICAgLy8gdmVydGljYWwgY2VudGVyXG4gICAgICAgIGlmIChpc1Njcm9sbCkge1xuICAgICAgICAgICAgcmVzdWx0TVQgPSAod25kSCAtIHJlc3VsdEgpIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdE1UID0gKGNvbnRIIC0gcmVzdWx0SCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwbHkgcmVzdWx0IHRvIGl0ZW1cbiAgICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHtyZXN1bHRIfXB4YCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogYCR7cmVzdWx0TVR9cHhgLFxuICAgICAgICAgICAgbGVmdDogc2VsZi5pbWFnZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IGAke3JlY3QubGVmdH1weGAgOiAnMCcsXG4gICAgICAgICAgICB3aWR0aDogYCR7cmVjdC53aWR0aH1weGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhbGwgb25Db3ZlckltYWdlIGV2ZW50XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25Db3ZlckltYWdlKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMub25Db3ZlckltYWdlLmNhbGwoc2VsZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gc29tZSB1c2VmdWwgZGF0YS4gVXNlZCBpbiB0aGUgdmlkZW8gY292ZXIgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByZXN1bHRILFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogcmVzdWx0TVQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbmVyOiByZWN0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBvblNjcm9sbChmb3JjZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCByZWN0ID0gc2VsZi4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY29udFQgPSByZWN0LnRvcDtcbiAgICAgICAgY29uc3QgY29udEggPSByZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge307XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaW4gdmlld3BvcnRcbiAgICAgICAgbGV0IHZpZXdwb3J0UmVjdCA9IHJlY3Q7XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQpIHtcbiAgICAgICAgICAgIHZpZXdwb3J0UmVjdCA9IHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmlzRWxlbWVudEluVmlld3BvcnQgPSB2aWV3cG9ydFJlY3QuYm90dG9tID49IDBcbiAgICAgICAgICAgICYmIHZpZXdwb3J0UmVjdC5yaWdodCA+PSAwXG4gICAgICAgICAgICAmJiB2aWV3cG9ydFJlY3QudG9wIDw9IHduZEhcbiAgICAgICAgICAgICYmIHZpZXdwb3J0UmVjdC5sZWZ0IDw9IHduZFc7XG5cbiAgICAgICAgLy8gc3RvcCBjYWxjdWxhdGlvbnMgaWYgaXRlbSBpcyBub3QgaW4gdmlld3BvcnRcbiAgICAgICAgaWYgKGZvcmNlID8gZmFsc2UgOiAhc2VsZi5pc0VsZW1lbnRJblZpZXdwb3J0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjdWxhdGUgcGFyYWxsYXggaGVscGluZyB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgYmVmb3JlVG9wID0gTWF0aC5tYXgoMCwgY29udFQpO1xuICAgICAgICBjb25zdCBiZWZvcmVUb3BFbmQgPSBNYXRoLm1heCgwLCBjb250SCArIGNvbnRUKTtcbiAgICAgICAgY29uc3QgYWZ0ZXJUb3AgPSBNYXRoLm1heCgwLCAtY29udFQpO1xuICAgICAgICBjb25zdCBiZWZvcmVCb3R0b20gPSBNYXRoLm1heCgwLCBjb250VCArIGNvbnRIIC0gd25kSCk7XG4gICAgICAgIGNvbnN0IGJlZm9yZUJvdHRvbUVuZCA9IE1hdGgubWF4KDAsIGNvbnRIIC0gKGNvbnRUICsgY29udEggLSB3bmRIKSk7XG4gICAgICAgIGNvbnN0IGFmdGVyQm90dG9tID0gTWF0aC5tYXgoMCwgLWNvbnRUICsgd25kSCAtIGNvbnRIKTtcbiAgICAgICAgY29uc3QgZnJvbVZpZXdwb3J0Q2VudGVyID0gMSAtIDIgKiAod25kSCAtIGNvbnRUKSAvICh3bmRIICsgY29udEgpO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBvbiBob3cgcGVyY2VudCBvZiBzZWN0aW9uIGlzIHZpc2libGVcbiAgICAgICAgbGV0IHZpc2libGVQZXJjZW50ID0gMTtcbiAgICAgICAgaWYgKGNvbnRIIDwgd25kSCkge1xuICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQgPSAxIC0gKGFmdGVyVG9wIHx8IGJlZm9yZUJvdHRvbSkgLyBjb250SDtcbiAgICAgICAgfSBlbHNlIGlmIChiZWZvcmVUb3BFbmQgPD0gd25kSCkge1xuICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQgPSBiZWZvcmVUb3BFbmQgLyB3bmRIO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZm9yZUJvdHRvbUVuZCA8PSB3bmRIKSB7XG4gICAgICAgICAgICB2aXNpYmxlUGVyY2VudCA9IGJlZm9yZUJvdHRvbUVuZCAvIHduZEg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvcGFjaXR5XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ29wYWNpdHknIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2NhbGUtb3BhY2l0eScgfHwgc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY3JvbGwtb3BhY2l0eScpIHtcbiAgICAgICAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwwLDApJztcbiAgICAgICAgICAgIHN0eWxlcy5vcGFjaXR5ID0gdmlzaWJsZVBlcmNlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY2FsZVxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY2FsZScgfHwgc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY2FsZS1vcGFjaXR5Jykge1xuICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgLT0gc2VsZi5vcHRpb25zLnNwZWVkICogdmlzaWJsZVBlcmNlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYWxlICs9IHNlbGYub3B0aW9ucy5zcGVlZCAqICgxIC0gdmlzaWJsZVBlcmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlM2QoMCwwLDApYDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNjcm9sbFxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY3JvbGwnIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2Nyb2xsLW9wYWNpdHknKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb25ZID0gc2VsZi5wYXJhbGxheFNjcm9sbERpc3RhbmNlICogZnJvbVZpZXdwb3J0Q2VudGVyO1xuXG4gICAgICAgICAgICAvLyBmaXggaWYgcGFyYWxsYXggYmxvY2sgaW4gYWJzb2x1dGUgcG9zaXRpb25cbiAgICAgICAgICAgIGlmIChzZWxmLmltYWdlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25ZIC09IGNvbnRUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHtwb3NpdGlvbll9cHgsMClgO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwgc3R5bGVzKTtcblxuICAgICAgICAvLyBjYWxsIG9uU2Nyb2xsIGV2ZW50XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25TY3JvbGwpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vblNjcm9sbC5jYWxsKHNlbGYsIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiByZWN0LFxuXG4gICAgICAgICAgICAgICAgYmVmb3JlVG9wLFxuICAgICAgICAgICAgICAgIGJlZm9yZVRvcEVuZCxcbiAgICAgICAgICAgICAgICBhZnRlclRvcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVCb3R0b20sXG4gICAgICAgICAgICAgICAgYmVmb3JlQm90dG9tRW5kLFxuICAgICAgICAgICAgICAgIGFmdGVyQm90dG9tLFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQsXG4gICAgICAgICAgICAgICAgZnJvbVZpZXdwb3J0Q2VudGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jb3ZlckltYWdlKCk7XG4gICAgICAgIHRoaXMuY2xpcENvbnRhaW5lcigpO1xuICAgIH1cbn1cblxuXG4vLyBnbG9iYWwgZGVmaW5pdGlvblxuY29uc3QgcGx1Z2luID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgLy8gY2hlY2sgZm9yIGRvbSBlbGVtZW50XG4gICAgLy8gdGhhbmtzOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM4NDI4Ni9qYXZhc2NyaXB0LWlzZG9tLWhvdy1kby15b3UtY2hlY2staWYtYS1qYXZhc2NyaXB0LW9iamVjdC1pcy1hLWRvbS1vYmplY3RcbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IGl0ZW1zIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiBpdGVtcyAmJiB0eXBlb2YgaXRlbXMgPT09ICdvYmplY3QnICYmIGl0ZW1zICE9PSBudWxsICYmIGl0ZW1zLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBpdGVtcy5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG4gICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgY29uc3QgbGVuID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBrID0gMDtcbiAgICBsZXQgcmV0O1xuXG4gICAgZm9yIChrOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXNba10uamFyYWxsYXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1trXS5qYXJhbGxheCA9IG5ldyBKYXJhbGxheChpdGVtc1trXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbXNba10uamFyYWxsYXgpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgICAgICByZXQgPSBpdGVtc1trXS5qYXJhbGxheFtvcHRpb25zXS5hcHBseShpdGVtc1trXS5qYXJhbGxheCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xufTtcbnBsdWdpbi5jb25zdHJ1Y3RvciA9IEphcmFsbGF4O1xuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qYXJhbGxheC9zcmMvamFyYWxsYXguZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJ2dsb2JhbCcpXG5cbi8qKlxuICogYHJlcXVlc3RBbmltYXRpb25GcmFtZSgpYFxuICovXG5cbnZhciByZXF1ZXN0ID0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCBnbG9iYWwud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGdsb2JhbC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZmFsbGJhY2tcblxudmFyIHByZXYgPSArbmV3IERhdGVcbmZ1bmN0aW9uIGZhbGxiYWNrIChmbikge1xuICB2YXIgY3VyciA9ICtuZXcgRGF0ZVxuICB2YXIgbXMgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyIC0gcHJldikpXG4gIHZhciByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcylcbiAgcmV0dXJuIHByZXYgPSBjdXJyLCByZXFcbn1cblxuLyoqXG4gKiBgY2FuY2VsQW5pbWF0aW9uRnJhbWUoKWBcbiAqL1xuXG52YXIgY2FuY2VsID0gZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IGdsb2JhbC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCBnbG9iYWwubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgY2xlYXJUaW1lb3V0XG5cbmlmIChGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICByZXF1ZXN0ID0gcmVxdWVzdC5iaW5kKGdsb2JhbClcbiAgY2FuY2VsID0gY2FuY2VsLmJpbmQoZ2xvYmFsKVxufVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0XG5leHBvcnRzLmNhbmNlbCA9IGNhbmNlbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmFmbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgd2hhdElucHV0IGZyb20gJ3doYXQtaW5wdXQnO1xuXG53aW5kb3cuJCA9ICQ7XG5cbi8vIGltcG9ydCBGb3VuZGF0aW9uIGZyb20gJ2ZvdW5kYXRpb24tc2l0ZXMnO1xuLy8gSWYgeW91IHdhbnQgdG8gcGljayBhbmQgY2hvb3NlIHdoaWNoIG1vZHVsZXMgdG8gaW5jbHVkZSwgY29tbWVudCBvdXQgdGhlIGFib3ZlIGFuZCB1bmNvbW1lbnRcbi8vIHRoZSBsaW5lIGJlbG93XG4vL2ltcG9ydCAnLi9saWIvZm91bmRhdGlvbi1leHBsaWNpdC1waWVjZXMnO1xuXG5pbXBvcnQge1xuICBqYXJhbGxheCxcbiAgamFyYWxsYXhFbGVtZW50LFxuICBqYXJhbGxheFZpZGVvXG59IGZyb20gJ2phcmFsbGF4JztcblxuLy8gaW1wb3J0IHtcbi8vICAgamFyYWxsYXgsXG4vLyAgIGphcmFsbGF4RWxlbWVudCxcbi8vICAgamFyYWxsYXhWaWRlb1xuLy8gfSBmcm9tICdqYXJhbGxheCc7XG5cbi8vICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBIYW5kbGVyIHdoZW4gdGhlIERPTSBpcyBmdWxseSBsb2FkZWRcbiAgLy8gJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICBqYXJhbGxheEVsZW1lbnQoKTtcblxuICBqYXJhbGxheChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamFyYWxsYXgnKSwge1xuICAgIHNwZWVkOiAwLjVcbiAgfSk7XG5cbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLS1qcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW1haW4tbWVudS1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvYXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHdoYXQtaW5wdXQgLSBBIGdsb2JhbCB1dGlsaXR5IGZvciB0cmFja2luZyB0aGUgY3VycmVudCBpbnB1dCBtZXRob2QgKG1vdXNlLCBrZXlib2FyZCBvciB0b3VjaCkuXG4gKiBAdmVyc2lvbiB2NC4zLjFcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW4xc2V2ZW4vd2hhdC1pbnB1dFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2hhdElucHV0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndoYXRJbnB1dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aGF0SW5wdXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHQgIC8qXG5cdCAgICogdmFyaWFibGVzXG5cdCAgICovXG5cblx0ICAvLyBsYXN0IHVzZWQgaW5wdXQgdHlwZVxuXHQgIHZhciBjdXJyZW50SW5wdXQgPSAnaW5pdGlhbCc7XG5cblx0ICAvLyBsYXN0IHVzZWQgaW5wdXQgaW50ZW50XG5cdCAgdmFyIGN1cnJlbnRJbnRlbnQgPSBudWxsO1xuXG5cdCAgLy8gY2FjaGUgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdCAgdmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHQgIC8vIGZvcm0gaW5wdXQgdHlwZXNcblx0ICB2YXIgZm9ybUlucHV0cyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ107XG5cblx0ICB2YXIgZnVuY3Rpb25MaXN0ID0gW107XG5cblx0ICAvLyBsaXN0IG9mIG1vZGlmaWVyIGtleXMgY29tbW9ubHkgdXNlZCB3aXRoIHRoZSBtb3VzZSBhbmRcblx0ICAvLyBjYW4gYmUgc2FmZWx5IGlnbm9yZWQgdG8gcHJldmVudCBmYWxzZSBrZXlib2FyZCBkZXRlY3Rpb25cblx0ICB2YXIgaWdub3JlTWFwID0gWzE2LCAvLyBzaGlmdFxuXHQgIDE3LCAvLyBjb250cm9sXG5cdCAgMTgsIC8vIGFsdFxuXHQgIDkxLCAvLyBXaW5kb3dzIGtleSAvIGxlZnQgQXBwbGUgY21kXG5cdCAgOTMgLy8gV2luZG93cyBtZW51IC8gcmlnaHQgQXBwbGUgY21kXG5cdCAgXTtcblxuXHQgIC8vIGxpc3Qgb2Yga2V5cyBmb3Igd2hpY2ggd2UgY2hhbmdlIGludGVudCBldmVuIGZvciBmb3JtIGlucHV0c1xuXHQgIHZhciBjaGFuZ2VJbnRlbnRNYXAgPSBbOSAvLyB0YWJcblx0ICBdO1xuXG5cdCAgLy8gbWFwcGluZyBvZiBldmVudHMgdG8gaW5wdXQgdHlwZXNcblx0ICB2YXIgaW5wdXRNYXAgPSB7XG5cdCAgICBrZXlkb3duOiAna2V5Ym9hcmQnLFxuXHQgICAga2V5dXA6ICdrZXlib2FyZCcsXG5cdCAgICBtb3VzZWRvd246ICdtb3VzZScsXG5cdCAgICBtb3VzZW1vdmU6ICdtb3VzZScsXG5cdCAgICBNU1BvaW50ZXJEb3duOiAncG9pbnRlcicsXG5cdCAgICBNU1BvaW50ZXJNb3ZlOiAncG9pbnRlcicsXG5cdCAgICBwb2ludGVyZG93bjogJ3BvaW50ZXInLFxuXHQgICAgcG9pbnRlcm1vdmU6ICdwb2ludGVyJyxcblx0ICAgIHRvdWNoc3RhcnQ6ICd0b3VjaCdcblx0ICB9O1xuXG5cdCAgLy8gYXJyYXkgb2YgYWxsIHVzZWQgaW5wdXQgdHlwZXNcblx0ICB2YXIgaW5wdXRUeXBlcyA9IFtdO1xuXG5cdCAgLy8gYm9vbGVhbjogdHJ1ZSBpZiB0b3VjaCBidWZmZXIgaXMgYWN0aXZlXG5cdCAgdmFyIGlzQnVmZmVyaW5nID0gZmFsc2U7XG5cblx0ICAvLyBib29sZWFuOiB0cnVlIGlmIHRoZSBwYWdlIGlzIGJlaW5nIHNjcm9sbGVkXG5cdCAgdmFyIGlzU2Nyb2xsaW5nID0gZmFsc2U7XG5cblx0ICAvLyBzdG9yZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXG5cdCAgdmFyIG1vdXNlUG9zID0ge1xuXHQgICAgeDogbnVsbCxcblx0ICAgIHk6IG51bGxcblx0ICB9O1xuXG5cdCAgLy8gbWFwIG9mIElFIDEwIHBvaW50ZXIgZXZlbnRzXG5cdCAgdmFyIHBvaW50ZXJNYXAgPSB7XG5cdCAgICAyOiAndG91Y2gnLFxuXHQgICAgMzogJ3RvdWNoJywgLy8gdHJlYXQgcGVuIGxpa2UgdG91Y2hcblx0ICAgIDQ6ICdtb3VzZSdcblx0ICB9O1xuXG5cdCAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG5cdCAgdHJ5IHtcblx0ICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG5cdCAgfSBjYXRjaCAoZSkge31cblxuXHQgIC8qXG5cdCAgICogc2V0IHVwXG5cdCAgICovXG5cblx0ICB2YXIgc2V0VXAgPSBmdW5jdGlvbiBzZXRVcCgpIHtcblx0ICAgIC8vIGFkZCBjb3JyZWN0IG1vdXNlIHdoZWVsIGV2ZW50IG1hcHBpbmcgdG8gYGlucHV0TWFwYFxuXHQgICAgaW5wdXRNYXBbZGV0ZWN0V2hlZWwoKV0gPSAnbW91c2UnO1xuXG5cdCAgICBhZGRMaXN0ZW5lcnMoKTtcblx0ICAgIHNldElucHV0KCk7XG5cdCAgfTtcblxuXHQgIC8qXG5cdCAgICogZXZlbnRzXG5cdCAgICovXG5cblx0ICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuXHQgICAgLy8gYHBvaW50ZXJtb3ZlYCwgYE1TUG9pbnRlck1vdmVgLCBgbW91c2Vtb3ZlYCBhbmQgbW91c2Ugd2hlZWwgZXZlbnQgYmluZGluZ1xuXHQgICAgLy8gY2FuIG9ubHkgZGVtb25zdHJhdGUgcG90ZW50aWFsLCBidXQgbm90IGFjdHVhbCwgaW50ZXJhY3Rpb25cblx0ICAgIC8vIGFuZCBhcmUgdHJlYXRlZCBzZXBhcmF0ZWx5XG5cdCAgICB2YXIgb3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cblx0ICAgIC8vIHBvaW50ZXIgZXZlbnRzIChtb3VzZSwgcGVuLCB0b3VjaClcblx0ICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHVwZGF0ZUlucHV0KTtcblx0ICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgc2V0SW50ZW50KTtcblx0ICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdXBkYXRlSW5wdXQpO1xuXHQgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHNldEludGVudCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBtb3VzZSBldmVudHNcblx0ICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVwZGF0ZUlucHV0KTtcblx0ICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldEludGVudCk7XG5cblx0ICAgICAgLy8gdG91Y2ggZXZlbnRzXG5cdCAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcblx0ICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoQnVmZmVyLCBvcHRpb25zKTtcblx0ICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEJ1ZmZlcik7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gbW91c2Ugd2hlZWxcblx0ICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKGRldGVjdFdoZWVsKCksIHNldEludGVudCwgb3B0aW9ucyk7XG5cblx0ICAgIC8vIGtleWJvYXJkIGV2ZW50c1xuXHQgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1cGRhdGVJbnB1dCk7XG5cdCAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cGRhdGVJbnB1dCk7XG5cdCAgfTtcblxuXHQgIC8vIGNoZWNrcyBjb25kaXRpb25zIGJlZm9yZSB1cGRhdGluZyBuZXcgaW5wdXRcblx0ICB2YXIgdXBkYXRlSW5wdXQgPSBmdW5jdGlvbiB1cGRhdGVJbnB1dChldmVudCkge1xuXHQgICAgLy8gb25seSBleGVjdXRlIGlmIHRoZSB0b3VjaCBidWZmZXIgdGltZXIgaXNuJ3QgcnVubmluZ1xuXHQgICAgaWYgKCFpc0J1ZmZlcmluZykge1xuXHQgICAgICB2YXIgZXZlbnRLZXkgPSBldmVudC53aGljaDtcblx0ICAgICAgdmFyIHZhbHVlID0gaW5wdXRNYXBbZXZlbnQudHlwZV07XG5cdCAgICAgIGlmICh2YWx1ZSA9PT0gJ3BvaW50ZXInKSB2YWx1ZSA9IHBvaW50ZXJUeXBlKGV2ZW50KTtcblxuXHQgICAgICBpZiAoY3VycmVudElucHV0ICE9PSB2YWx1ZSB8fCBjdXJyZW50SW50ZW50ICE9PSB2YWx1ZSkge1xuXHQgICAgICAgIHZhciBhY3RpdmVFbGVtID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0ICAgICAgICB2YXIgYWN0aXZlSW5wdXQgPSBmYWxzZTtcblx0ICAgICAgICB2YXIgbm90Rm9ybUlucHV0ID0gYWN0aXZlRWxlbSAmJiBhY3RpdmVFbGVtLm5vZGVOYW1lICYmIGZvcm1JbnB1dHMuaW5kZXhPZihhY3RpdmVFbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMTtcblxuXHQgICAgICAgIGlmIChub3RGb3JtSW5wdXQgfHwgY2hhbmdlSW50ZW50TWFwLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMSkge1xuXHQgICAgICAgICAgYWN0aXZlSW5wdXQgPSB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3RvdWNoJyB8fFxuXHQgICAgICAgIC8vIGlnbm9yZSBtb3VzZSBtb2RpZmllciBrZXlzXG5cdCAgICAgICAgdmFsdWUgPT09ICdtb3VzZScgfHxcblx0ICAgICAgICAvLyBkb24ndCBzd2l0Y2ggaWYgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBhIGZvcm0gaW5wdXRcblx0ICAgICAgICB2YWx1ZSA9PT0gJ2tleWJvYXJkJyAmJiBldmVudEtleSAmJiBhY3RpdmVJbnB1dCAmJiBpZ25vcmVNYXAuaW5kZXhPZihldmVudEtleSkgPT09IC0xKSB7XG5cdCAgICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgYW5kIGNhdGNoLWFsbCB2YXJpYWJsZVxuXHQgICAgICAgICAgY3VycmVudElucHV0ID0gY3VycmVudEludGVudCA9IHZhbHVlO1xuXG5cdCAgICAgICAgICBzZXRJbnB1dCgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvLyB1cGRhdGVzIHRoZSBkb2MgYW5kIGBpbnB1dFR5cGVzYCBhcnJheSB3aXRoIG5ldyBpbnB1dFxuXHQgIHZhciBzZXRJbnB1dCA9IGZ1bmN0aW9uIHNldElucHV0KCkge1xuXHQgICAgZG9jLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0aW5wdXQnLCBjdXJyZW50SW5wdXQpO1xuXHQgICAgZG9jLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0aW50ZW50JywgY3VycmVudElucHV0KTtcblxuXHQgICAgaWYgKGlucHV0VHlwZXMuaW5kZXhPZihjdXJyZW50SW5wdXQpID09PSAtMSkge1xuXHQgICAgICBpbnB1dFR5cGVzLnB1c2goY3VycmVudElucHV0KTtcblx0ICAgICAgZG9jLmNsYXNzTmFtZSArPSAnIHdoYXRpbnB1dC10eXBlcy0nICsgY3VycmVudElucHV0O1xuXHQgICAgfVxuXG5cdCAgICBmaXJlRnVuY3Rpb25zKCdpbnB1dCcpO1xuXHQgIH07XG5cblx0ICAvLyB1cGRhdGVzIGlucHV0IGludGVudCBmb3IgYG1vdXNlbW92ZWAgYW5kIGBwb2ludGVybW92ZWBcblx0ICB2YXIgc2V0SW50ZW50ID0gZnVuY3Rpb24gc2V0SW50ZW50KGV2ZW50KSB7XG5cdCAgICAvLyB0ZXN0IHRvIHNlZSBpZiBgbW91c2Vtb3ZlYCBoYXBwZW5lZCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuXG5cdCAgICAvLyB0byBkZXRlY3Qgc2Nyb2xsaW5nIHZlcnN1cyBtb3VzZW1vdmVcblx0ICAgIGlmIChtb3VzZVBvc1sneCddICE9PSBldmVudC5zY3JlZW5YIHx8IG1vdXNlUG9zWyd5J10gIT09IGV2ZW50LnNjcmVlblkpIHtcblx0ICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuXHQgICAgICBtb3VzZVBvc1sneCddID0gZXZlbnQuc2NyZWVuWDtcblx0ICAgICAgbW91c2VQb3NbJ3knXSA9IGV2ZW50LnNjcmVlblk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XG5cdCAgICB9XG5cblx0ICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiB0aGUgdG91Y2ggYnVmZmVyIHRpbWVyIGlzbid0IHJ1bm5pbmdcblx0ICAgIC8vIG9yIHNjcm9sbGluZyBpc24ndCBoYXBwZW5pbmdcblx0ICAgIGlmICghaXNCdWZmZXJpbmcgJiYgIWlzU2Nyb2xsaW5nKSB7XG5cdCAgICAgIHZhciB2YWx1ZSA9IGlucHV0TWFwW2V2ZW50LnR5cGVdO1xuXHQgICAgICBpZiAodmFsdWUgPT09ICdwb2ludGVyJykgdmFsdWUgPSBwb2ludGVyVHlwZShldmVudCk7XG5cblx0ICAgICAgaWYgKGN1cnJlbnRJbnRlbnQgIT09IHZhbHVlKSB7XG5cdCAgICAgICAgY3VycmVudEludGVudCA9IHZhbHVlO1xuXG5cdCAgICAgICAgZG9jLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0aW50ZW50JywgY3VycmVudEludGVudCk7XG5cblx0ICAgICAgICBmaXJlRnVuY3Rpb25zKCdpbnRlbnQnKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvLyBidWZmZXJzIHRvdWNoIGV2ZW50cyBiZWNhdXNlIHRoZXkgZnJlcXVlbnRseSBhbHNvIGZpcmUgbW91c2UgZXZlbnRzXG5cdCAgdmFyIHRvdWNoQnVmZmVyID0gZnVuY3Rpb24gdG91Y2hCdWZmZXIoZXZlbnQpIHtcblx0ICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcblx0ICAgICAgaXNCdWZmZXJpbmcgPSBmYWxzZTtcblxuXHQgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgaW5wdXRcblx0ICAgICAgdXBkYXRlSW5wdXQoZXZlbnQpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaXNCdWZmZXJpbmcgPSB0cnVlO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgZmlyZUZ1bmN0aW9ucyA9IGZ1bmN0aW9uIGZpcmVGdW5jdGlvbnModHlwZSkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZ1bmN0aW9uTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoZnVuY3Rpb25MaXN0W2ldLnR5cGUgPT09IHR5cGUpIHtcblx0ICAgICAgICBmdW5jdGlvbkxpc3RbaV0uZm4uY2FsbCh1bmRlZmluZWQsIGN1cnJlbnRJbnRlbnQpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8qXG5cdCAgICogdXRpbGl0aWVzXG5cdCAgICovXG5cblx0ICB2YXIgcG9pbnRlclR5cGUgPSBmdW5jdGlvbiBwb2ludGVyVHlwZShldmVudCkge1xuXHQgICAgaWYgKHR5cGVvZiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ251bWJlcicpIHtcblx0ICAgICAgcmV0dXJuIHBvaW50ZXJNYXBbZXZlbnQucG9pbnRlclR5cGVdO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gdHJlYXQgcGVuIGxpa2UgdG91Y2hcblx0ICAgICAgcmV0dXJuIGV2ZW50LnBvaW50ZXJUeXBlID09PSAncGVuJyA/ICd0b3VjaCcgOiBldmVudC5wb2ludGVyVHlwZTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLy8gZGV0ZWN0IHZlcnNpb24gb2YgbW91c2Ugd2hlZWwgZXZlbnQgdG8gdXNlXG5cdCAgLy8gdmlhIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxuXHQgIHZhciBkZXRlY3RXaGVlbCA9IGZ1bmN0aW9uIGRldGVjdFdoZWVsKCkge1xuXHQgICAgdmFyIHdoZWVsVHlwZSA9IHZvaWQgMDtcblxuXHQgICAgLy8gTW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgXCJ3aGVlbFwiXG5cdCAgICBpZiAoJ29ud2hlZWwnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSB7XG5cdCAgICAgIHdoZWVsVHlwZSA9ICd3aGVlbCc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBXZWJraXQgYW5kIElFIHN1cHBvcnQgYXQgbGVhc3QgXCJtb3VzZXdoZWVsXCJcblx0ICAgICAgLy8gb3IgYXNzdW1lIHRoYXQgcmVtYWluaW5nIGJyb3dzZXJzIGFyZSBvbGRlciBGaXJlZm94XG5cdCAgICAgIHdoZWVsVHlwZSA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gJ21vdXNld2hlZWwnIDogJ0RPTU1vdXNlU2Nyb2xsJztcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHdoZWVsVHlwZTtcblx0ICB9O1xuXG5cdCAgdmFyIG9ialBvcyA9IGZ1bmN0aW9uIG9ialBvcyhtYXRjaCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZ1bmN0aW9uTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoZnVuY3Rpb25MaXN0W2ldLmZuID09PSBtYXRjaCkge1xuXHQgICAgICAgIHJldHVybiBpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8qXG5cdCAgICogaW5pdFxuXHQgICAqL1xuXG5cdCAgLy8gZG9uJ3Qgc3RhcnQgc2NyaXB0IHVubGVzcyBicm93c2VyIGN1dHMgdGhlIG11c3RhcmRcblx0ICAvLyAoYWxzbyBwYXNzZXMgaWYgcG9seWZpbGxzIGFyZSB1c2VkKVxuXHQgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93ICYmIEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdCAgICBzZXRVcCgpO1xuXHQgIH1cblxuXHQgIC8qXG5cdCAgICogYXBpXG5cdCAgICovXG5cblx0ICByZXR1cm4ge1xuXHQgICAgLy8gcmV0dXJucyBzdHJpbmc6IHRoZSBjdXJyZW50IGlucHV0IHR5cGVcblx0ICAgIC8vIG9wdDogJ2xvb3NlJ3wnc3RyaWN0J1xuXHQgICAgLy8gJ3N0cmljdCcgKGRlZmF1bHQpOiByZXR1cm5zIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBgZGF0YS13aGF0aW5wdXRgIGF0dHJpYnV0ZVxuXHQgICAgLy8gJ2xvb3NlJzogaW5jbHVkZXMgYGRhdGEtd2hhdGludGVudGAgdmFsdWUgaWYgaXQncyBtb3JlIGN1cnJlbnQgdGhhbiBgZGF0YS13aGF0aW5wdXRgXG5cdCAgICBhc2s6IGZ1bmN0aW9uIGFzayhvcHQpIHtcblx0ICAgICAgcmV0dXJuIG9wdCA9PT0gJ2xvb3NlJyA/IGN1cnJlbnRJbnRlbnQgOiBjdXJyZW50SW5wdXQ7XG5cdCAgICB9LFxuXG5cdCAgICAvLyByZXR1cm5zIGFycmF5OiBhbGwgdGhlIGRldGVjdGVkIGlucHV0IHR5cGVzXG5cdCAgICB0eXBlczogZnVuY3Rpb24gdHlwZXMoKSB7XG5cdCAgICAgIHJldHVybiBpbnB1dFR5cGVzO1xuXHQgICAgfSxcblxuXHQgICAgLy8gb3ZlcndyaXRlcyBpZ25vcmVkIGtleXMgd2l0aCBwcm92aWRlZCBhcnJheVxuXHQgICAgaWdub3JlS2V5czogZnVuY3Rpb24gaWdub3JlS2V5cyhhcnIpIHtcblx0ICAgICAgaWdub3JlTWFwID0gYXJyO1xuXHQgICAgfSxcblxuXHQgICAgLy8gYXR0YWNoIGZ1bmN0aW9ucyB0byBpbnB1dCBhbmQgaW50ZW50IFwiZXZlbnRzXCJcblx0ICAgIC8vIGZ1bmN0OiBmdW5jdGlvbiB0byBmaXJlIG9uIGNoYW5nZVxuXHQgICAgLy8gZXZlbnRUeXBlOiAnaW5wdXQnfCdpbnRlbnQnXG5cdCAgICByZWdpc3Rlck9uQ2hhbmdlOiBmdW5jdGlvbiByZWdpc3Rlck9uQ2hhbmdlKGZuLCBldmVudFR5cGUpIHtcblx0ICAgICAgZnVuY3Rpb25MaXN0LnB1c2goe1xuXHQgICAgICAgIGZuOiBmbixcblx0ICAgICAgICB0eXBlOiBldmVudFR5cGUgfHwgJ2lucHV0J1xuXHQgICAgICB9KTtcblx0ICAgIH0sXG5cblx0ICAgIHVuUmVnaXN0ZXJPbkNoYW5nZTogZnVuY3Rpb24gdW5SZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG5cdCAgICAgIHZhciBwb3NpdGlvbiA9IG9ialBvcyhmbik7XG5cblx0ICAgICAgaWYgKHBvc2l0aW9uKSB7XG5cdCAgICAgICAgZnVuY3Rpb25MaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXHR9KCk7XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0LWlucHV0L2Rpc3Qvd2hhdC1pbnB1dC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgamFyYWxsYXggPSByZXF1aXJlKCcuL3NyYy9qYXJhbGxheC5lc20nKS5kZWZhdWx0O1xuY29uc3QgamFyYWxsYXhWaWRlbyA9IHJlcXVpcmUoJy4vc3JjL2phcmFsbGF4LXZpZGVvLmVzbScpLmRlZmF1bHQ7XG5jb25zdCBqYXJhbGxheEVsZW1lbnQgPSByZXF1aXJlKCcuL3NyYy9qYXJhbGxheC1lbGVtZW50LmVzbScpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGphcmFsbGF4LFxuICAgIGphcmFsbGF4RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGphcmFsbGF4RWxlbWVudChqYXJhbGxheCk7XG4gICAgfSxcbiAgICBqYXJhbGxheFZpZGVvKCkge1xuICAgICAgICByZXR1cm4gamFyYWxsYXhWaWRlbyhqYXJhbGxheCk7XG4gICAgfSxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qYXJhbGxheC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFZpZGVvV29ya2VyIGZyb20gJ3ZpZGVvLXdvcmtlcic7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ2dsb2JhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGphcmFsbGF4VmlkZW8oamFyYWxsYXggPSBnbG9iYWwuamFyYWxsYXgpIHtcbiAgICBpZiAodHlwZW9mIGphcmFsbGF4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgSmFyYWxsYXggPSBqYXJhbGxheC5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIGFwcGVuZCB2aWRlbyBhZnRlciBpbml0IEphcmFsbGF4XG4gICAgY29uc3QgZGVmSW5pdCA9IEphcmFsbGF4LnByb3RvdHlwZS5pbml0O1xuICAgIEphcmFsbGF4LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBkZWZJbml0LmFwcGx5KHNlbGYpO1xuXG4gICAgICAgIGlmIChzZWxmLnZpZGVvICYmICFzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKCkpIHtcbiAgICAgICAgICAgIHNlbGYudmlkZW8uZ2V0VmlkZW8oKHZpZGVvKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHBhcmVudCA9IHZpZGVvLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgc2VsZi5jc3ModmlkZW8sIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHNlbGYuaW1hZ2UucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvID0gdmlkZW87XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZGVvKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBwYXJlbnQgdmlkZW8gZWxlbWVudCAoY3JlYXRlZCBieSBWaWRlb1dvcmtlcilcbiAgICAgICAgICAgICAgICAkcGFyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHBhcmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb3ZlciB2aWRlb1xuICAgIGNvbnN0IGRlZkNvdmVySW1hZ2UgPSBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZTtcbiAgICBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGRlZkNvdmVySW1hZ2UuYXBwbHkoc2VsZik7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBzZWxmLmltYWdlLiRpdGVtID8gc2VsZi5pbWFnZS4kaXRlbS5ub2RlTmFtZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpbWFnZURhdGEgJiYgc2VsZi52aWRlbyAmJiBub2RlICYmIChub2RlID09PSAnSUZSQU1FJyB8fCBub2RlID09PSAnVklERU8nKSkge1xuICAgICAgICAgICAgbGV0IGggPSBpbWFnZURhdGEuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHcgPSBoICogc2VsZi5pbWFnZS53aWR0aCAvIHNlbGYuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG1sID0gKGltYWdlRGF0YS5jb250YWluZXIud2lkdGggLSB3KSAvIDI7XG4gICAgICAgICAgICBsZXQgbXQgPSBpbWFnZURhdGEuaW1hZ2UubWFyZ2luVG9wO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aCA+IHcpIHtcbiAgICAgICAgICAgICAgICB3ID0gaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aDtcbiAgICAgICAgICAgICAgICBoID0gdyAqIHNlbGYuaW1hZ2UuaGVpZ2h0IC8gc2VsZi5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICBtbCA9IDA7XG4gICAgICAgICAgICAgICAgbXQgKz0gKGltYWdlRGF0YS5pbWFnZS5oZWlnaHQgLSBoKSAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB2aWRlbyBoZWlnaHQgb3ZlciB0aGFuIG5lZWQgdG8gaGlkZSBjb250cm9sc1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09ICdJRlJBTUUnKSB7XG4gICAgICAgICAgICAgICAgaCArPSA0MDA7XG4gICAgICAgICAgICAgICAgbXQgLT0gMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiR2aWRlbywge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt3fXB4YCxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHttbH1weGAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtofXB4YCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IGAke210fXB4YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGltYWdlRGF0YTtcbiAgICB9O1xuXG4gICAgLy8gaW5pdCB2aWRlb1xuICAgIGNvbnN0IGRlZkluaXRJbWcgPSBKYXJhbGxheC5wcm90b3R5cGUuaW5pdEltZztcbiAgICBKYXJhbGxheC5wcm90b3R5cGUuaW5pdEltZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSBkZWZJbml0SW1nLmFwcGx5KHNlbGYpO1xuXG4gICAgICAgIGlmICghc2VsZi5vcHRpb25zLnZpZGVvU3JjKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMudmlkZW9TcmMgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC12aWRlbycpIHx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZpZGVvU3JjKSB7XG4gICAgICAgICAgICBzZWxmLmRlZmF1bHRJbml0SW1nUmVzdWx0ID0gZGVmYXVsdFJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlZkNhbkluaXRQYXJhbGxheCA9IEphcmFsbGF4LnByb3RvdHlwZS5jYW5Jbml0UGFyYWxsYXg7XG4gICAgSmFyYWxsYXgucHJvdG90eXBlLmNhbkluaXRQYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSBkZWZDYW5Jbml0UGFyYWxsYXguYXBwbHkoc2VsZik7XG5cbiAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMudmlkZW9TcmMpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSBuZXcgVmlkZW9Xb3JrZXIoc2VsZi5vcHRpb25zLnZpZGVvU3JjLCB7XG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHNlbGYub3B0aW9ucy52aWRlb0xvb3AsXG4gICAgICAgICAgICBzaG93Q29udG9sczogZmFsc2UsXG4gICAgICAgICAgICBzdGFydFRpbWU6IHNlbGYub3B0aW9ucy52aWRlb1N0YXJ0VGltZSB8fCAwLFxuICAgICAgICAgICAgZW5kVGltZTogc2VsZi5vcHRpb25zLnZpZGVvRW5kVGltZSB8fCAwLFxuICAgICAgICAgICAgbXV0ZTogc2VsZi5vcHRpb25zLnZpZGVvVm9sdW1lID8gMCA6IDEsXG4gICAgICAgICAgICB2b2x1bWU6IHNlbGYub3B0aW9ucy52aWRlb1ZvbHVtZSB8fCAwLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmlkZW8uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBpZiBwYXJhbGxheCB3aWxsIG5vdCBiZSBpbml0ZWQsIHdlIGNhbiBhZGQgdGh1bWJuYWlsIG9uIGJhY2tncm91bmQuXG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGVmYXVsdEluaXRJbWdSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uZ2V0SW1hZ2VVUkwoKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBkZWZhdWx0IHVzZXIgc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJTdHlsZSA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgbmV3IGJhY2tncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoXCIke3VybH1cIilgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaW5pdCB2aWRlb1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudmlkZW9QbGF5T25seVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZE9uU2Nyb2xsID0gc2VsZi5vblNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkT25TY3JvbGwuYXBwbHkoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy52aWRlb0xvb3AgfHwgKCFzZWxmLm9wdGlvbnMudmlkZW9Mb29wICYmICFzZWxmLnZpZGVvRW5kZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmlkZW8ub24oJ3N0YXJ0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSA9IHNlbGYuaW1hZ2UuJGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLiR2aWRlbztcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLndpZHRoID0gc2VsZi52aWRlby52aWRlb1dpZHRoIHx8IDEyODA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuaGVpZ2h0ID0gc2VsZi52aWRlby52aWRlb0hlaWdodCB8fCA3MjA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY292ZXJJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsaXBDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vblNjcm9sbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZpZGVvLm9uKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0VuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYub3B0aW9ucy52aWRlb0xvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgaW1hZ2UgaWYgTG9vcCBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBpbWFnZSB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3ZlckltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGlwQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vblNjcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnZpZGVvID0gdmlkZW87XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgaW1hZ2UgaWYgbm90IGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5kZWZhdWx0SW5pdEltZ1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlkZW8udHlwZSAhPT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8uZ2V0SW1hZ2VVUkwoKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBlbXB0eSBpbWFnZSBvbiBsb2NhbCB2aWRlbyBpZiBub3QgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLnNyYyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy8gRGVzdHJveSB2aWRlbyBwYXJhbGxheFxuICAgIGNvbnN0IGRlZkRlc3Ryb3kgPSBKYXJhbGxheC5wcm90b3R5cGUuZGVzdHJveTtcbiAgICBKYXJhbGxheC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZEZXN0cm95LmFwcGx5KHNlbGYpO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qYXJhbGxheC9zcmMvamFyYWxsYXgtdmlkZW8uZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL3ZpZGVvLXdvcmtlci5lc20nKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3ZpZGVvLXdvcmtlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRGVmZXJyZWRcbi8vIHRoYW5rcyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDk2NzE1L2ltcGxlbWVudC1kZWZlcnJlZC1vYmplY3Qtd2l0aG91dC11c2luZy1qcXVlcnlcbmZ1bmN0aW9uIERlZmVycmVkKCkge1xuICAgIHRoaXMuX2RvbmUgPSBbXTtcbiAgICB0aGlzLl9mYWlsID0gW107XG59XG5EZWZlcnJlZC5wcm90b3R5cGUgPSB7XG4gICAgZXhlY3V0ZShsaXN0LCBhcmdzKSB7XG4gICAgICAgIGxldCBpID0gbGlzdC5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgbGlzdFtpXS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZSgpIHtcbiAgICAgICAgdGhpcy5leGVjdXRlKHRoaXMuX2RvbmUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZWplY3QoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSh0aGlzLl9mYWlsLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZG9uZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9kb25lLnB1c2goY2FsbGJhY2spO1xuICAgIH0sXG4gICAgZmFpbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mYWlsLnB1c2goY2FsbGJhY2spO1xuICAgIH0sXG59O1xuXG5sZXQgSUQgPSAwO1xubGV0IFlvdXR1YmVBUElhZGRlZCA9IDA7XG5sZXQgVmltZW9BUElhZGRlZCA9IDA7XG5sZXQgbG9hZGluZ1lvdXR1YmVQbGF5ZXIgPSAwO1xubGV0IGxvYWRpbmdWaW1lb1BsYXllciA9IDA7XG5jb25zdCBsb2FkaW5nWW91dHViZURlZmVyID0gbmV3IERlZmVycmVkKCk7XG5jb25zdCBsb2FkaW5nVmltZW9EZWZlciA9IG5ldyBEZWZlcnJlZCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1dvcmtlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYudXJsID0gdXJsO1xuXG4gICAgICAgIHNlbGYub3B0aW9uc19kZWZhdWx0ID0ge1xuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBtdXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHZvbHVtZTogMTAwLFxuICAgICAgICAgICAgc2hvd0NvbnRvbHM6IHRydWUsXG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IC8gZW5kIHZpZGVvIHRpbWUgaW4gc2Vjb25kc1xuICAgICAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICAgICAgZW5kVGltZTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLm9wdGlvbnMgPSBzZWxmLmV4dGVuZCh7fSwgc2VsZi5vcHRpb25zX2RlZmF1bHQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGNoZWNrIFVSTFxuICAgICAgICBzZWxmLnZpZGVvSUQgPSBzZWxmLnBhcnNlVVJMKHVybCk7XG5cbiAgICAgICAgLy8gaW5pdFxuICAgICAgICBpZiAoc2VsZi52aWRlb0lEKSB7XG4gICAgICAgICAgICBzZWxmLklEID0gSUQrKztcbiAgICAgICAgICAgIHNlbGYubG9hZEFQSSgpO1xuICAgICAgICAgICAgc2VsZi5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRlbmQgbGlrZSBqUXVlcnkuZXh0ZW5kXG4gICAgZXh0ZW5kKG91dCkge1xuICAgICAgICBvdXQgPSBvdXQgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3VtZW50cykuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd1bWVudHNbaV0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIG91dFtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgcGFyc2VVUkwodXJsKSB7XG4gICAgICAgIC8vIHBhcnNlIHlvdXR1YmUgSURcbiAgICAgICAgZnVuY3Rpb24gZ2V0WW91dHViZUlEKHl0VXJsKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IC8uKig/OnlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9KShbXiNcXCZcXD9dKikuKi87XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHl0VXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0ubGVuZ3RoID09PSAxMSA/IG1hdGNoWzFdIDogZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSB2aW1lbyBJRFxuICAgICAgICBmdW5jdGlvbiBnZXRWaW1lb0lEKHZtVXJsKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9odHRwcz86XFwvXFwvKD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB2bVVybC5tYXRjaChyZWdFeHApO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzNdID8gbWF0Y2hbM10gOiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIGxvY2FsIHN0cmluZ1xuICAgICAgICBmdW5jdGlvbiBnZXRMb2NhbFZpZGVvcyhsb2NVcmwpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICAgICAgY29uc3QgdmlkZW9Gb3JtYXRzID0gbG9jVXJsLnNwbGl0KC8sKD89bXA0XFw6fHdlYm1cXDp8b2d2XFw6fG9nZ1xcOikvKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgbGV0IHJlYWR5ID0gMDtcbiAgICAgICAgICAgIHZpZGVvRm9ybWF0cy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHZhbC5tYXRjaCgvXihtcDR8d2VibXxvZ3Z8b2dnKVxcOiguKikvKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFttYXRjaFsxXSA9PT0gJ29ndicgPyAnb2dnJyA6IG1hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICByZWFkeSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVhZHkgPyByZXN1bHQgOiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFlvdXR1YmUgPSBnZXRZb3V0dWJlSUQodXJsKTtcbiAgICAgICAgY29uc3QgVmltZW8gPSBnZXRWaW1lb0lEKHVybCk7XG4gICAgICAgIGNvbnN0IExvY2FsID0gZ2V0TG9jYWxWaWRlb3ModXJsKTtcblxuICAgICAgICBpZiAoWW91dHViZSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ3lvdXR1YmUnO1xuICAgICAgICAgICAgcmV0dXJuIFlvdXR1YmU7XG4gICAgICAgIH0gZWxzZSBpZiAoVmltZW8pIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd2aW1lbyc7XG4gICAgICAgICAgICByZXR1cm4gVmltZW87XG4gICAgICAgIH0gZWxzZSBpZiAoTG9jYWwpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdsb2NhbCc7XG4gICAgICAgICAgICByZXR1cm4gTG9jYWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy52aWRlb0lEO1xuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIG9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMudXNlckV2ZW50c0xpc3QgPSB0aGlzLnVzZXJFdmVudHNMaXN0IHx8IFtdO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgY2FsbGJhY2sgaW4gZXZlbnRzIGxpc3RcbiAgICAgICAgKHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gfHwgKHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJFdmVudHNMaXN0IHx8ICF0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0uZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJlKG5hbWUpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaWYgKHRoaXMudXNlckV2ZW50c0xpc3QgJiYgdHlwZW9mIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgd2l0aCBhbGwgYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICB2YWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5KHN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIucGxheVZpZGVvKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnNlZWtUbyhzdGFydCB8fCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICE9PSBzZWxmLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnNldEN1cnJlbnRUaW1lKHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucGxheWVyLmdldFBhdXNlZCgpLnRoZW4oKHBhdXNlZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5jdXJyZW50VGltZSA9IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYucGxheWVyLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLnBhdXNlVmlkZW8pIHtcbiAgICAgICAgICAgIGlmIChZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HID09PSBzZWxmLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0UGF1c2VkKCkudGhlbigocGF1c2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5wbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG11dGUoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIubXV0ZSkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIubXV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubXV0ZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5tdXRlKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci51bk11dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoc2VsZi5vcHRpb25zLnZvbHVtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Vm9sdW1lKHZvbHVtZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucGxheWVyIHx8ICF2b2x1bWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8udm9sdW1lID0gdm9sdW1lIC8gMTAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzZWxmLnBsYXllci5nZXRWb2x1bWUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLmdldFZvbHVtZSkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkudGhlbigodm9sdW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodm9sdW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8udm9sdW1lICogMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE11dGVkKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5pc011dGVkKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzZWxmLnBsYXllci5pc011dGVkKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5nZXRWb2x1bWUpIHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLmdldFZvbHVtZSgpLnRoZW4oKHZvbHVtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCEhdm9sdW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8ubXV0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVUkwoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHNlbGYudmlkZW9JbWFnZSkge1xuICAgICAgICAgICAgY2FsbGJhY2soc2VsZi52aWRlb0ltYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlU2l6ZXMgPSBbXG4gICAgICAgICAgICAgICAgJ21heHJlc2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICdzZGRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICdocWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBsZXQgc3RlcCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRlbXBJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIHRodW1ibmFpbCwgeW91dHViZSBhZGQgdGhlaXIgb3duIGltYWdlIHdpdGggd2lkdGggPSAxMjBweFxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5uYXR1cmFsV2lkdGggfHwgdGhpcy53aWR0aCkgIT09IDEyMCB8fCBzdGVwID09PSBhdmFpbGFibGVTaXplcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9rXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9JbWFnZSA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3NlbGYudmlkZW9JRH0vJHthdmFpbGFibGVTaXplc1tzdGVwXX0uanBnYDtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi52aWRlb0ltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgYW5vdGhlciBzaXplXG4gICAgICAgICAgICAgICAgICAgIHN0ZXArKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtzZWxmLnZpZGVvSUR9LyR7YXZhaWxhYmxlU2l6ZXNbc3RlcF19LmpwZ2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRlbXBJbWcuc3JjID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7c2VsZi52aWRlb0lEfS8ke2F2YWlsYWJsZVNpemVzW3N0ZXBdfS5qcGdgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgYGh0dHBzOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8ke3NlbGYudmlkZW9JRH0uanNvbmAsIHRydWUpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWNjZXNzIVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9JbWFnZSA9IHJlc3BvbnNlWzBdLnRodW1ibmFpbF9sYXJnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYudmlkZW9JbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciA6KFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGUgb2xkIHZlcnNpb24uXG4gICAgZ2V0SWZyYW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2V0VmlkZW8oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGdldFZpZGVvKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIHJldHVybiBnZW5lcmF0ZWQgdmlkZW8gYmxvY2tcbiAgICAgICAgaWYgKHNlbGYuJHZpZGVvKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzZWxmLiR2aWRlbyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZW5lcmF0ZSBuZXcgdmlkZW8gYmxvY2tcbiAgICAgICAgc2VsZi5vbkFQSXJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBoaWRkZW5EaXY7XG4gICAgICAgICAgICBpZiAoIXNlbGYuJHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFlvdXR1YmVcbiAgICAgICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy52aWRlb0lkID0gc2VsZi52aWRlb0lEO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzID0ge1xuICAgICAgICAgICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogMCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b3BsYXkgZW5hYmxlIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzaW5saW5lOiAxLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBoaWRlIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMuc2hvd0NvbnRvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuaXZfbG9hZF9wb2xpY3kgPSAzO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5tb2Rlc3RicmFuZGluZyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLmNvbnRyb2xzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuc2hvd2luZm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5kaXNhYmxla2IgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50c1xuICAgICAgICAgICAgICAgIGxldCB5dFN0YXJ0ZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHl0UHJvZ3Jlc3NJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuZXZlbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubXV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm11dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5vcHRpb25zLnZvbHVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldFZvbHVtZShzZWxmLm9wdGlvbnMudm9sdW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3JlYWR5JywgZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBzZWFtbGVzcyBsb29wcywgc2V0IHRoZSBlbmRUaW1lIHRvIDAuMSBzZWNvbmRzIGxlc3MgdGhhbiB0aGUgdmlkZW8ncyBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vdmlkZW8td29ya2VyL2lzc3Vlcy8yXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3AgJiYgIXNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kc09mZnNldCA9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZW5kVGltZSA9IHNlbGYucGxheWVyLmdldER1cmF0aW9uKCkgLSBzZWNvbmRzT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2b2x1bWVjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFZvbHVtZSgodm9sdW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudm9sdW1lICE9PSB2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3ZvbHVtZWNoYW5nZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCAmJiBlLmRhdGEgPT09IFlULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF5dFN0YXJ0ZWQgJiYgZS5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXRTdGFydGVkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3N0YXJ0ZWQnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3BsYXknLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgncGF1c2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IFlULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCdlbmRlZCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzcyBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl0UHJvZ3Jlc3NJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCd0aW1ldXBkYXRlJywgZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSAmJiBzZWxmLnBsYXllci5nZXRDdXJyZW50VGltZSgpID49IHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeXRQcm9ncmVzc0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXNlbGYuJHZpZGVvO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdEluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZi5wbGF5ZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgbmV3IHdpbmRvdy5ZVC5QbGF5ZXIoc2VsZi5wbGF5ZXJJRCwgc2VsZi5wbGF5ZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RJbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5wbGF5ZXJJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1dpZHRoID0gcGFyc2VJbnQoc2VsZi4kdmlkZW8uZ2V0QXR0cmlidXRlKCd3aWR0aCcpLCAxMCkgfHwgMTI4MDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IHBhcnNlSW50KHNlbGYuJHZpZGVvLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JyksIDEwKSB8fCA3MjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWaW1lb1xuICAgICAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGYudmlkZW9JRCxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BhdXNlOiAwLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogMCxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHNlbGYub3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgICAgICAgICAgICBsb29wOiBzZWxmLm9wdGlvbnMubG9vcCA/IDEgOiAwLFxuICAgICAgICAgICAgICAgICAgICBtdXRlZDogc2VsZi5vcHRpb25zLm11dGUgPyAxIDogMCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy52b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnZvbHVtZSA9IHNlbGYub3B0aW9ucy52b2x1bWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBjb250cm9sc1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zLnNob3dDb250b2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5iYWRnZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5ieWxpbmUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucG9ydHJhaXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMudGl0bGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLiR2aWRlbykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyT3B0aW9uc1N0cmluZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxmLnBsYXllck9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllck9wdGlvbnNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT3B0aW9uc1N0cmluZyArPSAnJic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPcHRpb25zU3RyaW5nICs9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQoc2VsZi5wbGF5ZXJPcHRpb25zW2tleV0pfWA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIGlmcmFtZSBtYW51YWxseSBiZWNhdXNlIHdoZW4gd2UgY3JlYXRlIGl0IHVzaW5nIEFQSVxuICAgICAgICAgICAgICAgICAgICAvLyBqcyBldmVudHMgd29uJ3QgdHJpZ2dlcnMgYWZ0ZXIgaWZyYW1lIG1vdmVkIHRvIGFub3RoZXIgcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdpZCcsIHNlbGYucGxheWVySUQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtzZWxmLnZpZGVvSUR9PyR7cGxheWVyT3B0aW9uc1N0cmluZ31gKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdmcmFtZWJvcmRlcicsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnbW96YWxsb3dmdWxsc2NyZWVuJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoc2VsZi4kdmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgbmV3IFZpbWVvLlBsYXllcihzZWxmLiR2aWRlbywgc2VsZi5wbGF5ZXJPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IHRpbWUgZm9yIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5zdGFydFRpbWUgJiYgc2VsZi5vcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnNldEN1cnJlbnRUaW1lKHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0VmlkZW9XaWR0aCgpLnRoZW4oKHdpZHRoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHdpZHRoIHx8IDEyODA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0VmlkZW9IZWlnaHQoKS50aGVuKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IGhlaWdodCB8fCA3MjA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBldmVudHNcbiAgICAgICAgICAgICAgICBsZXQgdm1TdGFydGVkO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgnc3RhcnRlZCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm1TdGFydGVkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgndGltZXVwZGF0ZScsIGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBlbmQgb2YgdmlkZW8gYW5kIHBsYXkgYWdhaW4gb3Igc3RvcFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSAmJiBlLnNlY29uZHMgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5vbigncGxheScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgncGxheScsIGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhcnQgdGltZSBhbmQgc3RhcnQgd2l0aCBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSAmJiBlLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCdwYXVzZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgncGF1c2UnLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5vbignZW5kZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ2VuZGVkJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIub24oJ2xvYWRlZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgncmVhZHknLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCd2b2x1bWVjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTG9jYWxcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNvdXJjZVRvTG9jYWwoZWxlbWVudCwgc3JjLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgICAgICAgICAgICAgc291cmNlLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICBzb3VyY2UudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi4kdmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5zaG93Q29udG9scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uY29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbXV0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm11dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLiR2aWRlby52b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnZvbHVtZSA9IHNlbGYub3B0aW9ucy52b2x1bWUgLyAxMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhdXRvcGxheSBlbmFibGUgb24gbW9iaWxlIGRldmljZXNcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdpZCcsIHNlbGYucGxheWVySUQpO1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoc2VsZi4kdmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZi52aWRlb0lEKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFNvdXJjZVRvTG9jYWwoc2VsZi4kdmlkZW8sIHNlbGYudmlkZW9JRFtrZXldLCBgdmlkZW8vJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgc2VsZi4kdmlkZW87XG5cbiAgICAgICAgICAgICAgICBsZXQgbG9jU3RhcnRlZDtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3N0YXJ0ZWQnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NTdGFydGVkID0gMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCd0aW1ldXBkYXRlJywgZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIHRoaXMuY3VycmVudFRpbWUgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCdwbGF5JywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3BhdXNlJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ2VuZGVkJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHRoaXMudmlkZW9XaWR0aCB8fCAxMjgwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlb0hlaWdodCB8fCA3MjA7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCdyZWFkeScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0Vm9sdW1lKCh2b2x1bWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3ZvbHVtZWNoYW5nZScsIGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnBsYXllcklEID0gYFZpZGVvV29ya2VyLSR7c2VsZi5JRH1gO1xuICAgIH1cblxuICAgIGxvYWRBUEkoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChZb3V0dWJlQVBJYWRkZWQgJiYgVmltZW9BUElhZGRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNyYyA9ICcnO1xuXG4gICAgICAgIC8vIGxvYWQgWW91dHViZSBBUElcbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmICFZb3V0dWJlQVBJYWRkZWQpIHtcbiAgICAgICAgICAgIFlvdXR1YmVBUElhZGRlZCA9IDE7XG4gICAgICAgICAgICBzcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkIFZpbWVvIEFQSVxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmICFWaW1lb0FQSWFkZGVkKSB7XG4gICAgICAgICAgICBWaW1lb0FQSWFkZGVkID0gMTtcbiAgICAgICAgICAgIHNyYyA9ICdodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qcyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjcmlwdCBpbiBoZWFkIHNlY3Rpb25cbiAgICAgICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHRhZy5zcmMgPSBzcmM7XG5cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xuXG4gICAgICAgIGhlYWQgPSBudWxsO1xuICAgICAgICB0YWcgPSBudWxsO1xuICAgIH1cblxuICAgIG9uQVBJcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gWW91dHViZVxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScpIHtcbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgZ2xvYmFsIFlUIHBsYXllciBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgWVQgPT09ICd1bmRlZmluZWQnIHx8IFlULmxvYWRlZCA9PT0gMCkgJiYgIWxvYWRpbmdZb3V0dWJlUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudHMgUmVhZHkgZXZlbnQgZnJvbSBiZWluZyBjYWxsZWQgdHdpY2VcbiAgICAgICAgICAgICAgICBsb2FkaW5nWW91dHViZVBsYXllciA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGVzIGRlZmVycmVkIHNvLCBvdGhlciBwbGF5ZXJzIGtub3cgd2hlbiB0byB3YWl0LlxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1lvdXR1YmVEZWZlci5yZXNvbHZlKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFlUID09PSAnb2JqZWN0JyAmJiBZVC5sb2FkZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nWW91dHViZURlZmVyLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVmltZW9cbiAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBWaW1lbyA9PT0gJ3VuZGVmaW5lZCcgJiYgIWxvYWRpbmdWaW1lb1BsYXllcikge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdWaW1lb1BsYXllciA9IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgdmltZW9JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBWaW1lbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodmltZW9JbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nVmltZW9EZWZlci5yZXNvbHZlKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgVmltZW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ1ZpbWVvRGVmZXIuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2NhbFxuICAgICAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdmlkZW8td29ya2VyL3NyYy92aWRlby13b3JrZXIuZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQgbm8tY2FzZS1kZWNsYXJhdGlvbnM6IFwib2ZmXCIgKi9cbmltcG9ydCBnbG9iYWwgZnJvbSAnZ2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gamFyYWxsYXhFbGVtZW50KGphcmFsbGF4ID0gZ2xvYmFsLmphcmFsbGF4KSB7XG4gICAgaWYgKHR5cGVvZiBqYXJhbGxheCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IEphcmFsbGF4ID0gamFyYWxsYXguY29uc3RydWN0b3I7XG5cbiAgICAvLyByZWRlZmluZSBkZWZhdWx0IG1ldGhvZHNcbiAgICBbXG4gICAgICAgICdpbml0SW1nJyxcbiAgICAgICAgJ2NhbkluaXRQYXJhbGxheCcsXG4gICAgICAgICdpbml0JyxcbiAgICAgICAgJ2Rlc3Ryb3knLFxuICAgICAgICAnY2xpcENvbnRhaW5lcicsXG4gICAgICAgICdjb3ZlckltYWdlJyxcbiAgICAgICAgJ2lzVmlzaWJsZScsXG4gICAgICAgICdvblNjcm9sbCcsXG4gICAgICAgICdvblJlc2l6ZScsXG4gICAgXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgZGVmID0gSmFyYWxsYXgucHJvdG90eXBlW2tleV07XG4gICAgICAgIEphcmFsbGF4LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaW5pdEltZycgJiYgc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtZWxlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnR5cGUgPSAnZWxlbWVudCc7XG4gICAgICAgICAgICAgICAgc2VsZi5wdXJlT3B0aW9ucy5zcGVlZCA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LWVsZW1lbnQnKSB8fCBzZWxmLnB1cmVPcHRpb25zLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy50eXBlICE9PSAnZWxlbWVudCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnB1cmVPcHRpb25zLnRocmVzaG9sZCA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVzaG9sZCcpIHx8ICcnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlZWRBcnIgPSBzZWxmLnB1cmVPcHRpb25zLnNwZWVkLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gc2VsZi5wdXJlT3B0aW9ucy5zcGVlZCB8fCAwO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZFkgPSBzcGVlZEFyclswXSA/IHBhcnNlRmxvYXQoc3BlZWRBcnJbMF0pIDogMDtcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWRYID0gc3BlZWRBcnJbMV0gPyBwYXJzZUZsb2F0KHNwZWVkQXJyWzFdKSA6IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aHJlc2hvbGRBcnIgPSBzZWxmLnB1cmVPcHRpb25zLnRocmVzaG9sZC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy50aHJlc2hvbGRZID0gdGhyZXNob2xkQXJyWzBdID8gcGFyc2VGbG9hdCh0aHJlc2hvbGRBcnJbMF0pIDogbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMudGhyZXNob2xkWCA9IHRocmVzaG9sZEFyclsxXSA/IHBhcnNlRmxvYXQodGhyZXNob2xkQXJyWzFdKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvblJlc2l6ZSc6XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmVHJhbnNmb3JtID0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3RyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHsgdHJhbnNmb3JtOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gc2VsZi4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBzZWxmLml0ZW1EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgeTogcmVjdC50b3AgKyBzZWxmLmdldFdpbmRvd0RhdGEoKS55LFxuICAgICAgICAgICAgICAgICAgICB4OiByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7IHRyYW5zZm9ybTogZGVmVHJhbnNmb3JtIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb25TY3JvbGwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHduZCA9IHNlbGYuZ2V0V2luZG93RGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclBlcmNlbnQgPSAod25kLnkgKyB3bmQuaGVpZ2h0IC8gMiAtIHNlbGYuaXRlbURhdGEueSAtIHNlbGYuaXRlbURhdGEuaGVpZ2h0IC8gMikgLyAod25kLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVZID0gY2VudGVyUGVyY2VudCAqIHNlbGYub3B0aW9ucy5zcGVlZFk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVggPSBjZW50ZXJQZXJjZW50ICogc2VsZi5vcHRpb25zLnNwZWVkWDtcbiAgICAgICAgICAgICAgICBsZXQgbXkgPSBtb3ZlWTtcbiAgICAgICAgICAgICAgICBsZXQgbXggPSBtb3ZlWDtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnRocmVzaG9sZFkgIT09IG51bGwgJiYgbW92ZVkgPiBzZWxmLm9wdGlvbnMudGhyZXNob2xkWSkgbXkgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudGhyZXNob2xkWCAhPT0gbnVsbCAmJiBtb3ZlWCA+IHNlbGYub3B0aW9ucy50aHJlc2hvbGRYKSBteCA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke214fXB4LCR7bXl9cHgsMClgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5pdEltZyc6XG4gICAgICAgICAgICBjYXNlICdpc1Zpc2libGUnOlxuICAgICAgICAgICAgY2FzZSAnY2xpcENvbnRhaW5lcic6XG4gICAgICAgICAgICBjYXNlICdjb3ZlckltYWdlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWYuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qYXJhbGxheC9zcmMvamFyYWxsYXgtZWxlbWVudC5lc20uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=