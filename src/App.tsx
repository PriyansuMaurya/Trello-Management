import { } from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
        textAlign="center"
      >
        Welcome to DnD Kanban
      </Heading>
    </main>
  );
}

export default App;
