import React from "react";
import { Route, Switch} from "react-router-dom";
import LoginForm from "../Authentication/Login/Login";
import SignupForm from "../Authentication/Signup/Signup";
import UserProfileList from "../Authentication/Signup/UserProfileList";
import StudentProfile from "../Profile/Student/StudentProfile";
import TeacherProfile from "../Profile/Teacher/TeacherProfile";
import Navbar from "../layouts/Navbar";
import Default from "../Default/Default";
import Footer from "../layouts/Footer";
const Routes = () => {
    return (
       <div>
        <Navbar/>
            <Switch>

                <Route exact path="/" component={LoginForm}/>
                <Route path="/signup" component={SignupForm}/>
                <Route path="/userlist" component={UserProfileList}/>
                <Route path="/student-profile" component={StudentProfile}/>
                <Route path="/teacher-profile" component={TeacherProfile}/>
                <Route path="/default" component={Default}/>

            </Switch>
           <Footer/>
       </div>

    )
}
export default Routes;