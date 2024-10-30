const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBFBFB] to-[#C98EBA] relative pt-32">
      <div className="relative isolate px-6 lg:px-8 z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Encontre os melhores fornecedores de festas em Maceió
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Cadastramos e avaliamos os melhores fornecedores de festas em
              Maceió para você encontrar o que precisa.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden mx-5 z-0 min-h-[50vh] opacity-15 md:min-h-[60vh] md:max-w-screen-md md:mx-auto lg:min-h-[70vh] lg:max-w-screen-2xl lg:px-5 lg:mx-auto">
        <img
          src="/assets/buffet.jpg"
          alt="Buffet"
          className="absolute z-50 rounded-t-lg left-0 bottom-0 object-cover w-5/12 md:w-4/12 md:left-5 lg:w-3/12 lg:rounded-t-3xl"
        />
        <img
          src="/assets/birthday.jpg"
          alt="Birthday"
          className="absolute left-1/2 transform -translate-x-1/2 z-0 rounded-t-lg bottom-0 object-cover h-full sm:w-10/12 lg:w-8/12 lg:h-5/6 lg:rounded-t-3xl"
        />
        <img
          src="/assets/cake.jpg"
          alt="Cake"
          className="absolute right-0 z-50 rounded-t-lg bottom-0 object-cover w-5/12 md:w-4/12 md:right-5 lg:rounded-t-3xl"
        />
      </div>
    </div>
  );
};

export default Header;
