import type { NextPage } from 'next';
import Head from 'next/head';

import NewTaskModal from '@/components/NewTaskModal/NewTaskModal';
import TaskCard from '@/components/TaskCard/TaskCard';

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
          <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
            <h2 className="container max-w-sm text-left font-sans text-5xl font-bold text-zinc-100">
              Pedidos:
            </h2>
            <div className="container h-[66vh] max-w-sm space-y-2 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-blue-800">
              <TaskCard msg={`Piso 1`} />
              <TaskCard msg={`Piso 4`} />
              <TaskCard msg={`Piso 19`} />
            </div>
            <NewTaskModal />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
