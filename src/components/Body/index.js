import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1> Left Navbar Menu</h1>
              <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>
                <li> Item 4 </li>
              </ul>
            </div>
          )}
          <div className="content-container">
            {showContent && (
              <div className="content">
                <h1> Content </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.{' '}
                </p>
              </div>
            )}
          </div>

          {showRightNavbar && (
            <div className="right-navbar">
              <h1> Right Navbar </h1>
              <div className="ads-container">
                <div>
                  <p>Ad 1</p>
                </div>
                <div>
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
