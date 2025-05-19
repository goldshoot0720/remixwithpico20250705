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
    {
      id: 3,
      videotitle: "宇宙人ムームー OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%AE%87%E5%AE%99%E4%BA%BA%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%8C%E3%81%B5%E3%81%97%E3%81%8E%E3%81%AA%E3%81%8D%E3%81%BF%E3%80%8D%EF%BC%8F%E3%82%B5%E3%83%90%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC-711e08b8a9411a28.mp4?alt=media&token=2d163f7e-1205-4f66-81e9-47dbe22285c2",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%AE%87%E5%AE%99%E4%BA%BA%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%8C%E3%81%B5%E3%81%97%E3%81%8E%E3%81%AA%E3%81%8D%E3%81%BF%E3%80%8D%EF%BC%8F%E3%82%B5%E3%83%90%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC-711e08b8a9411a28.webp?alt=media&token=f00be485-892d-4622-8cd2-07b02e4d73e6",
    },
    {
      id: 4,
      videotitle: "宇宙人ムームー ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%AE%87%E5%AE%99%E4%BA%BA%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%8C%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E4%BA%BA%E9%A1%9E%E3%80%8D%EF%BC%8F%E3%81%95%E3%81%8F%E3%82%89%E3%81%93%EF%BC%86%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC-4526cc7e011ef011.mp4?alt=media&token=bb84a8ed-1ebf-4a2d-b2c1-5ea88adc7928",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%AE%87%E5%AE%99%E4%BA%BA%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%8C%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E4%BA%BA%E9%A1%9E%E3%80%8D%EF%BC%8F%E3%81%95%E3%81%8F%E3%82%89%E3%81%93%EF%BC%86%E3%83%A0%E3%83%BC%E3%83%A0%E3%83%BC-4526cc7e011ef011.jpg?alt=media&token=2b40a9ce-becc-4420-b878-5bbfe3cc64fa",
    },
    {
      id: 5,
      videotitle: "俺は星間国家の悪徳領主 OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E4%BF%BA%E3%81%AF%E6%98%9F%E9%96%93%E5%9B%BD%E5%AE%B6%E3%81%AE%E6%82%AA%E5%BE%B3%E9%A0%98%E4%B8%BB%EF%BC%81%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%EF%BD%9C%E6%9C%80%E7%B5%82%E6%9C%AA%E6%9D%A5%E5%B0%91%E5%A5%B3%E3%80%8C%E5%AE%87%E5%AE%99%E7%9A%84MYSTERY%E3%80%8D-6e28a2c18154ff77.mp4?alt=media&token=19830a1c-d2c8-47e8-8630-d9f6a2d8d25a",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E4%BF%BA%E3%81%AF%E6%98%9F%E9%96%93%E5%9B%BD%E5%AE%B6%E3%81%AE%E6%82%AA%E5%BE%B3%E9%A0%98%E4%B8%BB%EF%BC%81%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%EF%BD%9C%E6%9C%80%E7%B5%82%E6%9C%AA%E6%9D%A5%E5%B0%91%E5%A5%B3%E3%80%8C%E5%AE%87%E5%AE%99%E7%9A%84MYSTERY%E3%80%8D-6e28a2c18154ff77.webp?alt=media&token=100427c4-99ca-48b9-9203-877fcac1f382",
    },
    {
      id: 6,
      videotitle: "俺は星間国家の悪徳領主 ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E4%BF%BA%E3%81%AF%E6%98%9F%E9%96%93%E5%9B%BD%E5%AE%B6%E3%81%AE%E6%82%AA%E5%BE%B3%E9%A0%98%E4%B8%BB%EF%BC%81%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%EF%BD%9C%E8%97%A4%E5%92%B2%E5%87%AA%E3%80%8C%E3%81%AA%E3%82%93%E3%81%A8%E3%81%AA%E3%81%8F%E3%80%8D-371c10f448b62dc8.mp4?alt=media&token=77e5077a-7f5f-4573-ab5a-f3d0a7281a24",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E4%BF%BA%E3%81%AF%E6%98%9F%E9%96%93%E5%9B%BD%E5%AE%B6%E3%81%AE%E6%82%AA%E5%BE%B3%E9%A0%98%E4%B8%BB%EF%BC%81%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%EF%BD%9C%E8%97%A4%E5%92%B2%E5%87%AA%E3%80%8C%E3%81%AA%E3%82%93%E3%81%A8%E3%81%AA%E3%81%8F%E3%80%8D-371c10f448b62dc8.webp?alt=media&token=8dbd442f-ffd5-4d02-ac82-20a7cd1a2708",
    },
    {
      id: 7,
      videotitle: "かくして マキナさん OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%8B%E3%81%8F%E3%81%97%E3%81%A6%EF%BC%81%20%E3%83%9E%E3%82%AD%E3%83%8A%E3%81%95%E3%82%93!!%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%80%E4%B8%8A%E6%9C%88%E3%81%9B%E3%82%8C%E3%81%AA%E3%80%8C%E5%AE%B6%E3%81%A7Yeah!%E3%81%A3%E3%81%A6%E3%82%A2%E3%82%B2%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%E3%80%8D%EF%BC%8F_KAKUSHITE%EF%BC%81MAKINA-SAN!!_%20OP%20Movie.mp4?alt=media&token=33cdd5a0-420a-46b6-a6b2-546ffe242743",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%8B%E3%81%8F%E3%81%97%E3%81%A6%EF%BC%81%20%E3%83%9E%E3%82%AD%E3%83%8A%E3%81%95%E3%82%93!!%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%80%E4%B8%8A%E6%9C%88%E3%81%9B%E3%82%8C%E3%81%AA%E3%80%8C%E5%AE%B6%E3%81%A7Yeah!%E3%81%A3%E3%81%A6%E3%82%A2%E3%82%B2%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%E3%80%8D%EF%BC%8F_KAKUSHITE%EF%BC%81MAKINA-SAN!!_%20OP%20Movie.jpg?alt=media&token=e81d847e-ab33-400d-b2a8-b58759737598",
    },
    {
      id: 8,
      videotitle: "かくして マキナさん ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%8B%E3%81%8F%E3%81%97%E3%81%A6%EF%BC%81%20%E3%83%9E%E3%82%AD%E3%83%8A%E3%81%95%E3%82%93!!%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%80Brave%20Mental%20Orchestra%E3%80%8C%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%82%A4%E3%83%89%E3%81%AB%E3%81%8F%E3%81%B3%E3%81%A3%E3%81%9F%E3%81%91%E3%80%8D%EF%BC%8F_KAKUSHITE%EF%BC%81MAKINA-SAN!!_%20ED%20Movie.mp4?alt=media&token=347e6954-1268-436c-9144-8cef234815c5",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%8B%E3%81%8F%E3%81%97%E3%81%A6%EF%BC%81%20%E3%83%9E%E3%82%AD%E3%83%8A%E3%81%95%E3%82%93!!%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%80Brave%20Mental%20Orchestra%E3%80%8C%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%82%A4%E3%83%89%E3%81%AB%E3%81%8F%E3%81%B3%E3%81%A3%E3%81%9F%E3%81%91%E3%80%8D%EF%BC%8F_KAKUSHITE%EF%BC%81MAKINA-SAN!!_%20ED%20Movie.jpg?alt=media&token=158781e5-b7ad-4ad3-9a22-3b763cce4454",
    },
    {
      id: 9,
      videotitle: "忍者と殺し屋のふたりぐらし OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E5%BF%8D%E8%80%85%E3%81%A8%E6%AE%BA%E3%81%97%E5%B1%8B%E3%81%AE%E3%81%B5%E3%81%9F%E3%82%8A%E3%81%90%E3%82%89%E3%81%97%E3%80%8F%20%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%20%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C%E3%80%8C%E3%82%84%E3%82%8C%E3%82%93%E3%81%AE%EF%BC%9F%E3%82%A8%E3%83%B3%E3%83%89%E3%83%AC%E3%82%B9%E3%80%8D.mp4?alt=media&token=add6420d-b590-47f5-8356-b1f280b547d6",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E5%BF%8D%E8%80%85%E3%81%A8%E6%AE%BA%E3%81%97%E5%B1%8B%E3%81%AE%E3%81%B5%E3%81%9F%E3%82%8A%E3%81%90%E3%82%89%E3%81%97%E3%80%8F%20%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%20%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C%E3%80%8C%E3%82%84%E3%82%8C%E3%82%93%E3%81%AE%EF%BC%9F%E3%82%A8%E3%83%B3%E3%83%89%E3%83%AC%E3%82%B9%E3%80%8D-284a98fcf6e9bd8a.webp?alt=media&token=d316d2f9-24c9-4d71-92d9-c3e9ee022317",
    },
    {
      id: 10,
      videotitle: "忍者と殺し屋のふたりぐらし ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E5%BF%8D%E8%80%85%E3%81%A8%E6%AE%BA%E3%81%97%E5%B1%8B%E3%81%AE%E3%81%B5%E3%81%9F%E3%82%8A%E3%81%90%E3%82%89%E3%81%97%E3%80%8F%20%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%20HoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3%E3%80%8C%E3%81%AB%E3%82%93%E3%81%93%E3%82%8D%E3%83%80%E3%83%B3%E3%82%B9%E3%80%8D-53caa0b5b4063227.mp4?alt=media&token=9d9a2db6-d211-434d-b402-0b2d24393450",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E5%BF%8D%E8%80%85%E3%81%A8%E6%AE%BA%E3%81%97%E5%B1%8B%E3%81%AE%E3%81%B5%E3%81%9F%E3%82%8A%E3%81%90%E3%82%89%E3%81%97%E3%80%8F%20%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%20HoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3%E3%80%8C%E3%81%AB%E3%82%93%E3%81%93%E3%82%8D%E3%83%80%E3%83%B3%E3%82%B9%E3%80%8D-53caa0b5b4063227.webp?alt=media&token=fbe45498-e4af-47b5-89dc-9c4d4f5e88a9",
    },
    {
      id: 11,
      videotitle: "男女の友情は成立する いや しないっ OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%20_%20HoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3%E3%80%8C%E8%B3%AA%E5%95%8F%E3%80%81%E6%81%8B%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%A6%E3%82%99%E3%81%97%E3%82%87%E3%81%86%E3%81%8B_%E3%80%8D-46ed878d6d0817b4.mp4?alt=media&token=d4f549d5-4913-47cc-a473-94baaab1808e",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%20_%20HoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3%E3%80%8C%E8%B3%AA%E5%95%8F%E3%80%81%E6%81%8B%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%A6%E3%82%99%E3%81%97%E3%82%87%E3%81%86%E3%81%8B_%E3%80%8D-65d6c0aa27a3b678.webp?alt=media&token=b2a8ba29-d7c9-4445-9933-00723654cc6d",
    },
    {
      id: 12,
      videotitle: "男女の友情は成立する いや しないっ  ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%20_%20%E7%AB%8B%E8%8A%B1%E6%97%A5%E8%8F%9C%E3%80%8CDear%20my%20Soleil%E3%80%8D-18828622c4de907b.mp4?alt=media&token=a18df47a-78de-416c-8028-9f6bb236cc02",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%20_%20%E7%AB%8B%E8%8A%B1%E6%97%A5%E8%8F%9C%E3%80%8CDear%20my%20Soleil%E3%80%8D-18828622c4de907b.webp?alt=media&token=bda4a038-bf6c-4115-ba59-e6da4d9038d3",
    },
    {
      id: 13,
      videotitle: "ざつ旅 That's Journey OP",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%96%E3%81%A4%E6%97%85%20-That's%20Journey-%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%EF%BD%9Charmoe%E3%80%8C%E6%97%85%E3%81%97%E3%82%88%EF%BC%81don't%20%20you%EF%BC%9F%E3%80%8D.mp4?alt=media&token=8f645edd-c59a-4d4b-8c13-97d75ae58857",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%96%E3%81%A4%E6%97%85%20-That's%20Journey-%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%EF%BD%9Charmoe%E3%80%8C%E6%97%85%E3%81%97%E3%82%88%EF%BC%81don't%20%20you%EF%BC%9F%E3%80%8D-7e23b1cfdaf9644d.webp?alt=media&token=0b398599-81ba-4430-beb7-4274a14ca792",
    },
    ,
    {
      id: 14,
      videotitle: "ざつ旅 That's Journey ED",
      videofile:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%96%E3%81%A4%E6%97%85%20-That's%20Journey-%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%EF%BD%9CSizuk%E3%80%8Cbookmarks%E3%80%8D-17aa7c120c4e8e7a.mp4?alt=media&token=f36441e5-63b6-427b-bb53-705be01ea9fa",
      videoimage:
        "https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%96%E3%81%A4%E6%97%85%20-That's%20Journey-%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%EF%BD%9CSizuk%E3%80%8Cbookmarks%E3%80%8D-17aa7c120c4e8e7a.webp?alt=media&token=2be7491c-39f7-48e5-9423-b90e2bf6a94f",
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
          <video id="myVideo" width="333" controls>
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
