# Deployed

Page deployed and can be accessed through https://

# Features

- Display data
- Sort by date, name, status, supplier
- Filter on supplier, status
- Search for name with any substring (begining, middle, end)
- All Sidebar tags selectable
- Checkbox in table and can be selected/unselected by clicking on row or checkbox
- Pagination for every 8 records
- Checked Records don't change accross pagination, filter, sorting, searching unless unselected
- Can enforce filtering by supplier, filtering by status, searching and sorting on dataset simultaneously

# Notes

These are the featrues I could finish in the given time. I tried to give a complete user experience with almost all clickable items. Did not have time to test the quaity of responsiveness across several pc screens. Task took 5 days to implement working around 6 hours each day.

Some assuptions were made randomly per my understanding of the UI/UX like:

- ID will be resieved from BE as a number but will add the # when rendering.
- Supplier has only 4 enum options (Amazon, Ebay, Macy's, Craglist)
- Status has only 2 enum options (confirmed, pending_confirmation)
- Default data sort is by date (newest - oldeset)
- Sorting always ascending for String
- Pagination shows number/order of records displayed and total
- BE response data schema will not change
- Page is intended for PC screen/large screen not phone
- Some features are static for the sake of delivering on time and can be easily converted to dynamic
- Some styling of imported components is overriden forcefully because these components are not used anywhere else in the page

# Conventions

- Page is integrated in independent file in Pages Folder
- Page is divided into components which might then be divided to subcomponents
- All components are in Components Folder
- Each component or group of subcomponents have their own css file
- css files can be found in StyleSheets Folder
- Images are downloaded from Figma and can be found in Images Folder

# Available Scripts

In the project directory, you can run:

# `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
