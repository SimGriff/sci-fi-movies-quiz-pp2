# Sci-Fi Movies Quiz

/*Screenshot of mockup*/

View the deployed site here: https://simgriff.github.io/sci-fi-movies-quiz-pp2/

## Introduction
The Sci-Fi movies Quiz game is a multiple choice quiz that tests the user’s knowledge of science fiction movies. The aim of the website was to build a fun, responsive quiz using JavaScript. It is designed to be responsive and accessible on a range of devices, ensuring that it leads to an engaging user experience. 

Images of Mobile, Tablet, Desktop skins for site here.

## User Experience (UX)
* User Stories 

  * First Time Visitor Goals
    1. As a user I would like to play the quiz.
    2. As a user I want the quiz to be easy to navigate.
    3. As a user I would like to know if my answer is correct or not.    
    4. As a user I would like to view my progress and know how many questions there are.
    5. As a user I would like to view my overall score at the end of the quiz.

  * Returning Visitor Goals
    1. As a Returning Visitor, I want to try to beat my previous score.
    
  * Frequent User Goals
    1. As a Frequent User, I want to add to my existing knowledge of the subject by improving my score.
    2. As a Frequent User, I would like to adjust the difficulty of the questions. (This could be under Future Features).

* Design

  * Colour Scheme
    1. All main text for the quiz is white #ffffff as it stands out against the background image, a semi-transparent box contains the quiz itself using rgba (3, 18, 114, 0.3) overlapping the dark background image, ensuring clear readability. 
    2. All text within the buttons is black (#000000), which  contrast against the light neutral background color. With mouseover the border is highlighted with a 3px #ffffff white. On selection the answer buttons change to a semi-transparent green or red with the dark text standing out well against the background. All text passed on the contrast checker on the [Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) ensuring excellent readability. 

![contrast checker for neutral buttons,black text on grey button](docs/screenshots/contrast-checker-neutral-buttons.png)
![contrast checker for green buttons,black text on green button](docs/screenshots/contrast-checker-green-buttons.png)
![contrast checker for red buttons,black text on red button](docs/screenshots/contrast-checker-red-buttons.png)

  * Typography
    1. The Nova Square font from [Google Fonts](https://fonts.google.com/) is the main font used throughout the Quiz with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. The futuristic appearance of the font was chosen as it perfectly matched the science fiction subject matter.
    
* Imagery
    1. The main background image is designed to attract new users to the Quiz with its other worldly image.
    2. The main background image used for the quiz is from [pixabay](https://pixabay.com/) with a Free to use license.

## Wireframes
The wireframes for the Sci-Fi Movies Quiz were produced using Balsamiq. 
* Mobile Wireframes:
  - [Start Page](docs/wireframes/start-page-mobile.png)
  - [Questions Page](docs/wireframes/questions-page-mobile.png)
  - [Score Page](docs/wireframes/score-page-mobile.png)

  
* Desktop Wireframes:
  - [Start Page](docs/wireframes/start-page-desktop.png)
  - [Questions Page](docs/wireframes/questions-page-desktop.png)
  - [Score Page](docs/wireframes/score-page-desktop.png)

## Features

The Sci-Fi Movies Quiz is made up of 3 main sections, the Start Page, Questions and Answers Page and finally, the Results Page.

### Start page

![Screenshot of background image of alien planet](docs/screenshots/screenshot-background-image.png) 

The start page invites the user to begin the game. The background image draws the users attention with the eye catching image displaying a sci fi theme. This immediately conveys the subject of the site.

![Screenshot of start screen with start button](docs/screenshots/screenshot-start-page.png) 

The title of the quiz is displayed prominantly at the top center of the page in the selected Nova Square font with an added dark shadow to draw the users attention.
When the user clicks on the Start Button, they are taken to the question and answers screen. The white text and the same background image, with transparent overlay box, along with the main quiz heading are used on all three pages and provide continuity throughout the quiz pages.

### Questions and Answers Page 

![Screenshot of Questions and Answers Page](docs/screenshots/screenshot-questions-page1.png) 

This page provides a single question and multiple choice options for the answer with four answer buttons. 
On click of the mouse the user makes their selection by selecting one of the answer buttons, on mouseover the border of the answer button is highlighted white. On selection of an answer the user is then provided with instant feedback that informs them if the answer is correct or not.  This is shown with the selected button turning green for correct or red for incorrect.

![Screenshot of Selected Button highlighted green](docs/screenshots/screenshot-questions-page-answer.png) 

The user is then presented with the next button underneath the answers that allows them to proceed to the next question.
The users progress through the game is also displayed towards the bottom of the screen, e.g. Question 1 of 10, notifying the user what question they are on and the total number of questions in the quiz.

### Results Page
![Screenshot of Results Page](docs/screenshots/screenshot-results-page.png) 

For the final screen, the user's score is provided with a message and a restart button inviting the user to try the quiz again.

## Future Features

* Additional levels of difficulty, easy, average, hard to challenge the user's knowledge.
* Additional categories including Sci-Fi TV questions, Sci Fi Literature etc.
* Sound - Audio feedback on button presses, incorrect/correct answers.

## Technologies Used

### Languages Used

* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries & Programs Used

* [Balsamiq:](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process.

* [Google Fonts:](https://fonts.google.com/)
Google fonts were used to import the ‘Oswald’ and ‘Roboto’' fonts into the style.css file which is used on all pages throughout the project.

* [Font Awesome:](https://fontawesome.com/)
Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

* [Git:](https://git-scm.com/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

* [GitHub:](https://github.com/)
Github was used to host and deploy the website.

## Testing

## Deployment

### GitHub Pages

* The project was deployed to GitHub Pages using the following steps:

1.	Log in to GitHub and locate the GitHub Repository
2.	At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3.	Scroll down the Settings page until you locate the "GitHub Pages" Section.
4.	Under "Source", click the dropdown called "None" and select "Main Branch".
5.	The page will automatically refresh.
6.	Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

* Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:
1.	Log in to GitHub and locate the GitHub Repository
2.	At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3.	You should now have a copy of the original repository in your GitHub account.

* Making a Local Clone

1.	Log in to GitHub and locate the GitHub Repository
2.	Under the repository name, click "Clone or download".
3.	To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4.	Open Git Bash
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied in Step 3.

$ git clone https://github.com/SimGriff/dragon-karate-academy-pp1

7.	Press Enter. Your local clone will be created.

$ git clone https://github.com/SimGriff/dragon-karate-academy-pp1
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
Click [Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.