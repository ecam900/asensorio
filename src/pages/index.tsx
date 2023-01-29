import type { NextPage } from 'next';
import Head from 'next/head';

import TaskCard from '@/components/TaskCard/TaskCard';
import floors from '@/mocks/floors';

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
          <div className="flex min-h-screen flex-col items-center justify-center space-y-1">
            {floors.map((f, i) => {
              return <TaskCard key={i} msg={`Piso ${f.name}`} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
