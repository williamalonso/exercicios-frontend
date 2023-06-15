/*
    Link do exemplo rodando no CodePen:
    https://codepen.io/williamalonso/pen/PoBZYYK
    
    Dado um HTML simples:

    <div class="row mt-3">
        <div class="col-12">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <label for="inputTel" class="form-label">Telefone</label>
                    <input type="text" class="form-control phone_with_ddd" id="phone_with_ddd" placeholder="(11) 999999-9999" maxlength="14">
                    <div id="txtHelp" class="form-text style-txt"> * Número de telefone inválido</div>
                </div>
            </div>
        </div>
    </div>

    obs: É preciso fazer uso do jQuery Mask

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    Podemos fazer sua validação com o seguinte JS:

*/

    $(document).ready(function($){
        // máscara do telefone
        $('#phone_with_ddd').mask('(00) 00000-0000');
    });
 
    // remove a mensagem de helper do telefone
        document.getElementById('txtHelp').classList.add('display-none');
       
    // Função que verifica campo de nome e telefone
    function validateInputs() {
        if (nome.value.length == 0) {
            nome.setCustomValidity('Nome está vazio!');
        } else {
            nome.setCustomValidity('');
        }
 
        if (validPhone(telefone.value) == false) {
            
            telefone.setCustomValidity('Número de telefone inválido!');
            telefone.style.border = "1px solid red";
            telefone.style.borderBottom = "3px solid red";
            document.getElementById('txtHelp').classList.remove('display-none');
            return false;
        } else {
            telefone.setCustomValidity('');
            telefone.style.border = "1px solid rgba(0,0,0,.2)";
            telefone.style.borderBottom = "1px solid rgba(0,0,0,.2)";
            document.getElementById('txtHelp').classList.add('display-none');
            return false;
        }
    }
    nome.onkeyup = validateInputs;
    telefone.onkeyup = validateInputs;
 
    // regex telefone
        function validPhone(phone) {
            // Esse regex verifica se tem 2 números dentro de parentesis, seguido de espaço e 9 números, junto de um hífen
            var regex = new RegExp("[\(][1-9]{2}[\)] (9[0-9])([0-9]{3})\-([0-9]{4})$");
            return regex.test(phone);
        }
