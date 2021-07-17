import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 20px;

    @media(max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media(max-width: 768px) {
    display: block;
    padding: 40px 20px;
    height: auto;
  }
`;

export const Logo = styled.div`
  & img {
    max-width: 350px;

    @media(max-width: 768px) {
      margin-bottom: 20px
    }
  }
`;

export const Counter = styled.div`
  & .headline {
    height: 70px;
    background-color: var(--secondary-color);
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & li {
    display: inline-block;
    font-size: 1em;
    list-style-type: none;
    vertical-align: top;
    text-align: center;
  }

  & li span {
    display: block;
    font-size: 4rem;

    @media(max-width: 768px) {
      font-size: 3rem;
    }
  }


  & li span#dots {
    margin: 0 20px;

    @media(max-width: 768px) {
      margin: 0 5px;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const H1Mobile = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  display: none;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const Separator = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 1px;
  background-color: var(--secondary-color);
`;

export const Lead = styled.div`
  & form {
    @media(max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  
  & form label {
    display: none;
  }

  & form input {
    width: 350px;
    height: 45px;
    border-radius: 3px;
    padding: 0 15px;
    color: var(--secondary-color);
    margin-right: 10px;

    @media(max-width: 768px) {
      margin: 0;
      width: 85%;

      &:not(:first-of-type) {
        margin-top: 10px;
      }
    }
  }

  & form button[type=submit] {
    width: 200px;
    height: 45px;
    border-radius: 3px;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    cursor: pointer;
    font-size: 1rem;
    opacity: 1;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }

    @media(max-width: 768px) {
      width: 85%;
      margin-top: 10px;
    }
  }

  & p {
    margin-top: 10px;
    font-size: 0.75rem;
  }
`;