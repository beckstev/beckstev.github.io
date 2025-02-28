import React, {useState, useEffect, lazy, Suspense} from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
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
  return <Contact />
}
