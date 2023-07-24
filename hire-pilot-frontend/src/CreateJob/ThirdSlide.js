import React, { useState } from "react";
import "./CreateJob.css";
import { WithContext as ReactTags } from "react-tag-input";
import axios from "axios";

// const suggestions_skills =

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function ThirdSlide({ formData, setFormData }) {
  const [tagsSkills, setTagsSkills] = useState([]);
  const [tagsDegrees, setTagsDegrees] = useState([]);
  const [tagsLanguages, setTagsLanguages] = useState([]);
  const [skillSuggestion, setSkillSuggestion] = useState([]);
  const [languageSuggestion, setLanguageSuggestion] = useState([]);
  const [degreeSuggestion, setDegreeSuggestion] = useState([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // replace with your actual token
    },
  };

  const fetchSkills = (searchword) => {
    axios
      .get(
        `http://localhost:8000/HirePilot/skills/?searchkey=${searchword}`,
        config
      )
      .then((response) => {
        setSkillSuggestion(
          response.data.map((skill) => {
            return { id: skill.id.toString(), text: skill.name };
          })
        );
        // console.log(response);
      })
      .catch((error) => {
        alert("Error submitting form: " + error.message);
        console.error(error);
      });
  };
  const fetchLanguages = (searchword) => {
    axios
      .get(
        `http://localhost:8000/HirePilot/languages/?searchkey=${searchword}`,
        config
      )
      .then((response) => {
        setLanguageSuggestion(
          response.data.map((language) => {
            return { id: language.id.toString(), text: language.name };
          })
        );
        // console.log(response);
      })
      .catch((error) => {
        alert("Error submitting form: " + error.message);
        console.error(error);
      });
  };

  const fetchDegrees = (searchword) => {
    axios
      .get(
        `http://localhost:8000/HirePilot/degrees/?searchkey=${searchword}`,
        config
      )
      .then((response) => {
        setDegreeSuggestion(
          response.data.map((degree) => {
            return { id: degree.id.toString(), text: degree.name };
          })
        );
        // console.log(response);
      })
      .catch((error) => {
        alert("Error submitting form: " + error.message);
        console.error(error);
      });
  };

  const handleAddition = (tag, type) => {
    if (type === "skill") {
      const newTags = [...tagsSkills, tag];

      setTagsSkills(newTags);

      setFormData({
        ...formData,
        skills: newTags.map((tag) =>
          isNaN(tag.id) ? tag.text : parseInt(tag.id)
        ),
      });
    } else if (type === "degree") {
      const newTags = [...tagsDegrees, tag];
      console.log(newTags);
      setTagsDegrees(newTags);
      setFormData({
        ...formData,
        degree: newTags.map((tag) =>
          isNaN(tag.id) ? tag.text : parseInt(tag.id)
        ),
      });
    } else if (type === "language") {
      const newTags = [...tagsLanguages, tag];
      setTagsLanguages(newTags);
      setFormData({
        ...formData,
        language: newTags.map((tag) =>
          isNaN(tag.id) ? tag.text : parseInt(tag.id)
        ),
      });
    }
  };

  const handleDelete = (i, type) => {
    if (type === "skill") {
      const newTags = [...tagsSkills];
      newTags.splice(i, 1);
      setTagsSkills(newTags);
      setFormData({ ...formData, skills: newTags.map((tag) => tag.text) });
    } else if (type === "degree") {
      const newTags = [...tagsDegrees];
      newTags.splice(i, 1);
      setTagsDegrees(newTags);
      setFormData({ ...formData, degrees: newTags.map((tag) => tag.text) });
    } else if (type === "language") {
      const newTags = [...tagsLanguages];
      newTags.splice(i, 1);
      setTagsLanguages(newTags);
      setFormData({ ...formData, language: newTags.map((tag) => tag.text) });
    }
  };

  const handleDrag = (tag, currPos, newPos) => {
    let newTags = [];

    if (tag.type === "skill") {
      newTags = tagsSkills.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTagsSkills(newTags);
    } else if (tag.type === "degree") {
      newTags = tagsDegrees.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      console.log(newTags);
      setTagsDegrees(newTags);
    } else if (tag.type === "language") {
      newTags = tagsLanguages.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTagsLanguages(newTags);
    }
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const CustomInput = ({ onChange, ...rest }) => (
    <input style={{ height: "5em" }} onChange={onChange} {...rest} />
  );

  return (
    <div className="containerapply thirdd">
      <form id="Form3">
        <h3>System Information</h3>
        <ReactTags
          tags={tagsSkills}
          suggestions={skillSuggestion}
          delimiters={delimiters}
          placeholder="Add skills..."
          handleDelete={(i) => handleDelete(i, "skill")}
          handleAddition={(tag) => handleAddition(tag, "skill")}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          suggestionsPortalZIndex={10}
          handleInputChange={fetchSkills}
          autocomplete
        />
        <ReactTags
          tags={tagsDegrees}
          suggestions={degreeSuggestion}
          delimiters={delimiters}
          placeholder="Add degrees..."
          handleDelete={(i) => handleDelete(i, "degree")}
          handleAddition={(tag) => handleAddition(tag, "degree")}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          handleInputChange={fetchDegrees}
          suggestionsPortalZIndex={10}
          autocomplete
        />
        <ReactTags
          tags={tagsLanguages}
          suggestions={languageSuggestion}
          delimiters={delimiters}
          placeholder="Add languages..."
          handleDelete={(i) => handleDelete(i, "language")}
          handleAddition={(tag) => handleAddition(tag, "language")}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          suggestionsPortalHost={CustomInput}
          inputComponent={CustomInput}
          handleInputChange={fetchLanguages}
          suggestionsPortalZIndex={10}
          autocomplete
          value={formData.language}
          onChange={(event) =>
            setFormData({ ...formData, language: event.target.value })
          }
        />

        <select
          className="selectJob"
          name="jobType"
          id="jobType"
          value={formData.selection_step}
          onChange={(event) =>
            setFormData({
              ...formData,
              selection_step: event.target.value,
            })
          }
        >
          <option value="" disabled selected>
            Selection Step
          </option>
          <option value={"One"}>One</option>
          <option value={"Two"}>Two</option>
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

        <div className="btn-box"></div>
      </form>
    </div>
  );
}

export default ThirdSlide;
