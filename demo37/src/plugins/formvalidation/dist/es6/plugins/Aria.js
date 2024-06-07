import e from"../core/Plugin";export default class i extends e{constructor(){super({});this.elementValidatedHandler=this.onElementValidated.bind(this);this.fieldValidHandler=this.onFieldValid.bind(this);this.fieldInvalidHandler=this.onFieldInvalid.bind(this);this.messageDisplayedHandler=this.onMessageDisplayed.bind(this)}install(){this.core.on("core.field.valid",this.fieldValidHandler).on("core.field.invalid",this.fieldInvalidHandler).on("core.element.validated",this.elementValidatedHandler).on("plugins.message.displayed",this.messageDisplayedHandler)}uninstall(){this.core.off("core.field.valid",this.fieldValidHandler).off("core.field.invalid",this.fieldInvalidHandler).off("core.element.validated",this.elementValidatedHandler).off("plugins.message.displayed",this.messageDisplayedHandler)}onElementValidated(e){if(e.valid){e.element.setAttribute("aria-invalid","false");e.element.removeAttribute("aria-describedby")}}onFieldValid(e){const i=this.core.getElements(e);if(i){i.forEach((e=>{e.setAttribute("aria-invalid","false");e.removeAttribute("aria-describedby")}))}}onFieldInvalid(e){const i=this.core.getElements(e);if(i){i.forEach((e=>e.setAttribute("aria-invalid","true")))}}onMessageDisplayed(e){e.messageElement.setAttribute("role","alert");e.messageElement.setAttribute("aria-hidden","false");const i=this.core.getElements(e.field);const t=i.indexOf(e.element);const l=`js-fv-${e.field}-${t}-${Date.now()}-message`;e.messageElement.setAttribute("id",l);e.element.setAttribute("aria-describedby",l);const a=e.element.getAttribute("type");if("radio"===a||"checkbox"===a){i.forEach((e=>e.setAttribute("aria-describedby",l)))}}}