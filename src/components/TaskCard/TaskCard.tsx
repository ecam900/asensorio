import type { FC } from 'react';

type TaskCardProps = {
  msg: string;
};
const TaskCard: FC<TaskCardProps> = ({ msg }) => {
  return (
    <div className="container flex w-full max-w-sm justify-between rounded bg-white/80 px-2 py-3 shadow-lg">
      <h2 className="font-serif font-bold">{msg}</h2>
      <div className="text-right">
        <p className="font-serif text-sm font-bold">
          {new Date().toLocaleString()}
        </p>
        <p className="font-serif text-xs font-bold text-gray-700">
          r: Oficial Diaz
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
