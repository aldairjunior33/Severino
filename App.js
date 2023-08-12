import './App.css';
import logo from './assets/logo_sev.svg';

  function Login() {
   
  return (
    <div className="login-container">
      <img scr ={logo} alt="logo" className="logo" />
      <h1>SEVERINO</h1>
      <span>Login</span>

    <div className="input-login">
      
      <label htmlFor="E-mail">E-mail</label>
      <input 
        type="text" 
        name ="email"  
        id="email"
        placeholder='melsouza@gmail.com'
        />
    </div>

   <div className="input-login">
      
      <label htmlFor="Senha">senha</label>
      <input 
        type="senha" 
        name ="senha"  
        id="senha"
        placeholder='**************'
        />
    </div>
    <a href="faceboo.com">Esqueci a senha</a>

  </div>

  );
}

export default Login;
