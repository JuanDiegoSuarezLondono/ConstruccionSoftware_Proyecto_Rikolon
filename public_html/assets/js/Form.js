/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$( document ).ready(function() {
  $("#enviar").click(function () {
        $("#lb1").append($("#nombre").val()); 
        $("#lb2").append($("#apellido").val()); 
        $("#lb3").append($("#documento").val());
        $("#lb4").append($("#celular").val());
        $("#lb5").append($("#asunto").val());
        $("#lb6").append($("#mensaje").val());
  });
});