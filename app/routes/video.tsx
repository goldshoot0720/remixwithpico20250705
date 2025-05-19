import { Form, json, useLoaderData } from "@remix-run/react";

// 模擬的記憶體資料庫
let videos = [];

export async function loader() {
  return json({ videos }); // 讓前端可用 useLoaderData 取得影片列表
}

export async function action({ request }) {
  const body = await request.formData();
  const _action = body.get("_action");

  if (_action === "new") {
    const videoName = body.get("videoName");
    const videoUrl = body.get("videoUrl");

    // 加入資料
    videos.push({ name: videoName, url: videoUrl });

    return json({ success: true });
  }

  return json({ success: false });
}

export default function VideoyPage() {
  const { videos } = useLoaderData();

  return (
    <div>
      <h1>Video Page</h1>
      <Form method="POST">
        <label htmlFor="videoName">VideoName:</label>
        <input type="text" name="videoName" required />
        <label htmlFor="videoUrl">VideoUrl:</label>
        <input type="text" name="videoUrl" required />
        <button type="submit" name="_action" value="new">
          new
        </button>
      </Form>

      <h2>Video List</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <strong>{video.name}</strong>:{" "}
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              <source src={video.url} type="video/webm" />
              <source src={video.url} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}
