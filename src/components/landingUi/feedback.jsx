import React from "react";
import Review from "../composable/review";
const reviews = [
  {content: "This talent show platform is a game-changer! The variety of talents showcased here is incredible, and the user experience is top-notch. From signing up to submitting my talent, everything was seamless. The community's support and the fair judging process make it a must-visit for anyone looking to shine.", reviewer: "Sarah Johnson", talent: "Singing and Songwriting"},
  {content: "I've been a part of many talent shows, but this platform truly stands out. The diversity of events and talents is astonishing. What I love most is the engagement with the audience through voting. It's not just a competition; it's a journey that connects artists and their supporters worldwide.", reviewer: "Alex Martinez", talent: "Stand-Up Comedy"},
  {content: "As a parent, I'm thrilled to see my child's talents get the recognition they deserve. This talent show website is a safe space where young talents can flourish. The clear guidelines, fair judging, and positive environment make it an ideal platform for youngsters to showcase their skills and gain confidence", reviewer: "Emily Williams", talent: "Painting and Visual Arts"},
]
const FeedBack = () => {
  return (
    <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        What people say about us
      </h1>

      <div className="grid grid-cols-1 w-full items-center px-4 sm:px-20 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => {
        const {content, reviewer, talent} = r
        return (
          <Review key={i} content={content} reviewer={reviewer} talent={talent}  />
        )
      })}
      </div>
    </div>
  );
};

export default FeedBack;
