import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import AuthModal from '../../auth/AuthModal';

export default function MAuthModal() {
  return (
    <Wrapper>
      <Exit src="/images/auth_modal_exit.svg" alt="modal exit" />
      <AuthModal />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 344px;
  height: 491px;
  border-radius: 3px;
  padding-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${colors.gray.gray1};
`;

const Exit = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;

  align-self: flex-end;
  margin-right: 24px;

  cursor: pointer;
`;
