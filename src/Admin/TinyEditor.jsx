import React, { useEffect, useRef, useState } from "react";

const TinyEditor = ({ editorContent, setEditorContent, onPreview }) => {
  const editorRef = useRef(null);
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !editorLoaded) {
      const script = document.createElement("script");
      // script.src = "https://cdn.tiny.cloud/1/YOUR_API_KEY/tinymce/6/tinymce.min.js";
      script.referrerPolicy = "origin";
      script.onload = () => {
        setEditorLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, [editorLoaded]);

  useEffect(() => {
    if (editorLoaded && window.tinymce) {
      window.tinymce.init({
        selector: `#editor-${Math.random().toString(36).substring(7)}`,
        plugins: "link lists image code preview",
        toolbar:
          "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code preview",
        setup: (editor) => {
          editor.on("change", () => {
            const content = editor.getContent();
            setEditorContent(content);
          });
        },
        init_instance_callback: (editor) => {
          editor.setContent(editorContent);
        },
      });
    }

    return () => {
      if (window.tinymce) {
        window.tinymce.remove(
          `#editor-${Math.random().toString(36).substring(7)}`
        );
      }
    };
  }, [editorLoaded, editorContent, setEditorContent]);

  return (
    <div className="border border-gray-300 rounded-md">
      <textarea
        id={`editor-${Math.random().toString(36).substring(7)}`}
        ref={editorRef}
        defaultValue={editorContent}
      />
    </div>
  );
};

export default TinyEditor;
