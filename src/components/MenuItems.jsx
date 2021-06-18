function MenuItems(props) {
    return (
        <div className="w-full ">
            {props.isActive 
            ? 
                <button className="bg-white bg-gray-50 font-bold w-full text-left focus:outline-none p-2 pl-16 pr-20 border-r-2 border-gray-600 flex">{props.icon} {props.name}</button>
            :  
                <button className="bg-white focus:bg-gray-100 w-full text-left focus:outline-none p-2 pl-16 pr-20 flex opacity-50"> {props.icon} {props.name} {props.count && <span className="backdrop-opacity-100 bg-yellow-600 text-white rounded-full h-6 w-6 text-center ml-6">{props.count}</span>} </button>
            }
        </div>
    )
}

export default MenuItems