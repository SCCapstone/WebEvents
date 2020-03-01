This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


server was set up using medium guide:
https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

and file upload guided by:
https://medium.com/@kris101/react-file-upload-the-easy-way-with-nodejs-e94c5e81fb8
along with serverside of: 
https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/

 ### TO RUN THE APPLICATION
 
 After you download the files, you will first need to cd into the client folder, and npm install from there. From there, you will run npm start, and the application should start in your local host. You should not have to this, as the app is currently deployed at: http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com:3000/. To use the application, there are two files attached. First is the Test.csv file, which is the file that was given to us by our client. You will upload this, and then hit the export button to run the algorithm on it. Usually, you will be able to select options such as group size, but that fell apart right before the deadline. There is also a dropdown for scheduling type, which will change between seminar, field scheduling, and work scheduling, but there was an issue with the dropdown communication, so that does not work. There are currently two types of algorithms, which are the seminar and the field scheduling, but because of the dropdown issues, the algorithm parameters are currently rigid, which means that we cannot dynamically update parameters, so it is stuck on the seminar scheduling algorithm, with 5 person groups.

the client server file structure is:
WebEvents (whole app)
    Client(all react frontend stuff there)
        -npm install
        -npm start
        -npm test
    Server(all backend stuff)
        -npm install
        -node server.js
    

>>>>>>> 89d3444642acac6ad4cd79932c617e6045f7f416
## Available Scripts

In the project directory, you can run:


### 'npm install'

Need this to install node_modules. Do this once before npm start.

>>>>>>> 89d3444642acac6ad4cd79932c617e6045f7f416
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<<<<<<< HEAD
### `npm test`

Launches the test runner in the interactive watch mode.<br />
=======
# Testing

### `npm test`

Unit testing is located in the source folder in the file App.test.js, while the behavior testing is located in the Tests folder.

For Unit testing, run npm test in the client source folder in the terminal. It will run the App.test.js file, and then give a report on what happened.
For Behavior testing go into client/Tests and open the html Document. You need UI.Vision webbrowser app installed to run behavior testing.

>>>>>>> 89d3444642acac6ad4cd79932c617e6045f7f416
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<<<<<<< HEAD
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

=======
>>>>>>> 89d3444642acac6ad4cd79932c617e6045f7f416
### Deployment
AWS Deployment:
We are hosting our client and server under the same AWS EC2 instance. 
to connect to this instance you must change directory to webevents so you have the key file available with LS run the command:
ssh -i "keyServerWebEvents.pem" ubuntu@ec2-3-133-106-204.us-east-2.compute.amazonaws.com
once logged in you must run the screen command to switch between terminal processes. 
To use screen use 'Ctrl-A' followed by '?' to get the information page.


This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

<<<<<<< HEAD
### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
>>>>>>> 89d3444642acac6ad4cd79932c617e6045f7f416
