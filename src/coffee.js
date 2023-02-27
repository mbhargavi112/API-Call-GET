import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Coffee() {
    const [details, setDetails] = useState();

    const getcoffeedetails = async () => {
        let details = await axios.get("https://api.sampleapis.com/coffee/hot")
        setDetails(details.data)
    }

    useEffect(() => {
        getcoffeedetails();
    }, [])
    return (
        <div className='coffee-container'>
            {details && details.map((el => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <p>{el.title}</p>
                                <p>{el.description}</p>
                                <p>{el.ingredients}</p>
                                <img  className="Coffee w-50"src={el.image}></img>
                            </div>
                        </div>
                    </div>
                )
            }
            ))}
        </div>
    );

}

export default Coffee;