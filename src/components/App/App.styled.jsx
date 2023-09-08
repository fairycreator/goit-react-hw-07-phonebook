import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  padding: 10px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 36px;
  letter-spacing: 10px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 5px;
`;

export const PlayerContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const SoundCloudButton = styled.button`
  background-color: #ff5500;
  color: white;
  border: none;
  padding: 3px 6px;
  margin: 2px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8800;
  }
`;

export const CallToActionText = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0 2px;
  font-size: 14px;
`;
