import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "remixwithpico20250705" },
    { name: "description", content: "Welcome to remixwithpico20250705!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
