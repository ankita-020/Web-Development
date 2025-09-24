import React from "react";

const commentData = [
  {
    name: "Ankita Kuamri",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate necessitatibus ad sunt quis, officia accusantium, ullam officiis tempora repudiandae aperiam similique iure sint exercitationem velit optio. Ea, vero deleniti!",
    replies: [
      {
        name: "Zia",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Lion",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, consequatur.",
            replies: [
              {
                name: "Zia",
                text: "Lorem ipsum dolor sit amet.",
                replies: [
                  {
                    name: "Lion",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, consequatur.",
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
    name: "Akshay Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate necessitatibus ad sunt quis, officia accusantium, ullam officiis tempora repudiandae aperiam similique iure sint exercitationem velit optio. Ea, vero deleniti!",
    replies: [
      {
        name: "Zia",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Lion",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, consequatur.",
          },
        ],
      },
    ],
  },
  {
    name: "Lovely",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate necessitatibus ad sunt quis, officia accusantium, ullam officiis tempora repudiandae aperiam similique iure sint exercitationem velit optio. Ea, vero deleniti!",
    replies: [
      {
        name: "Zia",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Lion",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, consequatur.",
          },
        ],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return (
    comments.length &&
    comments.map((comment, index) => {
      return (
        <>
          <Comment key={index} data={comment} />
          {comment.replies?.length && (
            <div className=" border-l border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </>
      );
    })
  );
};

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <i className="fa-solid fa-user text-2xl"></i>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[70%]">
      <h1 className="font-bold text-3xl mb-3">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
