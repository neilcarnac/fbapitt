import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { useState, useEffect } from 'react';

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <>
      <div>
        {!profile ? <LoginSocialFacebook
          appId="274559021826273"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);

          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook> : ' '}

        {profile ? <div>
          <h1>{profile.name}</h1>
          <h2>{profile.email}</h2>
          {/* <h2>{profile.userID}</h2> */}
          <img src={profile.picture.data.url} />
        </div> : ' '}
      </div>
    </>

  );
}

export default App;
