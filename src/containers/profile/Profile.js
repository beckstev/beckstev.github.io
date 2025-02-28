import React, {useState, useEffect} from "react";
import Contact from "../contact/Contact";
export default function Profile() {
  const [, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  useEffect(() => {
    const getProfileData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Failed to fetch profile data");
        })
        .then(response => {
          setProfileFunction(response?.data?.user || "No Data");
        })
        .catch(error => {
          console.error(
            `${error} (GitHub contact section could not be displayed. Reverted to default)`
          );
          setProfileFunction("Error");
        });
    };

    getProfileData();
  }, []);
  return <Contact />;
}
