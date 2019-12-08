
This website was intended to be a simple react exercise, but I took the opportunity to make something fun. I will be explaining both its use as well as how the code is architected and why.

This website is, most simply explained, a place to read about and hopefully learn something about some interesting birds. Ideally, there would be many filters and individual pieces of information, so that people could really learn about the birds described. For now, however, it serves as a good place to learn some fun facts, maybe pique someone's interest in birds, and perhaps give some insight into me and my preferences.
The inspiration for the design came from the game Wingspan, where each card contains a different bird as well as some information on what it can do in the game, reminicent of flash cards. As I am trying to pass on information, the form of flashcards seemed like a fitting and intuitive form to base off of.
After many iterations of sketches and brief surveys, people seemed to gravitate towards the design I used in the final website. People seemed to like the playing-card shape and large image or the design.

There are filters included for birds that look weird, act weird, and my favorite birds of those shown (for fun). These filters can be used in any combination. This is also true of the sorting functions, of which there are two (though only one can be used at a time) - my recommended order, and sorted by wingspan (as a nod to the game that brought about the idea).

## Running the App
Running the app locally is very easy, simply navigate to the top-level directory and run the following:
`
npm install -g serve (if you don't already have it installed)
serve -s build
`

The app should now be running at localhost:5000.

If you are having issues with serving the website, try running 
`npm run build`
in the top-level directory and then retry
`
npm install -g serve (if you don't already have it installed)
serve -s build
`

## Architecture

The architecture of this website is a little messy, but necessarily so as this was an exercise in react and local state. The app is rooted in the App component, mostly because I was trying to minimize the amount of parameter passing between components. Outside of basic text, App contains two components, SortAndFilter and CardList.

SortAndFilter handles all changes to selected filters and the selected sort function. It receives only the object identifying which filters are active and a pair of eventhandlers from App. In its state it holds all changes to filter selection and sort functionality until the user presses submit, at which point selected filters and sort are passed to the App component via eventhandlers passed from the App component. This means that every click a user makes on one of the filter buttons or selections in the sort dropdown change the state of SortAndFilter.

CardList is a bit more complicated. App contains the full list of birds referenced anywhere in the app, which it passes to CardList, as well as the object identifying active and inactive filters, and an indicator for which sort function to use. CardList uses this information to actually generate a list of relevant birds given the active filters and sort that list into the correct order based on the selected sort method, the result of which is stored in CardList's state. This means that user-selection and submission of a filter indirectly causes a change in state in CardList because of how props are passed from App. Because CardList relies on props from App to change the data it displays, I use componentDidMount() to trigger updates at the appropriate times. CardList then creates a Card component for every bird in this filtered and sorted list.

The Card component is largely a place to write out a lot of the relevant HTML to display the bird information cards. However; it has one very important function. Card checks and reorders the tags (the same as filters) on each bird card based on what filters are currently active. This allows me to put active filters at the beginning of the list of each bird card. Every submitted user change to the active filters causes a change in the state of many Card objects because Card stores the order that tags should be shown, something that changes with every update to the filters.

Finally, there is the CardTag component, which simply takes the list of currently active filters and produces relevant tags in the correct colors (activated filters show light blue on the relevant cards), so that users can identify why certain birds are showing at any given time.














This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.