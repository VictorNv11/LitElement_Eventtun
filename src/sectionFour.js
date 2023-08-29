import { LitElement, html } from "lit-element";

export class SectionFour extends LitElement {
    createRenderRoot(){
        return this
      }
      render(){
        return html  `
        <style>
        @import "src/css/styles.css"
        </style>
        <section>
        <div class="container">
            <div class="title mt-5 mb-2">
                <h2 class="text-center title"><b>Expertos en eventos</b></h2>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card card-op text-bg-dark mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                         
                          <div class="col-md-8">
                            <div class="card-body text-center">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, libero.</p>

                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card card-op text-bg-dark mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          
                          <div class="col-md-8">
                            <div class="card-body text-center">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, libero.</p>

                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    }
}





customElements.define('my-sectionfour', SectionFour);