import React from "react";

import ServiceCardHelperUser from "@/components/shared/serviceCard/ServiceCardHelperUser";
import { cardData } from "@/data/openPageCardData";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";

const OpenPage = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-20">
        <MainIcon />
        <p className="font-bold text-2xl">Open</p>
      </div>
      <div className="flex items-center justify-end mb-10 mr-12">
        <CreateHelpOrderButton />
      </div>
      <div className="grid grid-cols-6 gap-3 mx-auto max-w-screen">
        {cardData.map((card, index) => (
          <div key={index} className="md:col-span-3 lg:col-span-2 col-span-6 ">
            <ServiceCardHelperUser
              backgroundImage={card.backgroundImage}
              profileImage={card.profileImage}
              profileName={card.profileName}
              title={card.title}
              serviceType={card.serviceType}
              location={card.location}
              description={card.description}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPage;
