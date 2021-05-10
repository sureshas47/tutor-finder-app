import React, {Fragment} from "react";
import Fade from 'react-reveal/Fade';

function ProgrammingComp(props) {
    return (
        <Fragment>
                    <div className="header">
                        <Fade left>
                            <div id="images">
                                <img src={props.images} alt="languages"/>
                            </div>
                            <div id="title">
                                {props.title}
                            </div>
                        </Fade>
                    </div>
        </Fragment>
    );
}

export default ProgrammingComp;