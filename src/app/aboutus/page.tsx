import React from 'react'
import ErrorsPage from '../components/errors/ErrorsPage'
import Nav from '../components/navgationbar/Nav'

export default function page() {
    return (
        <div>
            <Nav />
            <ErrorsPage />
        </div>
    )
}
