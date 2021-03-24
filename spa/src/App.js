import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import './App.css';
import RecipeList from './RecipeList';
import RecipeView from './RecipeView';

const contentfulClient = new ContentfulClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

function App() {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Router>
        <Switch>
          <Route path="/:id-:slug" component={RecipeView} />
          <Route path="/" component={RecipeList} />
        </Switch>
      </Router>
    </ContentfulProvider>
  );
}

export default App;
