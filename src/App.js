import { useState, useEffect } from 'react';
import logo from './logo.png';
import * as S from './styled';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      let today = new Date();
      today.setHours(today.getHours() + 1);

      localStorage.setItem('bflead', JSON.stringify({username, email, date: today.getTime()}));
      setUsername('');
      setEmail('');
      setRegistered(true);
  };

  useEffect(() => {
    if (localStorage.getItem('bflead')) {
      const data = JSON.parse(localStorage.getItem('bflead'));

      if (data.date > Date.now()) {
        setUsername(data.username);
        setEmail(data.email);
        setRegistered(true);
      } else {
        setUsername('');
        setEmail('');
        setRegistered(false);
        localStorage.removeItem('bflead');
      }
    }
  }, []);

  const handleUsernameChange = event => setUsername(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);

  return (
    <S.Container>
      <main>
        <S.Logo>
          <img src={logo} alt="Logo Black Friday" />
        </S.Logo>
        <S.Counter>
          <div className="headline" id="headline">26.NOV</div>
          <div id="countdown">
            <ul>
              <li><span id="days">000 </span>dias</li>
              <li><span id="dots">:</span></li>
              <li><span id="hours">00 </span>horas</li>
              <li><span id="dots">:</span></li>
              <li><span id="minutes">00 </span>minutos</li>
            </ul>
          </div>
        </S.Counter>
      </main>
      <S.H1 id="principal">Cadastre-se e receba ofertas antecipadas na melhor Black Friday de todos os tempos.</S.H1>
      <S.H1Mobile id="mobile">Cadastre-se para receber ofertas<br />antes de todo mundo!</S.H1Mobile>
      <S.Separator className="separator"></S.Separator>
      <S.Lead>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Digite seu nome" value={username} onChange={handleUsernameChange} autoComplete="name" />
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu melhor e-mail" value={email} onChange={handleEmailChange} autoComplete="username" inputMode="email" />
          <button type="submit">CADASTRAR</button>
        </form>
        {registered &&
        <p>Parabéns! Você já se cadastrou. Caso queira alterar os dados, basta cadastrar-se novamente</p>
        }
      </S.Lead>
    </S.Container>
  );
}

export default App;
