import styled from "@emotion/styled";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface AutoCompleteProps {
  displayList: string[];
  selection?: (listItem: string) => void;
  clearSearch?: () => void;
  disabled: boolean;
  type: string;
}
interface InitialState {
  filteredList: string[];
  searchInput: string;
  focused: boolean;
}
export const AutoComplete: React.FC<AutoCompleteProps> = ({
  displayList,
  selection,
  clearSearch,
  disabled,
  type,
}) => {
  const initialState: InitialState = {
    filteredList: displayList,
    searchInput: "",
    focused: false,
  };
  const [value, setValue] = useState(initialState);

  const searchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    const filteredManufacturerList = displayList.filter((item) => {
      const manufacturerItem = item.toLowerCase();
      const userInput = searchInput.toLowerCase();
      return manufacturerItem.includes(userInput);
    });
    setValue({ ...value, filteredList: filteredManufacturerList, searchInput });
  };
  const listItemSelection = (selectedValue: string) => {
    if (selection) {
      selection(selectedValue);
    }
    setValue({
      ...value,
      searchInput: selectedValue,
      filteredList: [],
      focused: false,
    });
  };
  const handleSearch = () => {
    if (selection) {
      selection(value.searchInput);
    }
  };

  const handleFocus = () => {
    setValue({...value, focused: true})
  }

  const updateUserInput = (event: any) => {
    const userInput = event.target.value
    if (userInput === "" && clearSearch) {
      setValue({ ...value, searchInput: userInput, filteredList: displayList });
      clearSearch();
    }
  };

  return (
    <SearchStyle>
      <div className="autocomplete-drop-down">
        <div className="search-box">
          <input
            className="name-search-box"
            placeholder={`Search ${type}...`}
            type="search"
            disabled={disabled}
            value={value.searchInput}
            onChange={searchValueChange}
            onClick={updateUserInput}
            onFocus={handleFocus}
          />
          <button className="search-btn">
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              onClick={handleSearch}
            />
          </button>
        </div>
        {value.focused && value.filteredList.length > 0 && (
          <div className="search-result">
            <ul className="search-result-list">
              {value.filteredList.map((listItem, index) => (
                <li
                  className="search-result-list-item"
                  key={index}
                  onClick={() => listItemSelection(listItem)}
                >
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SearchStyle>
  );
};
const SearchStyle = styled.div`
  & .autocomplete-drop-down {
    width: 90%;
    margin: 2rem auto;
    @media only screen and (min-width: 1200px) {
      width: 25%;
    }

    & label {
      color: #52aa95;
      font-size: 0.8rem;
    }
    & .search-box {
      display: flex;
      & .name-search-box {
        display: block;
        width: 100%;
        height: 4em;
        padding: 1em 1.5em;
        box-sizing: border-box;
        font-size: 1em;
        border: 1px solid #52aa95;
        outline: none;
        transition: border-radius 250ms ease;
      }

      & .search-btn {
        width: 20%;
        font-size: 1.2rem;
        background-color: #52aa95;
        color: #fff;
        border: 1px solid #52aa95;
        cursor: pointer;

        &:focus {
          outline: 0;
          background-color: #4d9c89;
        }
      }
    }
    & .search-result {
      width: 83%;
      position: absolute;
      z-index: 2;
      background-color: #fff;
      @media only screen and (min-width: 1200px) {
        width: 21%;
      }
      & .search-result-list {
        margin: 0;
        list-style-type: none;
        -webkit-box-shadow: 0px 6px 16px 0px rgb(0 0 0 / 12%);
        box-shadow: 0px 6px 16px 0px rgb(0 0 0 / 12%);

        & .search-result-list-item {
          cursor: pointer;
          padding: 1rem;
          border-radius: 5px;
        }
      }
    }
  }
`;
