import { LitElement, html } from "lit-element";
export class SectionOne extends LitElement{
    createRenderRoot(){
        return this
      }
      render(){
        return html  `
        <style>
        @import "src/css/styles.css"
        </style>
        <section>
            <div class="container-fluid ">
                <div class="row ini">
                    <div class="col-sm-7 cover">
                        <img src="/src/img/cover.png" alt="" width="60%">
                        <h4>Crea, sueña, realizalo </h4>
                        <a href="" class="btn btn-warning w-50">CONOCENOS</a>
                    </div>
                    <div class="col-sm-5">
                        <div class="bg-gray ingresar">
                            <h3 class="text-white text-center">¿Ya eres cliente?</h3>
                            <a href="" class="btn btn-warning w-50 btns">INGRESA</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    }
}
customElements.define('my-sectionone', SectionOne);