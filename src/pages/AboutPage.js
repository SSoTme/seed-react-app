import React, { useEffect, useState } from 'react';
import PlayerService from '../effortlessapiservices/PlayerService';

const AboutPage = () => {
  const [appUser, setAppUser] = useState(null);

  // Fetch player data
  useEffect(() => {
    (async () => {
      const appUser = await PlayerService.GetTicTacToeUsers();
      console.log('User: ', appUser);
      if (appUser?.length) { 
        setAppUser(appUser[0]);
      }
    })();
  }, []);

  return (<div>
    {appUser === null ? (<div>Login to see profile.</div>) :
    (<div>
      <h2>Profile</h2>
        {appUser?.Name}
        <div style={{float: 'right'}}>{appUser?.Email}</div>
      <div>
              {appUser?.Roles?.length > 0 ?
                  (<div><h3>Roles</h3>
                      {appUser.Roles.map((role, index) => <div key={index}>{role}</div>)}
                  </div>) :
                  (<div><b>Role: </b>{appUser.Role}</div>)}
          </div>
      </div>)}
  </div>);
}
export default AboutPage;
