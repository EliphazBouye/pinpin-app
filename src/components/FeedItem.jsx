// import styled from 'styled-components'


function FeedItem(props) {
    return (
    <div className="FItem pl-4 pr-4">
            <img className="rounded-lg" src={props.image} alt="" />
        <div className="text-left">
            <p>{props.user}</p>
            <p>{props.followers}</p>
        </div>
    </div>
    )
}


export default FeedItem;