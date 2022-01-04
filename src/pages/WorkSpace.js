import EditPage from '../components/workspace/EditablePage';
import TemplatePage from '../components/workspace/TemplatePage';

const WorkSpace = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <TemplatePage />
      <EditPage />
    </div>
  );
};

export default WorkSpace;
