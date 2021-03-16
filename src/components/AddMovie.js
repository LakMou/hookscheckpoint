import React , {useState} from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg } from 'reactstrap'
import ModalComp from './ModalComp'
import AddImg from '../assets/add.png'
const AddMovie = ({handleAdd}) => {
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)
    return (
        <div>
            <Card onClick= {()=> setShow(true)}>
                <img 
                 width='100px'
                 height='100px'
                 src={AddImg}
                 alt= 'Card image'/>
            </Card>
            { show && (
                <ModalComp isOpen={show} toggle={toggleShow} handleAdd = {handleAdd} />
            )}
        </div>
    )
}
AddMovie.propTypes = {
    handleAdd: PropTypes.func.isRequired
}
export default AddMovie