import Header from './components/Header';
import Welcome from './pages/Welcome';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const navigate = useNavigate();
  	const [user, setUser] = useState();

 	if (typeof(user) === 'undefined' && user == null) {
	    navigate('/login');
  	}

  	useEffect(() => {
	    const loggedInUser = sessionStorage.getItem("user");
	    if (loggedInUser && typeof(loggedInUser) !== 'undefined') {
	      const foundUser = JSON.parse(loggedInUser);
	      setUser(foundUser);
	    }else{
	    	navigate('/login');
	    }
  	}, []);
  	return (
	    <>
	      	<Header user={user}/>
	      	<Welcome user={user} />
	    </>
  	);
}