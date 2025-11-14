const Notification = ({message, type})=>{
    const className = type ==='succes'? "notification succes" : "notification error"
    console.log(className)
    if (message === null){
        return null
    }

    return(
        <div className={className}>
            <p>{message}</p>
        </div>
    )
}

export default Notification