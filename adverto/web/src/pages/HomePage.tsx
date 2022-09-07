import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import awsAmplifyConfig from '../config/aws-amplify.config';
import { executeSignedApi as invokeApi } from '../utils/aws/aws.utils';
import { HttpMethod } from '../utils/http-method.enum';

function HomePage() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    const printUserInfo = async () => {
      const currentSession = await Auth.currentSession();
      setProfilePic(currentSession.getIdToken().payload.picture);
      console.log(currentSession);
    };

    console.log(awsAmplifyConfig);

    printUserInfo();
  }, []);

  const getAds = async () => {
    console.log('getAds');
    const response = await invokeApi(HttpMethod.GET, '/ads');
    console.log(response);
  };

  const invokeAdvertiserFunction = async () => {
    const response = await invokeApi(HttpMethod.GET, '/advertiser-function');
    console.log(response);
  };

  const invokeAdminFunction = async () => {
    const response = await invokeApi(HttpMethod.GET, '/admin-function');
    console.log(response);
  };

  return (
    <div>
      <img src={profilePic} referrerPolicy='no-referrer' />
      Home page
      <button
        className='btnSecondary'
        onClick={async () => {
          await Auth.signOut();
          navigate('/login');
        }}
      >
        Sign out
      </button>
      <button className='btnSecondary' onClick={getAds}>
        Get all ads
      </button>
      <button className='btnSecondary' onClick={invokeAdvertiserFunction}>
        Advertiser function
      </button>
      <button className='btnSecondary' onClick={invokeAdminFunction}>
        Admin function
      </button>
    </div>
  );
}

export default HomePage;
