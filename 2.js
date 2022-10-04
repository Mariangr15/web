export default function listGifts(letter) {
    const arreglo = letter.split(' ');
     const lista = {};
   
     arreglo.map(function (elemento) {
       if(elemento !== "" && elemento[0] !== "_"){
         if(lista[elemento]){
           return lista[elemento] = lista[elemento] + 1;
         }else{
           return lista[elemento] = 1;
         }
       }
     });
   
     return lista;
   }