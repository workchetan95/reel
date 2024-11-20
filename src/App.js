import React, { useRef } from "react";

import Video from "./components/Video/Video";


import Vid1 from "./videos/vid1.mp4";
import Vid2 from "./videos/vid2.mp4";
import Vid3 from "./videos/vid3.mp4";
import Vid4 from "./videos/vid4.mp4";
import Vid5 from "./videos/vid5.mp4";
import Vid7 from "./videos/vid7.mp4";

import "./App.css";

export default function App() {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: Vid2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
    {
      channel: "ccc",
      song: "song-4",
      url: Vid4,
      likes: "89",
      comment: "23",
      shares: "29",
    },
    {
      channel: "ccc",
      song: "song-5",
      url: Vid5,
      likes: "89",
      comment: "23",
      shares: "29",
    },
    // {
    //   channel: "ccc",
    //   song: "song-6",
    //   url: Vid6,
    //   likes: "89",
    //   comment: "23",
    //   shares: "29",
    // },
    {
      channel: "ccc",
      song: "song-7",
      url: Vid7,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);

  const handleScroll = (event) => {
    console.log('Scroll event detected');
    if (isScrolling.current) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollTimeout.current = setTimeout(() => {
      console.log('scrolling');
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / containerHeight);
      
      isScrolling.current = true;
      container.scrollTo({
        top: newIndex * containerHeight,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 50);
    }, 100);
  };
  
  React.useEffect(() => {

    const container = containerRef.current;
    if (container) {
      console.log('Adding scroll event listener');
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        console.log('Removing scroll event listener');
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  
  return (
    <div className="App">
      <center>
        {/* <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div> */}
        {/* <h3>IGSI Reel</h3> */}
        {/*  */}

        <div className="video-container" id="video-container" ref={containerRef}>
          {/*  */}

          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
}