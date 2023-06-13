import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-controller">
          <h1> Layout </h1>
          <div>
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeShowContent}
            />
            <label htmlFor="content"> Content </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={onChangeShowLeftNavbar}
            />
            <label htmlFor="left-navbar"> Left Navbar </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onChange={onChangeShowRightNavbar}
            />
            <label htmlFor="right-navbar"> Right Navbar </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
