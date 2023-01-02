import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = React.useState('light');
  const toggleTheme = () => {
    themeName === 'light' ? setThemeName('dark') : setThemeName('light');
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
