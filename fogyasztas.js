let km;
let tankolas;
do
{
    km=parseInt(prompt("Hány kilométert mentél?"));
}while((km > 1000) && (km!=NaN));

do
{
    tankolas=parseInt(prompt("Hány litert tankoltál?"));
}while((tankolas<1) || (tankolas>50));

let autok=
{
    evjarat:2000,
    automarka:'BMW',
    fogyaszt: function() {
        console.log(this.evjarat+" évjáratú "+this.automarka+" fogyasztása: "+((tankolas/km)*100).toFixed(2) +" liter/km")
    }
}
autok.fogyaszt()
