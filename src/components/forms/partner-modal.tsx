"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Store, Bike, Loader2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Zod Schemas ---
const vendorSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(2, "City is required"),
  type: z.enum(["Restaurant", "Mama Put", "Street Food", "Other"]),
});

const riderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(2, "City is required"),
  vehicle: z.enum(["Bike", "Bicycle", "Foot"]),
});

type VendorFormValues = z.infer<typeof vendorSchema>;
type RiderFormValues = z.infer<typeof riderSchema>;

// --- Component ---
interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "vendor" | "rider";
}

export function PartnerModal({
  isOpen,
  onClose,
  defaultTab = "vendor",
}: PartnerModalProps) {
  const [activeTab, setActiveTab] = React.useState<"vendor" | "rider">(
    defaultTab,
  );
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Update active tab when prop changes or modal opens
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setIsSuccess(false);
    }
  }, [isOpen, defaultTab]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      {!isSuccess ? (
        <>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Partner with Us
            </h2>
            <p className="text-sm text-gray-500">
              Join the ChopQik revolution.
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("vendor")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "vendor"
                  ? "bg-white text-[#F2891C] shadow-sm"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              <Store className="h-4 w-4" /> Vendor
            </button>
            <button
              onClick={() => setActiveTab("rider")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "rider"
                  ? "bg-white text-[#F2891C] shadow-sm"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              <Bike className="h-4 w-4" /> Rider
            </button>
          </div>

          {activeTab === "vendor" ? (
            <VendorForm onSuccess={() => setIsSuccess(true)} />
          ) : (
            <RiderForm onSuccess={() => setIsSuccess(true)} />
          )}
        </>
      ) : (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            You&apos;re on the list!
          </h3>
          <p className="text-gray-500 mb-8">
            Thanks for your interest. Our team will reach out to the provided
            number within 24 hours.
          </p>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
}

// --- Sub-Forms ---

function VendorForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      city: "Benin City",
    },
  });

  const onSubmit = async (data: VendorFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Vendor Data:", data);
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Business Name
        </label>
        <Input
          {...register("businessName")}
          placeholder="e.g. Mama Ebo Pepper Rice"
        />
        {errors.businessName && (
          <p className="text-xs text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Contact Person
        </label>
        <Input {...register("contactName")} placeholder="Your Name" />
        {errors.contactName && (
          <p className="text-xs text-red-500">{errors.contactName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <Input {...register("phone")} type="tel" placeholder="080..." />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          {/* Read only for MVP as verified by constraints */}
          <Input
            {...register("city")}
            readOnly
            className="bg-gray-50 text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type</label>
          <select
            {...register("type")}
            className="flex h-11 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2891C] focus-visible:ring-offset-2"
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Mama Put">Mama Put</option>
            <option value="Street Food">Street Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Submit Application
      </Button>
    </form>
  );
}

function RiderForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RiderFormValues>({
    resolver: zodResolver(riderSchema),
    defaultValues: {
      city: "Benin City",
    },
  });

  const onSubmit = async (data: RiderFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Rider Data:", data);
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <Input {...register("fullName")} placeholder="Your Name" />
        {errors.fullName && (
          <p className="text-xs text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <Input {...register("phone")} type="tel" placeholder="080..." />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          <Input
            {...register("city")}
            readOnly
            className="bg-gray-50 text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Vehicle</label>
          <select
            {...register("vehicle")}
            className="flex h-11 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2891C] focus-visible:ring-offset-2"
          >
            <option value="Bike">Bike (Okada)</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Foot">Foot (Runner)</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Join Fleet
      </Button>
    </form>
  );
}
