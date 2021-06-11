import Button from "./components/Button/Button";
import ParagraphContainer from "./components/ParagraphContainer/ParagraphContainer";

const dummyBody = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullamveritatis perferendis est molestias sequi quibusdam! Commodi tempora consequuntur magnam quia suscipit cum sed itaque qui doloribus!Incidunt voluptate provident soluta!'

function App() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 w-screen justify-items-center">
      <ParagraphContainer body={dummyBody} headline={"Headline 3"} footer={<Button type={"primary"} text={"primary"} />} />
      <ParagraphContainer body={dummyBody} headline={"Headline 3"} footer={<Button type={"secondary"} text={"secondary"} />} />
    </div>
  );
}

export default App;
