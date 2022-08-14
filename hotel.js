
let degrer=0;
function premier(){
   degrer-=90;
    $(".image-cube").css({
    'transform': `rotateY(${degrer}deg)`
   })
}
function deuxieme(){
   degrer+=90;
    $(".image-cube").css({
    'transform': `rotateY(${degrer}deg)`
   })
}

   
setTimeout(()=>{
   $("#text").html("<h1>vice President 1 de l'AEENI</h1> <P>RAJAONARISINA Rado Ny Aina Andriamampiadamanjaka</P> <button class='btn mybtn'>Contacter</button>");
   premier();
   setTimeout(()=>{
   $("#text").html("<h1>vice President 2 de l'AEENI</h1> <P>TOTO Elysé Rivelino</P> <button class='btn mybtn'>Contacter</button>");
   premier()
   setTimeout(()=>{
      
      $("#text").html("<h1>Conseiller de l'AEENI</h1> <P>RALAIVAO Niaiko Michael</P> <button class='btn mybtn'>Contacter</button>");
      premier()
      setTimeout(()=>{
         $("#text").html("<h1>Presidente de l'AEENI</h1> <P>RALINIRINA Rosa Elysabeth</P> <button class='btn mybtn'>Contacter</button>");
        premier()
       },4000)
     },4000)
 },4000)
},1000)
setInterval(()=>{
     
  setTimeout(()=>{

        $("#text").html("<h1>vice President 1 de l'AEENI</h1> <P>RAJAONARISINA Rado Ny Aina Andriamampiadamanjaka</P> <button class='btn mybtn'>Contacter</button>");
        premier();
        setTimeout(()=>{
        $("#text").html("<h1>vice President 2 de l'AEENI</h1> <P>TOTO Elysé Rivelino</P> <button class='btn mybtn'>Contacter</button>");
        premier()
        setTimeout(()=>{
           
           $("#text").html("<h1>Conseiller de l'AEENI</h1> <P>RALAIVAO Niaiko Michael</P> <button class='btn mybtn'>Contacter</button>");
           premier()
           setTimeout(()=>{
              $("#text").html("<h1>Presidente de l'AEENI</h1> <P>RALINIRINA Rosa Elysabeth</P> <button class='btn mybtn'>Contacter</button>");
             premier()
            },4000)
          },4000)
      },4000)
     },1000)
    },17000)
