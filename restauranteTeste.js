describe("Testando Restaurante", function(){
   it("Deve listar os itens do cardapio", function(){
       var cardapio = restaurante.getCardapio();
       expect(cardapio.length).toBe(3);
   });
    it("Deve fazer pedidos informando a mesa, a quantidade e o item.", function(){
        var cardapio = restaurante.getCardapio();
        var pedido = {mesa: 12, quantidade: 1, item: cardapio[1]};
        restaurante.setPedido(pedido);
        pedido = restaurante.getPedidos();
        expect(pedido.length).toBe(1);
    });
    it("Deve consultar o total da conta informando a mesa", function(){
        var total = restaurante.getPedidosMesa(12);
        expect(total).toBe(80);
    });
    it("Deve fechar a conta informando a mesa", function(){
        var total = restaurante.getPedidosMesa(12);
        pedidos = restaurante.clearPedido(12);
        expect(total).toBe(80);
        expect(pedidos.length).toBe(0);
    });
});
