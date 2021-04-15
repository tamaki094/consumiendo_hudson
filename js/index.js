$( document ).ready(function() {
 

    /**
     * Funcion para enviar formulario
     */
    $("#frmPost").submit(function(event){

        event.preventDefault();

        var obj_data =
        {
            "Cantidad": $("#txtCantidad").val(),
            "Nombre_Cliente": $("#txtCliente").val(),
            "Fecha_Entrega": $("#txtFechaEntrega").val(),
            "CP_Entrega": $("#txtCpEntrega").val()
        };


        $.ajax({          
            url: 'https://localhost:44305/api/Pedido',
            crossDomain: true,
            type: 'post',
            dataType: 'text',
            data : JSON.stringify(obj_data),
            contentType: 'application/json',
            success: function (data) {
                console.log("Respuesta");
                console.log(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log("Status: " + textStatus); 
                console.log("Error: " + errorThrown); 
                console.log("XMLHttpRequest: " + XMLHttpRequest); 
            }       
        });
    });



});