import React from "react";
import ListingCard from "./ListingCard";
import { Card, Segment } from "semantic-ui-react"

const ListingsContainer = ( {user, setUser, listings, setListingSpotlight, removeFavorite, lightMode} ) => {

    const cardComponents = listings?.map( listingObj=>  {

    return <ListingCard
        key={listingObj.listing_id}
        user={user}
        setUser={setUser}
        listing={listingObj} 
        setListingSpotlight={setListingSpotlight}
        removeFavorite={removeFavorite}/>
    })


    return(
    <div className='grid-container'> 
        <Segment id={lightMode ? 'segment-light' : 'segment-dark'} style={{overflow: 'auto', maxHeight: '90vh', maxWidth: '50vw'}}>
        {listings?.length === 0 && <h2>Sorry, no listings match your current filters. Try changing your settings</h2>}
            <Card.Group itemsPerRow={3}>
                {cardComponents}
            </Card.Group>
        </Segment>
          
    </div>
    )

}

export default ListingsContainer;