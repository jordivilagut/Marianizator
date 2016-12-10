var quotes = [
    "La segunda ya tal.",
    "It's very difficult todo esto.",
    "Es el vecino el que elige el alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.",
    "Exportar es positivo porque vendes lo que produces.",
    "España es una gran nación y los españoles muy españoles y mucho españoles.",
    "Un vaso es un vaso y un plato es un plato.",
    "¿Y la europea?",
    "Una cosa es ser solidario, y otra es serlo a cambio de nada.",
    "Todo lo que se refiere a mí y que figura allí y a algunos compañeros míos de partido que figuran allí, no es cierto, salvo alguna cosa que es lo que han publicado los medios de comunicación.",
    "Es que me ha pasado una cosa verdaderamente notable, que lo he escrito aquí y no entiendo mi letra.",
    "Somos sentimientos y tenemos seres humanos.",
    "Esto no es como el agua que cae del cielo sin que se sepa exactamente por qué.",
    "Los catalanes hacen cosas.",
    "Va a subir el IVA de los chuches.",
    "Esto no es como el agua que cae del cielo sin que se sepa exactamente por qué.",
    "Tenemos que fabricar máquinas que nos permitan seguir fabricando máquinas, porque lo que no va a hacer nunca una máquina es fabricar máquinas. Esa batalla la tiene que ganar el ser humano."
    ];

$("#newQuoteBtn").click(quoteTransition);

function quoteTransition(){
    $('#quote').fadeOut(500,'linear', generateNewQuote);
    $('#quote').fadeIn(500,'linear');
}

function generateNewQuote(){
    var random = Math.floor(Math.random()*16);
    $('#quote').html(quotes[random]);
    tweetQuote(random);
}

function tweetQuote(random) {
    var tweetQuote = quotes[random].slice(0,126);
    var tweet = "<a href=\"https://twitter.com/intent/tweet?button_hashtag=Marianizator&text=\" class=\"twitter-hashtag-button\" data-size=\"large\" data-related=\"jordivilagut\" data-text=\"" + tweetQuote + "\">Tweet #Marianizator</a>";
    
    $("#tweetQuote").html(tweet);
    twttr.widgets.load();
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');