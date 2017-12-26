export const BaseURL = 'https://api.themoviedb.org/3/';
export const ImagesURL = 'https://image.tmdb.org/t/p/';

export function ListenChangeLanguage(nameFunction: Function) {
    let matSelect = document.querySelector('#idselectLanguage');
    matSelect.addEventListener('click', () => {
        let optionSelects = document.querySelectorAll('.selectLanguage');
        for (let i = 0; i < optionSelects.length; i++) {
            optionSelects[i].addEventListener('click', (evt) => {
                
                nameFunction();
            });
        }
    });
}