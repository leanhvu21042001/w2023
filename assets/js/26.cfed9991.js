(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{403:function(t,e,i){"use strict";i.r(e);var a=i(14),l=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[e("span",{staticClass:"week"},[t._v("JWT Authentication")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"title"},[t._v("Assignment 3")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Due before our week 10 class.")]),t._v(" "),e("p",[t._v("Counts for 10% of your final grade.")])]),t._v(" "),e("h2",{attrs:{id:"the-brief"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brief"}},[t._v("#")]),t._v(" The brief")]),t._v(" "),e("p",[t._v("This is the third of three take home assignments related to building a backend web service to support a simple class list application called "),e("em",[t._v("cListR")]),t._v(".")]),t._v(" "),e("p",[t._v("In the previous assignments you built the base for the "),e("em",[t._v("cListR")]),t._v(" RESTful API using Node.js, the Express framework and MongoDB. For this assignment you will enhance that foundation with JWT based authentication.")]),t._v(" "),e("p",[t._v("In addition to correctly implementing all of the requirements from the previous assignment. The application will implement the following.")]),t._v(" "),e("h2",{attrs:{id:"core-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-requirements"}},[t._v("#")]),t._v(" Core Requirements")]),t._v(" "),e("ol",[e("li",[t._v("Create a new "),e("code",[t._v("/auth")]),t._v(" router module that will support")])]),t._v(" "),e("ul",[e("li",[t._v("creating new users")]),t._v(" "),e("li",[t._v("authenticating a user")]),t._v(" "),e("li",[t._v("retrieving the currently logged-in user")])]),t._v(" "),e("p",[t._v("Make sure to redact the user's password.")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("The user schema should have the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("512")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("70")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("isAdmin")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])])]),t._v(" "),e("li",[e("p",[t._v("All API routes for the "),e("em",[t._v("students")]),t._v(" and "),e("em",[t._v("courses")]),t._v(" resource paths should only be accessible to authenticated users.")])]),t._v(" "),e("li",[e("p",[t._v("All "),e("code",[t._v("POST")]),t._v(", "),e("code",[t._v("PUT")]),t._v(", "),e("code",[t._v("PATCH")]),t._v(", and "),e("code",[t._v("DELETE")]),t._v(" routes for both the "),e("em",[t._v("students")]),t._v(" and "),e("em",[t._v("courses")]),t._v(" resource paths should be limited to authenticated users with the "),e("code",[t._v("isAdmin")]),t._v(" flag set to true.")])]),t._v(" "),e("li",[e("p",[t._v("Record each login attempt in an "),e("code",[t._v("authentication_attempts")]),t._v(" collection in MongoDB. The properties of each attempt document should include:")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("username")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ipAddress")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("didSucceed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})])])]),t._v(" "),e("p",[e("strong",[t._v("DO NOT record the password or the JWT.")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Ensure that you write clean and readable code. Pay attention to:")])]),t._v(" "),e("ul",[e("li",[t._v("no runtime errors")]),t._v(" "),e("li",[t._v("consistent 2 space indentation")]),t._v(" "),e("li",[t._v("logical grouping of related code")]),t._v(" "),e("li",[t._v("semantically descriptive names for variables and functions")]),t._v(" "),e("li",[t._v("well organized project folder structure")]),t._v(" "),e("li",[t._v("properly formatted "),e("code",[t._v("package.json")]),t._v(" file\n"),e("ul",[e("li",[t._v("correct project name")]),t._v(" "),e("li",[t._v("your author details")])])])]),t._v(" "),e("h2",{attrs:{id:"logistics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logistics"}},[t._v("#")]),t._v(" Logistics")]),t._v(" "),e("ul",[e("li",[t._v("Accept this "),e("a",{attrs:{href:"https://classroom.github.com/a/gbskrhoq",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Classroom assignment"),e("OutboundLink")],1),t._v(" invitation.")]),t._v(" "),e("li",[t._v("Clone the repo to your laptop.")]),t._v(" "),e("li",[t._v("Build the project on your laptop.")]),t._v(" "),e("li",[t._v("Test each route with Postman.")]),t._v(" "),e("li",[t._v("Make git commits as you complete each requirement")]),t._v(" "),e("li",[t._v("When everything is complete, push the final commit back up to GitHub and submit the GitHub repo's URL on Brightspace.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("It is a good habit to make a git commit as you complete each logical requirement. This not only tracks your progress, but protects your working code in case you later break it and need to roll back.")])])])}),[],!1,null,null,null);e.default=l.exports}}]);