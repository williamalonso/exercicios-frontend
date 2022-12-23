/*

    Dado um simples form, podemos alterar o preview da imagem quando o usuário selecionar do computador.

    Link para visualizar no CodePen: https://codepen.io/williamalonso/pen/poZJQYd

    html:

    <form>
       <div>
           <input id="img-input" type="file" name="imagem">
       </div>
       <div id="img-container">
           <img id="preview" src="">
       </div>
       <div>
           <input type="submit" value="Enviar">
       </div>
    </form>

*/

function readImage() {
   if (this.files && this.files[0]) {
       var file = new FileReader();
       file.onload = function(e) {
           document.getElementById("preview").src = e.target.result;
       };      
       file.readAsDataURL(this.files[0]);
   }
}
document.getElementById("img-input").addEventListener("change", readImage, false);