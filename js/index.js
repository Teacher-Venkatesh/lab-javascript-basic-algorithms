// Iteration 1: Names and Input
var hacker1="venkatesh";
var hacker2="ragavi";
console.log("The drivers name is ",hacker1);
console.log("The drivers name is ",hacker2);
// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has ",hacker1.length," characters.");
}
else if(hacker2.length>hacker1.length)
console.log("It seems that the navigator has the longest name, it has ",hacker2.length," characters.");
else
{
    console.log("Wow, you both have equally long names, XX characters!.");
}
// Iteration 3: Loops

var hacker1=hacker1.toUpperCase();
console.log(hacker1.split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

if(hacker1>hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker2>hacker1){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

//Bonus
var lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim felis diam, ac sagittis turpis malesuada eu. Cras dapibus est eget neque sagittis, mattis suscipit erat fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ullamcorper euismod mi eget semper. Aenean quis tristique tortor, non molestie odio. Curabitur consectetur posuere sagittis. In faucibus accumsan neque, nec tristique tortor ullamcorper nec. Aenean at vehicula enim, ut euismod eros. Morbi eu sapien vel mi pretium commodo. Nunc urna sem, lacinia quis purus eu, faucibus tincidunt dolor. Curabitur ut sodales nibh. Nulla facilisi.Nulla tristique consequat est vitae pellentesque. Vestibulum dapibus magna ut feugiat cursus. Cras sollicitudin lacus vel tristique laoreet. Integer sagittis a ligula ac mollis. Suspendisse placerat suscipit dapibus. Phasellus tempus nisi id enim consequat, consectetur dapibus tellus sagittis. Nunc ex eros, semper et gravida ut, condimentum in ligula. Proin quam urna, rutrum et purus ac, egestas dignissim mi.Fusce scelerisque iaculis gravida. Nulla facilisi. Donec eu urna velit. Phasellus sit amet hendrerit turpis. Maecenas consequat imperdiet felis, posuere varius est consequat sed. Sed nibh diam, faucibus id suscipit vitae, laoreet et tellus. Integer luctus finibus consectetur. Nullam sit amet metus in turpis scelerisque ornare sit amet fringilla nibh. Proin et nibh malesuada, sagittis diam a, venenatis mi. Donec sodales fermentum eros, ut fermentum diam pharetra ut. Mauris at ex risus. Nam vehicula mi et eleifend pellentesque. In pharetra tortor et mi consequat cursus. Suspendisse potenti.";
var count=lorem.split(" ").length;
console.log(count);
console.log(lorem.match(/el/g).length);

phraseToCheck="Race ,car";
var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
var lowRegStr = phraseToCheck.toLowerCase().replace(re, '');
var reverseStr=lowRegStr.split('').reverse().join('');
if(reverseStr === lowRegStr)
console.log("Palindrome");
else
console.log("Not a Palindrome");