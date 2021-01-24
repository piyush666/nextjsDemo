import MyTable from "../components/MyTable";
import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <div className="py-20  p-4 grid ">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>

        <MyTable />
      </div>
    </div>
  );
}
