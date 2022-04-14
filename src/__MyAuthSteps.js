/* 
1- create new project in firebase website
2- install and initialize firebase in your project
3- in the firebase initialization file export the auth var to reduce repeatation
4- In the firebase website, enable email and password auth
5- Create login and sign up components/page - link them using a Link comp (already have an account & New to Ema john ) - set up Route for both of them
6- In login and signup page/comp declare states for email ,password etc. 
7- get the email ,password values using handlers and onBlur but on the form container use onSubmit
8- for inplementing signup and signIn flow  Install react firebase hooks (  npm install --save react-firebase-hooks)
9- go the the firebase hooks git repo and get the neccessary hooks and implement them as shown in the examples of that repo 
10-  useCreateUserWithEmailAndPassword from react-firebase-hooks (for sign up)
11- useSignInWithEmailAndPassword for Login
12- In case of login , if(user) then redirect to the from location(implement this using react router website)
13- Implement private route using RequireAuth
14- Create RequireAuth comp
15- in route wrap the comp that u want to protect using the RequireAuth comp

*/

//Hosting steps
/* 
1- go to console firebase and open the project
2- go to hosting and then get started
3- npm install -g firebase-tools(one time for your computer)
4- cmd - firebase login(one time for your computer)
5- cmd - firebase init - answer or choose from the options from the init part(one time for each project )
6- website er steps gulo te last e firebase deploy er jonno command thakbe - but before that project ke build korte hobe - so run - npm run build(every time you want to deploy)
7 - firebase deploy (every time you want to deploy)

8- every time i update something there only two step - build and firebase deploy
*/