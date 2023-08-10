export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  let check = 0 ;
   replies = [];
  return (
    <div >
     
      {/* map-loop render Reply component here */}
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              {likeNum > check ? <img src="/like.svg" width={20}></img> :  ""}
              {likeNum > check ? <span className="text-muted">{likeNum}</span> :""}
            </div>
          </div>
        </div>


    </div>
  );
};
