# journal-app
A tiny journal app built with Google App Scripts.

This is a tiny app that is useful for friends/couples to log their daily activities.

The app uses an excel sheet in your Google Drive instead of a MySQL database to store your data. Any data submitted will be written into the excel sheet and can be opened through GoogleDocs. 

The "code.gs" and "output.html" file goes into your Google App Script project. "Code.gs" written in Google App Script(JavaScript) acts as the server, taking in the submitted form data through a POST function. The index.html can be hosted on any server or mobile app, to post data to the Google App Script app (which acts as the server).
