import React, {Component, Fragment} from 'react';
import "../default.css";
import ProgrammingData, {AcademicData} from "./programmingData";
import ProgrammingComp from "./ProgrammingComp";

class Programming extends Component {

    render() {
        return (
            <Fragment >
                <div className="header">
                    {
                        ProgrammingData.map((val, index) => {
                            return (<ProgrammingComp
                                    key={index} //for unique key
                                    images={val.img}
                                    title={val.title}
                                />
                            );
                        })
                    }
                </div>

            </Fragment>
        )
    }
}

export default Programming;