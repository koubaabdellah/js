import{r as t,c as i,d as e,h as a,g as n}from"./p-ae706b1d.js";import{B as c}from"./p-150435d0.js";const o=class{constructor(e){t(this,e),this.actionButtonEvent=i(this,"actionButtonEvent",7),this.collapseExpandEvent=i(this,"collapseExpandEvent",7),this.ctaBtnLength="",this.expanded=!1}expandedChangeHandler(){this.toggle()}componentWillLoad(){this.base=new c(this,e),this.accordionItemId=this.accordionItemId?this.accordionItemId:`dxp-accordion-item-${e.util.getUniqueId()}`,this.subtitle&&(this.subtitle=`${e.localeTranslator.translate(this.subtitle)}&lrm;`),this.description&&(this.description=`${e.localeTranslator.translate(this.description)}&lrm;`),this.actionButtonList&&(this.ctaBtnLength=`content-padding-${this.actionButtonList.length}`)}componentDidLoad(){if(this.setupClickListener(),this.setupKeypressListner(),this.toggle(),location.href.includes(`#${this.accordionItemId}`)){this.element.focus(),this.expanded=!0;const t=window.scrollY||document.documentElement.scrollTop,i=90,e=this.element.getBoundingClientRect().top+t-i;if(navigator.userAgent.indexOf("Chrome")>-1)window.scrollTo({top:e,behavior:"smooth"});else{this.element.scrollIntoView();const t=window.scrollY;t&&window.scroll(0,t-i)}}if(!this.actionButtonList){const t=this.element.querySelectorAll("dxp-cta");t.length&&(t.forEach((t=>{t.addEventListener("click",(t=>{this.emitEventOnActionBtn(t)}))})),this.ctaBtnLength=`content-padding-${t.length}`)}}keydownHandler(t){["ArrowDown"].includes(t.code)&&this.expanded?(t.stopPropagation(),this.emitEventOnUserAction(t,"keydown"),this.header.removeAttribute("aria-describedby"),setTimeout((()=>{this.header.setAttribute("aria-describedby",`${this.accordionItemId}-content`)}),500)):this.header.removeAttribute("aria-describedby")}routingHandler(t){this.base.routingEventListener(t)}emitEventOnActionBtn(t){this.actionButtonEvent.emit({target:t.target,buttonId:t.target.id})}emitEventOnUserAction(t,i){this.collapseExpandEvent.emit({e:t,trigger:i,accordionItemId:this.accordionItemId,itemTitle:this.itemTitle,expanded:this.expanded})}onMouseEnterHandler(){this.header.classList.add("acc-hover")}onMouseLeaveHandler(){this.header.classList.remove("acc-hover")}renderActionButtons(){return this.actionButtonList.map((t=>a("dxp-cta",{type:t.type,"link-type":t.linkType,text:t.text,href:"javascript:void(0)",src:t.src,alt:t.alt,"align-icon":t.alignIcon,"aria-label":t.ariaLabel,"cta-id":t.ctaId,"dtm-cta-title":t.dtmCtaTitle,"link-icon":t.linkIcon,onClick:t=>this.emitEventOnActionBtn(t)})))}setupClickListener(){this.header.addEventListener("click",(t=>{t.x&&t.y&&(t.stopPropagation(),this.expanded=!this.expanded,this.emitEventOnUserAction(t,"click"))}),!0)}setupKeypressListner(){this.header.addEventListener("keypress",(t=>{["Enter","Space"].includes(t.code)&&(t.stopPropagation(),this.expanded=!this.expanded,this.emitEventOnUserAction(t,"keypress"))}),!0)}toggle(){this.expanded?(this.header&&this.header.classList.add("acc-label--active"),this.content&&(this.content.parentElement.classList.add("acc-item-select"),this.content.classList.add("acc-top"),this.content.classList.remove("dxp-none"),this.content.style.maxHeight=this.content.scrollHeight&&this.content.offsetHeight?`${this.content.scrollHeight+this.content.offsetHeight}px`:"none",setTimeout((()=>{this.content.style.maxHeight="none"}),200))):(this.header&&this.header.classList.remove("acc-label--active"),this.content&&(this.content.removeAttribute("style"),this.content.parentElement.classList.remove("acc-item-select"),this.content.classList.remove("acc-top"),this.content.classList.add("dxp-none")))}render(){return e.log.debug(this.element.tagName,"render()","in dxp-accordion-item render() : PRODUCTION"),a("div",{id:this.accordionItemId,class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},a("div",{class:"dxp-row"},a("div",{class:"dxp-col-12"},a("div",{class:"accordion"},a("div",{class:"acc-item"},a("div",{class:"btn-container"},a("button",{class:"acc-label",ref:t=>this.header=t,id:`${this.accordionItemId}-label`,"aria-label":e.localeTranslator.translate(this.btnAccessibilityText),"aria-expanded":`${this.expanded}`,"aria-controls":`${this.accordionItemId}-content`,onMouseEnter:this.onMouseEnterHandler.bind(this),onMouseLeave:this.onMouseLeaveHandler.bind(this)},a("span",{class:`item-title ${this.ctaBtnLength}`,innerHTML:`${e.localeTranslator.translate(this.itemTitle)}&lrm;`}),a("i",{class:"icon-plus","aria-hidden":"true"}),this.subtitle&&a("span",{class:"item--subtitle",innerHTML:e.localeTranslator.translate(this.subtitle)})),a("div",{class:"action-buttons "+(this.expanded?"":"dxp-none")},this.actionButtonList?this.renderActionButtons():a("slot",{name:"action-buttons"}))),a("div",{class:"acc-content",ref:t=>this.content=t,id:`${this.accordionItemId}-content`,role:"region","aria-labelledby":`${this.accordionItemId}-label`},a("slot",{name:"top"}),this.description&&a("p",{class:"item--desc",innerHTML:e.localeTranslator.translate(this.description)}),a("slot",{name:"bottom"}),a("slot",null)))))))}get element(){return n(this)}static get watchers(){return{expanded:["expandedChangeHandler"]}}};o.style='.dxp-accordion-item ul,.dxp-accordion-item ol{padding-left:0.75rem}.dxp-accordion-item .acc-label{display:block;cursor:pointer;border-radius:0;position:relative;margin-bottom:0;padding:1rem 0 0.875rem;background-color:transparent;text-align:left;border:none;width:100%}.dxp-accordion-item .acc-label .item--subtitle{cursor:pointer;position:relative;margin-bottom:0;margin-top:0.375rem;display:block;line-height:1.25rem;padding-right:1.25rem;z-index:2}.dxp-accordion-item .acc-label .icon-plus{width:0.938rem;height:0.938rem;position:absolute;right:0.938rem;top:50%;transform:translateY(-50%);z-index:1}.dxp-accordion-item .acc-label .icon-plus:before,.dxp-accordion-item .acc-label .icon-plus:after{content:"";position:absolute;left:0.438rem;width:0.063rem;height:100%;transition:transform 0.25s ease-out, -webkit-transform 0.25s ease-out}.dxp-accordion-item .acc-label .icon-plus:before{transform:rotate(90deg)}.dxp-accordion-item .acc-label .item-title{display:block;line-height:1.5rem;padding-right:2.5rem;position:relative;z-index:2}.dxp-accordion-item .acc-label:first-child{margin-top:0}.dxp-accordion-item .acc-label--active .icon-plus:after{transform:rotate(90deg);transition:transform 0.25s ease-out, -webkit-transform 0.25s ease-out}.dxp-accordion-item .acc-bottom.active{border-bottom:none}.dxp-accordion-item .acc-content{max-height:0;overflow:hidden;-webkit-transition:max-height 0.2s ease-out;-o-transition:max-height 0.2s ease-out;transition:max-height 0.2s ease-out;padding-bottom:1rem}.dxp-accordion-item .acc-content .item--desc{margin-bottom:0}.dxp-accordion-item .btn-container{position:relative;display:flex;flex-direction:column}.dxp-accordion-item .btn-container .action-buttons{display:flex;margin-left:auto;margin-bottom:1rem}.dxp-accordion-item .btn-container dxp-cta{display:block}.dxp-accordion-item .btn-container dxp-cta+dxp-cta{margin-left:0.8rem}@media (min-width: 576px){.dxp-accordion-item .acc-label{padding:1.313rem 0 1.063rem}.dxp-accordion-item .acc-label .icon-plus{height:1.063rem;right:0.938rem}.dxp-accordion-item .acc-label .icon-plus:before,.dxp-accordion-item .acc-label .icon-plus:after{content:"";left:0.5rem}.dxp-accordion-item .acc-content{padding-bottom:1.5rem}}@media (min-width: 768px){.dxp-accordion-item .acc-label .content-padding-1{padding-right:5.5rem}.dxp-accordion-item .acc-label .content-padding-2{padding-right:10.5rem}.dxp-accordion-item .acc-label .content-padding-3{padding-right:15.5rem}.dxp-accordion-item .acc-label .content-padding-4{padding-right:20.5rem}.dxp-accordion-item .acc-label .content-padding-5{padding-right:25.5rem}.dxp-accordion-item .btn-container{display:block}.dxp-accordion-item .btn-container .action-buttons{position:absolute;top:0;right:3.375rem;z-index:2;align-items:center;height:100%;margin-bottom:0}.dxp-accordion-item .btn-container dxp-cta{display:block}.dxp-accordion-item .btn-container dxp-cta+dxp-cta{margin-left:1.25rem}}.dxp-accordion-item[dir=rtl] .acc-label{padding:1rem 0 0.875rem}.dxp-accordion-item[dir=rtl] .acc-label .item--subtitle{padding-right:0;padding-left:1.25rem;text-align:right}.dxp-accordion-item[dir=rtl] .acc-label .icon-plus{left:0.938rem;right:auto}.dxp-accordion-item[dir=rtl] .acc-label .item-title{padding-right:0;padding-left:2.5rem;text-align:right}.dxp-accordion-item[dir=rtl] .btn-container .action-buttons{margin-right:auto;margin-left:initial}.dxp-accordion-item[dir=rtl] .btn-container dxp-cta{display:block}.dxp-accordion-item[dir=rtl] .btn-container dxp-cta+dxp-cta{margin-right:0.8rem;margin-left:0}@media (min-width: 576px){.dxp-accordion-item[dir=rtl] .acc-label{padding:1.313rem 0 1.063rem}.dxp-accordion-item[dir=rtl] .acc-label .icon-plus{left:0.938rem;right:auto}.dxp-accordion-item[dir=rtl] .acc-label .item-title,.dxp-accordion-item[dir=rtl] .acc-label .item--subtitle{padding-left:3.25rem}}@media (min-width: 768px){.dxp-accordion-item[dir=rtl] .acc-label .content-padding-1{padding-left:5.5rem;padding-right:0}.dxp-accordion-item[dir=rtl] .acc-label .content-padding-2{padding-left:10.5rem;padding-right:0}.dxp-accordion-item[dir=rtl] .acc-label .content-padding-3{padding-left:15.5rem;padding-right:0}.dxp-accordion-item[dir=rtl] .acc-label .content-padding-4{padding-left:20.5rem;padding-right:0}.dxp-accordion-item[dir=rtl] .acc-label .content-padding-5{padding-left:25.5rem;padding-right:0}.dxp-accordion-item[dir=rtl] .btn-container .action-buttons{right:auto;left:3.375rem}.dxp-accordion-item[dir=rtl] .btn-container dxp-cta{display:block}.dxp-accordion-item[dir=rtl] .btn-container dxp-cta+dxp-cta{margin-right:1.25rem;margin-left:0}}';export{o as dxp_accordion_item}