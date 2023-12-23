import Image from "next/image";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const PlanSubscription = ({ plan }) => {
  console.log(plan);
  return (
    <div className="card card-plan">
      <div className="content">
        {plan.img ? (
          <Image src={`/${plan.img}`} width={28} height={28} alt={plan.name} />
        ) : null}
        <h3>{plan.name}</h3>
        <p>{plan.content}</p>
      </div>
      <div className="price">
        <p>{plan.price}</p>
      </div>
      <div className="features">
        <ul className="features">
          {plan.features.map((feature, index) => {
            return (
              <li key={index} className="feature">
                <Image
                  src={`/${feature.image}`}
                  width={18}
                  height={18}
                  alt={feature.name}
                />
                {feature.name}
              </li>
            );
          })}
        </ul>
      </div>
      <PrimaryBtn content={plan.btn} link={plan.link} />
    </div>
  );
};

export default PlanSubscription;
