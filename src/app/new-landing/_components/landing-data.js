import {
  BadgeCheck,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Clock3,
  Cpu,
  Laptop,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Zap,
} from "lucide-react";

export const contact = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref: "https://wa.me/919876543210?text=Hi%20ChipsetFix%2C%20I%20need%20motherboard%20repair%20support.",
};

export const heroStats = [
  { value: "45 min", label: "diagnostic review" },
  { value: "18K+", label: "devices restored" },
  { value: "4.9/5", label: "customer rating" },
];

export const services = [
  {
    icon: CircuitBoard,
    title: "Motherboard Repair",
    text: "Short-circuit tracing, no-power faults, corrosion clean-up, charging IC issues, BIOS recovery, and board-level rebuilds.",
  },
  {
    icon: Cpu,
    title: "Chipset Rework",
    text: "Precision chipset replacement, BGA reballing, thermal failure correction, and post-repair stress testing.",
  },
  {
    icon: Zap,
    title: "Power & Charging",
    text: "DC jack, USB-C, PMIC, battery connector, adapter detect, liquid damage, and high-current fault repair.",
  },
  {
    icon: Microscope,
    title: "Microsoldering",
    text: "Connector swaps, trace repair, component-level soldering, under-scope inspection, and preventive board reinforcement.",
  },
];

export const reasons = [
  "Advanced IR/BGA rework station and calibrated hot-air profiles",
  "Transparent diagnostics before repair approval",
  "Genuine-grade components and safe ESD handling",
  "Repair-first approach that helps avoid costly board replacement",
  "Warranty-backed workmanship on eligible repairs",
  "Pickup-ready support for urgent business devices",
];

export const deviceRepairs = [
  { icon: Laptop, title: "Laptop Repair", text: "No display, dead laptop, overheating, hinge damage, keyboard faults, SSD/RAM upgrades, and data-safe service." },
  { icon: Smartphone, title: "Mobile Repair", text: "Display, charging, battery, water damage, speaker, camera, network, and logic-board repairs." },
  { icon: Tv, title: "LED TV Repair", text: "Backlight, power board, T-Con, panel line diagnosis, HDMI faults, boot loops, and sound issues." },
  { icon: Camera, title: "Camera Repair", text: "Lens errors, sensor cleaning, shutter faults, battery doors, ports, and professional inspection." },
];

export const trustBadges = [
  { icon: ShieldCheck, title: "Warranty Support", text: "Clear warranty terms for qualified repair work." },
  { icon: Clock3, title: "Fast Turnaround", text: "Priority diagnosis for business-critical devices." },
  { icon: BadgeCheck, title: "Expert Technicians", text: "Board-level specialists trained for modern devices." },
  { icon: Star, title: "Rated Service", text: "Built around transparent updates and repair reports." },
];

export const faqs = [
  { q: "Do you repair dead motherboards?", a: "Yes. We diagnose no-power motherboards for short circuits, failed power rails, damaged ICs, corrosion, BIOS faults, and chipset-level issues before recommending repair or replacement." },
  { q: "How long does motherboard repair take?", a: "Most diagnostics start the same day. Simple connector or power faults can be resolved quickly, while chipset or liquid-damage work may need deeper testing and burn-in validation." },
  { q: "Can you repair gaming laptops and high-end boards?", a: "Yes. The workflow includes thermal inspection, GPU/CPU power rail checks, chipset assessment, fan and heatsink validation, and stability testing after repair." },
  { q: "Do you provide data-safe service?", a: "We focus on device repair without unnecessary storage access. If data recovery or operating-system work is needed, we confirm the scope before proceeding." },
  { q: "How do I get a quote?", a: "Call or message on WhatsApp with the device model, symptoms, and clear photos. Our team will guide you through diagnosis, expected timelines, and estimated cost." },
];

export const processSteps = [
  "Symptom review and intake checklist",
  "Microscope inspection and fault isolation",
  "Repair approval with clear estimate",
  "Component-level repair and stress testing",
];

export const HighlightIcon = Sparkles;
export const PhoneIcon = Phone;
export const WhatsAppIcon = MessageCircle;
export const CheckIcon = CheckCircle2;
