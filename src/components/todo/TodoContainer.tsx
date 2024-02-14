import { useAppDispatch } from "@/redux/features/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppDispatch((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient  w-full h-full rounded-xl p-5 space-y-3">
        {/* <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard> */}
        {todos?.map((item) => (
          <TodoCard {...item}></TodoCard>
        ))}

        {/* <div className="bg-white p-3 font-bold text-2xl  flex justify-center items-center rounded-lg">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
