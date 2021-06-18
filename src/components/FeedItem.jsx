import styled from 'styled-components'


function FeedItem(props) {
    return (
    <div className="FItem">
            <img className="" src={props.image} alt="" />
        <div >
            <p>{props.user}</p>
            <p>{props.followers}</p>
        </div>
    </div>
    )
}


export default FeedItem;