import PigTile from "./PigTile";

const PigList = ({ hogs }) => {
    const hogsMapped = hogs.map((hog) => {
        return (<PigTile hog={hog} key={hog.name} />)
    })

    return (
        <div className="ui grid container">

            <label for="filter">Select Greasiness:</label>
            <select className="filter" id="filter">
                <option value="greased">All</option>
                <option value="greased">Greased</option>
                <option value="nongreased">Non Greased</option>
            </select>

            <div>
                {hogsMapped}
            </div>
        </div>

    )
}

export default PigList;