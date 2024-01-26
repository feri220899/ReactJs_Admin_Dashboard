import React, { useState } from "react"

function Home() {
    const [ data, setData ] = useState(false)
    const handleClick = () => {
        setData(!data)
    };

    return (
        <div>
           <h1 className="text-4xl"> Hello Wolrd = {data ? 1 : 0} <br /></h1>
            <button onClick={handleClick}
                className="inline-block mt-4 cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-gray-900">
                Test useState
            </button>
        </div>
    )
}

export default Home
