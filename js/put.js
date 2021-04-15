$( document ).ready(function() {

    $("#txtCliente").keyup(function(e){
        var obj_data =
        {
            "Nombre_Cliente": $("#txtCliente").val()
        };


        $.ajax({          
            url: 'https://localhost:44305/api/Pedido/buscarPorNombre',
            crossDomain: true,
            type: 'post',
            dataType: 'json',
            data : JSON.stringify(obj_data),
            contentType: 'application/json',
            success: function (data) {
                var data_json = JSON.parse(data);
                if(data_json.tipo_mensaje !== 'undefined')
                {
                    if(data_json.tipo_mensaje === 'Valores_Encontrados')
                    {
                        var resultados = data_json.valor;
                        $("#resultados").text(resultados);
                    }
                    if(data_json.tipo_mensaje === 'Resultado_Busqueda')
                    {
                        console.log(data_json.valor[0]);
                        var resultado = data_json.valor[0];
                        $("#txtCliente").attr("readonly", "true");
                        $("#resultados").text(null);
                        $("#txtCantidad").val(resultado.Cantidad);
                        $("#txtCliente").val(resultado.Nombre_Cliente);
                        $("#txtFechaEntrega").val(resultado.Fecha_Pedido.substring(0, 10)); 
                        $("#txtCpEntrega").val(resultado.CP_Entrega);
                    }
                 
                }
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log("Status: " + textStatus); 
                console.log("Error: " + errorThrown); 
                console.log("XMLHttpRequest: " + XMLHttpRequest); 
            }       
        });

    });


    


});