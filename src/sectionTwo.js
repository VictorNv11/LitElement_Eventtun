import { LitElement, html } from "lit-element";
export class sectionTwo extends LitElement{
    createRenderRoot(){
        return this
      }
      render(){
        return html  `
        <style>
        @import "src/css/styles.css"
        </style>
            <section id="sobre-nosotros">
            <div class="container">
                <div class="title mt-5 mb-2">
                    <h2 class="text-center title"><b>Expertos en eventos</b></h2>
                    <hr>
                </div>
                <div class="cards">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card card-sn text-bg-dark mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="..." class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Salón amarillo</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, libero.</p>
                                        <a href="#" class="btn btn-warning">Más info</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="card card-sn text-bg-dark mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="..." class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Salón amarillo</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, libero.</p>
                                        <a href="#" class="btn btn-warning">Más info</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                            <div class="col-sm-4">
                                <div class="card card-sn text-bg-dark mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="..." class="img-fluid rounded-start" alt="...">
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Salón amarillo</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, libero.</p>
                                        <a href="#" class="btn btn-warning">Más info</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        `
    }
}
customElements.define('my-sectiontwo', sectionTwo);


