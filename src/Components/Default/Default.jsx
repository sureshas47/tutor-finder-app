import React from "react";
import './default.css'
import academic from "../Images/study-after-see.jpeg";
import esewa from "../Images/esewa-logo.png";
import phonepay from "../Images/fonepay";
import Programming from "./ProgrammingCourses/Programming";
import {useHistory} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Default = () => {
    const history = useHistory();

    return (
        <>
            <div className="languages">

                <Fade bottom>
                    <h1 className="main-header">
                        LEARN 50+ PROGRAMMING LANGUAGES !
                    </h1>
                </Fade>
                <Programming/>
            </div>
            <div className="academic-course">
                <Fade bottom>
                    <h1 className="main-header">
                        LEARN 100+ ACADEMIC SUBJECTS !
                    </h1>
                </Fade>
                <div>
                    <Fade bottom>
                        <img src={academic} alt=""/>
                    </Fade>

                </div>
            </div>
            <div className="payment">
                <Fade bottom>
                    <h1 className="main-header">
                        OUR SECURE PAYMENT PARTNERS
                    </h1>
                </Fade>
                <div className="payments-online">
                    <Zoom>
                        <img src={esewa} alt=""/>
                        <img src={phonepay} alt=""/>
                    </Zoom>
                </div>
                <div className="payment-method">
                    <Fade top>
                        <input type="submit" className={'btn btn-lg btn-primary'} value="Pay With Esewa"
                               onClick={() => history.push("/pay")}/>
                    </Fade>

                    <form id="payment-form" action="">
                        <input type="hidden" name="PID" value="{{$PID}}"/>
                        <input type="hidden" name="MD" value="{{$MD}}"/>
                        <input type="hidden" name="AMT" value="{{$AMT}}"/>
                        <input type="hidden" name="CRN" value="{{$CRN}}"/>
                        <input type="hidden" name="DT" value="{{$DT}}"/>
                        <input type="hidden" name="R1" value="{{$R1}}"/>
                        <input type="hidden" name="R2" value="{{$R2}}"/>
                        <input type="hidden" name="DV" value="{{$DV}}"/>
                        <input type="hidden" name="RU" value="{{$RU}}"/>
                        <input type="hidden" name="PRN" value="{{$PRN}}"/>
                       <Fade top>
                           <input type="submit" className={'btn btn-lg btn-primary'} value="Pay With Fone-Pay"/>
                       </Fade>


                    </form>
                </div>
            </div>


        </>
    )
}

export default Default;

