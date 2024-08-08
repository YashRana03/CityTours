// importing components and data
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";
import data from "./data";

// App component
function App() {
  // iterating over the data array and tranforming each tour data into a tour component
  // that is then stored in a new array at the same index
  const tourComponents = data.map((tour) => {
    return <Tour key={tour.id} info={tour} />;
  });

  return (
    <>
      <Navbar />
      {tourComponents} {/* Rendering all the tours components in the array */}
    </>
  );
}

export default App;
