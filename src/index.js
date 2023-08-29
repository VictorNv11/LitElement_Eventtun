import { LitElement, html } from "lit-element";
 
import "./my.element"
import "./sectionOne"
import "./sectionTwo"
import "./sectionThree"
import "./sectionFour"

export class Casa extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html `
        <my-element></my-element>
        <my-sectionone></my-sectionone>
        <my-sectiontwo></my-sectiontwo>
        <my-sectionthree></my-sectionthree>
        <my-sectionfour></my-sectionfour>
        `
    }
}

customElements.define ('my-casa', Casa);