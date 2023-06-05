function seleccionarProductosAleatorios(productos) {
   
    const productosSeleccionados = [];
  
    
    function obtenerNumeroAleatorio(max) {
      max=productos.length
      return Math.floor(Math.random() * (max)) ;
    }

    let indicesAleatorios = [];
    while (indicesAleatorios.length < 5) {
      let indice = obtenerNumeroAleatorio(0, productos.length - 1);
      if (indicesAleatorios.indexOf(indice) === -1) {
        indicesAleatorios.push(indice);
      }
    }
  
  
    for (let i = 0; i < indicesAleatorios.length; i++) {
      productosSeleccionados.push(productos[indicesAleatorios[i]]);
    }
  
    return productosSeleccionados;
  }

export {seleccionarProductosAleatorios}