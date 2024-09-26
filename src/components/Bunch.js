import React from 'react'
import Room from './Room'
import Batuk from './Batuk'
import Whome from './Whome'
import Smokesection from './Smokesection'
import Faq from './Faq'
import Tokenomics from './Tokenomics'
import Footer from './Footer'
import Header from './Header'
function Bunch() {
    return (
        <div className="relative  overflow-clip ">
            <div className="header fixed bottom-0 left-0 w-full z-[100]">
                <Header />
            </div>




            <Room />
            <Batuk />
            <Whome />
            <Smokesection />
            <Faq />
            <Tokenomics />
            <Footer />

        </div>
    )
}

export default Bunch