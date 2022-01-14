import { AddNewGroupSpan } from './Components';
import { PlusIcon } from '../../constants/icons';
import styled from 'styled-components';

const DefaultContainer = () => {
  return (
    <RowContainer style={{ alignItems: 'center', marginTop: '18px' }}>
      <PlusIcon style={{ marginRight: '4px' }} src="./img/plus.png" />
      <AddNewGroupSpan>새 그룹 추가하기</AddNewGroupSpan>
    </RowContainer>
  );
};
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default DefaultContainer;
