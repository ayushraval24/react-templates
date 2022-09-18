import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./custom.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class ReactStrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleCk5change = (event, editor) => {
    const data = editor.getData();
    this.setState({
      value: data,
    });
  };

  submitHandler = (event) => {
    console.log("This is final data: ", this.state.value);
    this.toggle();
  };

  render() {
    function uploadAdapter(loader) {
      return {
        upload: () => {
          return console.log("Working");
          //   return new Promise((resolve, reject) => {
          //     const body = new FormData();
          //     loader.file.then((file) => {
          //       body.append("photo", file);
          //       //fetch(`http://3.132.219.157:8000/bshift/api/editorimage`, {
          //       fetch(
          //         `https://admin.thebusinessshifts.com/bshift/api/editorimage`,
          //         {
          //           method: "post",
          //           body: body,
          //         }
          //       )
          //         .then((res) => res.json())
          //         .then((res) => {
          //           resolve({
          //             default: `${res.image}`,
          //           });
          //         })
          //         .catch((err) => {
          //           reject(err);
          //         });
          //     });
          //   });
        },
      };
    }

    function uploadPlugin(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
      };
    }

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <CKEditor
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                editor={ClassicEditor}
                data={this.state.value ? this.state.value : ""}
                onReady={(editor) => {}}
                // onInit={(editor) => {}}
                onChange={this.handleCk5change}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitHandler}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReactStrapModal;
