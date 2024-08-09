import React from "react";
import NavBar from "./navBar";
import Landing from "./landing";
import Card from "./card";
const App = () => {
    //This is a form to create an array with any amount of elements, in this case is 4 (length:4)
    //Array.from(length,(element,index)=>())    note that parenthesis is after arrow =>  so if you put it with keys {}
    // this won't render anything 
    const repeat = Array.from({ length: 4 }, (_, index) => (<Card key={index} />)
    );
    //to use for, we will need to create an array
    let repeated = [];
    for (let index = 0; index < 4; index++) {
        repeated.push(
            <Card key={index} />
        )

    }
    return (
        <div >
            <NavBar />
            <div className="container-fluid w-75">
                <Landing />
            </div>
            <div className="container-fluid w-75">
                {/* remember, here isn't necessary to put () after repeat */}
                <div className="row">
                    {repeat}
                </div>
            </div>

        </div>
    )
}

export default App;