import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [accessToken] = useState(localStorage.getItem('access_token'));

  return (
    <div>
      {!accessToken ? <div>Login to continue</div> : 
      <div>
          <h2>Details</h2>
          Your app details here...
      </div>}
    </div>
  );
};

export default HomePage;
