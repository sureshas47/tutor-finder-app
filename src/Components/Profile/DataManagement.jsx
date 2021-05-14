import app from "../Authentication/Login/FirebaseAuth";


export async function getData () {
    const snapshot = await app.firestore().collection('teacherData').get();
    return snapshot.docs.map(doc => doc.data());

}
