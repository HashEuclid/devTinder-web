# DevTinder-webapp
- Create a Vite + React application.
- Remove unnecessary code and create a Hello World app.
- Install Tailwind CSS
- Install DaisyUI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate component file
- Install react-router-dom
- Create BrowserRouter > Routes > Route = / Body > RouteChildren
- Create an Outlet in Body Component
- Create a Footer Component
- Create a Login Page
- Install Axios
- CORS - install CORS to the backend => add middleware to app with configurations: origin: "Whitelisting urls" and credentials:true
- Whenever making API call so pass axios => {credentials: true}
- Install Redux toolkit -- install npm install @reduxjs/toolkit
- configureStore => Provider => createSlice => add reducer to store
- Add redux dev tools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user login
- Refactor the code to add constants file + create a components folder
- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit profile feature
- Show Toast message on save of Profile
- New Page - See all my connections
- New Page - See all my Conection Requests
- Feature - Accept/Reject connection request
- Profile Page
- Send/ignore the user card from Feed
- Signup New User
- E2E Testing





## Component design
- body
    NavBar
    Route = / => Feed
    Route = /login => Login
    Route = /connections => Connections
    Route = /profile => Profile


# Deployment
- Signup on AWS
- Launch instance 
- chmod 400 <secret>.pem
- Connected to the machine using SSH command => ssh -i "devTinder-secret.pem" ubuntu@ec2-13-235-82-228.ap-south-1. compute.amazonaws.com
- Install node version 22.17.0 (same as the node version using on local system)
- Git clone both frontEnd and backend projects

    ## Deploy FrondEnd
    - git pull ---> for taking latest code
    - npm install => install the dependencies
    - npm run build
    - suod apt update => update the linux system
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist folder(build files) to /var/www/html/ (path of http server of nginx).
    - sudo scp -r dist/* /var/www/html/
    - Enable Port:80(Port of nginx) of your instance.
    
    ## Deploy Backend
    - Update DB password
    - Allow EC2 instance public IP on Mongo ( whitelisting the IP on MongoDB server )
    - Install pm2 (npm install pm2 -g)
    - pm2 start npm -- start => Start the server using pm2 process manager
    - pm2 start npm --name "<custom name of process>" -- start => command for starting the process and give it a custom name
    - pm2 logs => command for checking the logs of application
    - pm2 flush npm => command for flushing the logs
    - pm2 list => list of processes started by pm2
    - pm2 stop <name of the process> => command to stop a specific process running using pm2
    - pm2 delete <name of process> => to delete the process.
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx -- sudo systemctl restart nginx
    - modify the BASE_URL in frontend project to "/api".



    Frontend = http://13.235.82.228/
    Backend = http://13.235.82.228:7777/

    Domain name = devtinder.com => http://13.235.82.228 => DNS Mapping

    Frontend = devtinder.com
    Backend = devtinder.com:7777 => devtinder.com/api


    ### nginx config : 

    server_name 13.235.82.228;

    location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
# Adding a Custom Domain Name
- Purchase a Domain name from godaddy
- Signup on cloudflare & Add a new Domain name
- Change the Nameservers on godaddy and point it to cloudflare
- Wait for sometime till your Nameservers are updated - nearly 15 mins
- in DNS Record => create an A devTinder.in record which will point to the AWS machine IP Address.
- Enable SSL Certificate => SSL tab -> configure -> select custom -> flexible -> save
- Go to Edge Certificates => Automatic HTTPS Rewrites -> enable


# Sending Emails via SES
- Create an IAM user
- Give access to AmazonSESFullAccess
- Amazon SES: Create an Identity
- Verify your domain name
- Verify the Email address identity
- Install AWS SDK and make sure you are on V3
- code example on github awsdocs/aws-doc-sdk-example/
- Setup SesClient
- ACcess Credentials should be created in IAM account <secretkey and accessKey> uder security credentials tab and add the credentials to the .env file
- Write code for SESClient
- Write code for sending Email address
- Make the email dynamic by passing more params to the run function

# Sceduling CRON jobs in Node.js
- Install node-cron package
- Learning about cron expressions syntax -- crontab.guru
- Schedule a job
- date-fns -- npm package for date management
- Find all the unique emailids who have got the connection requests in previous day
- Send Email
- Explore queue mechanism to send bulk emails
- Amzon SES bulk emails
- Create a custom template to make sendEmail function dynamic
- bee-queue and bull npm packages -- packages to handle queue mechanism -- read on website