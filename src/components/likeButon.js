"use client";

import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <button onClick={handleLike}>Me gusta {like === true ? ":)" : ":("}</button>
  );
}

export default LikeButton;
