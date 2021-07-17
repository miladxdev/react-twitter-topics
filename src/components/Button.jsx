function Button({onFollow, text}) {
     
    return (  
        <button 
            style={text === "Following" ? followingStyle : followStyle }
            className="btn" 
            onClick={onFollow}>{text}
        </button>
    )
}

const followingStyle = {
    background: "#794bc4",
    color: "#15181c"
}

const followStyle = {
    background: "transparent",
    color: "#794bc4"
}

export default Button