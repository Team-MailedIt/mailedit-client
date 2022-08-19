import styled from 'styled-components';

const MENU_HEIGHT = 20;

const FloatingButton = ({ position, actions }) => {
  const x = position.x;
  const y = position.y + MENU_HEIGHT;

  return (
    <div
      // className={styles.menuWrapper}
      style={{
        top: y,
        left: x,
        position: 'absolute',
        width: 'auto',
        height: '26px',
        zIndex: '11',
      }}
    >
      <Menu>
        <MenuItem
          id="turn-into"
          // className={styles.menuItem}
          role="button"
          tabIndex="0"
          onClick={() => actions.turnIntoBlock()}
        >
          블록 만들기
        </MenuItem>
      </Menu>
    </div>
  );
};

const Menu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;

  background: #f5f8ff;
  box-shadow: 0px 0px 10px #5c7cfa;
`;

const MenuItem = styled.span`
  width: 75px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;

  font-weight: 500;
  font-size: 11px;
`;

export default FloatingButton;
