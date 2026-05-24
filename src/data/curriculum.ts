import { CurriculumMonth, WebsiteRef } from "../types";

export const WEBSITES_REF: WebsiteRef[] = [
  {
    name: "Code.org",
    url: "https://code.org",
    logo: "🧩",
    description: "Self-paced visual block-based courses designed specifically for elementary schoolers to learn computer science concepts.",
    curriculumPhase: "Phase 1 (Months 1-2)",
    relevance: "Ideal for establishing core spatial logic, looping concepts, and sprite creations using Puzzle blocks."
  },
  {
    name: "mBlock",
    url: "https://mblock.makeblock.com",
    logo: "🐼",
    description: "Steam learning and block/Python coding platform equipped with built-in AI blocks, speech recognition, and IoT modeling.",
    curriculumPhase: "Phase 2 (Months 3-4)",
    relevance: "Used for connecting visual logic to real-world AI triggers and local science lessons."
  },
  {
    name: "MIT App Inventor",
    url: "https://appinventor.mit.edu",
    logo: "📱",
    description: "A block-based tool that lets kids build actual Android/iOS mobile apps directly on browser screens.",
    curriculumPhase: "Phase 2 (Months 3-4)",
    relevance: "Teaches button triggers, device screens design, and database inputs (TinyDB) to empower rural app ideas."
  },
  {
    name: "Stencyl",
    url: "http://www.stencyl.com",
    logo: "🌀",
    description: "An offline & online tool that uses a drag-and-drop block interface based on Scratch, designed for rapid 2D retro action games.",
    curriculumPhase: "Phase 3 (Months 5-6)",
    relevance: "Perfect for learning game-physics properties (bounciness, speed gravity) visually."
  },
  {
    name: "Unity Playground",
    url: "https://unity.com",
    logo: "🎮",
    description: "A framework in Unity that lets students create game logic using ready-to-use visual script action blocks without drafting complex C# files.",
    curriculumPhase: "Phase 3 (Months 5-6)",
    relevance: "Steps up 2D coordinate space and transitions kids to the industry-standard game workspace environment."
  },
  {
    name: "Appy Pie",
    url: "https://www.appypie.com",
    logo: "🥧",
    description: "No-code UI template creator where children design interfaces, layout grids, static school folders, and contact pages.",
    curriculumPhase: "Phase 4 (Months 7-8)",
    relevance: "Great for testing wireframes, interactive page layouts, and structuring administrative directories."
  },
  {
    name: "Codeacademy",
    url: "https://www.codecademy.com",
    logo: "💻",
    description: "Guided typing interface teaching visual syntax elements of general programming (HTML, CSS, or JS) interactively.",
    curriculumPhase: "Phase 4 (Months 7-8)",
    relevance: "Transitioning students from block tiles into direct typing of clean commands (like styling colours!)"
  },
  {
    name: "Code Avengers",
    url: "https://www.codeavengers.com",
    logo: "🦸",
    description: "A gamified storybook platform with sequential step quizzes to learn HTML/CSS web coding and Javascript animation logic.",
    curriculumPhase: "Phase 4 (Months 7-8)",
    relevance: "Keeps kids motivated via superhero narratives to build personalized portfolio homepages."
  },
  {
    name: "Glitch",
    url: "https://glitch.com",
    logo: "🎏",
    description: "An amazing interactive online web hosting and code editor that lets anyone edit real web apps in real-time, instantly visible online.",
    curriculumPhase: "Phase 5 (Months 9-10)",
    relevance: "Empowers collaborative digital initiatives like creating a real functional state literacy page!"
  }
];

export const CURRICULUM_MONTHS: CurriculumMonth[] = [
  {
    monthIndex: 1,
    monthName: "June (Welcome Back & Spatial Logic)",
    allocatedHours: 5,
    platforms: ["Code.org"],
    title: "Introduction to Computational Thinking & Block Coding",
    objective: "Understand sequences, paths, and loops through the classic Code.org Maze puzzles.",
    beginnerChallenge: "Guide Angry Bird to the Pig in 5 forward moves.",
    intermediateChallenge: "Navigate a zigzag pathway by combining Moves and Turn indicators.",
    fastLearnerChallenge: "Help the collector coin collect 5 diamonds in a modular sequence with minimal blocks.",
    stepByStepDetails: [
      "Open your browser and register on Code.org class portal",
      "Observe the maze board coordinates (North, South, East, West)",
      "Understand the 'When Run' yellow starter block",
      "Drag and snap the orange 'Move Forward' blocks under 'When Run'",
      "Press the 'Reset & Run' button to test your logic!"
    ],
    referenceAnswer: {
      blocks: [
        "When Run",
        "Move Forward",
        "Move Forward",
        "Turn Right ↪",
        "Move Forward",
        "Move Forward"
      ],
      javascript: `moveForward();\nmoveForward();\nturnRight();\nmoveForward();\nmoveForward();`,
      explanation: "We move two steps forward, twist 90 degrees to the right to orient toward the target, and step two more times to arrive at the end slot.",
      localAnalogy: "ఈ ప్రక్రియ పొలంలో నడవడం వంటిది. గట్టు వెంబడి 2 అడుగులు ముందుకు వేసి, కుడి వైపుకు తిరిగి, మరో 2 అడుగులు నడిచి గమ్యాన్ని చేరుకుంటాము!"
    }
  },
  {
    monthIndex: 2,
    monthName: "July (Sprites & Animations in Play Lab)",
    allocatedHours: 5,
    platforms: ["Code.org"],
    title: "Creating Interactive Play Lab Games",
    objective: "Master event-handlers (like clicking, key presses) to control custom character movements.",
    beginnerChallenge: "Create a dog sprite that speaks 'Hello Andhra!' when clicked.",
    intermediateChallenge: "Add a tennis ball sprite that bounces around the board when the arrow keys are pressed.",
    fastLearnerChallenge: "Implement a scoring dashboard that adds points (+1) every time the player touches the star sprite.",
    stepByStepDetails: [
      "Launch Play Lab inside Code.org 'Course E'",
      "Use 'Set background' block to make school backyard",
      "Add a new Sprite 'Actor 1' with a preloaded character style",
      "Drag 'When Clicked' green event control block",
      "Snap 'Actor 1 says...' action underneath"
    ],
    referenceAnswer: {
      blocks: [
        "When Run ➔ Set background: 'AP Fields'",
        "Make new sprite: Actor 1 (Farmer Dog) at (200, 200)",
        "When Clicked: Actor 1 ➔ Play sound: 'applause' and Actor 1 says: 'Hello Future Code Stars!'"
      ],
      javascript: `setBackground("fields");\nconst actor1 = makeNewSprite("dog", 200, 200);\nwhenClicked(actor1, () => {\n  playSound("applause");\n  say(actor1, "Hello Future Code Stars!");\n});`,
      explanation: "By setting an event listener 'When Clicked', we command the system to monitor the mouse clicks and play audio and call-outs synchronously.",
      localAnalogy: "మనం పాఠశాలలో గంట మోగించినప్పుడు మాత్రమే తరగతి గదికి వెళ్తాము కదా! ఇది కూడా అలాంటిదే: 'When Click' (గంట మోగితే) ➔ 'Say Hello' (స్పందించండి)!"
    }
  },
  {
    monthIndex: 3,
    monthName: "August (Blocks with AI in mBlock)",
    allocatedHours: 6,
    platforms: ["mBlock"],
    title: "Introducing Artificial Intelligence & Smart Voice Modules",
    objective: "Incorporate Machine Learning Blocks to read text-to-speech triggers and design smart assistants.",
    beginnerChallenge: "Make the panda speak 'Namaste Teachers!' using text-to-speech blocks.",
    intermediateChallenge: "Create a speech recognition assistant that turns the canvas background green when the student says 'Andhra Green'.",
    fastLearnerChallenge: "Develop a basic calculator app inside mBlock that responds verbally with solutions using interactive inputs.",
    stepByStepDetails: [
      "Launch mBlock 5 on laptop or classroom PC screen",
      "Add 'Cognitive Services' / 'AI blocks' plugin manually",
      "Initialize 'When Flag Clicked' block",
      "Insert 'Recognize speech for 3 seconds in English' block",
      "Use an block condition check: 'if speech results = green' ➔ 'Set backdrop color to green'"
    ],
    referenceAnswer: {
      blocks: [
        "When Flag Clicked",
        "Clear graphic effects",
        "AI Extension: Recognize speech in English for 3s",
        "If < Speech Recognition Result includes 'Green' > Then:",
        "   Speak 'Changing Background to Green!' using text-to-speech",
        "   Switch backdrop to 'Green Village backdrop'"
      ],
      explanation: "The AI module sends audio signals to the cloud, retrieves computed transcription data, and outputs responsive styling events.",
      localAnalogy: "ఇది రోబో లేదా అలెక్సా మాట్లాడటం లాంటిది. మీ గొంతు విని కంప్యూటర్ రంగులను మారుస్తుంది!"
    }
  },
  {
    monthIndex: 4,
    monthName: "September (Mobile Apps inside App Inventor)",
    allocatedHours: 5,
    platforms: ["MIT App Inventor"],
    title: "Building Practical Android Applications for Agriculture & Schools",
    objective: "Learn layout screens, design UI buttons, and sound sensors to write utility mobile apps.",
    beginnerChallenge: "Build a single button 'Telugu Alphabet Soundboard' app that speaks 'Amma' (అమ్మ) when button clicking.",
    intermediateChallenge: "Create a 'Farming Crop Picker' app that displays a water level indicator when the farmer selects Coconut or Paddy.",
    fastLearnerChallenge: "Design a digital student diary app with editable text fields that saves local notes on user slates.",
    stepByStepDetails: [
      "Open MIT App Inventor and create 'AP_Farming_App'",
      "Drag a 'HorizontalArrangement' layout block onto visual phone canvas",
      "Insert 2 buttons and label them 'Paddy/వరి' and 'Mango/మామిడి'",
      "Go to the 'Blocks View' logic window",
      "Insert event: 'When Button1.Click ➔ set TextLabel.Text to: Require watering 3 times a week!'"
    ],
    referenceAnswer: {
      blocks: [
        "When Button_Paddy.Click",
        "   Set Label_Advice.Text to 'వరి పెంపకం: 5 సెం.మీ నీరు సదా అవసరం.'",
        "   Set Screen_Color to Skyblue",
        "   Call Sound_Sensor.Vibrate for 100 milliseconds"
      ],
      explanation: "This layout maps tactile events to text and trigger alerts, showing kids how native widgets can deliver immediate solutions for farmers.",
      localAnalogy: "వరిపంటకు నీరు ఎంత పోయాలో సలహా ఇవ్వడం కోసం మన రైతన్నలకు సహాయపడే మొబైల్ యాప్!"
    }
  },
  {
    monthIndex: 5,
    monthName: "October (Physics & Logic in Stencyl)",
    allocatedHours: 5,
    platforms: ["Stencyl"],
    title: "Dynamic Physics Simulation & Gravity Games",
    objective: "Master logic for movement speed, bouncing, tile sets, and collision blocks.",
    beginnerChallenge: "Place a solid wood actor element and drop a bouncing red apple from the screen ceiling.",
    intermediateChallenge: "Create a classic maze path where the ball slides dynamically when using physical keyboard sliders.",
    fastLearnerChallenge: "Design a standard target launcher with a sliding scoreboard tracking how many solid objects are smashed.",
    stepByStepDetails: [
      "Open Stencyl sandbox",
      "Create new workspace 'Village Bouncer'",
      "Create solid tile ground layer labeled 'AP Clay Ground'",
      "Add an actor 'Sweet Apple' with gravity property enabled = yes, and bounciness density = 0.8",
      "Launch preview test window to analyze free fall!"
    ],
    referenceAnswer: {
      blocks: [
        "On Actor Creation (Apple):",
        "   Set gravity scaling to 1.0",
        "   Set friction coefficient to 0.1",
        "On collision between Apple and Ground:",
        "   Play sound: 'pop'",
        "   Add 10 points to 'High Score' local counter"
      ],
      explanation: "By programming real-time gravity scales, the engine calculates velocity offsets and bounces items, simulating physical objects.",
      localAnalogy: "చెట్టు నుండి జామకాయ కింద పడినప్పుడు కొంచెం ఎగురుతుంది (Bounce) కదా! ఇక్కడ బాల్ కూడా అలాగే ఎగురుతుంది!"
    }
  },
  {
    monthIndex: 6,
    monthName: "November (Multi-Level Play in Unity Playground)",
    allocatedHours: 5,
    platforms: ["Unity Playground"],
    title: "Multi-layered Game Design and Action-Reaction Blocks",
    objective: "Formulate actions and triggers to link movement controls, hazards, and portals.",
    beginnerChallenge: "Assign movement sliders key bindings on a simple rocket sprite.",
    intermediateChallenge: "Add a health meter which decreases by -1 heart each time the rocket collides with meteor rocks.",
    fastLearnerChallenge: "Build a complete 2D mini-platformer where players must leap over obstacles to touch the National Flag flag post.",
    stepByStepDetails: [
      "Open Unity and load Unity Playground helper asset set",
      "Add predefined green spaceship sprite inside workspace center",
      "Attach 'MoveWithArrows' script component using visual property panel",
      "Add static visual barrier sprite and attach 'ConditionCollideDestroy' block",
      "Launch visual mode editor and observe reactions!"
    ],
    referenceAnswer: {
      blocks: [
        "Component 1: Move Visual Script ➔ Control using arrow inputs, speed: 8 units",
        "Component 2: Modify Health script on Trigger Enter ➔ Target tag: 'Hazard', Health reduction: -1",
        "Component 3: Load Next Scene on Trigger Enter ➔ Tag: 'Flagpost' ➔ Switch scene: 'Vikasit Bharat Victory Screen'"
      ],
      explanation: "Unity Playground replaces typed classes with component blocks that handle physics boundaries and switch states automatically.",
      localAnalogy: "ఇది గుడి ప్రాంగణంలో లేదా గ్రౌండ్ లో ఆటలు ఆడేటప్పుడు గీతలు దాటితే అవుట్ అవ్వడం లాంటి రూల్స్ సెట్ చేయడం!"
    }
  },
  {
    monthIndex: 7,
    monthName: "December (UI Design with Appy Pie)",
    allocatedHours: 4,
    platforms: ["Appy Pie"],
    title: "Visual UI Layout Design & Digital School Portfolios",
    objective: "Design and draft clean application interfaces with visual grids, banners, directories, and contact fields.",
    beginnerChallenge: "Design a nice digital homepage titled 'My AP Digital Class V'.",
    intermediateChallenge: "Structure a digital category system that links to 3 subject pages: Mathematics, Telugu, and Science.",
    fastLearnerChallenge: "Integrate a functional 'Teacher Feedback' screen with visual fields for name, comments, and rating slider.",
    stepByStepDetails: [
      "Access website portal Appy Pie creator",
      "Choose clean mobile layout template and apply 'AP Gov Blue Theme'",
      "Add visual Header text: 'Digital Classroom Folder - Andhra Pradesh'",
      "Add interactive Categories widget module with 3 icons",
      "Embed a feedback template with Rating Stars component"
    ],
    referenceAnswer: {
      blocks: [
        "Header Title: Primary School AI Folder",
        "Navigation grid: [Home (మొదటి పేజీ) | About Us | Lessons Portfolio | Help Center]",
        "Input Widget: text area: 'Type your feedback here', slider rating selector 1-5"
      ],
      explanation: "UI (User Interface) design is about crafting intuitive visuals so that farmers, parents, and kids can click buttons on screens naturally.",
      localAnalogy: "రైతు బజార్ కి వెళ్ళినప్పుడు కూరగాయలు విడివిడిగా వరుసగా అరేంజ్ చేసినట్లు, మన యాప్ లో సమాచారం కూడా చక్కగా అమర్చడమే డిజైన్!"
    }
  },
  {
    monthIndex: 8,
    monthName: "January (Intro to Coding Syntax - Codecademy)",
    allocatedHours: 5,
    platforms: ["Codeacademy"],
    title: "Translating Visual Blocks to Written Code Words",
    objective: "Transition from dragging code blocks to typing code text sentences safely.",
    beginnerChallenge: "Type print command 'print(\"Hello AP!\")' using python interactive compiler.",
    intermediateChallenge: "Declare a visual age text variable and write an checks conditional statements 'if age > 10: print(\"Let us learn code!\")'.",
    fastLearnerChallenge: "Write a complete simple count loop in Javascript that outputs 'Code Master' 5 times dynamically.",
    stepByStepDetails: [
      "Login to Codecademy class dashboard link",
      "Open Javascript/Python core sandbox compiler",
      "Type the character keys carefully - pay attention to quotes and brackets!",
      "Run python test code output",
      "See how computer compiles instructions line-by-line!"
    ],
    referenceAnswer: {
      blocks: [
        "let loopsCounter = 0;",
        "while (loopsCounter < 5) {",
        "   console.log('Class V Digital Star!');",
        "   loopsCounter = loopsCounter + 1;",
        "}"
      ],
      javascript: `let loopsCounter = 0;\nwhile (loopsCounter < 5) {\n  console.log("Class V Digital Star!");\n  loopsCounter = loopsCounter + 1;\n}`,
      explanation: "By combining variables, math conditions, and output logs, text programming executes massive tasks without large visual grids.",
      localAnalogy: "ఇంతకు ముందు కార్డ్స్ తో బొమ్మలు వేసాం. ఇప్పుడు నోట్‌బుక్ లో పెన్నుతో చక్కగా స్పష్టంగా పదాలు రాయడం లాంటిది!"
    }
  },
  {
    monthIndex: 9,
    monthName: "February (Interactive Stories - Code Avengers)",
    allocatedHours: 5,
    platforms: ["Code Avengers"],
    title: "Gamified Website Layouts with HTML and CSS Styling",
    objective: "Design custom visual pages using tag elements like headings, paragraphs, and colors.",
    beginnerChallenge: "Create an HTML title card '<h1>My Village is Beautiful</h1>' and make it blue color.",
    intermediateChallenge: "Add a paragraph box with historical data, insert a village paddy landscape photo and set custom margins.",
    fastLearnerChallenge: "Develop a 'Vikasit Bharat 2047: AP Digital Literacy' interactive grid banner with customized flex borders.",
    stepByStepDetails: [
      "Access Code Avengers web playground compiler",
      "Type visual structure tags: '<html>' and '<body>'",
      "Create high impact heading container visual block",
      "Add inline visual CSS classes to paint background soft slate grey",
      "Click visual refresh output to inspect your first website design!"
    ],
    referenceAnswer: {
      blocks: [
        "In Web Editor:",
        "<h1>నా కలల భారతదేశం - వికసిత్ భారత్ 2047</h1>",
        "<p style='color: green; font-size: 18px;'>ఆంధ్రప్రదేశ్ రాష్ట్రం డిజిటల్ అక్షరాస్యతతో దూసుకుపోతోంది!</p>",
        "<img src='ap_village_school.jpg' alt='Digital School AP' width='100%' />"
      ],
      javascript: `const container = document.createElement("div");\ncontainer.innerHTML = \`\n  <h1>నా కలల భారతదేశం - వికసిత్ భారత్ 2047</h1>\n  <p style="color: green; font-size: 18px;">ఆంధ్రప్రదేశ్ రాష్ట్రం డిజిటల్ అక్షరాస్యతతో దూసుకుపోతోంది!</p>\n\`;\ndocument.body.appendChild(container);`,
      explanation: "HTML acts as the skeletal beams of the house, while CSS works as structural paint, making the layouts accessible and beautiful.",
      localAnalogy: "ఇది ఇల్లు కట్టడం లాంటిది. ఇటుకలు HTML గోడలు అయితే, గోడలకు వేసే అందమైన రంగులు CSS లాంటివన్నమాట!"
    }
  },
  {
    monthIndex: 10,
    monthName: "March (Vikasit Bharat 2047 Project in Glitch)",
    allocatedHours: 5,
    platforms: ["Glitch"],
    title: "Vikasit Bharat 2047 Digital Launch Showcase",
    objective: "Collaborate online using real cloud sandboxes to upload, deploy, and showcase classroom projects.",
    beginnerChallenge: "Clone simple static layout page inside Glitch and write a personal student bio.",
    intermediateChallenge: "Implement an online digital display showcasing student certificates, WhatsApp QR codes, and photo snapshots of code.org projects.",
    fastLearnerChallenge: "Assemble a dynamic classroom project directory ('One School - One Digital Folder') showcasing code sandboxes with clickable tabs.",
    stepByStepDetails: [
      "Register on Glitch.com with teacher's guidance",
      "Click 'New Project' and clone starter school template repo",
      "Locate 'index.html' file inside Glitch workspace tree",
      "Edit title tags and save, see direct live instant deployment URL",
      "Share your live website URL with friends and parents in the village!"
    ],
    referenceAnswer: {
      blocks: [
        "Within Glitch editor:",
        "1. Create folder labeled 'one-school-digital-folder'",
        "2. Inside the folder, drop file 'student_muralikrishna.html' containing standard projects.",
        "3. Live Deploy output link shared on teacher's Primary School AI WhatsApp channel!"
      ],
      explanation: "Glitch launches live servers dynamically on the cloud layer, enabling anyone online to inspect and interact with the classroom's digital projects.",
      localAnalogy: "మీరు చేసిన అద్భుతమైన ప్రాజెక్ట్‌లను ఒక అందమైన ఎగ్జిబిషన్‌లో పెట్టి, గ్రామ ప్రజలందరికీ చూపిస్తున్నట్లు క్లౌడ్ ద్వారా ప్రపంచానికి చూపించడం!"
    }
  }
];
