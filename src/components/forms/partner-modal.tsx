"use client";

// This modal used to throw away leads.
//
//   await new Promise((resolve) => setTimeout(resolve, 1500));
//   console.log("Vendor Data:", data);
//   onSuccess();
//
// It then told the person: "You're on the list! Our team will reach out to
// the provided number within 24 hours." Nothing was stored or sent. Every
// owner who typed their business name and mobile number into this got a
// promise of a callback that could not happen.
//
// It also carried a full rider signup — "Join Fleet", Bike (Okada), Bicycle,
// Foot (Runner) — for a delivery fleet that does not exist. That tab and its
// schema are deleted.
//
// The enquiry now composes a message and opens WhatsApp, so the sender can
// see exactly what was sent and to whom. No backend, and no claim that
// something arrived when it did not.
//
// defaultTab is still accepted so page.tsx and the hero compile unchanged.
// It is ignored — there is only one form now.

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Store, Loader2, MessageCircle } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SUPPORT_WA = "2348063588816";
const SUPPORT_DISPLAY = "+234 806 358 8816";
const SUPPORT_EMAIL = "support@chopqik.com";

const vendorSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z
    .string()
    .min(10, "Enter a phone number we can reach you on")
    .regex(/^[0-9+\s()-]+$/, "Digits only"),
  city: z.string().min(2, "City is required"),
  type: z.enum(["Restaurant", "Bar or lounge", "Hotel or guesthouse", "Other"]),
});

type VendorFormValues = z.infer<typeof vendorSchema>;

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Accepted for compatibility with existing callers. Ignored. */
  defaultTab?: "vendor" | "rider";
}

export function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) setSent(false);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      {!sent ? (
        <>
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F2891C]/10 text-[#F2891C]">
              <Store className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Get ChopQik for your business
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Sixty days free. Tell us where you are and we will set it up.
            </p>
          </div>

          <VendorForm onSent={() => setSent(true)} />
        </>
      ) : (
        <div className="py-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F2891C]/10 text-[#F2891C] mb-5">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            WhatsApp should have opened
          </h3>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Your details are written into the message — press send and we will
            reply. If nothing opened, reach us directly:
          </p>
          <div className="space-y-1 text-sm mb-7">
            <p>
              <a
                href={`https://wa.me/${SUPPORT_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 underline underline-offset-2"
              >
                {SUPPORT_DISPLAY}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-gray-500 underline underline-offset-2"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
}

function VendorForm({ onSent }: { onSent: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues: { city: "Benin City", type: "Restaurant" },
  });

  const onSubmit = (data: VendorFormValues) => {
    setIsSubmitting(true);
    const message = [
      "Hello ChopQik — I would like to set up my business.",
      "",
      `Business: ${data.businessName.trim()}`,
      `Type: ${data.type}`,
      `Contact: ${data.contactName.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `City: ${data.city.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${SUPPORT_WA}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setIsSubmitting(false);
    onSent();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Business name
        </label>
        <Input
          {...register("businessName")}
          placeholder="Name above your door"
        />
        {errors.businessName && (
          <p className="text-xs text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Contact person
        </label>
        <Input {...register("contactName")} placeholder="Your name" />
        {errors.contactName && (
          <p className="text-xs text-red-500">{errors.contactName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <Input {...register("phone")} type="tel" placeholder="080..." />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          <Input {...register("city")} placeholder="Benin City" />
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type</label>
          <select
            {...register("type")}
            className="flex h-11 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2891C] focus-visible:ring-offset-2"
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Bar or lounge">Bar or lounge</option>
            <option value="Hotel or guesthouse">Hotel or guesthouse</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-2 flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <MessageCircle className="h-4 w-4" />
        )}
        Send on WhatsApp
      </Button>

      <p className="text-[11px] text-gray-400 text-center leading-relaxed">
        Opens WhatsApp with your details written in, so you can see exactly
        what is sent.
      </p>
    </form>
  );
}
