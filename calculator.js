let Calculator = {};

// let button = document.getElementsByClassName("button");
// button = [...button];
// button.forEach(item => {
//     item.addEventListener("click", (e) => {
//         console.log(e.target.dataset.value);
//     });
// })
let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let calculator = document.getElementById("calculator");
let display = document.getElementById("display");
let action = "";
let x = 0;
let recent = '';
let calculate = () => {
    let result = 0;
    console.log(action);
    switch(action) {
        case 'div':
            result = parseFloat(x) / parseFloat(display.value);
            break;
        case 'mul':
            result = parseFloat(x) * parseFloat(display.value);
            break;
        case 'sub':
            result = parseFloat(x) - parseFloat(display.value);
            break;
        case 'add':
            result = parseFloat(x) + parseFloat(display.value);
            break;
        default:
            result = 0;
    }
    console.log(result);
    display.value = result;
    x = 0;
}
calculator.addEventListener("click", (e) => {
    let value = e.target.dataset.value;
    if([undefined, null].includes(value)) return;
    if(nums.includes(value)) {
        if(!nums.includes(recent)) display.value = value;
        else display.value += value
    } else {
        switch(value) {
            case 'ac':
                display.value = '';
                x = 0;
                break;
            case 'invert':
                display.value = -(display.value);
                break;
            case 'percent':
                display.value = parseFloat(display.value / 100);
                break;
            case 'div':
                action = value;
                x = display.value;
                break;
            case 'mul':
                action = value;
                x = display.value;
                break;
            case 'sub':
                action = value;
                x = display.value;
                break;
            case 'add':
                action = value;
                x = display.value;
                break;
            case 'equals':
                calculate();
                break;
            case 'default':
                display.value = '';
                x = 0;
                break;
        }
    }
    recent = value;
});