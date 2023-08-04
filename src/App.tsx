import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';
import { Button, Col, Row, Space, Tooltip } from 'antd';
import { getDate } from './utils/helpers';
import './App.css';

function App() {

  return (
    <main>
      <header className="main-header">
        <h1 id="nav-title">Trello Task Management</h1>
        <div className="align">
          {/* <Button size={'small'} className="red" shape="circle" />
          <Button size={'small'} className="yellow" shape="circle" />
          <Button size={'small'} className="green" shape="circle" />
          <Button size={'small'} className="default" shape="circle" /> */}

        </div>
        <h3 id="date">{getDate()}</h3>

      </header >


      <DndProvider backend={HTML5Backend}>

        <Row style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          marginTop: '20px',

        }} align="top">
          <Col span={4}>
            <Space size={'large'}>
              <Column column={ColumnType.TO_DO} />
            </Space>
          </Col>
          <Col span={4}>
            <Space size={'large'}>
              <Column column={ColumnType.IN_PROGRESS} />
            </Space>
          </Col>
          <Col span={4}>
            <Space size={'large'}>
              <Column column={ColumnType.COMPLETED} />
            </Space>
          </Col>
        </Row>

      </DndProvider>
    </main >
  );
}

export default App;
