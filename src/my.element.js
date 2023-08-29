import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
  createRenderRoot(){
    return this
  }
  render(){
    return html  `
    <style>
    @import "src/css/styles.css"
    </style>
    <header>
    <nav class="navbar bg-black">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="src/img/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
    </a>
    
    <button class="navbar-toggler" type="button" style="color: white;">
    <i class="fa-solid fa-bars"></i>
    </button>
    </div>
    </nav>
    </header>`
    
  }
}
  


customElements.define('my-element', MyElement);