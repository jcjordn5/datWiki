datWiki

This is a basic wiki application that uses mongoose, ejs, express, and is hosted on heroku.

Mongoose listens to the database collecting users and articles, express establishes the routes that makes CRUD possible and the creation and logging in of users, and els makes it possible to display all articles with only one HTML page dedicated to displaying articles.

One of the trickiest parts of the project was managing Timestamps or more specifically, having the edit route post a new timestamp in the updated field 

Articles are sorted out in an elegant accordion that will scale easily into a mobile view and the article page itself was designed with this in mind as well.

Beyond the basic implementation, articles can be formatted into Markdown format and css media inquires were employed to optimize article views for print.

The other things I wanted to do but couldn’t accomplish were to successfully implement bcrypt so that user passwords would become indecipherable when saved in the user database and make a title overlay with a checkbox so that on click it would transform into a header (similar effect to what I did in TicTacToe but without jquery).