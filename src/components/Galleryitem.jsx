import { useState } from "react";

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleView = ()=>{
        return(
            <div>
                <h2> {props.item.trackName}</h2>
            </div>
        )
    }

    const defaultView = ()=>{
        return(
            <div>
                <h2> {props.item.trackName}</h2>
            </div>
        )
    }

    return(
        <div onClick={()=> setView(!view)} style={{'display': 'inline-block'}}>
            
            {view ? defaultView() : simpleView()}
        </div>
    )
}

export default GalleryItem