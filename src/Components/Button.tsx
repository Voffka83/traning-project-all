import React from 'react';


/*здесь мы формируем логику для всех кнопок в одном месте,
 а наполняем уже в Арр файле */

type ButtonType = {
    name: string,
    callback: () => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )


}