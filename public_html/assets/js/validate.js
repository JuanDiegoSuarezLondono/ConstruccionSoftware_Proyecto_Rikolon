
$(function() {
$("form[name='registration']").validate({
    rules: {
        nombre:{
            required:true,
            maxlength:3
        },
        
    },
        messages: {
        nombre: "Please enter your firstname",
        
        },
        submitHandler: function(form) {
        form.submit();
        }
    });
});