"use client";
import { BiCheckSquare } from "react-icons/bi";
import { TbTargetArrow, TbScanEye } from "react-icons/tb";
import {
  MdOutlineRecommend,
  MdOutlineMonitorHeart,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import featureimg from "../public/featureimg.jpg";
import Image from "next/image";
import ReavealX from "./ReavealX";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
const features = [
  {
    name: "Omfattende tilgjengelighetssjekker",
    description:
      "Vårt AI-drevne verktøy gjennomfører grundige skanninger av nettstedet ditt for å identifisere tilgjengelighetsproblemer og gir detaljerte rapporter.",
    icon: BiCheckSquare,
  },
  {
    name: "Effektivitet og nøyaktighet",
    description:
      "Med avanserte algoritmer og maskinlæring leverer sjekkeren vår raske og presise resultater, og sparer deg for verdifull tid og krefter.",
    icon: TbTargetArrow,
  },
  {
    name: "Tilpassbare skanninger",
    description:
      "Skreddersy tilgjengelighetskontrollene for å matche dine spesifikke behov, for å sikre samsvar med de nyeste tilgjengelighetsstandardene.",
    icon: TbScanEye,
  },
  {
    name: "Handlingsbare anbefalinger",
    description:
      "Motta klare og praktiske anbefalinger for å fikse tilgjengelighetsproblemer og forbedre brukeropplevelsen for alle besøkende.",
    icon: MdOutlineRecommend,
  },
  {
    name: "Sanntidsovervåking",
    description:
      "Hold deg informert om tilgjengelighetsstatusen til nettstedet ditt med automatiske, regelmessige skanninger og varsler for nye problemer som oppstår.",
    icon: MdOutlineMonitorHeart,
  },
  {
    name: "Integrasjon og kompatibilitet",
    description:
      "Integrer tilgjengelighetskontrollen vår sømløst i din eksisterende utviklingsarbeidsflyt og sørg for kompatibilitet med populære innholdsstyringssystemer.",
    icon: MdOutlineIntegrationInstructions,
  },
];

const ServiceCard = () => {
  return (
    <ReavealX>
      <div className="hero-component">
        <div className="mx-auto w-full xl:w-[80%] 2xl:w-[70%] px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Hva <span className="text-primary">AccessiNor</span> tilbyr
                </h2>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 xl:h-7 xl:w-7 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={featureimg}
              alt="Product screenshot"
              className="w-full self-center rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </ReavealX>
  );
};

export default ServiceCard;
