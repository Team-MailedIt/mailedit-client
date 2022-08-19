import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import search from '../../constants/icons/search.svg';
import remove from '../../constants/icons/remove.svg';

import API from '../../utils/API';
import COLORS from '../../constants/colors';
import { ContentContext } from '../../contexts/ContentContext';

const Search = ({ all }) => {
  const navigate = useNavigate();
  const { setContentHandler } = useContext(ContentContext);

  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const result = all
    .filter((t) => inputText && t.title.includes(inputText))
    .sort();

  const handleRemoveBtnClick = () => {
    setInputText('');
  };

  const handleResult = async (templateId) => {
    // call api by templateId
    const { data } = await API.get(`/templates/${templateId}`);
    if (data) {
      setContentHandler(data);
      handleRemoveBtnClick();
    }

    navigate('/workspace');
  };

  return (
    <>
      <SearchingField>
        <SearchIcon src={search} />
        <Input
          placeholder="템플릿을 검색하세요"
          spellCheck={false}
          value={inputText}
          onChange={handleInputChange}
        />
        {inputText && (
          <RemoveIcon src={remove} onClick={handleRemoveBtnClick} />
        )}
      </SearchingField>
      {result.length !== 0 ? (
        <SearchResultWrapper>
          {result.map(({ title, templateId }) => (
            <SearchResultTitle
              key={templateId}
              onClick={() => handleResult(templateId)}
            >
              {title}
            </SearchResultTitle>
          ))}
        </SearchResultWrapper>
      ) : null}
    </>
  );
};

const SearchingField = styled.section`
  width: 189px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #748ffc;
  border-radius: 2px;
  margin-top: 36px;
`;

const SearchResultWrapper = styled.div`
  width: 189px;
  background: ${COLORS.indigo4};
  position: relative;
  z-index: 2;
  margin-left: 30px;
  padding-top: 1px;
  padding-bottom: 9px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${COLORS.UIWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResultTitle = styled.div`
  width: 228px;
  height: 21px;
  font-size: 14px;
  margin-top: 9px;
  padding-top: 4px;
  padding-left: 8px;
  border-radius: 2px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background: ${COLORS.indigo1};
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 129px;
  margin-left: 10px;
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 12px;
  &::placeholder {
    color: ${COLORS.indigo1};
  }
`;

const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 7px 0px 7px 8px;
`;

const RemoveIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export default Search;
