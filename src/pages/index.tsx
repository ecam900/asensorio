import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Asensorio</title>
      </Head>
      <div className="relative flex h-screen flex-col items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-800">
        {/* Pixel Overlay */}
        {/* Gradient Overlay */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-orange-400 to-orange-800" />

        {/* Main Wrapper Container */}
        <main className={'container relative max-w-7xl px-4'}>
          {/* Featured Section */}
          <div className="flex h-screen flex-col-reverse items-center pb-[10vh]">
            {/* Featured Text Container */}
            <div className="container relative z-20 space-y-4">
              {/* Title */}
              <h1 className="font-sans text-5xl font-bold leading-none text-white">
                Sereno Software
              </h1>
              {/* Subtitle */}
              <h1 className="pb-2 font-sans text-4xl leading-none text-slate-300">
                From Design To CI
              </h1>
            </div>
          </div>

          {/* Featured Section */}
          <div className="flex h-screen flex-col-reverse items-center pb-[10vh]">
            {/* Featured Text Container */}
            <div className="container relative z-20 space-y-4">
              {/* Title */}
              <h1 className="font-sans text-5xl font-bold leading-none text-white">
                Liftboy
              </h1>
              {/* Subtitle */}
              <h1 className="pb-2 font-sans text-4xl leading-none text-slate-300">
                Sin asensor otra vez
              </h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
