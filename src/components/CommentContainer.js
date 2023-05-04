import React from "react";

const commentsData = [
  {
    name: "Anubhav Tyagi",
    text: " You are noob.",
    replies: [
      {
        name: "Anubhav Tyagi",
        text: " You are noob.",
        replies: [
          {
            name: "Anubhav Tyagi",
            text: " You are noob.",
            replies: [
              {
                name: "Anubhav Tyagi",
                text: " You are noob.",
                replies: [
                    {
                        name: "Anubhav Tyagi",
                        text: " You are noob.",
                        replies: [],
                      },
                      {
                        name: "Anubhav Tyagi",
                        text: " You are noob.",
                        replies: [],
                      },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anubhav Tyagi",
    text: " You are noob.",
    replies: [
      {
        name: "Anubhav Tyagi",
        text: " You are noob.",
        replies: [
          {
            name: "Anubhav Tyagi",
            text: " You are noob.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anubhav Tyagi",
    text: " You are noob.",
    replies: [
      {
        name: "Anubhav Tyagi",
        text: " You are noob.",
        replies: [
          {
            name: "Anubhav Tyagi",
            text: " You are noob.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anubhav Tyagi",
    text: " You are noob.",
    replies: [
      {
        name: "Anubhav Tyagi",
        text: " You are noob.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 p-2 m-2 rounded-md">
      <img
        className=" h-12"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
