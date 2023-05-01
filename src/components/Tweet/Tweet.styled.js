import styled from 'styled-components';

export const TweetCard = styled.div`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Background = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const LineStyled = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const EllipseStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  border-radius: 85.9232px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  div {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: #5736a3;
  }

  img {
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 284px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;

    color: #ebd8ff;
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 26px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;

    width: 196px;
    height: 50px;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    border: 0;

    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.22;

      text-transform: uppercase;

      color: #373737;

      flex: none;
      order: 0;
      flex-grow: 0;

      margin: 0;
    }
  }
`;
