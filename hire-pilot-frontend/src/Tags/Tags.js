import React, {useState} from 'react';
import { TagInput } from 'react-tag-input';
import { WithContext as ReactTags } from 'react-tag-input';

import { COUNTRIES } from './countries';
import './Tags.css';


const suggestions = COUNTRIES.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
export default function Tags() {
    const [tags, setTags] = useState([]);
    const [tagdegree, setTagdegree] = useState([]);
    const [taglanguage, setTaglanguage] = useState([]);

  
    const handleDelete = (i, type) => {
      if (type === 'skill') {
        setTags(tags.filter((tag, index) => index !== i));
      } else if (type === 'degree') {
        setTagdegree(tagdegree.filter((tag, index) => index !== i));
      }
      else if (type === 'language') {
        setTaglanguage(taglanguage.filter((tag, index) => index !== i));
      }
    };
    const handleAddition = tag => {
      setTags([...tags, tag]);
    };
  
    const handleDrag = (tag, currPos, newPos) => {
      const newTags = tags.slice();
  
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
  
      // re-render
      setTags(newTags);
    };
  
    const handleTagClick = index => {
      console.log('The tag at index ' + index + ' was clicked');
    };
    const CustomInput = ({onChange, ...rest}) => (
      <input
        style={{height: '5em'}} 
        onChange={onChange}
        {...rest}
      />)
  
    return (
      <div className="app">
        <h1> React Tags Example </h1>
        <div>
          
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            suggestionsPortalHost={CustomInput}
  inputComponent={CustomInput}
  suggestionsPortalZIndex={10}
            autocomplete
          />
        </div>
      </div>
    );
  }


// function Tags() {
//   return (
//     <div>Tags</div>
//   )
// }

// export default Tags;