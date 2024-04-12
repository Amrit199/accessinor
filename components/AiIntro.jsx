import React from "react";
import aiintro from "../public/automatedai.jpg";
import Image from "next/image";
import Readmore from "./Buttons/Readmore";
import Reveal from "./Reaveal";

const AiIntro = () => {
  return (
    <Reveal>
      <div className="w-full xl:w-[80%] mx-auto flex flex-col lg:flex-row items-center px-5 gap-4 py-10">
        <div className="w-full flex items-start justify-center flex-col gap-4 px-2 lg:px-14">
          <h1 className="text-3xl">AI-integrasjon for enkel tilgjengelighet</h1>
          <h1 className="text-primary text-3xl font-bold">
            Automatisert nøyaktighetsinformasjon
          </h1>
          <p className="text-lg">
            Vår nettsidetilgjengelighetskontroll utnytter kraften til kunstig
            intelligens for å strømlinjeforme prosessen med å identifisere og
            rette opp tilgjengelighetsproblemer. Med banebrytende AI-algoritmer
            kan vi raskt skanne nettstedet ditt for potensielle barrierer, og de
            intuitive rapportene våre gir klar, handlingsdyktig innsikt.
            Millioner av mennesker med funksjonshemminger er avhengige av
            hjelpeteknologier for å få tilgang til nettet, og innsatsen din kan
            utgjøre en betydelig forskjell i livene deres.
          </p>
          <Readmore item={"Les mer AI-integrasjon"} link={"/services"} />
        </div>
        <div className="w-full flex items-center justify-center h-full">
          <Image
            src={aiintro}
            alt="accessibility checked image"
            className="object-fill"
            width={512}
            height={512}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default AiIntro;
