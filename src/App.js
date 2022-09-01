import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim
        ipsum dignissim odio ornare elementum. Pellentesque ullamcorper non elit
        quis aliquet. Praesent aliquet ac dolor et sollicitudin. Ut efficitur
        libero vel neque cursus ultricies. Pellentesque ac lorem mi. Sed
        bibendum, nisl eu efficitur tristique, dolor ipsum euismod augue, at
        dignissim enim dolor quis risus. Aenean in accumsan quam. Morbi at
        pulvinar mauris. Quisque non scelerisque velit, et aliquam leo. Mauris a
        nisi efficitur, porttitor mi non, commodo augue. Vestibulum ut urna sed
        massa semper pretium non id odio. Aliquam erat volutpat. Nulla ornare,
        quam in imperdiet imperdiet, nunc lacus aliquam neque, ut commodo eros
        eros sit amet ipsum. Nunc imperdiet, dolor nec iaculis aliquet, eros
        ligula euismod enim, nec efficitur risus tortor ornare augue. Fusce
        vitae consequat felis. Mauris eget fermentum magna. Duis viverra, mi
        vitae blandit imperdiet, velit sem viverra diam, elementum laoreet nisl
        enim ut turpis. Aliquam nec magna eu nibh tempor vulputate ultricies a
        nulla. Mauris laoreet eros vel ultrices interdum. Etiam vestibulum urna
        non mattis eleifend. Vestibulum nec tortor quis metus pulvinar blandit.
        Suspendisse in sodales neque. Mauris sit amet sapien ut nisi fermentum
        ultrices eget sit amet elit. Phasellus lacus ante, aliquet pretium
        porttitor non, auctor id sapien. Fusce hendrerit leo non ante dapibus,
        at semper dui malesuada. Vestibulum eu quam nibh. Donec consequat, odio
        eget lacinia volutpat, dui lectus tempus nibh, eget mollis quam nunc
        vitae quam. Nunc pharetra libero lorem. Donec sit amet ultricies nisl.
        Sed aliquet, ex vitae rhoncus finibus, sapien nisi cursus elit, eu
        efficitur est enim eget erat. Phasellus blandit nisi ac nulla accumsan
        aliquam at a risus. Fusce justo elit, ornare sodales feugiat sit amet,
        vestibulum ac ex. Pellentesque facilisis ipsum tellus, pulvinar cursus
        ipsum rutrum in. Phasellus eleifend libero sed vestibulum laoreet. Sed a
        accumsan augue. Quisque hendrerit iaculis metus sed pharetra. Aliquam
        euismod ligula nec efficitur vulputate. Ut pretium urna quis enim
        tempus, ac dictum metus eleifend. Pellentesque at hendrerit risus. In
        eget dolor non justo facilisis vehicula. Aenean euismod augue at finibus
        volutpat. Aliquam ut lacus semper, porttitor augue et, efficitur arcu.
        Ut bibendum semper aliquet. Fusce sed dui quis enim volutpat dapibus
        facilisis vitae leo. Sed id elit quis sapien venenatis consequat. Sed
        vel tincidunt massa, vel bibendum sapien. Ut efficitur quam nec libero
        tempor, in consequat libero eleifend. Quisque interdum porta lacus, eget
        sodales neque elementum vitae. Nulla dapibus vel est at aliquet. Morbi
        efficitur massa et magna fringilla facilisis. Fusce in metus quis ante
        accumsan viverra. Maecenas ac mi id libero pellentesque vehicula.
        Integer a est sodales, ornare est nec, auctor elit. Sed tristique congue
        ipsum, faucibus tincidunt nunc sagittis in. Etiam hendrerit ornare
        venenatis. Vestibulum ac ligula ut purus iaculis maximus sed sed urna.
        Phasellus rhoncus arcu velit, et commodo nisi posuere nec. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Morbi molestie nisl
        leo, vitae aliquet massa sagittis quis. Etiam imperdiet justo in
        vehicula vestibulum. Ut sed mi vitae sapien eleifend condimentum vitae
        sit amet ipsum. Ut scelerisque augue et elit fermentum, sit amet pretium
        dolor aliquam. In ac lacus in sem vehicula aliquam. Sed feugiat
        vestibulum mi at venenatis. Donec et urna diam. Nam interdum nibh ac
        ipsum semper cursus. Quisque at fringilla nisi. Suspendisse congue enim
        id dolor interdum auctor. Maecenas sagittis ac nisl eget mattis.{" "}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
