import Option from "./Option";
import React from "react";
import rect from "../assets/Rectangle 5.png";
import {InfinitySpin} from "react-loader-spinner";
import {baseURL} from "../services/Constants";


function Competition_Rectangles(){

    console.log(baseURL)
    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

    // React will not wait till the data has been loaded
    React.useEffect(() => {
        fetch(baseURL + "/competitions")
            .then(res=> res.json())
            .then(data => {
                setData(data);
                console.log(data)
                setLoading(false);
            }).catch(error => setError(error))

    }, []);

    if(loading)
        return (
            <div style={{"padding-left":"150px"}}><InfinitySpin width='400' color="#527087"/></div>
        );

    if(error)
        return (
            <div className="competitions">
                Error
                <br/>
                <a href="/"><button className="viewmore">Return to Website</button></a>
            </div>
        );

    return (
        <div className="competitions">
            {
                data.map((item) => (
                <div className="project-div">
                    <img className="abtme-rect" src={rect}/>
                    <div className="project-inner">
                        <p><strong>{item.Name}</strong></p>
                            <div className="tags-div">
                                <Option key={item.Type} option={item.Type}/>
                            </div>
                        <br/>
                        <a href={"/competition/" + item.Name}><button className="viewmore">View More</button></a>

                    </div>
                </div>
                ))
            }

        </div>
    );
}

export default Competition_Rectangles;