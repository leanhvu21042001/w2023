(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-workspaces.521ddf2f.png"},285:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-create-workspace.493fd80b.png"},286:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-collections-list.79138708.png"},287:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-create-collection.2701ceae.png"},288:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-collection-folders.18adcece.png"},289:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-environment-buttons.d75f7cdc.png"},290:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-environment-variables.8ba8009b.png"},291:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-variables-quick-look.fd8ae4bc.png"},292:function(e,t,a){e.exports=a.p+"assets/img/screenshot-exercise-submission.7f23daf8.png"},293:function(e,t,a){e.exports=a.p+"assets/img/screenshot-postman-tests.e0773ce0.png"},411:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("WeekHeader",{attrs:{number:12,title:"Testing"}}),e._v(" "),t("h2",{attrs:{id:"getting-organized-with-postman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-organized-with-postman"}},[e._v("#")]),e._v(" Getting organized with Postman")]),e._v(" "),t("p",[e._v('We have used Postman to do manual testing of our projects throughout the course, but we have barely scratched the surface of what Postman can do. It is time to leverage more features to help keep our testing well organized and eliminate some of the manual "cut and paste" of results from one test to another.')]),e._v(" "),t("h3",{attrs:{id:"workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workspaces"}},[e._v("#")]),e._v(" Workspaces")]),e._v(" "),t("p",[e._v("When you first start using Postman it sets up a default workspace called "),t("em",[e._v("My Workspace")]),e._v(". This lets you get started right away. But like any other digital tool, this can get cluttered pretty quickly. You can think of the "),t("strong",[e._v("workspaces")]),e._v(" feature as a filing cabinet. It is a way to contain collections of related work.")]),e._v(" "),t("p",[e._v("In a development shop or as a freelancer, you might want to create one for each client you are doing work for. I created a workspace for this class. You will notice at the top of all of my Postman screenshots it says "),t("em",[e._v("MAD9124")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"create-a-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-workspace"}},[e._v("#")]),e._v(" Create a workspace")]),e._v(" "),t("p",[e._v("You can create a new workspace by clicking the title of the current workspace and then choosing the "),t("strong",[e._v("Create New")]),e._v(" option.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(284),alt:"screenshot of Postman workspace list"}}),e._v(" "),t("img",{attrs:{src:a(285),alt:"screenshot of Postman create workspace dialog"}})]),e._v(" "),t("p",[e._v("Give the workspace a name ( e.g. MAD9124 ) and optional description to help you remember what it is for later, and then click the "),t("strong",[e._v("Create this workspace")]),e._v(" button. This will create and switch to the new empty workspace.")]),e._v(" "),t("h3",{attrs:{id:"collections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[e._v("#")]),e._v(" Collections")]),e._v(" "),t("p",[e._v("Within a workspace Postman has a "),t("strong",[e._v("Collections")]),e._v(" feature to help sub-divide your work. To continue the earlier analogy, collections are like drawers in the filing cabinet. I created a collection for each of the projects that we worked on during class. The left-hand column of the Postman workspace lists all of the collections.")]),e._v(" "),t("h4",{attrs:{id:"create-a-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-collection"}},[e._v("#")]),e._v(" Create a collection")]),e._v(" "),t("p",[e._v("Click the plus icon just below the word collections to create a new one.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(286),alt:"screenshot of Postman collections panel"}})]),e._v(" "),t("p",[t("img",{attrs:{src:a(287),alt:"screenshot of Postman create collection dialog"}})]),e._v(" "),t("p",[e._v("Give the collection a meaningful name. I usually name mine to match the GitHub project name. You can also setup some collection-wide configuration like "),t("strong",[e._v("variables")]),e._v(", or automated test scripts that should run either before or after every request.")]),e._v(" "),t("h3",{attrs:{id:"saving-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#saving-requests"}},[e._v("#")]),e._v(" Saving requests")]),e._v(" "),t("p",[e._v("As you are testing your web service API, it is a good idea to create a separate request tab for each route action. Then you can save those request tabs to your collection using the grey "),t("strong",[e._v("save")]),e._v(" button at the right of the send button. When saving, the default name is the URL (e.g. localhost:3030/api/pizzas). To make it easier to find what you are looking for, give it a more friendly name (e.g. Create a Pizza).")]),e._v(" "),t("p",[e._v("Postman also lets you create folders inside you collections to help keep things tidy. A good practice is to create a folder for each API resource (e.g. pizzas, or orders).")]),e._v(" "),t("p",[t("img",{attrs:{src:a(288),alt:"screenshot of Postman collection folders"}})]),e._v(" "),t("p",[e._v("Then the next time you need to test a particular route action, simply double click the saved request and all of the default body data and header information will already be set. Change whatever parameters are required for your test (e.g. a missing required property to check validation errors) and click the send button.")]),e._v(" "),t("h3",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),t("p",[e._v("One of the most error prone and time consuming things about testing a series of API requests is that we often need to copy data from the results of one request to the body or the header of another request. A good example is after running the login request, we need to copy the returned JWT into the "),t("strong",[e._v("Authorization")]),e._v(" header of every other API request.")]),e._v(" "),t("p",[e._v("Postman solves this problem with "),t("em",[e._v("variables")]),e._v(". We can create environment variables in each collection that can then be inserted into the request using the double braces syntax – sometimes called moustache syntax.")]),e._v(" "),t("h4",{attrs:{id:"create-a-new-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-environment"}},[e._v("#")]),e._v(" Create a new environment")]),e._v(" "),t("p",[e._v("Much like we can manage different environment variables for our node application, Postman lets us define one or more environments for our collections. Each environment can have different variable/value sets.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(289),alt:"screenshot of Postman environment buttons"}})]),e._v(" "),t("p",[e._v("In the top right corner, just above the send button, there is an environment drop-down menu. It will initially say "),t("em",[e._v("No Environment")]),e._v(". Clicking the "),t("strong",[e._v("gear icon")]),e._v(" to the right will bring up the "),t("strong",[e._v("Manage Environments")]),e._v(" panel where you can create a new one. I called mine "),t("strong",[e._v("PizzaShop-dev")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"create-a-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-variable"}},[e._v("#")]),e._v(" Create a variable")]),e._v(" "),t("p",[e._v("Once you have created your environment(s), they will appear in the list on the "),t("strong",[e._v("Manage Environments")]),e._v(" panel. Click on the name of your environment and then you should see a table to create or modify variables.")]),e._v(" "),t("p",[e._v("Create a variable called "),t("strong",[e._v("token")]),e._v(". You can leave the initial value blank.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(290),alt:"screenshot of Postman environment variables"}})]),e._v(" "),t("h4",{attrs:{id:"use-a-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-a-variable"}},[e._v("#")]),e._v(" Use a variable")]),e._v(" "),t("div",{pre:!0},[t("p",[e._v("We can then have Postman insert the value of a variable anywhere in the request tab by wrapping the variable name in double braces - e.g. "),t("code",[e._v("{{token}}")])]),e._v(" "),t("p",[e._v("To see how this works, send the login request and copy the returned token value into the "),t("strong",[e._v("current value")]),e._v(" column of the "),t("em",[e._v("token")]),e._v(" environment variable. Now update the "),t("em",[e._v("Authorization")]),e._v(" header of an API route (e.g. POST /api/ingredients) to have the value "),t("code",[e._v("Bearer {{token}}")]),e._v(".")])]),t("p",[e._v("When you click "),t("strong",[e._v("Send")]),e._v(", Postman will automatically insert the current value of the "),t("em",[e._v("token")]),e._v(" variable in the value of the "),t("em",[e._v("Authorization")]),e._v(" header. You can do this for ALL of your API routes that require the authentication token, and now when you login to create a new token you only have to copy the result one-time, to the variable. All other routes using the variable will just work!")]),e._v(" "),t("h4",{attrs:{id:"quick-look"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-look"}},[e._v("#")]),e._v(" Quick look")]),e._v(" "),t("p",[e._v("To quickly see or update the values of the current environment's variables, click on the "),t("strong",[e._v("eye icon")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:a(291),alt:"screenshot of Postman environment quick look"}})]),e._v(" "),t("h2",{attrs:{id:"exercise-12-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exercise-12-1"}},[e._v("#")]),e._v(" Exercise 12-1")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("THIS IS NOT REQUIRED FOR W20")]),e._v(" "),t("p",[e._v("This exercise is just for practice. There will be no grade assigned for this exercise in the W20 term.")])]),e._v(" "),t("div",{pre:!0},[t("p",[e._v("Setup a collection with at least two saved requests. One should have the "),t("em",[e._v("Authorization")]),e._v(" header set to "),t("code",[e._v("Bearer {{token}}")]),e._v(".\nCreate an environnement for your collection and create a "),t("em",[e._v("token")]),e._v(" variable.")])]),t("p",[e._v("Take a screenshot showing all of the above and submit it on Brightspace. Here is an example screenshot.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(292),alt:"screenshot of Postman exercise completion"}})]),e._v(" "),t("h2",{attrs:{id:"postman-testing-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postman-testing-scripts"}},[e._v("#")]),e._v(" Postman testing scripts")]),e._v(" "),t("p",[e._v("Postman also lets us write some "),t("a",{attrs:{href:"https://learning.postman.com/docs/postman/scripts/test-scripts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("automated testing with JavaScript"),t("OutboundLink")],1),e._v(". It exposes the "),t("a",{attrs:{href:"https://www.chaijs.com/api/bdd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chai BDD"),t("OutboundLink")],1),e._v(" testing syntax.")]),e._v(" "),t("p",[e._v("This can be tremendously powerful and we will look at this topic a bit more in week 14. But for now let's look at one trick to automatically capture the JWT after a successful login request and then set the value of the "),t("em",[e._v("token")]),e._v(" variable.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(293),alt:"screenshot of Postman tests"}})]),e._v(" "),t("p",[e._v("In the "),t("strong",[e._v("Tests")]),e._v(" tab of the login request (POST /auth/tokens) add this short JavaScript function.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("pm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Response data contains token'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Check if we really got a token")]),e._v("\n  pm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("have"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("jsonBody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'data.token'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Extract the token from the JSON body of the response")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" pm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Save the token in a collection variable")]),e._v("\n  pm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'token'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Now you can just send the login request (with valid email and password) and the "),t("em",[e._v("token")]),e._v(" variable will automatically be updated and you don't have to copy and paste the token ever again!")]),e._v(" "),t("h2",{attrs:{id:"for-next-week"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-next-week"}},[e._v("#")]),e._v(" For next week")]),e._v(" "),t("p",[e._v("Before next week's class, please read these additional online resources.")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://drive.google.com/file/d/1puV-awBU5uYvsMYITIk35cFAHAeFgDqU/view",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman Quick Reference Guide"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=pAD11I3k9q0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman mock servers"),t("OutboundLink")],1),e._v(" "),t("Badge",{attrs:{text:"video"}})],1)])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Assignment Reminder")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/deliverables/final.html"}},[e._v("Final project - GIFTR")]),e._v(" is due by "),t("strong",[e._v("5:00 pm April 17, 2020")]),e._v("."),t("br"),e._v("\nThis is the final deadline. There will be no extensions.")],1),e._v(" "),t("p",[e._v("Counts for 30% of your MAD9124 final grade.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);