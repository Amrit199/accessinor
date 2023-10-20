"use client";
import React, { useState } from "react";
import ReavealX from "./ReavealX";

const PricingTab = ({
  yearly,
  popular,
  planName,
  price,
  planDescription,
  features,
  premiumFeatures,
}) => {
  return (
    <div className={`h-full ${popular ? "dark" : ""}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-primary text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
            {planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-2xl md:text-3xl">
              Kr.
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-2xl md:text-4xl">
              {yearly ? price.yearly : price.monthly}
            </span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">{planDescription}</div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-primary px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-p-hover focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
          Includes:
        </div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-primary mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        {premiumFeatures && premiumFeatures.length > 0 && (
          <>
            <div className="text-slate-900 dark:text-slate-200 font-medium my-3">
              Premium Addons:
            </div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              {premiumFeatures.map((feature, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-primary mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <ReavealX>
      <div>
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-primary rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                  isAnnual ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-white" : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Yearly{" "}
              <span
                className={`${
                  isAnnual
                    ? "text-indigo-200"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                -20%
              </span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-slate-500 dark:text-slate-400" : "text-white"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="w-[90%] mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <PricingTab
            yearly={isAnnual}
            popular={false}
            planName="Standard"
            price={{ yearly: 3990, monthly: 399 }}
            planDescription="There are many variations available, but the majority have suffered."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
            ]}
          />

          {/* Pricing tab 2 */}
          <PricingTab
            yearly={isAnnual}
            popular={true}
            planName="Advanced"
            price={{ yearly: 13990, monthly: 1399 }}
            planDescription="There are many variations available, but the majority have suffered."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
            ]}
            premiumFeatures={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
            ]}
          />

          {/* Pricing tab 3 */}
          <PricingTab
            yearly={isAnnual}
            popular={false}
            planName="Enterprise"
            price={{ yearly: 35990, monthly: 3599 }}
            planDescription="There are many variations available, but the majority have suffered."
            features={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
              "Free from repetition",
            ]}
            premiumFeatures={[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Predefined chunks as necessary",
              "Free from repetition",
            ]}
          />
        </div>
      </div>
    </ReavealX>
  );
};

export default PricingTable;
