import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <hr />
            <div>
                <h3>1).Difference between authorization and authentication ?</h3>
                <h4>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board</h4>
            </div>
            <hr />
            <div>
                <h2>2).Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users . It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system</h4>
            </div>
            <hr />
            <div>
                <h1>3).What other services does firebase provide other than authentication ?</h1>
                <h6>Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance

                    1) Cloud Firestore
                    2) Cloud Functions
                    3) Authentication
                    4) Hosting
                    5) Cloud Storage
                    6) Google Analytics
                    7) Predictions
                    8) Cloud Messaging
                    9) Dynamic Links
                    10) Remote Config
                </h6>
            </div>
            <hr />
        </div>
    );
};

export default Blogs;