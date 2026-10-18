
function Button(props) {
    return(
        <button 
            //onClick={props.onClick} 
            className="bg-slate-950 p-2 rounded-md text-white"
            {...props}
        >
            {props.children}
        </button>
    );
}

export default Button;