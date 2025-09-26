export default function Sidebar() {
  // Expanded width: 300px, UnExpanded width: 80px
  return (
    <div className="h-auto w-[300px] bg-white px-2 py-3 border-0 border-r border-r-gray-200">
      <div className="bg-black px-3 py-2 rounded-md">
        <p className="text-white">Dashboard Logo</p>
      </div>
    </div>
  );
}
