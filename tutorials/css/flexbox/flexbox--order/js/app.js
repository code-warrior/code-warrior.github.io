/*jslint browser: true, single*/
/*global $, window */
window.onload = () => {
    let buttonsContainer = document.getElementById(`buttons`);

    let firstSpan = document.querySelector(`#flex-container > span:nth-child(1)`),
        secondSpan = document.querySelector(`#flex-container > span:nth-child(2)`),
        thirdSpan= document.querySelector(`#flex-container > span:nth-child(3)`),
        fourthSpan = document.querySelector(`#flex-container > span:nth-child(4)`),
        orderValueForFirstSpan = document.querySelector(`#report > span:nth-child(1)`),
        orderValueForSecondSpan = document.querySelector(`#report > span:nth-child(2)`),
        orderValueForThirdSpan = document.querySelector(`#report > span:nth-child(3)`),
        orderValueForFourthSpan = document.querySelector(`#report > span:nth-child(4)`);

    buttonsContainer.addEventListener(`click`, (event) => {
        switch(event.target.id) {
            case `noel`:
                firstSpan.style.order = `initial`; // Equal to 0
                orderValueForFirstSpan.innerHTML = `order: "${firstSpan.style.order}"`;

                secondSpan.style.order = `initial`; // Equal to 0
                orderValueForSecondSpan.innerHTML = `order: "${secondSpan.style.order}"`;

                thirdSpan.style.order = `initial`; // Equal to 0
                orderValueForThirdSpan.innerHTML = `order: "${thirdSpan.style.order}"`;

                fourthSpan.style.order = `initial`; // Equal to 0
                orderValueForFourthSpan.innerHTML = `order: "${fourthSpan.style.order}"`;

                break;

            case `leon`:
                firstSpan.style.order =  3;
                orderValueForFirstSpan.innerHTML = `order: ${firstSpan.style.order}`;

                secondSpan.style.order = 2;
                orderValueForSecondSpan.innerHTML = `order: ${secondSpan.style.order}`;

                thirdSpan.style.order = 1;
                orderValueForThirdSpan.innerHTML = `order: ${thirdSpan.style.order}`;

                fourthSpan.style.order = `initial`; // Or 0
                orderValueForFourthSpan.innerHTML = `order: "${fourthSpan.style.order}"`;

                break;

            case `leno`:
                firstSpan.style.order =  2;
                orderValueForFirstSpan.innerHTML = `order: ${firstSpan.style.order}`;

                secondSpan.style.order = 3;
                orderValueForSecondSpan.innerHTML = `order: ${secondSpan.style.order}`;

                thirdSpan.style.order = 1;
                orderValueForThirdSpan.innerHTML = `order: ${thirdSpan.style.order}`;

                fourthSpan.style.order = `initial`; // Or 0
                orderValueForFourthSpan.innerHTML = `order: "${fourthSpan.style.order}"`;

                break;

            case `elon`:
                firstSpan.style.order =  2;
                orderValueForFirstSpan.innerHTML = `order: ${firstSpan.style.order}`;

                secondSpan.style.order = 1;
                orderValueForSecondSpan.innerHTML = `order: ${secondSpan.style.order}`;

                thirdSpan.style.order = `initial`; // Or 0
                orderValueForThirdSpan.innerHTML = `order: "${thirdSpan.style.order}"`;

                fourthSpan.style.order = `initial`; // Or 0
                orderValueForFourthSpan.innerHTML = `order: "${fourthSpan.style.order}"`;

                break;

            default:
                break;
        }
    });
};
