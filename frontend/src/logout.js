import {useEffect, useState} from "react";
function Logout() {
  useEffect(() => {
      const logout = async () => {
        sessionStorage.clear();
        window.location.href = '/';
    }
      logout();
    }, [])
}

export default Logout;
