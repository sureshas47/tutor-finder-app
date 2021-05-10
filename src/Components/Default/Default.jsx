import React from "react";
import './default.css'
import academic from "../Images/study-after-see.jpeg";
import esewa from "../Images/esewa-logo.png";
import phonepay from "../Images/fonepay";
import Programming from "./ProgrammingCourses/Programming";
import {useHistory} from "react-router-dom";


const Default = () => {
    const history=useHistory();

    return (
        <>
            <div className="languages">
                <h1 className="main-header">
                    LEARN 50+ PROGRAMMING LANGUAGES !
                </h1>
                <Programming/>
            </div>
            <div className="academic-course">
                <h1 className="main-header">
                    LEARN 100+ ACADEMIC SUBJECTS !
                </h1>
                <div>
                    <img src={academic} alt=""/>
                </div>
            </div>
            <div className="payment">
                <h1 className="main-header">
                    OUR SECURE PAYMENT PARTNERS
                </h1>
                <div className="payments-online">
                    <img src={esewa} alt=""/>
                    <img src={phonepay} alt=""/>
                </div>

                    <div className="payment-method">
                        <input type="submit" className={'btn btn-lg btn-primary'} value="Pay With Esewa"
                               onClick={()=>history.push("/pay")}/>

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
                            <input type="submit"  className={'btn btn-lg btn-primary'} value="Pay With Fone-Pay"/>
                        </form>
                    </div>
                </div>


        </>
    )
}

export default Default;

