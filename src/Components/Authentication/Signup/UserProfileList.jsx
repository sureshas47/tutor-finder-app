import React, {useEffect,useState} from "react";
import firebase from "firebase";


const UserProfileList=()=>{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    //getting all data from firestore
    const getUserListFromFirebase=async ()=>{
        const snapshot=await firebase.firestore().collection('tutorFinderApp').get();
        return snapshot.docs.map(doc=>doc.data());
    };
    useEffect(()=>{
        getUserListFromFirebase().then(function (data){
            setData(data);
            setLoading(false);
        });
    });

    return(
        <div>
            <div>
                {
                    //showing fetched data
                    loading ?<div>loading..</div>:
                    data.map((curVal) =>
                            <div className="show-email">
                                <p>{curVal.fullName}</p>
                                <p>{curVal.email}</p>
                            </div>
                    )
                }

            </div>
        </div>
    )
}

export default UserProfileList;
