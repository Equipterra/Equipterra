"use client";

import { useState } from "react";
import { supabaseClient } from "../../../lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();
  const supabase = supabaseClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("Available");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    console.log("▶ handleSubmit called");

    let imageUrl: string | null = null;

    try {
      // Upload image to Supabase Storage
      if (imageFile) {
        console.log("▶ Uploading image:", imageFile.name);
        const fileName = `${Date.now()}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage
          .from("items")
          .upload(fileName, imageFile);

        if (uploadError) {
          console.error("❌ Upload error:", uploadError.message);
          setErrorMessage(`Upload error: ${uploadError.message}`);
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from("items")
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;
        console.log("▶ Image URL:", imageUrl);
      }

      console.log("▶ Inserting item into DB");

      const { error } = await supabase.from("items").insert({
        title,
        description,
        brand,
        category,
        condition,
        status,
        price: Number(price),
        location,
        country,
        image: imageUrl,
      });

      if (error) {
        console.error("❌ Insert error:", error.message);
        setErrorMessage(`Insert error: ${error.message}`);
        setLoading(false);
        return;
      }

      console.log("✅ Insert successful, redirecting to /browse");
      router.push("/browse");
    } catch (err: any) {
      console.error("❌ Unexpected error:", err);
      setErrorMessage(`Unexpected error: ${err?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">List Your Equipment</h1>

      {errorMessage && (
        <div className="mb-4 rounded bg-red-100 text-red-800 px-4 py-2 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium mb-1">Brand</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            className="w-full border rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>

            <optgroup label="Creative & Production">
              <option value="Cameras">Cameras</option>
              <option value="Lenses">Lenses</option>
              <option value="Lighting">Lighting</option>
              <option value="Audio">Audio</option>
              <option value="Drones">Drones</option>
              <option value="Stabilizers & Rigs">Stabilizers & Rigs</option>
              <option value="Studio Gear">Studio Gear</option>
              <option value="Video Accessories">Video Accessories</option>
            </optgroup>

            <optgroup label="Industrial & Technical">
              <option value="Power Tools">Power Tools</option>
              <option value="Construction Equipment">Construction Equipment</option>
              <option value="Surveying & Measurement">Surveying & Measurement</option>
              <option value="Electrical Tools">Electrical Tools</option>
              <option value="Ladders & Scaffolding">Ladders & Scaffolding</option>
            </optgroup>

            <optgroup label="Scientific & Specialized">
              <option value="Lab Equipment">Lab Equipment</option>
              <option value="Medical Devices">Medical Devices</option>
              <option value="Environmental Sensors">Environmental Sensors</option>
              <option value="Testing Instruments">Testing Instruments</option>
            </optgroup>

            <optgroup label="Business & Commercial">
              <option value="Projectors">Projectors</option>
              <option value="Screens">Screens</option>
              <option value="Networking Equipment">Networking Equipment</option>
              <option value="POS Systems">POS Systems</option>
            </optgroup>

            <optgroup label="Mobility & Transport">
              <option value="E-Bikes">E-Bikes</option>
              <option value="Scooters">Scooters</option>
              <option value="Transport Equipment">Transport Equipment</option>
            </optgroup>
          </select>
        </div>

        {/* Condition */}
        <div>
          <label className="block font-medium mb-1">Condition</label>
          <select
            className="w-full border rounded p-2"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Used - Excellent">Used - Excellent</option>
            <option value="Used - Good">Used - Good</option>
            <option value="Used - Fair">Used - Fair</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            className="w-full border rounded p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
            <option value="Booked">Booked</option>
            <option value="Under Maintenance">Under Maintenance</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price (EUR)</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Location (City)</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Country</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#243B6B] text-white px-6 py-3 rounded-lg hover:bg-[#1E3158] transition"
        >
          {loading ? "Publishing..." : "Publish Listing"}
        </button>
      </form>
    </main>
  );
}