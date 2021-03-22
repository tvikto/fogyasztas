let km;
let tankolas;
do
{
    km=parseInt(prompt("Hány kilométert mentél?"));
}while((km > 1000) || (km != Number(km)) || (km == ''));;

do
{
    tankolas=parseInt(prompt("Hány litert tankoltál?"));
}while((tankolas<1) || (tankolas>50));

let autok=
{
    evjarat:2000,
    automarka:'BMW',
    fogyaszt: function() {
        console.log(this.evjarat+" évjáratú "+this.automarka+" fogyasztása: "+(((tankolas*100)/km)/100).toFixed(2) +" liter/km");
    }
}
autok.fogyaszt();

if(tankolas>20)
{
    console.log("Nem sajnálod az üzemanyagot!");
}
if(km>700)
{
    console.log("Nem kellene ennyit utaznod!");
}
else
{
    console.log("Csak így tovább!");
}
autok.garazs=function(utca)
{
    console.log(this.automarka+" garázsa "+utca+" utcában található");
}
autok.garazs('Szabadság');

for (key in autok)
{
    console.log(key);
}
