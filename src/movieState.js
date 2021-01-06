//Import Images
import athlete from "./img/gili1.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/sowa1.png";
import athlete2 from "./img/gili2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/sowa2.png";

export const MovieState = () => {
  return [
    {
      title: "Gili gili",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    // {
    //   title: "Good Times",
    //   mainImg: goodtimes,
    //   url: "/work/good-times",
    //   secondaryImg: goodtimes2,
    //   awards: [
    //     {
    //       title: "Truly A masterpiece",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "Fresh look on a brutal sport.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "It’s okay lmao.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //   ],
    // },
    {
      title: "Sowa",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
