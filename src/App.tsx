import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./Components/Button";


function App() {
//пишем наполнение для наших кнопок
    const ButtonFoo1 = (subscriber:string, age:number, adress:string) => {
        console.log(subscriber, age, adress) //тут может быть какая угодно логика
    }

    const ButtonFoo2 = (subscriber:string) => {
        console.log(subscriber)

    }

    return (

        <div>
            <Button name={'MyButton-1'} callback={()=>ButtonFoo1('Im Vasya', 21, 'live in Kiev')}/>
            <Button name={'MyButton-2'} callback={()=>ButtonFoo2('Im PASHA')}/>
        </div>
    )
}

/* const MyCounter = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('It is counter')
}
const MyFirstSubskraiber  = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('It is Vasia')
}

const MySecondSubskraiber = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('It is Vova')
}

const onClickHandler = (name: string) => {
    console.log(name)
}

return (
    <div className="App">
        <button
            onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('some information')}>MyFirstYouTobeChenel-1
        </button>
        <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vova')}>MyFirstYouTobeChenel-2
        </button>
        <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyFirstYouTobeChenel-3
        </button>


    </div>
);

}*/


export default App;
