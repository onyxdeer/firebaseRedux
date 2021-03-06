import React, { PropTypes } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';

import energy from '../assets/media/energy.png';
import health from '../assets/media/health.png';
import points from '../assets/media/points.png';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
  }

  generatePlayerIcon(playerObj, gameData) {
    let icon = '';
    if (playerObj.stats.health <= 0) icon += '☠';
    if (gameData) {
      if (gameData.king && playerObj.uid === gameData.king.uid) icon += '👑';
      if (gameData.chosenOne && playerObj.uid === gameData.chosenOne.uid) icon += '👈';
    }
    return icon;
  }

  render() {
    const { auth } = this.props;
    // console.log(this.props.playersOnline);
    return (
      <div className="CurrentUser">
        {/* <img
          className="CurrentUser--photo"
          src={auth.photoURL}
          alt={auth.displayName}
        />*/}
        <div className="CurrentUser--identification">
          <h3 className="CurrentUser--displayName">{auth.displayName}</h3>
          <p className="CurrentUser--email">{auth.email}</p>
          {/* <button className="CurrentUser--signout"onClick={() => { signOut(auth.uid); }}> Sign Out</button>*/}

          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {map(this.props.playersOnline, item => <div>
              <div key={item.uid} style={{ display: 'flex', flex: 1, maxWidth: '400px', flexDirection: 'row', backgroundColor: '#F0F7FF', alignItems: 'center', boxShadow: 'grey -1px 3px 12px', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingLeft: '10px', paddingRight: '10px' }}>
                <div style={{ flex: 1 }}><img style={{ margin: '10px', width: '100px', height: '100px', borderRadius: 100 }} src={item.photoURL} alt={item.photoURL} /></div>
                <div style={{ flex: 3 }}>
                  <div style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', margin: '10px' }}>
                    <div style={{ fontSize: '24px', margin: '10px' }}>{item.displayName} {this.generatePlayerIcon(item, this.props.game)}</div>
                    <div style={{ flex: 1, flexDirection: 'row', display: 'flex' }}>

                      <div style={{ flex: 1, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, margin: '5px' }}><img style={{ width: '25px', height: '25px' }} src={health} /></div>
                        <div style={{ flex: 1, margin: '5px', fontSize: '16px' }}> {item.stats.health}</div>
                      </div>
                      <div style={{ flex: 1, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, margin: '5px' }}><img style={{ width: '25px', height: '25px' }} src={energy} /></div>
                        <div style={{ flex: 1, margin: '5px', fontSize: '16px' }}> {item.stats.energy}</div>
                      </div>
                      <div style={{ flex: 1, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, margin: '5px' }}><img style={{ width: '25px', height: '25px' }} src={points} /></div>
                        <div style={{ flex: 1, margin: '5px', fontSize: '16px' }}> {item.stats.points}</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }} />,
              </div>,
            )
            }
          </div>


          <button onClick={() => { this.props.increaseHealth(auth.uid); }} >up health</button>
          <button onClick={() => { this.props.increaseHealth(auth.uid); }} >up health</button>
          <button onClick={() => { this.props.decreaseHealth(auth.uid); }}>down health</button>
          <button onClick={() => { this.props.increasePoints(auth.uid); }} >up Points</button>
          <button onClick={() => { this.props.decreasePoints(auth.uid); }}>down Points</button>
          <button onClick={() => { this.props.increaseEnergy(auth.uid); }} >up Energy</button>
          <button onClick={() => { this.props.decreaseEnergy(auth.uid); }}>down Energy</button>
          <button onClick={() => { this.props.joinGame(auth.uid); }}> JOIN GAME </button>
          <button onClick={() => { this.props.leaveGame(auth.uid); }}> LEAVE GAME </button>
          <button onClick={() => { this.props.changeStat(auth.uid); }}> CHANGE STAT </button>
        </div>
      </div >
    );
  }
}

// CurrentUser.propTypes = {
//   auth: PropTypes.shape({
//     displayName: PropTypes.string,
//     email: PropTypes.string.isRequired,
//     photoURL: PropTypes.string,
//     uid: PropTypes.string.isRequired,
//   }),
// };

export default CurrentUser;
