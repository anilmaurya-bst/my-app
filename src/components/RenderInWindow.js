import React from 'react'
import TopApp from './TopApp'
import { useLocation } from 'react-router-dom'
const RenderInWindow = ({name}) => {
    const location=useLocation()
    const {from}=location.state
    return (
        <div>
            <h4>JJ</h4>
             {name}
        </div>
    )
}
export default RenderInWindow