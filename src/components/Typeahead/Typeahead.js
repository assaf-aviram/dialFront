import React from "react";
import Downshift from "downshift";
import debounce from "lodash/debounce"

const Typeahead = ({ itemToString, items, onChange, onSearch }) => (
  <Downshift
    itemToString={itemToString}
    onInputValueChange={debounce(onSearch, 500)}
    onChange={onChange}
    render={({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      selectedItem,
      highlightedIndex
    }) => (
      <div>
        <input {...getInputProps({ placeholder: "Enter an address" })} />
        {isOpen ? (
          <div style={{ border: "1px solid #ccc" }}>
            {items
              .map((item, index) => (
                <div
                  {...getItemProps({ item })}
                  key={item.address}
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? "gray" : "white",
                    fontWeight: selectedItem === item ? "bold" : "normal"
                  }}
                >
                  {item.address}
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )}
  />
);

export default Typeahead;