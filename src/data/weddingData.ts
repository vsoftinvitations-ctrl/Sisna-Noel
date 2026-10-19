export interface WeddingData {
  couple: {
    bride: string;
    groom: string;
    brideShort: string;
    groomShort: string;
    initials: string;
  };
  wedding: {
    date: string;
    rawDate: string; // ISO format for countdown
    time: string;
    venue: string;
    location: string;
    city: string;
    state: string;
    mapsUrl: string;
  };
  reception: {
    date: string;
    time: string;
    venue: string;
    location: string;
    city: string;
    state: string;
    mapsUrl: string;
  };
  family: {
    brideParents: string;
    brideFather: string;
    brideMother: string;
    brideSiblings: string[];
    groomParents: string;
    groomFather: string;
    groomMother: string;
    groomSiblings: string[];
  };
  verse: {
    text: string;
    reference: string;
  };
  message: string;
  timeline: Array<{
    time: string;
    title: string;
    venue: string;
    description: string;
  }>;
  story: Array<{
    title: string;
    subtitle: string;
    content: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    title: string;
    caption: string;
    aspectRatio: string;
  }>;
}

export const weddingData: WeddingData = {
  couple: {
    bride: "Sisna Maria",
    groom: "Noel Binoy",
    brideShort: "Sisna",
    groomShort: "Noel",
    initials: "S & N",
  },

  wedding: {
    date: "30 December 2026",
    rawDate: "2026-12-30T11:00:00+05:30",
    time: "11:00 AM",
    venue: "Holy Family Forane Church",
    location: "Ponkunnam, Kottayam, Kerala",
    city: "Ponkunnam, Kottayam",
    state: "Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Family+Syro+Malabar+Forane+Church+Ponkunnam",
  },

  reception: {
    date: "30 December 2026",
    time: "12:30 PM",
    venue: "Holy Family Church Parish Hall",
    location: "Ponkunnam, Kottayam, Kerala",
    city: "Ponkunnam, Kottayam",
    state: "Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Family+Syro+Malabar+Forane+Church+Ponkunnam",
  },

  family: {
    brideParents: "Capt. Karottu Antony Andrews & Sweety Suvarna",
    brideFather: "Capt. Karottu Antony Andrews",
    brideMother: "Sweety Suvarna",
    brideSiblings: ["Stiyan Antony", "Sansia Maria"],
    groomParents: "Binoy Mathew & Elza Binoy",
    groomFather: "Binoy Mathew",
    groomMother: "Elza Binoy",
    groomSiblings: ["Nevin Binoy"],
  },

  verse: {
    text: "“Above all, put on love, which binds everything together in perfect harmony.”",
    reference: "Colossians 3:14",
  },

  message:
    "With the blessings of our beloved parents and families, we joyfully invite you to celebrate the wedding of Sisna Maria Remitta and Noel Binoy as they begin their new journey together in holy matrimony. Your presence and blessings will make our special day even more meaningful.",

  timeline: [
    {
      time: "11:00 AM",
      title: "The Holy Matrimony Ceremony",
      venue: "Holy Family Forane Church, Ponkunnam",
      description: "Sacred Syro-Malabar Christian nuptial ceremony and solemn marriage blessings.",
    },
    {
      time: "12:30 PM",
      title: "Wedding Reception & Feast",
      venue: "Holy Family Church Parish Hall, Ponkunnam",
      description: "Festive celebration, traditional feast, and fellowship with family and friends.",
    },
  ],

  story: [
    {
      title: "HOW WE MET",
      subtitle: "A divine alignment",
      content:
        "Our journey began under God's watchful grace, brought together by shared faith, family values, and a quiet understanding that our paths were meant to intertwine. What started as simple conversations blossomed into a deep, unshakable bond of love and trust.",
    },
    {
      title: "OUR JOURNEY",
      subtitle: "Walking in faith and love",
      content:
        "Through every season, we have grown together in prayer, joy, and mutual devotion. Guided by love and supported by our beloved parents, we learned that love is patient, kind, and anchored in divine purpose.",
    },
    {
      title: "THE PROMISE",
      subtitle: "Forever in Love",
      content:
        "As we step forward into holy matrimony on December 30, 2026, we vow to honor, cherish, and walk hand-in-hand for all the days of our lives.",
    },
  ],

  gallery: [
    {
      id: 1,
      url: "/images/gallary1.png",
      title: "Noel & Sisna",
      caption: "Pre-wedding portrait",
      aspectRatio: "portrait",
    },
    {
      id: 2,
      url: "/images/gallary2.png",
      title: "Sisna & Noel",
      caption: "A moment together",
      aspectRatio: "portrait",
    },
    {
      id: 3,
      url: "/images/gallary3.png",
      title: "Noel & Sisna",
      caption: "Love in every frame",
      aspectRatio: "portrait",
    },
  ],
};
