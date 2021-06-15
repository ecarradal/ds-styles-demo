import Button from "./components/Button/Button";

function App() {
  return (
    <div className="fx-container fx-center">
      <div className="fx-center grid">
        <h3 className="tx-green">Headline 3</h3>
        <p className="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          veritatis perferendis est molestias sequi quibusdam! Commodi tempora
          consequuntur magnam quia suscipit cum sed itaque qui doloribus!
          Incidunt voluptate provident soluta!
        </p>
        <br />
        <Button type={"primary"} text={"primary"} />
      </div>
      <div className="fx-center grid">
        <h3 className="tx-green">Headline 3</h3>
        <p className="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          veritatis perferendis est molestias sequi quibusdam! Commodi tempora
          consequuntur magnam quia suscipit cum sed itaque qui doloribus!
          Incidunt voluptate provident soluta!
        </p>
        <br />
        <Button type={"secondary"} text={"secondary"} />
      </div>
    </div>
  );
}

export default App;
