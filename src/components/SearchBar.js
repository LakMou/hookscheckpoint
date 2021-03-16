import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'
import Rate from './Rate'
const SearchBar = ({handleSearch,ratingSearch,setRatingSearch}) => {
    return (
        <div style={{display:'flex'}}>
           <Input 
                type='text'
                placeholer='enter the title you search...'
                onChange={handleSearch}
           /> 
           <div >
           <Rate rating ={ratingSearch} starIndex={setRatingSearch}/>
           </div>
           
        </div>
    )
}
SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}
export default SearchBar 