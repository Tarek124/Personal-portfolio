const Error = () => {
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32 px-5 md:px-10">
        <div className="mx-auto flex-col flex w-full max-w-3xl items-center">
          <div className="text-center">
            <h1 className="font-bold mb-4 text-4xl md:text-6xl">404 Error</h1>
            <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
              <p className="text-[#636262] max-[479px]:text-sm">
                Commodo, consequat turpis placerat ultrices sapien, tortor
                tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
              </p>
            </div>
            <a
              href="/"
              className="inline-block items-center bg-black px-8 py-4 text-center font-semibold text-white"
            >
              Back Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
