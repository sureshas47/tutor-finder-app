import app from "./Login/FirebaseAuth";
//store email and password to firestore
export async function registerUserChat(userInfo) {
    await app.firestore().collection("userManagement").add({
        email: userInfo.email,
        fid:userInfo.uid,
    }).then(function (res) {
    }).catch(function (error) {
    })
}
//creating chat room #2
export function createChatRoom(chatRoom) {
    return new Promise(async function (resolve, reject){
        await app.firestore().collection("chat-room").add({
            chat_id:chatRoom.id,
            chat_name: chatRoom.name,
            desc: chatRoom.desc,
            chat_image: chatRoom.image,
        }).then(function (res) {
            resolve(res);

        }).catch(function (error) {
            reject(error);
        })
    })

}

//list out chatroom-list
export async function getChatRoomList () {
    // const [roomList, setRoomList] = useState();
        const snapshot = await app.firestore().collection('chat-room').get();
        return snapshot.docs.map(doc => doc.data());
}

