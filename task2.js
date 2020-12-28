let quote = '? saya harus mengapa bisa, lain orang kalau';
let splittedQuote = quote.split(" ");
let reverseQuote=[];
for(let i=(splittedQuote.length)-1; i>=0; i--)
{
     reverseQuote.push(splittedQuote[i]); 
}
 console.log(reverseQuote.join(" ")); 