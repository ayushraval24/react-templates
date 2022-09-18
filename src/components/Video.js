import React, { useState } from "react";
// import ffmpeg from "react-ffmpeg";
import { createFFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({
  log: false,
});

export default function Video() {
  const [videoData, setVideoData] = useState([]);

  const getMp4Command = (input, end, duration, output) =>
    `-t ${end} -i ${input} -ss ${duration} ${output}`;

  const changeHandler = async (e) => {
    const name = e.target.files[0].name;
    await ffmpeg.load();
    await ffmpeg.write(name, e.target.files[0]);
    await ffmpeg.run(getMp4Command(name, 10, 10, "new.mp4"));
    const output = ffmpeg.read("new.mp4");
    const url = URL.createObjectURL(
      new Blob([output.buffer], { type: "video/mp4" })
    );

    console.log("This is url: ", url);
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={changeHandler} />
    </div>
  );
}
