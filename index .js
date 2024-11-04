
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~`";
const generatePass = document.getElementById('generatePass');
const passShow = document.getElementById('passShow');


const randomPassCreator = () => {
    let max = 20; let min = 8;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    let passwordStore = "";
    for( let i = 0; i < randomNum; i++){
        let chartIndex = Math.floor(Math.random() * characters.length);
        let passLetter = characters[chartIndex];
        passwordStore += passLetter
        passShow.value = passwordStore
    }
    
}
randomPassCreator()  // first auto run this function for first visit 

generatePass.addEventListener('click', () => {
    randomPassCreator()
})

// click here to copy password
const copyPass = document.getElementById('copyPass');
const copyText = document.getElementById('copyText');

copyPass.addEventListener('click', () => {
    passShow.select()
    document.execCommand('copy')
    copyText.style.display = 'inline';
    setTimeout(() => {
        copyText.style.display = "none"
    }, 1000 );
})