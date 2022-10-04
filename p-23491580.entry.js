import{r as e,d as t,h as o,g as i}from"./p-ae706b1d.js";import{B as a}from"./p-150435d0.js";const n=class{constructor(t){e(this,t),this.subscriptionEmailAddress="",this.contactMessage="We will reach out to you soon ",this.emailAccessibilityText="Enter email address to subscribe",this.emailSubscribeInputValidationMessage="Please enter valid email id",this.emailSubscribePlaceholder="me@example.com",this.emailSubscriptionDescription="Get in touch by filling out the form below.",this.emailSubscriptionSuccess="Email Subscribe Success",this.emailSubscriptionTitle="Subscribe to email",this.emailText="Email",this.isInternalLink=!0,this.showAccessibilityIcon=!1,this.submitBtnText="Submit",this.subscribeButtonAriaText="this button opens email subscription form in a modal pop-up",this.subscribeButtonText="Subscribe",this.subscriptionAlignment="left",this.thankyouMessage="Thank you!"}componentWillLoad(){this.base=new a(this,t)}componentDidLoad(){const e=this.element.querySelector("[slot='content-link-list']");if(e&&"horizontal"===e.getAttribute("orientation")){const t=window.innerWidth;t<767?e.setAttribute("orientation","vertical"):t>768&&e.setAttribute("orientation","horizontal")}const t=this.element.querySelector(".content-list"),o=this.element.querySelectorAll("[slot='content-list']"),i=document.createElement("div");i.setAttribute("class",`column-${o.length}`),Array.from(o).forEach((e=>{i.appendChild(e)})),t&&t.appendChild(i)}handleResizeEvent(){const e=window.innerWidth,t=this.element.querySelector("[slot='content-link-list']");t&&t.setAttribute("orientation",e<992?"vertical":"horizontal")}inputEntered(e){this.subscriptionEmailAddress=e.detail.value,this.isValidEmailAddress=e.detail.isValid}routingHandler(e){this.base.routingEventListener(e)}calculateColumnWidths(){let e=[];const t=[[2,2],[4,8],[1,1],[3,4],[2,4]];e=[t[0][0],t[1][0],t[2][0],t[3][0],t[4][0]],this.copyright||(e[0]=0),this.footerlinks||(e[1]=0),this.showAccessibilityIcon||(e[2]=0),this.countrylanguageselector||(e[3]=0),this.sociallinks||(e[4]=0);let o=12-e.reduce(((e,t)=>e+t),0);for(;o>0;)e.forEach(((i,a)=>{o>1&&0!==i&&t[a][1]-i>2?(e[a]+=2,o-=2):o>0&&0!==i&&(e[a]+=1,o-=1)}));return e}emailSubscriptionButtonHandler(e){e.preventDefault(),this.resetEmailSubscriptionForm();const o=this.element.querySelector('dxp-modal[content-id="subscribe-form"]');if(o.openModal){const i=[{type:"email",label:t.localeTranslator.translate(this.emailText),value:"",optional:!1,maxlength:100,"accessibility-text":t.localeTranslator.translate(this.emailAccessibilityText),placeholder:t.localeTranslator.translate(this.emailSubscribePlaceholder),"validation-message":t.localeTranslator.translate(this.emailSubscribeInputValidationMessage)}];this.base.createNestedMarkup(this.inputContainer,"dxp-input",i),o.openModal(e),o.focus()}}emailSubscriptionSubmitHandler(e){const o=this.element.querySelector('dxp-modal[content-id="subscribe-form"]'),i=this.element.querySelector('dxp-modal[content-id="subscribe-status"]');o.closeModal&&(this.displayContactMessage=t.localeTranslator.translate(this.contactMessage),this.contactMessage&&t.localeTranslator.translate(this.contactMessage).indexOf("$user-email")&&(this.displayContactMessage=t.localeTranslator.translate(this.contactMessage).replace("$user-email",this.subscriptionEmailAddress)),o.closeModal(),i.openModal(e),i.focus())}renderQuicklinkContentListAndSubscription(){return[o("div",{class:"content-cta-list"},o("div",{class:"dxp-row"},o("div",{class:"dxp-col-lg-3 dxp-col-sm-7 dxp-col-md-5 dxp-col-12 cta-list-data"},this.quicklinks&&this.ctaListData?o("dxp-cta-list",{orientation:"vertical","title-style":"dxp-title-sm","title-text":this.ctaListData.titleText},this.ctaListData.ctaList.map((e=>o("dxp-cta",{"link-type":e.linkType,"align-icon":e.alignIcon,text:e.text,type:e.type,src:e.src,"icon-class":e.iconClass,"aria-label":e.ariaLabel,href:e.href,"is-internal-link":e.isInternalLink})))):o("slot",{name:"cta-list"})),this.contentlist&&o("div",{class:"dxp-col-lg-5 content-list dxp-col-md-12 dxp-col-12 dxp-col-sm-12 dxp-col-offset-lg-4"},this.contentListData?o("div",{class:`column-${this.contentListData.length}`},this.contentListData.map((e=>o("dxp-content-list",{orientation:"vertical","header-size":e.headerSize,"title-text":e.titleText,href:e.href,"is-internal-link":e.isInternalLink,"aria-label":e.titleText,target:e.target},e.contentListItems.map((e=>o("dxp-content-list-item",{subtitle:e.subtitle,href:e.href,"aria-label":e.ariaLabel,target:e.target,"is-internal-link":e.isInternalLink}))))))):o("slot",{name:"content-list"}))),o("div",null,this.emailsubscription&&o("div",{class:`dxp-flex dxp-pt-6 email-sub-wrapper ${this.subscriptionAlignment}`},o("dxp-cta-list",{orientation:"vertical","show-heading":"false","title-style":"dxp-title-md"},o("dxp-button",{onCtaClickEvent:e=>this.emailSubscriptionButtonHandler(e),text:this.subscribeButtonText,type:"primary",size:"md","block-button":"false","aria-label":this.subscribeButtonAriaText,"align-icon":"left","open-in-new-tab":!1})),o("dxp-modal",{"content-id":"subscribe-form","modal-title":this.emailSubscriptionTitle,"modal-description":this.emailSubscriptionDescription},o("div",{class:"dxp-pt-6"},o("div",{ref:e=>this.inputContainer=e})),o("div",{class:"dxp-pt-6"},o("dxp-cta-list",{"title-text":"",orientation:"horizontal"},o("dxp-button",{"btn-id":"submit",onCtaClickEvent:e=>this.emailSubscriptionSubmitHandler(e),type:"primary",text:this.submitBtnText,state:this.isValidEmailAddress?"enabled":"disabled"})))),o("dxp-modal",{"content-id":"subscribe-status","modal-subtitle":this.thankyouMessage,"modal-description":this.displayContactMessage,"footer-type":"no-button","modal-title":""},o("dxp-logo",{src:"https://stage.mastercard.us/content/dam/dxp-mobile/DXPBoingoExp/iOS/images/tick-circle-color.imageset/ic-tick-circle-color%403x.png","src-sm":"https://stage.mastercard.us/content/dam/dxp-mobile/DXPBoingoExp/iOS/images/tick-circle-color.imageset/ic-tick-circle-color%402x.png",alt:this.emailSubscriptionSuccess,target:!1,slot:"logo"}))))),o("dxp-line",{type:"solid",height:1,"border-color":"#444340"})]}resetEmailSubscriptionForm(){this.subscriptionEmailAddress="",this.isValidEmailAddress=!1}render(){return o("footer",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},this.logo&&o("div",{class:"dxp-row logo"},o("div",{class:"dxp-col-12"},this.logoData?o("dxp-logo",{src:this.logoData.src,"src-sm":this.logoData.srcSm,href:this.logoData.href,"is-internal-link":this.logoData.isInternalLink,alt:this.logoData.alt}):o("slot",{name:"logo"}))),(this.quicklinks||this.contentlist||this.emailsubscription)&&this.renderQuicklinkContentListAndSubscription(),o("div",{class:"dxp-row flex-direction"},this.copyright&&[o("div",{class:`dxp-col-lg-${this.calculateColumnWidths()[0]} dxp-col-sm-12  dxp-col-12 copyright vertical-center`},this.copyrightData?o("dxp-copyright",{text:this.copyrightData.text}):o("slot",{name:"copyright"}))],this.footerlinks&&[o("div",{class:`dxp-col-lg-${this.calculateColumnWidths()[1]} dxp-col-sm-12 dxp-col-12 content-link-list vertical-center`},this.footerlinkData?o("dxp-content-list",{class:"dxp-content-list",orientation:this.footerlinkData.orientation},this.footerlinkData.contentListItems.map((e=>o("dxp-content-list-item",{subtitle:e.subtitle,href:e.href,"is-internal-link":e.isInternalLink})))):o("slot",{name:"content-link-list"}))],this.showAccessibilityIcon&&[o("div",{class:`dxp-col-lg-${this.calculateColumnWidths()[2]}\n           dxp-col-sm-12 dxp-col-12 dxp-text-sm-left dxp-text-md-left dxp-text-lg-right accessibility-icon dxp-i-flip-rtl vertical-center`},o("a",{class:"dxp-icons dxp-i-accessibility",href:this.accessibilityHref,rel:this.isInternalLink?"":"noopener","aria-label":t.localeTranslator.translate(this.accessibilityAriaLabel),role:"link",target:"_blank"}))],this.countrylanguageselector&&[o("div",{class:`dxp-col-lg-${this.calculateColumnWidths()[3]} dxp-col-sm-12 dxp-col-12\n           dxp-text-sm-left dxp-text-md-left country-language-selector vertical-center`},this.countryLanguageData?o("dxp-country-language-selector",{"api-url":this.countryLanguageData.apiUrl,"target-url":this.countryLanguageData.apiUrl,"is-internal-link":this.countryLanguageData.isInternalLink}):o("slot",{name:"country-language-selector"}))],this.sociallinks&&[o("div",{class:`dxp-col-lg-${this.calculateColumnWidths()[4]}\n           dxp-col-sm-12 dxp-col-12 dxp-text-sm-left dxp-text-md-left dxp-text-lg-right social-follow vertical-center`},this.socialFollowData?o("dxp-social-links",{orientation:"horizontal","social-links-items":this.socialFollowData.socialLinksItems},this.socialFollowData.socialLinksItems.map((e=>o("dxp-social-links-item",{"aria-label":e.ariaLabel,"social-title":e.socialTitle,type:e.type,href:e.href,"is-internal-link":e.isInternalLink})))):o("slot",{name:"social-links"}))]))}get element(){return i(this)}};n.style="@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-white.dxp-footer .dxp-i-accessibility{color:#141413;font-size:2.5rem}.dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,.dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,.dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(ar) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ar) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(ja) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ja) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(zh) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(zh) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(ko) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ko) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(ka) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ka) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(az) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(az) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(el) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(el) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-white.dxp-footer .dxp-content-list-item a,[lang]:lang(th) .dxp .dxp-theme-white.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(th) .dxp .dxp-theme-white.dxp-footer .flex-direction div{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-black.dxp-footer .dxp-i-accessibility{color:#fff;font-size:2.5rem}.dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,.dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,.dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(ar) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ar) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(ja) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ja) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(zh) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(zh) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(ko) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ko) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(ka) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ka) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(az) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(az) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(el) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(el) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-black.dxp-footer .dxp-content-list-item a,[lang]:lang(th) .dxp .dxp-theme-black.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(th) .dxp .dxp-theme-black.dxp-footer .flex-direction div{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-light-grey.dxp-footer .dxp-i-accessibility{color:#141413;font-size:2.5rem}.dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,.dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,.dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ar) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ja) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(zh) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ko) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ka) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(az) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(el) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(th) .dxp .dxp-theme-light-grey.dxp-footer .flex-direction div{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-rich-grey.dxp-footer .dxp-i-accessibility{color:#fff;font-size:2.5rem}.dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,.dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,.dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ar) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ja) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(zh) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ko) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ka) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(az) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(el) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-content-list-item a,[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(th) .dxp .dxp-theme-rich-grey.dxp-footer .flex-direction div{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}@keyframes animate-pop{0%{transform:scale(1)}30%{transform:scale(1.2)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes animate-moveup{0%{top:2.5rem;opacity:0}to{top:0;opacity:1}}@keyframes animate-fade-out{0%{opacity:1}70%{opacity:0;transform:scale(2)}75%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.dxp .dxp-theme-b2b.dxp-footer .dxp-i-accessibility{color:#141413;font-size:2.5rem}.dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,.dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,.dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:MarkForMCNrw,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ar) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Arabic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ja) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Japanese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(zh) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Chinese Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ko) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Korean Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(ka) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Georgian Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(az) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Cyrillic Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(el) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Greek Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-footer .dxp-content-list-item a,[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-footer .dxp-cta .link-with-icon span,[lang]:lang(th) .dxp .dxp-theme-b2b.dxp-footer .flex-direction div{font-family:Thai Narrow,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}footer.dxp-footer{overflow:hidden;margin:0 -0.5rem;padding:0 0.5rem}footer.dxp-footer .logo{margin-bottom:1.7rem}footer.dxp-footer .logo,footer.dxp-footer .content-cta-list{margin-top:5.5rem}footer.dxp-footer .logo+.content-cta-list{margin-top:0}footer.dxp-footer .dxp-i-accessibility:hover{text-decoration:none}footer.dxp-footer .vertical-center{align-items:center;display:flex}footer.dxp-footer .email-sub-wrapper.left{justify-content:flex-start}footer.dxp-footer .email-sub-wrapper.center{justify-content:center}footer.dxp-footer .email-sub-wrapper.right{justify-content:flex-end}@media screen and (max-width: 767px){footer.dxp-footer .content-list{padding-top:3.5rem}footer.dxp-footer .flex-direction{display:flex;flex-direction:column-reverse;padding:40px 0 40px 0;flex-wrap:nowrap}footer.dxp-footer .flex-direction .content-link-list,footer.dxp-footer .flex-direction .social-follow,footer.dxp-footer .flex-direction .country-language-selector,footer.dxp-footer .flex-direction .accessibility-icon{padding-bottom:40px}footer.dxp-footer .flex-direction .logo{margin-top:1.5rem;margin-bottom:2.5rem}footer.dxp-footer .content-cta-list{padding-bottom:3rem}footer.dxp-footer .column-2>dxp-content-list{width:100%;float:left;padding-bottom:56px}}@media screen and (min-width: 768px) and (max-width: 992px){footer.dxp-footer .flex-direction{display:flex;flex-direction:column-reverse;padding:40px 0 40px 0;flex-wrap:nowrap}footer.dxp-footer .flex-direction .content-link-list,footer.dxp-footer .flex-direction .social-follow,footer.dxp-footer .flex-direction .country-language-selector,footer.dxp-footer .flex-direction .accessibility-icon{padding-bottom:40px}footer.dxp-footer .content-list{padding-top:3.5rem;padding-bottom:3.5rem}footer.dxp-footer .content-cta-list{padding-bottom:3rem}footer.dxp-footer .column-2>dxp-content-list{width:50%;float:left}}@media screen and (min-width: 993px){footer.dxp-footer .content-cta-list{padding-bottom:3rem}footer.dxp-footer .flex-direction{padding:2.5rem 0 2.5rem 0}footer.dxp-footer .flex-direction .country-language-selector,footer.dxp-footer .flex-direction .social-follow{flex-direction:row-reverse}footer.dxp-footer .column-2>dxp-content-list{width:50%;float:left}}@media (min-width: 993px) and (max-width: 1200px){footer.dxp-footer .country-language-selector{text-align:left !important}}@media screen and (max-width: 991px){footer.dxp-footer .image-anchor{width:2.7rem}}";export{n as dxp_footer}