# Simple Web App Documentation

__Contents__

1. Instructions
2. Link to Deployed App
3. Planning
4. Technologies Used
5. Resources
6. Development Considerations

## 1. Instructions

To run this app locally:

1. Clone this repo
2. Run `bundle`
3. Run `bundle exec figaro install`
4. Add your api key configuration to the generated `config/application.yml` file; make sure to follow the same naming convention used in Api::PeopleController
5. Run `rails db:create`
6. `cd` into the client directory
7. Run `npm i`
8. Start the app with `foreman start -f Procfile.dev`!

## 2. Linked to Deployed App

## [Deployed App on Heroku](https://ef-simple-app.herokuapp.com/)

## 3. Planning

* My first step was analyzing the instructions and creating a [simple Trello board](https://trello.com/b/bZSh3t0U/simple-web-app). The user stories in this board reflected my general plan of constructing a React on Rails application; Rails would only handle making a secure API call, while React would handle manipulating and displaying the data.

* I spent a significant amount of time before writing actual code on researching topics I still felt unfamiliar with, including test-writing and React-related front-end frameworks.

## 4. Technologies Used

* Ruby on Rails
* HTTParty
* Figaro
* React.js
* Semantic UI React
* Jest
* Enzyme
* Axios

## 5. Resources

* [This tutorial](https://www.youtube.com/watch?v=7r4xVDI2vho) on testing with Jest was a great introduction. 
* [This StackOverflow Post](https://stackoverflow.com/questions/45904286/how-to-test-react-state-after-calling-a-component-method-that-updates-state-us) also helped me overcome an issue with my Jest tests.
* [Semantic UI React](https://react.semantic-ui.com/)'s documentation was very clear and easy to use.
* [Figaro](https://github.com/laserlemon/figaro)'s documentation also lent itself to easy implementation and deployment.

## Development Considerations

#### Struggles

* __I lost a signifcant chunk of time by approaching the API incorrectly.__ Perhaps due to a sense of urgency, I did not spend enough time initally reading the API's documentation, and started with a front-end-only attempt at a solution. That code can be viewed in [this repository](https://github.com/elfein/simple-web-app/tree/master). Fortunately, after realizing my mistake, restructuring my approach and successfully calling the API with authorization proceeded smoothly.

* __Testing is still an overall new concept for me, and I would have liked to include a test in the back-end given a slightly longer period of self-study.__

* __The app takes a significant amount of time to load the API's data.__ I considered this a tradeoff for overcoming a self-imposed challenge to include all accessible data, but definitely need to look into optimization techniques.

#### Successes

* __I feel satisfied with my implementation of Semantic UI React to create a simple, clean layout in a time-saving manner.__ Prior to this app, I had not focused on using front-end frameworks, so this exploration was reassuring.

* __I am also glad to have deepened my understanding of tests slightly;__ I was able to write a case that tested for correct sorting in my PeopleContainer.test.js file, which felt relatively complex at the time, as well as a number of other tests.

* __I met a personal goal of calling all 346 people entries from the API.__ After studying the documentation and relevant parameters, I made the necessary adjustments to enable successive calls to the API and parse the returned arrays of data.