import "./ComunityPage.css"
import Img from "../../images"
import { memo } from "react";

function ComunityPage() {

    return(
        <div className="comunityPage">
            <h2>
                You might be wondering what exactly React Router does. How can it help you build your app? What exactly is a router, anyway?
                If you've ever had any of these questions, or you'd just like to dig into the fundamental pieces of routing, you're in the right place. This document contains detailed explanations of all the core concepts behind routing as implemented in React Router.
                Please don't let this document overwhelm you! For everyday use, React Router is pretty simple. You don't need to go this deep to use it.
                React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to. We'll go into detail on the three main jobs of React Router:
                Subscribing and manipulating the history stack
                Matching the URL to your routes
                Rendering a nested UI from the route matches
            </h2>
            <img src={Img.fotocom} alt=''/>
        </div>
    )
    
}

export default memo(ComunityPage)