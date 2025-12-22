import { ShieldCheck, MessageCircle, TrendingUp, Clock, Database, File } from "lucide-react";

export default function OnPremisesSection() {
  const capabilities = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#645AFF]" />,
      title: "Complete Security",
      description: "Bank-grade encryption and secure infrastructure"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#645AFF]" />,
      title: "Accurate Responses",
      description: "Verified responses with regulatory compliance"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#645AFF]" />,
      title: "Fixed Cost Model",
      description: "Predictable pricing with unlimited queries"
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-full max-w-[1440px] mx-auto">
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-black/20 hidden lg:block" />
        <div className="absolute right-[120px] top-0 bottom-0 w-px bg-black/20 hidden lg:block" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-[88px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 px-0 sm:px-4 lg:px-8 mb-8 lg:mb-12">
              <div className="px-1">
                <span className="text-black font-mono text-xs sm:text-sm uppercase tracking-[1.68px] font-normal">
                  On-Premises LLM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] tracking-[-0.04em] lg:tracking-[-1.92px] text-black">
                Your Data Never Leaves Your Environment
              </h2>
              <p className="text-base text-black/60 leading-6 tracking-[-0.01em] lg:tracking-[-0.16px]">
                Deploy powerful AI with full control: Our on-premises solution keeps your sensitive information secure within your infrastructure.
              </p>
            </div>

            <div className="flex flex-col px-0 sm:px-4 lg:px-12 gap-0">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-6 p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#645AFF]/10 flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg sm:text-xl font-medium leading-6 tracking-[-0.02em] lg:tracking-[-0.4px] text-black">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-5 tracking-[-0.01em] lg:tracking-[-0.14px]">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[654px] hidden lg:block">
            <div className="absolute right-0 top-0 w-[923px] h-[923px] rounded-full border border-black/20 overflow-hidden"
              style={{
                background: 'conic-gradient(from 90deg, rgba(0, 0, 0, 0.04) 0deg, rgba(0, 0, 0, 0.2) 359.832deg, rgba(0, 0, 0, 0.04) 360deg)'
              }}
            />
            <div className="absolute right-[27px] top-[120px] w-[683px] h-[683px] rounded-full border border-dashed border-black/20 overflow-hidden -rotate-90">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1b0cf5ba7c962c667b3709af0f057a615c7edeec?width=1366"
                alt="Decorative pattern"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-[268px] top-[241px] w-[443px] h-[443px] rounded-full border border-black/20 overflow-hidden"
              style={{
                background: 'conic-gradient(from 90deg, rgba(0, 0, 0, 0.04) 0deg, rgba(0, 0, 0, 0.2) 359.832deg, rgba(0, 0, 0, 0.04) 360deg)'
              }}
            />
            <div className="absolute right-[387px] top-[359px] w-[203px] h-[203px] rounded-full border border-black/20 overflow-hidden -rotate-90">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5194288fdb4d3cad5e4b9f2c65bda0422a4876cd?width=406"
                alt="Decorative pattern"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-[287px] top-[725px] w-16 h-16 rounded-full border border-black/10 backdrop-blur-sm flex items-center justify-center p-1">
              <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
                <Clock className="w-6 h-6 text-black/40" />
              </div>
            </div>
            <div className="absolute right-[341px] top-[243px] w-16 h-16 rounded-full border border-black/10 backdrop-blur-sm flex items-center justify-center p-1">
              <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
                <Database className="w-6 h-6 text-black/40" />
              </div>
            </div>
            <div className="absolute right-0 top-[493px] w-16 h-16 rounded-full border border-black/10 backdrop-blur-sm flex items-center justify-center p-1">
              <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
                <File className="w-6 h-6 text-black/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

