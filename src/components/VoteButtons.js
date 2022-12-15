import { useState } from 'react';
import { db, auth } from '../backend/firebase';
import { doc, arrayRemove, arrayUnion, updateDoc, query, getDocs, where, collection } from 'firebase/firestore';


function VoteButtons({ userPost }) {

    const [toggleUpVote, setToggleUpVote] = useState(false);
    const [fillUpColor, setFillUpColor] = useState(false);
    const [hasUserUpVoted, setHasUserUpvoted] = useState(false);

    const handleClick = async (type) => {
        
        let userId = auth.currentUser.uid;

        const postsRef = doc(db, 'posts', userPost.id);

        if (type === 'upvote') {
            await updateDoc(postsRef, {
                upVotesUsers: toggleUpVote ? arrayRemove(userId) : arrayUnion(userId)
            })
            setToggleUpVote((toggleUpVote) => !toggleUpVote);
        }

    };

    const checkIfUserUpVoted = async () => {

        let userId = auth.currentUser.uid;

        const q = query(collection(db, "posts"), where("upVotesUsers", "array-contains", userId))
        const result = await getDocs(q);
        const userArray = (result.docs.map((item) => (item.data().upVotesUsers)));

        if (userArray.length > 0) {
            setFillUpColor(true);
            setHasUserUpvoted(true);
        }
    };
    checkIfUserUpVoted();

  return (
    <div>
        <div className='flex mb-4'>
            <button onClick={() => handleClick('upvote')} className="mr-2">
                { fillUpColor && (userPost.upVotesUsers.includes(auth.currentUser.uid)) ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-emerald-600 w-6'>
                    <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"/>
                </svg> 
                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-emerald-600 w-6'>
                    <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"/>
                </svg> }
            </button>
            <p className='px-2 mr-2 border-2 rounded border-black'>{userPost.upVotesUsers.length}</p>
        </div>

    </div>
  )
}

export default VoteButtons;