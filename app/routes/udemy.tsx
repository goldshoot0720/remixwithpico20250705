import { useActionData } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const courseName = data.get("courseName");
  const teacherName = data.get("teacherName");
  const schedule = data.get("schedule");

  console.log(Object.fromEntries(data.entries()));

  const responseData = {
    success: true,
    courseName,
    teacherName,
    schedule,
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function UdemyPage() {
  const actionResult = useActionData<typeof action>();

  return (
    <div>
      <h1>Udemy Page</h1>
      <form method="POST">
        <section>
          <label htmlFor="courseName">Course Name:</label>
          <input type="text" name="courseName" id="courseName" required />
        </section>
        <section>
          <label htmlFor="teacherName">Teacher Name:</label>
          <input type="text" name="teacherName" id="teacherName" required />
        </section>
        <section>
          <label htmlFor="schedule">已完成:</label>
          <input type="text" name="schedule" id="schedule" required />
        </section>
        <section>
          <button type="submit">New Course</button>
        </section>
      </form>

      {actionResult && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h2>提交成功！</h2>
          <p><strong>課程：</strong>{actionResult.courseName}</p>
          <p><strong>老師：</strong>{actionResult.teacherName}</p>
          <p><strong>進度：</strong>{actionResult.schedule}</p>
        </div>
      )}
    </div>
  );
}
