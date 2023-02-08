import Button from "../Button/Button";
import './HelpForm.css'




const HelpForm = () =>{





    return(
        <div id="formu">
            <form>
                <div class="userForm">
                    <label for="username">Nombre completo</label><br />
                    <input type="text" id="username"  />
                </div>

                <div class="userForm">
                    <label for="inputEmail">Email</label><br />
                    <input type="text" id="email" />
                </div>

                <div id="country">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>US</option>
                        <option value="1">ESP</option>
                        <option value="2">UK</option>
                        <option value="3">FR</option>
                        <option value="4">JAP</option>
                        <option value="5">ITA</option>
                        <option value="6">AND</option>
                        <option value="7">CAN</option>
                        <option value="8">ARG</option>
                        <option value="9">CRI</option>
                        <option value="10">EGY</option>
                        <option value="11">GIB</option>
                        <option value="12">GNQ</option>
                        <option value="13">ISL</option>
                        <option value="14">FLK</option>
                        <option value="15">JAM</option>
                        <option value="16">NPL</option>
                        <option value="17">ATF</option>
                        <option value="18">VUT</option>
                        <option value="19">TUN</option>
                        <option value="20">TJK</option>
                        <label for="tel">Teléfono</label>
                    </select>
                    <input type="text" id="tel" name="tel" placeholder="+1 (555) 987-6543" />
                </div>

                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check"/>
                            <label class="form-check-label" for="gridCheck">
                                Acepto la <u> <strong>Política de Privacidad</strong></u> y los
                                <u><strong>Términos y condiciones</strong></u>.
                            </label>
                    </div>
                </div>
<div id="formulario">

                <Button text={'Enviar'}/>
</div>


            </form>
        </div>

    )
}



export default HelpForm