import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useState } from 'react';

import floors from '@/mocks/floors';

type NewTaskModalProps = {};

const NewTaskModal: FC<NewTaskModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className="my-2 rounded bg-sky-500 py-1 px-2 text-3xl text-white shadow-lg"
        onClick={handleOpen}
      >
        Nuevo Pedido
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center space-y-8 pt-4 backdrop-blur-lg"
          >
            <div className="grid h-[75vh] max-w-4xl grid-cols-2 gap-2 overflow-y-auto px-2">
              {floors.map((f, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-44 w-44 flex-col items-center justify-center rounded bg-white/80 shadow-md backdrop-blur-3xl"
                  >
                    <p className="text-4xl">{f.name}</p>
                  </div>
                );
              })}
            </div>

            <button
              className="my-2 rounded bg-orange-800 py-1 px-2 text-3xl text-white shadow-lg"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewTaskModal;
