// import {
//   BookmarkIcon,
//   ChatBubbleOvalLeftEllipsisIcon,
//   EllipsisHorizontalIcon,
//   HeartIcon,
//   PaperAirplaneIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";
// import {
//   HeartIcon as HeartIconFilled,
// } from "@heroicons/react/24/solid";
// import { addDoc, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, where } from "firebase/firestore";
// import { auth, db } from "../firebase";
// import { collection, serverTimestamp } from "firebase/firestore";
// import { useState, useEffect } from "react";
// import Moment from 'react-moment';
// import { onAuthStateChanged } from "firebase/auth";
// import InputEmoji from "react-input-emoji";

// function Post({ id, uid, img, caption }) {
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [user, setUser] = useState(null);
//   const [likes, setLikes] = useState([]);
//   const [hasLiked, setHasLiked] = useState(false);
//   const [posterData, setPosterData] = useState(null);

//   useEffect(() => {
//     const commentsQuery = query(
//       collection(db, "posts", id, "comments"),
//       orderBy("timestamp", "desc")
//     );

//     const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
//       setComments(snapshot.docs);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   useEffect(() => {
//     const likesQuery = collection(db, "posts", id, "likes");
//     const unsubscribe = onSnapshot(likesQuery, (snapshot) => {
//       setLikes(snapshot.docs);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const posterQuery = query(
//       collection(db, "users"),
//       where("id", "==", uid)
//     );

//     const unsubscribe = onSnapshot(posterQuery, (snapshot) => {
//       if (!snapshot.empty) {
//         setPosterData(snapshot.docs[0]);
//       }
//     });

//     return () => unsubscribe();
//   }, [uid]);

//   useEffect(() => {
//     setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1);
//   }, [likes, user]);

//   const likePost = async () => {
//     try {
//       if (hasLiked) {
//         await deleteDoc(doc(db, "posts", id, "likes", user.uid));
//       } else {
//         await setDoc(doc(db, "posts", id, "likes", user.uid), {
//           username: user.displayName,
//         });
//       }
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   const deletePost = async () => {
//     try {
//       await deleteDoc(doc(db, "posts", id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   const sendComment = async (e) => {
//     e.preventDefault();

//     try {
//       const commentToSend = comment;
//       setComment("");

//       await addDoc(collection(db, "posts", id, "comments"), {
//         comment: commentToSend,
//         username: user.displayName,
//         userImage: user.photoURL,
//         timestamp: serverTimestamp(),
//       });
//     } catch (error) {
//       console.error("Error sending comment:", error);
//     }
//   };

//   return (
//     <div className="bg-white my-7 border rounded-sm w-full object-cover ">
//       {/* Header */}
//       <div className="flex items-center p-5">
//         <img
//           src={posterData?.data().profileImg}
//           className="rounded-full h-12 w-12 border p-1 mr-3 object-cover"
//           alt=""
//         />
//         <a href={`/${posterData?.data().username}`} className="flex-1 font-semibold">
//           {posterData?.data().username}
//         </a>

//         {user?.uid === uid ? (
//           <XCircleIcon className="h-5 cursor-pointer" onClick={deletePost} />
//         ) : (
//           <EllipsisHorizontalIcon className="h-5" />
//         )}
//       </div>

//       <img src={img} className="object-cover w-[800px] max-h-[800px]" alt="" />

//       {user && (
//         <div className="flex justify-between px-4 pt-4">
//           <div className="flex space-x-4">
//             {hasLiked ? (
//               <HeartIconFilled className="btn text-red-700" onClick={likePost} />
//             ) : (
//               <HeartIcon className="btn" onClick={likePost} />
//             )}
//             <ChatBubbleOvalLeftEllipsisIcon className="btn" />
//             <PaperAirplaneIcon className="btn" />
//           </div>
//           <BookmarkIcon className="btn" />
//         </div>
//       )}

//       <p className="p-5 truncate">
//         {likes.length > 0 && (
//           <p className="font-bold mb-1">
//             {likes.length} {likes.length === 1 ? "Like" : "Likes"}
//           </p>
//         )}
//         <span className="font-semibold mr-2">{posterData?.data().username}</span>
//         {caption}
//       </p>

//       {comments.length > 0 && (
//         <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
//           {comments.map((comment) => (
//             <div key={comment.id} className="flex items-center space-x-2 mb-3">
//               <img className="h-7 w-7 rounded-full object-cover" src={comment.data().userImage} alt="" />
//               <span className="font-semibold text-sm">{comment.data().username}</span>
//               <p>{comment.data().comment}</p>
//               <Moment fromNow className="pr-5 text-xs text-gray-600">
//                 {comment.data().timestamp?.toDate()}
//               </Moment>
//             </div>
//           ))}
//         </div>
//       )}

//       {user && (
//         <form className="flex items-center p-4" onSubmit={sendComment}>
//           <InputEmoji
//             type="text"
//             value={comment}
//             onChange={setComment}
//             placeholder="Add a comment..."
//             className="border-none flex-1 focus:ring-0 outline-none"
//           />
//           <button
//             type="submit"
//             disabled={!comment.trim()}
//             className="font-semibold text-blue-400"
//           >
//             Post
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Post;






import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconFilled,
} from "@heroicons/react/24/solid";
import { addDoc, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import { collection, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import Moment from 'react-moment';
import { onAuthStateChanged } from "firebase/auth";
import InputEmoji from "react-input-emoji";

function Post({ id, uid, img, caption }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [posterData, setPosterData] = useState(null);

  useEffect(() => {
    const commentsQuery = query(
      collection(db, "posts", id, "comments"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      setComments(snapshot.docs);
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    const likesQuery = collection(db, "posts", id, "likes");
    const unsubscribe = onSnapshot(likesQuery, (snapshot) => {
      setLikes(snapshot.docs);
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const posterQuery = query(
      collection(db, "users"),
      where("id", "==", uid)
    );

    const unsubscribe = onSnapshot(posterQuery, (snapshot) => {
      if (!snapshot.empty) {
        setPosterData(snapshot.docs[0]);
      }
    });

    return () => unsubscribe();
  }, [uid]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1);
  }, [likes, user]);

  const likePost = async () => {
    try {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", user.uid), {
          username: user.displayName,
        });
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const deletePost = async () => {
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    console.log("Sending comment...");

    try {
      const commentToSend = comment;
      setComment("");  // Clear the input after sending the comment

      await addDoc(collection(db, "posts", id, "comments"), {
        comment: commentToSend,
        username: user.displayName,
        userImage: user.photoURL,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <div className="bg-white my-7 border rounded-sm w-full object-cover">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={posterData?.data().profileImg}
          className="rounded-full h-12 w-12 border p-1 mr-3 object-cover"
          alt=""
        />
        <a href={`/${posterData?.data().username}`} className="flex-1 font-semibold">
          {posterData?.data().username}
        </a>

        {user?.uid === uid ? (
          <XCircleIcon className="h-5 cursor-pointer" onClick={deletePost} />
        ) : (
          <EllipsisHorizontalIcon className="h-5" />
        )}
      </div>

      <img src={img} className="object-cover w-[800px] max-h-[800px]" alt="" />

      {user && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled className="btn text-red-700" onClick={likePost} />
            ) : (
              <HeartIcon className="btn" onClick={likePost} />
            )}
            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">
            {likes.length} {likes.length === 1 ? "Like" : "Likes"}
          </p>
        )}
        <span className="font-semibold mr-2">{posterData?.data().username}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img className="h-7 w-7 rounded-full object-cover" src={comment.data().userImage} alt="" />
              <span className="font-semibold text-sm">{comment.data().username}</span>
              <p>{comment.data().comment}</p>
              <Moment fromNow className="pr-5 text-xs text-gray-600">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {user && (
        <form className="flex items-center p-4" onSubmit={sendComment}>
          <InputEmoji
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e);
              console.log("Comment typed:", e);
            }}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
 




// import {
//   BookmarkIcon,
//   ChatBubbleOvalLeftEllipsisIcon,
//   EllipsisHorizontalIcon,
//   HeartIcon,
//   PaperAirplaneIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";
// import { addDoc, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, where } from "firebase/firestore";
// import { auth, db } from "../firebase";
// import { collection, serverTimestamp } from "firebase/firestore";
// import { useState, useEffect } from "react";
// import  Moment  from 'react-moment'
// import { onAuthStateChanged } from "firebase/auth";
// import InputEmoji from "react-input-emoji";
// import {

//     HeartIcon as HeartIconFilled,

// } from "@heroicons/react/24/solid"

// function Post({ id, uid, img,  caption, }) {

  

//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [ user, setUser ] = useState(null);
//   const [likes, setLikes] = useState([]);
//   const [hasLiked, setHasLiked] = useState(false);
//   const [posterData, setPosterData] = useState(null);

//   useEffect(
//     () =>{
//       onSnapshot(
//         query(
//           collection(db, "posts", id, "comments"),
//           orderBy("timestamp", "desc")
//         ),
//         (snapshot) => setComments(snapshot.docs)
//       )
    
//     },
//     [db]
//   );

//   useEffect(
//     () =>{
//       onSnapshot(query(
//         collection(db, "users"),
//         where("id", "==", uid)),
//       (snapshot) => setPosterData(snapshot.docs[0])

//       )
//     }
//   )


//   useEffect(
//     () => {
//       setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1);
//     }, [likes]
//   )

//   useEffect(() => {
//     return onSnapshot(
//       collection(db, "posts", id, "likes"),(snapshot) => setLikes(snapshot.docs)
//     )
//   },[db, id]
//   )


//   useEffect (() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       }else {
//         setUser(null);
//       }
//     })
//   })


//   const likePost = async () => {
//     if (hasLiked) {
//       await deleteDoc(doc(db, "posts", id, "likes", user.uid));
//     }else {
//       await setDoc(doc(db, "posts", id, "likes", user.uid), {
//         username: user.displayName,
//       })
//     }
    
//   }

//   //delete doc
// const deletePost = async () =>{

//   await deleteDoc(doc(db, "posts", id));

// }

//   const sendComment = async (e) => {
//     e.preventDefault();

//     const commentToSend = comment;
//     setComment("");

//     await addDoc(collection(db, "posts", id, "comments"), {
//       comment: commentToSend,
//       username: user.displayName,
//       userImage: user.photoURL,
//       timestamp: serverTimestamp(),
//     });
//   };
//   return (
//     <div className="bg-white my-7 border rounded-sm w-full object-cover ">
//       {/* Header */}

//       <div className="flex items-center p-5">
//         <img
//           src={posterData?.data().profileImg}
//           className="rounded-full h-12 w-12  border p-1 mr-3 object-cover"
//           alt=""
//         />
//         <a href={/${posterData?.data().username}} className="flex-1 font-semibold">{posterData?.data().username}</a>

//         {
//           user?.uid === uid ? (
//             <XCircleIcon className="h-5 cursor-pointer" onClick={deletePost} />
//           ):(
//             <EllipsisHorizontalIcon className="h-5" />
//           )
//         }

       


//       </div>
//       <img src={img} className="object-cover w-[800px] max-h-[800px] " alt="" />
//       {user && (
//         <div className="flex justify-between px-4 pt-4">
//           <div className="flex space-x-4">

//             {
//               hasLiked ? (
//                 <HeartIconFilled className="btn text-red-700" onClick={likePost}/>
//               ):( <HeartIcon className="btn"  onClick={likePost}/>)
//             }
           
//             <ChatBubbleOvalLeftEllipsisIcon className="btn" />
//             <PaperAirplaneIcon className="btn" />
//           </div>

//           <BookmarkIcon className="btn" />
//         </div>
//       )}

//       <p className="p-5 truncate">
//         {
//           likes.length > 0 && (
//             <p className="font-bold mb-1">{likes.length} {likes.length === 1 ? "Like" : "Likes"}</p>
//           )
//         }
//         <span className="font-semibold mr-2">{posterData?.data().username}</span>
//         {caption}
//       </p>

//         {comments.length > 0 && (
//           <div 
//           className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin"
//           >{comments.map((comment) => (
//             <div key={comment.id} 
//             className="flex items-center space-x-2 mb-3">
            
//               <img className="h-7 w-7 rounded-full object-cover" src={comment.data().userImage} alt="" />
//               <span className="font-semibold text-sm"> {comment.data().username}</span>
//               <p>{comment.data().comment}</p>
//               <Moment fromNow className="pr-5 text-xs text-gray-600">
//                 {comment.data().timestamp?.toDate()}
//               </Moment>
//             </div>
//           ))}
//           </div>
//         )}

//       {user && (
//         <form className="flex items-center p-4">
          
//           <InputEmoji
//             type="text"
//             value={comment}
//             onChange={setComment}
//             placeholder="Add a comment..."
//             className="border-none flex-1 focus:ring-0 outline-none"
//           />

          
//           <button
//             type="submit"
//             disabled={!comment.trim()}
//             onClick={sendComment}
//             className="font-semibold text-blue-400"
//           >
//             Post
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Post;

