type UserID = string;

type Task = {
  msg: string;
  timeCreated: Date;
  createdByUID: UserID;
  createdByName: string;
  completedByUID?: UserID;
  completedByName?: string;
  isComplete: boolean;
};

function NewTask(t: Partial<Task>): Task {
  return {
    msg: t.msg || 'default-message',
    timeCreated: new Date(),
    createdByUID: t.createdByName || 'tester-name',
    createdByName: t.createdByName || 'tester-uid',
    isComplete: false,
  };
}

const TaskList: Task[] = [
  NewTask({ msg: 'Piso 20' }),
  NewTask({ msg: 'Piso 10' }),
  NewTask({ msg: 'Piso 3' }),
  NewTask({ msg: 'Piso 3' }),
];

export default TaskList;
