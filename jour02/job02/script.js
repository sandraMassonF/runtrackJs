
function showHide(){
    let article = document.getElementById('txt');

    if (!article){
        article = document.createElement('article');
        article.id = 'txt';
        article.textContent="L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } else{
        article.remove();
    }
}