// app/items/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { supabaseServer } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

type ItemPageProps = {
  params: Promise<{ id: string }>; // ✅ Your Next.js version requires this
};

export default async function ItemPage(props: ItemPageProps) {
  const { id } = await props.params; // ✅ MUST unwrap the Promise

  const supabase = supabaseServer();

  const { data: item, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !item) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950/95 text-slate-50 px-4 pt-28 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        
        {/* Left: Image */}
        <div className="bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative w-full aspect-[4/3]">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                No image available
              </div>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-8">
          
          {/* Title + Meta */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <span>{item.category}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>{item.brand}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-50">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {item.condition || "Condition not specified"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-slate-800">
                {item.location}, {item.country}
              </span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Daily rate
                </div>
                <div className="mt-1 text-3xl font-semibold text-slate-50">
                  {item.price}{" "}
                  <span className="text-base font-normal text-slate-400">
                    {item.currency || "EUR"}/day
                  </span>
                </div>
              </div>

              <div className="text-right text-xs text-slate-500">
                Flexible rental durations coming soon
              </div>
            </div>

            <Button
              className="w-full h-11 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
              disabled
            >
              Request to Rent (coming soon)
            </Button>

            <p className="text-xs text-slate-500">
              Booking requests, availability, and secure payments will be added
              in the next phase.
            </p>
          </div>

          {/* Key details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Location
              </div>
              <div className="text-slate-100">
                {item.location}, {item.country}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Status
              </div>
              <div className="text-slate-100">
                {item.status || "Available"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="max-w-4xl mx-auto mt-14">
        <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Description
          </div>
          <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-line">
            {item.description || "No description provided for this listing yet."}
          </p>
        </div>
      </div>
    </div>
  );
}