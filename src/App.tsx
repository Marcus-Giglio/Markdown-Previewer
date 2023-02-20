import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Editor from './components/editor/Index';
import Previewer from './components/previewer/Index';
import { useState } from 'react';
import { defaultText } from './utils/const';

function App() {
  const [defaultValue, setDefaultValue] = useState<string>(defaultText);
  const [input, setInput] = useState<string>(defaultValue);
  const [showEditor, setShowEditor] = useState<boolean>(true);
  const [showPreviewer, setShowPreviewer] = useState<boolean>(true);

  const handleShowEditor = () => {
    setShowEditor(!showEditor);
  };

  const handleShowPreviewer = () => {
    setShowPreviewer(!showPreviewer);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {showEditor && (
          <div className="row my-3">
            <div className="col">
              <Editor
                onInput={setInput}
                defaultValue={setDefaultValue}
                defaultText={defaultText}
                showPreviewer={handleShowPreviewer}
              />
            </div>
          </div>
        )}

        {showPreviewer && (
          <div className={'row mb-3 ' + (!showEditor ? 'mt-3' : '')}>
            <div className="col">
              <Previewer inputValue={input} showEditor={handleShowEditor} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
