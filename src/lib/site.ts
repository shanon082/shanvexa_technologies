export const site = {
  url: "https://shanvexa-technologies.vercel.app",
  name: "Shanvexa Technologies",
  tagline: "Engineering What’s Next.",
  description:
    "Shanvexa Technologies builds practical websites, business systems, mobile applications and automation. Based in Uganda. Built around your business.",
  email: "shanonsimon082@gmail.com",
  whatsapp: "256771950092",
};

export const services = [
  "Website or web application",
  "Custom business system",
  "Mobile application",
  "Integration, automation or support",
  "Academic scheduling demo",
  "Something else",
] as const;

export type Service = (typeof services)[number] | "";
