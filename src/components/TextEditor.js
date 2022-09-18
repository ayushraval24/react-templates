import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
// import "./TextEditors.scss";

export default function TextEditor() {
  const [contentEditor, setContentEditor] = useState();
  const handleEditorChange = (content, editor) => {
    setContentEditor(content);
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/posts", {
        body: contentEditor,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="container">
      <div className="mt-5">
        <Editor
          apiKey="5w0ir8k2b6c9y5k3xrngkoskhxhvw6bm7y5qyfo6z8tlce6c"
          cloudChannel="dev"
          init={{
            selector: "textarea",
            plugins: "link image textpattern lists textcolor colorpicker",
            file_picker_types: "image",
            images_upload_url: "http://localhost:5000/images",
            images_upload_handler: function (blobInfo, success, failure) {
              setTimeout(function () {
                /* no matter what you upload, we will turn it into TinyMCE logo :)*/
                console.log("Blob information: ", blobInfo);
                success("");
              }, 2000);
            },
            toolbar:
              "undo redo | styleselect | fontselect | fontsizeselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code forecolor backcolor",
            content_style:
              "@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); body { font-family: 'Montserrat', sans-serif; font-size: 14px; }",
            fontsize_formats:
              "8px 9px 10px 11px 12px 13px 14px 15px 16px 18px 19px 20px 22px 24px",
            font_formats:
              "Montserrat sans-serif='Montserrat', sans-serif, Andale Mono=andale mono,times; Georgia=georgia,palatino; Helvetica=helvetica; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
          }}
          value={contentEditor}
          onEditorChange={handleEditorChange}
        />
        <button type="submit" onClick={handleSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
}
