function createCustomTableWithIntro() {
  const lessonPlanJsonData = [
    // add your array of lesson plans here from the schema
  ];

  // CHANGE THIS FIRST
  const teacherName = "YOUR NAME HERE";
  const className = "M4/2";

  const doc = DocumentApp.create("Lesson Plans");
  const body = doc.getBody();

  lessonPlanJsonData.forEach((data) => {
    body.appendParagraph(data.lessonPlan.lesson);
    body.appendParagraph(
      "Lesson unit/chapter                       Subject: English"
    );
    body.appendParagraph(
      `Class: ${className}                      Time: ${data.lessonPlan?.duration}`
    );
    body.appendParagraph("Topic: " + data.lessonPlan.topic);
    body.appendParagraph("Teacher: " + teacherName);

    const listItems = [
      "Conceptual: " + data.lessonPlan.lessonObjective,
      "Standards/Indicators/Objectives",
      `Content: \nVocabulary ${data.lessonPlan.vocabulary} \nGrammar ${data.lessonPlan.grammar} \nListening and Speaking ${data.lessonPlan.listeningSpeaking} \nWriting ${data.lessonPlan.writing}`,
      "Assignment/homework: " +
        data.lessonPlan.stages.find((s) => s.stage.includes("Homework"))
          ?.procedure,
      "Skills (3R8C/Integration): Writing, reading, speaking, vocabulary",
      "Learning activities: Worksheet exercises, discussion, and games",
      "Source/material: Worksheets, videos",
      "Lesson Assessment and Evaluation\nMethods of evaluation: Observation by teacher and student’s feedback\nMethods of evaluation tools: Assessments\nMethods of evaluation criteria: Overall student’s efficiency and comprehension of obtained information",
    ];

    listItems.forEach((item, index) => {
      if (index === 1) {
        const standardsList = body
          .appendListItem(item)
          .setGlyphType(DocumentApp.GlyphType.NUMBER);
        standardsList.appendText(
          "\nStandard\nF1.1 Understanding and ability in interpreting what has been heard and read from various types of media, and ability to express opinions and reasons.\nIndicators"
        );
        const indicators = [
          "M4/1 Observe the instructions in manuals for various types of work, clarifications, explanations and descriptions heard and read.",
          "M4/2 Accurately read aloud paragraphs, news, advertisements, poems and skits by observing the principles of reading.",
          "M4/3 Explain and write sentences and paragraphs related to various forms of non-text information related to the sentences and the paragraphs heard or read.",
          "M4/4 Identify the main idea, analyze the essence, interpret and express the opinions from listening to and reading feature articles and entertainment articles, as well as provide the justification and the examples for illustrations.",
        ];
        indicators.forEach((indicator) => {
          body.appendListItem(indicator).setNestingLevel(1);
        });
      } else {
        body.appendListItem(item).setGlyphType(DocumentApp.GlyphType.NUMBER);
      }
    });
    body.appendParagraph(data.lessonPlan.lesson.toUpperCase());
    const table = body.appendTable();
    const rows = [
      [
        `Teacher: ${teacherName}`,
        `Class: ${className}`,
        `Time: ${data.lessonPlan.time}`,
        `Date: ${data.lessonPlan.date}`,
      ],
      [`Lesson topic: ${data.lessonPlan.lessonObjective}`, "", "", ""],
      ["Target Language: ENGLISH", "", "", ""],
      ["Supporting Language: Use translations if necessary", "", "", ""],
      ["Stage", "Procedure", "Timing", "Material"],
      ...data.lessonPlan.stages.map((s) => [
        s.stage,
        s.procedure,
        s.timing,
        s.materials,
      ]),
      ["Reflection", "", "", ""],
    ];

    rows.forEach((rowContent) => {
      const row = table.appendTableRow();
      rowContent.forEach((cellContent) => {
        row.appendTableCell(cellContent);
      });
    });
  });

  Logger.log("Document URL: " + doc.getUrl());
}
