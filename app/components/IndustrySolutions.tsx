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

export default function IndustrySolutions() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1440px] relative">
          <div className="absolute top-0 bottom-0 w-px bg-black/20 hidden xl:block" style={{ left: '100px' }} />
          <div className="absolute top-0 bottom-0 w-px bg-black/20 hidden xl:block" style={{ right: '101px' }} />
        </div>
      </div>

      <SolutionGridDots />

      <div className="container mx-auto px-8 lg:px-32 xl:px-0 relative">
        <div className="pt-16 pb-8 xl:pt-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="flex flex-col gap-4 px-8">
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

        <div className="py-4 px-8 xl:px-0 flex items-center gap-2 flex-wrap" style={{ marginLeft: 'clamp(0px, 2vw, 25px)' }}>
          <div className="relative h-8">
            <button className="flex h-8 items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-white relative z-10">
              Banking
            </button>
            <button className="flex h-8 items-center gap-1.5 rounded-full border border-black/60 px-4 py-2 text-xs font-normal leading-4 tracking-[-0.01em] text-black absolute left-[53px] top-0">
              Banking
            </button>
          </div>
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
          <div className="flex flex-col justify-center gap-6 px-8 xl:px-16 py-16">
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

