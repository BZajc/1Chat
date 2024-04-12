### You should keep in mind that the application is not yet completed, and I am still working on it, so certain features may be missing or it may behave unexpectedly.

# 1Chat Documentation

1Chat is a real-time chat application designed to connect users randomly for engaging conversations. With 1Chat, users can experience the excitement of meeting new people from around the world in a safe and moderated environment.

## Technologies Used

1Chat is built using the following technologies:

React (with Redux): A JavaScript library for building user interfaces, used for creating the frontend of the application. Redux is utilized for managing application state.

TypeScript: A statically typed superset of JavaScript that enhances code quality and developer productivity.

Firebase: A platform provided by Google for developing mobile and web applications. Firebase services are used for authentication, database management, and hosting.

## Application Features

### User Account Management

Users can create an account and verify it via email.
Once verified, users can customize their profiles by adding descriptions, photos, or videos to better represent themselves.
They can control the visibility of their content, choosing whether only friends or all users can see their information.

### Friend Management

As mentioned above - users can add other users as friends to continue conversations with them.

### User Statistics

Users can view statistics related to their activity within the application, such as the number of messages sent in a given month or the total time spent in the app and more.

## Future Implementations

Tag-based User Search: A feature allowing users to search for others based on tags represented by icons. Users can select up to three icons that represent the type of person they want to connect with, increasing their chances of matching with users who have similar tags.

Other planned features can be found in the "todo" section within the application.

## Deployment

1Chat is hosted on Netlify and can be accessed at [https://1chat-bzajc.netlify.app/](https://1chat-bzajc.netlify.app/)

Important: When refreshing the page on Netlify or manually changing the URL, an error message "Page not found" occurs. This happens due to how Netlify works and is not caused by any bugs in the code.

## Local Setup

To run the application locally on your device, follow these steps:

1. Create a .env file in the root folder of the project.
2. Add your Firebase configuration data to the .env file in the following format:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

Replace YOUR_API_KEY, YOUR_AUTH_DOMAIN, and other placeholders with your actual Firebase configuration data.
