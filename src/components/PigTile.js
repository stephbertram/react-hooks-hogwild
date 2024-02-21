import { useState } from "react"

const PigTile = ({ hog }) => {

    const [displayDetails, setDisplayDetails] = useState(false);

    const showDetails = () => {
      setDisplayDetails(displayDetails => !displayDetails)
    // setDisplayDetails(!displayDetails)
    // Since we care about the old value and are calculating a new value based on it, should use a function
    }
    
    return (
        <div className="ui eight wide column" onClick={showDetails}>
            <h2>{hog.name}</h2>
            {displayDetails ? (
                <>
                    <p>Speciality: {hog.specialty}</p>
                    <p>Weight: {hog.weight} lbs</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </>
            ) : null }
            <img src={hog.image} alt={hog.name}/>
        </div>
    )
}

export default PigTile;