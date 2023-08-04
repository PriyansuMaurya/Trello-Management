import { HiPlus } from 'react-icons/hi';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';
import { Button, Card, Tooltip } from 'antd';


const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: 'gray',
  'In Progress': 'blue',
  Completed: 'green',
};

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  const addButton = (<Tooltip title="Create a New Task">
    <Button style={{
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 1,
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // opacity: 0,
      // backgroundColor: "transparent",
    }} icon={<HiPlus size={20} />} onClick={addEmptyTask} />
  </Tooltip>)

  return (
    <Card
      title={column}
      extra={
        addButton
      }
      bordered={false}
      style={{
        marginTop: "2px",
        paddingLeft: "4px",
        paddingRight: "4px",
        width: "250px",
        maxHeight: "40rem",
        gap: "4px",
        backgroundColor: '#F5F5F5',
        borderRadius: "lg",
        boxShadow: "md",
        overflow: "auto",
        opacity: isOver ? "0.85" : "1",
      }}
      ref={dropRef}
    >
      {ColumnTasks}
    </Card>

  );
}

export default Column;
