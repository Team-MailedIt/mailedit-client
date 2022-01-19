import COLORS from '../../constants/colors';
import styled from 'styled-components';
import { useState } from 'react';

import search from '../../constants/icons/search.svg';
import remove from '../../constants/icons/remove.svg';

const Search = ({ all }) => {
  // 템플릿 검색
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
          {result.map((r, i) => (
            <SearchResultTitle key={'r' + i}>{r.title}</SearchResultTitle>
          ))}
        </SearchResultWrapper>
      ) : null}
    </>
  );
};

const SearchingField = styled.section`
  width: 252px;
  height: 38px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #748ffc;

  border-radius: 2px;
  margin: 48px 36px 0px 40px;
`;

const SearchResultWrapper = styled.div`
  width: 252px;
  background: ${COLORS.indigo4};

  position: relative;
  z-index: 2;

  margin-left: 40px;

  padding-bottom: 9px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${COLORS.UIWhite};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResultTitle = styled.div`
  width: 228px;
  height: 25px;

  display: flex;
  align-items: center;
  font-size: 14px;

  margin-top: 9px;
  padding-left: 8px;

  border-radius: 2px;

  &:hover {
    background: ${COLORS.indigo1};
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-left: 12px;

  background: none;
  border: none;
  color: white;

  &::placeholder {
    color: ${COLORS.indigo1};
    font-size: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const SearchIcon = styled.img`
  width: 18px;
  heigt: 18px;

  margin: 10px 0px 10px 12px;
`;

const RemoveIcon = styled.img`
  width: 12px;
  height: 12px;

  margin-left: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export default Search;
