import { WidgetGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center my-10 gap-2">
        <h1 className="mt-2 text-6xl font-semibold">Dashboard</h1>
        <span className="text-xl font-light text-blue-500">
          Información general
        </span>
      </div>

      <WidgetGrid />
    </div>
  );
}
