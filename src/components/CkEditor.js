import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CkEditor() {
  const [value, setValue] = useState();
  const [showEditor, setShowEditor] = useState(false);

  const handleCk5change = (event, editor) => {
    const data = editor.getData();
    setValue(data);
    // setShowEditor(false);
  };

  const saveHandle = () => {
    console.log("This is data: ", value);
    setShowEditor(false);
    setValue("");
  };

  const cancleHandle = () => {
    setShowEditor(false);
    setValue("");
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          setShowEditor(true);
        }}
      >
        Add Log
      </button>
      <div>
        {showEditor && (
          <>
            <CKEditor
              config={
                {
                  //   extraPlugins: [uploadPlugin],
                }
              }
              editor={ClassicEditor}
              data={value ? value : ""}
              onReady={(editor) => {}}
              // onInit={(editor) => {}}
              onChange={handleCk5change}
            />

            <button onClick={saveHandle}>Save</button>
            <button onClick={cancleHandle}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}
