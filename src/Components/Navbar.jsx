import React from 'react'

const Navbar = ({setCategory, setCountry, country}) => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" 
    style={{ cursor: 'pointer' }}
    onClick={() => {
      setCountry("us");
      setCategory('general');
    }}>
      <span className='badge bg-light text-dark fs-4'>
        Info Center
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      <li>
        <li className="nav-item dropdown">
          <button 
          className="btn btn-light dropdown-toggle" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">
            <span className={`flag-icon flag-icon-${country} me-2`}></span> {country.toUpperCase()}
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" onClick={()=>setCountry("bg")}>
            <span className="flag-icon flag-icon-bg me-2"></span>BG</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("ca")}>
            <span className="flag-icon flag-icon-ca me-2"></span>CA</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("de")}>
            <span className="flag-icon flag-icon-de me-2"></span>DE</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("fr")}>
            <span className="flag-icon flag-icon-fr me-2"></span>FR</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("ru")}>
            <span className="flag-icon flag-icon-ru me-2"></span>RU</a></li>
            <li><a className="dropdown-item" onClick={()=>setCountry("us")}>
            <span className="flag-icon flag-icon-us me-2"></span>US</a></li>           
          </ul>
        </li>
      </li>

      <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("general")} >General</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("technology")} >Technology</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("business")}>Business</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("health")}>Health</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("science")} >Science</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("sports")} >Sports</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: 'pointer' }} 
          onClick={()=>setCategory("entertainment")} >Entertainment</div>
        </li>

      </ul>
    </div>
  </div>

     
</nav>
  )
}

export default Navbar