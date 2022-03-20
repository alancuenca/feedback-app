// import PropTypes from 'prop-types'
//once again brought these two in \/
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'



function FeedbackStats() {
    //and this goes with the two imports above. The information is being imported from FeedbackContext.js
    const {feedback} = useContext(FeedbackContext)

    //calculate ratings avg
    let average = feedback.reduce((accumulator, currentFunction) => {
        return accumulator + currentFunction.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return(
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}
// no longer needed
// FeedbackStats.prototype = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats