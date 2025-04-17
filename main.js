const prevBtns = document.querySelectorAll('.previous')
const nxtBtns = document.querySelectorAll('.next')
const tanyaArticle= document.querySelector('.tanya-article');
const johnArticle = document.querySelector('.john-article');

let showingTanya = true

function showTanya() {
    johnArticle.classList.add('hidden');
    tanyaArticle.classList.remove('hidden');
    showingTanya= true
}
function showJohn() {
    tanyaArticle.classList.add('hidden');
    johnArticle.classList.remove('hidden');
    showingTanya= false
}

prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click', ()=>{
        if (showingTanya) {
            showJohn()
        } else {
            showTanya()
        }
    })
});

nxtBtns.forEach(nxtBtn => {
    nxtBtn.addEventListener('click', () =>{
      if (showingTanya) {
        showJohn()
      } else {
        showTanya()
      }
    });
});
