import { LitElement, html } from "lit-element";
export class SectionThree extends LitElement{
    createRenderRoot(){
        return this
      }
      render(){
        return html  `
        <style>
        @import "src/css/styles.css"
        </style>
        
            <section id="bienvenidos">
            <div class="container d-flex">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="img-bienvenidos">
                            <img src="src/img/img1.png" alt="">
                        </div>  
                    </div>
                    <div class="col-sm-6">
                        <div class="text-bienvenidos">
                            <h5>BIENVENIDOS A EVENTTUM</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates, nihil illo beatae expedita totam tenetur quaerat ipsum similique, quam eligendi repudiandae officiis recusandae porro unde, enim iure quos veritatis?</p>
                            <div class="iconos-redes">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
            `
    }
}
customElements.define('my-sectionthree', SectionThree);
