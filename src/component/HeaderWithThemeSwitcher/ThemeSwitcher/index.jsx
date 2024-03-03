import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts'
import { CONSTANTS } from '../../../Constants'

const {
  THEMES: { LIGHT, DARK, PURPLE }
} = CONSTANTS
function ThemeSwitcher () {
  const { theme, setTheme } = useContext(ThemeContext)
  const themeChangeHandler = ({ target: { value } }) => {
    setTheme(value)
  }

  return (
    <select value={theme} onChange={themeChangeHandler}>
      <option value={LIGHT}>Light</option>
      <option value={DARK}>Dark</option>
      <option value={PURPLE}>Purple</option>
    </select>
  )
}
export default ThemeSwitcher
