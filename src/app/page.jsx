import codeImage from "@/app/assets/code-screen.jpg";
import Image from "next/image";
import {
  TbAt,
  TbBrandEnvato,
  TbColorPicker,
  TbLifebuoy,
  TbPalette,
  TbReportSearch,
} from "react-icons/tb";
import Section from "./components/Section";
import { Fragment } from "react";
export default function Home() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-2 flex-1 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">
              Empowering Your WordPress Journey for Over a Decade
            </h2>
            <div className="text-xl">
              <p>
                Trust WPPress for Expert Themes and Plugins. Let Your Website
                Stand Out with Our Proven Solutions.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={codeImage}
              alt="WordPress Code Screen"
              className="rounded-md"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-20">
          <h2 className="text-4xl text-center">What do we do?</h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-6 group items-center text-center">
              <TbPalette
                size={50}
                className="animate-none group-hover:animate-bounce"
              />
              <h3 className="text-2xl">Design & Development</h3>
              <div>
                <p>
                  Transforming Ideas into Stunning WordPress Realities: Your
                  Source for Tailored Theme and Plugin Solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group items-center text-center">
              <TbReportSearch
                size={50}
                className="animate-none group-hover:animate-bounce"
              />
              <h3 className="text-2xl">Strategy & Research</h3>
              <div>
                <p>
                  Strategic Insights, Seamless Execution: Uncover the Power of
                  Research-Driven WordPress Solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group items-center text-center">
              <TbLifebuoy
                size={50}
                className="animate-none group-hover:animate-bounce"
              />
              <h3 className="text-2xl">Support & Updates</h3>
              <div>
                <p>
                  Continuous Care: Ensuring Your WordPress Projects Thrive with
                  Our Reliable Maintenance Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-black">
        <div>
          <div className="flex flex-row gap-6 items-center justify-center">
            <a
              href="https://codecanyon.net/user/wppressplugin/portfolio"
              className="py-3 px-6 bg-white rounded-md text-black font-bold uppercase hover:bg-white/80 transition-colors gap-2 inline-flex items-center"
              target="_blank">
              <TbBrandEnvato />
              CodeCanyon
            </a>
            <a
              href="mailto:info@wppress.net"
              className="py-3 px-6 bg-white rounded-md text-black font-bold uppercase hover:bg-white/80 transition-colors  gap-2 inline-flex items-center">
              <TbAt />
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
