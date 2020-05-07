import * as $ from 'jquery'; // импорт библиотеки jquery - *(импортировать все) as(в) $(переменную)

function createAnalitics(): object {
    let counter: number = 0;
    let destroyed: boolean = false;

    const listener = (): number => counter++;

    // document.addEventListener('click', listener);
    // тоже самое - только с помощью jquery
    $(document).on('click', listener);

    return {
        destroy() {
            // document.removeEventListener('click', listener);
            // тоже самое - только с помощью jquery
            $(document).off('click', listener);
            destroyed = true;
        },
        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`;
            }
            return counter;
        }
    }
}

window['analytics'] = createAnalitics();
