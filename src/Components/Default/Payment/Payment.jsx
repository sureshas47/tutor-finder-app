import React from "react";

export default function esewaPayment(){
const path="https://uat.esewa.com.np/epay/main";
const params= {
    amt: 1000,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 1000,
    pid: "aaaee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://localhost:3000/success",
    fu: "http://localhost:3000/failure"
}

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for(const key in params) {
        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();

}










