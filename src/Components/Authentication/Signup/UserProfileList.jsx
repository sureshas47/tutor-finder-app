import React, {useEffect, useState} from "react";
import firebase from "firebase";
import app from "firebase";


const UserProfileList = () => {
    const [data, setData] = useState();
    // const[image,setImage]=useState([]);
    const [loading, setLoading] = useState(true);

    //getting all data from firestore
    const getUserListFromFirebase = async () => {
        const snapshot = await app.firestore().collection('tutorFinderApp').get();
        return snapshot.docs.map(doc => doc.data());
    };
    useEffect(() => {
        getUserListFromFirebase().then(function (data) {
            setData(data);
            setLoading(false);
        });
    });



    return (
        <div>
            <div>
                {
                    //showing fetched data
                    loading ? <div>loading..</div> :
                        data.map((curVal) =>
                            <div className="show-email">
                                <p>{curVal.fullName}</p>
                            </div>

                        )}
                {/*<div>*/}
                {/*    {*/}
                {/*        //showing fetched data*/}
                {/*            image.map((val) =>*/}

                {/*                <div className="show-email">*/}
                {/*                    <p>{val.file}</p>*/}
                {/*                </div>*/}

                {/*            )}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default UserProfileList;
