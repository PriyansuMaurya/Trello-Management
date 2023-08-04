import { memo, useState } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { Button, Card, Tooltip } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Input } from 'antd';

const { TextArea } = Input;

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover,
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  const [hovered, setHovered] = useState(false);

  return (
    <Card
      ref={ref}
      style={{
        position: 'relative',
        width: '200px',
        paddingLeft: '3px',
        paddingRight: '7px',
        paddingTop: '3px',
        paddingBottom: '1px',
        marginTop: '10px',
        boxShadow: 'xl',
        cursor: 'grab',
        fontWeight: 'bold',
        userSelect: 'none',
        backgroundColor: task.color,
        opacity: isDragging ? '0.5' : '1',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tooltip title="Remove Item">
        <Button
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
            border: 'none',
            // opacity: 0,
            backgroundColor: 'transparent',
            color: hovered ? 'black' : 'transparent',
          }}
          icon={<RiDeleteBin6Line size={20} />}
          onClick={handleDeleteClick}
        />
      </Tooltip>

      <TextArea
        style={{
          fontWeight: "semibold",
          cursor: "inherit",
          padding: '0px',
          margin: '0px',
          backgroundColor: 'transparent',

        }}
        bordered={false}
        value={task.title}
        placeholder="Enter your software-related task here..."
        autoSize={{ minRows: 3, maxRows: 5 }}
        onChange={handleTitleChange}
      />
    </Card>

  );
}
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});


