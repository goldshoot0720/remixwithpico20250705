import { useState } from "react";

export default function VideoyPage() {
  const [index, setIndex] = useState(0);
  const videodatalists = [
    {
      id: 1,
      videotitle: "紫雲寺家の子供たち OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E7%B4%AB%E9%9B%B2%E5%AF%BA%E5%AE%B6%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E6%98%A0%E5%83%8F%EF%BD%9CNACHERRY%E3%80%8C%E3%83%8F%E3%83%8B%E3%83%BC%E3%83%AC%E3%83%A2%E3%83%B3%E3%80%8D.mp4?alt=media&token=88897e0b-5df7-4ba0-aeab-f3c700c5b7e8",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E7%B4%AB%E9%9B%B2%E5%AF%BA%E5%AE%B6%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E6%98%A0%E5%83%8F%EF%BD%9CNACHERRY%E3%80%8C%E3%83%8F%E3%83%8B%E3%83%BC%E3%83%AC%E3%83%A2%E3%83%B3%E3%80%8D.webp?alt=media&token=50717762-63a8-439f-9711-111ffc6159ae",
    },
    {
      id: 2,
      videotitle: "紫雲寺家の子供たち ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E7%B4%AB%E9%9B%B2%E5%AF%BA%E5%AE%B6%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E6%98%A0%E5%83%8F%EF%BD%9C%E4%B8%87%E9%87%8C%E3%83%BB%E6%B8%85%E8%91%89%E3%83%BB%E8%AC%B3%E8%8F%AF%E3%83%BB%E5%8D%97%E3%83%BB%E3%81%93%E3%81%A8%E3%81%AE%E3%80%8CLIKE%20YOU%20o(%EF%BC%9E%EF%BC%9C%20%3D%20%EF%BC%9E%EF%BC%9C)o%20LOVE%20YOU_%E3%80%8D.mp4?alt=media&token=3ca36064-21ca-4c24-8a83-de0122266969",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E7%B4%AB%E9%9B%B2%E5%AF%BA%E5%AE%B6%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E6%98%A0%E5%83%8F%EF%BD%9C%E4%B8%87%E9%87%8C%E3%83%BB%E6%B8%85%E8%91%89%E3%83%BB%E8%AC%B3%E8%8F%AF%E3%83%BB%E5%8D%97%E3%83%BB%E3%81%93%E3%81%A8%E3%81%AE%E3%80%8CLIKE%20YOU%20o(%EF%BC%9E%EF%BC%9C%20%3D%20%EF%BC%9E%EF%BC%9C)o%20LOVE%20YOU_%E3%80%8D.webp?alt=media&token=e77205a1-0b2a-4f1e-8336-7f445922c8c7",
    },
  ];

  const videoviewlists = videodatalists.map((videodatalist) => {
    return (
      <>
        <div>
          <button
            onClick={() => {
              setIndex(videodatalist.id);
            }}
          >
            <img
              src={videodatalist.videoimage}
              width={"300px"}
              title={videodatalist.videotitle}
              alt={videodatalist.videotitle}
            />
          </button>
        </div>
        {index === videodatalist.id && (
          <video width="320" height="240" controls>
            <source src={videodatalist.videofile} type="video/mp4" />
            <source src={videodatalist.videofile} type="video/webm" />
            <source src={videodatalist.videofile} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}
      </>
    );
  });

  return (
    <div>
      <h1>Video Page</h1>
      {videoviewlists}
    </div>
  );
}
