import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContentful } from 'react-contentful';
import { recipePhoto, recipeChef, recipeDesc, recipeTags } from './recipeHelpers';


function RecipeView() {
  let { id } = useParams();
  const { data, error, fetched, loading } = useContentful({
    id: id
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

  return (
    <main>
      <div className="bg-white">
        <div className="py-5 container">
          <h1 className="fw-light">
            <Link to='/' className='text-reset'>
              All Weekly Recipes
            </Link>
          </h1>
        </div>
      </div>

      <div className="py-5 container marketing">
        <div className="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">{data.fields.title}</h2>
            <h3 className="text-muted">{recipeChef(data)}</h3>
            <div className="lead py-5">{recipeDesc(data)}</div>
            <div className="fs-4">
              {recipeTags(data).map((tag) => <span key={tag} className="badge bg-secondary">{tag}</span>)}
            </div>
          </div>
          <div className="col-md-5">
            <img src={recipePhoto(data)} className="featurette-image img-fluid mx-auto" width="600" />
          </div>
        </div>
      </div>  
    </main>
  );
}

export default RecipeView;
