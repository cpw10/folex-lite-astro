/// <reference types="astro/client" />
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";

// Import section components
import Banner from "../layouts/components/sections/Banner.astro";
import Clients from "../layouts/components/sections/Clients.astro";
import ServicesSection from "../layouts/components/sections/ServicesSection.astro";
import PortfolioSection from "../layouts/components/sections/PortfolioSection.astro";
import PricingSection from "../layouts/components/sections/PricingSection.astro";

// Register components - names must match _name in content_blocks
const components = [
  { name: "banner", component: Banner },
  { name: "clients", component: Clients },
  { name: "services", component: ServicesSection },
  { name: "portfolio", component: PortfolioSection },
  { name: "pricing", component: PricingSection },
];

components.forEach(({ name, component }) => {
  registerAstroComponent(name, component);
});
