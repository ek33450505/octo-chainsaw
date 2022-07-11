import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

export default function MyAccount() {
    const [userData, setUserData] = useState({});

    // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;
  
    useEffect(() => {
      const getUserData = async () => {
        try {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
  
          if (!token) {
            return false;
          }
  
          const response = await getMe(token);
  
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
  
          const user = await response.json();
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, [userDataLength]);

    // map user info to page
    return (
        <div>
            {user.map(element => {
                return (
                    <>
                        <Link to='/api/user/me' key={element.id}>
                            <h4 key={element.id}>{element.name}</h4>
                        </Link>
                        <p>{ element.message }</p>
                        {/* <p>{ element.state }</p>
                        <p>{ element.price }</p> */}
                    </>
                )
            })}
        </div>
    )}

    return (
        <>
            <div>
             <section id="my-account" className="my-account">
               <div className="container">
                     <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                             <div className="content">
                                <h3>My Account</h3>
                                 <p>Here you can find information about your previous rentals, listings, and messages you've sent to other rentIt users.</p>
                             </div>
                         </div>
                        <div className="col-lg-8 d-flex align-items-stretch">
                             <div className="icon-boxes d-flex flex-column justify-content-center">
                                 <div className="row">
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-receipt"></i>
                                             <h4>Messages</h4>
                                             <p>Click the button below to be redirected to your messages.
                                             </p>
                                             <a href="/Message" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-cube-alt"></i>
                                             <h4>My Listings</h4>
                                             <p>Click the button below to be redirected to your previous listings.</p>
                                             <a href="#" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-images"></i>
                                             <h4>History</h4>
                                             <p>Click the button below to be redirected to your rentIt rental history.</p>
                                             <a href="#" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
            </div>
        </>
    )
