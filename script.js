/* UPPGIFT 2 */
/* console.log(greet); // ReferenceError */
console.log(greet2); // undefined
{
  let greet = "Tjabba";
  console.log(greet);

  var greet2 = "Hallå";

  const greet3 = "Tjena";
  console.log(greet3);
}
/* console.log(greet3);  */ // ReferenceError

console.log(greet2);
/* console.log(greet); */ // ReferenceError outside scope

/* REFLEKTION UPPGIFT 2 */
/* 
******************************************************************************************
************* 1. Beskriv hur var, let och const skiljer sig gällande block.

******************************************************************************************

Alla tre, var, let och const måste deklareras innan det används, men om vi använder "var" innan variabeln har deklarerats så får vi inget error meddelande i konsolen utan output "undefined". 

let och const kan ej användas utanför scopet, "var" skiljer sig här och kan användas utanför scopet, vilket kan skapa problem. 
__________________________________________________________________________________________

******************************************************************************************
******** 2. Reflektera över vad som händer vid olika placering av console.log().

******************************************************************************************

FÖRE BLOCKET 
Ingen av dessa tre går att nå före blocket eller innan de har deklarerats oavsett om detta sker inom scopet eller utanför, men vid "var" får vi inget felmeddelande i konsolen utan istället outputen "undefined". 

I BLOCKET 
Alla tre går att nå för utskrift inom blocket. 


UTANFÖR BLOCKET 
Let och const måste användas inom scopet, variabeln går inte att nå utanför. Men "var" kan användas utanför scopet, vilket kan leda till problem. Till exempel så kan man med let och const använda samma variabelnamn inom olika scope utan att det leder till felaktiga utskrifter men använder vi var så blir det problem då den senare skriver över den tidigare variabeln. 
Därför ska vi använda let och const istället för var. 

__________________________________________________________________________________________
*/

/* UPPGIFT 3 & 4 */

console.log("*** Uppgift 3 & 4 - Funktion för att addera tal ***");
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  /* UPPGIFT 4  - jämförelser och specialvärden */
  /* villkorsoperator */
  console.log(num1 ? "truthy" : "falsy");

  // if/else-sats med logiska operatorer //
  if (
    !(num1 === null || num1 === undefined) &&
    // num1 & num2 is not a null or undefined
    !(num2 === null || num2 === undefined) &&
    typeof num1 === "number" &&
    !isNaN(num1) &&
    // num1 & num2 is of type number and is not NaN
    typeof num2 === "number" &&
    !isNaN(num2)
  ) {
    return num1 + num2;
  } else {
    console.log("Felaktig input");
  }
};
console.log("3 + 5 = " + add(3, 5));

/* 
console.log(add(3, 5));
console.log(add(null, 5));
console.log(add(5)); */
/* REFLEKTION UPPGIFT 3
******************************************************************************************
****** 1. Beskriv vad som händer om du hade skapat variabeln med nyckelordet let istället.

******************************************************************************************
Det hade fungerat att använda let istället för const, men anledningen till att vi vill använda const vid funktioner istället är på grund av att nyckelordet "let" har förmågan att ändra värdet på dess variabel. Detta skulle potentiellt kunna skapa problem om vi av misstag deklarerar ett annat värde för vår variabel "add". Detta förstör funktionen och ger felmeddelande i output.  

Att använda const vid funktioner skyddar oss från att av misstag råka skriva över värdet. 
__________________________________________________________________________________________

******************************************************************************************
****** 2. Visa (med kod inuti kommentaren) hur du hade gjort för att skapa samma funktion med en funktionsdeklaration istället.

******************************************************************************************

******* funktionsdeklartion *******

function add(num1, num2) {
  return num1 + num2;
}
__________________________________________________________________________________________

******************************************************************************************
****** 3. Förklara vad det innebär att en funktion returnerar något. 

******************************************************************************************
"return" innebär att ett värde skickas tillbaka till den som anropar funktionen. 
"return" avslutar även funktionen, så ingen kod som skrivs efter det körs. 
Utan "return" får vi "undefined" i konsolen för funktionen.
__________________________________________________________________________________________
 */

/* REFLEKTION - UPPGIFT 4 
1.	Förklarar vad en ternary operator är och hur den skiljer sig från en if()-sats.
********************************************************************************************
Ternary operator är ett villkorsuttryck som resulterar i ett värde, medans en if-sats är en instruktion som styr koden. If-satsen finns där för att säga "om villkoret stämmer, gör såhär". 

Man kan skriva denna villkorssats med if/else men då behöver man tilldela värdet i varje enskilt fall. Med ternary så kan man förenkla och förkorta villkorssatsen iaf om det endast är två värden. Är det många olika fall som ska resultera i olika vägar så är if/else bättre/tydligare/enklare att använda samt högre läsbarhet i koden. 

2.	Vad skillnaden mellan att använda två (==) och tre (===) likhetstecken är.
*********************************************************************************************
(==) Gör typkonvertering innan jämförelse vilket innebär att 3 och "3" ses som likadana. 
(===) Gör ingen typkonvertering vilket innebär att typ och värde måste vara samma för att matcha. Det ger en striktare, mer korrekt och säkrare jämförelse. 

3.	Förklarar hur du löste if-satsens villkor som kontrollerar att parametrarna inte är null.
*********************************************************************************************
Jag löste det genom att använda 3 likhetstecken(===) vilket kollar om värdet är null och satta utropstecken (!) framför ("!" vänder på resultatet och läses "not") 
Alltså: "if num1 is not equal to null". if (!(num1 === null)  

Sedan använde jag "or" operatorer || 
if (!(num1 === null || num1 === undefined))
Alltså om num1 inte är null ELLER undefined....

Sedan kopplade jag även ihop de olika villkoren med && (AND operator) då alla måste vara sanna för att if-satsen ska gå igenom. 

 */

console.log("*** Uppgift 5 - anropa funktioner ***");

/* Variabel deklaration */
const num1 = 0;
let arg1;
let sum = false;

console.log("*** Test 1 ***");
console.log(add(sum, 1));

console.log("*** Test 2 ***");
console.log(add("0", 3));

console.log("*** Test 3 ***");
console.log(add(3, "num1"));

console.log("*** Test 4 ***");
console.log(add(-5, num1));

console.log("*** Test 5 ***");
console.log(add(arg1, 7));

console.log("*** Test 6 ***");
console.log(add());

console.log(num1, sum);

/* REFLEKTION UPPGIFT 5

1.	Förklarar skillnaden mellan parameter, variabel och argument.
******************************************************************************************************
En variabel är en container som lagrar ett värde. Vi deklarer variabel med let, const eller var och kan använda variabel i en funktion eller utanför. Variabeln kan även användas som argument när en funktion anropas. 

En parameter är endast ett namn som beskriver vad funktionen behöver, det innehåller inget värde utan är en plats där argumentet ska skickas in, detta ska finnas i funktionsdeklarationen. 

Argument är det värde vi faktiskt skickar in när funktionen anropas. 

2.	Vilket output får du allra sist (värdet i num1) och varför?
******************************************************************************************************
Värdet i den sista outputen blir 0 då den globala num1 inte påverkas och vi har där satt värdet till 0 med typen "const" som inte kan ändras. 
"const num1 = 0;"  
Parametern num1 i funktionen är en separat variabel som inte påverkas av den globala num1. 

3.  Förklarar steg för steg vad som händer i funktionen när den anropas: vilka värden parametrarna får, vad jämförelserna och villkorsoperatorn ger, om if-satsen släpps igenom, och vilket värde som returneras. Det räcker att göra hela genomgången för ett av anropen – för övriga anrop räcker det att förklara returvärdet. 
******************************************************************************************************
Test 4 steg för steg. 
console.log("*** Test 4 ***");
console.log(add(-5, num1));
1. Den globala variabel const num1 = 0. 
Så när funktionen anropas så blir det add(-5, 0)

2. I funktionen får parametrarna num1 och num2 värdena 
-5 och 0 

3. 
Jämförelse 1 
num1 == 0 
-5 == 0 
returnerar: false 

Jämförelse 2 
num2 === "0"
0 === "0"
returnerar: false 

"number" vs "string" ger false 

Jämförelse 3 
num2 === 0 
0 === 0 
returnerar: true

Jämförelse 4 
num1 == NaN
-5 == NaN
returnerar: false

******* Vad villkorsoperatorn ger: 
num1 ? "truthy" : "falsy"; 
num1 = -5 
ger truthy. 

******* Släpps if-satsen igenom? 
Villkoren kontrollerar att 

num1 inte är null 
num1 inte är undefined 
num1 är av typen number 
num1 är inte NaN

Samma för num2 

Alla villkoren uppnås, true, if-satsen släpps igenom och "return num1 + num2" körs. 
-5 skrivs ut i konsolen. 

Test 1, 2, 3, 5, och 6 har alla returvärde "undefined" då if-satsen misslyckas och "else" outputen "felaktig input" skrivs ut i konsolen. 

*/
