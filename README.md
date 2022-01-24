# Comments Feed

## Description
This application takes a name and a comment and posts a comment to the page.  This includes a tag at the bottom of each comment to indicate who make the comment along with the data and time that the comment was made.

## User Story
```
AS AN a person that enjoys putting their thoughts in digital form on the internet, 
I WANT to be able to post a comment and see the content of the comment on the page.
SO that I express my thoughts on the internet.

AS AN person that likes to see me previous thoughts,
I WANT to be able to view all my comments and other people's comments on the page,
SO that I can panter back and forth with strangers on the internet.
```

## Acceptance Criteria
```
GIVEN an application
WHEN I load the page,
THEN I can see all the comments that have been posted on the page.
WHEN I click the button "submit comment",
THEN the content of the comment is posted to the application with date on the writer and time of posting in the footer of the comment.
WHEN I leave the page and return,
THEN all the comments persist on the page.

```

## Technologies
This application is written in HTML, CSS, and JavaScript.  It uses bootstrap for the form components.  It also uses the following JavaScript packages: Express, Sqlite3, and Jest for testing.

## Future Development
For future development, I would like to do the following:

* Add a delete button on each comment to remove them.  Make sure to ask the user if they are sure they want to delete the comment

* Add an edit button for each comment to change the content of the message only.  This can also modify the date on the comment.

* Add a delete all button near the top of the page.  Again make sure to ask the user if they are sure they want to remove all comments.  This can take advantage of the given 
delete route.

* Add a footer to give credit to the developer :)

* If more content were to be added, I would implement React to handle components, state, etc..

* Implement real-time updating without refreshing the page.

* Filtering to find comments by a specific user

* Filtering to find comments by a created date.

* Make the page look a little prettier with some fancy CSS :)

* Finish a jest test for the creation of a comment.

## Review
To review the code, please go to the [Repository](https://github.com/jstndhouk/CommentsPage).

## Deploy
With some changes to the file directory, I could deploy this to GitHub pages.  I kept the directory as is.

## Mock-Up
To review a demo of my application,  click the following link: [Comment Feed Demo](https://watch.screencastify.com/v/25054irdEjL9I3f9RWHo).
