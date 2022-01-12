import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import useInputs from '../../hooks/useInputs';
import uid from '../../utils/uid';
import ColorPalet from './ColorPalet';
import { ColContainer, SubHeading } from './Components';

const AddGroupContainer = ({ handleAddNewGroup }) => {
  const [{ groupName }, handleInputChange] = useInputs({
    groupName: '',
  });
  const [selectedColor, setSelctedColor] = useState('');

  useEffect(() => {
    if (groupName !== '' && selectedColor !== '') {
      handleAddNewGroup({
        title: groupName,
        color: selectedColor,
        id: uid(),
      });
    }
  }, [groupName, selectedColor, handleAddNewGroup]);

  const handleColorPalet = (target) => {
    setSelctedColor(target);
  };

  return (
    <ColContainer style={{ marginTop: '18px' }}>
      <SubHeading>그룹명</SubHeading>
      <InputContainer>
        <Input
          autoComplete="off"
          type="text"
          name="groupName"
          value={groupName}
          onChange={handleInputChange}
          placeholder="그룹 이름을 입력하세요"
        />
      </InputContainer>
      <SubHeading style={{ marginTop: '20px', marginBottom: '12px' }}>
        그룹색상
      </SubHeading>
      <ColorPalet
        handleColorPalet={handleColorPalet}
        selectedColor={selectedColor}
      />
    </ColContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  height: 23px;
  background: ${COLORS.gray1};
  align-items: center;
  margin-top: 12px;
`;
const Input = styled.input`
  border: none;
  background: none;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  margin-left: 8px;
`;
export default AddGroupContainer;
