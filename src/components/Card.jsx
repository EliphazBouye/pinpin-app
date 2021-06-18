function Card() {
    return (
        <div className="mb-8 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://images.unsplash.com/photo-1621570171784-29f3a911570d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Shika Gupta</p>
                <p className="text-gray-400 font-medium">Last login: 10/05/2021</p>
                </div>
            </div>
        </div>
    )
} 

export default Card