import React from 'react'
import { useState } from 'react'

const ButtonDescriptions = ( desctiption ) => {

    const [description, setDescription] = useState("This has been changed")

    function changeDescription(){
        setDescription("this is the new state")
    }

    return (
        <div class="p-3 border bg-light"> { description } </div>
    )
}

export default ButtonDescriptions


