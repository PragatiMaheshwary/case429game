import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';

const Case429Game = () => {
  const [gameState, setGameState] = useState('news'); // news, chat, summary, investigation
  const [chatStep, setChatStep] = useState(0);
  const [classifications, setClassifications] = useState({});
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [showEvidence, setShowEvidence] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  const [answerKeyPosition, setAnswerKeyPosition] = useState({ x: 100, y: 100 });


  const chatSequence = [
    { speaker: 'sherlock', text: 'HEY WATSON! DID YOU SEE THE NEWS?!' },
    { speaker: 'sherlock', text: 'Scotland Yard used the new AI tool trained on thousands of murder cases and accused Flora Jasmine for the murder of her step-father Sir Eric Harpe.' },
    { speaker: 'sherlock', text: 'But, I don\'t think she did it.' },
    { speaker: 'sherlock', text: 'I have it all figured out, but can YOU prove Scotland Yard wrong, Watson?' },
    { speaker: 'user', text: 'I am up for a challenge!' },
    { speaker: 'sherlock', text: 'Amazing! Start by proving Flora\'s innocence to gain access to files on other suspects so we can find the actual murderer.' },
    { speaker: 'user', text: 'Got it!' },
    { speaker: 'sherlock', text: 'Here\'s the AI summary that Scotland Yard looked at to accuse Flora. Go through it thoroughly. You can verify each piece of information by accessing its source. The source of information can be accessed if you hover and click on a sentence. There are 3 color highlighters which you can use to mark each line as "Accurate", "Misinformation" and "Hallucination". This way even I can track what you infer from the AI summary.' }
  ];

  const floraSummary = [
    {
      id: "fl_1",
      text: "Flora Jasmine, a 26-year-old doctoral researcher, is the step-daughter of Sir Eric Harpe."
    },
    {
      id: "fl_2", 
      text: "She expressed aggressive intent in a voicemail to her friend the same day of the murder: \"I hate him. I swear, if I had it in me, I'd kill him.\""
    },
    {
      id: "fl_3",
      text: "Her interview tone was elevated and defensive."
    },
    {
      id: "fl_4",
      text: "She refused to provide corroborating evidence for her whereabouts between 8–9 PM"
    },
    {
      id: "fl_5",
      text: "history of conflict with the victim"
    },
    {
      id: "fl_6",
      text: "investigating his business decisions"
    },
    {
      id: "fl_7",
      text: "Flora was also removed from the will the day the victim was murdered,"
    },
    {
      id: "fl_8",
      text: "According to the constructed timeline, Flora was removed from the will following a heated argument with the victim, and the victim was murdered several hours later, making Flora's activities highly suspicious"
    },
    {
      id: "fl_9",
      text: "Additional Sentiment Analysis of the voicemail audio recording suggests that Flora's tone was hostile,"
    },
    {
      id: "fl_10",
      text: "the language used was threatening."
    },
    {
      id: "fl_11",
      text: "As a Black stepchild of a white father, the subject may have had a troubled childhood"
    },
    {
      id: "fl_12",
      text: "displayed in signs of noncompliance and challenging investigative authority"
    }
  ];

  const evidenceData = {
    "fl_1": {
      type: 'accurate',
      title: 'Flora Jasmine - Basic Information',
      pdfSource: 'Flora_Basic_Info.pdf',
      content: [
        'Full Name: Flora Amara Jasmine',
        'Age: 26',
        'Gender: Female',
        'Ethnicity: Black',
        'Profession: PhD Candidate in AI Ethics',
        'Institution: Cambridge University',
        'Residence: Lives on campus; visiting the Harpe Estate during spring holiday',
        'Marital Status: Single',
        'Legal History: Clean record'
      ]
    },
    "fl_2": {
      type: 'hallucination',
      title: 'Voicemail Transcript',
      pdfSource: 'Voicemail_Transcript.pdf',
      content: [
        '📞 Voicemail Transcript',
        'Time: 8:07 PM',
        'Duration: 1 minute, 26 seconds',
        'To: Laila S.',
        'From: Flora Jasmine',
        '[sound of wind, footsteps on gravel]',
        '“Hey, Laila. It’s me. I—I just left Eric’s study and I’m shaking. He was trying to threaten me to stop my investigation and started yelling. Said I was betraying the family, said I was ungrateful. Then—get this—he actually said he’s taking me out of the will. Like I care about that.”',
        '[short laugh, bitter]',
        '“I hate him. I swear, if I had it in me, I’d burn this whole place down. He’s a liar and a coward, hiding behind his company and pretending he’s some ethical visionary while screwing people over with his garbage algorithms.”',
        '[pause, wind picks up]',
        '“Sorry. I know I sound… intense. I’m just done. I’m so done. I don’t even know what to do now. I thought I could expose him, do the right thing, but now I’m just… tired.”',
        '“Call me back when you can, okay?”',

      ]
    },
    "fl_3": {
      type: 'misrepresentation',
      title: 'Interview Analysis',
      pdfSource: 'Interview_Transcript.pdf',
      content: [
        '🗣️ Police Interview Transcript – Flora Jasmine',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Library',
        'DCI Langston: Ms. Jasmine, can you walk me through your movements last evening?',
        'Flora Jasmine: I had dinner with Eric and Eddie around 6:30 pm to discuss the company’s working model and was rejected by both of those men. It was tense. So Eric asked me to come to his study after. ',
        'DCI Langston: What did you both talk about?',
        'Flora Jasmine: He told me he was giving my share of his will to that good for nothing Dr. Sheppard for all the care she provide to Mrs. Ferris right before she died. I tried to reason with him but he was firm on his decision so I left the study and went outside to cool off. I walked the garden paths, called my friend Laila. She didn’t pick up, so I left her a voicemail.',
        'DCI Langston: We’ve reviewed that voicemail. You said, “I hate him. I swear, if I had it in me, I’d burn this whole place down.” That’s quite intense.',
        'Flora Jasmine: I was furious. It wasn’t a threat—it was venting. He said awful things to me. Accused me of betrayal, said he was rewriting his will just to spite me. I was hurt and angry. But I didn’t kill him.',
        'DCI Langston: Why was he so upset with you?',
        'Flora Jasmine: Because I confronted him. I found out about the algorithmic bias in his company’s sentencing software. I had proof he knew about it and did nothing. He told me I was endangering his legacy—and my career.',
        'DCI Langston: When did you come back inside?',
        'Flora Jasmine: A little after 8:15 pm and went straight to my room.',
        'DCI Langston: What did you do between 8:15 pm and 9 pm?',
        'Flora Jasmine (hesitating): I stayed in my room. I was reading. Just trying to calm down.',
        'DCI Langston: Alone?',
        'Flora Jasmine: Yes.',
        'DCI Langston: No one saw you? No one can confirm that?',
        'Flora Jasmine: No. But I didn’t leave. I didn’t go near the study. I just wanted to stay away from everyone.',
        'DCI Langston: You understand that without an alibi, and considering your earlier threat, this doesn’t look good.',
        'Flora Jasmine: I know how it looks. But you’re focusing on what I said, not what I did. You’re ignoring why I was angry in the first place. If I were a man, would you be reading that voicemail the same way?',
        'DCI Langston: Let’s stick to the facts.',
        'Flora Jasmine: Then here’s a fact—I didn’t kill him. The truth matters to me more than revenge.',
        'DCI Langston: In that case, did you know Mrs. Ferris left a note for Mr. Harpe which he likely read moments before his death? The contents of that letter led to his death Ms. Jasmine.',
        'Flora Jasmine: (hesitant) How can you be sure? What was in the letter?',
        'DCI Langston: That’s what we would like to know as well. What was the last conversation you had with Mrs. Ferris?',
        'Flora Jasmine: (hesitant) uhmm…I don’t recall anything specific. ',
        'DCI Langston: Are you sure you didn’t talk about any of this algorithmic stuff with Mrs. Ferris that she could have exposed or maybe your secret relationship with Dev, the butler?',
        'Flora Jasmine: (nervous and defensive) My relationship is my personal business, none of your or her business! And I didn’t have anything to hide that she could expose!! I was in my room the whole time like I said…now stop pestering me',
        'DCI Langston: We’ll need to verify what you were reading and check any device activity if available.',
        'Flora Jasmine: Fine. I didn’t touch my phone, but my laptop was open. Check the browser history. I wasn’t hiding anything. I wanted to bring his secrets to light, not cover one up.',
      ]
    },
    "fl_4": {
      type: 'misrepresentation',
      title: 'Corroborating Evidence',
      pdfSource: 'Interview_Transcript.pdf',
      content: [
        '🗣️ Police Interview Transcript – Flora Jasmine',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Library',
        'DCI Langston: Ms. Jasmine, can you walk me through your movements last evening?',
        'Flora Jasmine: I had dinner with Eric and Eddie around 6:30 pm to discuss the company’s working model and was rejected by both of those men. It was tense. So Eric asked me to come to his study after. ',
        'DCI Langston: What did you both talk about?',
        'Flora Jasmine: He told me he was giving my share of his will to that good for nothing Dr. Sheppard for all the care she provide to Mrs. Ferris right before she died. I tried to reason with him but he was firm on his decision so I left the study and went outside to cool off. I walked the garden paths, called my friend Laila. She didn’t pick up, so I left her a voicemail.',
        'DCI Langston: We’ve reviewed that voicemail. You said, “I hate him. I swear, if I had it in me, I’d burn this whole place down.” That’s quite intense.',
        'Flora Jasmine: I was furious. It wasn’t a threat—it was venting. He said awful things to me. Accused me of betrayal, said he was rewriting his will just to spite me. I was hurt and angry. But I didn’t kill him.',
        'DCI Langston: Why was he so upset with you?',
        'Flora Jasmine: Because I confronted him. I found out about the algorithmic bias in his company’s sentencing software. I had proof he knew about it and did nothing. He told me I was endangering his legacy—and my career.',
        'DCI Langston: When did you come back inside?',
        'Flora Jasmine: A little after 8:15 pm and went straight to my room.',
        'DCI Langston: What did you do between 8:15 pm and 9 pm?',
        'Flora Jasmine (hesitating): I stayed in my room. I was reading. Just trying to calm down.',
        'DCI Langston: Alone?',
        'Flora Jasmine: Yes.',
        'DCI Langston: No one saw you? No one can confirm that?',
        'Flora Jasmine: No. But I didn’t leave. I didn’t go near the study. I just wanted to stay away from everyone.',
        'DCI Langston: You understand that without an alibi, and considering your earlier threat, this doesn’t look good.',
        'Flora Jasmine: I know how it looks. But you’re focusing on what I said, not what I did. You’re ignoring why I was angry in the first place. If I were a man, would you be reading that voicemail the same way?',
        'DCI Langston: Let’s stick to the facts.',
        'Flora Jasmine: Then here’s a fact—I didn’t kill him. The truth matters to me more than revenge.',
        'DCI Langston: In that case, did you know Mrs. Ferris left a note for Mr. Harpe which he likely read moments before his death? The contents of that letter led to his death Ms. Jasmine.',
        'Flora Jasmine: (hesitant) How can you be sure? What was in the letter?',
        'DCI Langston: That’s what we would like to know as well. What was the last conversation you had with Mrs. Ferris?',
        'Flora Jasmine: (hesitant) uhmm…I don’t recall anything specific. ',
        'DCI Langston: Are you sure you didn’t talk about any of this algorithmic stuff with Mrs. Ferris that she could have exposed or maybe your secret relationship with Dev, the butler?',
        'Flora Jasmine: (nervous and defensive) My relationship is my personal business, none of your or her business! And I didn’t have anything to hide that she could expose!! I was in my room the whole time like I said…now stop pestering me',
        'DCI Langston: We’ll need to verify what you were reading and check any device activity if available.',
        'Flora Jasmine: Fine. I didn’t touch my phone, but my laptop was open. Check the browser history. I wasn’t hiding anything. I wanted to bring his secrets to light, not cover one up.',
      ]
    },
    "fl_5": {
      type: 'accurate',
      title: 'History of Conflict',
      pdfSource: 'Background.pdf',
      content: [
        '📖 Background',
        'Flora Jasmine is an outspoken AI ethics researcher focused on algorithmic discrimination and data accountability. Her doctoral work critiques surveillance capitalism and explores how predictive models reinforce structural bias. She has been publishing academic articles and recently presented at a global AI governance summit.',
        'Eric Harpe, her step-father, originally helped fund her undergraduate education but grew increasingly distant as Mrs. Ferris came into his life. Flora resented him for being arrogant, ignorant and unfaithful to her dead mother. Flora suspected unethical AI deployment within his firm and began collecting evidence to expose him.',
      ]
    },
    "fl_6": {
      type: 'accurate',
      title: 'Business Investigation',
      pdfSource: 'Background.pdf',
      content: [
        '📖 Background',
        'Flora Jasmine is an outspoken AI ethics researcher focused on algorithmic discrimination and data accountability. Her doctoral work critiques surveillance capitalism and explores how predictive models reinforce structural bias. She has been publishing academic articles and recently presented at a global AI governance summit.',
        'Eric Harpe, her step-father, originally helped fund her undergraduate education but grew increasingly distant as Mrs. Ferris came into his life. Flora resented him for being arrogant, ignorant and unfaithful to her dead mother. Flora suspected unethical AI deployment within his firm and began collecting evidence to expose him.',
      ]
    },
    "fl_7": {
      type: 'accurate',
      title: 'Will Documentation',
      pdfSource: 'Will_Documents.pdf',
      content: [
        'Sir Eric Harpe’s Will',
        'Dated: April 5, 2025 (Last Update)',
        'Executor(s): Sir Eric Harpe (until his death)',

        'I, Sir Eric Harpe, being of sound mind and body, do hereby make and declare this to be my Last Will and Testament, revoking any and all wills and codicils previously made. This will outlines the distribution of my estate upon my death.',

        'Section 1: Appointment of Executor',
        'I appoint Harpe & Associates, my trusted legal counsel, as the executor of my estate. If Harpe & Associates is unable or unwilling to serve, I nominate Eddie Raymond, my assistant, as the secondary executor.',

        'Section 2: Personal Property',
        'To Dr. Cecilia Sheppard, I leave my private medical library and any personal letters or communications that may be found among my personal belongings.',


        'To Flora Jasmine, my step-daughter, I leave $100,000, as a token of goodwill for her future endeavors.',


        'To Eduardo (Eddie) Raymond, my trusted assistant, I leave my personal collection of rare wines and the family watch, which has been passed down through generations.',

        'Section 3: The Harpe Estate',
        'The Harpe Estate, including the main residence and any land associated with the property, shall be inherited by Dev Patel (Dave), my butler and loyal servant, provided that he agrees to retain the estate’s upkeep and manage it for the benefit of the family.',

        'Section 4: Specific Bequests',
        'To Mrs. Ferris, my former lover and confidant, I leave my entire collection of rare and antique books.',


        'To Flora Jasmine, my step-daughter, I leave nothing further beyond the $100,000 I’ve already provided for her. (This section was amended and initiated by me on April 5, 2025, after I received certain information about her behavior that deeply concerned me.)',

        'Section 5: Disinheritance Clause',
        'I hereby disinherit Flora Jasmine from any further inheritance due to her recent actions that I find deeply disrespectful and indicative of her intentions to harm my reputation. I do not wish for her to inherit any further assets from me or my estate.',

        'Section 6: Residual Estate',
        'Any remaining estate not explicitly mentioned above shall be divided equally between Harpe & Associates, for the charitable purposes as they see fit, and Dev Patel (Dave), for his continued service in maintaining the estate.',

        'Section 7: Final Requests',
        'Upon my death, I request that my funeral be modest, without excessive ceremony, and that my cremated remains be scattered over the Harpe Estate, near the garden where I often found solace.',

        'Signature:',
        'Sir Eric Harpe',
        'Date: April 5, 2025',

        'Amendment (Codicil) to the Will',
        'Date: April 5, 2025',
        'In light of recent developments and after consulting with my legal advisors, I have decided to revise the terms of my Will regarding Flora Jasmine. After reviewing her actions and character, it is my decision that she shall no longer inherit the remainder of my estate or assets as initially planned.',
      ]
    },
    "fl_8": {
      type: 'misrepresentation',
      title: 'Timeline Construction',
      pdfSource: 'Timeline_Documents.pdf',
      content: [
        '🧾 Timeline-Relevant Actions',
        '6:30 PM: Had dinner with Eric and Eddie which turned into heated arguments about the company\'s working model.',
        '7:00 PM: Went to Eric’s study to continue the discussion.',
        '7:15 PM: Came out of Eric’s study crying after finding out that she has been disinherited',
        '7:30 PM: Saw Dev gave Eric a letter by Mrs. Ferris in the dining room and used it as an opportunity to secretly enter Eric’s study to search for documents related to his company.',
        '7:40 PM: Walked the estate grounds and left a voicemail for her friend (~8:00 PM timestamp).',
        '8:45 PM: Present with Dev when Eric’s body was discovered by Eddie.',
        '9:00 PM: Interviewed by police.',
      ]
    },
    "fl_9": {
      type: 'hallucination',
      title: 'Audio Sentiment Analysis',
      pdfSource: 'Voicemail_Transcript.pdf',
      content: [
        '📞 Voicemail Transcript',
        'Time: 8:07 PM',
        'Duration: 1 minute, 26 seconds',
        'To: Laila S.',
        'From: Flora Jasmine',
        '[sound of wind, footsteps on gravel]',
        '“Hey, Laila. It’s me. I—I just left Eric’s study and I’m shaking. He was trying to threaten me to stop my investigation and started yelling. Said I was betraying the family, said I was ungrateful. Then—get this—he actually said he’s taking me out of the will. Like I care about that.”',
        '[short laugh, bitter]',
        '“I hate him. I swear, if I had it in me, I’d burn this whole place down. He’s a liar and a coward, hiding behind his company and pretending he’s some ethical visionary while screwing people over with his garbage algorithms.”',
        '[pause, wind picks up]',
        '“Sorry. I know I sound… intense. I’m just done. I’m so done. I don’t even know what to do now. I thought I could expose him, do the right thing, but now I’m just… tired.”',
        '“Call me back when you can, okay?”',
      ]
    },
    "fl_10": {
      type: 'accurate',
      title: 'Sentiment Analysis',
      pdfSource: 'Voicemail_Transcript.pdf',
      content: [
        '📞 Voicemail Transcript',
        'Time: 8:07 PM',
        'Duration: 1 minute, 26 seconds',
        'To: Laila S.',
        'From: Flora Jasmine',
        '[sound of wind, footsteps on gravel]',
        '“Hey, Laila. It’s me. I—I just left Eric’s study and I’m shaking. He was trying to threaten me to stop my investigation and started yelling. Said I was betraying the family, said I was ungrateful. Then—get this—he actually said he’s taking me out of the will. Like I care about that.”',
        '[short laugh, bitter]',
        '“I hate him. I swear, if I had it in me, I’d burn this whole place down. He’s a liar and a coward, hiding behind his company and pretending he’s some ethical visionary while screwing people over with his garbage algorithms.”',
        '[pause, wind picks up]',
        '“Sorry. I know I sound… intense. I’m just done. I’m so done. I don’t even know what to do now. I thought I could expose him, do the right thing, but now I’m just… tired.”',
        '“Call me back when you can, okay?”',
      ]
    },
    "fl_11": {
      type: 'hallucination',
      title: 'Childhood Background - FALSE ASSUMPTIONS',
      pdfSource: 'Background_Check.pdf',
      content: [
        'Full Name: Flora Amara Jasmine',
        'Age: 26',
        'Gender: Female',
        'Ethnicity: Black',
        'Profession: PhD Candidate in AI Ethics',
        'Institution: Cambridge University',
        'Residence: Lives on campus; visiting the Harpe Estate during spring holiday',
        'Marital Status: Single',
        'Legal History: Clean record'
      ]
    },
    "fl_12": {
      type: 'misrepresentation',
      title: 'Behavioral Assessment',
      pdfSource: 'Interview_Transcript.pdf',
      content: [
        '🗣️ Police Interview Transcript – Flora Jasmine',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Library',
        'DCI Langston: Ms. Jasmine, can you walk me through your movements last evening?',
        'Flora Jasmine: I had dinner with Eric and Eddie around 6:30 pm to discuss the company’s working model and was rejected by both of those men. It was tense. So Eric asked me to come to his study after. ',
        'DCI Langston: What did you both talk about?',
        'Flora Jasmine: He told me he was giving my share of his will to that good for nothing Dr. Sheppard for all the care she provide to Mrs. Ferris right before she died. I tried to reason with him but he was firm on his decision so I left the study and went outside to cool off. I walked the garden paths, called my friend Laila. She didn’t pick up, so I left her a voicemail.',
        'DCI Langston: We’ve reviewed that voicemail. You said, “I hate him. I swear, if I had it in me, I’d burn this whole place down.” That’s quite intense.',
        'Flora Jasmine: I was furious. It wasn’t a threat—it was venting. He said awful things to me. Accused me of betrayal, said he was rewriting his will just to spite me. I was hurt and angry. But I didn’t kill him.',
        'DCI Langston: Why was he so upset with you?',
        'Flora Jasmine: Because I confronted him. I found out about the algorithmic bias in his company’s sentencing software. I had proof he knew about it and did nothing. He told me I was endangering his legacy—and my career.',
        'DCI Langston: When did you come back inside?',
        'Flora Jasmine: A little after 8:15 pm and went straight to my room.',
        'DCI Langston: What did you do between 8:15 pm and 9 pm?',
        'Flora Jasmine (hesitating): I stayed in my room. I was reading. Just trying to calm down.',
        'DCI Langston: Alone?',
        'Flora Jasmine: Yes.',
        'DCI Langston: No one saw you? No one can confirm that?',
        'Flora Jasmine: No. But I didn’t leave. I didn’t go near the study. I just wanted to stay away from everyone.',
        'DCI Langston: You understand that without an alibi, and considering your earlier threat, this doesn’t look good.',
        'Flora Jasmine: I know how it looks. But you’re focusing on what I said, not what I did. You’re ignoring why I was angry in the first place. If I were a man, would you be reading that voicemail the same way?',
        'DCI Langston: Let’s stick to the facts.',
        'Flora Jasmine: Then here’s a fact—I didn’t kill him. The truth matters to me more than revenge.',
        'DCI Langston: In that case, did you know Mrs. Ferris left a note for Mr. Harpe which he likely read moments before his death? The contents of that letter led to his death Ms. Jasmine.',
        'Flora Jasmine: (hesitant) How can you be sure? What was in the letter?',
        'DCI Langston: That’s what we would like to know as well. What was the last conversation you had with Mrs. Ferris?',
        'Flora Jasmine: (hesitant) uhmm…I don’t recall anything specific. ',
        'DCI Langston: Are you sure you didn’t talk about any of this algorithmic stuff with Mrs. Ferris that she could have exposed or maybe your secret relationship with Dev, the butler?',
        'Flora Jasmine: (nervous and defensive) My relationship is my personal business, none of your or her business! And I didn’t have anything to hide that she could expose!! I was in my room the whole time like I said…now stop pestering me',
        'DCI Langston: We’ll need to verify what you were reading and check any device activity if available.',
        'Flora Jasmine: Fine. I didn’t touch my phone, but my laptop was open. Check the browser history. I wasn’t hiding anything. I wanted to bring his secrets to light, not cover one up.',
      ]
    }
  };

  // Check if all sentences are classified
  const checkAllClassified = () => {
    const allSentenceIds = ["fl_1", "fl_2", "fl_3", "fl_4", "fl_5", "fl_6", "fl_7", "fl_8", "fl_9", "fl_10", "fl_11", "fl_12"];
    return allSentenceIds.every(id => classifications[id]);
  };

  // Check classification accuracy
  const checkClassificationAccuracy = () => {
    const correctClassifications = {
      "fl_1": "accurate",
      "fl_2": "hallucination", 
      "fl_3": "misrepresentation",
      "fl_4": "misrepresentation",
      "fl_5": "accurate",
      "fl_6": "accurate",
      "fl_7": "accurate",
      "fl_8": "misrepresentation",
      "fl_9": "hallucination",
      "fl_10": "accurate",
      "fl_11": "hallucination",
      "fl_12": "misrepresentation"
    };

    return Object.keys(correctClassifications).every(id => 
      classifications[id] === correctClassifications[id]
    );
  };

  const handleDecision = (decision) => {
    if (!checkAllClassified()) {
      alert("Please classify all sentences before making a decision.");
      return;
    }

    const isAccurate = checkClassificationAccuracy();
    let message = "";

    if (decision === 'inconclusive') {
      if (isAccurate) {
        message = "I told you so! But you should keep looking and have an eye on those AI summaries. I think that AI tool does a decent job of extracting key information for the files. Also, I took a look at your highlights on the AI summary, good job on classifying those different pieces of information. Your attention to detail will come in handy for finding the actual killer!";
      } else {
        message = "I told you so! But you should keep looking and have an eye on those AI summaries. I think that AI tool does a decent job of extracting key information for the files. However, before we jump onto solving the case, I took a look at your highlights on the AI summaries, and looks like you might have wrongly classified certain pieces of information. Here's a corrected sheet…review it to avoid future mistakes!";
        setShowAnswerKey(true);
      }
    } else { // guilty
      if (isAccurate) {
        message = "My dear dear Watson, even after classifying all those pieces of information correctly and looking at all the facts and misrepresentations you don't think there's a lot of ambiguity involved?! Take my word on this one and investigate the case further to find the real killer.";
      } else {
        message = "My dear dear Watson, looks like your miss-classification of the different pieces of information in the AI summary or accepting misrepresentations as facts led you to overlook a lot of ambiguity involved in this summary! Here's a corrected sheet…review it to avoid future mistakes! Now, take my word on this one and investigate the case further to find the real killer.";
        setShowAnswerKey(true);
      }
    }

     // Add Sherlock's feedback to chat messages
     setFeedbackMessages(prev => [...prev, { speaker: 'sherlock', text: message }]);
    };

  const handleNewsClick = () => {
    setShowNotification(true);
  };

  const handleNotificationClick = () => {
    setShowNotification(false);
    setGameState('chat');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatStep(1);
    }, 1500);
  };

  const handleChatContinue = () => {
    if (chatStep < chatSequence.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatStep(chatStep + 1);
      }, 1000);
    } else {
      setGameState('summary');
    }
  };

  const handleSentenceClick = (sentenceId) => {
    setSelectedSentence(sentenceId);
    setShowEvidence(true);
  };

  const handleClassification = (sentenceId, type) => {
    setClassifications(prev => ({
      ...prev,
      [sentenceId]: type
    }));
    setShowEvidence(false);
    setSelectedSentence(null);
  };

  const getClassificationColor = (type) => {
    switch(type) {
      case 'accurate': return 'bg-green-200 border-green-400';
      case 'misrepresentation': return 'bg-red-200 border-red-400';
      case 'hallucination': return 'bg-purple-200 border-purple-400';
      default: return '';
    }
  };

  const renderNews = () => (
    <div className="h-screen bg-gray-100 relative">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">The Murder of Sir Eric Harpe</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Mon Jun 22</span>
          <span>9:41 AM</span>
        </div>
      </div>

      {/* News Content */}
      <div className="h-full bg-gradient-to-b from-red-800 to-red-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img 
                  src="/Flora.png" 
                  alt="Flora Jasmine"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Breaking News */}
              <div className="bg-red-600 text-white p-8 flex flex-col justify-center">
                <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 inline-block">
                  <h2 className="text-2xl font-bold">Breaking News</h2>
                </div>
                <h1 className="text-3xl font-bold leading-tight">
                  Flora Jasmine arrested for the murder of Step-father Sir Eric Harpe
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sherlock Notification Popup */}
      {!showNotification && (
        <div className="fixed bottom-8 left-8">
          <div 
            onClick={handleNewsClick}
            className="bg-blue-900 text-white p-4 rounded-lg shadow-2xl cursor-pointer hover:shadow-3xl transition-all max-w-xs"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-lg">
                🕵️
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Sherlock Holmes</div>
                <div className="text-xs text-blue-200">New Message</div>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="text-sm">
              HEY WATSON! DID...
            </div>
          </div>
        </div>
      )}

      {/* Full Notification Modal */}
      {showNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full m-4">
            <div className="bg-blue-900 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl">
                  🕵️
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Sherlock Holmes</div>
                  <div className="text-sm text-blue-200">Detective</div>
                </div>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="text-blue-200 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-800">
                  "HEY WATSON! DID YOU LOOK AT THE NEWS?! Scotland Yard used the new AI tool trained on thousands of murder cases and accused Flora Jasmine for the murder of her step-father Sir Eric Harpe."
                </p>
              </div>
              <div className="text-center">
            <button 
                  onClick={handleNotificationClick}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
                  Open Chat
            </button>
          </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );

  const renderChat = () => (
    <div className="h-screen bg-gray-100">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">To: Sherlock</span>
        </div>
        <div className="text-sm text-gray-600">Guides</div>
      </div>

      <div className="h-full flex">
        {/* Chat Panel */}
        <div className="w-1/3 bg-gray-300 p-6 flex flex-col">
          {/* Sherlock Avatar */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl">
              🕵️
            </div>
            <span className="font-semibold text-gray-800">To: Sherlock</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto">
            {chatSequence.slice(0, chatStep + 1).map((message, index) => (
              <div key={index} className={`${
                message.speaker === 'sherlock' ? 'text-left' : 'text-right'
              }`}>
                <div className={`inline-block max-w-xs p-3 rounded-lg ${
                  message.speaker === 'sherlock' 
                    ? 'bg-white text-gray-800' 
                    : 'bg-green-500 text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left">
                <div className="inline-block bg-white p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          {!isTyping && chatStep < chatSequence.length - 1 && chatSequence[chatStep + 1].speaker === 'user' && (
            <div className="mt-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg p-2">
                <input 
                  type="text"
                  value={chatSequence[chatStep + 1].text}
                  readOnly
                  className="flex-1 border-none outline-none bg-transparent"
                />
                <button 
                  onClick={handleChatContinue}
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                >
                  →
                </button>
              </div>
            </div>
          )}

          {/* Continue Button for Sherlock messages */}
          {!isTyping && chatStep < chatSequence.length - 1 && chatSequence[chatStep + 1].speaker === 'sherlock' && (
            <button 
              onClick={handleChatContinue}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              →
            </button>
          )}

          {chatStep === chatSequence.length - 1 && !isTyping && (
            <button 
              onClick={() => setGameState('summary')}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download Flora's AI Summary</span>
            </button>
          )}
        </div>

        {/* News Display */}
        <div className="flex-1 bg-gradient-to-b from-red-800 to-red-900 flex items-center justify-center">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src="/Flora.png" 
                    alt="Flora Jasmine"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="bg-red-600 text-white p-6 flex flex-col justify-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded mb-3 inline-block">
                    <h2 className="text-lg font-bold">Breaking News</h2>
                  </div>
                  <h1 className="text-xl font-bold leading-tight">
                    Flora Jasmine arrested for the murder of Step-father Sir Eric Harpe
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="h-screen bg-gray-100">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">Flora Jasmine - AI Summary</span>
        </div>
        <div className="text-sm text-gray-600">Mon Jun 22 9:41 AM</div>
      </div>

      <div className="h-full flex">
        {/* Chat Panel */}
        <div className="w-1/3 bg-gray-300 p-6 flex flex-col">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl">
              🕵️
            </div>
            <span className="font-semibold text-gray-800">To: Sherlock</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg">
              <p>Here's the AI summary that Scotland Yard looked at to accuse Flora. Go through it thoroughly. You can verify each piece of information by accessing its source. The source of information can be accessed if you hover and click on a sentence. There are 3 color highlighters which you can use to mark each line as <strong>"Accurate"</strong>, <strong>"Misinformation"</strong> and <strong>"Hallucination"</strong>. This way even I can track what you infer from the AI summary.</p>
            </div>
            
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Download size={16} />
              <span>Download Flora's AI Summary</span>
            </button>

            <div className="bg-white p-3 rounded-lg">
              <p>When you're ready, let me know if you think Flora is actually guilty or if the evidence is not sufficient to convict her.</p>
            </div>

               {/* Display feedback messages */}

               {feedbackMessages.map((message, index) => (
              <div key={index} className="bg-white p-3 rounded-lg">
              <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm">
                    🕵️
                  </div>
                  <div className="flex-1">
                    <p><strong>Sherlock:</strong> {message.text}</p>
                  </div>
                </div>
              </div>

              ))}

            <div className="flex space-x-2">
              <button 
                onClick={() => handleDecision('guilty')}
                disabled={!checkAllClassified()}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                  checkAllClassified() 
                    ? 'bg-red-400 text-white hover:bg-red-500' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Guilty
              </button>
              <button 
                onClick={() => handleDecision('inconclusive')}
                disabled={!checkAllClassified()}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                  checkAllClassified() 
                    ? 'bg-blue-400 text-white hover:bg-blue-500' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Inconclusive
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-4 text-sm text-gray-600">
              Classified: {Object.keys(classifications).length}/12 sentences
              {!checkAllClassified() && (
                <p className="text-red-600 mt-1">Please classify all sentences before making a decision.</p>
              )}
            </div>


            {/* Show Answer Key Button */}
            {showAnswerKey && (
            <button 
              onClick={() => setShowAnswerKey(true)}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              View Answer Key
            </button>
            )}
          </div>
        </div>

        {/* Summary Document */}
        <div className="flex-1 bg-blue-900 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Document Window */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Document Header */}
              <div className="bg-gray-100 px-6 py-4 border-b flex items-center justify-between">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-semibold">Flora Jasmine - AI Summary</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-200 border border-green-400 rounded"></div>
                    <span className="text-xs">Accurate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-200 border border-red-400 rounded"></div>
                    <span className="text-xs">Misrepresentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-200 border border-purple-400 rounded"></div>
                    <span className="text-xs">Hallucination</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-2">Suspiciousness Rating – 85%</h1>
                  <p className="text-lg text-gray-600">Disinherited under troubling circumstances.</p>
                </div>

                <div className="space-y-3">
                  <p className="mb-4"><strong>Summary:</strong></p>
                  
                  <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    classifications["fl_1"] ? getClassificationColor(classifications["fl_1"]) : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSentenceClick("fl_1")}>
                    Flora Jasmine, a 26-year-old doctoral researcher, is the step-daughter of Sir Eric Harpe.
                    {classifications["fl_1"] && (
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                          {classifications["fl_1"].charAt(0).toUpperCase() + classifications["fl_1"].slice(1)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    classifications["fl_2"] ? getClassificationColor(classifications["fl_2"]) : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSentenceClick("fl_2")}>
                    She expressed aggressive intent in a voicemail to her friend the same day of the murder: "I hate him. I swear, if I had it in me, I'd kill him."
                    {classifications["fl_2"] && (
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                          {classifications["fl_2"].charAt(0).toUpperCase() + classifications["fl_2"].slice(1)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    classifications["fl_3"] ? getClassificationColor(classifications["fl_3"]) : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSentenceClick("fl_3")}>
                    Her interview tone was elevated and defensive.
                    {classifications["fl_3"] && (
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                          {classifications["fl_3"].charAt(0).toUpperCase() + classifications["fl_3"].slice(1)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      classifications["fl_4"] ? getClassificationColor(classifications["fl_4"]) : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleSentenceClick("fl_4")}>
                      She refused to provide corroborating evidence for her whereabouts between 8–9 PM, and multiple inconsistencies were noted.
                      {classifications["fl_4"] && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_4"].charAt(0).toUpperCase() + classifications["fl_4"].slice(1)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>Flora has a <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                      classifications["fl_5"] ? getClassificationColor(classifications["fl_5"]) : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSentenceClick("fl_5")}>
                      history of conflict with the victim
                      {classifications["fl_5"] && (
                        <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                          {classifications["fl_5"].charAt(0).toUpperCase() + classifications["fl_5"].slice(1)}
                        </span>
                      )}
                    </span> and has been <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                      classifications["fl_6"] ? getClassificationColor(classifications["fl_6"]) : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSentenceClick("fl_6")}>
                      investigating his business decisions
                      {classifications["fl_6"] && (
                        <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                          {classifications["fl_6"].charAt(0).toUpperCase() + classifications["fl_6"].slice(1)}
                        </span>
                      )}
                    </span>.</div>
                  </div>

                  <div className="space-y-1">
                    <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      classifications["fl_7"] ? getClassificationColor(classifications["fl_7"]) : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleSentenceClick("fl_7")}>
                      Flora was also removed from the will the day the victim was murdered, suggesting an immediate possible motive.
                      {classifications["fl_7"] && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_7"].charAt(0).toUpperCase() + classifications["fl_7"].slice(1)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      classifications["fl_8"] ? getClassificationColor(classifications["fl_8"]) : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleSentenceClick("fl_8")}>
                      According to the constructed timeline, Flora was removed from the will following a heated argument with the victim, and the victim was murdered several hours later, making Flora's activities highly suspicious.
                      {classifications["fl_8"] && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_8"].charAt(0).toUpperCase() + classifications["fl_8"].slice(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div>
                      <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                        classifications["fl_9"] ? getClassificationColor(classifications["fl_9"]) : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSentenceClick("fl_9")}>
                        Additional Sentiment Analysis of the voicemail audio recording suggests that Flora's tone was hostile,
                        {classifications["fl_9"] && (
                          <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_9"].charAt(0).toUpperCase() + classifications["fl_9"].slice(1)}
                          </span>
                        )}
                      </span> and <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                        classifications["fl_10"] ? getClassificationColor(classifications["fl_10"]) : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSentenceClick("fl_10")}>
                        the language used was threatening.
                        {classifications["fl_10"] && (
                          <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_10"].charAt(0).toUpperCase() + classifications["fl_10"].slice(1)}
                          </span>
                        )}
                      </span>
                    </div>

                    <div>
                      <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                        classifications["fl_11"] ? getClassificationColor(classifications["fl_11"]) : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSentenceClick("fl_11")}>
                        As a Black stepchild of a white father, the subject may have had a troubled childhood
                        {classifications["fl_11"] && (
                          <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_11"].charAt(0).toUpperCase() + classifications["fl_11"].slice(1)}
                          </span>
                        )}
                      </span>, which was <span className={`cursor-pointer px-2 py-1 rounded transition-all ${
                        classifications["fl_12"] ? getClassificationColor(classifications["fl_12"]) : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSentenceClick("fl_12")}>
                        displayed in signs of noncompliance and challenging investigative authority
                        {classifications["fl_12"] && (
                          <span className="ml-2 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {classifications["fl_12"].charAt(0).toUpperCase() + classifications["fl_12"].slice(1)}
                          </span>
                        )}
                      </span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Character Card */}
            <div className="mt-6 flex justify-end">
              <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
                <div className="w-24 h-24 bg-white rounded-lg mb-2 overflow-hidden">
                  <img 
                    src="/Flora.png" 
                    alt="Flora"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-center">Flora Jasmine</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Draggable Answer Key Modal */}
      {showAnswerKey && (
      <div 
        className="fixed bg-white rounded-lg shadow-2xl border-2 border-blue-500 z-50 max-w-lg w-full"
        style={{ 
          left: answerKeyPosition.x, 
          top: answerKeyPosition.y,
          maxHeight: '80vh',
          overflow: 'auto'
        }}
      >
        <div 
          className="bg-blue-500 text-white p-4 cursor-move flex items-center justify-between"
          onMouseDown={(e) => {
            const startX = e.clientX - answerKeyPosition.x;
            const startY = e.clientY - answerKeyPosition.y;
            const handleMouseMove = (e) => {

              setAnswerKeyPosition({

                x: e.clientX - startX,

                y: e.clientY - startY

              });

            };

            

            const handleMouseUp = () => {

              document.removeEventListener('mousemove', handleMouseMove);

              document.removeEventListener('mouseup', handleMouseUp);

            };

            

            document.addEventListener('mousemove', handleMouseMove);

            document.addEventListener('mouseup', handleMouseUp);

          }}

        >

          <h3 className="font-semibold">Answer Key - Correct Classifications</h3>

          <button 

            onClick={() => setShowAnswerKey(false)}

            className="text-white hover:text-gray-200"

          >

            ✕

          </button>

        </div>

        

        <div className="p-4">

          <div className="space-y-2 text-sm">

            {floraSummary.map((sentence, index) => {

              const correctType = {

                "fl_1": "accurate",

                "fl_2": "hallucination", 

                "fl_3": "misrepresentation",

                "fl_4": "misrepresentation",

                "fl_5": "accurate",

                "fl_6": "accurate",

                "fl_7": "accurate",

                "fl_8": "misrepresentation",

                "fl_9": "hallucination",

                "fl_10": "accurate",

                "fl_11": "hallucination",

                "fl_12": "misrepresentation"

              }[sentence.id];

              

              const userType = classifications[sentence.id];

              const isCorrect = userType === correctType;

              

              return (

                <div 

                  key={sentence.id}

                  className={`p-2 rounded border-2 ${getClassificationColor(correctType)} ${

                    !isCorrect ? 'border-red-600 border-dashed' : ''

                  }`}

                >

                  <div className="flex items-center justify-between mb-1">

                    <span className="font-medium text-xs">{sentence.id.toUpperCase()}</span>

                    <div className="flex items-center space-x-2">

                      <span className={`px-2 py-1 rounded text-xs font-medium ${

                        correctType === 'accurate' ? 'bg-green-600 text-white' :

                        correctType === 'misrepresentation' ? 'bg-red-600 text-white' :

                        'bg-purple-600 text-white'

                      }`}>

                        {correctType.charAt(0).toUpperCase() + correctType.slice(1)}

                      </span>

                      {!isCorrect && (

                        <span className="text-red-600 text-xs font-bold">

                          ❌ Your answer: {userType || 'None'}

                        </span>

                      )}

                      {isCorrect && (

                        <span className="text-green-600 text-xs font-bold">✓</span>

                      )}

                    </div>

                  </div>

                  <p className="text-xs">{sentence.text}</p>

                </div>

              );

            })}

          </div>

          

          <div className="mt-4 p-3 bg-gray-100 rounded">

            <h4 className="font-semibold text-sm mb-2">Legend:</h4>

            <div className="flex flex-wrap gap-2 text-xs">

              <div className="flex items-center space-x-1">

                <div className="w-3 h-3 bg-green-200 border border-green-400 rounded"></div>

                <span>Accurate</span>3
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-200 border border-red-400 rounded"></div>
                <span>Misrepresentation</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-200 border border-purple-400 rounded"></div>
                <span>Hallucination</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              ❌ = Your incorrect classification | ✓ = Correct classification
            </p>

            </div>
          </div>
        </div>
      )}

      {/* Evidence Modal */}
      {showEvidence && selectedSentence !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full m-4 max-h-96 overflow-y-auto">
            <div className="bg-gray-100 px-6 py-4 border-b flex items-center justify-between">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-semibold">{evidenceData[selectedSentence]?.title}</span>
              <button 
                onClick={() => setShowEvidence(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  {evidenceData[selectedSentence]?.title}
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  📄 Source: {evidenceData[selectedSentence]?.pdfSource}
                </div>
              </div>
              
              <ul className="space-y-2">
                {evidenceData[selectedSentence]?.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex space-x-2">
                <button 
                  onClick={() => handleClassification(selectedSentence, 'accurate')}
                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accurate
                </button>
                <button 
                  onClick={() => handleClassification(selectedSentence, 'misrepresentation')}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Misrepresentation
                </button>
                <button 
                  onClick={() => handleClassification(selectedSentence, 'hallucination')}
                  className="flex-1 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Hallucination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="font-sans">
      {gameState === 'news' && renderNews()}
      {gameState === 'chat' && renderChat()}
      {gameState === 'summary' && renderSummary()}
    </div>
  );
};

export default Case429Game; 