import "./App.css";
import { ScrollBar } from "./components/scroll-bar";
// import { TreeView } from "./components/tree-view";
// import menus from "./components/tree-view/data";
// import { LoadProduct } from "./components/load-more-products";
// import { ImageSlider } from "./components/image-slider";
// import { StarRating } from "./components/start-rating";
// import { Accordian } from "./components/Accordian/Accordian.jsx";
// import { RandomColor } from "./components/Random Color/Random-color.jsx";

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating numOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadProduct />
      <TreeView menuData={menus} /> */}

      <ScrollBar url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
