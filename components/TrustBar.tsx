import { TRUST_BAR_ITEMS } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {TRUST_BAR_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
