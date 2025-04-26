import React from 'react';

export type VideoProps = {
  width: number;
  height: number;
  src: string;
};

const ProjectVideo = ({ width, height, src }: VideoProps) => {
  return (
    <div className="w-full mx-auto">
      <video
        width={width}
        height={height}
        loop
        autoPlay
        muted
        className="mx-auto mb-6"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProjectVideo;
