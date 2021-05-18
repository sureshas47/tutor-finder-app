import React from "react";
import { Route, Switch} from "react-router-dom";
import LoginForm from "../Authentication/Login/Login";
import SignupForm from "../Authentication/Signup/Signup";
import UserProfileList from "../Authentication/Signup/UserProfileList";
import StudentProfile from "../Profile/Student/StudentProfile";
import TeacherProfile from "../Profile/Teacher/TeacherProfile";
import Navmenu from "../layouts/Navbar";
import Default from "../Default/Default";
import Footer from "../layouts/Footer";
import Success from "../Default/PaymentStatus/Success";
import Failure from "../Default/PaymentStatus/Failure";
import Chat from "../Chat/Chat";
import ChatAppHome from "../ChatHome/chat-app-home";
import payment from "../Default/Payment/Payment";
const Routes = () => {
    return (
       <div>
        <Navmenu/>
            <Switch>

                <Route exact path="/" component={Default}/>
                <Route path="/signup" component={SignupForm}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/userlist" component={UserProfileList}/>
                <Route path="/student-profile" component={StudentProfile}/>
                <Route path="/teacher-profile" component={TeacherProfile}/>
                <Route path="/default" component={Default}/>
                <Route path="/success" component={Success}/>
                <Route path="/failure" component={Failure}/>
                <Route exact path="/chat/:chatId" component={Chat}/>
                <Route path="/chat-app" component={ChatAppHome}/>
                <Route path="/pay" component={payment}/>

            </Switch>
           <Footer/>
       </div>

    )
}
export default Routes;