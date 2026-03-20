import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Efe from GRA",
    role: "Foodie",
    content:
      "Finally, I can order from my favorite suya spot without driving through traffic. ChopQik is a lifesaver!",
    rating: 5,
  },
  {
    name: "Nosa from Ugbowo",
    role: "Student",
    content:
      "Delivery fees used to duplicate my food money. This one is fair and the riders are actually fast.",
    rating: 5,
  },
  {
    name: "Mrs. Idemudia",
    role: "Restaurant Owner",
    content:
      "Partnering with ChopQik increased my sales by 30% in just one month. The support team is amazing.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl mb-16">
          Don&apos;t just take our word for it.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#F2891C] text-[#F2891C]"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;{item.content}&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
