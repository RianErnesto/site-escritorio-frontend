import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' aria-label='NavBar Site'>
          <div className='container-fluid'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSite' 
              aria-controls='navbarSite' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse justify-content-md-center' id='navbarSite'>
              {/* Link que contém a imagem */}
              <a className="navbar-brand" href="#">
                <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
              </a>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>Sobre</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>Destaques</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>Projetos</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
}

export default App;
