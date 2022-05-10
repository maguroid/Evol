import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { useEarnDialog } from "@/hooks/useEarnDialog";

const TodoList = () => {
  const { EarnDialog, showUp } = useEarnDialog();
  const todoList = [
    {
      title: "Get things done",
      date: "2022-01-01",
      done: false,
    },
    {
      title: "Sing a song",
      date: "2022-02-01",
      done: true,
    },
    {
      title: "Workout",
      date: "2022-03-01",
      done: false,
    },
  ];

  return (
    <div>
      <EarnDialog />
      <ul className="divide-y divide-solid">
        {todoList.map((todo, index) => (
          <li key={index} className="pb-5 divide-x-0 grid grid-cols-2 gap-96">
            <div className="flex items-center">
              <button className="hover:opacity-70" onClick={showUp}>
                {todo.done ? (
                  <RiCheckboxCircleLine
                    className="mr-3"
                    size="30"
                    color="grey"
                  />
                ) : (
                  <RiCheckboxBlankCircleLine
                    className="mr-3"
                    size="30"
                    color="grey"
                  />
                )}
              </button>
              <span className="font-bold">{todo.title}</span>
            </div>
            <span className="font-bold text-sm pt-3">{todo.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
