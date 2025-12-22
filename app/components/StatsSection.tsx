export default function StatsSection() {
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

