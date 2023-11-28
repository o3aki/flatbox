"use client";

import { compactNumberFormat } from "@/utils/numUtils";
import { Video } from "@prisma/client";
import dayjs from "@/vendor/dayjs";
import { useState } from "react";

interface DescriptionProps {
  video: Video;
}

const Description: React.FC<DescriptionProps> = ({ video }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-zinc-700 rounded-xl p-3 overflow-hidden ${
        isExpanded ? "h-fit" : "line-clamp-2 max-h-28"
      }`}
    >
      <div className="flex gap-2 text-[#FF99C8] opacity-70 font-medium mb-1">
        <p>{compactNumberFormat(video.viewCount)} views</p>
        <p>{dayjs(video.createdAt).format("MMM D, YYYY")}</p>
      </div>
      <div className="flex gap-2 text-neutral-200 font-medium">
        <div className={isExpanded ? "" : "line-clamp-2"}>
          <div className="whitespace-pre-line">
            {video.description.split("\n").map((line, index) => {
              return line === "" ? (
                <br key={index} />
              ) : (
                <p key={index}>{line}</p>
              );
            })}
          </div>
        </div>
        <p
          onClick={() => {
            setIsExpanded((isExpanded) => !isExpanded);
          }}
          className={`text-neutral-500 cursor-pointer ${
            isExpanded ? "mt-2" : ""
          }`}
        >
          {isExpanded ? "show less" : "...more"}
        </p>
      </div>
    </div>
  );
};

export default Description;
