import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowsAlt,
  faDownLeftAndUpRightToCenter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'marked-react';
import { useState } from 'react';

type Props = {
  inputValue: string;
  showEditor: () => void;
};

const Previewer = (props: Props) => {
  const [style, setStyle] = useState<boolean>(true);

  const handleStyle = () => {
    setStyle(!style);
  };
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="toolbar p-1 position-relative border-bottom-0 d-flex flex-row align-items-center">
            <FontAwesomeIcon icon={faFreeCodeCamp} className="ms-1 me-2" />
            Previewer
            <FontAwesomeIcon
              icon={style ? faArrowsAlt : faDownLeftAndUpRightToCenter}
              className="ms-auto me-2"
              onClick={() => {
                handleStyle(), props.showEditor();
              }}
              style={style ? { rotate: '45deg' } : { rotate: '0deg' }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="preview w-100 p-4">
            <Markdown breaks gfm value={props.inputValue} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Previewer;
