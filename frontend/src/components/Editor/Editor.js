import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './Editor.module.css';
const CustomEditor = () => {
  return (
    <div className={styles.editor}>
      <Editor />
    </div>
  );
};

export default CustomEditor;
