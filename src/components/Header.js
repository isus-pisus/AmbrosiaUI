import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: true
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Ambrosia"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;
