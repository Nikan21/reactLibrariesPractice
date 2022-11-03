This project is test task 

These are rules:
1)Deploy React app locally on PC.
2)Create two pages: Main (Home) and additional (Squares).
3)Main page structure:
    You need to create a page with a form containing the following fields:
        Name
        Phone number (should only be able to enter numbers)
        Gender(input radio)
        Favorite color (you must use select with a list of colors)
    All fields must be required to be filled in with the output of the corresponding errors. When you click on the submit button, the form should send a POST request with all the entered data.
    After a successful submission, the response to the request must be displayed in a separate block to the right of the form, and the form itself must be cleared.
4)Squares Page Structure:
    On page load, display 6 squares of random colors: the user should be able to select squares.
    If a square is selected, it has a red border.
    Add a submit button that checks that all blue squares are selected, if not all or not only blue squares are selected show an error message. If all are selected correctly show a message about it.
5)Display the logo and navigation menu in the site header. Implement the transition between pages using react-router-dom.
6)Place the completed task in the Git version control system (GitHub/GitLab).