"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner name="Apiwit Boonyarit" id="650612106" comment="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"></PostOwner>

      
        
       {comments.map((x,i)=> (
        <Comment
          key={i+1}
          userImagePath={x.userImagePath}
          username={x.username}
          commentText={x.commentText}
          likeNum={x.likeNum}
          replies={[x.replies]}
        />


       ))}

       {comments.map((x,i)=> (
        <Reply
          key={i+1}
          userImagePath={[x.replies.userImagePath]}
          username={[x.replies.username]}
          replyText={[x.replies.replyText]}
          likeNum={[x.replies.likeNum]}
        
        
        
        />
       ))}

       
       
       
  
        
        
        
        

        
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
