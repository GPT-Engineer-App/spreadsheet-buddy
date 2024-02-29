# spreadsheet-buddy

**Objective:** Develop a web-based grid editor for a dataframe object that mimics the functionality of a spreadsheet. This editor must be intuitive for users migrating from Google Sheets, support various field types with appropriate formatting, and be optimized for mobile devices.

**Key Features:**

1. **Seamless Copy/Pasting:** Ensure users can copy and paste content directly from Google Sheets without any loss of data or formatting. This includes handling complex data types and maintaining the integrity of formulas where applicable.

2. **Field Types and Formatting:** Each column should allow for a specific field type to be assigned, including but not limited to currency and date. The formatting of the data displayed in these columns should automatically adjust based on the field type selected. For example, currency fields should align right and display two decimal places, while dates should follow a consistent format such as DD/MM/YYYY.

3. **Mobile Optimization:** The editor must be responsive, providing a seamless experience on mobile devices. This includes touch-friendly interfaces, easy scrolling, and efficient data entry.

4. **Sample Data:** Populate the grid with sample data from a stock trader's ledger, including columns for date, stock symbol, transaction type (buy/sell), quantity, price per share, and total transaction amount. Ensure the sample data showcases the utility of the field types and formatting options.

**Technical Requirements:**

- Use modern web technologies (HTML5, CSS3, JavaScript) with a framework like React or Vue for the frontend.
- Consider using a lightweight backend or serverless architecture for saving and retrieving data, with Firebase or AWS Lambda as potential options.
- Ensure cross-browser compatibility and test extensively on both Android and iOS devices.

**Deliverables:**

- A functional prototype hosted on a platform like GitHub Pages or Netlify.
- Source code repository with clear documentation on setup, dependencies, and deployment instructions.
- A brief user guide describing how to use the editor, including how to copy/paste from Google Sheets and adjust field types.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/spreadsheet-buddy.git
cd spreadsheet-buddy
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
