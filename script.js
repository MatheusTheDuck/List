
const botao = document.querySelector('#Adicionar');
            const texto = document.querySelector('#item');
            const list = document.querySelector('#list');
            const remover = document.querySelector('#remover');


            botao.addEventListener('click', () => {
                let inf = JSON.parse(localStorage.getItem('adicionar')) || [];

                inf.push(texto.value);
                localStorage.setItem('adicionar', JSON.stringify(inf));
                let items = JSON.parse(localStorage.getItem('adicionar'));

                list.innerHTML += `<li> <input type="checkbox">
            ${texto.value}
            </li>`;
                texto.value = '';
            });

            window.addEventListener('DOMContentLoaded', () => {
                ;JSON.parse(localStorage.getItem('adicionar')).forEach((el) => {
                    list.innerHTML += `
    <li>
        ${el}
    </li>
`;
                });
            });
            remover.addEventListener('click', () => {
                localStorage.clear();
                list.innerHTML = '';

                texto.value = '';
            });
