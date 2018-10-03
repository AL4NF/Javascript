function horasDeSueño ()
  {
    let dormir = Number(prompt("A que hora dormiste "));//estamos forzando a que que se conviertaen numero
    let despertar =Number (prompt("A que hora despertaste "));

    if(dormir<=12)
      {
        var horas_dormidas = despertar +(12-dormir);
      }else
      {
        var horas_dormidas = despertar +(24-dormir);
      }
    console.log(horas_dormidas);
  }

  function refri()
  {
    let name = prompt("¿Como te llamas?");
    let password = prompt("¿Cual es la contraseña del refrigerador?");

    if(name == "Alan" && password==1234)
    {
      console.log("Acceso Concedido, Alan");

    }else
      {
        console.log("Acesso denegado!!!");
      }
    }

function nivJuego()
  {
   var niv = Number(prompt("Que nivel eres?"));
   if(niv<=9)
     {
        console.log("Eres Aprendiz");
     }else if (niv>=10 && niv<=19)
     {
       console.log("Eres Acrobata");
     }else
     {
       console.log("Eres Ninja");
     }
  }

function regaño()
  {
    let inicio = Number(prompt("¿En que valor vas a iniciar?"));
    let final = Number(prompt("¿En que valor vas a terminar?"));

    while (inicio > final)
    {
      final = Number(prompt("No puedes terminar en un numero menor al que iniciaste, ¿En que valor vas a terminar?"));
    }

    if (inicio <= final)
    {
      for (var i = inicio; i <= final; i++)
      {
        console.log(i);
      }
    }
  }

function game()
{
  var tiro =Math.floor(Math.random()*3);
  console.log(tiro);
  var tiroJugador = Number(prompt("Elije piedra(0), Papel(1) o Tijera(2)"));

  if(tiro==tiroJugador && tiroJugador<=2)
  {
    console.log("Tu elegiste " +tiroJugador);
    console.log("Empate, la PC eligio" + tiro);
  }

  else if(tiro==0 && tiroJugador==2 || tiro==1 && tiroJugador==0 || tiro==2 && tiroJugador==1 )
  {
    console.log("Tu elegiste " +tiroJugador);
    console.log("Ganaste, la PC eligio " + tiro);
  }else if(tiro==0 && tiroJugador==1 || tiro==1 && tiroJugador==2 || tiro==2 && tiroJugador==0)
  {
    console.log("Tu elegiste " +tiroJugador);
    console.log("Perdiste, la PC eligio " + tiro);
  }

}
function fibbo()
{
  let pri=0,seg=1,sig;

  let x = Number(prompt("Cuantos numeros quieres ver de la serie?"));
  if(x==0)
  {
  console.log("Pa k me eligio");
  }else if(x==1){
    console.log("0 ");
  }else if(x==2) {
    console.log("0 1");
  }else if(x==3)
  {
    console.log("0 1 1");
  }else{
    console.log(pri);
    console.log(seg);
  }
  for(i=0;i<=x-3;i++)
  {
    sig=pri+seg;
    pri=seg;
    seg=sig;
    console.log(sig);
  }
}

function password()
{
  let pass=prompt("Cual es su contraseña?");
  console.log(pass);

  pass = pass.split("");

  for(i=0;i<pass.length;i++)
  {
    if(pass[i]=="a")
    {
      pass[i]=4;
    }else if(pass[i]=="e")
    {
      pass[i]=3;
    }else if(pass[i]=="i")
    {
      pass[i]=1;
    }else if(pass[i]=="o")
    {
    pass[i]=0;
  }else if(pass[i]=="t")
    {
    pass[i]=7;
    }
  }
  console.log(pass);
  pass=pass.join("");
  console.log(pass);
}

function palindromo()
{
  let frase=prompt("Escribe la frase a verificar")
  let fraseSinEspacios=frase.replace(/ /g,'');
  let fraseEnMinusculas=fraseSinEspacios.toLowerCase();

  let fraseVolteada='';
  for(let i=fraseEnMinusculas.length-1;i>=0;i--)
  {
    fraseVolteada=fraseVolteada +fraseEnMinusculas[i];
  }if(fraseEnMinusculas==fraseVolteada)
  {
    console.log(frase);
    console.log(fraseVolteada);
    console.log(fraseEnMinusculas + "Sí es un palindromo");
  }else {
    {
      console.log(fraseEnMinusculas+ " No es un Palindormo");
    }
  }


}



// a => 4;
// e => 3;
// i => 1;
// o => 0;
// t => 7;






// Math.random() Da numero aleatoriamente entre 0 y 1
// Math.round() Redodea arriba y abajo
// Math.floor() Redondea hacia abajo
// Math.ceil() Redondea hacia arriba
