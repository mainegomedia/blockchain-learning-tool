const Button = ({ text, onclick }) => {

    return (
        <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button"> { text } </button>
        </div>
    )
}

Button.propTypes = {

}

export default Button
