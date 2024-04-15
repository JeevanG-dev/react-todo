import css from "./Error.module.css"

function Error({errormessage}){



    return <>{errormessage.length === 0 && <h2 className= {css.errorMessage}>Enjoy Your Date. You have completed your task.</h2>}</>
}

export default Error; 