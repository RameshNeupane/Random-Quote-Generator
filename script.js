var Quote = [
    {
        quote:'"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."',
        name:"-Dr. Suess"
    },
    {
        quote:'"Get busy living or get busy dying."',  
        name:"-Stephen King"
    },
    {
        quote:'"Be where you are; otherwise you will miss your life"',
        name:"-Buddha"
    },
    {
        quote:'"Well done, is better than well said."',
        name:"-Benjamin Franklin"
    },
    {
        quote:'"It always seems impossible until its done."',
        name:"-Nelson Mandela"
    },
    {
        quote:'"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."',
        name:"-Albert Einstein"
    },
    {
        quote:'"Try not to become a man of success, but rather try to become a man of value."',
        name:"-Albert Einstein"
    },
    {
        quote:'"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."',
        name:"-Albert Einstein"
    },
    {
        quote:'"Our greatest glory is not in never falling, but in rising every time we fall."',
        name:"-Confucius"
    },
    {
        quote:'"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        name:"-Winston Churchill"
    },
    {
        quote:'"There is only one thing that makes a dream impossible to achieve: the fear of failure."',
        name:"-Paulo Coelho"
    },
    {
        quote:'"If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles."',
        name:"-Wayne Dyer"
    },
    {
        quote:'"Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed."',
        name:"-Bob Riley"
    },
    {
        quote:'"Accept failure because it awaits success"',
        name:"-Ramesh Neupane"
    },
    {
        quote:'"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."',
        name:"-Stephen Hawking"
    },
];
//console.log(Quote.length)

function getRandomIndex(){
  var quoteIndex = Math.floor(Math.random() * Quote.length)
  //return quoteIndex
  return quoteIndex
}
displayQuote(newQuote())
document.addEventListener('click', function(){
    displayQuote(newQuote())
    
})
function newQuote(){
    return Quote[getRandomIndex()]
}

//console.log(newQuote())

function displayQuote(newQuote){
    document.querySelector('#quote').innerHTML = newQuote.quote
    document.querySelector('#person').innerHTML = newQuote.name
}
