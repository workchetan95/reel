import React from "react";

import { Button } from "@material-ui/core";

import { Favorite, Comment, Send } from "@material-ui/icons";
import { red } from '@material-ui/core/colors';

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="video-footer">
      {/* <div className="video-text">
        <h3>
          {channel} . ({song})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div> */}
      {/*  */}
      <div className="footer-buttons">
        <div className="bottom-view">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Profile" 
          className="profile-photo" 
        />
        <span className="username">parmar_chetan</span>
      </div>
      <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '85%', marginTop: 10}}>
        <div className="flex-box" onClick={() => setLiked(!liked)}>
          <Favorite style={{color: liked ? red[700] : 'white'}}/>
          {liked ? parseInt(likes)+1 : likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <Send />
          {shares}
        </div>
      </div>
      </div>
    </div>
  );
}
