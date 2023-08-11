import React from 'react'
import NewCard from './NewCard'

export default function TestComponent(props) {
    return (

        <>
            <div>
                Test components = {props.children}
            </div>

            <NewCard></NewCard>
        </>
    )
}
