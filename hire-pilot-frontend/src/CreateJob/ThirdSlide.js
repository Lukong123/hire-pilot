import React, { useState } from 'react';
import './CreateJob.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { SKILLS } from './skills';
import { DEGREES } from './degree';
import { LANGUAGES } from './languages';

const suggestions_skills = SKILLS.map(skills => {
  return {
    id: skills,
    text: skills
  };
});

const suggestions_degrees = DEGREES.map(degree => {
  return {
    id: degree,
    text: degree
  };
});

const suggestions_languages = LANGUAGES.map(language => {
  return {
    id: language,
    text: language
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function ThirdSlide({ formData, setFormData }) {
  const [tagsSkills, setTagsSkills] = useState([]);
  const [tagsDegrees, setTagsDegrees] = useState([]);
  const [tagsLanguages, setTagsLanguages] = useState([]);
  const [tagList, setTagList] = useState([]);

  const handleAddition = (tag, type) => {
    if (type === 'skill') {
      const newTags = [...tagsSkills, tag];
      setTagsSkills(newTags);
      setFormData({ ...formData, skills: newTags.map(tag => tag.text) });
    } else if (type === 'degree') {
      const newTags = [...tagsDegrees, tag];
      setTagsDegrees(newTags);
      setFormData({ ...formData, degrees: newTags.map(tag => tag.text) });
    } else if (type === 'language') {
      const newTags = [...tagsLanguages, tag];
      setTagsLanguages(newTags);
      setFormData({ ...formData, language: newTags.map(tag => tag.text) });
    }
  };
  
  const handleDelete = (i, type) => {
    if (type === 'skill') {
      const newTags = [...tagsSkills];
      newTags.splice(i, 1);
      setTagsSkills(newTags);
      setFormData({ ...formData, skills: newTags.map(tag => tag.text) });
    } else if (type === 'degree') {
      const newTags = [...tagsDegrees];
      newTags.splice(i, 1);
      setTagsDegrees(newTags);
      setFormData({ ...formData, degrees: newTags.map(tag => tag.text) });
    } else if (type === 'language') {
      const newTags = [...tagsLanguages];
      newTags.splice(i, 1);
      setTagsLanguages(newTags);
      setFormData({ ...formData, language: newTags.map(tag => tag.text) });
    }
  };

  const handleDrag = (tag, currPos, newPos) => {
    let newTags = [];

    if (tag.type === 'skill') {
      newTags = tagsSkills.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTagsSkills(newTags);
    } else if (tag.type === 'degree') {
      newTags = tagsDegrees.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTagsDegrees(newTags);
    } else if (tag.type === 'language') {
      newTags = tagsLanguages.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTagsLanguages(newTags);
    }
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const CustomInput = ({ onChange, ...rest }) => (
    <input style={{ height: '5em' }} onChange={onChange} {...rest} />
  );

  return (
    <div className='containerapply thirdd'>
      <form id='Form3'>
        <h3>System Information</h3>
        <ReactTags
          tags={tagsSkills}
          suggestions={suggestions_skills}
          delimiters={delimiters}
          placeholder='Add skills...'
          handleDelete={i => handleDelete(i, 'skill')}
          handleAddition={tag => handleAddition(tag, 'skill')}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition='bottom'
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          suggestionsPortalZIndex={10}
          autocomplete
          value={formData.skills}
          onChange={event =>
            setFormData({ ...formData, skills: event.target.value })
          }
        />
        {/* <ReactTags
          tags={tagsDegrees}
          suggestions={suggestions_degrees}
          delimiters={delimiters}
          placeholder='Add degrees...'
          handleDelete={i => handleDelete(i, 'degree')}
          handleAddition={tag => handleAddition(tag, 'degree')}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition='bottom'
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          suggestionsPortalZIndex={10}
          autocomplete
          value={formData.degree}
          onChange={event =>
            setFormData({ ...formData, degree: event.target.value })
          }
          
        />
        <ReactTags
          tags={tagsLanguages}
          suggestions={suggestions_languages}
          delimiters={delimiters}
          placeholder='Add languages...'
          handleDelete={i => handleDelete(i, 'language')}
          handleAddition={tag => handleAddition(tag, 'language')}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition='bottom'
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          suggestionsPortalZIndex={10}
          autocomplete
          value={formData.language}
          onChange={event =>
            setFormData({ ...formData, language: event.target.value })}
        /> */}

        <select
          className='selectJob'
          name='jobType'
          id='jobType'
          value={formData.selection_step}
          onChange={event =>
            setFormData({
              ...formData,
              selection_step: event.target.value
            })
          }
        >
          <option value='' disabled selected>
            Selection Step
          </option>
          <option value={'One'}>One</option>
          <option value={'Two'}>Two</option>
        </select>
        {/* <input
          className='newst'
          type='text'
          placeholder='Required Skills'
          value={formData.skills}
          onChange={event =>
            setFormData({ ...formData, skills: event.target.value })
          }
        /> */}
        <input
          className='newst'
          type='text'
          placeholder='Required Degree'
          value={formData.degree}
          onChange={event =>
            setFormData({ ...formData, degree: event.target.value })
          }
        />
        <input
          className='newst'
          type='text'
          placeholder='Required Language'
          value={formData.language}
          onChange={event =>
            setFormData({ ...formData, language: event.target.value })
          }
        />
        <div className='btn-box'></div>
      </form>
    </div>
  );
}

export default ThirdSlide;