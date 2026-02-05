import { supabaseServer } from "@/lib/supabase/server";

export default async function ItemPage({ params }: { params: { id: string } }) {
  const supabase = supabaseServer();

  const { data: item, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !item) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Item not found</h1>
        <p>ID: {params.id}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>

      <div style={{ marginTop: 20 }}>
        <strong>Price:</strong> {item.price}
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Location:</strong> {item.location}
      </div>
    </div>
  );
}