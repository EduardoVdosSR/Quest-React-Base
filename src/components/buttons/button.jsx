import React from 'react'
import change from './buttonFunc.js/change'
import Alert from './button-alert.jsx'
import './button.css'
import './colors.css'

class Button extends React.Component {
    render() {
        return (
            <>
                <p id="hide" className='hidden'>SEJA BEM VINDO AO <br />MEU DESAFIO DE REACT BASE</p>
                <button className='color-btn' onClick={change}>Trocar de cor</button>
                <Alert label="Baixar CV"/>
            </>
        )
    }
}

export default Button