import { useState,useEffect } from 'react'
import FeedItem from './FeedItem'
import styled from 'styled-components'

function Feed() {

    const [photos, setPhotos] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=N3V-Cb7wQYyzHeRCf9DDRErmMur6s7aCwiBkFTHti_M')
        const data = await response.json();
        setPhotos(data)
    },[])

    return (
    <FeedContainer>
        {photos.map((photo) => {
            <FeedItem user={'Samuel Bouye'} mode={'basic'} followers={450} image={photo.urls.regular} key={photo.id}/>

        })}
            
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


