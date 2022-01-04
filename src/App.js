import EditablePage from './EditablePage';
import TemplatePage from './TemplatePage';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TemplatePage />
        <EditablePage />
      </div>
    </>
  );
};

export default App;
