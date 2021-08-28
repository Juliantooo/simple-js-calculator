console.warn('This calculator program still have some bug, like cant chaining calculation minus number, and etc - jar')

const data = ['AC', 'CE', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.']
let screenView = ''
let operator = ''

const btnGroup = document.getElementById('btn-group')
const screen = document.getElementById('screen')


const createBtnElement = (btnClass, data) => {
    const btn = document.createElement('button')
    btnClass.split(" ").forEach(textClass => {
        btn.classList.add(textClass)
    });
    const text = document.createTextNode(data)
    btn.appendChild(text)

    btn.addEventListener('click', () => {
        doDataEvent(data)
    })

    return btn
}

const doDataEvent = (data) => {
    switch (data) {
        case '=':
            calculate(screenView)
            break;
        case 'AC':
            screenView = screenView.toString().slice(0, -1)
            screen.innerHTML = screenView
            break;
        case 'CE':
            screenView = ''
            screen.innerHTML = screenView
            break;
        case '+':
            operator ? calculate(screenView) : null
            assignDataAndOperator(data)
            break;
        case '-':
            operator ? calculate(screenView) : null
            assignDataAndOperator(data)
            break;
        case '*':
            operator ? calculate(screenView) : null
            assignDataAndOperator(data)
            break;
        case '/':
            operator ? calculate(screenView) : null
            assignDataAndOperator(data)
            break;
        default:
            assignData(data)
    }
}

const assignData = (data) => {
    screenView += data
    screen.innerHTML = screenView
}

const assignDataAndOperator = (data) => {
    operator = data
    screenView += data
    screen.innerHTML = screenView
}

const assignDataAndResetOperator = () => {
    operator = ''
    screen.innerHTML = screenView
}


const calculate = (data) => {
    const newData = data.split(operator)
    switch (operator) {
        case '+':
            screenView = parseInt(newData[0]) + parseInt(newData[1])
            assignDataAndResetOperator()
            break;
        case '-':
            screenView = parseInt(newData[0]) - parseInt(newData[1])
            assignDataAndResetOperator()
            break;
        case '*':
            screenView = parseInt(newData[0]) * parseInt(newData[1])
            assignDataAndResetOperator()
            break;
        case '/':
            screenView = parseInt(newData[0]) / parseInt(newData[1])
            assignDataAndResetOperator()
            break;
        default:
            break;
    }
}

const getClass = (data) => {
    if (data === '=') {
        return 'w-20 h-40 my-1 bg-btn-yellow rounded-md btn-text-color text-xl font-bold hover:bg-gray-400 hover:shadow-sm'
    } else if (data === '0') {
        return 'w-40 h-20 my-1 bg-btn-gray rounded-md btn-text-color text-xl font-bold absolute -bottom-1 left-1 hover:bg-gray-400 hover:shadow-sm'
    } else if (data === '.') {
        return 'w-20 h-20 my-1 bg-btn-gray rounded-md btn-text-color text-xl font-bold absolute -bottom-1 left-44 ml-0.5 hoverbg:-gray-400 hover:shadow-sm'
    } else {
        return 'w-20 h-20 my-1 bg-btn-gray rounded-md btn-text-color text-xl font-bold hover:bg-gray-400 hover:shadow-sm'
    }
}

data.forEach((data) => {
    const btnClass = getClass(data)
    btnGroup.append(createBtnElement(btnClass, data))
})