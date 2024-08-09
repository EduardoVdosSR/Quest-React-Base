const Alert = (props) => {
    return (
        <div>
            <button onClick={() => warn(props)}>{props.label}</button>
        </div>
    )
}

function warn(props) {
    alert(`A label desse botão é ${props.label}`)
}

Alert.propTypes = {
    label: "Baixar CV"
}

export default Alert