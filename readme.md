# Lesson Plan Generator for Bantaladnua School

This Google Apps Script will generate the lesson plan table format into a Google Doc in the format requested by Bantaladnua School.

## How to Use

1. Open any empty Google Doc.
2. Navigate to `Extensions > Apps Script`.
3. Add the function from `apps_script.js`.
4. Before running the script, add an array of lesson plans based on the output schema from `lesson-plan-output-schema.json` as directed in the script.

## AI Prompt

To prompt the AI, copy the following prompt and paste it into the AI tool:

`prompt.txt`

The AI will create the lesson plan for you, and the script will generate the lesson plan document.

## Files Included

- `apps_script.js`: The Google Apps Script function.
- `lesson-plan-output-schema.json`: The schema for the `apps_script.js` lessonPlanJsonData array
- `lesson-plan-prompt-input-example.json`: The schema you give the AI prompt.

## If you don't use AI

You will need to manually write the `lesson-plan-output-schema.json`. You can copy the examples from `lesson-plans.json`.

## Example

Here is an example of how the lessonPlanJsonData array should look based on the schema:

```json
[
  {
    "lessonPlan": {
      "lesson": "Week 1 Lesson 1",
      "date": "5 November 2024",
      "time": "13:00-13:50",
      "topic": "Places",
      "vocabulary": "Geographical features",
      "grammar": "The superlative",
      "listeningSpeaking": "Talk about extreme places",
      "writing": "A quiz about places in the world",
      "lessonObjective": "By the end of the lesson, students will be able to use superlatives to describe and compare geographical places and features around the world, and discuss the most extreme places using vocabulary related to geographical features.",

      "stages": [
        {
          "stage": "Warmup",
          "procedure": "Students will be asked about different types of geography-related places, such as mountains, rivers, and deserts. The teacher will show pictures of famous locations (e.g., Mount Everest, Sahara Desert), and ask students which ones they know or where they are from.",
          "timing": "5 minutes",
          "materials": "Projector or printed pictures of famous geographical features"
        },
        {
          "stage": "Introduction",
          "procedure": "The teacher will introduce the topic of 'Places' by connecting it to the superlatives. Using examples from the warmup (e.g., 'Mount Everest is the tallest mountain in the world'), the teacher will explain how superlatives are formed and used to compare things. For example, 'ever' has the superlative 'tallest'.",
          "timing": "8 minutes",
          "materials": "Whiteboard, markers, examples of superlative sentences"
        },
        {
          "stage": "Practice Activity",
          "procedure": "In pairs, students will be given a list of geographical features (e.g., mountains, rivers, lakes, deserts) and they will work together to rank them using superlatives like 'the longest', 'the highest', 'the hottest', etc.",
          "timing": "10 minutes",
          "materials": "Worksheet with geographical feature names and blank spaces for rankings"
        },
        {
          "stage": "Controlled Practice",
          "procedure": "Students will listen to short descriptions of famous extreme places from an audio track (e.g., 'the hottest desert', 'the tallest peak') and write the correct superlative (e.g., 'hottest', 'tallest') they hear in the descriptions.",
          "timing": "10 minutes",
          "materials": "Audio track describing places, worksheet for students to complete the sentences"
        },
        {
          "stage": "Review",
          "procedure": "The teacher reviews the answers for the superlative form from the listening activity and clarifies any common mistakes. The class discusses why superlatives are used and reviews geographical terms.",
          "timing": "7 minutes",
          "materials": "Answer key, additional notes on superlatives"
        },
        {
          "stage": "Closing",
          "procedure": "Students will have a short discussion in small groups about 'extreme places' using what they have learned. The teacher will ask: 'What is the most interesting extreme place?' Each group shares back with the class.",
          "timing": "8 minutes",
          "materials": "None"
        },
        {
          "stage": "Homework",
          "procedure": "Students will be assigned a short writing task to create a 'world quiz' that asks questions about different extreme places (using superlative forms and geographical vocabulary). For example, 'What is the tallest mountain?'",
          "timing": "2 minutes",
          "materials": "Homework handout"
        }
      ]
    }
  },
  {
    "lessonPlan": {
      "lesson": "Week 1 Lesson 2",
      "date": "8 November 2024",
      "time": "13:50-14:40",
      "topic": "Cities",
      "vocabulary": "Places in a city",
      "grammar": "Comparative and superlative adjectives, pronunciation of /h/",
      "listeningSpeaking": "Make comparisons",
      "writing": "A short email about a city in your country",
      "lessonObjective": "By the end of this lesson, students will be able to use comparative and superlative structures to describe and compare different cities while expanding their vocabulary related to places in cities. They will also practice pronunciation of the /h/ sound and improve their listening and speaking skills through making comparisons.",
      "stages": [
        {
          "stage": "Warmup",
          "procedure": "Start with a quick brainstorming activity. Ask students to list as many places in a city as they can in 2 minutes. Then, have them share their answers with the class and categorize them (e.g., public places, recreational spots, transportation hubs).",
          "timing": "5 minutes",
          "materials": "Whiteboard, markers"
        },
        {
          "stage": "Introduction",
          "procedure": "Introduce the topic: 'Cities.' Present a slideshow or visual aid with images of different cities. Discuss the key vocabulary for places in a city (e.g., park, museum, subway, skyscraper). Introduce the grammar point—comparative and superlative forms (e.g., bigger, biggest). Provide a few comparison examples using cities. Also, review the pronunciation of the /h/ sound focusing on words like 'hotel' and 'hospital.'",
          "timing": "10 minutes",
          "materials": "Slideshow with city images, projector, vocabulary handout"
        },
        {
          "stage": "Practice Activity",
          "procedure": "In pairs, ask students to pick two cities they know well (either from their own country or famous international cities) and make comparisons using comparative and superlative adjectives (e.g., 'New York is bigger than Boston, but Tokyo is the biggest.'). Circulate around the room to support students and correct any pronunciation issues with the /h/ sound.",
          "timing": "12 minutes",
          "materials": "City information handout or prompt sheet"
        },
        {
          "stage": "Controlled Practice",
          "procedure": "Give students a short gap-fill exercise where they must complete sentences comparing three cities using the correct form of the adjectives provided. Focus on ensuring correct use of comparative and superlative adjectives. Review answers as a class.",
          "timing": "10 minutes",
          "materials": "Gap-fill worksheet"
        },
        {
          "stage": "Review",
          "procedure": "Recap the lesson by asking students to provide examples of comparisons. Encourage them to use places in their local city and another city. Highlight any common pronunciation issues with the /h/ sound noticed during the class, and model proper pronunciation again if necessary.",
          "timing": "5 minutes",
          "materials": "Whiteboard, markers, students' examples"
        },
        {
          "stage": "Closing",
          "procedure": "Provide an overview of the next lesson. Tell students they will expand on what they learned today by writing about their local city. Ask students for any final questions on today's material. Encourage them to incorporate today's vocabulary and grammar lesson in their daily routines.",
          "timing": "3 minutes",
          "materials": "None"
        },
        {
          "stage": "Homework",
          "procedure": "Assign a short writing task: students should write an email to a friend recommending a city in their country. They should compare it with another city and use at least 3 comparative adjectives and 1 superlative adjective in their email.",
          "timing": "After class",
          "materials": "Homework instructions handout"
        }
      ]
    }
  }
]
```

