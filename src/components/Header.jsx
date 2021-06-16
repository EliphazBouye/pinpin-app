import'./style/Header.css'

function Header() {
    return (
    <div className="HeaderContainer">
        {/* search input */}
        <div className="search__bar">
            <input type="text" placeholder="Find new pin" />
        </div>
        {/* filter button */}
        <div className="filter__btn">
            
        </div>
        {/* add new pin button */}

    </div>
    )
}

export default Header;