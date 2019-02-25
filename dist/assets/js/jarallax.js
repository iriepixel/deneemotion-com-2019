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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lite_ready__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jarallax_esm__ = __webpack_require__(3);




// no conflict
const oldPlugin = __WEBPACK_IMPORTED_MODULE_1_global__["window"].jarallax;
__WEBPACK_IMPORTED_MODULE_1_global__["window"].jarallax = __WEBPACK_IMPORTED_MODULE_2__jarallax_esm__["default"];
__WEBPACK_IMPORTED_MODULE_1_global__["window"].jarallax.noConflict = function () {
    __WEBPACK_IMPORTED_MODULE_1_global__["window"].jarallax = oldPlugin;
    return this;
};

// jQuery support
if (typeof __WEBPACK_IMPORTED_MODULE_1_global__["jQuery"] !== 'undefined') {
    const jQueryPlugin = function () {
        const args = arguments || [];
        Array.prototype.unshift.call(args, this);
        const res = __WEBPACK_IMPORTED_MODULE_2__jarallax_esm__["default"].apply(__WEBPACK_IMPORTED_MODULE_1_global__["window"], args);
        return typeof res !== 'object' ? res : this;
    };
    jQueryPlugin.constructor = __WEBPACK_IMPORTED_MODULE_2__jarallax_esm__["default"].constructor;

    // no conflict
    const oldJqPlugin = __WEBPACK_IMPORTED_MODULE_1_global__["jQuery"].fn.jarallax;
    __WEBPACK_IMPORTED_MODULE_1_global__["jQuery"].fn.jarallax = jQueryPlugin;
    __WEBPACK_IMPORTED_MODULE_1_global__["jQuery"].fn.jarallax.noConflict = function () {
        __WEBPACK_IMPORTED_MODULE_1_global__["jQuery"].fn.jarallax = oldJqPlugin;
        return this;
    };
}

// data-jarallax initialization
__WEBPACK_IMPORTED_MODULE_0_lite_ready___default()(() => {
    Object(__WEBPACK_IMPORTED_MODULE_2__jarallax_esm__["default"])(document.querySelectorAll('[data-jarallax]'));
});


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDdhOGRkN2FkYTYzMjViYjIyMWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0ZS1yZWFkeS9saXRlcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhZmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOzs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ2lCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxxQ0FBcUM7QUFDckMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSx1RUFBdUUsZ0JBQWdCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0Isb0JBQW9CLDBCQUEwQjtBQUNsSDtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWU7QUFDL0QsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsZ0JBQWdCO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsZ0JBQWdCO0FBQzlELDBCQUEwQixNQUFNLEtBQUssT0FBTztBQUM1QywyQkFBMkIsTUFBTSxNQUFNLE9BQU87QUFDOUMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMEJBQTBCLFNBQVM7QUFDbkMsdURBQXVELFVBQVU7QUFDakUsc0JBQXNCLFdBQVc7QUFDakMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxVQUFVO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3R2QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJqYXJhbGxheC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3YThkZDdhZGE2MzI1YmIyMjFjIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xyXG5cdFx0Ly8gQWxyZWFkeSByZWFkeSBvciBpbnRlcmFjdGl2ZSwgZXhlY3V0ZSBjYWxsYmFja1xyXG5cdFx0Y2FsbGJhY2suY2FsbCgpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG5cdFx0Ly8gT2xkIGJyb3dzZXJzXHJcblx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJylcclxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0Ly8gTW9kZXJuIGJyb3dzZXJzXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9saXRlLXJlYWR5L2xpdGVyZWFkeS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBkb21SZWFkeSBmcm9tICdsaXRlLXJlYWR5JztcbmltcG9ydCByYWYgZnJvbSAncmFmbCc7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICdnbG9iYWwnO1xuXG5jb25zdCBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFICcpID4gLTEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpID4gLTEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlLycpID4gLTE7XG5cbmNvbnN0IHN1cHBvcnRUcmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeGVzID0gJ3RyYW5zZm9ybSBXZWJraXRUcmFuc2Zvcm0gTW96VHJhbnNmb3JtJy5zcGxpdCgnICcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRpdiAmJiBkaXYuc3R5bGVbcHJlZml4ZXNbaV1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXhlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG4vLyBXaW5kb3cgZGF0YVxubGV0IHduZFc7XG5sZXQgd25kSDtcbmxldCB3bmRZO1xubGV0IGZvcmNlUmVzaXplUGFyYWxsYXggPSBmYWxzZTtcbmxldCBmb3JjZVNjcm9sbFBhcmFsbGF4ID0gZmFsc2U7XG5mdW5jdGlvbiB1cGRhdGVXbmRWYXJzKGUpIHtcbiAgICB3bmRXID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHduZEggPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBpZiAodHlwZW9mIGUgPT09ICdvYmplY3QnICYmIChlLnR5cGUgPT09ICdsb2FkJyB8fCBlLnR5cGUgPT09ICdkb20tbG9hZGVkJykpIHtcbiAgICAgICAgZm9yY2VSZXNpemVQYXJhbGxheCA9IHRydWU7XG4gICAgfVxufVxudXBkYXRlV25kVmFycygpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVduZFZhcnMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlV25kVmFycyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHVwZGF0ZVduZFZhcnMpO1xuZG9tUmVhZHkoKCkgPT4ge1xuICAgIHVwZGF0ZVduZFZhcnMoe1xuICAgICAgICB0eXBlOiAnZG9tLWxvYWRlZCcsXG4gICAgfSk7XG59KTtcblxuLy8gbGlzdCB3aXRoIGFsbCBqYXJhbGxheCBpbnN0YW5jZXNcbi8vIG5lZWQgdG8gcmVuZGVyIGFsbCBpbiBvbmUgc2Nyb2xsL3Jlc2l6ZSBldmVudFxuY29uc3QgamFyYWxsYXhMaXN0ID0gW107XG5cbi8vIEFuaW1hdGUgaWYgY2hhbmdlZCB3aW5kb3cgc2l6ZSBvciBzY3JvbGxlZCBwYWdlXG5sZXQgb2xkUGFnZURhdGEgPSBmYWxzZTtcbmZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuICAgIGlmICghamFyYWxsYXhMaXN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHduZFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd25kWSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1Jlc2l6ZWQgPSBmb3JjZVJlc2l6ZVBhcmFsbGF4IHx8ICFvbGRQYWdlRGF0YSB8fCBvbGRQYWdlRGF0YS53aWR0aCAhPT0gd25kVyB8fCBvbGRQYWdlRGF0YS5oZWlnaHQgIT09IHduZEg7XG4gICAgY29uc3QgaXNTY3JvbGxlZCA9IGZvcmNlU2Nyb2xsUGFyYWxsYXggfHwgaXNSZXNpemVkIHx8ICFvbGRQYWdlRGF0YSB8fCBvbGRQYWdlRGF0YS55ICE9PSB3bmRZO1xuXG4gICAgZm9yY2VSZXNpemVQYXJhbGxheCA9IGZhbHNlO1xuICAgIGZvcmNlU2Nyb2xsUGFyYWxsYXggPSBmYWxzZTtcblxuICAgIGlmIChpc1Jlc2l6ZWQgfHwgaXNTY3JvbGxlZCkge1xuICAgICAgICBqYXJhbGxheExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUmVzaXplZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ub25SZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Njcm9sbGVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5vblNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBvbGRQYWdlRGF0YSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB3bmRXLFxuICAgICAgICAgICAgaGVpZ2h0OiB3bmRILFxuICAgICAgICAgICAgeTogd25kWSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByYWYodXBkYXRlUGFyYWxsYXgpO1xufVxuXG5cbi8vIFJlc2l6ZU9ic2VydmVyXG5jb25zdCByZXNpemVPYnNlcnZlciA9IGdsb2JhbC5SZXNpemVPYnNlcnZlciA/IG5ldyBnbG9iYWwuUmVzaXplT2JzZXJ2ZXIoKGVudHJ5KSA9PiB7XG4gICAgaWYgKGVudHJ5ICYmIGVudHJ5Lmxlbmd0aCkge1xuICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgICAgZW50cnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhcmdldCAmJiBpdGVtLnRhcmdldC5qYXJhbGxheCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcmNlUmVzaXplUGFyYWxsYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGFyZ2V0LmphcmFsbGF4Lm9uUmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yY2VTY3JvbGxQYXJhbGxheCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pIDogZmFsc2U7XG5cblxubGV0IGluc3RhbmNlSUQgPSAwO1xuXG4vLyBKYXJhbGxheCBjbGFzc1xuY2xhc3MgSmFyYWxsYXgge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW0sIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuaW5zdGFuY2VJRCA9IGluc3RhbmNlSUQrKztcblxuICAgICAgICBzZWxmLiRpdGVtID0gaXRlbTtcblxuICAgICAgICBzZWxmLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCcsIC8vIHR5cGUgb2YgcGFyYWxsYXg6IHNjcm9sbCwgc2NhbGUsIG9wYWNpdHksIHNjYWxlLW9wYWNpdHksIHNjcm9sbC1vcGFjaXR5XG4gICAgICAgICAgICBzcGVlZDogMC41LCAvLyBzdXBwb3J0ZWQgdmFsdWUgZnJvbSAtMSB0byAyXG4gICAgICAgICAgICBpbWdTcmM6IG51bGwsXG4gICAgICAgICAgICBpbWdFbGVtZW50OiAnLmphcmFsbGF4LWltZycsXG4gICAgICAgICAgICBpbWdTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgaW1nUG9zaXRpb246ICc1MCUgNTAlJyxcbiAgICAgICAgICAgIGltZ1JlcGVhdDogJ25vLXJlcGVhdCcsIC8vIHN1cHBvcnRlZCBvbmx5IGZvciBiYWNrZ3JvdW5kLCBub3QgZm9yIDxpbWc+IHRhZ1xuICAgICAgICAgICAga2VlcEltZzogZmFsc2UsIC8vIGtlZXAgPGltZz4gdGFnIGluIGl0J3MgZGVmYXVsdCBwbGFjZVxuICAgICAgICAgICAgZWxlbWVudEluVmlld3BvcnQ6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IC0xMDAsXG4gICAgICAgICAgICBkaXNhYmxlUGFyYWxsYXg6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZVZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9tYXRpY1Jlc2l6ZTogdHJ1ZSwgLy8gdXNlIFJlc2l6ZU9ic2VydmVyIHRvIHJlY2FsY3VsYXRlIHBvc2l0aW9uIGFuZCBzaXplIG9mIHBhcmFsbGF4IGltYWdlXG5cbiAgICAgICAgICAgIC8vIHZpZGVvXG4gICAgICAgICAgICB2aWRlb1NyYzogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvU3RhcnRUaW1lOiAwLFxuICAgICAgICAgICAgdmlkZW9FbmRUaW1lOiAwLFxuICAgICAgICAgICAgdmlkZW9Wb2x1bWU6IDAsXG4gICAgICAgICAgICB2aWRlb0xvb3A6IHRydWUsXG4gICAgICAgICAgICB2aWRlb1BsYXlPbmx5VmlzaWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gZXZlbnRzXG4gICAgICAgICAgICBvblNjcm9sbDogbnVsbCwgLy8gZnVuY3Rpb24oY2FsY3VsYXRpb25zKSB7fVxuICAgICAgICAgICAgb25Jbml0OiBudWxsLCAvLyBmdW5jdGlvbigpIHt9XG4gICAgICAgICAgICBvbkRlc3Ryb3k6IG51bGwsIC8vIGZ1bmN0aW9uKCkge31cbiAgICAgICAgICAgIG9uQ292ZXJJbWFnZTogbnVsbCwgLy8gZnVuY3Rpb24oKSB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERFUFJFQ0FURUQ6IG9sZCBkYXRhLW9wdGlvbnNcbiAgICAgICAgY29uc3QgZGVwcmVjYXRlZERhdGFBdHRyaWJ1dGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheCcpO1xuICAgICAgICBjb25zdCBvbGREYXRhT3B0aW9ucyA9IEpTT04ucGFyc2UoZGVwcmVjYXRlZERhdGFBdHRyaWJ1dGUgfHwgJ3t9Jyk7XG4gICAgICAgIGlmIChkZXByZWNhdGVkRGF0YUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGV0ZWN0ZWQgdXNhZ2Ugb2YgZGVwcmVjYXRlZCBkYXRhLWphcmFsbGF4IEpTT04gb3B0aW9ucywgeW91IHNob3VsZCB1c2UgcHVyZSBkYXRhLWF0dHJpYnV0ZSBvcHRpb25zLiBTZWUgaW5mbyBoZXJlIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzUzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGRhdGEtb3B0aW9uc1xuICAgICAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHNlbGYuJGl0ZW0uZGF0YXNldCB8fCB7fTtcbiAgICAgICAgY29uc3QgcHVyZURhdGFPcHRpb25zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvd2VDYXNlT3B0aW9uID0ga2V5LnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgIGlmIChsb3dlQ2FzZU9wdGlvbiAmJiB0eXBlb2Ygc2VsZi5kZWZhdWx0c1tsb3dlQ2FzZU9wdGlvbl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcHVyZURhdGFPcHRpb25zW2xvd2VDYXNlT3B0aW9uXSA9IGRhdGFPcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYub3B0aW9ucyA9IHNlbGYuZXh0ZW5kKHt9LCBzZWxmLmRlZmF1bHRzLCBvbGREYXRhT3B0aW9ucywgcHVyZURhdGFPcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gICAgICAgIHNlbGYucHVyZU9wdGlvbnMgPSBzZWxmLmV4dGVuZCh7fSwgc2VsZi5vcHRpb25zKTtcblxuICAgICAgICAvLyBwcmVwYXJlICd0cnVlJyBhbmQgJ2ZhbHNlJyBzdHJpbmdzIHRvIGJvb2xlYW5cbiAgICAgICAgT2JqZWN0LmtleXMoc2VsZi5vcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnNba2V5XSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLm9wdGlvbnNba2V5XSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9uc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBzcGVlZCBvcHRpb24gWy0xLjAsIDIuMF1cbiAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gTWF0aC5taW4oMiwgTWF0aC5tYXgoLTEsIHBhcnNlRmxvYXQoc2VsZi5vcHRpb25zLnNwZWVkKSkpO1xuXG4gICAgICAgIC8vIGRlcHJlY2F0ZWQgbm9BbmRyb2lkIGFuZCBub0lvcyBvcHRpb25zXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMubm9BbmRyb2lkIHx8IHNlbGYub3B0aW9ucy5ub0lvcykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGV0ZWN0ZWQgdXNhZ2Ugb2YgZGVwcmVjYXRlZCBub0FuZHJvaWQgb3Igbm9Jb3Mgb3B0aW9ucywgeW91IHNob3VsZCB1c2UgZGlzYWJsZVBhcmFsbGF4IG9wdGlvbi4gU2VlIGluZm8gaGVyZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4LyNkaXNhYmxlLW9uLW1vYmlsZS1kZXZpY2VzJyk7XG5cbiAgICAgICAgICAgIC8vIHByZXBhcmUgZmFsbGJhY2sgaWYgZGlzYWJsZVBhcmFsbGF4IG9wdGlvbiBpcyBub3QgdXNlZFxuICAgICAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5ub0lvcyAmJiBzZWxmLm9wdGlvbnMubm9BbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAvaVBhZHxpUGhvbmV8aVBvZHxBbmRyb2lkLztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0aW9ucy5ub0lvcykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gL2lQYWR8aVBob25lfGlQb2QvO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5vcHRpb25zLm5vQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gL0FuZHJvaWQvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgZGlzYWJsZVBhcmFsbGF4IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSBuZXcgUmVnRXhwKHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlUGFyYWxsYXhSZWdleHAgPSBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4O1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9ICgpID0+IGRpc2FibGVQYXJhbGxheFJlZ2V4cC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9ICgpID0+IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJlcGFyZSBkaXNhYmxlVmlkZW8gY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9IG5ldyBSZWdFeHAoc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVWaWRlb1JlZ2V4cCA9IHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW87XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gKCkgPT4gZGlzYWJsZVZpZGVvUmVnZXhwLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gKCkgPT4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjdXN0b20gZWxlbWVudCB0byBjaGVjayBpZiBwYXJhbGxheCBpbiB2aWV3cG9ydFxuICAgICAgICBsZXQgZWxlbWVudEluVlAgPSBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQ7XG4gICAgICAgIC8vIGdldCBmaXJzdCBpdGVtIGZyb20gYXJyYXlcbiAgICAgICAgaWYgKGVsZW1lbnRJblZQICYmIHR5cGVvZiBlbGVtZW50SW5WUCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGVsZW1lbnRJblZQLmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFtlbGVtZW50SW5WUF0gPSBlbGVtZW50SW5WUDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuICAgICAgICBpZiAoIShlbGVtZW50SW5WUCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50SW5WUCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0ID0gZWxlbWVudEluVlA7XG5cbiAgICAgICAgc2VsZi5pbWFnZSA9IHtcbiAgICAgICAgICAgIHNyYzogc2VsZi5vcHRpb25zLmltZ1NyYyB8fCBudWxsLFxuICAgICAgICAgICAgJGNvbnRhaW5lcjogbnVsbCxcbiAgICAgICAgICAgIHVzZUltZ1RhZzogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIHBvc2l0aW9uIGZpeGVkIGlzIG5lZWRlZCBmb3IgdGhlIG1vc3Qgb2YgYnJvd3NlcnMgYmVjYXVzZSBhYnNvbHV0ZSBwb3NpdGlvbiBoYXZlIGdsaXRjaGVzXG4gICAgICAgICAgICAvLyBvbiBNYWNPUyB3aXRoIHNtb290aCBzY3JvbGwgdGhlcmUgaXMgYSBodWdlIGxhZ3Mgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy83NVxuICAgICAgICAgICAgLy8gb24gbW9iaWxlIGRldmljZXMgYmV0dGVyIHNjcm9sbGVkIHdpdGggYWJzb2x1dGUgcG9zaXRpb25cbiAgICAgICAgICAgIHBvc2l0aW9uOiAvaVBhZHxpUGhvbmV8aVBvZHxBbmRyb2lkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNlbGYuaW5pdEltZygpICYmIHNlbGYuY2FuSW5pdFBhcmFsbGF4KCkpIHtcbiAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHN0eWxlcyB0byBlbGVtZW50XG4gICAgY3NzKGVsLCBzdHlsZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0cmFuc2Zvcm0gcHJvcGVydHkgd2l0aCB2ZW5kb3IgcHJlZml4XG4gICAgICAgIGlmIChzdHlsZXMudHJhbnNmb3JtICYmIHN1cHBvcnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHN0eWxlc1tzdXBwb3J0VHJhbnNmb3JtXSA9IHN0eWxlcy50cmFuc2Zvcm07XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8vIEV4dGVuZCBsaWtlIGpRdWVyeS5leHRlbmRcbiAgICBleHRlbmQob3V0KSB7XG4gICAgICAgIG91dCA9IG91dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndW1lbnRzKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFyZ3VtZW50c1tpXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0W2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvLyBnZXQgd2luZG93IHNpemUgYW5kIHNjcm9sbCBwb3NpdGlvbi4gVXNlZnVsIGZvciBleHRlbnNpb25zXG4gICAgZ2V0V2luZG93RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3bmRXLFxuICAgICAgICAgICAgaGVpZ2h0OiB3bmRILFxuICAgICAgICAgICAgeTogd25kWSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBKYXJhbGxheCBmdW5jdGlvbnNcbiAgICBpbml0SW1nKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBmaW5kIGltYWdlIGVsZW1lbnRcbiAgICAgICAgbGV0ICRpbWdFbGVtZW50ID0gc2VsZi5vcHRpb25zLmltZ0VsZW1lbnQ7XG4gICAgICAgIGlmICgkaW1nRWxlbWVudCAmJiB0eXBlb2YgJGltZ0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAkaW1nRWxlbWVudCA9IHNlbGYuJGl0ZW0ucXVlcnlTZWxlY3RvcigkaW1nRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgZG9tIGVsZW1lbnRcbiAgICAgICAgaWYgKCEoJGltZ0VsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgJGltZ0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmtlZXBJbWcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gJGltZ0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gJGltZ0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbVBhcmVudCA9ICRpbWdFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmltYWdlLnVzZUltZ1RhZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cnVlIGlmIHRoZXJlIGlzIGltZyB0YWdcbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGltYWdlIHNyY1xuICAgICAgICBpZiAoc2VsZi5pbWFnZS5zcmMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGYuaW1hZ2Uuc3JjID0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ2JhY2tncm91bmQtaW1hZ2UnKS5yZXBsYWNlKC9edXJsXFwoWydcIl0/L2csICcnKS5yZXBsYWNlKC9bJ1wiXT9cXCkkL2csICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISghc2VsZi5pbWFnZS5zcmMgfHwgc2VsZi5pbWFnZS5zcmMgPT09ICdub25lJyk7XG4gICAgfVxuXG4gICAgY2FuSW5pdFBhcmFsbGF4KCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydFRyYW5zZm9ybSAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVQYXJhbGxheCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBpbWFnZVN0eWxlcyA9IHt9O1xuXG4gICAgICAgIGlmICghc2VsZi5vcHRpb25zLmtlZXBJbWcpIHtcbiAgICAgICAgICAgIC8vIHNhdmUgZGVmYXVsdCB1c2VyIHN0eWxlc1xuICAgICAgICAgICAgY29uc3QgY3VyU3R5bGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGlmIChjdXJTdHlsZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycsIGN1clN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmltYWdlLnVzZUltZ1RhZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1ckltZ1N0eWxlID0gc2VsZi5pbWFnZS4kaXRlbS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1ckltZ1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycsIGN1ckltZ1N0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgcmVsYXRpdmUgcG9zaXRpb24gYW5kIHotaW5kZXggdG8gdGhlIHBhcmVudFxuICAgICAgICBpZiAoc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3otaW5kZXgnKSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb250YWluZXIgZm9yIHBhcmFsbGF4IGltYWdlXG4gICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRjb250YWluZXIsIGNvbnRhaW5lclN0eWxlcyk7XG4gICAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwge1xuICAgICAgICAgICAgJ3otaW5kZXgnOiBzZWxmLm9wdGlvbnMuekluZGV4LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBmaXggZm9yIElFIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy8xMTBcbiAgICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTk5OSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgamFyYWxsYXgtY29udGFpbmVyLSR7c2VsZi5pbnN0YW5jZUlEfWApO1xuICAgICAgICBzZWxmLiRpdGVtLmFwcGVuZENoaWxkKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gdXNlIGltZyB0YWdcbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICAgICAgICBpbWFnZVN0eWxlcyA9IHNlbGYuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAnb2JqZWN0LWZpdCc6IHNlbGYub3B0aW9ucy5pbWdTaXplLFxuICAgICAgICAgICAgICAgICdvYmplY3QtcG9zaXRpb24nOiBzZWxmLm9wdGlvbnMuaW1nUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBmb3IgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlc1xuICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGBvYmplY3QtZml0OiAke3NlbGYub3B0aW9ucy5pbWdTaXplfTsgb2JqZWN0LXBvc2l0aW9uOiAke3NlbGYub3B0aW9ucy5pbWdQb3NpdGlvbn07YCxcbiAgICAgICAgICAgICAgICAnbWF4LXdpZHRoJzogJ25vbmUnLFxuICAgICAgICAgICAgfSwgY29udGFpbmVyU3R5bGVzLCBpbWFnZVN0eWxlcyk7XG5cbiAgICAgICAgLy8gdXNlIGRpdiB3aXRoIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmltYWdlLnNyYykge1xuICAgICAgICAgICAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHNlbGYub3B0aW9ucy5pbWdQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6IHNlbGYub3B0aW9ucy5pbWdTaXplLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiBzZWxmLm9wdGlvbnMuaW1nUmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoXCIke3NlbGYuaW1hZ2Uuc3JjfVwiKWAsXG4gICAgICAgICAgICAgICAgfSwgY29udGFpbmVyU3R5bGVzLCBpbWFnZVN0eWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnR5cGUgPT09ICdvcGFjaXR5JyB8fCBzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ3NjYWxlJyB8fCBzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ3NjYWxlLW9wYWNpdHknIHx8IHNlbGYub3B0aW9ucy5zcGVlZCA9PT0gMSkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiBvbmUgb2YgcGFyZW50cyBoYXZlIHRyYW5zZm9ybSBzdHlsZSAod2l0aG91dCB0aGlzIGNoZWNrLCBzY3JvbGwgdHJhbnNmb3JtIHdpbGwgYmUgaW52ZXJ0ZWQgaWYgdXNlZCBwYXJhbGxheCB3aXRoIHBvc2l0aW9uIGZpeGVkKVxuICAgICAgICAvLyBkaXNjdXNzaW9uIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzlcbiAgICAgICAgaWYgKHNlbGYuaW1hZ2UucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRXaXRoVHJhbnNmb3JtID0gMDtcbiAgICAgICAgICAgIGxldCAkaXRlbVBhcmVudHMgPSBzZWxmLiRpdGVtO1xuICAgICAgICAgICAgd2hpbGUgKCRpdGVtUGFyZW50cyAhPT0gbnVsbCAmJiAkaXRlbVBhcmVudHMgIT09IGRvY3VtZW50ICYmIHBhcmVudFdpdGhUcmFuc2Zvcm0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUcmFuc2Zvcm0gPSBzZWxmLmNzcygkaXRlbVBhcmVudHMsICctd2Via2l0LXRyYW5zZm9ybScpIHx8IHNlbGYuY3NzKCRpdGVtUGFyZW50cywgJy1tb3otdHJhbnNmb3JtJykgfHwgc2VsZi5jc3MoJGl0ZW1QYXJlbnRzLCAndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zZm9ybSAmJiBwYXJlbnRUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRXaXRoVHJhbnNmb3JtID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRpdGVtUGFyZW50cyA9ICRpdGVtUGFyZW50cy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHBvc2l0aW9uIHRvIHBhcmFsbGF4IGJsb2NrXG4gICAgICAgIGltYWdlU3R5bGVzLnBvc2l0aW9uID0gc2VsZi5pbWFnZS5wb3NpdGlvbjtcblxuICAgICAgICAvLyBpbnNlcnQgcGFyYWxsYXggaW1hZ2VcbiAgICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwgaW1hZ2VTdHlsZXMpO1xuICAgICAgICBzZWxmLmltYWdlLiRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5pbWFnZS4kaXRlbSk7XG5cbiAgICAgICAgLy8gc2V0IGluaXRpYWwgcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgc2VsZi5vblJlc2l6ZSgpO1xuICAgICAgICBzZWxmLm9uU2Nyb2xsKHRydWUpO1xuXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYXV0b21hdGljUmVzaXplICYmIHJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHNlbGYuJGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCBvbkluaXQgZXZlbnRcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5vbkluaXQpIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkluaXQuY2FsbChzZWxmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBkZWZhdWx0IHVzZXIgYmFja2dyb3VuZFxuICAgICAgICBpZiAoc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ2JhY2tncm91bmQtaW1hZ2UnKSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAnbm9uZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuYWRkVG9QYXJhbGxheExpc3QoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG8gcGFyYWxsYXggaW5zdGFuY2VzIGxpc3RcbiAgICBhZGRUb1BhcmFsbGF4TGlzdCgpIHtcbiAgICAgICAgamFyYWxsYXhMaXN0LnB1c2godGhpcyk7XG5cbiAgICAgICAgaWYgKGphcmFsbGF4TGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZnJvbSBwYXJhbGxheCBpbnN0YW5jZXMgbGlzdFxuICAgIHJlbW92ZUZyb21QYXJhbGxheExpc3QoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGphcmFsbGF4TGlzdC5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmluc3RhbmNlSUQgPT09IHNlbGYuaW5zdGFuY2VJRCkge1xuICAgICAgICAgICAgICAgIGphcmFsbGF4TGlzdC5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5yZW1vdmVGcm9tUGFyYWxsYXhMaXN0KCk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHN0eWxlcyBvbiBjb250YWluZXIgYXMgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNUYWcgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcbiAgICAgICAgc2VsZi4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG4gICAgICAgIC8vIG51bGwgb2NjdXJzIGlmIHRoZXJlIGlzIG5vIHN0eWxlIHRhZyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgICBpZiAoIW9yaWdpbmFsU3R5bGVzVGFnKSB7XG4gICAgICAgICAgICBzZWxmLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdpbmFsU3R5bGVzVGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmltYWdlLnVzZUltZ1RhZykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHN0eWxlcyBvbiBpbWcgdGFnIGFzIGJlZm9yZSBqYXJhbGxheCBpbml0XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0eWxlc0ltZ1RhZyA9IHNlbGYuaW1hZ2UuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpO1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG4gICAgICAgICAgICAvLyBudWxsIG9jY3VycyBpZiB0aGVyZSBpcyBubyBzdHlsZSB0YWcgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgICAgICAgIGlmICghb3JpZ2luYWxTdHlsZXNJbWdUYWcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZXNUYWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtb3ZlIGltZyB0YWcgdG8gaXRzIGRlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICAgIGlmIChzZWxmLmltYWdlLiRpdGVtUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbVBhcmVudC5hcHBlbmRDaGlsZChzZWxmLmltYWdlLiRpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBhZGRpdGlvbmFsIGRvbSBlbGVtZW50c1xuICAgICAgICBpZiAoc2VsZi4kY2xpcFN0eWxlcykge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuJGNsaXBTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmltYWdlLiRjb250YWluZXIpIHtcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIG9uRGVzdHJveSBldmVudFxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uRGVzdHJveSkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uRGVzdHJveS5jYWxsKHNlbGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVsZXRlIGphcmFsbGF4IGZyb20gaXRlbVxuICAgICAgICBkZWxldGUgc2VsZi4kaXRlbS5qYXJhbGxheDtcbiAgICB9XG5cbiAgICAvLyBpdCB3aWxsIHJlbW92ZSBzb21lIGltYWdlIG92ZXJsYXBwaW5nXG4gICAgLy8gb3ZlcmxhcHBpbmcgb2NjdXIgZHVlIHRvIGFuIGltYWdlIHBvc2l0aW9uIGZpeGVkIGluc2lkZSBhYnNvbHV0ZSBwb3NpdGlvbiBlbGVtZW50XG4gICAgY2xpcENvbnRhaW5lcigpIHtcbiAgICAgICAgLy8gbmVlZGVkIG9ubHkgd2hlbiBiYWNrZ3JvdW5kIGluIGZpeGVkIHBvc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmltYWdlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgcmVjdCA9IHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZWN0O1xuXG4gICAgICAgIGlmICghc2VsZi4kY2xpcFN0eWxlcykge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGphcmFsbGF4LWNsaXAtJHtzZWxmLmluc3RhbmNlSUR9YCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzZWxmLiRjbGlwU3R5bGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGAjamFyYWxsYXgtY29udGFpbmVyLSR7c2VsZi5pbnN0YW5jZUlEfSB7XG4gICAgICAgICAgIGNsaXA6IHJlY3QoMCAke3dpZHRofXB4ICR7aGVpZ2h0fXB4IDApO1xuICAgICAgICAgICBjbGlwOiByZWN0KDAsICR7d2lkdGh9cHgsICR7aGVpZ2h0fXB4LCAwKTtcbiAgICAgICAgfWA7XG5cbiAgICAgICAgLy8gYWRkIGNsaXAgc3R5bGVzIGlubGluZSAodGhpcyBtZXRob2QgbmVlZCBmb3Igc3VwcG9ydCBJRTggYW5kIGxlc3MgYnJvd3NlcnMpXG4gICAgICAgIGlmIChzZWxmLiRjbGlwU3R5bGVzLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgIHNlbGYuJGNsaXBTdHlsZXMuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcy5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3ZlckltYWdlKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCByZWN0ID0gc2VsZi5pbWFnZS4kY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjb250SCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCB7IHNwZWVkIH0gPSBzZWxmLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGlzU2Nyb2xsID0gc2VsZi5vcHRpb25zLnR5cGUgPT09ICdzY3JvbGwnIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2Nyb2xsLW9wYWNpdHknO1xuICAgICAgICBsZXQgc2Nyb2xsRGlzdCA9IDA7XG4gICAgICAgIGxldCByZXN1bHRIID0gY29udEg7XG4gICAgICAgIGxldCByZXN1bHRNVCA9IDA7XG5cbiAgICAgICAgLy8gc2Nyb2xsIHBhcmFsbGF4XG4gICAgICAgIGlmIChpc1Njcm9sbCkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGRpc3RhbmNlIGFuZCBoZWlnaHQgZm9yIGltYWdlXG4gICAgICAgICAgICBpZiAoc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRGlzdCA9IHNwZWVkICogTWF0aC5tYXgoY29udEgsIHduZEgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHduZEggPCBjb250SCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxEaXN0IC09IHNwZWVkICogKGNvbnRIIC0gd25kSCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXN0ID0gc3BlZWQgKiAoY29udEggKyB3bmRIKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2l6ZSBmb3Igc2Nyb2xsIHBhcmFsbGF4XG4gICAgICAgICAgICBpZiAoc3BlZWQgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0SCA9IE1hdGguYWJzKHNjcm9sbERpc3QgLSB3bmRIKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0SCA9IHNjcm9sbERpc3QgLyBzcGVlZCArIE1hdGguYWJzKHNjcm9sbERpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRIICs9ICh3bmRIIC0gY29udEgpICogKDEgLSBzcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjcm9sbERpc3QgLz0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3JlIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBzZWxmLnBhcmFsbGF4U2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxEaXN0O1xuXG4gICAgICAgIC8vIHZlcnRpY2FsIGNlbnRlclxuICAgICAgICBpZiAoaXNTY3JvbGwpIHtcbiAgICAgICAgICAgIHJlc3VsdE1UID0gKHduZEggLSByZXN1bHRIKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRNVCA9IChjb250SCAtIHJlc3VsdEgpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFwcGx5IHJlc3VsdCB0byBpdGVtXG4gICAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGl0ZW0sIHtcbiAgICAgICAgICAgIGhlaWdodDogYCR7cmVzdWx0SH1weGAsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IGAke3Jlc3VsdE1UfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IHNlbGYuaW1hZ2UucG9zaXRpb24gPT09ICdmaXhlZCcgPyBgJHtyZWN0LmxlZnR9cHhgIDogJzAnLFxuICAgICAgICAgICAgd2lkdGg6IGAke3JlY3Qud2lkdGh9cHhgLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWxsIG9uQ292ZXJJbWFnZSBldmVudFxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uQ292ZXJJbWFnZSkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uQ292ZXJJbWFnZS5jYWxsKHNlbGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHNvbWUgdXNlZnVsIGRhdGEuIFVzZWQgaW4gdGhlIHZpZGVvIGNvdmVyIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogcmVzdWx0SCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJlc3VsdE1ULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogcmVjdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgb25TY3JvbGwoZm9yY2UpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IHNlbGYuJGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRUID0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IGNvbnRIID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHt9O1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGluIHZpZXdwb3J0XG4gICAgICAgIGxldCB2aWV3cG9ydFJlY3QgPSByZWN0O1xuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0KSB7XG4gICAgICAgICAgICB2aWV3cG9ydFJlY3QgPSBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5pc0VsZW1lbnRJblZpZXdwb3J0ID0gdmlld3BvcnRSZWN0LmJvdHRvbSA+PSAwXG4gICAgICAgICAgICAmJiB2aWV3cG9ydFJlY3QucmlnaHQgPj0gMFxuICAgICAgICAgICAgJiYgdmlld3BvcnRSZWN0LnRvcCA8PSB3bmRIXG4gICAgICAgICAgICAmJiB2aWV3cG9ydFJlY3QubGVmdCA8PSB3bmRXO1xuXG4gICAgICAgIC8vIHN0b3AgY2FsY3VsYXRpb25zIGlmIGl0ZW0gaXMgbm90IGluIHZpZXdwb3J0XG4gICAgICAgIGlmIChmb3JjZSA/IGZhbHNlIDogIXNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHBhcmFsbGF4IGhlbHBpbmcgdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGJlZm9yZVRvcCA9IE1hdGgubWF4KDAsIGNvbnRUKTtcbiAgICAgICAgY29uc3QgYmVmb3JlVG9wRW5kID0gTWF0aC5tYXgoMCwgY29udEggKyBjb250VCk7XG4gICAgICAgIGNvbnN0IGFmdGVyVG9wID0gTWF0aC5tYXgoMCwgLWNvbnRUKTtcbiAgICAgICAgY29uc3QgYmVmb3JlQm90dG9tID0gTWF0aC5tYXgoMCwgY29udFQgKyBjb250SCAtIHduZEgpO1xuICAgICAgICBjb25zdCBiZWZvcmVCb3R0b21FbmQgPSBNYXRoLm1heCgwLCBjb250SCAtIChjb250VCArIGNvbnRIIC0gd25kSCkpO1xuICAgICAgICBjb25zdCBhZnRlckJvdHRvbSA9IE1hdGgubWF4KDAsIC1jb250VCArIHduZEggLSBjb250SCk7XG4gICAgICAgIGNvbnN0IGZyb21WaWV3cG9ydENlbnRlciA9IDEgLSAyICogKHduZEggLSBjb250VCkgLyAod25kSCArIGNvbnRIKTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgb24gaG93IHBlcmNlbnQgb2Ygc2VjdGlvbiBpcyB2aXNpYmxlXG4gICAgICAgIGxldCB2aXNpYmxlUGVyY2VudCA9IDE7XG4gICAgICAgIGlmIChjb250SCA8IHduZEgpIHtcbiAgICAgICAgICAgIHZpc2libGVQZXJjZW50ID0gMSAtIChhZnRlclRvcCB8fCBiZWZvcmVCb3R0b20pIC8gY29udEg7XG4gICAgICAgIH0gZWxzZSBpZiAoYmVmb3JlVG9wRW5kIDw9IHduZEgpIHtcbiAgICAgICAgICAgIHZpc2libGVQZXJjZW50ID0gYmVmb3JlVG9wRW5kIC8gd25kSDtcbiAgICAgICAgfSBlbHNlIGlmIChiZWZvcmVCb3R0b21FbmQgPD0gd25kSCkge1xuICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQgPSBiZWZvcmVCb3R0b21FbmQgLyB3bmRIO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BhY2l0eVxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnR5cGUgPT09ICdvcGFjaXR5JyB8fCBzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ3NjYWxlLW9wYWNpdHknIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2Nyb2xsLW9wYWNpdHknKSB7XG4gICAgICAgICAgICBzdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsMCwwKSc7XG4gICAgICAgICAgICBzdHlsZXMub3BhY2l0eSA9IHZpc2libGVQZXJjZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2NhbGVcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy50eXBlID09PSAnc2NhbGUnIHx8IHNlbGYub3B0aW9ucy50eXBlID09PSAnc2NhbGUtb3BhY2l0eScpIHtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnNwZWVkIDwgMCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC09IHNlbGYub3B0aW9ucy5zcGVlZCAqIHZpc2libGVQZXJjZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2FsZSArPSBzZWxmLm9wdGlvbnMuc3BlZWQgKiAoMSAtIHZpc2libGVQZXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZTNkKDAsMCwwKWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY3JvbGxcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy50eXBlID09PSAnc2Nyb2xsJyB8fCBzZWxmLm9wdGlvbnMudHlwZSA9PT0gJ3Njcm9sbC1vcGFjaXR5Jykge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uWSA9IHNlbGYucGFyYWxsYXhTY3JvbGxEaXN0YW5jZSAqIGZyb21WaWV3cG9ydENlbnRlcjtcblxuICAgICAgICAgICAgLy8gZml4IGlmIHBhcmFsbGF4IGJsb2NrIGluIGFic29sdXRlIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAoc2VsZi5pbWFnZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uWSAtPSBjb250VDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCR7cG9zaXRpb25ZfXB4LDApYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGl0ZW0sIHN0eWxlcyk7XG5cbiAgICAgICAgLy8gY2FsbCBvblNjcm9sbCBldmVudFxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uU2Nyb2xsKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMub25TY3JvbGwuY2FsbChzZWxmLCB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbjogcmVjdCxcblxuICAgICAgICAgICAgICAgIGJlZm9yZVRvcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVUb3BFbmQsXG4gICAgICAgICAgICAgICAgYWZ0ZXJUb3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlQm90dG9tLFxuICAgICAgICAgICAgICAgIGJlZm9yZUJvdHRvbUVuZCxcbiAgICAgICAgICAgICAgICBhZnRlckJvdHRvbSxcblxuICAgICAgICAgICAgICAgIHZpc2libGVQZXJjZW50LFxuICAgICAgICAgICAgICAgIGZyb21WaWV3cG9ydENlbnRlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY292ZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLmNsaXBDb250YWluZXIoKTtcbiAgICB9XG59XG5cblxuLy8gZ2xvYmFsIGRlZmluaXRpb25cbmNvbnN0IHBsdWdpbiA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgIC8vIGNoZWNrIGZvciBkb20gZWxlbWVudFxuICAgIC8vIHRoYW5rczogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODQyODYvamF2YXNjcmlwdC1pc2RvbS1ob3ctZG8teW91LWNoZWNrLWlmLWEtamF2YXNjcmlwdC1vYmplY3QtaXMtYS1kb20tb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBpdGVtcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogaXRlbXMgJiYgdHlwZW9mIGl0ZW1zID09PSAnb2JqZWN0JyAmJiBpdGVtcyAhPT0gbnVsbCAmJiBpdGVtcy5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgaXRlbXMubm9kZU5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIGNvbnN0IGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgayA9IDA7XG4gICAgbGV0IHJldDtcblxuICAgIGZvciAoazsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1zW2tdLmphcmFsbGF4KSB7XG4gICAgICAgICAgICAgICAgaXRlbXNba10uamFyYWxsYXggPSBuZXcgSmFyYWxsYXgoaXRlbXNba10sIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1zW2tdLmphcmFsbGF4KSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICAgICAgcmV0ID0gaXRlbXNba10uamFyYWxsYXhbb3B0aW9uc10uYXBwbHkoaXRlbXNba10uamFyYWxsYXgsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbn07XG5wbHVnaW4uY29uc3RydWN0b3IgPSBKYXJhbGxheDtcblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvamFyYWxsYXgvc3JjL2phcmFsbGF4LmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCdnbG9iYWwnKVxuXG4vKipcbiAqIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKWBcbiAqL1xuXG52YXIgcmVxdWVzdCA9IGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZ2xvYmFsLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCBnbG9iYWwubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZhbGxiYWNrXG5cbnZhciBwcmV2ID0gK25ldyBEYXRlXG5mdW5jdGlvbiBmYWxsYmFjayAoZm4pIHtcbiAgdmFyIGN1cnIgPSArbmV3IERhdGVcbiAgdmFyIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKVxuICB2YXIgcmVxID0gc2V0VGltZW91dChmbiwgbXMpXG4gIHJldHVybiBwcmV2ID0gY3VyciwgcmVxXG59XG5cbi8qKlxuICogYGNhbmNlbEFuaW1hdGlvbkZyYW1lKClgXG4gKi9cblxudmFyIGNhbmNlbCA9IGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCBnbG9iYWwud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgZ2xvYmFsLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IGNsZWFyVGltZW91dFxuXG5pZiAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgcmVxdWVzdCA9IHJlcXVlc3QuYmluZChnbG9iYWwpXG4gIGNhbmNlbCA9IGNhbmNlbC5iaW5kKGdsb2JhbClcbn1cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWVzdFxuZXhwb3J0cy5jYW5jZWwgPSBjYW5jZWxcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JhZmwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZG9tUmVhZHkgZnJvbSAnbGl0ZS1yZWFkeSc7XG5pbXBvcnQgeyB3aW5kb3csIGpRdWVyeSB9IGZyb20gJ2dsb2JhbCc7XG5pbXBvcnQgamFyYWxsYXggZnJvbSAnLi9qYXJhbGxheC5lc20nO1xuXG4vLyBubyBjb25mbGljdFxuY29uc3Qgb2xkUGx1Z2luID0gd2luZG93LmphcmFsbGF4O1xud2luZG93LmphcmFsbGF4ID0gamFyYWxsYXg7XG53aW5kb3cuamFyYWxsYXgubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuamFyYWxsYXggPSBvbGRQbHVnaW47XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBqUXVlcnkgc3VwcG9ydFxuaWYgKHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgalF1ZXJ5UGx1Z2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzIHx8IFtdO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5jYWxsKGFyZ3MsIHRoaXMpO1xuICAgICAgICBjb25zdCByZXMgPSBqYXJhbGxheC5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gJ29iamVjdCcgPyByZXMgOiB0aGlzO1xuICAgIH07XG4gICAgalF1ZXJ5UGx1Z2luLmNvbnN0cnVjdG9yID0gamFyYWxsYXguY29uc3RydWN0b3I7XG5cbiAgICAvLyBubyBjb25mbGljdFxuICAgIGNvbnN0IG9sZEpxUGx1Z2luID0galF1ZXJ5LmZuLmphcmFsbGF4O1xuICAgIGpRdWVyeS5mbi5qYXJhbGxheCA9IGpRdWVyeVBsdWdpbjtcbiAgICBqUXVlcnkuZm4uamFyYWxsYXgubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5LmZuLmphcmFsbGF4ID0gb2xkSnFQbHVnaW47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbi8vIGRhdGEtamFyYWxsYXggaW5pdGlhbGl6YXRpb25cbmRvbVJlYWR5KCgpID0+IHtcbiAgICBqYXJhbGxheChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qYXJhbGxheF0nKSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9