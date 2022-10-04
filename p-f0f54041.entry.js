import{r as e,d as a,h as t,g as i}from"./p-ae706b1d.js";import{B as d}from"./p-150435d0.js";const r="dxp-breadcrumb-item",p=class{constructor(a){e(this,a),this.containerTitleAriaText="Breadcrumb",this.hideCurrentPage=!1,this.homeNodeAriaText="Home",this.isInternalLink=!0,this.navStartLevel=0,this.rootSitePath="",this.showHiddenNavItems=!1}breadcrumbItemsChange(){this.dataLookup=this.breadcrumbItemsData,this.currentRouteUrl=this.getUrl(),this.buildBreadcrumbItems()}async componentWillLoad(){this.base=new d(this,a),this.rootLink=this.rootLink?this.rootLink:location.origin,document.querySelector("dxp-breadcrumb")&&(this.childCount=document.querySelector("dxp-breadcrumb").children.length),this.breadcrumbItemsData?(this.dataLookup=this.breadcrumbItemsData,this.currentRouteUrl=this.getUrl(),this.buildBreadcrumbItems()):this.apiUrl&&(this.dataLookup=await this.getData(),this.dataLookup=this.dataLookup.pagesData,this.currentRouteUrl=this.getUrl(),this.buildBreadcrumbItems())}componentDidLoad(){if(this.hideItemsOnMobile(),!this.breadcrumbItems){const e=this.element.querySelectorAll(r);for(const a of Object.keys(e))e[a].querySelector("li").style.zIndex=e.length-(Number(a)+1);e[e.length-1]&&e[e.length-1].querySelector("li").classList.add("current-page")}const e=this.element.querySelector(r);e&&(e.querySelector("li").style.paddingLeft="0px")}handleResizeEvent(){const e=window.innerWidth;if(e>767){this.element.querySelector(r).querySelector("li").classList.remove("dxp-hidden-md-down");const e=this.element.querySelectorAll(".dxp-hidden-md-down");for(const a of e)a.classList.remove("dxp-hidden-md-down");const a=this.element.querySelectorAll(r);for(const e of a)e.classList.remove("dxp-hidden-md-down")}else e<767&&this.hideItemsOnMobile()}onpopstate(){a.localeTranslator.translate(this.applicationName)&&(this.currentRouteUrl=this.getUrl(),this.buildBreadcrumbItems())}routingHandler(e){this.base.routingEventListener(e)}async refreshBreadcrumbItems(){this.currentRouteUrl=this.getUrl(),this.buildBreadcrumbItems()}buildBreadcrumbItems(){this.breadcrumbItems=[];const e=this.getRouteArray();let a,t=this.dataLookup;e.forEach(((e,i)=>{t&&t.length>0&&(a=0!==i?`${a}/${e}`:e,t=this.searchAndAddItem(e.toLowerCase(),a,t,i))}))}getData(){try{return a.api(this.apiUrl)}catch(e){a.log.error(this.element.tagName,"getData()","fetch failed for",e)}}getRouteArray(){let e=[];if(this.currentRouteUrl){const a=this.currentRouteUrl.indexOf("#");e=-1!==a?this.currentRouteUrl.substring(a+2).split("/"):this.currentRouteUrl.substring(1).split("/")}return e}getUrl(){let e;return e=location.hash.length&&location.hash.includes("/")?location.hash:-1!==location.pathname.indexOf(".")?location.pathname.split(".")[0]:location.pathname,e.replace(this.rootSitePath,"")}hideItemsOnMobile(){if(window.innerWidth<767){const e=this.element.querySelectorAll(r),a=this.element.querySelectorAll(r);this.element.querySelector(r).querySelector("li").classList.add("dxp-hidden-md-down");for(let a=0;a<e.length-2;a++)e[a].classList.add("dxp-hidden-md-down");if(a)for(let e=0;e<a.length-2;e++)a[e].querySelector(".dxp-breadcrumb-item").classList.add("dxp-hidden-md-down")}}searchAndAddItem(e,a,t,i){let d=[];const r=e.indexOf("?")>=0?e.substring(0,e.indexOf("?")):e;return t.find((e=>{if(e.linkId.toLowerCase()===r){const t={link:e.link,linkId:e.linkId,routePath:a,title:e.title,showNavItem:!!this.showHiddenNavItems||!JSON.parse(e.hideInNav)};i>=this.navStartLevel&&this.breadcrumbItems.push(t),e.child&&(d=e.child)}})),d}render(){return a.log.debug(this.element.tagName,"render()","in dxp-breadcrumb render() : PRODUCTION"),t("div",{class:`${this.base.componentClass()} breadcrumb-nav`,dir:this.dir,"data-theme":this.theme},t("nav",{"aria-label":a.localeTranslator.translate(this.containerTitleAriaText)},t("ul",{class:"dxp-breadcrumb-list",role:"list"},this.breadcrumbItems&&t("dxp-breadcrumb-item",{role:"none","index-val":this.breadcrumbItems.length,link:this.rootLink,"is-internal-link":this.isInternalLink,"accessibility-text":a.localeTranslator.translate(this.homeNodeAriaText),"link-title":a.localeTranslator.translate(this.homeNodeAriaText)}),this.breadcrumbItems?this.breadcrumbItems.map(((e,a)=>e.showNavItem&&t("dxp-breadcrumb-item",{role:"none","index-val":this.breadcrumbItems.length-(a+1),"current-page":a===this.breadcrumbItems.length-1,link:e.link,"is-internal-link":e.isInternalLink,"accessibility-text":e.title,"link-title":e.title,"hide-current-page":this.hideCurrentPage}))):[t("dxp-breadcrumb-item",{role:"none",link:this.rootLink,"is-internal-link":this.isInternalLink,"accessibility-text":a.localeTranslator.translate(this.homeNodeAriaText),"link-title":a.localeTranslator.translate(this.homeNodeAriaText)}),t("slot",null)])))}get element(){return i(this)}static get watchers(){return{breadcrumbItemsData:["breadcrumbItemsChange"]}}};p.style='@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-white.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:after,.dxp .dxp-theme-white.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:before{background:none}.dxp .dxp-theme-white.dxp-breadcrumb-item li:before{background:#444340}.dxp .dxp-theme-white.dxp-breadcrumb-item li:after{background:#fff}.dxp .dxp-theme-white.dxp-breadcrumb-item a{color:#444340;padding:2px 5px 3px}.dxp .dxp-theme-white.dxp-breadcrumb-item a:hover{color:#444340;text-decoration:underline}.dxp .dxp-theme-white.dxp-breadcrumb-item a:focus-visible{border:1px solid #444340}.dxp .dxp-theme-white.dxp-breadcrumb-item a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-white.dxp-breadcrumb-item a:focus{display:flex;box-sizing:border-box;padding:0 4px 1px}@media screen and (max-width:767px){.dxp .dxp-theme-white.dxp-breadcrumb-item a:after,.dxp .dxp-theme-white.dxp-breadcrumb-item a:before{background:#444340}}.dxp .dxp-theme-white.dxp-breadcrumb-item a.current-page-link{color:#444340;text-decoration:none;outline:0;border:0;padding:0 5px;cursor:auto}.dxp .dxp-theme-white.dxp-breadcrumb-item a.current-page-link:after,.dxp .dxp-theme-white.dxp-breadcrumb-item a.current-page-link:before{display:none}.dxp .dxp-theme-white .icon-home a{height:32px;width:32px;padding:0 20px}.dxp .dxp-theme-white .icon-home a:hover{color:#c4c0bb;text-decoration:underline;background-position:-37px 5px}.dxp .dxp-theme-white .icon-home a:focus-visible{border:1px solid #c4c0bb}.dxp .dxp-theme-white .icon-home a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-white .icon-home a:focus{background-position:7px 4px;height:32px;width:32px;padding:0 19px}.dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,.dxp .dxp-theme-white.dxp-breadcrumb-item li a span,.dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ar) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(ar) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ja) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(ja) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(zh) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(zh) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ko) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(ko) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ka) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(ka) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(az) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(az) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(el) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(el) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-white.dxp-breadcrumb-item li:last-child li span,[lang]:lang(th) .dxp .dxp-theme-white.dxp-breadcrumb-item li a span,[lang]:lang(th) .dxp .dxp-theme-white.dxp-breadcrumb li a{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-black.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:after,.dxp .dxp-theme-black.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:before{background:none}.dxp .dxp-theme-black.dxp-breadcrumb-item li:before{background:#fff}.dxp .dxp-theme-black.dxp-breadcrumb-item li:after{background:#141413}.dxp .dxp-theme-black.dxp-breadcrumb-item a{color:#fff;padding:2px 5px 3px}.dxp .dxp-theme-black.dxp-breadcrumb-item a:hover{color:#fff;text-decoration:underline}.dxp .dxp-theme-black.dxp-breadcrumb-item a:focus-visible{border:1px solid #fff}.dxp .dxp-theme-black.dxp-breadcrumb-item a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-black.dxp-breadcrumb-item a:focus{display:flex;box-sizing:border-box;padding:0 4px 1px}@media screen and (max-width:767px){.dxp .dxp-theme-black.dxp-breadcrumb-item a:after,.dxp .dxp-theme-black.dxp-breadcrumb-item a:before{background:#fff}}.dxp .dxp-theme-black.dxp-breadcrumb-item a.current-page-link{color:#fff;text-decoration:none;outline:0;border:0;padding:0 5px;cursor:auto}.dxp .dxp-theme-black.dxp-breadcrumb-item a.current-page-link:after,.dxp .dxp-theme-black.dxp-breadcrumb-item a.current-page-link:before{display:none}.dxp .dxp-theme-black .icon-home a{height:32px;width:32px;padding:0 20px}.dxp .dxp-theme-black .icon-home a:hover{color:#c4c0bb;text-decoration:underline;background-position:-37px 5px}.dxp .dxp-theme-black .icon-home a:focus-visible{border:1px solid #c4c0bb}.dxp .dxp-theme-black .icon-home a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-black .icon-home a:focus{background-position:7px 4px;height:32px;width:32px;padding:0 19px}.dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,.dxp .dxp-theme-black.dxp-breadcrumb-item li a span,.dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ar) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(ar) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ja) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(ja) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(zh) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(zh) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ko) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(ko) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ka) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(ka) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(az) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(az) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(el) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(el) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-black.dxp-breadcrumb-item li:last-child li span,[lang]:lang(th) .dxp .dxp-theme-black.dxp-breadcrumb-item li a span,[lang]:lang(th) .dxp .dxp-theme-black.dxp-breadcrumb li a{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-light-grey.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:after,.dxp .dxp-theme-light-grey.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:before{background:none}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:before{background:#444340}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:after{background:#f8f7f5}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a{color:#444340;padding:2px 5px 3px}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:hover{color:#444340;text-decoration:underline}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:focus-visible{border:1px solid #444340}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:focus{display:flex;box-sizing:border-box;padding:0 4px 1px}@media screen and (max-width:767px){.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:after,.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a:before{background:#444340}}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a.current-page-link{color:#444340;text-decoration:none;outline:0;border:0;padding:0 5px;cursor:auto}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a.current-page-link:after,.dxp .dxp-theme-light-grey.dxp-breadcrumb-item a.current-page-link:before{display:none}.dxp .dxp-theme-light-grey .icon-home a{height:32px;width:32px;padding:0 20px}.dxp .dxp-theme-light-grey .icon-home a:hover{color:#c4c0bb;text-decoration:underline;background-position:-37px 5px}.dxp .dxp-theme-light-grey .icon-home a:focus-visible{border:1px solid #c4c0bb}.dxp .dxp-theme-light-grey .icon-home a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-light-grey .icon-home a:focus{background-position:7px 4px;height:32px;width:32px;padding:0 19px}.dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,.dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,.dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-breadcrumb-item li a span,[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-breadcrumb li a{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-rich-grey.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:after,.dxp .dxp-theme-rich-grey.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:before{background:none}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:before{background:#fff}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:after{background:#323231}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a{color:#fff;padding:2px 5px 3px}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:hover{color:#fff;text-decoration:underline}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:focus-visible{border:1px solid #fff}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:focus{display:flex;box-sizing:border-box;padding:0 4px 1px}@media screen and (max-width:767px){.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:after,.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a:before{background:#fff}}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a.current-page-link{color:#fff;text-decoration:none;outline:0;border:0;padding:0 5px;cursor:auto}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a.current-page-link:after,.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item a.current-page-link:before{display:none}.dxp .dxp-theme-rich-grey .icon-home a{height:32px;width:32px;padding:0 20px}.dxp .dxp-theme-rich-grey .icon-home a:hover{color:#c4c0bb;text-decoration:underline;background-position:-37px 5px}.dxp .dxp-theme-rich-grey .icon-home a:focus-visible{border:1px solid #c4c0bb}.dxp .dxp-theme-rich-grey .icon-home a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-rich-grey .icon-home a:focus{background-position:7px 4px;height:32px;width:32px;padding:0 19px}.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,.dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,.dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li:last-child li span,[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-breadcrumb-item li a span,[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-breadcrumb li a{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-b2b.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:after,.dxp .dxp-theme-b2b.dxp-breadcrumb .dxp-breadcrumb-list>:last-child:not(:only-child) li:before{background:none}.dxp .dxp-theme-b2b.dxp-breadcrumb-item li:before{background:#444340}.dxp .dxp-theme-b2b.dxp-breadcrumb-item li:after{background:#fff}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a{color:#444340;padding:2px 5px 3px}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:hover{color:#444340;text-decoration:underline}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:focus-visible{border:1px solid #444340}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:focus{display:flex;box-sizing:border-box;padding:0 4px 1px}@media screen and (max-width:767px){.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:after,.dxp .dxp-theme-b2b.dxp-breadcrumb-item a:before{background:#444340}}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a.current-page-link{color:#444340;text-decoration:none;outline:0;border:0;padding:0 5px;cursor:auto}.dxp .dxp-theme-b2b.dxp-breadcrumb-item a.current-page-link:after,.dxp .dxp-theme-b2b.dxp-breadcrumb-item a.current-page-link:before{display:none}.dxp .dxp-theme-b2b .icon-home a{height:32px;width:32px;padding:0 20px}.dxp .dxp-theme-b2b .icon-home a:hover{color:#c4c0bb;text-decoration:underline;background-position:-37px 5px}.dxp .dxp-theme-b2b .icon-home a:focus-visible{border:1px solid #c4c0bb}.dxp .dxp-theme-b2b .icon-home a:focus:not(:focus-visible){border:none}.dxp .dxp-theme-b2b .icon-home a:focus{background-position:7px 4px;height:32px;width:32px;padding:0 19px}.dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,.dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,.dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li:last-child li span,[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-breadcrumb-item li a span,[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-breadcrumb li a{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.dxp-breadcrumb{padding:30px 0 32px 0;}.dxp-breadcrumb.breadcrumb-nav .dxp-breadcrumb-list{display:flex;margin:0;align-items:center}@media screen and (max-width: 767px){.dxp-breadcrumb .dxp-breadcrumb-item div li{padding-left:10px}.dxp-breadcrumb .dxp-breadcrumb-item div li a{position:relative}.dxp-breadcrumb .dxp-breadcrumb-item div li a::before,.dxp-breadcrumb .dxp-breadcrumb-item div li a::after{content:"";display:block;position:relative;width:10px;height:1px;transform:rotate(-45deg);top:-3px}.dxp-breadcrumb .dxp-breadcrumb-item div li a::after{transform:rotate(45deg);top:3px}.dxp-breadcrumb .dxp-breadcrumb-item div li a span{display:none}.dxp-breadcrumb *::-ms-backdrop,.dxp-breadcrumb .dxp-breadcrumb-item span{padding-top:6px}}';export{p as dxp_breadcrumb}