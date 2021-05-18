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
            <div>
                <div className="languages">
                    <Fade bottom>
                        <h1 className="main-header">
                            LEARN 51+ PROGRAMMING LANGUAGES !
                        </h1>
                    </Fade>
                    <div className="programming">
                        <Programming/>
                    </div>
                </div>
                <div className="academic-course">
                    <Fade bottom>
                        <h1 className="main-header">
                            LEARN 100+ ACADEMIC SUBJECTS !
                        </h1>
                        <img src={academic} alt=""/>
                    </Fade>
                </div>
                <div className="pay">
                    <Fade bottom>
                        <h1 className="main-header">
                            OUR SECURE PAYMENT PARTNERS
                        </h1>
                    </Fade>
                    <div className="payments-online">
                        <Zoom>
                            <div className="payEsewa">
                                <img src={esewa} alt=""/>
                                <input type="submit" className={'btn btn-lg btn-primary'} value="Pay With Esewa"
                                       onClick={() => history.push("/pay")}/>
                            </div>
                            <div className="payPhonepay">
                                <img src={phonepay} alt=""/>
                                <input type="submit" className={'btn btn-lg btn-primary'} value="Pay With Fone-Pay"/>
                            </div>
                        </Zoom>
                    </div>
                    <div className="btnPayment-method">
                        <Fade top>

                        </Fade>
                    </div>
                    {/*<form id="payment-form" action="">*/}
                    {/*    <input type="hidden" name="PID" value="{{$PID}}"/>*/}
                    {/*    <input type="hidden" name="MD" value="{{$MD}}"/>*/}
                    {/*    <input type="hidden" name="AMT" value="{{$AMT}}"/>*/}
                    {/*    <input type="hidden" name="CRN" value="{{$CRN}}"/>*/}
                    {/*    <input type="hidden" name="DT" value="{{$DT}}"/>*/}
                    {/*    <input type="hidden" name="R1" value="{{$R1}}"/>*/}
                    {/*    <input type="hidden" name="R2" value="{{$R2}}"/>*/}
                    {/*    <input type="hidden" name="DV" value="{{$DV}}"/>*/}
                    {/*    <input type="hidden" name="RU" value="{{$RU}}"/>*/}
                    {/*    <input type="hidden" name="PRN" value="{{$PRN}}"/>*/}
                    {/*    <Fade top>*/}
                    {/*    </Fade>*/}
                    {/*</form>*/}

                </div>

            </div>
        </>
    )
}

export default Default;

