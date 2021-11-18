import views from '../views/home.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btn-click')
    btnClick.addEventListener('click', () => {
        alert('Click')
    })

    return  divElement;
};