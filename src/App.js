import logo from "./logo.svg";
import "./style/App.css";
import { useQuery, gql } from "@apollo/client";
import { CardWrapper, Card, Details, Img } from "./style/style";
const GET_LAUNCHES = gql`
  query GetLaunches {
    missions {
      name
      description
      website
    }
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
        flickr_images
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>Ops error..</p>;
  }
  return (
    <div className="App">
      <h1>Space X</h1>
      <h3>GraphQL</h3>
      <CardWrapper>
        {data.launches.map((launch) => (
          <Card>
            <p>Date: {launch.launch_date_utc}</p>
            <h>Rocket Name: {launch.rocket.rocket_name}</h>
            <Details>Details: {launch.details}</Details>
            <Img src={launch.links.flickr_images}></Img>
            <a>link:{launch.links.video_link}</a>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
}

export default App;
