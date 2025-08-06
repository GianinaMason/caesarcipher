const btnHide = document.querySelector ('#hide');
const btnShow = document.querySelector ('#show');
const key = document.querySelector('key');

const listLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let newText = '';

btnHide.addEventListener('click', ()=> {
    const textArea = document.querySelector('#hide');
    const keyValue = Number(key.value);

    for (const letter of textArea.value) {
        if (!listLetters.includes(letter)) {
             continue
        }

           const indexLetter = listLetters.findIndex((item)=> item === letter);
            let indexNewLetter = indexLetter + keyValue;

            if(indexNewLetter > 25) {
                indexNewLetter -=26
            }
             new Text += listLetters[indexNewLetter]
             textArea.value = newText;
             }
    newText = '';
})
btnShow.addEventListener('click', ()=> {
    const textArea = document.querySelector('#show');
    const keyValue = Number(key.value);

    for (const letter of textArea.value) {
        if (!listLetters.includes(letter)) {
             continue
        }

           const indexLetter = listLetters.findIndex((item)=> item === letter);
            let indexNewLetter = indexLetter + keyValue;

            if(indexNewLetter > 0) {
                indexNewLetter -=26
            }
             new Text += listLetters[indexNewLetter]
             textArea.value = newText;
             }
    newText = '';
})
