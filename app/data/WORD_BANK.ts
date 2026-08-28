import type { WordBank } from "~/types/playGameType";

export const WORD_BANK: WordBank[] = [
  // =========================
  // ACTION
  // =========================

  { id: 1, text: "sleeping", category: "action", difficulty: "easy" },
  { id: 2, text: "running", category: "action", difficulty: "easy" },
  { id: 3, text: "crying", category: "action", difficulty: "easy" },
  { id: 4, text: "laughing", category: "action", difficulty: "easy" },
  { id: 5, text: "dancing", category: "action", difficulty: "easy" },
  { id: 6, text: "singing", category: "action", difficulty: "easy" },
  { id: 7, text: "cooking", category: "action", difficulty: "easy" },
  { id: 8, text: "reading", category: "action", difficulty: "easy" },
  { id: 9, text: "writing", category: "action", difficulty: "easy" },
  { id: 10, text: "brushing teeth", category: "action", difficulty: "easy" },

  { id: 11, text: "driving", category: "action", difficulty: "medium" },
  { id: 12, text: "fishing", category: "action", difficulty: "medium" },
  { id: 13, text: "taking a selfie", category: "action", difficulty: "medium" },
  { id: 14, text: "washing dishes", category: "action", difficulty: "medium" },
  { id: 15, text: "opening a gift", category: "action", difficulty: "medium" },
  { id: 16, text: "changing a tire", category: "action", difficulty: "medium" },
  { id: 17, text: "walking a dog", category: "action", difficulty: "medium" },

  { id: 18, text: "sleepwalking", category: "action", difficulty: "hard" },
  { id: 19, text: "missing the bus", category: "action", difficulty: "hard" },
  {
    id: 20,
    text: "getting stuck in an elevator",
    category: "action",
    difficulty: "hard",
  },

  // =========================
  // ANIMAL
  // =========================

  { id: 21, text: "cat", category: "animal", difficulty: "easy" },
  { id: 22, text: "dog", category: "animal", difficulty: "easy" },
  { id: 23, text: "monkey", category: "animal", difficulty: "easy" },
  { id: 24, text: "lion", category: "animal", difficulty: "easy" },
  { id: 25, text: "elephant", category: "animal", difficulty: "easy" },
  { id: 26, text: "snake", category: "animal", difficulty: "easy" },
  { id: 27, text: "rabbit", category: "animal", difficulty: "easy" },
  { id: 28, text: "penguin", category: "animal", difficulty: "easy" },
  { id: 29, text: "kangaroo", category: "animal", difficulty: "easy" },
  { id: 30, text: "giraffe", category: "animal", difficulty: "easy" },

  { id: 31, text: "crocodile", category: "animal", difficulty: "medium" },
  { id: 32, text: "gorilla", category: "animal", difficulty: "medium" },
  { id: 33, text: "octopus", category: "animal", difficulty: "medium" },
  { id: 34, text: "peacock", category: "animal", difficulty: "medium" },
  { id: 35, text: "flamingo", category: "animal", difficulty: "medium" },
  { id: 36, text: "chameleon", category: "animal", difficulty: "medium" },
  { id: 37, text: "woodpecker", category: "animal", difficulty: "medium" },

  { id: 38, text: "platypus", category: "animal", difficulty: "hard" },
  { id: 39, text: "anteater", category: "animal", difficulty: "hard" },
  { id: 40, text: "porcupine", category: "animal", difficulty: "hard" },

  // =========================
  // JOB
  // =========================

  { id: 41, text: "doctor", category: "job", difficulty: "easy" },
  { id: 42, text: "teacher", category: "job", difficulty: "easy" },
  { id: 43, text: "chef", category: "job", difficulty: "easy" },
  { id: 44, text: "police officer", category: "job", difficulty: "easy" },
  { id: 45, text: "firefighter", category: "job", difficulty: "easy" },
  { id: 46, text: "pilot", category: "job", difficulty: "easy" },
  { id: 47, text: "farmer", category: "job", difficulty: "easy" },
  { id: 48, text: "dentist", category: "job", difficulty: "easy" },

  { id: 49, text: "photographer", category: "job", difficulty: "medium" },
  { id: 50, text: "mechanic", category: "job", difficulty: "medium" },
  { id: 51, text: "barber", category: "job", difficulty: "medium" },
  { id: 52, text: "waiter", category: "job", difficulty: "medium" },
  { id: 53, text: "lifeguard", category: "job", difficulty: "medium" },
  { id: 54, text: "astronaut", category: "job", difficulty: "medium" },
  { id: 55, text: "detective", category: "job", difficulty: "medium" },
  { id: 56, text: "news reporter", category: "job", difficulty: "medium" },

  { id: 57, text: "archaeologist", category: "job", difficulty: "hard" },
  {
    id: 58,
    text: "air traffic controller",
    category: "job",
    difficulty: "hard",
  },
  { id: 59, text: "auctioneer", category: "job", difficulty: "hard" },
  { id: 60, text: "conductor", category: "job", difficulty: "hard" },

  // =========================
  // SUPERHERO
  // =========================

  { id: 61, text: "spider man", category: "superhero", difficulty: "easy" },
  { id: 62, text: "batman", category: "superhero", difficulty: "easy" },
  { id: 63, text: "superman", category: "superhero", difficulty: "easy" },
  { id: 64, text: "iron man", category: "superhero", difficulty: "easy" },
  { id: 65, text: "hulk", category: "superhero", difficulty: "easy" },
  { id: 66, text: "thor", category: "superhero", difficulty: "easy" },
  { id: 67, text: "wonder woman", category: "superhero", difficulty: "easy" },
  {
    id: 68,
    text: "captain america",
    category: "superhero",
    difficulty: "easy",
  },

  { id: 69, text: "wolverine", category: "superhero", difficulty: "medium" },
  { id: 70, text: "deadpool", category: "superhero", difficulty: "medium" },
  {
    id: 71,
    text: "black panther",
    category: "superhero",
    difficulty: "medium",
  },
  {
    id: 72,
    text: "doctor strange",
    category: "superhero",
    difficulty: "medium",
  },
  { id: 73, text: "aquaman", category: "superhero", difficulty: "medium" },
  { id: 74, text: "the flash", category: "superhero", difficulty: "medium" },
  { id: 75, text: "ant man", category: "superhero", difficulty: "medium" },

  { id: 76, text: "green lantern", category: "superhero", difficulty: "hard" },
  { id: 77, text: "hawkeye", category: "superhero", difficulty: "hard" },
  { id: 78, text: "scarlet witch", category: "superhero", difficulty: "hard" },
  { id: 79, text: "daredevil", category: "superhero", difficulty: "hard" },
  { id: 80, text: "doctor fate", category: "superhero", difficulty: "hard" },

  // =========================
  // SPORT
  // =========================

  { id: 81, text: "football", category: "sport", difficulty: "easy" },
  { id: 82, text: "basketball", category: "sport", difficulty: "easy" },
  { id: 83, text: "swimming", category: "sport", difficulty: "easy" },
  { id: 84, text: "boxing", category: "sport", difficulty: "easy" },
  { id: 85, text: "tennis", category: "sport", difficulty: "easy" },
  { id: 86, text: "volleyball", category: "sport", difficulty: "easy" },
  { id: 87, text: "cycling", category: "sport", difficulty: "easy" },
  { id: 88, text: "skiing", category: "sport", difficulty: "easy" },

  { id: 89, text: "golf", category: "sport", difficulty: "medium" },
  { id: 90, text: "baseball", category: "sport", difficulty: "medium" },
  { id: 91, text: "table tennis", category: "sport", difficulty: "medium" },
  { id: 92, text: "weightlifting", category: "sport", difficulty: "medium" },
  { id: 93, text: "surfing", category: "sport", difficulty: "medium" },
  { id: 94, text: "ice skating", category: "sport", difficulty: "medium" },
  { id: 95, text: "archery", category: "sport", difficulty: "medium" },

  { id: 96, text: "fencing", category: "sport", difficulty: "hard" },
  { id: 97, text: "pole vault", category: "sport", difficulty: "hard" },
  { id: 98, text: "curling", category: "sport", difficulty: "hard" },
  { id: 99, text: "javelin throw", category: "sport", difficulty: "hard" },
  {
    id: 100,
    text: "synchronized swimming",
    category: "sport",
    difficulty: "hard",
  },

  // =========================
  // OBJECT
  // =========================

  { id: 101, text: "telephone", category: "object", difficulty: "easy" },
  { id: 102, text: "umbrella", category: "object", difficulty: "easy" },
  { id: 103, text: "toothbrush", category: "object", difficulty: "easy" },
  { id: 104, text: "guitar", category: "object", difficulty: "easy" },
  { id: 105, text: "camera", category: "object", difficulty: "easy" },
  { id: 106, text: "computer", category: "object", difficulty: "easy" },
  { id: 107, text: "television", category: "object", difficulty: "easy" },
  { id: 108, text: "clock", category: "object", difficulty: "easy" },

  { id: 109, text: "vacuum cleaner", category: "object", difficulty: "medium" },
  { id: 110, text: "microscope", category: "object", difficulty: "medium" },
  { id: 111, text: "binoculars", category: "object", difficulty: "medium" },
  {
    id: 112,
    text: "fire extinguisher",
    category: "object",
    difficulty: "medium",
  },
  { id: 113, text: "shopping cart", category: "object", difficulty: "medium" },
  { id: 114, text: "remote control", category: "object", difficulty: "medium" },
  {
    id: 115,
    text: "washing machine",
    category: "object",
    difficulty: "medium",
  },

  { id: 116, text: "metal detector", category: "object", difficulty: "hard" },
  { id: 117, text: "lie detector", category: "object", difficulty: "hard" },
  { id: 118, text: "telescope", category: "object", difficulty: "hard" },
  { id: 119, text: "wheelbarrow", category: "object", difficulty: "hard" },
  { id: 120, text: "typewriter", category: "object", difficulty: "hard" },

  // =========================
  // FOOD
  // =========================

  { id: 121, text: "pizza", category: "food", difficulty: "easy" },
  { id: 122, text: "hamburger", category: "food", difficulty: "easy" },
  { id: 123, text: "ice cream", category: "food", difficulty: "easy" },
  { id: 124, text: "banana", category: "food", difficulty: "easy" },
  { id: 125, text: "watermelon", category: "food", difficulty: "easy" },
  { id: 126, text: "birthday cake", category: "food", difficulty: "easy" },
  { id: 127, text: "spaghetti", category: "food", difficulty: "easy" },
  { id: 128, text: "popcorn", category: "food", difficulty: "easy" },

  { id: 129, text: "sushi", category: "food", difficulty: "medium" },
  { id: 130, text: "hot dog", category: "food", difficulty: "medium" },
  { id: 131, text: "pancake", category: "food", difficulty: "medium" },
  { id: 132, text: "donut", category: "food", difficulty: "medium" },
  { id: 133, text: "taco", category: "food", difficulty: "medium" },
  { id: 134, text: "noodles", category: "food", difficulty: "medium" },
  { id: 135, text: "fried chicken", category: "food", difficulty: "medium" },

  { id: 136, text: "fortune cookie", category: "food", difficulty: "hard" },
  { id: 137, text: "cotton candy", category: "food", difficulty: "hard" },
  { id: 138, text: "chopsticks", category: "food", difficulty: "hard" },
  { id: 139, text: "buffet", category: "food", difficulty: "hard" },
  { id: 140, text: "food delivery", category: "food", difficulty: "hard" },

  // =========================
  // CHARACTER
  // =========================

  { id: 141, text: "mickey mouse", category: "character", difficulty: "easy" },
  { id: 142, text: "spongeBob", category: "character", difficulty: "easy" },
  { id: 143, text: "harry potter", category: "character", difficulty: "easy" },
  { id: 144, text: "shrek", category: "character", difficulty: "easy" },
  { id: 145, text: "pikachu", category: "character", difficulty: "easy" },
  { id: 146, text: "tom and jerry", category: "character", difficulty: "easy" },
  { id: 147, text: "minion", category: "character", difficulty: "easy" },

  {
    id: 148,
    text: "jack sparrow",
    category: "character",
    difficulty: "medium",
  },
  { id: 149, text: "darth vader", category: "character", difficulty: "medium" },
  { id: 150, text: "mr bean", category: "character", difficulty: "medium" },
  {
    id: 151,
    text: "homer simpson",
    category: "character",
    difficulty: "medium",
  },
  { id: 152, text: "woody", category: "character", difficulty: "medium" },
  {
    id: 153,
    text: "buzz lightyear",
    category: "character",
    difficulty: "medium",
  },
  { id: 154, text: "joker", category: "character", difficulty: "medium" },
  { id: 155, text: "gru", category: "character", difficulty: "medium" },

  { id: 156, text: "gollum", category: "character", difficulty: "hard" },
  {
    id: 157,
    text: "hannibal lecter",
    category: "character",
    difficulty: "hard",
  },
  {
    id: 158,
    text: "charlie chaplin",
    category: "character",
    difficulty: "hard",
  },
  { id: 159, text: "willy wonka", category: "character", difficulty: "hard" },
  { id: 160, text: "forrest gump", category: "character", difficulty: "hard" },

  // =========================
  // PLACE
  // =========================

  { id: 161, text: "hospital", category: "place", difficulty: "easy" },
  { id: 162, text: "school", category: "place", difficulty: "easy" },
  { id: 163, text: "airport", category: "place", difficulty: "easy" },
  { id: 164, text: "restaurant", category: "place", difficulty: "easy" },
  { id: 165, text: "zoo", category: "place", difficulty: "easy" },
  { id: 166, text: "beach", category: "place", difficulty: "easy" },
  { id: 167, text: "cinema", category: "place", difficulty: "easy" },

  { id: 168, text: "amusement park", category: "place", difficulty: "medium" },
  { id: 169, text: "police station", category: "place", difficulty: "medium" },
  { id: 170, text: "gym", category: "place", difficulty: "medium" },
  { id: 171, text: "museum", category: "place", difficulty: "medium" },
  { id: 172, text: "library", category: "place", difficulty: "medium" },
  { id: 173, text: "subway station", category: "place", difficulty: "medium" },
  { id: 174, text: "wedding hall", category: "place", difficulty: "medium" },
  { id: 175, text: "haunted house", category: "place", difficulty: "medium" },

  { id: 176, text: "courtroom", category: "place", difficulty: "hard" },
  { id: 177, text: "construction site", category: "place", difficulty: "hard" },
  { id: 178, text: "spaceship", category: "place", difficulty: "hard" },
  { id: 179, text: "desert island", category: "place", difficulty: "hard" },
  { id: 180, text: "laboratory", category: "place", difficulty: "hard" },

  // =========================
  // ENTERTAINMENT / SITUATIONS
  // =========================

  {
    id: 181,
    text: "birthday party",
    category: "entertainment",
    difficulty: "easy",
  },
  { id: 182, text: "wedding", category: "entertainment", difficulty: "easy" },
  { id: 183, text: "concert", category: "entertainment", difficulty: "easy" },
  {
    id: 184,
    text: "video game",
    category: "entertainment",
    difficulty: "easy",
  },
  {
    id: 185,
    text: "magic show",
    category: "entertainment",
    difficulty: "easy",
  },
  { id: 186, text: "karaoke", category: "entertainment", difficulty: "easy" },

  {
    id: 187,
    text: "roller coaster",
    category: "entertainment",
    difficulty: "medium",
  },
  {
    id: 188,
    text: "talent show",
    category: "entertainment",
    difficulty: "medium",
  },
  {
    id: 189,
    text: "fashion show",
    category: "entertainment",
    difficulty: "medium",
  },
  { id: 190, text: "circus", category: "entertainment", difficulty: "medium" },
  {
    id: 191,
    text: "playing hide and seek",
    category: "entertainment",
    difficulty: "medium",
  },
  {
    id: 192,
    text: "winning the lottery",
    category: "entertainment",
    difficulty: "medium",
  },
  {
    id: 193,
    text: "surprise party",
    category: "entertainment",
    difficulty: "medium",
  },

  {
    id: 194,
    text: "escaping from prison",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 195,
    text: "alien invasion",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 196,
    text: "zombie apocalypse",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 197,
    text: "time travel",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 198,
    text: "walking on the moon",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 199,
    text: "being invisible",
    category: "entertainment",
    difficulty: "hard",
  },
  {
    id: 200,
    text: "winning an Oscar",
    category: "entertainment",
    difficulty: "hard",
  },
];
