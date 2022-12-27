//1)string length

var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write("<h4>1)string length:</h4>"+ value.length);

//2)string.slice()
var value = "Apple, yellow, mango";
var part = value.slice(7,13);
document.write("<h4>2)string.slice():</h4>"+part);
document.write("</br>");

var value = "Apple, yellow, mango";
var part = value.slice(7);
document.write(part);
document.write("</br>");

var value = "Apple, yellow, mango";
var part = value.slice(-12);
document.write(part);
document.write("</br>");

var value = "Apple, yellow, blue";
var part = value.slice(-12, -6);
document.write(part);

//3)string.substring()
var value = "Apple, yellow, blue";
var part = value.substring(7);
document.write("<h4>3)string.substring():</h4>"+part);

//5)string.substr()
var str ="Apple, yellow, blue";
var part=str.substr(7,6);
document.write("<h4>4)string.substr():</h4>"+part);
document.write("</br>");

var str = "Apple, yellow, blue";
var part = str.substr(7);
document.write(part);
document.write("</br>");

var str = "Apple, yellow, blue";
var part = str.substr(-4);
document.write(part);
document.write("</br>");

//5)string.replace()
var text = "Please go Mysore!";
var newText = text.replace("Mysore", "Bangalore");
document.write("<h4>5)string.replace():</h4>"+newText);            //replaces a specified value with another value in a string
document.write("</br>");

var text = "Please go Mysore and Mysore!"; 
var part=text.replace("Mysore","Bangalore");                       //replaces only the first match
document.write(part);
document.write("</br>");

var text = "Please go Mysore!";
var newText = text.replace("MYSORE", "Bangalore");
document.write(newText); 
document.write("</br>");                                           //with upper-case will not work//Regular expressions are written without quotes.

var text = "Please go Mysore!";
var newText = text.replace(/MYSORE/i, "Bangalore");
document.write(newText);                                           //To replace case insensitive, use a regular expression with an /i flag (insensitive)
document.write("</br>"); 

var text = "Please go Mysore and Mysore!";
var newText = text.replace(/Mysore/g, "Bangalore");
document.write(newText);                                          // replace all matches, use a regular expression with a /g flag (global match):

//6)string.replaceAll()
var text = "I love cats. Cats are very easy to love. Cats are very popular.";
var text = text.replaceAll("Cats","Dogs");
var text = text.replaceAll("cats","dogs");
document.write("<h4>6)string.replaceAll():</h4>"+text);
document.write("</br>");

var text = "I love cats. Cats are very easy to love. Cats are very popular";
var text = text.replaceAll(/Cats/g,"Dogs");
var text = text.replaceAll(/cats/g,"dogs");
document.write(text);

//7)string.toUpperCase()
var value="jayasri"
var text = value.toUpperCase();
document.write("<h4>7)string.toUpperCase():</h4>"+text);

//8)string.toLowerCase
var value="SHALINI"
var text = value.toLowerCase();
document.write("<h4>8)string.toLowerCase():</h4>"+text);

//9)string.concat()                           //joins two or more strings:
var text1 = "welcome";
var text2 = "All!";
var text3 = text1.concat(" ",text2);
document.write("<h4>9)string.concat():</h4>"+text3);
document.write("</br>");

var text = "Hello" + " " + "india!";
var text = "Hello".concat(" ", "india!");
document.write(text);

//10)string.trim()                              //removes whitespace from both sides of a string:
var text1 = "   Hello welcome!   ";
var text2 = text1.trim();
document.write("<h4>10)string.trim():</h4>"+"Length text1 = " + text1 + "<br>Length text2 = " +text2);

//11)string.trimStart()
var text1 = "   Hello Welcome!   ";
var text2 = text1.trimStart();
document.write("<h4>11)string.trimStart():</h4>"+"Length text1 = " + text1 + "<br>Length text2 = " + text2);
 document.write("</br>");
 
//12)string.trimEnd
var text1 = "   Hello india!   ";
var text2 = text1.trimEnd();
document.write("<h4>12)string.trimEnd():</h4>"+"Length text1 = " + text1+ "<br>Length text2 = " + text2);
document.write("</br>");

//13)String .padStart()
var text = "5";
var text=text.padStart(4,"x");
document.write("<h4>13)string.padStart():</h4>"+text);
document.write("</br>");

var text = "5";
var text = text.padStart(4,"0");
document.write( text);
document.write("</br>");

var numb = 5;
var text = numb.toString();
var padded = text.padStart(4,"0");
document.write(padded);

//14)string.padEnd()
var text = "5";
var padded = text.padEnd(4,"x");
document.write("<h4>14)string.padEnd():</h4>"+padded);
document.write("</br>");

var text = "5";
var padded = text.padEnd(4,"0");
document.write(padded);
document.write("</br>");

var numb = 5;
var text = numb.toString();
var padded = text.padEnd(4,"x");
document.write(padded);

//15)string.charAt
var text = "HELLO WORLD";
var char = text.charAt(0);
document.write("<h4>15)string.charAt():</h4>"+char);
document.write("</br>");

var text = "HELLO WORLD";
var char = text[0];
document.write(char);
document.write("</br>");

 //16)string.split()
 var text = "a,b,c,d,e,f";
 var myArray = text.split(",");
 document.write("<h4>16)string.split():</h4>"+"<li>"+myArray[0]+"</li>");
 document.write("</br>");

var text = "i am jayasri from neyveli.i have an completed mca from cuddalore ";
var myArr = text.split("");
var text = "";
for (var i = 0; i < myArr.length; i++)
{
  text += myArr[i] + "<br>"
}
document.write(text);


//17)string.charCodeAt()
var text = "HELLO WORLD";
document.write("<h4>17)string.charCodeAt():</h4>"+text.charCodeAt(6));
document.write("</br>");

var str = "HELLO WORLD";
document.write(str[0]); 
document.write("</br>");                                         //property access on string

var  text = "HELLO WORLD";
text[0] = "A";                                                   // Does not work
document.write(text);
document.write("</br>");


//18)string.at()
var sentence = 'i am jayasri';
var index = 5;
document.write("<h4>18)string.at():</h4>"+sentence.at(index));
document.write("</br>");

var sentence = 'i am jayasri';
var index = -5;
document.write(sentence.at(index));
document.write("</br>");

//19)string.codePointAt()
var icons = 'hello world';
document.write("<h4>19)string.codePointAt():</h4>"+icons.codePointAt(6));

//20)string.endswith()
var str1 = 'Cats are the best!';
document.write("<h4>20)string.endswith():</h4>"+str1.endsWith('best!'));
document.write("</br>");

var str2 = 'Cats are the best!';
document.write(str2.endsWith('best', 17));
document.write("</br>");

var str3 = 'Is this a question?';
document.write(str3.endsWith('question'));
document.write("</br>");

//21)string.fromcharCode()
document.write("<h4>21)string.fromcharCode():</h4>"+String.fromCharCode(189, 43, 190, 61));

//22)string.includes()
var sentence = 'The quick brown fox jumps over the lazy dog.';
var word = 'fox';
document.write("<h4>22)string.includes():</h4>"+sentence.includes(word));

//23)string.indexOf
var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
var searchTerm = 'dog';
var indexOfFirst = paragraph.indexOf(searchTerm);
document.write("<h4>23)string.indexOf():</h4>"+`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
document.write("</br>");
document.write(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

//24)string.lastIndexOf()
var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
var searchTerm = 'dog';
document.write("<h4>24)string.lastindexOf():</h4>"+`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

//25)string.match()
var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
document.write("<h4>25)string.match():</h4>"+found);

//26)string.matchAll()
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';
var array = [...str.matchAll(regexp)];
document.write("<h4>26)string.matchAll():</h4>"+array[0]);
document.write("</br>");
document.write(array[1]);
  
//27)string.repeat()
var chorus = 'Because I\'m happy. ';
document.write("<h4>26)string.repeat():</h4>"+chorus.repeat(5));
document.write("</br>");

//28)string.search()
var text = "Mr. Blue has a blue house";
var position = text.search("Blue");
document.write("<h4>28)string.search():</h4>"+position);
document.write("</br>");

var text = "Mr. Blue has a blue house"
var position = text.search(/Blue/);
document.write(position);
document.write("</br>");

var text = "Mr. Blue has a blue house"
var position = text.search(/Blue/i);
document.write(position);
document.write("</br>");


//29)string.toString()
var stringObj = new String('foo');
document.write("<h4>29)string.toString():</h4>"+stringObj);
document.write("</br>");
document.write(stringObj.toString());

//30)string.valueOf()
var stringObj = new String('foo');
document.write("<h4>30)string.valueOf():</h4>"+stringObj);
document.write("</br>");
document.write(stringObj.valueOf());

//31)startsWith()
var str1 = 'Saturday night plans';
document.write("<h4>31)string.startWith():</h4>"+str1.startsWith('Sat'));
document.write("</br>");

var str1 = 'Saturday night plans';
document.write(str1.startsWith('Sat', 1));





