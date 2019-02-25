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