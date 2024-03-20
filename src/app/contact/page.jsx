import React from 'react'
import ErrorsPage from '../components/errors/ErrorsPage'
// import Nav from '../components/navgationbar/Nav'
import SecondNav from '../components/secondNav/SecondNav';

export default function page() {
    return (
        <div>
            <SecondNav />
            <ErrorsPage />
        </div>
    )
}
