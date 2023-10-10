import React from "react";
import Link from "next/link";
import DemoButton from "@/components/Buttons/DemoButton";
import Image from "next/image";
import accessibility from "../public/webchecker.png";
import HeroSection from "@/components/HeroSection";
import AuditSection from "@/components/AuditSection";
import Intro from "@/components/Buttons/Intro";

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      {/* hero section */}
      <HeroSection />
      <Intro />
      <AuditSection />

      <div>

        <section className="features py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-6 border rounded shadow">
              <h3 className="text-2xl mb-4">Website Checker</h3>
              <p>
                Automatically scan any website for accessibility issues with our
                cutting-edge tools.
              </p>
            </div>
            <div className="feature-card p-6 border rounded shadow">
              <h3 className="text-2xl mb-4">Auditing & Counseling</h3>
              <p>
                Our team of experts is ready to guide you in making your website
                ADA compliant.
              </p>
            </div>
            <div className="feature-card p-6 border rounded shadow">
              <h3 className="text-2xl mb-4">Web Issues</h3>
              <p>
                Instantly get insights and solutions to any website-related
                issues you face.
              </p>
            </div>
          </div>
        </section>

        <section className="cta py-12 text-center bg-gray-200">
          <h2 className="text-3xl font-bold">
            Get Started with Accessibility Today!
          </h2>
          <p className="text-xl mt-4 mb-6">
            Don't let your website be a barrier. Let's make it accessible for
            all.
          </p>
          <Link
            href="/contact"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}
