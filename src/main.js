document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // aqui pega todos os botões, para selectionar um especifico usa-se [data-tab-button=star_plus] para selecionar apenas o botão do star plus
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() { 
        const actualPosition = window.scrollY;

        if (actualPosition < heightHero) {
            hiddenHeaderElements();
        } else { 
            showHeaderElements();
        }
    })

    
    // seção de atrações botões das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');

            //console.log(botao.target.dataset.tabButton);
        })
    }
    //faq accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})

function hiddenHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseAnswer(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}