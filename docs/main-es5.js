function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/app-core.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/app-core.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppCoreAppCoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"app-core\">\n  <div class=\"app-core__content\">\n    <app-cv></app-cv>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/cv/cv.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/cv/cv.component.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppCoreCvCvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"cv\">\n  <div class=\"cv__content\">\n    <app-copyright></app-copyright>\n    <app-header></app-header>\n    <app-body></app-body>\n    <app-footer></app-footer>\n    <app-copyright></app-copyright>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/about-me/about-me.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/about-me/about-me.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyAboutMeAboutMeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"about-me section segment\">\n  <div class=\"about-me__content\">\n    <div class=\"about-me__content__text\">\n      <app-text\n        [text]=\"aboutMe.text\"\n        [nbrItems]=\"aboutMe.text.length\"\n      ></app-text>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"body\">\n  <app-intro></app-intro>\n  <app-formation></app-formation>\n  <app-competence></app-competence>\n  <app-knowledge></app-knowledge>\n  <app-experience></app-experience>\n  <app-language></app-language>\n  <app-passion></app-passion>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/competence/competence.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/competence/competence.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyCompetenceCompetenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"competence section darkmode\">\n  <div class=\"competence__content\">\n    <app-graph [elements]=\"competences\"></app-graph>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/experience/experience.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/experience/experience.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"experience section\">\n  <div class=\"experience__content\">\n    <div class=\"experience__content__title\">\n      <app-title [title]=\"experiences.title\" [side]=\"'left'\"></app-title>\n    </div>\n    <div class=\"experience__content__historical\">\n      <app-historical [elements]=\"experiences.experience\"></app-historical>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/formation/formation.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/formation/formation.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyFormationFormationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"formation section\">\n  <div class=\"formation__content\">\n    <div class=\"formation__content__title\">\n      <app-title [title]=\"formations.title\" [side]=\"'left'\"></app-title>\n    </div>\n    <div class=\"formation__content__historical\">\n      <app-historical [elements]=\"formations.experience\"></app-historical>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/intro/intro.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/intro/intro.component.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"intro section darkmode\">\n  <div class=\"intro__content\">\n    <div class=\"intro__content__text\">\n      <app-text [text]=\"intro.text\" [nbrItems]=\"intro.text.length\"></app-text>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/knowledge/knowledge.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/knowledge/knowledge.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyKnowledgeKnowledgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"knowledge section\">\n  <div class=\"knowledge__content\">\n    <div class=\"knowledge__content__title\">\n      <app-title [title]=\"knowledges.title\"></app-title>\n    </div>\n    <div class=\"knowledge__content__items\">\n      <div\n        *ngFor=\"let box of knowledges.passion; let i = index\"\n        class=\"knowledge__content__items__one-element\"\n      >\n        <app-box [isVisible]=\"isVisible\" [box]=\"box\" [index]=\"i\"></app-box>\n      </div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/language/language.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/language/language.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyLanguageLanguageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"language section darkmode\">\n  <div class=\"language__content\">\n    <app-graph [elements]=\"languages\"></app-graph>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/body/passion/passion.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/passion/passion.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBodyPassionPassionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"passion section\">\n  <div class=\"passion__content\">\n    <div class=\"passion__content__title\">\n      <app-title [title]=\"passions.title\"></app-title>\n    </div>\n    <div class=\"passion__content__items\">\n      <div\n        *ngFor=\"let box of passions.passion; let i = index\"\n        class=\"passion__content__items__one-element\"\n      >\n        <app-box [isVisible]=\"isVisible\" [box]=\"box\" [index]=\"i\"></app-box>\n      </div>\n    </div>\n    <div class=\"passion__content__aboutme\">\n      <app-about-me></app-about-me>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box-item/box-item.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box-item/box-item.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentBoxBoxItemBoxItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"box-item slideDownEffect\" [class.active]=\"condition\">\n  <div class=\"box-item__content\">\n    <div class=\"box-item__content__title\">{{ item.title }}</div>\n    <div class=\"box-item__content__picto\">\n      <img src=\"{{ item.picto.src }}\" alt=\"{{ item.picto.alt }}\" />\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentBoxBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"box\">\n  <div class=\"box__content\">\n    <div class=\"box__content__title\">{{ box.title }}</div>\n    <div class=\"box__content__item\">\n      <div\n        *ngFor=\"let item of box.example; let i = index\"\n        class=\"box__content__item__one-element\"\n      >\n        <app-box-item\n          [isVisible]=\"condition\"\n          [item]=\"item\"\n          [index]=\"i\"\n        ></app-box-item>\n      </div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph-item/graph-item.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph-item/graph-item.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentGraphGraphItemGraphItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"graph-item\">\n  <div class=\"graph-item__content\">\n    <div class=\"graph-item__content__name\">\n      {{ element.name }}\n    </div>\n    <div class=\"graph-item__content__max\">\n      <div #target class=\"graph-item__content__max__bar\">\n        <div\n          class=\"graph-item__content__max__bar__percent blurEffect\"\n          [class.active]=\"condition\"\n        >\n          {{ i }}%\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentGraphGraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"graph\">\n  <div class=\"graph__content\">\n    <div class=\"graph__content__title\">\n      <app-title [title]=\"elements.title\" [side]=\"side\"></app-title>\n    </div>\n    <div\n      class=\"graph__content__graph-item\"\n      *ngFor=\"let element of elements.competence; let i = index\"\n    >\n      <app-graph-item\n        [isVisible]=\"isVisible\"\n        [element]=\"element\"\n        [index]=\"i\"\n      ></app-graph-item>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical-item/historical-item.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical-item/historical-item.component.html ***!
    \***************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHistoricalHistoricalItemHistoricalItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"historical-item\">\n  <div class=\"historical-item__content\">\n    <div\n      class=\"historical-item__content__date blurEffect\"\n      [class.active]=\"condition\"\n    >\n      <div\n        *ngIf=\"element.date.date\"\n        class=\"historical-item__content__date__more\"\n      >\n        {{ element.date.date }}\n      </div>\n      <div class=\"historical-item__content__date__year\">\n        {{ element.date.year }}\n      </div>\n    </div>\n    <div\n      class=\"historical-item__content__informations dotEffect\"\n      [class.active]=\"condition\"\n    >\n      <div\n        class=\"historical-item__content__informations__title blurEffect\"\n        [class.active]=\"condition\"\n      >\n        {{ element.title }}\n      </div>\n      <div\n        *ngIf=\"element.subtitle\"\n        class=\"historical-item__content__informations__subtitle blurEffect\"\n        [class.active]=\"condition\"\n      >\n        {{ element.subtitle }}\n      </div>\n      <div\n        *ngIf=\"element.description\"\n        class=\"historical-item__content__informations__description blurEffect\"\n        [class.active]=\"condition\"\n      >\n        {{ element.description }}\n      </div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHistoricalHistoricalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"historical\">\n  <div class=\"historical__content\">\n    <div\n      class=\"historical__content__historical-item\"\n      *ngFor=\"let element of newElements; let i = index\"\n    >\n      <app-historical-item\n        [isVisible]=\"isVisible\"\n        [element]=\"element\"\n        [index]=\"i\"\n      ></app-historical-item>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/mentions-legales/mentions-legales.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/mentions-legales/mentions-legales.component.html ***!
    \******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentMentionsLegalesMentionsLegalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"mentions-legales section darkmode\">\n  <div class=\"mentions-legales__content\">\n    {{ frText }} <br />\n    {{ frDate }} {{ date }} <br />\n    <br />\n    {{ enText }} <br />\n    {{ enDate }} {{ date }} <br />\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/not-found/not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/not-found/not-found.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"not-found section darkmode\">\n  <div class=\"not-found__content\" [ngStyle]=\"{ 'height.px': windowHeight }\">\n    <div class=\"not-found__content__gif\">\n      <iframe\n        src=\"https://giphy.com/embed/6uGhT1O4sxpi8\"\n        frameBorder=\"0\"\n        class=\"giphy-embed\"\n        allowFullScreen\n      ></iframe>\n    </div>\n    <div class=\"not-found__content__text\">\n      Vous êtes-vous perdu ?\n    </div>\n    <div class=\"not-found__content__button\">\n      <a routerLink=\"/cv\">\n        <button class=\"button\">\n          Retourner au CV\n        </button>\n      </a>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text-item/text-item.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text-item/text-item.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentTextTextItemTextItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"text-item\">\n  <div class=\"text-item__content blurEffect\" [class.active]=\"condition\">\n    <div class=\"text-item__content__description\">\n      {{ text.description }}\n      <div *ngIf=\"text.img\" class=\"text-item__content__description__img\">\n        <img src=\"{{ text.img.src }}\" alt=\"{{ text.img.alt }}\" />\n      </div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text.component.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentTextTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"text\">\n  <div class=\"text__content\">\n    <div class=\"text__content__text\" *ngFor=\"let text of text; let i = index\">\n      <app-text-item\n        [isVisible]=\"isVisible\"\n        [text]=\"text\"\n        [index]=\"i\"\n      ></app-text-item>\n      <div *ngIf=\"i < nbrItems - 1\" class=\"text__content__space\"></div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/component/title/title.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/title/title.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentTitleTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"title\" [ngClass]=\"side\" [class.active]=\"condition\">\n  <div class=\"title__content\" [ngClass]=\"side\">\n    <div\n      class=\"title__content__title\"\n      [ngClass]=\"side\"\n      [class.active]=\"condition\"\n    >\n      {{ title }}\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"footer\">\n  <app-github></app-github>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/github/github.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/github/github.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterGithubGithubComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<a href=\"{{ github.link }}\" target=\"{{ github.link }}\">\n  <section class=\"github section darkmode clickable\">\n    <div class=\"github__content\">\n      <div class=\"github__content__text\">\n        <app-text\n          [text]=\"github.text\"\n          [nbrItems]=\"github.text.length\"\n        ></app-text>\n      </div>\n    </div>\n  </section>\n</a>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/contact/contact.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/contact/contact.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"contact\">\n  <div class=\"contact__content\">\n    <div class=\"contact__content__info\">\n      <div\n        class=\"contact__content__info__text contact__content__info__text__bold slideLeftEffect\"\n        [class.active]=\"conditionConst\"\n      >\n        Adresse :\n      </div>\n      <div\n        class=\"contact__content__info__text slideLeftEffect\"\n        [class.active]=\"conditionVariable\"\n      >\n        {{ contact.address }},<br />\n        {{ contact.cp }} {{ contact.city }}\n      </div>\n    </div>\n\n    <div class=\"contact__content__info\">\n      <div\n        class=\"contact__content__info__text contact__content__info__text__bold slideLeftEffect\"\n        [class.active]=\"conditionConst\"\n      >\n        Tel :\n      </div>\n      <a\n        href=\"tel:{{ contact.tel }}\"\n        target=\"_blank\"\n        class=\"contact__content__info__text slideLeftEffect\"\n        [class.active]=\"conditionVariable\"\n      >\n        {{ contact.tel }}\n      </a>\n    </div>\n\n    <div class=\"contact__content__info\">\n      <div\n        class=\"contact__content__info__text contact__content__info__text__bold slideLeftEffect\"\n        [class.active]=\"conditionConst\"\n      >\n        E-mail :\n      </div>\n\n      <a\n        href=\"mailto:{{ contact.mail }}\"\n        target=\"_blank\"\n        class=\"contact__content__info__text slideLeftEffect\"\n        [class.active]=\"conditionVariable\"\n      >\n        {{ contact.mail }}\n      </a>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/copyright/copyright.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/copyright/copyright.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderCopyrightCopyrightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"copyright blurEffect\" [class.active]=\"condition\">\n  <div class=\"copyright__text\">\n    This curriculum vitæ was made on Angular by Antoine MORTELIER\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"header\">\n  <div class=\"header__first-section\">\n    <div class=\"header__first-band header__band\">\n      <div class=\"header__first-band__contact\">\n        <app-contact></app-contact>\n      </div>\n      <div class=\"header__first-band__license\">\n        <app-license></app-license>\n      </div>\n    </div>\n    <div class=\"header__second-band header__band\">\n      <app-user></app-user>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license-item/license-item.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license-item/license-item.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderLicenseLicenseItemLicenseItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"license-item\" [class.active]=\"condition\">\n  <div class=\"license-item__picture\">\n    <img src=\"{{ license.picto.src }}\" alt=\"{{ license.picto.alt }}\" />\n  </div>\n  <div class=\"license-item__description\">\n    <div class=\"license-item__description__text-inside\">{{ license.name }}</div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderLicenseLicenseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"license\">\n  <ul class=\"license__list\">\n    <li\n      class=\"license__list__item\"\n      *ngFor=\"let lic of contact.license; let i = index\"\n    >\n      <app-license-item\n        [isVisible]=\"isVisible\"\n        [license]=\"lic\"\n        [index]=\"i\"\n      ></app-license-item>\n    </li>\n  </ul>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/user/user.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/user/user.component.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section #target class=\"user\">\n  <div class=\"user__content\">\n    <div\n      class=\"user__content__profile-picture slideLeftEffect\"\n      [class.active]=\"condition1\"\n    >\n      <img src=\"{{ user.picture.src }}\" alt=\"{{ user.picture.alt }}\" />\n      <div\n        class=\"user__content__profile-picture__easter-egg blurEffect faster\"\n        [class.active]=\"condition3\"\n      >\n        <img src=\"{{ user.easterEgg.src }}\" alt=\"{{ user.easterEgg.src }}\" />\n      </div>\n    </div>\n    <div\n      class=\"user__content__info slideLeftEffect\"\n      [class.active]=\"condition2\"\n    >\n      <div class=\"user__content__info__name\">\n        {{ user.firstName }} {{ user.lastName }}\n      </div>\n      <div class=\"user__content__info__age\">{{ user.age }} ans</div>\n    </div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-core/app-core.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/app-core/app-core.component.scss ***!
    \**************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppCoreAppCoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb3JlL2FwcC1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./src/app/app-core/app-core.component.ts":
  /*!************************************************!*\
    !*** ./src/app/app-core/app-core.component.ts ***!
    \************************************************/
  /*! exports provided: AppCoreComponent */
  /***/
  function srcAppAppCoreAppCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppCoreComponent", function () {
      return AppCoreComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _assets_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../assets/models */"./src/app/assets/models/index.ts");
    var AppCoreComponent = /*#__PURE__*/function () {
      function AppCoreComponent(httpClient) {
        _classCallCheck(this, AppCoreComponent);
        this.httpClient = httpClient;
      }
      _createClass(AppCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initVisitor();
          this.saveToServer();
        }
      }, {
        key: "initVisitor",
        value: function initVisitor() {
          var newDate = "";
          this.date = new Date();
          newDate += this.date.getDate() + "/";
          newDate += this.date.getMonth() + 1 + "/";
          newDate += this.date.getFullYear() + " - ";
          newDate += this.date.getHours() + ":";
          newDate += this.date.getMinutes();
          this.visitor = new _assets_models__WEBPACK_IMPORTED_MODULE_3__["Visitor"](newDate);
        }
      }, {
        key: "saveToServer",
        value: function saveToServer() {
          this.httpClient.post("https://cv-online-mortelier.firebaseio.com/Visitor.json", this.visitor).subscribe(function () {}, function (error) {});
        }
      }]);
      return AppCoreComponent;
    }();
    AppCoreComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    AppCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-app-core",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app-core.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/app-core.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app-core.component.scss */"./src/app/app-core/app-core.component.scss"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppCoreComponent);

    /***/
  },

  /***/"./src/app/app-core/cv/cv.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/app-core/cv/cv.component.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppCoreCvCvComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb3JlL2N2L2N2LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./src/app/app-core/cv/cv.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/app-core/cv/cv.component.ts ***!
    \*********************************************/
  /*! exports provided: CvComponent */
  /***/
  function srcAppAppCoreCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CvComponent = /*#__PURE__*/function () {
      function CvComponent() {
        _classCallCheck(this, CvComponent);
      }
      _createClass(CvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return CvComponent;
    }();
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./cv.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app-core/cv/cv.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./cv.component.scss */"./src/app/app-core/cv/cv.component.scss"))["default"]]
    })], CvComponent);

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.app {\n  max-width: 1600px;\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 0 20px;\n}\n\n@media screen and (min-width: 400px) {\n  .app {\n    font-size: 18px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .app {\n    font-size: 22px;\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .app {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDNUJGOztBRCtCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDNUJGOztBRCtCQTtFQUNFLHlCQS9CUztFQWdDVCxZQWxDTTtBQ01SOztBRCtCQTtFQUNFLGtCQUFBO0FDNUJGOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDM0JKOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDM0JKOztBRCtCQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDNUJGOztBRDZCRTtFQUNFLHlCQS9EYTtBQ29DakI7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBOUVNO0VBK0VOLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQWhGTTtBQ29EUjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEZ0NJO0VBQ0Usc0NBQUE7QUM5Qk47O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLDBCQUFBO0FDL0JKOztBRGlDRTtFQUNFLFVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsNEJBQUE7QUMvQko7O0FEbUNBO0VBQ0Usa0JBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMkJBdEpRO0VBdUpSLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDL0JKOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQW5LUTtFQW9LUixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQy9CSjs7QURrQ0k7RUFDRSxZQUFBO0FDaENOOztBRGtDSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQ047O0FEc0NBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUQwQkE7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBQ2hLQTtFQUNFLGlCRnNCTTtFRXJCTixlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3SUFBQTtFQUVBLGVBQUE7QURpS0Y7O0FDaEtFO0VBUEY7SUFRSSxlQUFBO0VEbUtGO0FBQ0Y7O0FDbEtFO0VBVkY7SUFXSSxlQUFBO0VEcUtGO0FBQ0Y7O0FDcEtFO0VBYkY7SUFjSSxjQUFBO0VEdUtGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmFwcCB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5hcHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmFwcCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLmFwcCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlc2hlZXRzL3N0eWxlc1wiO1xuXG4uYXBwIHtcbiAgbWF4LXdpZHRoOiAkbGFyZ2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbixcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzbWFsbCkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbGFyZ2UpIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./header/header.component */"./src/app/header/header.component.ts");
    /* harmony import */
    var _header_license_license_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./header/license/license.component */"./src/app/header/license/license.component.ts");
    /* harmony import */
    var _header_license_license_item_license_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./header/license/license-item/license-item.component */"./src/app/header/license/license-item/license-item.component.ts");
    /* harmony import */
    var _header_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./header/user/user.component */"./src/app/header/user/user.component.ts");
    /* harmony import */
    var _header_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./header/copyright/copyright.component */"./src/app/header/copyright/copyright.component.ts");
    /* harmony import */
    var _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./header/contact/contact.component */"./src/app/header/contact/contact.component.ts");
    /* harmony import */
    var _body_intro_intro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./body/intro/intro.component */"./src/app/body/intro/intro.component.ts");
    /* harmony import */
    var _body_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./body/body.component */"./src/app/body/body.component.ts");
    /* harmony import */
    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./footer/footer.component */"./src/app/footer/footer.component.ts");
    /* harmony import */
    var _component_graph_graph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./component/graph/graph.component */"./src/app/component/graph/graph.component.ts");
    /* harmony import */
    var _body_competence_competence_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./body/competence/competence.component */"./src/app/body/competence/competence.component.ts");
    /* harmony import */
    var _component_graph_graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./component/graph/graph-item/graph-item.component */"./src/app/component/graph/graph-item/graph-item.component.ts");
    /* harmony import */
    var _body_language_language_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./body/language/language.component */"./src/app/body/language/language.component.ts");
    /* harmony import */
    var _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./component/historical/historical.component */"./src/app/component/historical/historical.component.ts");
    /* harmony import */
    var _component_historical_historical_item_historical_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./component/historical/historical-item/historical-item.component */"./src/app/component/historical/historical-item/historical-item.component.ts");
    /* harmony import */
    var _body_formation_formation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./body/formation/formation.component */"./src/app/body/formation/formation.component.ts");
    /* harmony import */
    var _component_title_title_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./component/title/title.component */"./src/app/component/title/title.component.ts");
    /* harmony import */
    var _body_experience_experience_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./body/experience/experience.component */"./src/app/body/experience/experience.component.ts");
    /* harmony import */
    var _body_passion_passion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./body/passion/passion.component */"./src/app/body/passion/passion.component.ts");
    /* harmony import */
    var _component_box_box_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./component/box/box.component */"./src/app/component/box/box.component.ts");
    /* harmony import */
    var _component_box_box_item_box_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./component/box/box-item/box-item.component */"./src/app/component/box/box-item/box-item.component.ts");
    /* harmony import */
    var _app_core_cv_cv_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./app-core/cv/cv.component */"./src/app/app-core/cv/cv.component.ts");
    /* harmony import */
    var _app_core_app_core_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ./app-core/app-core.component */"./src/app/app-core/app-core.component.ts");
    /* harmony import */
    var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ./component/not-found/not-found.component */"./src/app/component/not-found/not-found.component.ts");
    /* harmony import */
    var _footer_github_github_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! ./footer/github/github.component */"./src/app/footer/github/github.component.ts");
    /* harmony import */
    var _component_text_text_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! ./component/text/text.component */"./src/app/component/text/text.component.ts");
    /* harmony import */
    var _component_text_text_item_text_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__( /*! ./component/text/text-item/text-item.component */"./src/app/component/text/text-item/text-item.component.ts");
    /* harmony import */
    var _component_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__( /*! ./component/mentions-legales/mentions-legales.component */"./src/app/component/mentions-legales/mentions-legales.component.ts");
    /* harmony import */
    var _body_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__( /*! ./body/knowledge/knowledge.component */"./src/app/body/knowledge/knowledge.component.ts");
    /* harmony import */
    var _body_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__( /*! ./body/about-me/about-me.component */"./src/app/body/about-me/about-me.component.ts");
    var appRoutes = [{
      path: "",
      component: _app_core_app_core_component__WEBPACK_IMPORTED_MODULE_30__["AppCoreComponent"]
    }, {
      path: "cv",
      redirectTo: ""
    }, {
      path: "mentions-legales",
      component: _component_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_35__["MentionsLegalesComponent"]
    }, {
      path: "404",
      component: _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"]
    }, {
      path: "**",
      redirectTo: "/404"
    }];
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _header_license_license_component__WEBPACK_IMPORTED_MODULE_9__["LicenseComponent"], _header_license_license_item_license_item_component__WEBPACK_IMPORTED_MODULE_10__["LicenseItemComponent"], _header_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], _header_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_12__["CopyrightComponent"], _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _body_intro_intro_component__WEBPACK_IMPORTED_MODULE_14__["IntroComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _component_graph_graph_component__WEBPACK_IMPORTED_MODULE_17__["GraphComponent"], _body_competence_competence_component__WEBPACK_IMPORTED_MODULE_18__["CompetenceComponent"], _component_graph_graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_19__["GraphItemComponent"], _body_language_language_component__WEBPACK_IMPORTED_MODULE_20__["LanguageComponent"], _component_historical_historical_component__WEBPACK_IMPORTED_MODULE_21__["HistoricalComponent"], _component_historical_historical_item_historical_item_component__WEBPACK_IMPORTED_MODULE_22__["HistoricalItemComponent"], _body_formation_formation_component__WEBPACK_IMPORTED_MODULE_23__["FormationComponent"], _component_title_title_component__WEBPACK_IMPORTED_MODULE_24__["TitleComponent"], _body_experience_experience_component__WEBPACK_IMPORTED_MODULE_25__["ExperienceComponent"], _body_passion_passion_component__WEBPACK_IMPORTED_MODULE_26__["PassionComponent"], _component_box_box_component__WEBPACK_IMPORTED_MODULE_27__["BoxComponent"], _component_box_box_item_box_item_component__WEBPACK_IMPORTED_MODULE_28__["BoxItemComponent"], _app_core_cv_cv_component__WEBPACK_IMPORTED_MODULE_29__["CvComponent"], _app_core_app_core_component__WEBPACK_IMPORTED_MODULE_30__["AppCoreComponent"], _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"], _footer_github_github_component__WEBPACK_IMPORTED_MODULE_32__["GithubComponent"], _component_text_text_component__WEBPACK_IMPORTED_MODULE_33__["TextComponent"], _component_text_text_item_text_item_component__WEBPACK_IMPORTED_MODULE_34__["TextItemComponent"], _component_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_35__["MentionsLegalesComponent"], _body_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_36__["KnowledgeComponent"], _body_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_37__["AboutMeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [_assets_services__WEBPACK_IMPORTED_MODULE_5__["CompetenceService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["ContactService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["ExperienceService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["FormationService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["IntroService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["LanguageService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["PassionService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["GithubService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["KnowledgeService"], _assets_services__WEBPACK_IMPORTED_MODULE_5__["AboutMeService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/assets/models/Competence.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/assets/models/Competence.model.ts ***!
    \***************************************************/
  /*! exports provided: Competence, OneCompetence */
  /***/
  function srcAppAssetsModelsCompetenceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Competence", function () {
      return Competence;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OneCompetence", function () {
      return OneCompetence;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Competence = /*#__PURE__*/_createClass(function Competence(title, competence) {
      _classCallCheck(this, Competence);
      this.title = title;
      this.competence = competence;
    });
    var OneCompetence = /*#__PURE__*/_createClass(function OneCompetence(name, level, color) {
      _classCallCheck(this, OneCompetence);
      this.name = name;
      this.level = level;
      this.color = color;
    });
    /***/
  },
  /***/"./src/app/assets/models/Contact.model.ts":
  /*!************************************************!*\
    !*** ./src/app/assets/models/Contact.model.ts ***!
    \************************************************/
  /*! exports provided: Contact, License */
  /***/
  function srcAppAssetsModelsContactModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "License", function () {
      return License;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Contact = /*#__PURE__*/_createClass(function Contact(address, cp, city, tel, mail, license) {
      _classCallCheck(this, Contact);
      this.address = address;
      this.cp = cp;
      this.city = city;
      this.tel = tel;
      this.mail = mail;
      this.license = license;
    });
    var License = /*#__PURE__*/_createClass(function License(name, picto) {
      _classCallCheck(this, License);
      this.name = name;
      this.picto = picto;
    });
    /***/
  },
  /***/"./src/app/assets/models/Experience.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/assets/models/Experience.model.ts ***!
    \***************************************************/
  /*! exports provided: Experience, OneExperience, Date */
  /***/
  function srcAppAssetsModelsExperienceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Experience", function () {
      return Experience;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OneExperience", function () {
      return OneExperience;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Date", function () {
      return Date;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Experience = /*#__PURE__*/_createClass(function Experience(title, experience) {
      _classCallCheck(this, Experience);
      this.title = title;
      this.experience = experience;
    });
    var OneExperience = /*#__PURE__*/_createClass(function OneExperience(date, title, description, subtitle) {
      _classCallCheck(this, OneExperience);
      this.date = date;
      this.title = title;
      this.description = description;
      this.subtitle = subtitle;
    });
    var Date = /*#__PURE__*/_createClass(function Date(year, date) {
      _classCallCheck(this, Date);
      this.year = year;
      this.date = date;
    });
    /***/
  },
  /***/"./src/app/assets/models/Passion.model.ts":
  /*!************************************************!*\
    !*** ./src/app/assets/models/Passion.model.ts ***!
    \************************************************/
  /*! exports provided: Passion, OnePassion, OneExample */
  /***/
  function srcAppAssetsModelsPassionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Passion", function () {
      return Passion;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OnePassion", function () {
      return OnePassion;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OneExample", function () {
      return OneExample;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Passion = /*#__PURE__*/_createClass(function Passion(title, passion) {
      _classCallCheck(this, Passion);
      this.title = title;
      this.passion = passion;
    });
    var OnePassion = /*#__PURE__*/_createClass(function OnePassion(title, example) {
      _classCallCheck(this, OnePassion);
      this.title = title;
      this.example = example;
    });
    var OneExample = /*#__PURE__*/_createClass(function OneExample(title, picto) {
      _classCallCheck(this, OneExample);
      this.title = title;
      this.picto = picto;
    });
    /***/
  },
  /***/"./src/app/assets/models/Picture.model.ts":
  /*!************************************************!*\
    !*** ./src/app/assets/models/Picture.model.ts ***!
    \************************************************/
  /*! exports provided: Picture */
  /***/
  function srcAppAssetsModelsPictureModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Picture", function () {
      return Picture;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Picture = /*#__PURE__*/_createClass(function Picture(src, alt) {
      _classCallCheck(this, Picture);
      this.src = src;
      this.alt = alt;
    });
    /***/
  },
  /***/"./src/app/assets/models/Text.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/assets/models/Text.model.ts ***!
    \*********************************************/
  /*! exports provided: Text, OneText */
  /***/
  function srcAppAssetsModelsTextModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return Text;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OneText", function () {
      return OneText;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Text = /*#__PURE__*/_createClass(function Text(title, text, link) {
      _classCallCheck(this, Text);
      this.title = title;
      this.text = text;
      this.link = link;
    });
    var OneText = /*#__PURE__*/_createClass(function OneText(description, img) {
      _classCallCheck(this, OneText);
      this.description = description;
      this.img = img;
    });
    /***/
  },
  /***/"./src/app/assets/models/User.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/assets/models/User.model.ts ***!
    \*********************************************/
  /*! exports provided: User */
  /***/
  function srcAppAssetsModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var User = /*#__PURE__*/_createClass(function User(firstName, lastName, age, picture, easterEgg) {
      _classCallCheck(this, User);
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.picture = picture;
      this.easterEgg = easterEgg;
    });
    /***/
  },
  /***/"./src/app/assets/models/Visitor.model.ts":
  /*!************************************************!*\
    !*** ./src/app/assets/models/Visitor.model.ts ***!
    \************************************************/
  /*! exports provided: Visitor */
  /***/
  function srcAppAssetsModelsVisitorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Visitor", function () {
      return Visitor;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Visitor = /*#__PURE__*/_createClass(function Visitor(date) {
      _classCallCheck(this, Visitor);
      this.date = date;
    });
    /***/
  },
  /***/"./src/app/assets/models/index.ts":
  /*!****************************************!*\
    !*** ./src/app/assets/models/index.ts ***!
    \****************************************/
  /*! exports provided: Competence, OneCompetence, Contact, License, Experience, OneExperience, Date, Passion, OnePassion, OneExample, Picture, User, Text, OneText, Visitor */
  /***/
  function srcAppAssetsModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _Competence_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Competence.model */"./src/app/assets/models/Competence.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Competence", function () {
      return _Competence_model__WEBPACK_IMPORTED_MODULE_1__["Competence"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "OneCompetence", function () {
      return _Competence_model__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"];
    });

    /* harmony import */
    var _Contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Contact.model */"./src/app/assets/models/Contact.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return _Contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "License", function () {
      return _Contact_model__WEBPACK_IMPORTED_MODULE_2__["License"];
    });

    /* harmony import */
    var _Experience_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Experience.model */"./src/app/assets/models/Experience.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Experience", function () {
      return _Experience_model__WEBPACK_IMPORTED_MODULE_3__["Experience"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "OneExperience", function () {
      return _Experience_model__WEBPACK_IMPORTED_MODULE_3__["OneExperience"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Date", function () {
      return _Experience_model__WEBPACK_IMPORTED_MODULE_3__["Date"];
    });

    /* harmony import */
    var _Passion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Passion.model */"./src/app/assets/models/Passion.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Passion", function () {
      return _Passion_model__WEBPACK_IMPORTED_MODULE_4__["Passion"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "OnePassion", function () {
      return _Passion_model__WEBPACK_IMPORTED_MODULE_4__["OnePassion"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "OneExample", function () {
      return _Passion_model__WEBPACK_IMPORTED_MODULE_4__["OneExample"];
    });

    /* harmony import */
    var _Picture_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./Picture.model */"./src/app/assets/models/Picture.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Picture", function () {
      return _Picture_model__WEBPACK_IMPORTED_MODULE_5__["Picture"];
    });

    /* harmony import */
    var _User_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./User.model */"./src/app/assets/models/User.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _User_model__WEBPACK_IMPORTED_MODULE_6__["User"];
    });

    /* harmony import */
    var _Text_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./Text.model */"./src/app/assets/models/Text.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return _Text_model__WEBPACK_IMPORTED_MODULE_7__["Text"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "OneText", function () {
      return _Text_model__WEBPACK_IMPORTED_MODULE_7__["OneText"];
    });

    /* harmony import */
    var _Visitor_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./Visitor.model */"./src/app/assets/models/Visitor.model.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "Visitor", function () {
      return _Visitor_model__WEBPACK_IMPORTED_MODULE_8__["Visitor"];
    });

    /***/
  },

  /***/"./src/app/assets/services/aboutme.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/assets/services/aboutme.service.ts ***!
    \****************************************************/
  /*! exports provided: AboutMeService */
  /***/
  function srcAppAssetsServicesAboutmeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutMeService", function () {
      return AboutMeService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var AboutMeService = /*#__PURE__*/_createClass(function AboutMeService() {
      _classCallCheck(this, AboutMeService);
      this.aboutMe = new _models__WEBPACK_IMPORTED_MODULE_1__["Text"]("à propos de moi", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Vous l'aurez compris, j'aime particulièrement tout ce qui a un lien avec un écran."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Jeux vidéo, programmation et quelques fois télévision."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]('Je suis très joueur, je joue la plupart du temps à des jeux stratégiques type "League of Legends".'), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Un jeu où la stratégie d'équipe est de rigueur, un jeu où le travail d'équipe est primordial."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Je suis un geek sportif, l'idée de rester assis toute la journée sur un fauteuil me dérange,"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("la natation, le vélo ou encore la musculation m'aident à changer d'air tout en gardant la ligne."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Je suis très curieux, j'aime voyager, découvrir, apprendre ! Voir une activité qui me plaît me donne vite envie de la maîtriser."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Je n'ai qu'une attente dans ma vie professionnelle : en découvrir toujours plus.")]);
    });
    /***/
  },
  /***/"./src/app/assets/services/competence.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/assets/services/competence.service.ts ***!
    \*******************************************************/
  /*! exports provided: CompetenceService */
  /***/
  function srcAppAssetsServicesCompetenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CompetenceService", function () {
      return CompetenceService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var CompetenceService = /*#__PURE__*/_createClass(function CompetenceService() {
      _classCallCheck(this, CompetenceService);
      this.competence = new _models__WEBPACK_IMPORTED_MODULE_1__["Competence"]("Technologies", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("Angular", 85), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("VueJS", 75), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("HTML", 95), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("CSS", 95), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("TypeScript", 80), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("JavaScript", 80), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("Java", 60), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("SQL", 30), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("PHP", 25)]);
    });
    /***/
  },
  /***/"./src/app/assets/services/contact.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/assets/services/contact.service.ts ***!
    \****************************************************/
  /*! exports provided: ContactService */
  /***/
  function srcAppAssetsServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var ContactService = /*#__PURE__*/_createClass(function ContactService() {
      _classCallCheck(this, ContactService);
      this.contact = new _models__WEBPACK_IMPORTED_MODULE_1__["Contact"]("92 rue du Capitaine Jasmin", "59133", "Phalempin", "07 61 76 80 26", "mortelier.antoine@hotmail.fr", [new _models__WEBPACK_IMPORTED_MODULE_1__["License"]("B", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/car.png", "car")), new _models__WEBPACK_IMPORTED_MODULE_1__["License"]("A", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/bike.png", "bike")), new _models__WEBPACK_IMPORTED_MODULE_1__["License"]("Côtier", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/boat.png", "boat"))]);
    });
    /***/
  },
  /***/"./src/app/assets/services/experience.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/assets/services/experience.service.ts ***!
    \*******************************************************/
  /*! exports provided: ExperienceService */
  /***/
  function srcAppAssetsServicesExperienceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
      return ExperienceService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var ExperienceService = /*#__PURE__*/_createClass(function ExperienceService() {
      _classCallCheck(this, ExperienceService);
      this.experience = new _models__WEBPACK_IMPORTED_MODULE_1__["Experience"]("Expériences", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("Octobre 2023", "Septembre 2020 -"), "Développeur Front-End", "Conception de sites Web sous Angular, VueJS et Magento 2", "Insitaction"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2019", "Avril - Août"), "Développeur Front-End", "Conception de sites Web sous Angular", "Yoozly (Stage)"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2020", "Mai"), "Livreur", "Livraison de courses à domicile", "CORA"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2020", "Juillet - Août"), "Nageur sauveteur qualifié - Chef de poste Adjoint", "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau", "FFSS (Fédération Française de Sauvetage et de Secourisme)"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2018", "Juillet - Août"), "Nageur sauveteur qualifié - Sapeur pompier volontaire", "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau", "SDIS 2B (Service Départemental d'Incendie et de Secours)"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2017", "Juillet - Août"), "Nageur sauveteur qualifié", "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau", "SNSM (Société Nationale de Sauvetage en Mer)"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2018 - 2020"), "Coursier à vélo", "Livraison de repas à domicile", "Deliveroo")]);
    });
    /***/
  },
  /***/"./src/app/assets/services/formation.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/assets/services/formation.service.ts ***!
    \******************************************************/
  /*! exports provided: FormationService */
  /***/
  function srcAppAssetsServicesFormationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormationService", function () {
      return FormationService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var FormationService = /*#__PURE__*/_createClass(function FormationService() {
      _classCallCheck(this, FormationService);
      this.formation = new _models__WEBPACK_IMPORTED_MODULE_1__["Experience"]("Formations & Compétences", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2020 - 2022"), "Université Catholique de Lille", "Master Informatique"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2016 - 2020"), "Université de Lille", "Licence Informatique"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2017"), "Brevet National de Sécurité et de Sauvetage Aquatique (BNSSA)", "Sauveteur qualifié aux interventions sur une personne en difficulté dans l'eau"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2019"), "Angular", "Framework JavaScript qui étend le HTML pour le rendre dynamique, et permet de développer ses propres balises et attributs HTML"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2017"), "Git", "Logiciel de gestion de versions décentralisé"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExperience"](new _models__WEBPACK_IMPORTED_MODULE_1__["Date"]("2016"), "Premiers Secours en Équipe 1 et 2 (PSE1 et PSE2)", "Secouriste qualifié pour les premiers secours en équipe")]);
    });
    /***/
  },
  /***/"./src/app/assets/services/github.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/assets/services/github.service.ts ***!
    \***************************************************/
  /*! exports provided: GithubService */
  /***/
  function srcAppAssetsServicesGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return GithubService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var GithubService = /*#__PURE__*/_createClass(function GithubService() {
      _classCallCheck(this, GithubService);
      this.github = new _models__WEBPACK_IMPORTED_MODULE_1__["Text"]("GitHub", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Vous pouvez retrouver la majorité de mes projets personnels et universitaires sur ce lien :"), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("github.com/MTLantoine", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/github.svg", "GitHub"))], "https://github.com/MTLantoine");
    });
    /***/
  },
  /***/"./src/app/assets/services/index.ts":
  /*!******************************************!*\
    !*** ./src/app/assets/services/index.ts ***!
    \******************************************/
  /*! exports provided: ContactService, UserService, IntroService, CompetenceService, LanguageService, PassionService, FormationService, ExperienceService, GithubService, KnowledgeService, AboutMeService */
  /***/
  function srcAppAssetsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./contact.service */"./src/app/assets/services/contact.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return _contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"];
    });

    /* harmony import */
    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./user.service */"./src/app/assets/services/user.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });

    /* harmony import */
    var _intro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./intro.service */"./src/app/assets/services/intro.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "IntroService", function () {
      return _intro_service__WEBPACK_IMPORTED_MODULE_3__["IntroService"];
    });

    /* harmony import */
    var _competence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./competence.service */"./src/app/assets/services/competence.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "CompetenceService", function () {
      return _competence_service__WEBPACK_IMPORTED_MODULE_4__["CompetenceService"];
    });

    /* harmony import */
    var _language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./language.service */"./src/app/assets/services/language.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return _language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"];
    });

    /* harmony import */
    var _passion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./passion.service */"./src/app/assets/services/passion.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "PassionService", function () {
      return _passion_service__WEBPACK_IMPORTED_MODULE_6__["PassionService"];
    });

    /* harmony import */
    var _formation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./formation.service */"./src/app/assets/services/formation.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "FormationService", function () {
      return _formation_service__WEBPACK_IMPORTED_MODULE_7__["FormationService"];
    });

    /* harmony import */
    var _experience_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./experience.service */"./src/app/assets/services/experience.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
      return _experience_service__WEBPACK_IMPORTED_MODULE_8__["ExperienceService"];
    });

    /* harmony import */
    var _github_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./github.service */"./src/app/assets/services/github.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return _github_service__WEBPACK_IMPORTED_MODULE_9__["GithubService"];
    });

    /* harmony import */
    var _knowledge_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./knowledge.service */"./src/app/assets/services/knowledge.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeService", function () {
      return _knowledge_service__WEBPACK_IMPORTED_MODULE_10__["KnowledgeService"];
    });

    /* harmony import */
    var _aboutme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./aboutme.service */"./src/app/assets/services/aboutme.service.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "AboutMeService", function () {
      return _aboutme_service__WEBPACK_IMPORTED_MODULE_11__["AboutMeService"];
    });

    /***/
  },

  /***/"./src/app/assets/services/intro.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/assets/services/intro.service.ts ***!
    \**************************************************/
  /*! exports provided: IntroService */
  /***/
  function srcAppAssetsServicesIntroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "IntroService", function () {
      return IntroService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var IntroService = /*#__PURE__*/_createClass(function IntroService() {
      _classCallCheck(this, IntroService);
      this.intro = new _models__WEBPACK_IMPORTED_MODULE_1__["Text"]("Introduction", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Passionné d'informatique et diplômé d'un Master Informatique, j’aime particulièrement créer de nouveaux programmes et surmonter des difficultés."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Fort d’une expérience dans une entreprise spécialisée dans le développement de site internet, j’ai pu réaliser des projets utilisant différentes technologies."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Motivé, rigoureux et surtout passionné, je cherche toujours à me dépasser."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("J'aime quand le travail est soigneusement réalisé et quand celui-ci est à la pointe de la technologie."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("De plus, mes différentes expériences professionnelles m’ont permis d’acquérir le sens des responsabilités et l’esprit d’équipe."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Exercer dans un secteur qui me permet d'exprimer ma motivation et de donner satisfaction dans le travail que je vais avoir la chance d'effectuer est primordial pour moi."), new _models__WEBPACK_IMPORTED_MODULE_1__["OneText"]("Grâce à ma polyvalence et à mes connaissances, je pense pouvoir être un élément complémentaire important au sein de votre équipe.")]);
    });
    /***/
  },
  /***/"./src/app/assets/services/knowledge.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/assets/services/knowledge.service.ts ***!
    \******************************************************/
  /*! exports provided: KnowledgeService */
  /***/
  function srcAppAssetsServicesKnowledgeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeService", function () {
      return KnowledgeService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var KnowledgeService = /*#__PURE__*/_createClass(function KnowledgeService() {
      _classCallCheck(this, KnowledgeService);
      this.connaissance = new _models__WEBPACK_IMPORTED_MODULE_1__["Passion"]("Connaissances", [
      // Framework
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("Framework", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Angular", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/angularjs.svg", "Angular")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("VueJS", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/vuejs.svg", "VueJS"))]),
      // IDE
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("IDE", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Visual Studo Code", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/vs.svg", "Visual Studo Code")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Eclipse", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/eclipse.svg", "Eclipse"))]),
      // Versioning
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("Versioning", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Git", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/git.svg", "Git")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("GitHub", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/github-black.svg", "GitHub")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("GitLab", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/gitlab.svg", "GitLab"))])]);
    });
    /***/
  },
  /***/"./src/app/assets/services/language.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/assets/services/language.service.ts ***!
    \*****************************************************/
  /*! exports provided: LanguageService */
  /***/
  function srcAppAssetsServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var LanguageService = /*#__PURE__*/_createClass(function LanguageService() {
      _classCallCheck(this, LanguageService);
      this.language = new _models__WEBPACK_IMPORTED_MODULE_1__["Competence"]("Langues", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("Français (Langue maternelle)", 95), new _models__WEBPACK_IMPORTED_MODULE_1__["OneCompetence"]("Anglais (Niveau B2)", 70)]);
    });
    /***/
  },
  /***/"./src/app/assets/services/passion.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/assets/services/passion.service.ts ***!
    \****************************************************/
  /*! exports provided: PassionService */
  /***/
  function srcAppAssetsServicesPassionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PassionService", function () {
      return PassionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var PassionService = /*#__PURE__*/_createClass(function PassionService() {
      _classCallCheck(this, PassionService);
      this.passion = new _models__WEBPACK_IMPORTED_MODULE_1__["Passion"]("Passions", [
      // Informatique
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("Informatique", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Jeux vidéo", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/game-controller.svg", "Jeux vidéo")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Programmation", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/web-development.svg", "Programmation"))]),
      // Sport
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("Sport", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Natation en club", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/swim.svg", "Natation en club")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Musculation", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/gym.svg", "Musculation")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Cyclisme", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/bycicle.svg", "Cyclisme"))]),
      // Musique
      new _models__WEBPACK_IMPORTED_MODULE_1__["OnePassion"]("Musique", [new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Guitare", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/music.svg", "Guitare")), new _models__WEBPACK_IMPORTED_MODULE_1__["OneExample"]("Piano", new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/svg/piano.svg", "Piano"))])]);
    });
    /***/
  },
  /***/"./src/app/assets/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/assets/services/user.service.ts ***!
    \*************************************************/
  /*! exports provided: UserService */
  /***/
  function srcAppAssetsServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../models */"./src/app/assets/models/index.ts");
    var UserService = /*#__PURE__*/_createClass(function UserService() {
      _classCallCheck(this, UserService);
      this.user = new _models__WEBPACK_IMPORTED_MODULE_1__["User"]("Antoine", "Mortelier", 25, new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/profile.png", "profile picture"), new _models__WEBPACK_IMPORTED_MODULE_1__["Picture"]("./assets/pic/sunglasses.png", "easter egg"));
    });
    /***/
  },
  /***/"./src/app/assets/utils/function.util.ts":
  /*!***********************************************!*\
    !*** ./src/app/assets/utils/function.util.ts ***!
    \***********************************************/
  /*! exports provided: activate, waitXms, ifVisible, ifElseVisible, isVisible, incNumber, sortDates, getProjectByPath */
  /***/
  function srcAppAssetsUtilsFunctionUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "activate", function () {
      return activate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "waitXms", function () {
      return waitXms;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ifVisible", function () {
      return ifVisible;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ifElseVisible", function () {
      return ifElseVisible;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "isVisible", function () {
      return isVisible;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "incNumber", function () {
      return incNumber;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "sortDates", function () {
      return sortDates;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "getProjectByPath", function () {
      return getProjectByPath;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    function activate() {
      return true;
    }
    function waitXms(thisClass, x, callbackIf) {
      var callIf = callbackIf.bind(thisClass);
      setTimeout(function () {
        return callIf();
      }, 100 + x * 500);
    }
    function ifVisible(thisClass, element, pourcent, callbackIf) {
      var newPourcent = window.innerWidth > 600 ? pourcent : 20;
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
          var callIf = callbackIf.bind(thisClass);
          callIf();
        }
      }, {
        threshold: [newPourcent / 100]
      }).observe(element);
    }
    function ifElseVisible(thisClass, element, pourcent, callbackIf, callbackIfElse) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
          var callIf = callbackIf.bind(thisClass);
          callIf();
        } else {
          var callIfElse = callbackIfElse.bind(thisClass);
          callIfElse();
        }
      }, {
        threshold: [pourcent / 100]
      }).observe(element);
    }
    function isVisible(thisClass, value, expected, callbackIf) {
      if (value === expected) {
        var callIf = callbackIf.bind(thisClass);
        callIf();
      }
    }
    function incNumber(thisClass, min, max, transition, callbackIf) {
      var callIf = callbackIf.bind(thisClass);
      var _loop = function _loop(i) {
        setTimeout(function () {
          callIf(i);
        }, i * (transition / max));
      };
      for (var i = min; i <= max; i++) {
        _loop(i);
      }
    }
    function sortDates(elements) {
      var elementsCouple = [];
      var result = [];
      elements.forEach(function (element) {
        var length = element.date.year.length;
        var item = [];
        item.push(parseInt(element.date.year.substring(length - 4)));
        item.push(element);
        elementsCouple.push(item);
      });
      elementsCouple.sort().reverse();
      elementsCouple.forEach(function (couple) {
        result.push(couple[1]);
      });
      return result;
    }
    function getProjectByPath(path, projects) {
      var project = projects.project.project.find(function (element) {
        return element.path === path;
      });
      return project === undefined ? null : project;
    }

    /***/
  },

  /***/"./src/app/assets/utils/index.ts":
  /*!***************************************!*\
    !*** ./src/app/assets/utils/index.ts ***!
    \***************************************/
  /*! exports provided: activate, waitXms, ifVisible, ifElseVisible, isVisible, incNumber, sortDates, getProjectByPath */
  /***/
  function srcAppAssetsUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _function_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./function.util */"./src/app/assets/utils/function.util.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "activate", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["activate"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "waitXms", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["waitXms"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "ifVisible", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["ifVisible"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "ifElseVisible", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["ifElseVisible"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "isVisible", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["isVisible"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "incNumber", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["incNumber"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "sortDates", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["sortDates"];
    });

    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "getProjectByPath", function () {
      return _function_util__WEBPACK_IMPORTED_MODULE_1__["getProjectByPath"];
    });

    /***/
  },

  /***/"./src/app/body/about-me/about-me.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/body/about-me/about-me.component.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyAboutMeAboutMeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9hYm91dC1tZS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9ib2R5L2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/body/about-me/about-me.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/body/about-me/about-me.component.ts ***!
    \*****************************************************/
  /*! exports provided: AboutMeComponent */
  /***/
  function srcAppBodyAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent(aboutMeService) {
        _classCallCheck(this, AboutMeComponent);
        this.aboutMeService = aboutMeService;
      }
      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initAboutMe();
        }
      }, {
        key: "initAboutMe",
        value: function initAboutMe() {
          this.aboutMe = this.aboutMeService.aboutMe;
        }
      }]);
      return AboutMeComponent;
    }();
    AboutMeComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["AboutMeService"]
      }];
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about-me",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about-me.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/about-me/about-me.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about-me.component.scss */"./src/app/body/about-me/about-me.component.scss"))["default"]]
    })], AboutMeComponent);

    /***/
  },

  /***/"./src/app/body/body.component.scss":
  /*!******************************************!*\
    !*** ./src/app/body/body.component.scss ***!
    \******************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyBodyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/body/body.component.ts":
  /*!****************************************!*\
    !*** ./src/app/body/body.component.ts ***!
    \****************************************/
  /*! exports provided: BodyComponent */
  /***/
  function srcAppBodyBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
      return BodyComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BodyComponent = /*#__PURE__*/function () {
      function BodyComponent() {
        _classCallCheck(this, BodyComponent);
      }
      _createClass(BodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return BodyComponent;
    }();
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-body",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./body.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./body.component.scss */"./src/app/body/body.component.scss"))["default"]]
    })], BodyComponent);

    /***/
  },

  /***/"./src/app/body/competence/competence.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/body/competence/competence.component.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyCompetenceCompetenceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9jb21wZXRlbmNlL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2JvZHkvY29tcGV0ZW5jZS9jb21wZXRlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvY29tcGV0ZW5jZS9jb21wZXRlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./src/app/body/competence/competence.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/body/competence/competence.component.ts ***!
    \*********************************************************/
  /*! exports provided: CompetenceComponent */
  /***/
  function srcAppBodyCompetenceCompetenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CompetenceComponent", function () {
      return CompetenceComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    var CompetenceComponent = /*#__PURE__*/function () {
      function CompetenceComponent(competenceService) {
        _classCallCheck(this, CompetenceComponent);
        this.competenceService = competenceService;
      }
      _createClass(CompetenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initCompetence();
        }
      }, {
        key: "initCompetence",
        value: function initCompetence() {
          this.competences = this.competenceService.competence;
        }
      }]);
      return CompetenceComponent;
    }();
    CompetenceComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["CompetenceService"]
      }];
    };
    CompetenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-competence",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./competence.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/competence/competence.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./competence.component.scss */"./src/app/body/competence/competence.component.scss"))["default"]]
    })], CompetenceComponent);

    /***/
  },

  /***/"./src/app/body/experience/experience.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/body/experience/experience.component.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9leHBlcmllbmNlL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2JvZHkvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./src/app/body/experience/experience.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/body/experience/experience.component.ts ***!
    \*********************************************************/
  /*! exports provided: ExperienceComponent */
  /***/
  function srcAppBodyExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent(experienceService) {
        _classCallCheck(this, ExperienceComponent);
        this.experienceService = experienceService;
      }
      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initExperience();
        }
      }, {
        key: "initExperience",
        value: function initExperience() {
          this.experiences = this.experienceService.experience;
        }
      }]);
      return ExperienceComponent;
    }();
    ExperienceComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]
      }];
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-experience",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./experience.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./experience.component.scss */"./src/app/body/experience/experience.component.scss"))["default"]]
    })], ExperienceComponent);

    /***/
  },

  /***/"./src/app/body/formation/formation.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/body/formation/formation.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyFormationFormationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9mb3JtYXRpb24vQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYm9keS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/body/formation/formation.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/body/formation/formation.component.ts ***!
    \*******************************************************/
  /*! exports provided: FormationComponent */
  /***/
  function srcAppBodyFormationFormationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormationComponent", function () {
      return FormationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    var FormationComponent = /*#__PURE__*/function () {
      function FormationComponent(formationService) {
        _classCallCheck(this, FormationComponent);
        this.formationService = formationService;
      }
      _createClass(FormationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initFormation();
        }
      }, {
        key: "initFormation",
        value: function initFormation() {
          this.formations = this.formationService.formation;
        }
      }]);
      return FormationComponent;
    }();
    FormationComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["FormationService"]
      }];
    };
    FormationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-formation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./formation.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/formation/formation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./formation.component.scss */"./src/app/body/formation/formation.component.scss"))["default"]]
    })], FormationComponent);

    /***/
  },

  /***/"./src/app/body/intro/intro.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/body/intro/intro.component.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9pbnRyby9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9ib2R5L2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/body/intro/intro.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/body/intro/intro.component.ts ***!
    \***********************************************/
  /*! exports provided: IntroComponent */
  /***/
  function srcAppBodyIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent(introService) {
        _classCallCheck(this, IntroComponent);
        this.introService = introService;
      }
      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initIntro();
        }
      }, {
        key: "initIntro",
        value: function initIntro() {
          this.intro = this.introService.intro;
        }
      }]);
      return IntroComponent;
    }();
    IntroComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["IntroService"]
      }];
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-intro",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./intro.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/intro/intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./intro.component.scss */"./src/app/body/intro/intro.component.scss"))["default"]]
    })], IntroComponent);

    /***/
  },

  /***/"./src/app/body/knowledge/knowledge.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/body/knowledge/knowledge.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyKnowledgeKnowledgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.knowledge__content__items {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 400px) {\n  .knowledge__content__items {\n    flex-direction: row;\n  }\n}\n\n.knowledge__content__items__one-element {\n  width: 100%;\n  padding: 20px 0;\n}\n\n@media screen and (min-width: 400px) {\n  .knowledge__content__items__one-element {\n    min-width: 200px;\n    width: initial;\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9rbm93bGVkZ2UvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYm9keS9rbm93bGVkZ2Uva25vd2xlZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib2R5L2tub3dsZWRnZS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxib2R5XFxrbm93bGVkZ2VcXGtub3dsZWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FDOUpJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEZ0tOOztBQy9KTTtFQUxGO0lBTUksbUJBQUE7RURrS047QUFDRjs7QUNqS007RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRG1LUjs7QUNsS1E7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RURxS1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkva25vd2xlZGdlL2tub3dsZWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4ua25vd2xlZGdlX19jb250ZW50X19pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAua25vd2xlZGdlX19jb250ZW50X19pdGVtcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLmtub3dsZWRnZV9fY29udGVudF9faXRlbXNfX29uZS1lbGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5rbm93bGVkZ2VfX2NvbnRlbnRfX2l0ZW1zX19vbmUtZWxlbWVudCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLmtub3dsZWRnZSB7XG4gICZfX2NvbnRlbnQge1xuICAgICZfX2l0ZW1zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc21hbGwpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgICZfX29uZS1lbGVtZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICB3aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/body/knowledge/knowledge.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/body/knowledge/knowledge.component.ts ***!
    \*******************************************************/
  /*! exports provided: KnowledgeComponent */
  /***/
  function srcAppBodyKnowledgeKnowledgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeComponent", function () {
      return KnowledgeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var KnowledgeComponent = /*#__PURE__*/function () {
      function KnowledgeComponent(knowledgeService) {
        _classCallCheck(this, KnowledgeComponent);
        this.knowledgeService = knowledgeService;
        this.isVisible = false;
      }
      _createClass(KnowledgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initKnowledge();
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "initKnowledge",
        value: function initKnowledge() {
          this.knowledges = this.knowledgeService.connaissance;
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
        }
      }]);
      return KnowledgeComponent;
    }();
    KnowledgeComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["KnowledgeService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], KnowledgeComponent.prototype, "target", void 0);
    KnowledgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-knowledge",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./knowledge.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/knowledge/knowledge.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./knowledge.component.scss */"./src/app/body/knowledge/knowledge.component.scss"))["default"]]
    })], KnowledgeComponent);

    /***/
  },

  /***/"./src/app/body/language/language.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/body/language/language.component.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyLanguageLanguageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9sYW5ndWFnZS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9ib2R5L2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/body/language/language.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/body/language/language.component.ts ***!
    \*****************************************************/
  /*! exports provided: LanguageComponent */
  /***/
  function srcAppBodyLanguageLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LanguageComponent", function () {
      return LanguageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    var LanguageComponent = /*#__PURE__*/function () {
      function LanguageComponent(languageService) {
        _classCallCheck(this, LanguageComponent);
        this.languageService = languageService;
      }
      _createClass(LanguageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initLanguage();
        }
      }, {
        key: "initLanguage",
        value: function initLanguage() {
          this.languages = this.languageService.language;
        }
      }]);
      return LanguageComponent;
    }();
    LanguageComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
      }];
    };
    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-language",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./language.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/language/language.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./language.component.scss */"./src/app/body/language/language.component.scss"))["default"]]
    })], LanguageComponent);

    /***/
  },

  /***/"./src/app/body/passion/passion.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/body/passion/passion.component.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppBodyPassionPassionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.passion__content__items {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 400px) {\n  .passion__content__items {\n    flex-direction: row;\n  }\n}\n\n.passion__content__items__one-element {\n  width: 100%;\n  padding: 20px 0;\n}\n\n@media screen and (min-width: 400px) {\n  .passion__content__items__one-element {\n    min-width: 200px;\n    width: initial;\n    padding: 20px;\n  }\n}\n\n.passion__content__aboutme {\n  padding: 0 20px;\n}\n\n@media screen and (min-width: 1400px) {\n  .passion__content__aboutme {\n    padding: 0 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9wYXNzaW9uL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2JvZHkvcGFzc2lvbi9wYXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib2R5L3Bhc3Npb24vQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcYm9keVxccGFzc2lvblxccGFzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FDOUpJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEZ0tOOztBQy9KTTtFQUxGO0lBTUksbUJBQUE7RURrS047QUFDRjs7QUNqS007RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRG1LUjs7QUNsS1E7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RURxS1I7QUFDRjs7QUNsS0k7RUFDRSxlQUFBO0FEb0tOOztBQ25LTTtFQUZGO0lBR0ksZ0JBQUE7RURzS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvcGFzc2lvbi9wYXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5wYXNzaW9uX19jb250ZW50X19pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAucGFzc2lvbl9fY29udGVudF9faXRlbXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5wYXNzaW9uX19jb250ZW50X19pdGVtc19fb25lLWVsZW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLnBhc3Npb25fX2NvbnRlbnRfX2l0ZW1zX19vbmUtZWxlbWVudCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4ucGFzc2lvbl9fY29udGVudF9fYWJvdXRtZSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAucGFzc2lvbl9fY29udGVudF9fYWJvdXRtZSB7XG4gICAgcGFkZGluZzogMCAxNTBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzaGVldHMvc3R5bGVzXCI7XG5cbi5wYXNzaW9uIHtcbiAgJl9fY29udGVudCB7XG4gICAgJl9faXRlbXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzbWFsbCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgICAgJl9fb25lLWVsZW1lbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc21hbGwpIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJl9fYWJvdXRtZSB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeGxhcmdlKSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/body/passion/passion.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/body/passion/passion.component.ts ***!
    \***************************************************/
  /*! exports provided: PassionComponent */
  /***/
  function srcAppBodyPassionPassionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PassionComponent", function () {
      return PassionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var PassionComponent = /*#__PURE__*/function () {
      function PassionComponent(passionService) {
        _classCallCheck(this, PassionComponent);
        this.passionService = passionService;
        this.isVisible = false;
      }
      _createClass(PassionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initPassion();
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifVisible"](this, this.target.nativeElement, 30, this.activate);
        }
      }, {
        key: "initPassion",
        value: function initPassion() {
          this.passions = this.passionService.passion;
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
        }
      }]);
      return PassionComponent;
    }();
    PassionComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["PassionService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], PassionComponent.prototype, "target", void 0);
    PassionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-passion",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./passion.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/body/passion/passion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./passion.component.scss */"./src/app/body/passion/passion.component.scss"))["default"]]
    })], PassionComponent);

    /***/
  },

  /***/"./src/app/component/box/box-item/box-item.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/component/box/box-item/box-item.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentBoxBoxItemBoxItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.box-item__content {\n  border-bottom: 2px solid black;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box-item__content__picto {\n  padding-left: 15px;\n  width: 100%;\n  max-width: 40px;\n}\n\n@media screen and (min-width: 400px) {\n  .box-item__content__picto {\n    width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JveC9ib3gtaXRlbS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYm94L2JveC1pdGVtL2JveC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYm94L2JveC1pdGVtL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxhcHBcXGNvbXBvbmVudFxcYm94XFxib3gtaXRlbVxcYm94LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDNUJGOztBRCtCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDNUJGOztBRCtCQTtFQUNFLHlCQS9CUztFQWdDVCxZQWxDTTtBQ01SOztBRCtCQTtFQUNFLGtCQUFBO0FDNUJGOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDM0JKOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDM0JKOztBRCtCQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDNUJGOztBRDZCRTtFQUNFLHlCQS9EYTtBQ29DakI7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBOUVNO0VBK0VOLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQWhGTTtBQ29EUjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEZ0NJO0VBQ0Usc0NBQUE7QUM5Qk47O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLDBCQUFBO0FDL0JKOztBRGlDRTtFQUNFLFVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEbUNBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsNEJBQUE7QUMvQko7O0FEbUNBO0VBQ0Usa0JBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMkJBdEpRO0VBdUpSLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDL0JKOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQW5LUTtFQW9LUixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQy9CSjs7QURrQ0k7RUFDRSxZQUFBO0FDaENOOztBRGtDSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQ047O0FEc0NBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUQwQkE7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBQy9KRTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEaUtKOztBQ2hLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURrS047O0FDaktNO0VBSkY7SUFLSSxXQUFBO0VEb0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYm94L2JveC1pdGVtL2JveC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5ib3gtaXRlbV9fY29udGVudCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm94LWl0ZW1fX2NvbnRlbnRfX3BpY3RvIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmJveC1pdGVtX19jb250ZW50X19waWN0byB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlc2hlZXRzL3N0eWxlc1wiO1xuXG4uYm94LWl0ZW0ge1xuICAmX19jb250ZW50IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICZfX3BpY3RvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./src/app/component/box/box-item/box-item.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/component/box/box-item/box-item.component.ts ***!
    \**************************************************************/
  /*! exports provided: BoxItemComponent */
  /***/
  function srcAppComponentBoxBoxItemBoxItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BoxItemComponent", function () {
      return BoxItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/utils */"./src/app/assets/utils/index.ts");
    var BoxItemComponent = /*#__PURE__*/function () {
      function BoxItemComponent() {
        _classCallCheck(this, BoxItemComponent);
        this.condition = false;
      }
      _createClass(BoxItemComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index / 3, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return BoxItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxItemComponent.prototype, "isVisible", null);
    BoxItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-box-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./box-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box-item/box-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./box-item.component.scss */"./src/app/component/box/box-item/box-item.component.scss"))["default"]]
    })], BoxItemComponent);

    /***/
  },

  /***/"./src/app/component/box/box.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/component/box/box.component.scss ***!
    \**************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentBoxBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.box__content__title {\n  padding: 10px;\n  text-align: center;\n  color: white;\n  background-color: #061435;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JveC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JveC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxjb21wb25lbnRcXGJveFxcYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUM5Skk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJGQ0s7QUMrSlgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uYm94X19jb250ZW50X190aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzaGVldHMvc3R5bGVzXCI7XG5cbi5ib3gge1xuICAmX19jb250ZW50IHtcbiAgICAmX190aXRsZSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/component/box/box.component.ts":
  /*!************************************************!*\
    !*** ./src/app/component/box/box.component.ts ***!
    \************************************************/
  /*! exports provided: BoxComponent */
  /***/
  function srcAppComponentBoxBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BoxComponent", function () {
      return BoxComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var BoxComponent = /*#__PURE__*/function () {
      function BoxComponent() {
        _classCallCheck(this, BoxComponent);
        this.condition = false;
      }
      _createClass(BoxComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return BoxComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxComponent.prototype, "box", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxComponent.prototype, "isVisible", null);
    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-box",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./box.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/box/box.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./box.component.scss */"./src/app/component/box/box.component.scss"))["default"]]
    })], BoxComponent);

    /***/
  },

  /***/"./src/app/component/graph/graph-item/graph-item.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/component/graph/graph-item/graph-item.component.scss ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentGraphGraphItemGraphItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.graph-item {\n  margin-bottom: 25px;\n  height: 30px;\n}\n\n@media screen and (min-width: 1200px) {\n  .graph-item {\n    height: 40px;\n  }\n}\n\n.graph-item__content {\n  height: 100%;\n}\n\n.graph-item__content__max {\n  position: relative;\n  height: 100%;\n  width: 80%;\n}\n\n@media screen and (min-width: 400px) {\n  .graph-item__content__max {\n    width: 85%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .graph-item__content__max {\n    width: 90%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .graph-item__content__max {\n    width: 92%;\n  }\n}\n\n@media screen and (min-width: 1400px) {\n  .graph-item__content__max {\n    width: 95%;\n  }\n}\n\n.graph-item__content__max__bar {\n  width: 0;\n  height: 13px;\n  top: 5px;\n  position: absolute;\n  background: linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);\n}\n\n.graph-item__content__max__bar__percent {\n  position: absolute;\n  top: -6px;\n  right: -55px;\n}\n\n@media screen and (min-width: 800px) {\n  .graph-item__content__max__bar__percent {\n    right: -65px;\n    top: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dyYXBoL2dyYXBoLWl0ZW0vQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2dyYXBoL2dyYXBoLWl0ZW0vZ3JhcGgtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2dyYXBoL2dyYXBoLWl0ZW0vQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcY29tcG9uZW50XFxncmFwaFxcZ3JhcGgtaXRlbVxcZ3JhcGgtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FDaEtBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEa0tGOztBQ2pLRTtFQUhGO0lBSUksWUFBQTtFRG9LRjtBQUNGOztBQ25LRTtFQUNFLFlBQUE7QURxS0o7O0FDcEtJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRHNLTjs7QUNyS007RUFKRjtJQUtJLFVBQUE7RUR3S047QUFDRjs7QUN2S007RUFQRjtJQVFJLFVBQUE7RUQwS047QUFDRjs7QUN6S007RUFWRjtJQVdJLFVBQUE7RUQ0S047QUFDRjs7QUMzS007RUFiRjtJQWNJLFVBQUE7RUQ4S047QUFDRjs7QUM3S007RUFDRSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlFRnBCRztBQ21NWDs7QUM5S1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEZ0xWOztBQy9LVTtFQUpGO0lBS0ksWUFBQTtJQUNBLFVBQUE7RURrTFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ncmFwaC9ncmFwaC1pdGVtL2dyYXBoLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmdyYXBoLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmdyYXBoLWl0ZW0ge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuLmdyYXBoLWl0ZW1fX2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JhcGgtaXRlbV9fY29udGVudF9fbWF4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAuZ3JhcGgtaXRlbV9fY29udGVudF9fbWF4IHtcbiAgICB3aWR0aDogODUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZ3JhcGgtaXRlbV9fY29udGVudF9fbWF4IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmdyYXBoLWl0ZW1fX2NvbnRlbnRfX21heCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5ncmFwaC1pdGVtX19jb250ZW50X19tYXgge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbi5ncmFwaC1pdGVtX19jb250ZW50X19tYXhfX2JhciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEzcHg7XG4gIHRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzgzM2FiNCAwJSwgI2ZkMWQxZCA1MCUsICNmY2IwNDUgMTAwJSk7XG59XG4uZ3JhcGgtaXRlbV9fY29udGVudF9fbWF4X19iYXJfX3BlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IC01NXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmdyYXBoLWl0ZW1fX2NvbnRlbnRfX21heF9fYmFyX19wZXJjZW50IHtcbiAgICByaWdodDogLTY1cHg7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzaGVldHMvc3R5bGVzXCI7XG5cbi5ncmFwaC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbG1lZGl1bSkge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAmX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJl9fbWF4IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc21hbGwpIHtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsc21hbGwpIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0pIHtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR4bGFyZ2UpIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIH1cbiAgICAgICZfX2JhciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmFkaWVudDtcbiAgICAgICAgJl9fcGVyY2VudCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogLTU1cHg7XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHhtZWRpdW0pIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtNjVweDtcbiAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/component/graph/graph-item/graph-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/graph/graph-item/graph-item.component.ts ***!
    \********************************************************************/
  /*! exports provided: GraphItemComponent */
  /***/
  function srcAppComponentGraphGraphItemGraphItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GraphItemComponent", function () {
      return GraphItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/utils */"./src/app/assets/utils/index.ts");
    var GraphItemComponent = /*#__PURE__*/function () {
      function GraphItemComponent() {
        _classCallCheck(this, GraphItemComponent);
        this.i = 0;
        this.transitionDuration = 1500;
      }
      _createClass(GraphItemComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index / 3, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.target.nativeElement.style.width = this.element.level + "%";
          this.target.nativeElement.style.transition = this.transitionDuration + "ms";
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["incNumber"](this, 0, this.element.level, this.transitionDuration, this.setNewPercent);
        }
      }, {
        key: "getThePercent",
        value: function getThePercent() {
          return this.i + "%";
        }
      }, {
        key: "setNewPercent",
        value: function setNewPercent(newPercent) {
          this.i = newPercent;
        }
      }]);
      return GraphItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], GraphItemComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphItemComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphItemComponent.prototype, "isVisible", null);
    GraphItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-graph-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./graph-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph-item/graph-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./graph-item.component.scss */"./src/app/component/graph/graph-item/graph-item.component.scss"))["default"]]
    })], GraphItemComponent);

    /***/
  },

  /***/"./src/app/component/graph/graph.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/component/graph/graph.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentGraphGraphComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/component/graph/graph.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/graph/graph.component.ts ***!
    \****************************************************/
  /*! exports provided: GraphComponent */
  /***/
  function srcAppComponentGraphGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GraphComponent", function () {
      return GraphComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var GraphComponent = /*#__PURE__*/function () {
      function GraphComponent() {
        _classCallCheck(this, GraphComponent);
        this.side = "left";
        this.isVisible = false;
      }
      _createClass(GraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return GraphComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], GraphComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphComponent.prototype, "elements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphComponent.prototype, "side", void 0);
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-graph",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./graph.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/graph/graph.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./graph.component.scss */"./src/app/component/graph/graph.component.scss"))["default"]]
    })], GraphComponent);

    /***/
  },

  /***/"./src/app/component/historical/historical-item/historical-item.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/component/historical/historical-item/historical-item.component.scss ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentHistoricalHistoricalItemHistoricalItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.historical-item__content {\n  display: flex;\n}\n\n.historical-item__content__date {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  font-weight: 800;\n  padding: 10px 20px;\n  font-size: 20px;\n}\n\n@media screen and (min-width: 400px) {\n  .historical-item__content__date {\n    font-size: 22px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .historical-item__content__date {\n    font-size: 28px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .historical-item__content__date {\n    width: 35%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .historical-item__content__date {\n    font-size: 32px;\n  }\n}\n\n.historical-item__content__informations {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px;\n}\n\n@media screen and (min-width: 600px) {\n  .historical-item__content__informations {\n    padding: 10px 30px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .historical-item__content__informations {\n    width: 65%;\n  }\n}\n\n.historical-item__content__informations__title {\n  font-weight: 600;\n}\n\n@media screen and (min-width: 1000px) {\n  .historical-item__content__informations__title {\n    font-size: 30px;\n  }\n}\n\n.historical-item__content__informations__subtitle {\n  font-style: italic;\n}\n\n.historical-item__content__informations__description {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hpc3RvcmljYWwvaGlzdG9yaWNhbC1pdGVtL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9oaXN0b3JpY2FsL2hpc3RvcmljYWwtaXRlbS9oaXN0b3JpY2FsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9oaXN0b3JpY2FsL2hpc3RvcmljYWwtaXRlbS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxjb21wb25lbnRcXGhpc3RvcmljYWxcXGhpc3RvcmljYWwtaXRlbVxcaGlzdG9yaWNhbC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUMvSkU7RUFDRSxhQUFBO0FEaUtKOztBQ2hLSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JGVEU7RUVVRixrQkFBQTtFQUNBLGVBQUE7QURrS047O0FDaktNO0VBVEY7SUFVSSxlQUFBO0VEb0tOO0FBQ0Y7O0FDbktNO0VBWkY7SUFhSSxlQUFBO0VEc0tOO0FBQ0Y7O0FDcktNO0VBZkY7SUFnQkksVUFBQTtFRHdLTjtBQUNGOztBQ3ZLTTtFQWxCRjtJQW1CSSxlQUFBO0VEMEtOO0FBQ0Y7O0FDeEtJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEMEtOOztBQ3pLTTtFQUxGO0lBTUksa0JBQUE7RUQ0S047QUFDRjs7QUMzS007RUFSRjtJQVNJLFVBQUE7RUQ4S047QUFDRjs7QUM3S007RUFDRSxnQkZ0Q0M7QUNxTlQ7O0FDOUtRO0VBRkY7SUFHSSxlQUFBO0VEaUxSO0FBQ0Y7O0FDL0tNO0VBQ0Usa0JBQUE7QURpTFI7O0FDL0tNO0VBQ0UsV0YxQ0Q7QUMyTlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGlzdG9yaWNhbC9oaXN0b3JpY2FsLWl0ZW0vaGlzdG9yaWNhbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5oaXN0b3JpY2FsLWl0ZW1fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9fZGF0ZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAuaGlzdG9yaWNhbC1pdGVtX19jb250ZW50X19kYXRlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5oaXN0b3JpY2FsLWl0ZW1fX2NvbnRlbnRfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9fZGF0ZSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5oaXN0b3JpY2FsLWl0ZW1fX2NvbnRlbnRfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9faW5mb3JtYXRpb25zIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9faW5mb3JtYXRpb25zIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5oaXN0b3JpY2FsLWl0ZW1fX2NvbnRlbnRfX2luZm9ybWF0aW9ucyB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9faW5mb3JtYXRpb25zX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9faW5mb3JtYXRpb25zX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG4uaGlzdG9yaWNhbC1pdGVtX19jb250ZW50X19pbmZvcm1hdGlvbnNfX3N1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmhpc3RvcmljYWwtaXRlbV9fY29udGVudF9faW5mb3JtYXRpb25zX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzaGVldHMvc3R5bGVzXCI7XG5cbi5oaXN0b3JpY2FsLWl0ZW0ge1xuICAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICZfX2RhdGUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc21hbGwpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGxzbWFsbCkge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeG1lZGl1bSkge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICB9XG4gICAgfVxuICAgICZfX2luZm9ybWF0aW9ucyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbHNtYWxsKSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR4bWVkaXVtKSB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG4gICAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkY3Zib2xkO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./src/app/component/historical/historical-item/historical-item.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/component/historical/historical-item/historical-item.component.ts ***!
    \***********************************************************************************/
  /*! exports provided: HistoricalItemComponent */
  /***/
  function srcAppComponentHistoricalHistoricalItemHistoricalItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HistoricalItemComponent", function () {
      return HistoricalItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/utils */"./src/app/assets/utils/index.ts");
    var HistoricalItemComponent = /*#__PURE__*/function () {
      function HistoricalItemComponent() {
        _classCallCheck(this, HistoricalItemComponent);
      }
      _createClass(HistoricalItemComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return HistoricalItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HistoricalItemComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HistoricalItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HistoricalItemComponent.prototype, "isVisible", null);
    HistoricalItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-historical-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./historical-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical-item/historical-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./historical-item.component.scss */"./src/app/component/historical/historical-item/historical-item.component.scss"))["default"]]
    })], HistoricalItemComponent);

    /***/
  },

  /***/"./src/app/component/historical/historical.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/component/historical/historical.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentHistoricalHistoricalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oaXN0b3JpY2FsL2hpc3RvcmljYWwuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/component/historical/historical.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/component/historical/historical.component.ts ***!
    \**************************************************************/
  /*! exports provided: HistoricalComponent */
  /***/
  function srcAppComponentHistoricalHistoricalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HistoricalComponent", function () {
      return HistoricalComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var HistoricalComponent = /*#__PURE__*/function () {
      function HistoricalComponent() {
        _classCallCheck(this, HistoricalComponent);
        this.isVisible = false;
      }
      _createClass(HistoricalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
          this.sortDates();
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }, {
        key: "sortDates",
        value: function sortDates() {
          this.newElements = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["sortDates"](this.elements);
        }
      }]);
      return HistoricalComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], HistoricalComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HistoricalComponent.prototype, "elements", void 0);
    HistoricalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-historical",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./historical.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/historical/historical.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./historical.component.scss */"./src/app/component/historical/historical.component.scss"))["default"]]
    })], HistoricalComponent);

    /***/
  },

  /***/"./src/app/component/mentions-legales/mentions-legales.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/component/mentions-legales/mentions-legales.component.scss ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentMentionsLegalesMentionsLegalesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lbnRpb25zLWxlZ2FsZXMvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L21lbnRpb25zLWxlZ2FsZXMvbWVudGlvbnMtbGVnYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVudGlvbnMtbGVnYWxlcy9tZW50aW9ucy1sZWdhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./src/app/component/mentions-legales/mentions-legales.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/component/mentions-legales/mentions-legales.component.ts ***!
    \**************************************************************************/
  /*! exports provided: MentionsLegalesComponent */
  /***/
  function srcAppComponentMentionsLegalesMentionsLegalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MentionsLegalesComponent", function () {
      return MentionsLegalesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MentionsLegalesComponent = /*#__PURE__*/function () {
      function MentionsLegalesComponent() {
        _classCallCheck(this, MentionsLegalesComponent);
      }
      _createClass(MentionsLegalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMentionsLegales();
        }
      }, {
        key: "initMentionsLegales",
        value: function initMentionsLegales() {
          this.frText = "Ce site a été créé sur Angular par Antoine Mortelier, et appartient à Antoine Mortelier.";
          this.frDate = "Dernière date de mise à jour :";
          this.enText = "This website was created on Angular by Antoine Mortelier, and belongs to Antoine Mortelier.";
          this.enDate = "Last update :";
          this.date = "05/10/2023 -- 18:00";
        }
      }]);
      return MentionsLegalesComponent;
    }();
    MentionsLegalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-mentions-legales",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./mentions-legales.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/mentions-legales/mentions-legales.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./mentions-legales.component.scss */"./src/app/component/mentions-legales/mentions-legales.component.scss"))["default"]]
    })], MentionsLegalesComponent);

    /***/
  },

  /***/"./src/app/component/not-found/not-found.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/component/not-found/not-found.component.scss ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.not-found__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.not-found__content__gif {\n  pointer-events: none;\n  width: 100%;\n  height: 240px;\n}\n\n.not-found__content__gif iframe {\n  width: 100%;\n  height: 100%;\n}\n\n.not-found__content__text {\n  font-weight: 800;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25vdC1mb3VuZC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L25vdC1mb3VuZC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxjb21wb25lbnRcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUMvSkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEaUtKOztBQ2hLSTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURrS047O0FDaktNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURtS1I7O0FDaEtJO0VBQ0UsZ0JGaEJFO0VFaUJGLGNBQUE7QURrS04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4ubm90LWZvdW5kX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubm90LWZvdW5kX19jb250ZW50X19naWYge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjQwcHg7XG59XG4ubm90LWZvdW5kX19jb250ZW50X19naWYgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ub3QtZm91bmRfX2NvbnRlbnRfX3RleHQge1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDIwcHggMDtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlc2hlZXRzL3N0eWxlc1wiO1xuXG4ubm90LWZvdW5kIHtcbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJl9fZ2lmIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogJGxib2xkO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/component/not-found/not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/not-found/not-found.component.ts ***!
    \************************************************************/
  /*! exports provided: NotFoundComponent */
  /***/
  function srcAppComponentNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }
      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.windowHeight = window.innerHeight - 40;
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.windowHeight = event.target.innerHeight - 40;
        }
      }]);
      return NotFoundComponent;
    }();
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-not-found",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./not-found.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/not-found/not-found.component.html"))["default"],
      host: {
        "(window:resize)": "onResize($event)"
      },
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./not-found.component.scss */"./src/app/component/not-found/not-found.component.scss"))["default"]]
    })], NotFoundComponent);

    /***/
  },

  /***/"./src/app/component/text/text-item/text-item.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/component/text/text-item/text-item.component.scss ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentTextTextItemTextItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.text-item__content__description {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.text-item__content__description__img {\n  width: 100%;\n  max-width: 40px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RleHQvdGV4dC1pdGVtL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90ZXh0L3RleHQtaXRlbS90ZXh0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90ZXh0L3RleHQtaXRlbS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxjb21wb25lbnRcXHRleHRcXHRleHQtaXRlbVxcdGV4dC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUM5Skk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRGdLTjs7QUMvSk07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEaUtSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3RleHQvdGV4dC1pdGVtL3RleHQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4udGV4dC1pdGVtX19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRleHQtaXRlbV9fY29udGVudF9fZGVzY3JpcHRpb25fX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlc2hlZXRzL3N0eWxlc1wiO1xuXG4udGV4dC1pdGVtIHtcbiAgJl9fY29udGVudCB7XG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICZfX2ltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/component/text/text-item/text-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/component/text/text-item/text-item.component.ts ***!
    \*****************************************************************/
  /*! exports provided: TextItemComponent */
  /***/
  function srcAppComponentTextTextItemTextItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TextItemComponent", function () {
      return TextItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/utils */"./src/app/assets/utils/index.ts");
    var TextItemComponent = /*#__PURE__*/function () {
      function TextItemComponent() {
        _classCallCheck(this, TextItemComponent);
        this.condition = false;
      }
      _createClass(TextItemComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return TextItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextItemComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextItemComponent.prototype, "isVisible", null);
    TextItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-text-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./text-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text-item/text-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./text-item.component.scss */"./src/app/component/text/text-item/text-item.component.scss"))["default"]]
    })], TextItemComponent);

    /***/
  },

  /***/"./src/app/component/text/text.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/component/text/text.component.scss ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentTextTextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".text__content__text {\n  text-align: center;\n}\n.text__content__space {\n  height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RleHQvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcY29tcG9uZW50XFx0ZXh0XFx0ZXh0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcbiAgJl9fY29udGVudCB7XG4gICAgJl9fdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZfX3NwYWNlIHtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi50ZXh0X19jb250ZW50X190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHRfX2NvbnRlbnRfX3NwYWNlIHtcbiAgaGVpZ2h0OiAxMHB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/component/text/text.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/text/text.component.ts ***!
    \**************************************************/
  /*! exports provided: TextComponent */
  /***/
  function srcAppComponentTextTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
      return TextComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var TextComponent = /*#__PURE__*/function () {
      function TextComponent() {
        _classCallCheck(this, TextComponent);
        this.isVisible = false;
      }
      _createClass(TextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return TextComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], TextComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextComponent.prototype, "nbrItems", void 0);
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-text",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./text.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/text/text.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./text.component.scss */"./src/app/component/text/text.component.scss"))["default"]]
    })], TextComponent);

    /***/
  },

  /***/"./src/app/component/title/title.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/component/title/title.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentTitleTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@media screen and (min-width: 1800px) {\n  .title {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n  .title.left {\n    left: -40px;\n  }\n  .title.right {\n    right: -40px;\n  }\n  .title::before {\n    content: \"\";\n    background-color: lightgray;\n    width: 2px;\n    top: 5px;\n    bottom: 100%;\n    transition: 1.5s;\n    position: absolute;\n  }\n  .title.active::before {\n    bottom: 5px;\n  }\n  .title.left::before {\n    left: -25px;\n  }\n  .title.right::before {\n    right: -25px;\n  }\n}\n\n.title__content {\n  transform-origin: top left;\n  text-align: center;\n}\n\n.title__content.right {\n  transform-origin: top right;\n}\n\n@media screen and (min-width: 800px) {\n  .title__content {\n    text-align: unset;\n  }\n}\n\n@media screen and (min-width: 1800px) {\n  .title__content {\n    transform: rotate(90deg);\n  }\n  .title__content.right {\n    transform: rotate(-90deg);\n  }\n}\n\n.title__content__title {\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 20px;\n  font-weight: 800;\n  padding: 0 10px;\n  position: relative;\n  display: inline-block;\n}\n\n.title__content__title::before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  left: 0;\n  bottom: 0px;\n  background-color: lightgray;\n  width: 0;\n  z-index: -1;\n  transition-duration: 1s;\n}\n\n.title__content__title.active::before {\n  width: 100%;\n}\n\n@media screen and (min-width: 1800px) {\n  .title__content__title {\n    padding: 10px;\n    background-color: white;\n    color: black;\n    transform: rotate(180deg);\n    margin: 0;\n  }\n  .title__content__title.right {\n    transform: rotate(0);\n  }\n  .title__content__title::before {\n    width: 0;\n  }\n  .title__content__title.active::before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RpdGxlL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90aXRsZS90aXRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3RpdGxlL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxhcHBcXGNvbXBvbmVudFxcdGl0bGVcXHRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUMvSkU7RUFERjtJQUVJLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RURrS0Y7RUNqS0U7SUFDRSxXQUFBO0VEbUtKO0VDaktFO0lBQ0UsWUFBQTtFRG1LSjtFQ2pLRTtJQUNFLFdBQUE7SUFDQSwyQkZWTTtJRVdOLFVBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RURtS0o7RUNoS0k7SUFDRSxXQUFBO0VEa0tOO0VDOUpJO0lBQ0UsV0FBQTtFRGdLTjtFQzVKSTtJQUNFLFlBQUE7RUQ4Sk47QUFDRjs7QUMzSkU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FENkpKOztBQzVKSTtFQUNFLDJCQUFBO0FEOEpOOztBQzVKSTtFQU5GO0lBT0ksaUJBQUE7RUQrSko7QUFDRjs7QUM5Skk7RUFURjtJQVVJLHdCQUFBO0VEaUtKO0VDaEtJO0lBQ0UseUJBQUE7RURrS047QUFDRjs7QUNoS0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JGeERFO0VFeURGLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEa0tOOztBQ2pLTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDJCRi9ESTtFRWdFSixRQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FEbUtSOztBQ2hLUTtFQUNFLFdBQUE7QURrS1Y7O0FDL0pNO0VBekJGO0lBMEJJLGFBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLFNBQUE7RURrS047RUNqS007SUFDRSxvQkFBQTtFRG1LUjtFQ2pLTTtJQUNFLFFBQUE7RURtS1I7RUNoS1E7SUFDRSxhQUFBO0VEa0tWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLnRpdGxlLmxlZnQge1xuICAgIGxlZnQ6IC00MHB4O1xuICB9XG4gIC50aXRsZS5yaWdodCB7XG4gICAgcmlnaHQ6IC00MHB4O1xuICB9XG4gIC50aXRsZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogMnB4O1xuICAgIHRvcDogNXB4O1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAxLjVzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAudGl0bGUuYWN0aXZlOjpiZWZvcmUge1xuICAgIGJvdHRvbTogNXB4O1xuICB9XG4gIC50aXRsZS5sZWZ0OjpiZWZvcmUge1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC50aXRsZS5yaWdodDo6YmVmb3JlIHtcbiAgICByaWdodDogLTI1cHg7XG4gIH1cbn1cbi50aXRsZV9fY29udGVudCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVfX2NvbnRlbnQucmlnaHQge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAudGl0bGVfX2NvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IHVuc2V0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgLnRpdGxlX19jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgLnRpdGxlX19jb250ZW50LnJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG59XG4udGl0bGVfX2NvbnRlbnRfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRpdGxlX19jb250ZW50X190aXRsZTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHdpZHRoOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG4udGl0bGVfX2NvbnRlbnRfX3RpdGxlLmFjdGl2ZTo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgLnRpdGxlX19jb250ZW50X190aXRsZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnRpdGxlX19jb250ZW50X190aXRsZS5yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgLnRpdGxlX19jb250ZW50X190aXRsZTo6YmVmb3JlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudGl0bGVfX2NvbnRlbnRfX3RpdGxlLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLnRpdGxlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGxsYXJnZSkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgICYubGVmdCB7XG4gICAgICBsZWZ0OiAtNDBweDtcbiAgICB9XG4gICAgJi5yaWdodCB7XG4gICAgICByaWdodDogLTQwcHg7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IDEuNXM7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmLmxlZnQge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICB9XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19jb250ZW50IHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJi5yaWdodCB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR4bWVkaXVtKSB7XG4gICAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGxsYXJnZSkge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgJi5yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsbGFyZ2UpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAmLnJpZ2h0IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgfVxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/component/title/title.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/title/title.component.ts ***!
    \****************************************************/
  /*! exports provided: TitleComponent */
  /***/
  function srcAppComponentTitleTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
      return TitleComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var TitleComponent = /*#__PURE__*/function () {
      function TitleComponent() {
        _classCallCheck(this, TitleComponent);
        this.side = "left";
      }
      _createClass(TitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.turnToRelative();
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["ifVisible"](this, this.target.nativeElement, 40, this.activate);
        }
      }, {
        key: "turnToRelative",
        value: function turnToRelative() {
          this.target.nativeElement.closest("section > div").style.position = "relative";
        }
      }, {
        key: "activate",
        value: function activate() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return TitleComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], TitleComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TitleComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TitleComponent.prototype, "side", void 0);
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-title",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./title.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/component/title/title.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./title.component.scss */"./src/app/component/title/title.component.scss"))["default"]]
    })], TitleComponent);

    /***/
  },

  /***/"./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.scss */"./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);

    /***/
  },

  /***/"./src/app/footer/github/github.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/footer/github/github.component.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppFooterGithubGithubComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2dpdGh1Yi9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9mb290ZXIvZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlaWdodFxuJGN2Ym9sZDogNjAwO1xuJGxib2xkOiA4MDA7XG5cbi8vIENvbG9yc1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGdyYXk6IGdyYXk7XG4kd2hpdGU6IHdoaXRlO1xuJGJsYWNrOiBibGFjaztcbiRkYXJrbW9kZTogIzA2MTQzNTtcbiRkYXJrbW9kZS1ob3ZlcjogIzA0MGQyMjtcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDAlLFxuICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXG4gIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSAxMDAlXG4pO1xuXG4vLyBMYXlvdXRcbiRzbWFsbDogNDAwcHg7XG4kbHNtYWxsOiA2MDBweDtcbiR4bWVkaXVtOiA4MDBweDtcbiRtZWRpdW06IDEwMDBweDtcbiRsbWVkaXVtOiAxMjAwcHg7XG4keGxhcmdlOiAxNDAwcHg7XG4kbGFyZ2U6IDE2MDBweDtcbiRsbGFyZ2U6IDE4MDBweDtcblxuLy8gUHJlbWFkZSBTdHlsZXNcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlO1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZS1ob3ZlcjtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogJGxib2xkO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICY6OmJlZm9yZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya21vZGUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuZmFzdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAmX19tb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMTMuNXB4O1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0FuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxNDM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZ21lbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA2MTQzNTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi5zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBkMjI7XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b246aG92ZXI6OmJlZm9yZSwgLmJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyMCwgNTMsIDAuMyk7XG59XG5cbi5ibHVyRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uYmx1ckVmZmVjdC5mYXN0ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbn1cbi5ibHVyRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlTGVmdEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZVJpZ2h0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVSaWdodEVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZURvd25FZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLnNsaWRlRG93bkVmZmVjdF9fbW9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG59XG5cbi5kb3RFZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZG90RWZmZWN0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDhweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNXB4O1xufVxuLmRvdEVmZmVjdDo6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0xMy41cHg7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgYW5pbWF0aW9uLW5hbWU6IGRvdEFuaW1hdGlvbjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/footer/github/github.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/footer/github/github.component.ts ***!
    \***************************************************/
  /*! exports provided: GithubComponent */
  /***/
  function srcAppFooterGithubGithubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GithubComponent", function () {
      return GithubComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    var GithubComponent = /*#__PURE__*/function () {
      function GithubComponent(githubService) {
        _classCallCheck(this, GithubComponent);
        this.githubService = githubService;
      }
      _createClass(GithubComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initGithubText();
        }
      }, {
        key: "initGithubText",
        value: function initGithubText() {
          this.github = this.githubService.github;
        }
      }]);
      return GithubComponent;
    }();
    GithubComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
      }];
    };
    GithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-github",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./github.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/github/github.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./github.component.scss */"./src/app/footer/github/github.component.scss"))["default"]]
    })], GithubComponent);

    /***/
  },

  /***/"./src/app/header/contact/contact.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/header/contact/contact.component.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.contact__content__info {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n@media screen and (min-width: 600px) {\n  .contact__content__info {\n    flex-direction: row;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .contact__content__info {\n    max-width: 500px;\n  }\n}\n\n.contact__content__info__text {\n  width: 100%;\n}\n\n@media screen and (min-width: 400px) {\n  .contact__content__info__text {\n    width: 50%;\n  }\n}\n\n.contact__content__info__text__bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2NvbnRhY3QvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2NvbnRhY3QvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcaGVhZGVyXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUM5Skk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRGdLTjs7QUMvSk07RUFKRjtJQUtJLG1CQUFBO0lBQ0EsY0FBQTtFRGtLTjtBQUNGOztBQ2pLTTtFQVJGO0lBU0ksZ0JBQUE7RURvS047QUFDRjs7QUNuS007RUFDRSxXQUFBO0FEcUtSOztBQ3BLUTtFQUZGO0lBR0ksVUFBQTtFRHVLUjtBQUNGOztBQ3RLUTtFQUNFLGdCRnBCRDtBQzRMVCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmNvbnRhY3RfX2NvbnRlbnRfX2luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhY3RfX2NvbnRlbnRfX2luZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFjdF9fY29udGVudF9faW5mbyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxufVxuLmNvbnRhY3RfX2NvbnRlbnRfX2luZm9fX3RleHQge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5jb250YWN0X19jb250ZW50X19pbmZvX190ZXh0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4uY29udGFjdF9fY29udGVudF9faW5mb19fdGV4dF9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLmNvbnRhY3Qge1xuICAmX19jb250ZW50IHtcbiAgICAmX19pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsc21hbGwpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICB9XG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzbWFsbCkge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJl9fYm9sZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6ICRjdmJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/header/contact/contact.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/header/contact/contact.component.ts ***!
    \*****************************************************/
  /*! exports provided: ContactComponent */
  /***/
  function srcAppHeaderContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(contactService) {
        _classCallCheck(this, ContactComponent);
        this.contactService = contactService;
        this.conditionConst = false;
        this.conditionVariable = false;
      }
      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initContact();
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "initContact",
        value: function initContact() {
          this.contact = this.contactService.contact;
        }
      }, {
        key: "activate",
        value: function activate() {
          var _this = this;
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["waitXms"](this, 0, function () {
            return _this.conditionConst = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
          });
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["waitXms"](this, 1, function () {
            return _this.conditionVariable = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
          });
        }
      }]);
      return ContactComponent;
    }();
    ContactComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], ContactComponent.prototype, "target", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact.component.scss */"./src/app/header/contact/contact.component.scss"))["default"]]
    })], ContactComponent);

    /***/
  },

  /***/"./src/app/header/copyright/copyright.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/header/copyright/copyright.component.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderCopyrightCopyrightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.copyright {\n  font-style: italic;\n  font-size: 8px;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 10px;\n}\n\n@media screen and (min-width: 600px) {\n  .copyright {\n    font-size: 10px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .copyright {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2NvcHlyaWdodC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcc3R5bGVzaGVldHNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2NvcHlyaWdodC9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxoZWFkZXJcXGNvcHlyaWdodFxcY29weXJpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUNoS0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFPQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRDRKRjs7QUNwS0U7RUFIRjtJQUlJLGVBQUE7RUR1S0Y7QUFDRjs7QUN0S0U7RUFORjtJQU9JLGVBQUE7RUR5S0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9jb3B5cmlnaHQvY29weXJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5jb3B5cmlnaHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlc2hlZXRzL3N0eWxlc1wiO1xuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDhweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGxzbWFsbCkge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */";

    /***/
  },

  /***/"./src/app/header/copyright/copyright.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/header/copyright/copyright.component.ts ***!
    \*********************************************************/
  /*! exports provided: CopyrightComponent */
  /***/
  function srcAppHeaderCopyrightCopyrightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function () {
      return CopyrightComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var CopyrightComponent = /*#__PURE__*/function () {
      function CopyrightComponent() {
        _classCallCheck(this, CopyrightComponent);
        this.condition = false;
      }
      _createClass(CopyrightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "activate",
        value: function activate() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return CopyrightComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], CopyrightComponent.prototype, "target", void 0);
    CopyrightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-copyright",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./copyright.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/copyright/copyright.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./copyright.component.scss */"./src/app/header/copyright/copyright.component.scss"))["default"]]
    })], CopyrightComponent);

    /***/
  },

  /***/"./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.header__first-section {\n  display: flex;\n  flex-direction: column-reverse;\n  margin: 10px 0;\n}\n\n@media screen and (min-width: 1000px) {\n  .header__first-section {\n    flex-direction: column;\n  }\n}\n\n.header__band {\n  margin: 10px 0;\n}\n\n@media screen and (min-width: 1000px) {\n  .header__band {\n    margin: 20px 0;\n  }\n}\n\n.header__first-band {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 1000px) {\n  .header__first-band {\n    flex-direction: row;\n  }\n}\n\n.header__first-band__contact {\n  margin: 0 auto;\n  width: 100%;\n}\n\n@media screen and (min-width: 1000px) {\n  .header__first-band__contact {\n    margin: 0;\n    margin-right: auto;\n    width: 30%;\n  }\n}\n\n.header__first-band__license {\n  width: 100%;\n  margin-top: 20px;\n}\n\n@media screen and (min-width: 1000px) {\n  .header__first-band__license {\n    margin: 0;\n    width: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBQ0UseUJBL0JTO0VBZ0NULFlBbENNO0FDTVI7O0FEK0JBO0VBQ0Usa0JBQUE7QUM1QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FENkJFO0VBQ0UseUJBL0RhO0FDb0NqQjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkE5RU07RUErRU4sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBaEZNO0FDb0RSOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURnQ0k7RUFDRSxzQ0FBQTtBQzlCTjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNoQ0Y7O0FEaUNFO0VBQ0UsMEJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRSw0QkFBQTtBQy9CSjs7QURtQ0E7RUFDRSxrQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwyQkF0SlE7RUF1SlIsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUMvQko7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBbktRO0VBb0tSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDL0JKOztBRGtDSTtFQUNFLFlBQUE7QUNoQ047O0FEa0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURzQ0E7RUFDRTtJQUNFLG1CQUFBO0VDbkNGO0VEcUNBO0lBQ0UscUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxtQkFBQTtFQ25DRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FDL0pFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBRGlLSjs7QUNoS0k7RUFKRjtJQUtJLHNCQUFBO0VEbUtKO0FBQ0Y7O0FDaktFO0VBQ0UsY0FBQTtBRG1LSjs7QUNsS0k7RUFGRjtJQUdJLGNBQUE7RURxS0o7QUFDRjs7QUNuS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRHFLSjs7QUNwS0k7RUFKRjtJQUtJLG1CQUFBO0VEdUtKO0FBQ0Y7O0FDdEtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUR3S047O0FDdktNO0VBSEY7SUFJSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VEMEtOO0FBQ0Y7O0FDeEtJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FEMEtOOztBQ3pLTTtFQUhGO0lBSUksU0FBQTtJQUNBLFVBQUE7RUQ0S047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmhlYWRlcl9fZmlyc3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhlYWRlcl9fZmlyc3Qtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmhlYWRlcl9fYmFuZCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXJfX2JhbmQge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG59XG4uaGVhZGVyX19maXJzdC1iYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuaGVhZGVyX19maXJzdC1iYW5kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4uaGVhZGVyX19maXJzdC1iYW5kX19jb250YWN0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXJfX2ZpcnN0LWJhbmRfX2NvbnRhY3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuLmhlYWRlcl9fZmlyc3QtYmFuZF9fbGljZW5zZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXJfX2ZpcnN0LWJhbmRfX2xpY2Vuc2Uge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLmhlYWRlciB7XG4gICZfX2ZpcnN0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0pIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG4gICZfX2JhbmQge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0pIHtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgfVxuICAmX19maXJzdC1iYW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAmX19jb250YWN0IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtKSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19saWNlbnNlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0pIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HeaderComponent;
    }();
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */"./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);

    /***/
  },

  /***/"./src/app/header/license/license-item/license-item.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/header/license/license-item/license-item.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderLicenseLicenseItemLicenseItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.license-item {\n  transition-duration: 1s;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  left: 101%;\n}\n\n.license-item.active {\n  left: 0;\n}\n\n.license-item__picture img {\n  max-height: 45px;\n  height: 100%;\n}\n\n.license-item__description {\n  width: 100%;\n  position: relative;\n  margin-left: 20px;\n  font-weight: 600;\n}\n\n.license-item__description__text-inside {\n  transform: translateY(-5px);\n}\n\n.license-item__description:before {\n  content: \"\";\n  position: absolute;\n  width: 110%;\n  top: 22px;\n  left: -15px;\n  border-left: 5px solid transparent;\n  border-bottom: 10px solid rgba(128, 128, 128, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2xpY2Vuc2UvbGljZW5zZS1pdGVtL0M6XFxVc2Vyc1xcQW50b2luZU1PUlRFTElFUlxcRGVza3RvcFxcQ1Yvc3JjXFxzdHlsZXNoZWV0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9saWNlbnNlL2xpY2Vuc2UtaXRlbS9saWNlbnNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9saWNlbnNlL2xpY2Vuc2UtaXRlbS9DOlxcVXNlcnNcXEFudG9pbmVNT1JURUxJRVJcXERlc2t0b3BcXENWL3NyY1xcYXBwXFxoZWFkZXJcXGxpY2Vuc2VcXGxpY2Vuc2UtaXRlbVxcbGljZW5zZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUNoS0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURrS0Y7O0FDaktFO0VBQ0UsT0FBQTtBRG1LSjs7QUNoS0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QURrS047O0FDL0pFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkZyQks7QUNzTFQ7O0FDaEtJO0VBQ0UsMkJBQUE7QURrS047O0FDaEtJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrREFBQTtBRGtLTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9saWNlbnNlL2xpY2Vuc2UtaXRlbS9saWNlbnNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmxpY2Vuc2UtaXRlbSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMDElO1xufVxuLmxpY2Vuc2UtaXRlbS5hY3RpdmUge1xuICBsZWZ0OiAwO1xufVxuLmxpY2Vuc2UtaXRlbV9fcGljdHVyZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubGljZW5zZS1pdGVtX19kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmxpY2Vuc2UtaXRlbV9fZGVzY3JpcHRpb25fX3RleHQtaW5zaWRlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLmxpY2Vuc2UtaXRlbV9fZGVzY3JpcHRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEwJTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAtMTVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLmxpY2Vuc2UtaXRlbSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMDElO1xuICAmLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAmX19waWN0dXJlIHtcbiAgICBpbWcge1xuICAgICAgbWF4LWhlaWdodDogNDVweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogJGN2Ym9sZDtcbiAgICAmX190ZXh0LWluc2lkZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTEwJTtcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgcmdiYSgkZ3JheSwgMC41KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/header/license/license-item/license-item.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/header/license/license-item/license-item.component.ts ***!
    \***********************************************************************/
  /*! exports provided: LicenseItemComponent */
  /***/
  function srcAppHeaderLicenseLicenseItemLicenseItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LicenseItemComponent", function () {
      return LicenseItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/utils */"./src/app/assets/utils/index.ts");
    var LicenseItemComponent = /*#__PURE__*/function () {
      function LicenseItemComponent() {
        _classCallCheck(this, LicenseItemComponent);
        this.condition = false;
      }
      _createClass(LicenseItemComponent, [{
        key: "isVisible",
        set: function set(value) {
          this._isVisible = value;
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["isVisible"](this, this._isVisible, true, this.activate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activate",
        value: function activate() {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["waitXms"](this, this.index, this.changeCondition);
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.condition = _assets_utils__WEBPACK_IMPORTED_MODULE_2__["activate"]();
        }
      }]);
      return LicenseItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LicenseItemComponent.prototype, "license", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LicenseItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LicenseItemComponent.prototype, "isVisible", null);
    LicenseItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-license-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./license-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license-item/license-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./license-item.component.scss */"./src/app/header/license/license-item/license-item.component.scss"))["default"]]
    })], LicenseItemComponent);

    /***/
  },

  /***/"./src/app/header/license/license.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/header/license/license.component.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderLicenseLicenseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.license {\n  border-left: 10px solid lightgray;\n  overflow: hidden;\n  padding-left: 15px;\n}\n\n.license__list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.license__list__item {\n  padding: 10px 0;\n  min-height: 45px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2xpY2Vuc2UvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2xpY2Vuc2UvbGljZW5zZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2xpY2Vuc2UvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcaGVhZGVyXFxsaWNlbnNlXFxsaWNlbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUNoS0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURrS0Y7O0FDaktFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRG1LSjs7QUNsS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRG9LTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9saWNlbnNlL2xpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXZWlnaHRcbiRjdmJvbGQ6IDYwMDtcbiRsYm9sZDogODAwO1xuXG4vLyBDb2xvcnNcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRncmF5OiBncmF5O1xuJHdoaXRlOiB3aGl0ZTtcbiRibGFjazogYmxhY2s7XG4kZGFya21vZGU6ICMwNjE0MzU7XG4kZGFya21vZGUtaG92ZXI6ICMwNDBkMjI7XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAwJSxcbiAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxuICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxuKTtcblxuLy8gTGF5b3V0XG4kc21hbGw6IDQwMHB4O1xuJGxzbWFsbDogNjAwcHg7XG4keG1lZGl1bTogODAwcHg7XG4kbWVkaXVtOiAxMDAwcHg7XG4kbG1lZGl1bTogMTIwMHB4O1xuJHhsYXJnZTogMTQwMHB4O1xuJGxhcmdlOiAxNjAwcHg7XG4kbGxhcmdlOiAxODAwcHg7XG5cbi8vIFByZW1hZGUgU3R5bGVzXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrbW9kZTtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkYXJrbW9kZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGUtaG92ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6ICRsYm9sZDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAmOjpiZWZvcmUge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmttb2RlLCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmZhc3RlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgJl9fbW9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTEzLjVweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLy9BbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTQzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWdtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uc2VnbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwNjE0MzU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwZDIyO1xufVxuXG4uYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b246OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5idXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjAsIDUzLCAwLjMpO1xufVxuXG4uYmx1ckVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLmJsdXJFZmZlY3QuZmFzdGVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG59XG4uYmx1ckVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVMZWZ0RWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZUxlZnRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVSaWdodEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlUmlnaHRFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2xpZGVEb3duRWZmZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVEb3duRWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZURvd25FZmZlY3RfX21vcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuXG4uZG90RWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvdEVmZmVjdDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogLTVweDtcbn1cbi5kb3RFZmZlY3Q6OmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTMuNXB4O1xufVxuLmRvdEVmZmVjdC5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjphZnRlciB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3RBbmltYXRpb247XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgZG90QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmxpY2Vuc2Uge1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBsaWdodGdyYXk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5saWNlbnNlX19saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubGljZW5zZV9fbGlzdF9faXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzaGVldHMvc3R5bGVzXCI7XG5cbi5saWNlbnNlIHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJGxpZ2h0Z3JheTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAmX19saXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgJl9faXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./src/app/header/license/license.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/header/license/license.component.ts ***!
    \*****************************************************/
  /*! exports provided: LicenseComponent */
  /***/
  function srcAppHeaderLicenseLicenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LicenseComponent", function () {
      return LicenseComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var LicenseComponent = /*#__PURE__*/function () {
      function LicenseComponent(contactService) {
        _classCallCheck(this, LicenseComponent);
        this.contactService = contactService;
        this.isVisible = false;
      }
      _createClass(LicenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initContact();
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
        }
      }, {
        key: "initContact",
        value: function initContact() {
          this.contact = this.contactService.contact;
        }
      }, {
        key: "activate",
        value: function activate() {
          this.isVisible = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
        }
      }]);
      return LicenseComponent;
    }();
    LicenseComponent.ctorParameters = function () {
      return [{
        type: _assets_services__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], LicenseComponent.prototype, "target", void 0);
    LicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-license",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./license.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/license/license.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./license.component.scss */"./src/app/header/license/license.component.scss"))["default"]]
    })], LicenseComponent);

    /***/
  },

  /***/"./src/app/header/user/user.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/header/user/user.component.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: initial;\n}\n\n.section {\n  margin: 0 -20px;\n  padding: 20px;\n}\n\n.darkmode {\n  background-color: #061435;\n  color: white;\n}\n\n.segment {\n  position: relative;\n}\n\n.segment::before {\n  content: \"\";\n  position: absolute;\n  border-top: 2px solid #061435;\n  border-left: 2px solid #061435;\n  top: 0;\n  left: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.segment::after {\n  content: \"\";\n  position: absolute;\n  border-right: 2px solid #061435;\n  border-bottom: 2px solid #061435;\n  bottom: 0;\n  right: 0;\n  width: 15%;\n  height: 20%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition-duration: 200ms;\n  text-decoration: none;\n}\n\n.clickable:hover {\n  background-color: #040d22;\n}\n\n.button {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 20px 30px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n}\n\n.button::before {\n  z-index: -1;\n  transition: 250ms;\n  content: \"\";\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.button:hover::before, .button:focus::before {\n  background-color: rgba(6, 20, 53, 0.3);\n}\n\n.blurEffect {\n  opacity: 0;\n  transition-duration: 500ms;\n}\n\n.blurEffect.faster {\n  transition-duration: 250ms;\n}\n\n.blurEffect.active {\n  opacity: 1;\n}\n\n.slideLeftEffect {\n  opacity: 0;\n  transform: translateX(20px);\n  transition-duration: 500ms;\n}\n\n.slideLeftEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideRightEffect {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition-duration: 500ms;\n}\n\n.slideRightEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition-duration: 500ms;\n}\n\n.slideDownEffect.active {\n  opacity: 1;\n  transform: none;\n}\n\n.slideDownEffect__more {\n  transform: translateY(-50px);\n}\n\n.dotEffect {\n  position: relative;\n}\n\n.dotEffect::before {\n  background-color: lightgray;\n  transition-duration: 500ms;\n  transition-timing-function: linear;\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 8px;\n  top: 0;\n  left: -5px;\n}\n\n.dotEffect::after {\n  z-index: 1;\n  border-radius: 50%;\n  background-color: lightgray;\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: -13.5px;\n}\n\n.dotEffect.active::before {\n  height: 100%;\n}\n\n.dotEffect.active::after {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: dotAnimation;\n          animation-name: dotAnimation;\n  width: 25px;\n  height: 25px;\n}\n\n@-webkit-keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes dotAnimation {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.user__content {\n  display: flex;\n  max-width: 750px;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  text-align: center;\n}\n\n@media screen and (min-width: 600px) {\n  .user__content {\n    flex-direction: row;\n    text-align: initial;\n  }\n}\n\n.user__content__profile-picture {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid lightgray;\n  position: relative;\n}\n\n@media screen and (min-width: 600px) {\n  .user__content__profile-picture {\n    width: 150px;\n    height: 150px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .user__content__profile-picture {\n    width: 200px;\n    height: 200px;\n  }\n}\n\n.user__content__profile-picture img {\n  width: 100%;\n}\n\n.user__content__profile-picture__easter-egg {\n  position: absolute;\n  bottom: 37%;\n  right: 31%;\n  width: 42%;\n}\n\n.user__content__info {\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n@media screen and (min-width: 400px) {\n  .user__content__info {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .user__content__info {\n    margin: 0;\n    font-size: 28px;\n  }\n}\n\n.user__content__info__name {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL3VzZXIvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXHN0eWxlc2hlZXRzXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaGVhZGVyL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL3VzZXIvQzpcXFVzZXJzXFxBbnRvaW5lTU9SVEVMSUVSXFxEZXNrdG9wXFxDVi9zcmNcXGFwcFxcaGVhZGVyXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSx5QkEvQlM7RUFnQ1QsWUFsQ007QUNNUjs7QUQrQkE7RUFDRSxrQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSx5QkEvRGE7QUNvQ2pCOztBRCtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQTlFTTtFQStFTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFoRk07QUNvRFI7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JKOztBRGdDSTtFQUNFLHNDQUFBO0FDOUJOOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ2hDRjs7QURpQ0U7RUFDRSwwQkFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRG1DQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDaENGOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDL0JKOztBRGlDRTtFQUNFLDRCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRGlDRTtFQUNFLDJCQXRKUTtFQXVKUiwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQy9CSjs7QURpQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFuS1E7RUFvS1IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUMvQko7O0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRHNDQTtFQUNFO0lBQ0UsbUJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxxQkFBQTtFQ25DRjtFRHFDQTtJQUNFLG1CQUFBO0VDbkNGO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxtQkFBQTtFQ25DRjtFRHFDQTtJQUNFLHFCQUFBO0VDbkNGO0VEcUNBO0lBQ0UsbUJBQUE7RUNuQ0Y7QUFDRjs7QUMvSkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURpS0o7O0FDaEtJO0VBUkY7SUFTSSxtQkFBQTtJQUNBLG1CQUFBO0VEbUtKO0FBQ0Y7O0FDbEtJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFTQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBRDRKTjs7QUN2S007RUFIRjtJQUlJLFlBQUE7SUFDQSxhQUFBO0VEMEtOO0FBQ0Y7O0FDektNO0VBUEY7SUFRSSxZQUFBO0lBQ0EsYUFBQTtFRDRLTjtBQUNGOztBQ3ZLTTtFQUNFLFdBQUE7QUR5S1I7O0FDdktNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUR5S1I7O0FDdEtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEd0tOOztBQ3ZLTTtFQUhGO0lBSUksZUFBQTtFRDBLTjtBQUNGOztBQ3pLTTtFQU5GO0lBT0ksU0FBQTtJQUNBLGVBQUE7RUQ0S047QUFDRjs7QUMzS007RUFDRSxnQkZsREM7QUMrTlQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VpZ2h0XG4kY3Zib2xkOiA2MDA7XG4kbGJvbGQ6IDgwMDtcblxuLy8gQ29sb3JzXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kZ3JheTogZ3JheTtcbiR3aGl0ZTogd2hpdGU7XG4kYmxhY2s6IGJsYWNrO1xuJGRhcmttb2RlOiAjMDYxNDM1O1xuJGRhcmttb2RlLWhvdmVyOiAjMDQwZDIyO1xuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXG4gIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDEwMCVcbik7XG5cbi8vIExheW91dFxuJHNtYWxsOiA0MDBweDtcbiRsc21hbGw6IDYwMHB4O1xuJHhtZWRpdW06IDgwMHB4O1xuJG1lZGl1bTogMTAwMHB4O1xuJGxtZWRpdW06IDEyMDBweDtcbiR4bGFyZ2U6IDE0MDBweDtcbiRsYXJnZTogMTYwMHB4O1xuJGxsYXJnZTogMTgwMHB4O1xuXG4vLyBQcmVtYWRlIFN0eWxlc1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGFya21vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya21vZGU7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRhcmttb2RlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGFya21vZGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmttb2RlLWhvdmVyO1xuICB9XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAkbGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrbW9kZSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5mYXN0ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZUxlZnRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5zbGlkZURvd25FZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gICZfX21vcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmF5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01cHg7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0xMy41cHg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBkb3RBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjE0MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlZ21lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjAlO1xufVxuLnNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDYxNDM1O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2MTQzNTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MGQyMjtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uOjpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogMjUwbXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YmVmb3JlLCAuYnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDIwLCA1MywgMC4zKTtcbn1cblxuLmJsdXJFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5ibHVyRWZmZWN0LmZhc3RlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xufVxuLmJsdXJFZmZlY3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlTGVmdEVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc2xpZGVMZWZ0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlUmlnaHRFZmZlY3Qge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cbi5zbGlkZVJpZ2h0RWZmZWN0LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNsaWRlRG93bkVmZmVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnNsaWRlRG93bkVmZmVjdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGVEb3duRWZmZWN0X19tb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cblxuLmRvdEVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3RFZmZlY3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogOHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG4uZG90RWZmZWN0OjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTEzLjVweDtcbn1cbi5kb3RFZmZlY3QuYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG90RWZmZWN0LmFjdGl2ZTo6YWZ0ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICBhbmltYXRpb24tbmFtZTogZG90QW5pbWF0aW9uO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi51c2VyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAudXNlcl9fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICB9XG59XG4udXNlcl9fY29udGVudF9fcHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnVzZXJfX2NvbnRlbnRfX3Byb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC51c2VyX19jb250ZW50X19wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG4udXNlcl9fY29udGVudF9fcHJvZmlsZS1waWN0dXJlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXJfX2NvbnRlbnRfX3Byb2ZpbGUtcGljdHVyZV9fZWFzdGVyLWVnZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNyU7XG4gIHJpZ2h0OiAzMSU7XG4gIHdpZHRoOiA0MiU7XG59XG4udXNlcl9fY29udGVudF9faW5mbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC51c2VyX19jb250ZW50X19pbmZvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC51c2VyX19jb250ZW50X19pbmZvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG4udXNlcl9fY29udGVudF9faW5mb19fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXNoZWV0cy9zdHlsZXNcIjtcblxuLnVzZXIge1xuICAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbHNtYWxsKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICB9XG4gICAgJl9fcHJvZmlsZS1waWN0dXJlIHtcbiAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbHNtYWxsKSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR4bWVkaXVtKSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIH1cbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAkbGlnaHRncmF5O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAmX19lYXN0ZXItZWdnIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDM3JTtcbiAgICAgICAgcmlnaHQ6IDMxJTtcbiAgICAgICAgd2lkdGg6IDQyJTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9faW5mbyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsc21hbGwpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRjdmJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/header/user/user.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/header/user/user.component.ts ***!
    \***********************************************/
  /*! exports provided: UserComponent */
  /***/
  function srcAppHeaderUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/assets/services */"./src/app/assets/services/index.ts");
    /* harmony import */
    var _assets_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../assets/utils */"./src/app/assets/utils/index.ts");
    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(userService) {
        _classCallCheck(this, UserComponent);
        this.userService = userService;
        this.condition1 = false;
        this.condition2 = false;
        this.condition3 = false;
      }
      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initUser();
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifVisible"](this, this.target.nativeElement, 80, this.activate);
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["ifElseVisible"](this, this.target.nativeElement, 70, this.easterEggOff, this.easterEggOn);
        }
      }, {
        key: "initUser",
        value: function initUser() {
          this.user = this.userService.user;
        }
      }, {
        key: "activate",
        value: function activate() {
          var _this2 = this;
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["waitXms"](this, 0, function () {
            return _this2.condition1 = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
          });
          _assets_utils__WEBPACK_IMPORTED_MODULE_3__["waitXms"](this, 1, function () {
            return _this2.condition2 = _assets_utils__WEBPACK_IMPORTED_MODULE_3__["activate"]();
          });
        }
      }, {
        key: "easterEggOn",
        value: function easterEggOn() {
          this.condition3 = true;
        }
      }, {
        key: "easterEggOff",
        value: function easterEggOff() {
          this.condition3 = false;
        }
      }]);
      return UserComponent;
    }();
    UserComponent.ctorParameters = function () {
      return [{
        type: src_app_assets_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("target", {
      "static": true
    })], UserComponent.prototype, "target", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./user.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./user.component.scss */"./src/app/header/user/user.component.scss"))["default"]]
    })], UserComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\AntoineMORTELIER\Desktop\CV\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map