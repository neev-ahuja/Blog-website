import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { useNavigate } from "react-router-dom";
import 'draft-js/dist/Draft.css';

const NewBlog = ({blogs , setBlogs}) => {
    const navigate = useNavigate();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [searchState, setSearchState] = useState("");
    const [image, setImage] = useState("");

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
        setEditorState(newState);
        return 'handled';
        }
        return 'not-handled';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = editorState.getCurrentContent().getPlainText();
        (async ()=>{
        const response = await fetch('http://localhost:8000/api/blogs',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title : searchState , description: content , image : image})
        });
        console.log(response);
        })();
        setImage("");
        setSearchState("");
        setBlogs([...blogs , {title : searchState , description: content , image : image , time : new Date().toLocaleDateString() , _id : Math.random()}]);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
        <div className="inputs">
            <input type="text" className='title' placeholder='Title' value={searchState} onChange={(e) => setSearchState(e.target.value)} />
            <div>
                <button className='style-btn' type="button" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}>Bold</button>
                <button className='style-btn' type='button' onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))}>Italic</button>
                <button className='style-btn' type='button' onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))}>Underline</button>
                <button className='style-btn' type='button' onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'))}>Strikethrough</button>
                <div className="editor">
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                    placeholder='Write your blog content here...'
                />
                </div>
            </div>
            <input type="text" placeholder='Image Link' value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
            <div className="publish">
            <button type='submit'>Publish</button>
            </div>
        </div>
        </form>
    );
};

export default NewBlog;