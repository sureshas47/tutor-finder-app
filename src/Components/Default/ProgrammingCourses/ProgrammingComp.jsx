import React, {Fragment} from "react";

function ProgrammingComp(props) {
    return (
        <Fragment>

                <div className="header">
                    <div id="images">
                        <img src={props.images} alt="languages"/>
                    </div>
                    <div id="title">
                        {props.title}
                    </div>
                </div>
        </Fragment>
    );

}

export default ProgrammingComp;