import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

const PreviousCommentsComponent = ({
  comment,
  handleEditClose,
  handlePreviousCommentAction,
  index,
  saveComment,
}) => {
  const [newComment, setNewComment] = useState(comment);
  const [editing, setEditing] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveComment(newComment, index);
      setEditing(false);
    }
  };
  return (
    <div className="noteModalPreviousCommentWrapper">
      {editing ? (
        <Form.Control
          type="text"
          as="textarea"
          rows="3"
          onKeyDown={handleKeyPress}
          defaultValue={comment}
          onChange={(e) => setNewComment(e.target.value)}
          className="scheduleModalTextField"
          style={{ backgroundColor: "#fff" }}
        />
      ) : (
        <div className="noteModalPreviousCommentLeftContent">{comment}</div>
      )}
      <div
        className="info noteModalDropdown"
        onClick={handleEditClose}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <DropdownButton
          variant="link"
          id="dropdown-basic-button"
          title={<BsThreeDotsVertical />}
        >
          {editing ? (
            <Dropdown.Item onClick={() => setEditing(false)}>
              Cancel
            </Dropdown.Item>
          ) : (
            <Dropdown.Item onClick={() => setEditing(true)}>Edit</Dropdown.Item>
          )}
          <Dropdown.Item
            onClick={() => handlePreviousCommentAction("remove", index)}
          >
            Remove
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default PreviousCommentsComponent;
