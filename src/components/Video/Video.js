import React, { useRef, useState, useEffect } from "react";

// import components
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

import "./Video.css";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();
  const timer = useRef();
  const scrollTop = useRef(0);

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", (event) => {
        window.clearTimeout(timer.current);
        console.log('scroll', event.target.scrollTop - scrollTop.current)
        if (event.target.scrollTop - scrollTop.current >= 300) {
          vidRef.current.pause();
        }
        // if (event.target) { // Adjust the scroll amount as needed
        //   vidRef.current.pause();
          // setisVideoPlaying(false);
        // }
        // vidRef.current.pause();
        timer.current = setTimeout(() => {
          console.log('Scrolling has stopped.');
          scrollTop.current = event.target.scrollTop;
        }, 200);
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <Header />
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        controls={true}
        loop
      />
      <Footer
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}
