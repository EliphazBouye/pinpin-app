import FeedItem from './FeedItem'
import styled from 'styled-components'

function Feed() {
    return (
    <FeedContainer>

            <FeedItem user={'Samuel Bouye'} mode={'basic'} followers={450} image={'https://images.unsplash.com/photo-1623850700406-c93c88697a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}/>
            <FeedItem user={'Samuel Bouye'} mode={'medium'} followers={450} image={'https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}/>
            <FeedItem user={'Samuel Bouye'} mode={'basic'} followers={450} image={'https://images.unsplash.com/photo-1623817208901-f489c61c8483?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}/>
            
    </FeedContainer>
    )
}

const FeedContainer = styled.div`
    column-count: 4;
    column-gap: 10px;
    img {
  max-width: 100%;
  display: block;
}
    .FItem{
        margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    }
    div > img {
            grid-row: 1 / -1;
            grid-column: 1;
            }
`




export default Feed;


