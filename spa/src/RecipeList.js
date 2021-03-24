import { Link } from 'react-router-dom';
import { useContentful } from 'react-contentful';
import { recipeUrl, recipePhoto } from './recipeHelpers';

function RecipePreview({recipe}) {
  return (
    <div className="col-auto" style={{maxWidth: 500}}>
      <div className="card h-100 shadow-sm">
        <img src={recipePhoto(recipe)} />
        <div className="card-body">
          <p className="card-text lead">
            <Link to={recipeUrl(recipe)} className='stretched-link text-decoration-none text-reset'>
              {recipe.fields.title}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function List({recipes}) {
  return (
    <main>
      <div className="bg-white">
        <div className="py-5 text-center container">
          <h1 className="fw-light">Our Weekly Menu</h1>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row row-cols-2 justify-content-center g-5">
            {recipes.map((recipe) => <RecipePreview recipe={recipe} key={recipe.sys.id} />)}
          </div>
        </div>
      </div>
    </main>
  );
}

function RecipeList() {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'recipe',
    query: {
      select: 'fields.title,fields.photo'
     }
   });

  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Page does not exist.</p>;
  }

  return <List recipes={data.items} />;
}

export default RecipeList;