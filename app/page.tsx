"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Brain,
  Lock,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Database,
  File,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import Footer from "./components/Footer";
import FilterButtons from "./components/FilterButtons";
import FAQSection from "./components/FAQSection";
import EnterpriseSecuritySection from "./components/EnterpriseSecuritySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Part1: Navigation */}
      <Navigation />

      {/* Part1: Hero */}
      <Hero />

      {/* Part1: IndustrySolutions */}
      <IndustrySolutions />

      {/* Part2: StatsSection */}
      <StatsSection />

      {/* Part2: ProductsSection */}
      <ProductsSection />

      {/* Part2: OnPremisesSection */}
      {/* <OnPremisesSection /> */}

      {/* Part4: Enterprise Data Sources */}
      <EnterpriseDataSourcesSection />

      {/* Part6: Knowledge Management */}
      <KnowledgeManagementSection />

      {/* Part8: Multi-Platform */}
      <MultiPlatformSection />

      {/* Part9: Truth Assurance */}
      <TruthAssuranceSection />

      {/* Filter Buttons Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[120px]">
          <FilterButtons />
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <FAQSection />

      {/* Enterprise Grade Security Section */}
      <EnterpriseSecuritySection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Part1: Navigation Component
function Navigation() {
  return (
    <nav className="border-b border-white/40 bg-black">
      <div className="flex h-24 items-center justify-between">
        <div className="flex flex-1 items-stretch">
          <div className="flex items-center justify-center px-12">
            <Logo />
          </div>
          <div className="hidden items-center gap-12 px-12 lg:flex">
            <NavButton label="Products" />
            <NavButton label="Solutions" />
            <NavButton label="Resources" />
            <NavButton label="Company" />
          </div>
        </div>
        <div className="flex items-center justify-center px-12">
          <button className="text-sm font-normal leading-5 tracking-[-0.01em] text-white">
            Schedule Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavButton({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1.5">
      <span className="text-sm font-normal leading-5 tracking-[-0.01em] text-white">
        {label}
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1406 7C12.1406 7.08702 12.1061 7.17048 12.0445 7.23202C11.983 7.29356 11.8995 7.32812 11.8125 7.32812H7.32812V11.8125C7.32812 11.8995 7.29356 11.983 7.23202 12.0445C7.17048 12.1061 7.08702 12.1406 7 12.1406C6.91298 12.1406 6.82952 12.1061 6.76798 12.0445C6.70645 11.983 6.67188 11.8995 6.67188 11.8125V7.32812H2.1875C2.10048 7.32812 2.01702 7.29356 1.95548 7.23202C1.89395 7.17048 1.85938 7.08702 1.85938 7C1.85938 6.91298 1.89395 6.82952 1.95548 6.76798C2.01702 6.70645 2.10048 6.67188 2.1875 6.67188H6.67188V2.1875C6.67188 2.10048 6.70645 2.01702 6.76798 1.95548C6.82952 1.89395 6.91298 1.85938 7 1.85938C7.08702 1.85938 7.17048 1.89395 7.23202 1.95548C7.29356 2.01702 7.32812 2.10048 7.32812 2.1875V6.67188H11.8125C11.8995 6.67188 11.983 6.70645 12.0445 6.76798C12.1061 6.82952 12.1406 6.91298 12.1406 7Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

function Logo() {
  return (
    <svg
      width="107"
      height="24"
      viewBox="0 0 107 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85717 17.8752L5.25936 23.6339H0L6.85717 1.1983H13.5146L20.4716 23.6339H15.0125L13.2816 17.8752H6.85717ZM12.5493 14.0805L11.1512 9.32042C10.7517 7.98895 10.3523 6.3245 10.0194 4.99302H9.95284C9.61997 6.3245 9.2871 8.02221 8.92097 9.32042L7.58949 14.0805H12.5493Z"
        fill="white"
      />
      <path
        d="M21.6362 23.6339C21.7028 22.5686 21.7694 20.6048 21.7694 18.7739V0H26.829V9.28705H26.8956C27.8609 7.88904 29.5586 6.99023 31.8221 6.99023C35.7168 6.99023 38.5794 10.2191 38.5461 15.2123C38.5461 21.0707 34.8179 24 31.0898 24C29.1924 24 27.3616 23.301 26.1966 21.3703H26.13L25.9303 23.6339H21.6362ZM26.829 16.7102C26.829 17.043 26.8623 17.3426 26.9289 17.6089C27.2618 18.9737 28.4268 20.0056 29.8914 20.0056C32.0551 20.0056 33.3867 18.3412 33.3867 15.412C33.3867 12.8821 32.2548 10.8849 29.8914 10.8849C28.5267 10.8849 27.2618 11.9168 26.9289 13.3814C26.8623 13.681 26.829 13.9806 26.829 14.3134V16.7102Z"
        fill="white"
      />
      <path
        d="M49.597 23.6339L49.2974 22.0028H49.1976C48.1323 23.301 46.468 24 44.5373 24C41.2419 24 39.278 21.6034 39.278 19.007C39.278 14.7795 43.0727 12.749 48.8313 12.7823V12.5492C48.8313 11.6838 48.3654 10.4522 45.8688 10.4522C44.2045 10.4522 42.4402 11.018 41.3751 11.6838L40.443 8.42161C41.5748 7.78914 43.8051 6.99023 46.7676 6.99023C52.1934 6.99023 53.9244 10.1859 53.9244 14.0138V19.6727C53.9244 21.2371 53.9909 22.7352 54.1573 23.6339H49.597ZM48.9978 15.9445C46.3348 15.9113 44.2711 16.5437 44.2711 18.5077C44.2711 19.8059 45.1365 20.4384 46.2683 20.4384C47.5332 20.4384 48.5651 19.6061 48.898 18.5742C48.9645 18.3079 48.9978 18.0084 48.9978 17.7088V15.9445Z"
        fill="white"
      />
      <path
        d="M68.8036 23.2345C67.9048 23.6339 66.2071 23.9667 64.2766 23.9667C59.0171 23.9667 55.6551 20.7712 55.6551 15.6449C55.6551 10.8849 58.9173 6.99023 64.9756 6.99023C66.307 6.99023 67.7717 7.22331 68.8368 7.62271L68.038 11.3842C67.4388 11.1179 66.54 10.8849 65.2085 10.8849C62.5456 10.8849 60.8146 12.7823 60.848 15.4452C60.848 18.441 62.8452 20.0056 65.3084 20.0056C66.5067 20.0056 67.4388 19.8059 68.2045 19.5063L68.8036 23.2345Z"
        fill="white"
      />
      <path
        d="M85.6131 18.4078C85.6131 20.5381 85.6796 22.2691 85.7462 23.6339H81.3523L81.1192 21.3371H81.0194C80.387 22.3357 78.8558 24 75.9265 24C72.6311 24 70.2011 21.9363 70.2011 16.9099V7.35648H75.294V16.111C75.294 18.4744 76.0596 19.9057 77.8238 19.9057C79.2219 19.9057 80.0208 18.9403 80.3537 18.1414C80.4868 17.8419 80.5201 17.4424 80.5201 17.043V7.35648H85.6131V18.4078Z"
        fill="white"
      />
      <path
        d="M88.3088 19.2067C89.2409 19.7725 91.1716 20.4384 92.6695 20.4384C94.2007 20.4384 94.8331 19.9057 94.8331 19.0735C94.8331 18.2413 94.3338 17.8419 92.4365 17.2095C89.0745 16.0777 87.7763 14.2469 87.8095 12.3162C87.8095 9.28705 90.406 6.99023 94.4337 6.99023C96.3311 6.99023 98.0288 7.42301 99.0274 7.92231L98.1286 11.4174C97.3963 11.018 95.9982 10.4855 94.6002 10.4855C93.3685 10.4855 92.6695 10.9848 92.6695 11.8169C92.6695 12.5826 93.302 12.982 95.2992 13.681C98.3949 14.7462 99.6931 16.3107 99.7264 18.7074C99.7264 21.7365 97.3297 23.9667 92.6695 23.9667C90.5391 23.9667 88.6417 23.5007 87.4101 22.835L88.3088 19.2067Z"
        fill="white"
      />
      <path
        d="M100.758 20.9377C100.758 19.1401 101.99 17.8419 103.754 17.8419C105.518 17.8419 106.716 19.1068 106.716 20.9377C106.716 22.7018 105.518 24 103.721 24C101.99 24 100.758 22.7018 100.758 20.9377Z"
        fill="#645AFF"
      />
    </svg>
  );
}

// Part1: Hero Component
function Hero() {
  return (
    <div className="relative bg-black">
      <div className="absolute left-0 top-0 h-[1663px] w-px bg-white/40 hidden xl:block" style={{ left: '120px' }} />
      <div className="absolute right-0 top-0 h-[1663px] w-px bg-white/40 hidden xl:block" style={{ right: '121px' }} />
      <div className="absolute left-0 w-full border-t border-white/40 hidden lg:block" style={{ top: '726px' }} />

      <GridDots />

      {/* Dots Pattern - positioned absolutely on top */}
      <div className="absolute top-20 right-[140px] hidden xl:block" style={{ zIndex: 50 }}>
        <img src="/Dots.png" alt="Decorative dots pattern" className="w-auto h-auto max-w-[360px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] relative">
        <div className="pt-24 pb-16 xl:pt-32 xl:pb-48 xl:max-w-[600px]">
          <MainHeadingSection />
        </div>

        <IndustryLeaders />
      </div>
    </div>
  );
}

function GridDots() {
  return (
    <>
      <div className="absolute w-2 h-2 rounded-full bg-black border border-white/40 hidden xl:block" style={{ left: '117px', top: '-4px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-black border border-white/40 hidden xl:block" style={{ left: '117px', top: '723px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-black border border-white/40 hidden xl:block" style={{ right: '125px', top: '-4px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-black border border-white/40 hidden xl:block" style={{ right: '125px', top: '723px' }} />
    </>
  );
}

function MainHeadingSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-start gap-2">
        <Badge icon={<ShieldCheckIcon />} label="SOC 2 Type II Certified" />
        <Badge icon={<BrainIcon />} label="HIPAA Compliant" />
        <Badge icon={<LockIcon />} label="Bank-Grade Security" />
        <Badge icon={<ChartLineUpIcon />} label="Air-Gapped Deployment" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.33] tracking-[-0.04em] text-white">
            Enterprise AI Infrastructure Built For{" "}
            <span className="inline-flex items-baseline gap-1 border-b-2 border-[#645AFF] pb-0.5">
              Banking
              <svg className="inline-block" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#645AFF" />
              </svg>
            </span>
            .
          </h1>
        </div>

        <p className="text-base font-normal leading-6 tracking-[-0.01em] text-white/60 max-w-[774px]">
          Deploy secure, compliant AI infrastructure for regulated industries. Complete control over your data, responses, and processing, all with enterprise-grade security.
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-3">
        <button className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-normal leading-5 tracking-[-0.01em] text-black transition-opacity hover:opacity-90">
          Request Integration
        </button>
        <button className="flex items-center gap-1.5 rounded-full bg-black border border-white/60 px-5 py-2.5 text-sm font-normal leading-5 tracking-[-0.01em] text-white transition-colors hover:bg-white/10">
          Contact Sales
        </button>
      </div>
    </div>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex h-8 items-center gap-1.5 rounded-full bg-white/15 px-4 py-2">
      {icon}
      <span className="text-xs font-normal leading-4 tracking-[-0.01em] text-white">
        {label}
      </span>
    </div>
  );
}

function IndustryLeaders() {
  return (
    <div className="flex flex-col items-center gap-16 pb-24 pt-16 xl:pt-32">
      <div className="flex flex-col items-center gap-2 max-w-[426px] text-center">
        <h2 className="text-2xl font-medium leading-8 tracking-[-0.04em] text-white">
          Built for Industry Leaders
        </h2>
        <p className="text-sm font-normal leading-5 tracking-[-0.01em] text-white/60">
          Powering AI innovation for the world's most regulated industries.
        </p>
      </div>

      <div className="relative w-full max-w-[1030px] overflow-hidden">
        <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/7757dbb5eb2c1706cb4880688ace1c5099447462?width=260" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/3bda013b941fee0cb6536a2f6175a2afc7e8e813?width=92" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/4f84a443a56f39b3f4ae06dbcb879fa50ceae364?width=148" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/7a44ec272bee98cb3025d014c02ae46d520913a0?width=133" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/34a85a2add5c0430abc4b0d916171dca64f6a012?width=161" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/3afd6b3c1553ff4c5f33b28661ea8e145078e3d3?width=224" alt="Company logo" className="h-8 w-28 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a7ae6be226b6d53940efdfef0696dbdc233b9430?width=154" alt="Company logo" className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </div>
  );
}

// Part1: IndustrySolutions Component
function IndustrySolutions() {
  return (
    <section className="relative bg-white">
      <div className="absolute left-0 top-0 h-full w-px bg-black/20 hidden xl:block" style={{ left: '120px' }} />
      <div className="absolute right-0 top-0 h-full w-px bg-black/20 hidden xl:block" style={{ right: '121px' }} />

      <SolutionGridDots />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] relative">
        <div className="pt-16 pb-8 xl:pt-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center px-1">
              <span className="text-sm font-normal leading-[14px] tracking-[0.12em] uppercase text-black" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
                Industry solutions
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.17] tracking-[-0.04em]">
              <span className="text-black">Empowering The Institutions</span>
              <br />
              <span className="text-black/40">The World Depends On</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-black/20" />

        <div className="py-4 flex items-center gap-2 flex-wrap">
          <button className="flex h-8 items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-white">
            Banking
          </button>
          <button className="flex h-8 items-center gap-1.5 rounded-full border border-black/60 px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-black hover:bg-black/5 transition-colors">
            Insurance
          </button>
          <button className="flex h-8 items-center gap-1.5 rounded-full border border-black/60 px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-black hover:bg-black/5 transition-colors">
            Healthcare
          </button>
          <button className="flex h-8 items-center gap-1.5 rounded-full border border-black/60 px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-black hover:bg-black/5 transition-colors">
            Government
          </button>
        </div>

        <div className="border-t border-black/20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 xl:py-0">
          <div className="flex flex-col justify-center gap-6 py-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5">
                <BankIcon />
              </div>
              <h3 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.17] tracking-[-0.04em] text-black">
                Banking
              </h3>
            </div>
            <p className="text-sm font-normal leading-5 tracking-[-0.01em] text-black/60">
              Purpose-built for financial institutions. Meet regulatory standards while reducing manual review time by up to 70%. From KYC to transaction monitoring, bring intelligent automation to critical banking workflows.
            </p>
            <button className="flex items-center gap-1.5 text-sm font-normal leading-5 tracking-[-0.01em] text-black hover:gap-2 transition-all group">
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M10.8281 3.5V9.1875C10.8281 9.27452 10.7935 9.35798 10.732 9.41952C10.6705 9.48106 10.587 9.51562 10.5 9.51562C10.413 9.51562 10.3295 9.48106 10.268 9.41952C10.2064 9.35798 10.1719 9.27452 10.1719 9.1875V4.29188L3.73187 10.7319C3.66967 10.7898 3.5874 10.8214 3.50239 10.8199C3.41738 10.8184 3.33628 10.784 3.27616 10.7238C3.21604 10.6637 3.1816 10.5826 3.1801 10.4976C3.1786 10.4126 3.21016 10.3303 3.26812 10.2681L9.70812 3.82812H4.81249C4.72547 3.82812 4.64201 3.79355 4.58047 3.73202C4.51894 3.67048 4.48437 3.58702 4.48437 3.5C4.48437 3.41298 4.51894 3.32952 4.58047 3.26798C4.64201 3.20645 4.72547 3.17188 4.81249 3.17188H10.5C10.587 3.17188 10.6705 3.20645 10.732 3.26798C10.7935 3.32952 10.8281 3.41298 10.8281 3.5Z" fill="black" />
              </svg>
            </button>
          </div>

          <div className="relative flex items-center justify-center min-h-[480px]">
            <div className="relative w-full max-w-[480px] h-[480px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/af2b1bd53ce09855486582f9076f79fb5d1ebf28?width=960"
                  alt="Banking Industry Tokens"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-10" style={{ left: '50%' }}>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/aee0186cbd1b3d19d345259e646a4d46a38ea9f1?width=960"
                  alt="Banking Industry Tokens Background"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20" />
      </div>
    </section>
  );
}

function SolutionGridDots() {
  return (
    <>
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ left: '117px', top: '291px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ left: '117px', top: '356px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ right: '125px', top: '291px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ right: '125px', top: '356px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ left: '117px', bottom: '0px' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden xl:block" style={{ right: '125px', bottom: '0px' }} />
    </>
  );
}

function BankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 9.56248H4.6875V15.9375H3C2.85082 15.9375 2.70774 15.9967 2.60225 16.1022C2.49676 16.2077 2.4375 16.3508 2.4375 16.5C2.4375 16.6492 2.49676 16.7922 2.60225 16.8977C2.70774 17.0032 2.85082 17.0625 3 17.0625H21C21.1492 17.0625 21.2923 17.0032 21.3977 16.8977C21.5032 16.7922 21.5625 16.6492 21.5625 16.5C21.5625 16.3508 21.5032 16.2077 21.3977 16.1022C21.2923 15.9967 21.1492 15.9375 21 15.9375H19.3125V9.56248H21.75C21.8724 9.56239 21.9915 9.52235 22.0891 9.44844C22.1867 9.37454 22.2576 9.27079 22.2909 9.15297C22.3242 9.03515 22.3181 8.90967 22.2736 8.7956C22.2291 8.68153 22.1487 8.58509 22.0444 8.52092L12.2944 2.52092C12.2058 2.46653 12.1039 2.43774 12 2.43774C11.8961 2.43774 11.7942 2.46653 11.7056 2.52092L1.95563 8.52092C1.85135 8.58509 1.77085 8.68153 1.72637 8.7956C1.68188 8.90967 1.67583 9.03515 1.70913 9.15297C1.74243 9.27079 1.81326 9.37454 1.91088 9.44844C2.00849 9.52235 2.12756 9.56239 2.25 9.56248ZM5.8125 9.56248H9.1875V15.9375H5.8125V9.56248ZM13.6875 9.56248V15.9375H10.3125V9.56248H13.6875ZM18.1875 15.9375H14.8125V9.56248H18.1875V15.9375ZM12 3.65623L19.7625 8.43748H4.2375L12 3.65623ZM23.0625 19.5C23.0625 19.6492 23.0032 19.7922 22.8977 19.8977C22.7923 20.0032 22.6492 20.0625 22.5 20.0625H1.5C1.35082 20.0625 1.20774 20.0032 1.10225 19.8977C0.996763 19.7922 0.9375 19.6492 0.9375 19.5C0.9375 19.3508 0.996763 19.2077 1.10225 19.1022C1.20774 18.9967 1.35082 18.9375 1.5 18.9375H22.5C22.6492 18.9375 22.7923 18.9967 22.8977 19.1022C23.0032 19.2077 23.0625 19.3508 23.0625 19.5Z" fill="black" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.375 2.29688H2.625C2.42194 2.29688 2.2272 2.37754 2.08362 2.52112C1.94004 2.6647 1.85938 2.85944 1.85938 3.0625V6.125C1.85938 8.96547 3.23312 10.6859 4.38594 11.6288C5.62898 12.6459 6.86164 12.9899 6.91359 13.0041C6.97016 13.0196 7.02984 13.0196 7.08641 13.0041C7.13836 12.9899 8.37102 12.6459 9.61406 11.6288C10.7669 10.6859 12.1406 8.96547 12.1406 6.125V3.0625C12.1406 2.85944 12.06 2.6647 11.9164 2.52112C11.7728 2.37754 11.5781 2.29688 11.375 2.29688ZM11.4844 6.125C11.4844 8.19 10.722 9.86508 9.21812 11.1048C8.55838 11.6466 7.80722 12.0663 7 12.3441C6.19267 12.0665 5.44147 11.6468 4.78188 11.1048C3.27797 9.86508 2.51562 8.19 2.51562 6.125V3.0625C2.51562 3.03349 2.52715 3.00567 2.54766 2.98516C2.56817 2.96465 2.59599 2.95313 2.625 2.95313H11.375C11.404 2.95313 11.4318 2.96465 11.4523 2.98516C11.4729 3.00567 11.4844 3.03349 11.4844 3.0625V6.125ZM9.41938 5.45563C9.48082 5.51715 9.51534 5.60055 9.51534 5.6875C9.51534 5.77445 9.48082 5.85785 9.41938 5.91938L6.35687 8.98188C6.29535 9.04332 6.21195 9.07784 6.125 9.07784C6.03805 9.07784 5.95465 9.04332 5.89313 8.98188L4.58063 7.66938C4.52267 7.60717 4.49111 7.5249 4.49261 7.4399C4.49411 7.35489 4.52855 7.27378 4.58867 7.21367C4.64878 7.15355 4.72989 7.11911 4.8149 7.11761C4.8999 7.11611 4.98217 7.14767 5.04437 7.20563L6.125 8.2857L8.95562 5.45563C9.01715 5.39418 9.10055 5.35966 9.1875 5.35966C9.27445 5.35966 9.35785 5.39418 9.41938 5.45563Z" fill="white" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4531 6.78126C13.4524 6.21078 13.2868 5.65266 12.9764 5.17406C12.6659 4.69545 12.2237 4.31676 11.7031 4.08353V3.93751C11.7026 3.38241 11.5184 2.84309 11.1794 2.40355C10.8404 1.96402 10.3655 1.64897 9.82872 1.50747C9.29196 1.36598 8.72347 1.406 8.21183 1.62129C7.70018 1.83658 7.27411 2.21505 6.99999 2.69774C6.72588 2.21505 6.2998 1.83658 5.78816 1.62129C5.27651 1.406 4.70803 1.36598 4.17127 1.50747C3.6345 1.64897 3.15962 1.96402 2.82058 2.40355C2.48155 2.84309 2.29742 3.38241 2.29687 3.93751V4.08353C1.77583 4.31597 1.33329 4.69437 1.02273 5.17298C0.712174 5.65159 0.546906 6.20991 0.546906 6.78044C0.546906 7.35097 0.712174 7.90929 1.02273 8.3879C1.33329 8.86651 1.77583 9.24491 2.29687 9.47735V9.62501C2.29742 10.1801 2.48155 10.7194 2.82058 11.159C3.15962 11.5985 3.6345 11.9136 4.17127 12.055C4.70803 12.1965 5.27651 12.1565 5.78816 11.9412C6.2998 11.7259 6.72588 11.3475 6.99999 10.8648C7.27411 11.3475 7.70018 11.7259 8.21183 11.9412C8.72347 12.1565 9.29196 12.1965 9.82872 12.055C10.3655 11.9136 10.8404 11.5985 11.1794 11.159C11.5184 10.7194 11.7026 10.1801 11.7031 9.62501V9.47735C12.2237 9.24457 12.6659 8.86621 12.9764 8.38785C13.2869 7.90949 13.4525 7.35155 13.4531 6.78126ZM4.81249 11.4844C4.32924 11.4846 3.86487 11.2967 3.51779 10.9604C3.17071 10.6242 2.96818 10.166 2.95312 9.68298C3.1334 9.71717 3.31649 9.73438 3.49999 9.73438H3.93749C4.02452 9.73438 4.10798 9.69981 4.16951 9.63828C4.23105 9.57674 4.26562 9.49328 4.26562 9.40626C4.26562 9.31924 4.23105 9.23578 4.16951 9.17424C4.10798 9.1127 4.02452 9.07813 3.93749 9.07813H3.49999C2.95784 9.07857 2.43301 8.88722 2.01836 8.53794C1.60372 8.18866 1.32599 7.70396 1.23432 7.16961C1.14266 6.63526 1.24296 6.08572 1.51749 5.61821C1.79201 5.1507 2.22307 4.79537 2.73437 4.61509C2.79837 4.59246 2.85378 4.55054 2.89295 4.4951C2.93213 4.43966 2.95315 4.37344 2.95312 4.30556V3.93751C2.95312 3.44437 3.14902 2.97143 3.49772 2.62273C3.84642 2.27403 4.31936 2.07814 4.81249 2.07814C5.30563 2.07814 5.77857 2.27403 6.12727 2.62273C6.47597 2.97143 6.67187 3.44437 6.67187 3.93751V7.93243C6.43652 7.6731 6.1495 7.4659 5.82927 7.32416C5.50904 7.18241 5.16269 7.10925 4.81249 7.10938C4.72547 7.10938 4.64201 7.14395 4.58047 7.20549C4.51894 7.26703 4.48437 7.35049 4.48437 7.43751C4.48437 7.52453 4.51894 7.60799 4.58047 7.66953C4.64201 7.73106 4.72547 7.76563 4.81249 7.76563C5.30563 7.76563 5.77857 7.96153 6.12727 8.31023C6.47597 8.65893 6.67187 9.13187 6.67187 9.62501C6.67187 10.1181 6.47597 10.5911 6.12727 10.9398C5.77857 11.2885 5.30563 11.4844 4.81249 11.4844ZM10.5 9.07813H10.0625C9.97547 9.07813 9.89201 9.1127 9.83047 9.17424C9.76894 9.23578 9.73437 9.31924 9.73437 9.40626C9.73437 9.49328 9.76894 9.57674 9.83047 9.63828C9.89201 9.69981 9.97547 9.73438 10.0625 9.73438H10.5C10.6835 9.73438 10.8666 9.71717 11.0469 9.68298C11.0355 10.048 10.9168 10.4017 10.7057 10.6997C10.4946 10.9978 10.2004 11.2271 9.85979 11.3589C9.51919 11.4908 9.14729 11.5195 8.79051 11.4413C8.43373 11.3632 8.10787 11.1817 7.8536 10.9195C7.59932 10.6573 7.42791 10.326 7.36074 9.96696C7.29356 9.60795 7.33362 9.2371 7.47589 8.90071C7.61817 8.56432 7.85637 8.27728 8.16076 8.07542C8.46515 7.87356 8.82225 7.76581 9.18749 7.76563C9.27452 7.76563 9.35798 7.73106 9.41951 7.66953C9.48105 7.60799 9.51562 7.52453 9.51562 7.43751C9.51562 7.35049 9.48105 7.26703 9.41951 7.20549C9.35798 7.14395 9.27452 7.10938 9.18749 7.10938C8.83729 7.10925 8.49094 7.18241 8.17071 7.32416C7.85048 7.4659 7.56347 7.6731 7.32812 7.93243V3.93751C7.32812 3.44437 7.52402 2.97143 7.87272 2.62273C8.22142 2.27403 8.69436 2.07814 9.18749 2.07814C9.68063 2.07814 10.1536 2.27403 10.5023 2.62273C10.851 2.97143 11.0469 3.44437 11.0469 3.93751V4.30556C11.0468 4.37344 11.0679 4.43966 11.107 4.4951C11.1462 4.55054 11.2016 4.59246 11.2656 4.61509C11.7769 4.79537 12.208 5.1507 12.4825 5.61821C12.757 6.08572 12.8573 6.63526 12.7657 7.16961C12.674 7.70396 12.3963 8.18866 11.9816 8.53794C11.567 8.88722 11.0421 9.07857 10.5 9.07813ZM11.2656 6.12501C11.2656 6.21203 11.231 6.29549 11.1695 6.35703C11.108 6.41856 11.0245 6.45313 10.9375 6.45313H10.7187C10.2256 6.45313 9.75267 6.25724 9.40397 5.90854C9.05527 5.55984 8.85937 5.0869 8.85937 4.59376V4.37501C8.85937 4.28799 8.89394 4.20453 8.95547 4.14299C9.01701 4.08146 9.10047 4.04689 9.18749 4.04689C9.27452 4.04689 9.35798 4.08146 9.41951 4.14299C9.48105 4.20453 9.51562 4.28799 9.51562 4.37501V4.59376C9.51562 4.91285 9.64237 5.21887 9.868 5.4445C10.0936 5.67013 10.3997 5.79688 10.7187 5.79688H10.9375C11.0245 5.79688 11.108 5.83146 11.1695 5.89299C11.231 5.95453 11.2656 6.03799 11.2656 6.12501ZM3.28124 6.45313H3.06249C2.97547 6.45313 2.89201 6.41856 2.83047 6.35703C2.76894 6.29549 2.73437 6.21203 2.73437 6.12501C2.73437 6.03799 2.76894 5.95453 2.83047 5.89299C2.89201 5.83146 2.97547 5.79688 3.06249 5.79688H3.28124C3.60033 5.79688 3.90635 5.67013 4.13198 5.4445C4.35761 5.21887 4.48437 4.91285 4.48437 4.59376V4.37501C4.48437 4.28799 4.51894 4.20453 4.58047 4.14299C4.64201 4.08146 4.72547 4.04689 4.81249 4.04689C4.89952 4.04689 4.98298 4.08146 5.04451 4.14299C5.10605 4.20453 5.14062 4.28799 5.14062 4.37501V4.59376C5.14062 5.0869 4.94472 5.55984 4.59602 5.90854C4.24732 6.25724 3.77438 6.45313 3.28124 6.45313Z" fill="white" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.375 4.48438H9.51562V3.0625C9.51562 2.39531 9.25059 1.75546 8.77882 1.28368C8.30704 0.811913 7.66719 0.546875 7 0.546875C6.33281 0.546875 5.69296 0.811913 5.22118 1.28368C4.74941 1.75546 4.48438 2.39531 4.48438 3.0625V4.48438H2.625C2.42194 4.48438 2.2272 4.56504 2.08362 4.70862C1.94004 4.8522 1.85938 5.04694 1.85938 5.25V11.375C1.85938 11.5781 1.94004 11.7728 2.08362 11.9164C2.2272 12.06 2.42194 12.1406 2.625 12.1406H11.375C11.5781 12.1406 11.7728 12.06 11.9164 11.9164C12.06 11.7728 12.1406 11.5781 12.1406 11.375V5.25C12.1406 5.04694 12.06 4.8522 11.9164 4.70862C11.7728 4.56504 11.5781 4.48438 11.375 4.48438ZM5.14062 3.0625C5.14062 2.56936 5.33652 2.09642 5.68522 1.74772C6.03392 1.39902 6.50686 1.20313 7 1.20312C7.49314 1.20313 7.96608 1.39902 8.31478 1.74772C8.66348 2.09642 8.85937 2.56936 8.85938 3.0625V4.48438H5.14062V3.0625ZM11.4844 11.375C11.4844 11.404 11.4729 11.4318 11.4523 11.4523C11.4318 11.4729 11.404 11.4844 11.375 11.4844H2.625C2.59599 11.4844 2.56817 11.4729 2.54766 11.4523C2.52715 11.4318 2.51562 11.404 2.51562 11.375V5.25C2.51562 5.22099 2.52715 5.19317 2.54766 5.17266C2.56817 5.15215 2.59599 5.14062 2.625 5.14062H11.375C11.404 5.14062 11.4318 5.15215 11.4523 5.17266C11.4729 5.19317 11.4844 5.22099 11.4844 5.25V11.375ZM7.54688 8.3125C7.54688 8.42066 7.5148 8.52639 7.45471 8.61633C7.39462 8.70626 7.30921 8.77636 7.20928 8.81775C7.10935 8.85914 6.99939 8.86997 6.89331 8.84887C6.78723 8.82777 6.68978 8.77568 6.6133 8.6992C6.53682 8.62272 6.48473 8.52527 6.46363 8.41919C6.44253 8.31311 6.45336 8.20315 6.49475 8.10322C6.53615 8.00329 6.60624 7.91788 6.69617 7.85779C6.78611 7.7977 6.89184 7.76562 7 7.76562C7.14504 7.76562 7.28414 7.82324 7.3867 7.9258C7.48926 8.02836 7.54688 8.16746 7.54688 8.3125Z" fill="white" />
    </svg>
  );
}

function ChartLineUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5781 11.375C12.5781 11.462 12.5436 11.5455 12.482 11.607C12.4205 11.6686 12.337 11.7031 12.25 11.7031H1.75C1.66298 11.7031 1.57952 11.6686 1.51798 11.607C1.45645 11.5455 1.42188 11.462 1.42188 11.375V2.625C1.42188 2.53798 1.45645 2.45452 1.51798 2.39298C1.57952 2.33145 1.66298 2.29688 1.75 2.29688C1.83702 2.29688 1.92048 2.33145 1.98202 2.39298C2.04355 2.45452 2.07812 2.53798 2.07812 2.625V8.83313L5.01813 5.89313C5.07965 5.83168 5.16305 5.79716 5.25 5.79716C5.33695 5.79716 5.42035 5.83168 5.48187 5.89313L7 7.4107L10.1456 4.26562H8.75C8.66298 4.26562 8.57952 4.23105 8.51798 4.16952C8.45644 4.10798 8.42188 4.02452 8.42188 3.9375C8.42188 3.85048 8.45644 3.76702 8.51798 3.70548C8.57952 3.64395 8.66298 3.60938 8.75 3.60938H10.9375C11.0245 3.60938 11.108 3.64395 11.1695 3.70548C11.2311 3.76702 11.2656 3.85048 11.2656 3.9375V6.125C11.2656 6.21202 11.2311 6.29548 11.1695 6.35702C11.108 6.41855 11.0245 6.45312 10.9375 6.45312C10.8505 6.45312 10.767 6.41855 10.7055 6.35702C10.6439 6.29548 10.6094 6.21202 10.6094 6.125V4.72938L7.23188 8.10688C7.17035 8.16832 7.08695 8.20284 7 8.20284C6.91305 8.20284 6.82965 8.16832 6.76813 8.10688L5.25 6.5893L2.07812 9.76117V11.0469H12.25C12.337 11.0469 12.4205 11.0814 12.482 11.143C12.5436 11.2045 12.5781 11.288 12.5781 11.375Z" fill="white" />
    </svg>
  );
}

// Part2: StatsSection Component
function StatsSection() {
  const stats = [
    {
      value: "90%",
      label: "First Contact",
      description: "Resolution Rate"
    },
    {
      value: "$2.1M",
      label: "Annual Savings",
      description: "Average per enterprise"
    },
    {
      value: "75%",
      label: "Faster Service",
      description: "Response time reduction"
    },
    {
      value: "60%",
      label: "Cost Savings",
      description: "Operational costs"
    }
  ];

  return (
    <section className="relative w-full bg-[#645AFF] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-full max-w-[1440px] mx-auto">
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-white/20 hidden lg:block" />
        <div className="absolute right-[120px] top-0 bottom-0 w-px bg-white/20 hidden lg:block" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        <div className="py-8 sm:py-12 lg:py-[88px]">
          <div className="flex flex-col gap-4 px-0 sm:px-4 lg:px-8">
            <div className="px-1">
              <span className="text-white font-mono text-xs sm:text-sm uppercase tracking-[1.68px] font-normal">
                Stats
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-[-0.04em] lg:tracking-[-1.92px]">
              Quantifiable Impact
            </h2>
          </div>
        </div>

        <div className="relative w-full h-px bg-white/20">
          <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[296px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[596px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[896px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-6 sm:p-8 lg:p-8 ${index < stats.length - 1 ? "border-b sm:border-b-0 lg:border-r border-white/20" : ""
                } ${index === 1 || index === 3 ? "sm:border-r-0 lg:border-r" : ""
                } ${index < 2 ? "sm:border-r" : ""
                }`}
            >
              <div className="text-white text-5xl sm:text-6xl lg:text-[80px] font-normal leading-tight lg:leading-[96px] tracking-[-0.08em] lg:tracking-[-6.4px]">
                {stat.value}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-white text-base font-medium leading-5 tracking-[-0.02em] lg:tracking-[-0.32px]">
                  {stat.label}
                </div>
                <div className="text-white/40 text-sm font-normal leading-5 tracking-[-0.01em] lg:tracking-[-0.14px]">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full h-px bg-white/20">
          <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[296px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[596px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute left-[896px] -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[#645AFF] border border-white/40 hidden lg:block" />
        </div>

        <div className="h-16 sm:h-20 lg:h-[120px]" />
      </div>
    </section>
  );
}

// Part2: ProductsSection Component
function ProductsSection() {
  const products = [
    {
      label: "SECURE AI INFRASTRUCTURE",
      title: "On-Premise LLM",
      description: "Deploy powerful AI with complete data sovereignty. Your data never leaves your secure environment.",
      background: "rgba(0, 0, 0, 0.05)",
      textColor: "text-black",
      labelColor: "text-black",
      descriptionColor: "text-black/60",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/3e56594da944626523c8c82b21839fed2f8ecae0?width=1296",
      imageOpacity: "opacity-100",
      hasButton: false
    },
    {
      label: "PRIVACY-FIRST KNOWLEDGE PROCESSING",
      title: "Decentralized Indexer",
      description: "Connect and process data across your systems without moving it. Real-time indexing with enterprise security.",
      background: "rgba(100, 90, 255, 0.20)",
      textColor: "text-white",
      labelColor: "text-white",
      descriptionColor: "text-white/60",
      productImage: "https://api.builder.io/api/v1/image/assets/TEMP/e89164c92de5af9017e41d38c0d17b4957b5536f?width=1296",
      imageOpacity: "opacity-50",
      hasButton: true,
      hasCursor: true
    },
    {
      label: "AI-POWERED ASSISTANT",
      title: "Abbi Assist™",
      description: "Empower your team with intelligent assistance that ensures accuracy, compliance, and exceptional service.",
      background: "rgba(0, 0, 0, 0.05)",
      textColor: "text-black",
      labelColor: "text-black",
      descriptionColor: "text-black/60",
      productImage: null,
      imageOpacity: "opacity-60",
      hasButton: false,
      svg: (
        <svg className="w-full h-full aspect-square absolute -right-[324px] -bottom-[324px] opacity-60" width="324" height="324" viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" clipPath="url(#clip0_57_19684)">
            <path d="M344.828 197.552C356.33 186.05 356.33 167.402 344.828 155.901C333.327 144.399 314.679 144.399 303.177 155.901C291.676 167.402 291.676 186.05 303.177 197.552C314.679 209.053 333.327 209.053 344.828 197.552Z" fill="black" fillOpacity="0.05" />
            <path d="M205.806 328.73C208.412 312.674 197.509 297.546 181.453 294.94C165.398 292.334 150.27 303.236 147.663 319.292C145.057 335.347 155.96 350.476 172.016 353.082C188.071 355.688 203.199 344.785 205.806 328.73Z" fill="black" fillOpacity="0.05" />
            <path d="M202.734 279.123C218.628 275.666 228.711 259.979 225.254 244.085C221.797 228.191 206.11 218.108 190.216 221.565C174.322 225.022 164.24 240.709 167.696 256.603C171.153 272.497 186.84 282.579 202.734 279.123Z" fill="black" fillOpacity="0.05" />
            <path d="M251.065 225.915C267.326 225.523 280.19 212.023 279.798 195.762C279.407 179.501 265.907 166.637 249.646 167.029C233.385 167.42 220.521 180.92 220.912 197.181C221.304 213.442 234.804 226.306 251.065 225.915Z" fill="black" fillOpacity="0.05" />
            <path d="M130.3 335.272C136.525 320.244 129.389 303.016 114.361 296.791C99.3336 290.567 82.1053 297.703 75.8807 312.73C69.6561 327.758 76.7923 344.986 91.8198 351.211C106.847 357.435 124.076 350.299 130.3 335.272Z" fill="black" fillOpacity="0.05" />
            <path d="M137.235 269.27C148.737 257.769 148.737 239.121 137.235 227.62C125.734 216.118 107.086 216.118 95.5845 227.62C84.083 239.121 84.083 257.769 95.5845 269.27C107.086 280.772 125.734 280.772 137.235 269.27Z" fill="black" fillOpacity="0.05" />
            <path d="M157.343 211.346C173.547 209.928 185.533 195.643 184.116 179.439C182.698 163.235 168.413 151.249 152.209 152.667C136.006 154.084 124.019 168.369 125.437 184.573C126.854 200.777 141.139 212.763 157.343 211.346Z" fill="black" fillOpacity="0.05" />
            <path d="M240.21 145.143C247.102 130.41 240.746 112.879 226.013 105.987C211.279 99.0948 193.748 105.451 186.856 120.185C179.964 134.918 186.32 152.449 201.054 159.341C215.787 166.233 233.318 159.877 240.21 145.143Z" fill="black" fillOpacity="0.05" />
            <path d="M308.482 125.039C318.749 112.424 316.846 93.8733 304.23 83.6061C291.614 73.3389 273.064 75.2428 262.797 87.8586C252.529 100.474 254.433 119.025 267.049 129.292C279.665 139.559 298.215 137.655 308.482 125.039Z" fill="black" fillOpacity="0.05" />
            <path d="M384.022 126.435C395.05 114.48 394.299 95.847 382.343 84.8183C370.387 73.7897 351.755 74.5413 340.726 86.4971C329.697 98.4529 330.449 117.085 342.405 128.114C354.361 139.143 372.993 138.391 384.022 126.435Z" fill="black" fillOpacity="0.05" />
            <path d="M56.6632 335.271C62.8878 320.244 55.7516 303.016 40.7241 296.791C25.6966 290.567 8.46835 297.703 2.24375 312.73C-3.98085 327.758 3.15533 344.986 18.1828 351.211C33.2104 357.435 50.4386 350.299 56.6632 335.271Z" fill="black" fillOpacity="0.05" />
            <path d="M39.4871 277.214C55.7527 277.214 68.9387 264.028 68.9387 247.763C68.9387 231.497 55.7527 218.311 39.4871 218.311C23.2214 218.311 10.0355 231.497 10.0355 247.763C10.0355 264.028 23.2214 277.214 39.4871 277.214Z" fill="black" fillOpacity="0.05" />
            <path d="M71.1298 206.095C87.3495 204.872 99.5072 190.733 98.2848 174.513C97.0624 158.293 82.9228 146.136 66.7031 147.358C50.4834 148.581 38.3257 162.72 39.5481 178.94C40.7706 195.16 54.9102 207.317 71.1298 206.095Z" fill="black" fillOpacity="0.05" />
            <path d="M115.726 145.178C131.992 145.178 145.178 131.992 145.178 115.726C145.178 99.4606 131.992 86.2747 115.726 86.2747C99.4607 86.2747 86.2747 99.4606 86.2747 115.726C86.2747 131.992 99.4607 145.178 115.726 145.178Z" fill="black" fillOpacity="0.05" />
            <path d="M206.083 71.3356C207.418 55.1249 195.36 40.9007 179.149 39.5651C162.938 38.2295 148.714 50.2882 147.379 66.4989C146.043 82.7097 158.102 96.9338 174.312 98.2694C190.523 99.605 204.747 87.5463 206.083 71.3356Z" fill="black" fillOpacity="0.05" />
            <path d="M265.455 63.0336C278.457 53.2605 281.075 34.7975 271.302 21.7952C261.529 8.79291 243.066 6.17508 230.064 15.9481C217.061 25.7212 214.444 44.1842 224.217 57.1865C233.99 70.1888 252.453 72.8066 265.455 63.0336Z" fill="black" fillOpacity="0.05" />
            <path d="M351.91 38.752C357.052 23.3206 348.711 6.64227 333.28 1.49994C317.848 -3.64238 301.17 4.69858 296.028 20.13C290.885 35.5614 299.226 52.2397 314.658 57.382C330.089 62.5244 346.768 54.1834 351.91 38.752Z" fill="black" fillOpacity="0.05" />
          </g>
          <defs>
            <clipPath id="clip0_57_19684">
              <rect width="648" height="648" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      label: "ADVANCED PROMPT ENGINEERING",
      title: "Abacus Studio",
      description: "Advanced prompt engineering platform with built-in compliance controls and response validation.",
      background: "rgba(0, 0, 0, 0.05)",
      textColor: "text-black",
      labelColor: "text-black",
      descriptionColor: "text-black/60",
      productImage: null,
      imageOpacity: "opacity-80",
      hasButton: false,
      svg: (
        <svg className="w-full h-full aspect-square absolute -right-[324px] -bottom-[324px] opacity-80" width="324" height="324" viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8" clipPath="url(#clip0_57_19693)">
            <path d="M327.241 0V648H320.76V0H327.241Z" fill="black" fillOpacity="0.05" />
            <path d="M410.988 11.8803L243.273 637.796L237.014 636.12L404.729 10.2034L410.988 11.8803Z" fill="black" fillOpacity="0.05" />
            <path d="M488.806 45.0298L164.806 606.211L159.195 602.97L483.195 41.7893L488.806 45.0298Z" fill="black" fillOpacity="0.05" />
            <path d="M555.392 97.191L97.1908 555.392L92.6082 550.809L550.809 92.6084L555.392 97.191Z" fill="black" fillOpacity="0.05" />
            <path d="M606.211 164.806L45.0298 488.806L41.7893 483.195L602.97 159.195L606.211 164.806Z" fill="black" fillOpacity="0.05" />
            <path d="M637.797 243.272L11.8811 410.987L10.2041 404.728L636.12 237.012L637.797 243.272Z" fill="black" fillOpacity="0.05" />
            <path d="M648 320.76V327.241H0V320.76H648Z" fill="black" fillOpacity="0.05" />
            <path d="M637.797 404.728L636.12 410.987L10.2041 243.272L11.8811 237.012L637.797 404.728Z" fill="black" fillOpacity="0.05" />
            <path d="M606.211 483.195L602.97 488.806L41.7893 164.806L45.0298 159.195L606.211 483.195Z" fill="black" fillOpacity="0.05" />
            <path d="M555.392 550.809L550.809 555.392L92.6082 97.191L97.1908 92.6084L555.392 550.809Z" fill="black" fillOpacity="0.05" />
            <path d="M488.806 602.97L483.195 606.211L159.195 45.0298L164.806 41.7893L488.806 602.97Z" fill="black" fillOpacity="0.05" />
            <path d="M410.988 636.12L404.729 637.796L237.014 11.8803L243.273 10.2034L410.988 636.12Z" fill="black" fillOpacity="0.05" />
          </g>
          <defs>
            <clipPath id="clip0_57_19693">
              <rect width="648" height="648" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-full max-w-[1440px] mx-auto">
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-black/20 hidden lg:block" />
        <div className="absolute right-[120px] top-0 bottom-0 w-px bg-black/20 hidden lg:block" />
        <div className="absolute left-1/2 top-[294px] bottom-0 w-px bg-black/20 hidden lg:block" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="py-8 sm:py-12 lg:py-[88px]">
          <div className="flex flex-col gap-4">
            <div className="px-1">
              <span className="text-black font-mono text-xs sm:text-sm uppercase tracking-[1.68px] font-normal">
                Products
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-[-0.04em] lg:tracking-[-1.92px]">
              <span className="text-black">Secure AI Infrastructure</span>
              <br />
              <span className="text-black/40">For Regulated Industries</span>
            </h2>
          </div>
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute left-1/2 -ml-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {products.slice(0, 2).map((product, index) => (
            <div
              key={index}
              className={`p-2 ${index === 0 ? "lg:border-r border-black/20" : ""}`}
              style={{ background: product.background }}
            >
              <div
                className="rounded-lg overflow-hidden relative"
                style={{
                  background: index === 1
                    ? 'linear-gradient(135deg, #645AFF 0%, #7B72FF 100%)'
                    : '#FFF'
                }}
              >
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-6 relative">
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="px-1">
                      <span className={`${product.labelColor} font-mono text-[10px] sm:text-xs uppercase tracking-[1.44px] font-normal`}>
                        {product.label}
                      </span>
                    </div>
                    <h3 className={`${product.textColor} text-2xl sm:text-3xl lg:text-[32px] font-medium leading-tight lg:leading-[40px] tracking-[-0.04em] lg:tracking-[-1.28px]`}>
                      {product.title}
                    </h3>
                  </div>
                  <p className={`${product.descriptionColor} text-sm leading-5 tracking-[-0.01em] lg:tracking-[-0.14px] relative z-10`}>
                    {product.description}
                  </p>

                  {product.hasButton && (
                    <button className="flex items-center gap-1.5 text-white text-sm relative z-10 hover:opacity-80 transition-opacity">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {product.productImage && (
                    <img
                      src={product.productImage}
                      alt={product.title}
                      className={`absolute -right-[324px] -bottom-[324px] w-[648px] h-[648px] aspect-square ${product.imageOpacity}`}
                    />
                  )}
                  {product.svg && product.svg}

                  {(product as any).hasCursor && (
                    <svg className="absolute left-[210px] bottom-[60px] w-6 h-6 z-20" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_cursor)">
                        <path d="M8.26999 16.2799C7.98999 15.9199 7.63999 15.1899 7.02999 14.2799C6.67999 13.7799 5.81999 12.8299 5.55999 12.3399C5.37257 12.0422 5.31818 11.6796 5.40999 11.3399C5.56695 10.6941 6.17956 10.2657 6.83999 10.3399C7.3508 10.4425 7.82022 10.6929 8.18999 11.0599C8.44817 11.3031 8.68566 11.5673 8.89999 11.8499C9.05999 12.0499 9.09999 12.1299 9.27999 12.3599C9.45999 12.5899 9.57999 12.8199 9.48999 12.4799C9.41999 11.9799 9.29999 11.1399 9.12999 10.3899C8.99999 9.81993 8.96999 9.72993 8.84999 9.29993C8.72999 8.86993 8.65999 8.50993 8.52999 8.01993C8.41116 7.5385 8.3177 7.05116 8.24999 6.55993C8.12395 5.93163 8.21565 5.27914 8.50999 4.70993C8.85939 4.3813 9.37192 4.29456 9.80999 4.48993C10.2506 4.81526 10.5791 5.26958 10.75 5.78993C11.0121 6.43032 11.187 7.10299 11.27 7.78993C11.43 8.78993 11.74 10.2499 11.75 10.5499C11.75 10.1799 11.68 9.39993 11.75 9.04993C11.8193 8.68505 12.073 8.38224 12.42 8.24993C12.7178 8.15855 13.0328 8.13801 13.34 8.18993C13.65 8.25474 13.9247 8.43307 14.11 8.68993C14.3417 9.27332 14.4703 9.89253 14.49 10.5199C14.5168 9.97051 14.6108 9.42646 14.77 8.89993C14.9371 8.66448 15.1811 8.49472 15.46 8.41993C15.7906 8.35948 16.1294 8.35948 16.46 8.41993C16.7311 8.51056 16.9682 8.68144 17.14 8.90993C17.3518 9.44027 17.48 10.0003 17.52 10.5699C17.52 10.7099 17.59 10.1799 17.81 9.82993C17.9243 9.49053 18.211 9.2379 18.5621 9.1672C18.9132 9.09651 19.2754 9.21849 19.5121 9.4872C19.7489 9.75591 19.8243 10.1305 19.71 10.4699C19.71 11.1199 19.71 11.0899 19.71 11.5299C19.71 11.9699 19.71 12.3599 19.71 12.7299C19.6736 13.3151 19.5933 13.8967 19.47 14.4699C19.296 14.977 19.0537 15.4581 18.75 15.8999C18.2644 16.4399 17.8632 17.0501 17.56 17.7099C17.4848 18.0377 17.4512 18.3737 17.46 18.7099C17.459 19.0206 17.4993 19.3299 17.58 19.6299C17.1711 19.6731 16.7589 19.6731 16.35 19.6299C15.96 19.5699 15.48 18.7899 15.35 18.5499C15.2857 18.4211 15.154 18.3396 15.01 18.3396C14.866 18.3396 14.7343 18.4211 14.67 18.5499C14.45 18.9299 13.96 19.6199 13.62 19.6599C12.95 19.7399 11.57 19.6599 10.48 19.6599C10.48 19.6599 10.66 18.6599 10.25 18.2999C9.83999 17.9399 9.41999 17.5199 9.10999 17.2399L8.26999 16.2799Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.26999 16.2799C7.98999 15.9199 7.63999 15.1899 7.02999 14.2799C6.67999 13.7799 5.81999 12.8299 5.55999 12.3399C5.37257 12.0422 5.31818 11.6796 5.40999 11.3399C5.56695 10.6941 6.17956 10.2657 6.83999 10.3399C7.3508 10.4425 7.82022 10.6929 8.18999 11.0599C8.44817 11.3031 8.68566 11.5673 8.89999 11.8499C9.05999 12.0499 9.09999 12.1299 9.27999 12.3599C9.45999 12.5899 9.57999 12.8199 9.48999 12.4799C9.41999 11.9799 9.29999 11.1399 9.12999 10.3899C8.99999 9.81993 8.96999 9.72993 8.84999 9.29993C8.72999 8.86993 8.65999 8.50993 8.52999 8.01993C8.41116 7.5385 8.3177 7.05116 8.24999 6.55993C8.12395 5.93163 8.21565 5.27914 8.50999 4.70993C8.85939 4.3813 9.37192 4.29456 9.80999 4.48993C10.2506 4.81526 10.5791 5.26958 10.75 5.78993C11.0121 6.43032 11.187 7.10299 11.27 7.78993C11.43 8.78993 11.74 10.2499 11.75 10.5499C11.75 10.1799 11.68 9.39993 11.75 9.04993C11.8193 8.68505 12.073 8.38224 12.42 8.24993C12.7178 8.15855 13.0328 8.13801 13.34 8.18993C13.65 8.25474 13.9247 8.43307 14.11 8.68993C14.3417 9.27332 14.4703 9.89253 14.49 10.5199C14.5168 9.97051 14.6108 9.42646 14.77 8.89993C14.9371 8.66448 15.1811 8.49472 15.46 8.41993C15.7906 8.35948 16.1294 8.35948 16.46 8.41993C16.7311 8.51056 16.9682 8.68144 17.14 8.90993C17.3518 9.44027 17.48 10.0003 17.52 10.5699C17.52 10.7099 17.59 10.1799 17.81 9.82993C17.9243 9.49053 18.211 9.2379 18.5621 9.1672C18.9132 9.09651 19.2754 9.21849 19.5121 9.4872C19.7489 9.75591 19.8243 10.1305 19.71 10.4699C19.71 11.1199 19.71 11.0899 19.71 11.5299C19.71 11.9699 19.71 12.3599 19.71 12.7299C19.6736 13.3151 19.5933 13.8967 19.47 14.4699C19.296 14.977 19.0537 15.4581 18.75 15.8999C18.2644 16.4399 17.8632 17.0501 17.56 17.7099C17.4848 18.0377 17.4512 18.3737 17.46 18.7099C17.459 19.0206 17.4993 19.3299 17.58 19.6299C17.1711 19.6731 16.7589 19.6731 16.35 19.6299C15.96 19.5699 15.48 18.7899 15.35 18.5499C15.2857 18.4211 15.154 18.3396 15.01 18.3396C14.866 18.3396 14.7343 18.4211 14.67 18.5499C14.45 18.9299 13.96 19.6199 13.62 19.6599C12.95 19.7399 11.57 19.6599 10.48 19.6599C10.48 19.6599 10.66 18.6599 10.25 18.2999C9.83999 17.9399 9.41999 17.5199 9.10999 17.2399L8.26999 16.2799Z" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.75 16.8259V13.3741C16.75 13.1675 16.5821 13 16.375 13C16.1679 13 16 13.1675 16 13.3741V16.8259C16 17.0325 16.1679 17.2 16.375 17.2C16.5821 17.2 16.75 17.0325 16.75 16.8259Z" fill="black" />
                        <path d="M14.77 16.8246L14.75 13.3711C14.7488 13.1649 14.5799 12.9988 14.3728 13C14.1657 13.0012 13.9988 13.1693 14 13.3754L14.02 16.8289C14.0212 17.035 14.1901 17.2012 14.3972 17.2C14.6043 17.1988 14.7712 17.0307 14.77 16.8246Z" fill="black" />
                        <path d="M12 13.379L12.02 16.8254C12.0212 17.0335 12.1901 17.2012 12.3972 17.2C12.6043 17.1988 12.7712 17.0291 12.77 16.821L12.75 13.3746C12.7488 13.1665 12.5799 12.9988 12.3728 13C12.1657 13.0012 11.9988 13.1709 12 13.379Z" fill="black" />
                      </g>
                      <defs>
                        <filter id="filter0_d_cursor" x="4.19133" y="4.01172" width="16.7461" height="17.8588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="0.4" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cursor" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cursor" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute left-1/2 -ml-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {products.slice(2, 4).map((product, index) => (
            <div
              key={index}
              className={`p-2 ${index === 0 ? "lg:border-r border-black/20" : ""}`}
              style={{ background: product.background }}
            >
              <div className="bg-white rounded-lg overflow-hidden relative">
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-6 relative">
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="px-1">
                      <span className={`${product.labelColor} font-mono text-[10px] sm:text-xs uppercase tracking-[1.44px] font-normal`}>
                        {product.label}
                      </span>
                    </div>
                    <h3 className={`${product.textColor} text-2xl sm:text-3xl lg:text-[32px] font-medium leading-tight lg:leading-[40px] tracking-[-0.04em] lg:tracking-[-1.28px]`}>
                      {product.title}
                    </h3>
                  </div>
                  <p className={`${product.descriptionColor} text-sm leading-5 tracking-[-0.01em] lg:tracking-[-0.14px] relative z-10`}>
                    {product.description}
                  </p>

                  {product.productImage && (
                    <img
                      src={product.productImage}
                      alt={product.title}
                      className={`absolute -right-[324px] -bottom-[324px] w-[648px] h-[648px] aspect-square ${product.imageOpacity}`}
                    />
                  )}
                  {product.svg && product.svg}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute left-1/2 -ml-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
          <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

// Part2: OnPremisesSection Component


// Part4: Enterprise Data Sources Section  
function EnterpriseDataSourcesSection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-black/20 hidden md:block" />
        <div className="absolute right-0 md:right-[121px] top-0 bottom-0 w-px bg-black/20 hidden md:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-6 md:px-[120px] py-12 md:py-[88px]">
          <div className="flex flex-col max-w-[711px]">
            <div className="flex flex-col gap-4 p-8">
              <div className="flex items-center">
                <span className="font-mono text-[14px] leading-[14px] tracking-[1.68px] uppercase text-black">
                  On-Premises LLM
                </span>
              </div>

              <h1 className="text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[56px] tracking-[-0.02em] md:tracking-[-1.92px] text-black">
                Your Data Never Leaves Your Environment
              </h1>

              <p className="text-[16px] leading-[24px] tracking-[-0.16px] text-black/60">
                Deploy powerful AI with full control: Our on-premises solution keeps your sensitive information secure within your infrastructure.
              </p>
            </div>

            <div className="flex flex-col p-12 gap-0">
              <div className="flex items-center gap-6 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#645AFF]/10 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#645AFF]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                    Complete Security
                  </h3>
                  <p className="text-[14px] leading-[20px] tracking-[-0.14px] text-black/60">
                    Bank-grade encryption and secure infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#645AFF]/10 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#645AFF]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                    Accurate Responses
                  </h3>
                  <p className="text-[14px] leading-[20px] tracking-[-0.14px] text-black/60">
                    Verified responses with regulatory compliance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#645AFF]/10 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#645AFF]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                    Fixed Cost Model
                  </h3>
                  <p className="text-[14px] leading-[20px] tracking-[-0.14px] text-black/60">
                    Predictable pricing with unlimited queries
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end min-h-[300px] lg:min-h-[500px]">
            <img
              src="/graph.png"
              alt="Data flow visualization"
              className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Part6: Knowledge Management Section
function KnowledgeManagementSection() {
  const [activeTab, setActiveTab] = useState<string>("user-query");

  const tabs = [
    { id: "user-query", label: "User Query" },
    { id: "secure-indexing", label: "Secure Indexing" },
    { id: "llm-processing", label: "LLM Processing" },
    { id: "verified-response", label: "Verified Response" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-black/20 lg:left-[120px]" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-black/20 lg:right-[121px]" />

        <div className="px-4 sm:px-8 lg:px-[120px]">
          <section className="py-8 lg:py-[88px]">
            <div className="flex flex-col gap-4 p-8 lg:p-8">
              <div className="flex items-center">
                <span className="font-mono text-sm font-normal leading-[14px] tracking-[1.68px] uppercase text-black">
                  Knowledge Management
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.92px] text-black">
                Powering Secure Knowledge Access
              </h1>

              <p className="text-sm sm:text-base leading-6 tracking-[-0.16px] text-black/60 max-w-full">
                See how our secure infrastructure powers Abbi Assist, delivering
                verified responses while maintaining complete data security and
                compliance.
              </p>
            </div>
          </section>

          <div className="h-px bg-black/20" />

          <div className="border-b border-black/20">
            <div className="flex items-center gap-2 px-4 sm:px-6 py-4 overflow-x-auto lg:justify-end">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center justify-center gap-1.5 px-4 py-2 
                    text-xs font-normal leading-4 tracking-[-0.12px] 
                    rounded-full border transition-all whitespace-nowrap
                    ${activeTab === tab.id && index === 0
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-black/60 hover:border-black"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <section className="flex flex-col lg:flex-row items-stretch min-h-[480px]">
            <div className="w-full lg:w-1/2 p-2 bg-[#645AFF]/20 backdrop-blur-[20px]">
              <div className="w-full h-full min-h-[400px] lg:min-h-[464px] rounded-lg bg-[#645AFF] relative overflow-hidden flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd275a33c5130b50273f70383fad70148ac06976?width=1120"
                  alt="Abbi Assist Interface"
                  className="relative z-10 w-[90%] max-w-[560px] h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 p-8 lg:p-16">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>

                <h2 className="text-2xl sm:text-[32px] font-medium leading-tight sm:leading-[40px] tracking-tight sm:tracking-[-1.28px] text-black">
                  User Query Processing
                </h2>
              </div>

              <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                When a user submits a query through Abbi Assist, the system
                securely processes it while maintaining complete data privacy.
              </p>

              <div className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                <p className="font-medium mb-2">Key Process Steps:</p>
                <ul className="list-none space-y-1">
                  <li>• User submits question through secure interface</li>
                  <li>• Query is encrypted end-to-end</li>
                  <li>• Request is authenticated and validated</li>
                  <li>• Query is routed to secure processing pipeline</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-black/20" />

          <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/20">
            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-[#645AFF]">
                <Lock className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Complete Security
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  End-to-end encryption and security controls ensure your data
                  remains protected throughout the entire knowledge management
                  process.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-[#645AFF]">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Verified Responses
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  Every response is automatically validated against trusted
                  sources, eliminating AI hallucinations and ensuring accuracy.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-[#645AFF]">
                <Database className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Data Sovereignty
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  Your data never leaves your secure environment, ensuring
                  complete control and regulatory compliance at all times.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-black/20" />
        </div>
      </div>
    </div>
  );
}

// Part8: Multi-Platform Section
function MultiPlatformSection() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20 hidden lg:block" style={{ left: '120px' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-black/20 hidden lg:block" style={{ right: '121px' }}></div>

          <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 md:mb-12">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="inline-flex items-center gap-2.5 px-1">
                <span className="text-black font-mono text-xs md:text-sm tracking-[1.68px] uppercase">
                  Multi-Platform
                </span>
              </div>

              <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.04em]">
                Abbi Assist™ Everywhere You Work
              </h1>

              <p className="text-black/60 text-sm md:text-base leading-relaxed tracking-[-0.01em] max-w-full">
                Deploy Abbi Assist wherever your team works - from desktop applications to mobile devices, Microsoft Teams and SharePoint - with consistent security and compliance.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/20 my-8 md:my-12"></div>

          <div className="max-w-[1200px] mx-auto px-4 md:px-8 my-12 md:my-16">
            <div className="relative w-full rounded-lg overflow-hidden bg-black/10 backdrop-blur-sm p-2 md:p-4">
              <div className="relative w-full bg-[#EBEBEB] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb706e65dd52a4d778739dcbc100f15a9%2F115d4bcc28f248e889ba0ab791794184?format=webp&width=1200"
                  alt="Abbi Assist in Microsoft Teams"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/20 my-8 md:my-12"></div>

          <div className="flex items-center justify-center md:justify-end gap-4 px-4 md:px-8 max-w-[1200px] mx-auto my-6 md:my-8">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-4 h-4 rounded-full border border-black/60"></div>
            <div className="w-4 h-4 rounded-full border border-black/60"></div>
            <div className="w-4 h-4 rounded-full border border-black/60"></div>
          </div>

          <div className="w-full h-px bg-black/20 my-8 md:my-12"></div>

          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-black/20">
              <div className="flex flex-col gap-6 p-6 md:p-8 border-r border-b md:border-b-0 border-black/20">
                <div className="inline-flex p-2 items-center justify-center bg-white rounded w-fit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.75 21.1875H19.3125V2.8125H20.25C20.3992 2.8125 20.5423 2.75324 20.6477 2.64775C20.7532 2.54226 20.8125 2.39918 20.8125 2.25C20.8125 2.10082 20.7532 1.95774 20.6477 1.85225C20.5423 1.74676 20.3992 1.6875 20.25 1.6875H3.75C3.60082 1.6875 3.45774 1.74676 3.35225 1.85225C3.24676 1.95774 3.1875 2.10082 3.1875 2.25C3.1875 2.39918 3.24676 2.54226 3.35225 2.64775C3.45774 2.75324 3.60082 2.8125 3.75 2.8125H4.6875V21.1875H2.25C2.10082 21.1875 1.95774 21.2468 1.85225 21.3523C1.74676 21.4577 1.6875 21.6008 1.6875 21.75C1.6875 21.8992 1.74676 22.0423 1.85225 22.1477C1.95774 22.2532 2.10082 22.3125 2.25 22.3125H21.75C21.8992 22.3125 22.0423 22.2532 22.1477 22.1477C22.2532 22.0423 22.3125 21.8992 22.3125 21.75C22.3125 21.6008 22.2532 21.4577 22.1477 21.3523C22.0423 21.2468 21.8992 21.1875 21.75 21.1875ZM5.8125 2.8125H18.1875V21.1875H14.8125V17.25C14.8125 17.1008 14.7532 16.9577 14.6477 16.8523C14.5423 16.7468 14.3992 16.6875 14.25 16.6875H9.75C9.60082 16.6875 9.45774 16.7468 9.35225 16.8523C9.24676 16.9577 9.1875 17.1008 9.1875 17.25V21.1875H5.8125V2.8125ZM13.6875 21.1875H10.3125V17.8125H13.6875V21.1875Z" fill="black" />
                  </svg>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-black text-lg md:text-xl font-medium leading-tight tracking-[-0.02em]">
                    Enterprise Applications
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed tracking-[-0.01em]">
                    Seamlessly integrate with your existing enterprise software and internal tools.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 md:p-8 border-r border-b md:border-b-0 border-black/20">
                <div className="inline-flex p-2 items-center justify-center bg-white rounded w-fit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.6875 10.3126H6.75C6.60082 10.3126 6.45774 10.2533 6.35225 10.1478C6.24676 10.0423 6.1875 9.89928 6.1875 9.75009C6.1875 9.60091 6.24676 9.45783 6.35225 9.35234C6.45774 9.24686 6.60082 9.18759 6.75 9.18759H9.75C9.89918 9.18759 10.0423 9.24686 10.1477 9.35234C10.2532 9.45783 10.3125 9.60091 10.3125 9.75009C10.3125 9.89928 10.2532 10.0423 10.1477 10.1478C10.0423 10.2533 9.89918 10.3126 9.75 10.3126H8.8125V14.2501C8.8125 14.3993 8.75324 14.5423 8.64775 14.6478C8.54226 14.7533 8.39918 14.8126 8.25 14.8126C8.10082 14.8126 7.95774 14.7533 7.85225 14.6478C7.74676 14.5423 7.6875 14.3993 7.6875 14.2501V10.3126ZM21.5625 8.69447V14.2501C21.5626 15.163 21.2128 16.0412 20.5849 16.7039C19.9571 17.3666 19.0991 17.7634 18.1875 17.8126H3.75C3.4019 17.8126 3.06806 17.6743 2.82192 17.4282C2.57578 17.182 2.4375 16.8482 2.4375 16.5001V7.50009C2.4375 7.152 2.57578 6.81816 2.82192 6.57201C3.06806 6.32587 3.4019 6.18759 3.75 6.18759H20.25C20.5981 6.18759 20.9319 6.32587 21.1781 6.57201C21.4242 6.81816 21.5625 7.152 21.5625 7.50009V8.69447Z" fill="black" />
                  </svg>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-black text-lg md:text-xl font-medium leading-tight tracking-[-0.02em]">
                    Microsoft 365
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed tracking-[-0.01em]">
                    Native integration with Teams, SharePoint, and other Microsoft 365 applications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 md:p-8 border-black/20">
                <div className="inline-flex p-2 items-center justify-center bg-white rounded w-fit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 1.6875H7.5C6.95299 1.6875 6.42839 1.9048 6.04159 2.29159C5.6548 2.67839 5.4375 3.20299 5.4375 3.75V20.25C5.4375 20.797 5.6548 21.3216 6.04159 21.7084C6.42839 22.0952 6.95299 22.3125 7.5 22.3125H16.5C17.047 22.3125 17.5716 22.0952 17.9584 21.7084C18.3452 21.3216 18.5625 20.797 18.5625 20.25V3.75C18.5625 3.20299 18.3452 2.67839 17.9584 2.29159C17.5716 1.9048 17.047 1.6875 16.5 1.6875ZM17.4375 20.25C17.4375 20.4986 17.3387 20.7371 17.1629 20.9129C16.9871 21.0887 16.7486 21.1875 16.5 21.1875H7.5C7.25136 21.1875 7.0129 21.0887 6.83709 20.9129C6.66127 20.7371 6.5625 20.4986 6.5625 20.25V3.75C6.5625 3.50136 6.66127 3.2629 6.83709 3.08709C7.0129 2.91127 7.25136 2.8125 7.5 2.8125H16.5C16.7486 2.8125 16.9871 2.91127 17.1629 3.08709C17.3387 3.2629 17.4375 3.50136 17.4375 3.75V20.25ZM15.5625 5.25C15.5625 5.39918 15.5032 5.54226 15.3977 5.64775C15.2923 5.75324 15.1492 5.8125 15 5.8125H9C8.85082 5.8125 8.70774 5.75324 8.60225 5.64775C8.49676 5.54226 8.4375 5.39918 8.4375 5.25C8.4375 5.10082 8.49676 4.95774 8.60225 4.85225C8.70774 4.74676 8.85082 4.6875 9 4.6875H15C15.1492 4.6875 15.2923 4.74676 15.3977 4.85225C15.5032 4.95774 15.5625 5.10082 15.5625 5.25Z" fill="black" />
                  </svg>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-black text-lg md:text-xl font-medium leading-tight tracking-[-0.02em]">
                    Mobile Access
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed tracking-[-0.01em]">
                    Secure access from iOS and Android devices with native mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/20 mt-8 md:mt-12"></div>
        </div>
      </section>
    </div>
  );
}

// Part9: Truth Assurance Section
function TruthAssuranceSection() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <section className="relative w-full max-w-[1440px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20 hidden lg:block" style={{ left: 'calc((100% - 1200px) / 2)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-black/20 hidden lg:block" style={{ right: 'calc((100% - 1200px) / 2)' }} />

        <div className="relative px-4 lg:px-[120px] py-8 lg:py-[88px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-start mb-4">
              <div className="px-1">
                <span className="font-mono text-sm uppercase tracking-[1.68px] text-black">
                  Truth Assurance
                </span>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex items-baseline gap-1 flex-wrap">
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-[-1.92px] text-[#645AFF]">
                  Abacus Intelligence
                </h1>
                <svg className="w-2 h-2 flex-shrink-0" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#645AFF" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-[-1.92px] text-black/40">
                AI For The Careful
              </h2>
            </div>

            <p className="text-base leading-6 tracking-[-0.16px] text-black/60 max-w-full">
              Our Chain of Validation™ technology ensures every AI response is verified through multiple layers of source checking, compliance verification, and accuracy validation, eliminating hallucinations
            </p>
          </div>
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ left: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ right: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
        </div>

        <div className="relative px-4 lg:px-[120px] py-8 lg:py-0">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[418px]">
              <div className="relative lg:w-[480px] p-8 lg:p-16 flex flex-col justify-end gap-6 bg-white overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-[32px] font-medium leading-tight lg:leading-[40px] tracking-[-1.28px] text-black mb-4">
                    See It In Action
                  </h3>
                  <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                    When a user submits a query through Abbi Assist, the system securely processes it while maintaining complete data privacy.
                  </p>
                </div>
              </div>

              <div className="flex-1 p-2 bg-black/5 backdrop-blur-sm">
                <div className="w-full h-full rounded-lg bg-white p-6">
                  <div className="flex items-start gap-2.5 mb-6">
                    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black/3 flex-shrink-0">
                      <div className="flex items-center justify-center w-[30px] h-[30px]">
                        <svg className="w-[25px] h-[22px]" viewBox="0 0 26 22" fill="none">
                          <path d="M6.26569 16.3331L4.8057 21.5951H0L6.26569 1.09473H12.3489L18.7058 21.5951H13.7176L12.1359 16.3331H6.26569ZM11.4668 12.8657L10.1893 8.51625C9.82433 7.29963 9.45933 5.77875 9.15517 4.56212H9.09433C8.79018 5.77875 8.48602 7.33002 8.15147 8.51625L6.93485 12.8657H11.4668Z" fill="black" />
                          <path d="M19.5828 19.1314C19.5828 17.489 20.7081 16.3027 22.3202 16.3027C23.9322 16.3027 25.0272 17.4585 25.0272 19.1314C25.0272 20.7434 23.9322 21.9296 22.2898 21.9296C20.7081 21.9296 19.5828 20.7434 19.5828 19.1314Z" fill="black" fillOpacity="0.2" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 max-w-full p-5 rounded-2xl bg-black/5">
                      <p className="text-lg leading-5">
                        <span className="text-black">A late fee of </span>
                        <span className="text-[#645AFF] font-semibold">$25</span>
                        <span className="text-black"> for cardholders who miss their payment deadline.</span>
                      </p>
                    </div>
                  </div>

                  <div className="px-4 lg:px-8 py-5 space-y-2">
                    <div className="flex items-center gap-1.5 py-1.5 pl-6">
                      <span className="flex-1 text-base font-medium leading-5 tracking-[-0.32px] text-black">
                        Highlighted information detected - starting validation
                      </span>
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 py-1.5 pl-6">
                        <span className="flex-1 text-base font-medium leading-5 tracking-[-0.32px] text-black">
                          Validating information through multiple sources
                        </span>
                        <div className="w-5 h-5 rounded-full bg-[#645AFF]/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 border-2 border-[#645AFF] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 py-1.5 pl-6">
                      <span className="flex-1 text-base font-medium leading-5 tracking-[-0.32px] text-black">
                        Validation complete - Information verified
                      </span>
                      <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-black/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ left: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ right: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
        </div>

        <div className="relative px-4 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 flex flex-col gap-6 border-r-0 md:border-r border-black/20">
              <div className="inline-flex p-2 items-center gap-2.5 rounded bg-black/5 w-fit">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Source Verification
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  Every response is cross-referenced against trusted, verified sources to ensure accuracy.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-6 border-r-0 md:border-r border-black/20">
              <div className="inline-flex p-2 items-center gap-2.5 rounded bg-black/5 w-fit">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Compliance Checking
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  Real-time validation against regulatory requirements and company policies.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-6">
              <div className="inline-flex p-2 items-center gap-2.5 rounded bg-black/5 w-fit">
                <Database className="w-6 h-6 text-black" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-6 tracking-[-0.4px] text-black">
                  Multi-Layer Verification
                </h3>
                <p className="text-sm leading-5 tracking-[-0.14px] text-black/60">
                  Multiple validation layers prevent hallucinations and ensure response reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-px bg-black/20">
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ left: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
          <div className="absolute w-2 h-2 rounded-full bg-white border border-black/20 hidden lg:block" style={{ right: 'calc((100% - 1200px) / 2 - 4px)', top: '-4px' }} />
        </div>
      </section>
    </div>
  );
}
