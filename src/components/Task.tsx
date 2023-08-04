import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, ScaleFade, Textarea } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { TaskModel } from '../utils/models';

type TaskProps = {
  index: number;
  task: TaskModel;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onDropHover: handleDropHover,
}: TaskProps) {



  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        as="div"
        role="group"
        position="relative"
        rounded="lg"
        w={200}
        pl={3}
        pr={7}
        pt={3}
        pb={1}
        boxShadow="xl"
        cursor="grab"
        fontWeight="bold"
        userSelect="none"
        bgColor={task.color}
      >
        <IconButton
          position="absolute"
          top={0}
          right={0}
          zIndex={100}
          aria-label="delete-task"
          size="md"
          colorScheme="solid"
          color={'gray.700'}
          icon={<DeleteIcon />}
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
        />
        <Textarea
          value={task.title}
          fontWeight="semibold"
          cursor="inherit"
          border="none"
          p={0}
          resize="none"
          minH={70}
          maxH={200}
          focusBorderColor="none"
          color="gray.700"
        />
      </Box>
    </ScaleFade>
  );
}
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDropHover === next.onDropHover
  ) {
    return true;
  }

  return false;
});
