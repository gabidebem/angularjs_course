var restaurante = function(){
    var cardapio = [{descricao: "coca-cola", preco: 4},{descricao: "pizza", preco: 80},{descricao: "sobremesa", preco: 25}]
    var pedidos = [];
    
    var getCardapio = function(){
        return cardapio
    }
    
    var setPedido = function(pedido){
        pedidos.push(pedido);
    }
    
    var getPedidos = function(){
        return pedidos;
    }
    
    var getPedidosMesa = function(mesa){
        var total = 0;
        for( var i = 0; i < pedidos.length; i++){
            if(pedidos[i].mesa === mesa){
                total += pedidos[i].quantidade * pedidos[i].item.preco
            }
        }
        return total;
    }
    
    var clearPedido = function(mesa){
        for(var i=0; i<pedidos.length; i++){
            if (pedidos[i].mesa === mesa){
                pedidos.pop(pedidos[i]);
            }
        }
        return pedidos;
    }
    
    return {
        getCardapio : getCardapio,
        setPedido : setPedido,
        getPedidos : getPedidos,
        getPedidosMesa : getPedidosMesa,
        clearPedido : clearPedido
    }
}();
