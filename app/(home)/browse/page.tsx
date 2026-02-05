import { supabaseServer } from "@/lib/supabase/server";

export default async function BrowsePage() {
  const supabase = supabaseServer();

  const { data: items, error } = await supabase
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Browse Equipment</h1>

      {/* Empty state */}
      {(!items || items.length === 0) && (
        <p className="text-gray-500">
          No equipment listed yet. Once items are added, they will appear here.
        </p>
      )}

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 bg-white"
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Category Badge */}
            <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2">
              {item.category}
            </span>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>

            {/* Brand */}
            <p className="text-gray-600 text-sm mb-1">
              <strong>Brand:</strong> {item.brand}
            </p>

            {/* Condition */}
            <p className="text-gray-600 text-sm mb-1">
              <strong>Condition:</strong> {item.condition}
            </p>

            {/* Status */}
            <p className="text-gray-600 text-sm mb-3">
              <strong>Status:</strong> {item.status}
            </p>

            {/* Location + Price */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500 text-sm">
                {item.location}, {item.country}
              </span>

              <span className="font-bold text-lg">€{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}