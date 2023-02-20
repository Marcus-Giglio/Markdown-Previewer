import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowsAlt,
  faDownLeftAndUpRightToCenter,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type Props = {
  onInput: (value: string) => void;
  defaultValue: (value: string) => void;
  defaultText: string;

  showPreviewer: () => void;
};

const Editor = (props: Props) => {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    props.onInput(e.currentTarget.value);
  };

  const [style, setStyle] = useState<boolean>(true);

  const handleStyle = () => {
    setStyle(!style);
  };

  return (
    <>
      <div className="row">
        <div className="col-10 col-md-8 col-lg-6 mx-auto">
          <div className="toolbar p-1 border-bottom-0 d-flex flex-row align-items-center">
            <FontAwesomeIcon icon={faFreeCodeCamp} className="ms-1 me-2" />
            Editor
            <FontAwesomeIcon
              icon={style ? faArrowsAlt : faDownLeftAndUpRightToCenter}
              className="ms-auto me-2"
              onClick={() => {
                handleStyle(), props.showPreviewer();
              }}
              style={style ? { rotate: '45deg' } : { rotate: '0deg' }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-8 col-lg-6 mx-auto">
          <textarea
            onInput={(e) => handleInput(e)}
            className="editor w-100 p-1"
            defaultValue={props.defaultText}
            style={
              style
                ? { minHeight: '200px', resize: 'vertical' }
                : { minHeight: '95vh', resize: 'none' }
            }
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Editor;
