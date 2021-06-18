import'./style/Header.css'

function Header() {
    return (
    <div className="flex justify-end items-center h-16 w-full mt-4">
        {/* search input */}
        <div className="flex items-center bg-gray-100 w-4/5 rounded-lg m-4 pl-4" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
            <input type="text" placeholder="Search" className="bg-gray-100 border-0 w-2/5 focus:outline-none h-12"/>
        </div>
        {/* filter button */}
        <div className="flex justify-around items-center">
            <div className="bg-white shadow p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </div>
            
            <div className="bg-gray-900 shadow ml-3 mr-3 p-3 text-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 colors-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </div>
        {/* add new pin button */}

    </div>
    )
}

export default Header;