export default function FilterBar() {
  return (
    <div className="flex gap-4 p-4 bg-black rounded-lg">
      <select className="p-2 border border-gray-700 rounded">
        <option>All Regions</option>
        <option>West Africa</option>
        <option>East Africa</option>
      </select>
      <select className="p-2 border border-gray-700 rounded">
        <option>All SEP Standards</option>
        <option>SEP-6</option>
        <option>SEP-24</option>
      </select>
    </div>
  );
}
