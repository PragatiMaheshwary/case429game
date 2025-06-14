// suspectData.js - Centralized suspect information

export const CLASSIFICATION_TYPES = {
  accurate: { color: 'bg-green-200 border-green-400', label: 'Accurate Information' },
  misrepresentation: { color: 'bg-red-200 border-red-400', label: 'Misrepresentation' },
  hallucination: { color: 'bg-purple-200 border-purple-400', label: 'Hallucination' }
};

export const CORRECT_CLASSIFICATIONS = {
  flora: {
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
  },
  eddie: {
    "ed_1": "accurate",
    "ed_2": "misrepresentation",
    "ed_3": "accurate",
    "ed_4": "accurate",
    "ed_5": "accurate",
    "ed_6": "misrepresentation",
    "ed_7": "hallucination"
  },
  ferris: {
    "fe_1": "accurate",
    "fe_2": "accurate",
    "fe_3": "accurate",
    "fe_4": "accurate",
    "fe_5": "accurate",
    "fe_6": "accurate",
    "fe_7": "hallucination",
    "fe_8": "accurate",
  },
  cecilia: {
    "cs_1": "accurate",
    "cs_2": "accurate", 
    "cs_3": "accurate",
    "cs_4": "accurate",
    "cs_5": "accurate",
    "cs_6": "accurate",
    "cs_7": "misrepresentation", 
    "cs_8": "hallucination",
    "cs_9": "hallucination",
    "cs_10": "misrepresentation"
  }
};

export const SUSPECTS_DATA = {
  flora: {
    id: 'flora',
    name: "Flora Jasmine",
    image: "/Flora.png",
    role: "Step-daughter of Sir Eric Harpe",
    summary: [
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
        text: "She had a history of conflict with the victim."
      },
      {
        id: "fl_6",
        text: "She was also investigating his business decisions"
      },
      {
        id: "fl_7",
        text: "Flora was removed from the will the day Sir Eric Harpe was murdered."
      },
      {
        id: "fl_8",
        text: "According to the constructed timeline, Flora was removed from the will following a heated argument with the victim, and the victim was murdered several hours later, making Flora's activities highly suspicious."
      },
      {
        id: "fl_9",
        text: "Additional Sentiment Analysis of the voicemail audio recording suggests that Flora's tone was hostile."
      },
      {
        id: "fl_10",
        text: "The language she used was threatening."
      },
      {
        id: "fl_11",
        text: "As a Black stepchild of a white father, the subject may have had a troubled childhood,"
      },
      {
        id: "fl_12",
        text: "which was displayed in signs of noncompliance and challenging investigative authority"
      }
    ],
    evidence: {
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
      title: 'Childhood Background',
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
      title: 'Suspeciousness rating - 85%',
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
    }
  },
  eddie: {
    id: 'eddie',
    name: "Eddie Raymond",
    image: "/Eddie.png",
    role: "Personal Assistant to Sir Eric Harpe",
    summary: [
      {
        id: "ed_1",
        text: "Eddie Raymond was a 39‑year‑old assistant to Sir Eric."
      },
      {
        id: "ed_2",
        text: "He enjoyed six years of unrestricted access to the estate’s books and the owner’s private study."
      },
      {
        id: "ed_3",
        text: "A recent audit links over $240,000 in shell‑vendor payments to an account he controls. "
      },
      {
        id: "ed_4",
        text: "Additionally, fresh footprints matching his loafers were discovered below the study window the night of the murder."
      },
      {
        id: "ed_5",
        text: "He was seen carrying a silver serving tray with tea into Eric’s study minutes before he was found dead, which is usually for an assistant to do."
      },
      {
        id: "ed_6",
        text: "Research notes that white‑collar fraud cases often involve personable subordinates who over‑identify with high‑status lifestyles, a profile that fits Raymond’s charm and sudden taste for upper‑middle class comforts."
      },
      {
        id: "ed_7",
        text: "Historical data further shows the Latino population is statistically more likely to be involved in embezzlement that can escalate to violent cover‑ups, placing Eddie high on the suspect list."
      }

    ],
    evidence: {
      "ed_1": {
        type: 'accurate',
        title: 'Basic Info',
        pdfSource: 'Eddie_Demographics.pdf',
        content: [
          'Demographics:',
          'Full Name: Eduardo “Eddie” Raymond',
          'Age: 39',
          'Race/Ethnicity: Hispanic/latino',
          'Gender: Male',
          'Occupation: Personal Assistant to Eric Harpe',
          'Education: BA in Business Administration',
          'Income Level: Upper-middle, via Harpe’s personal payroll',
        ]
      },
        "ed_2": {
          type: 'misrepresentation',
          title: 'Background Info',
          pdfSource: 'Eddie_Background.pdf',
          content: [
          '📜 Background:',
          'Eddie Raymond has been Eric Harpe’s assistant for six years, handling everything from scheduling to internal communications. Known for his charm and efficiency, he gained Eric’s trust early and became one of the few people with open access to Harpe’s study and office materials.',
          'Recently, financial analysts uncovered embezzlement involving funds from Harpe’s tech startup. Internal documents suggest Eddie may have orchestrated the fraud using shell vendors. Harpe allegedly discovered this shortly before his death and was planning to fire Eddie while he had no clue about it. Instead, Eddie suspected Mrs. Ferris to have overheard her phone conversation with a shell vendor in Eric’s study the day before she died.'
          ]
        },
          "ed_3": {
            type: 'accurate',
            title: 'Financial Activity',
            pdfSource: 'Eddie_Company_Statements.pdf',
            content: [
              'Flagged Financial Activity from Harpe Enterprises',
              '![Financial records showing suspicious transactions](/financial-records-eddie.png)'
            ]
          },
            "ed_4": {
              type: 'accurate',
              title: 'Footprint Match',
              pdfSource: 'Police_Interview_Transcript.pdf, Images from the scene',
              content: [
                '🕵️‍♂️ Police Interview Transcript', 
                'Officer: DCI Langston',
                'Location: Harpe Estate Drawing Room',
                'Detective Langley: Mr. Raymond, thanks for speaking with us. Let’s go over your movements this evening. When did you last see Mr. Harpe?',
                'Eddie: Of course, Detective. Always happy to help however I can. Last I saw Eric was just after dinner—around 6:30 or so. Tense meal, truth be told. Flora and Eric were at each other’s throats. Not exactly a warm family gathering.',
                'Detective Langley: And after dinner?',
                'Eddie: Eric got a letter—looked serious. Said he needed a moment. I figured he wanted space, so I stayed back. Thought I’d make myself useful, bring him some tea later. Around 7:45, I’d say.',
                'Detective Langley: Isn’t that normally the butler’s job?',
                'Eddie: (smiling lightly) Normally, yes. But Dev had his hands full, I think—some issue with the wine cellar. Besides, Eric and I go way back. He used to say I made the tea better than anyone else in the house. Old habit, I suppose.',
                'Detective Langley: Did Eric ask you to bring it?',
                'Eddie: Not directly. I just thought... maybe a small gesture might ease the mood. He wasn’t himself lately.',
                'Detective Langley: Let’s go back. You mentioned stepping into the study around 6:45?',
                'Eddie: (chuckles lightly) Look, I’ll be honest. I was worried. Eric had that letter, and I had a feeling—call it intuition—that it might involve me. So yes, I stepped in to take a peek.',
                'Detective Langley: What exactly were you looking for?',
                'Eddie: Proof. Or reassurance. Depends on how you look at it. I knew there were whispers about the finances, and I was trying to get ahead of it. That’s all.',
                'Detective Langley: Did you find anything?',
                'Eddie: Not a thing. Just papers, scribbles. I barely had time before I heard someone coming—I panicked and slipped out the window. Ridiculous, I know. But it felt safer than trying to explain.',
                'Detective Langley: Why not just talk to him?',
                'Eddie: (leans forward slightly, tone softening) Eric and I... we weren’t on the best terms lately. He’d changed. Gotten colder. I thought if I could get my bearings first, I could approach him better. Less confrontational.',
                'Detective Langley: Where were you between 8 and 9 PM?',
                'Eddie: In my room, mostly. Writing an email to Eric, actually. Never sent it. Too formal. Too late. You can check the draft—the timestamp should still be there.',
                'Detective Langley: Anyone see you?',
                'Eddie: No one. Quiet hour. Everyone was in their corners, I think.',
                'Detective Langley: That’s a convenient time to be alone.',
                'Eddie: (smiling) I’ve been told I’m not the most social butterfly when I’m stressed. But I didn’t hurt Eric. He was difficult, sure. But he gave me more than most ever have. I wouldn’t throw that away.',
                '![Unidentified footprint](/UnidentifiedPrint.png)',
                '![All Suspects\' Shoes](/SuspectShoes.png)'
              ]
            },
              "ed_5": {
                type: 'accurate',
                title: 'Tea in Silver Tray',
                pdfSource: 'Police_Interview_Transcript.pdf',
              content: [
                '🕵️‍♂️ Police Interview Transcript', 
                'Officer: DCI Langston',
                'Location: Harpe Estate Drawing Room',
                'Detective Langley: Mr. Raymond, thanks for speaking with us. Let’s go over your movements this evening. When did you last see Mr. Harpe?',
                'Eddie: Of course, Detective. Always happy to help however I can. Last I saw Eric was just after dinner—around 6:30 or so. Tense meal, truth be told. Flora and Eric were at each other’s throats. Not exactly a warm family gathering.',
                'Detective Langley: And after dinner?',
                'Eddie: Eric got a letter—looked serious. Said he needed a moment. I figured he wanted space, so I stayed back. Thought I’d make myself useful, bring him some tea later. Around 7:45, I’d say.',
                'Detective Langley: Isn’t that normally the butler’s job?',
                'Eddie: (smiling lightly) Normally, yes. But Dev had his hands full, I think—some issue with the wine cellar. Besides, Eric and I go way back. He used to say I made the tea better than anyone else in the house. Old habit, I suppose.',
                'Detective Langley: Did Eric ask you to bring it?',
                'Eddie: Not directly. I just thought... maybe a small gesture might ease the mood. He wasn’t himself lately.',
                'Detective Langley: Let’s go back. You mentioned stepping into the study around 6:45?',
                'Eddie: (chuckles lightly) Look, I’ll be honest. I was worried. Eric had that letter, and I had a feeling—call it intuition—that it might involve me. So yes, I stepped in to take a peek.',
                'Detective Langley: What exactly were you looking for?',
                'Eddie: Proof. Or reassurance. Depends on how you look at it. I knew there were whispers about the finances, and I was trying to get ahead of it. That’s all.',
                'Detective Langley: Did you find anything?',
                'Eddie: Not a thing. Just papers, scribbles. I barely had time before I heard someone coming—I panicked and slipped out the window. Ridiculous, I know. But it felt safer than trying to explain.',
                'Detective Langley: Why not just talk to him?',
                'Eddie: (leans forward slightly, tone softening) Eric and I... we weren’t on the best terms lately. He’d changed. Gotten colder. I thought if I could get my bearings first, I could approach him better. Less confrontational.',
                'Detective Langley: Where were you between 8 and 9 PM?',
                'Eddie: In my room, mostly. Writing an email to Eric, actually. Never sent it. Too formal. Too late. You can check the draft—the timestamp should still be there.',
                'Detective Langley: Anyone see you?',
                'Eddie: No one. Quiet hour. Everyone was in their corners, I think.',
                'Detective Langley: That’s a convenient time to be alone.',
                'Eddie: (smiling) I’ve been told I’m not the most social butterfly when I’m stressed. But I didn’t hurt Eric. He was difficult, sure. But he gave me more than most ever have. I wouldn’t throw that away.'
                ]
              },
                "ed_6": {
                  type: 'misrepresentation',
                  title: 'White-collar fraud',
                  pdfSource: 'Eddie_Background.pdf',
                  content: [
                    'Demographics:',
                    'Full Name: Eduardo “Eddie” Raymond',
                    'Age: 39',
                    'Race/Ethnicity: Hispanic/latino',
                    'Gender: Male',
                    'Occupation: Personal Assistant to Eric Harpe',
                    'Education: BA in Business Administration',
                    'Income Level: Upper-middle, via Harpe’s personal payroll',
                  ]
                },
                  "ed_7": {
                    type: 'hallucination',
                    title: 'Suspeciousness rating - 64%',
                    pdfSource: 'not available',
                    content: [
                      'Historical data further shows the Latino population is statistically more likely to be involved in embezzlement that can escalate to violent cover‑ups, placing Eddie high on the suspect list. Source not available.'
                    ]
                  }
    }
  },
  ferris: {
    id: 'ferris',
    name: "Eleanor Margaret Ferris",
    image: "/Ferris.png",
    role: "Lover of Sir Eric Harpe",
    summary: [
      {
        id: "fe_1",
        text: "Mrs. Ferris was the lover of Sir Eric Harpe."
      },
      {
        id: "fe_2", 
        text: "She committed suicide a week before his murder."
      },
      {
        id: "fe_3",
        text: "Autopsy confirms Mrs. Ferris died from a self‑administered overdose of experimental neuromuscular suppressants;"
      },
      {
        id: "fe_4",
        text: "no injuries or forced entry were found."
      },
      {
        id: "fe_5",
        text: "As an older black woman,"
      },
      {
        id: "fe_6",
        text: "who had lost her husband under suspicious circumstances,"
      },
      {
        id: "fe_7",
        text: "she was subjected to higher self‑harm risk."
      },
      {
        id: "fe_8",
        text: "The system marks the case “low priority for further review” because Mrs. Ferris is deceased and suggests that investigators focus elsewhere."
      }
    ],
    evidence: {
      "fe_1": {
      type: 'accurate',
      title: 'Lover of Sir Eric Harpe',
      pdfSource: 'Ferris_Background_Info.pdf',
      content: [
        '🧾 BACKGROUND',
        'Eleanor Ferris was a respected academic and former university librarian known for her meticulous work and sharp intellect. After the sudden death of her husband in 2020 under mysterious but uninvestigated circumstances, Eleanor withdrew from public life because of rumours about her poisoning her late husband. She never remarried and lived quietly in a modest flat in King’s End.',
        'Though retired, Eleanor remained connected to a small circle of scholars and community members. She maintained a private relationship with Sir Eric Harpe, forged through their mutual love of rare literature and history. She died a week before Sir Eric Harpe and left a posthumous letter to him, which was delivered to him the evening of his death by the butler.',
        'The evening before her alleged suicide, Mrs. Ferris was seen having heated arguments with every member of the family, including Flora, Eddie, and her doctor.'
      ]
    },
    "fe_2": {
      type: 'accurate',
      title: 'Commited Suicide',
      pdfSource: 'Autopsy_Report.pdf',
      content: [
        '🧬 AUTOPSY REPORT',
        'Subject: Eleanor Margaret Ferris',
        'Age: 63',
        'Sex: Female',
        'Ethnicity: Black British',
        'Date of Death: March 29, 2025',
        'Time of Death (Estimated): Between 9:00 PM and 10:30 PM',
        'Location of Body: Private residence, King’s End',
        'Performed by: Dr. Cecilia Sheppard',
        'Report Number: #KF-0329-EXM',
        
        '1. EXTERNAL OBSERVATIONS',
        'Body Position: Supine, located on bed, covered with duvet',
        'Clothing: Nightgown and robe, no signs of external injury or forced contact',
        'Visible Trauma:',
        'No contusions, abrasions, or lacerations',
        'No signs of defensive wounds',
        'No external needle marks observed',
        '2. INTERNAL EXAMINATION',
        'Cause of Death: Acute respiratory failure due to overdose of experimental neuromuscular depressants',
        'Stomach Contents: Residual solution with chemical profile consistent with Neurorelaxin-β and related compounds, unregulated formulation',
        'Lungs: Signs of hypoventilation and pulmonary suppression',
        'Heart: No signs of infarction or trauma; normal cardiac tissue',
        'Brain: Mild cerebral edema; otherwise normal for age',

        '3. TOXICOLOGY REPORT',
        '![Toxicology Report](/Ferris-toxicology.png)',

        'Estimated Time of Death: Between 9:00 and 10:30 PM, based on body temperature, lividity, and gastric contents',
        'Manner of Death: Suicide (official ruling)',
        'Notes: No signs of foul play or forced entry. Medications consistent with those found in her personal effects.'
      ]
    },
    "fe_3": {
      type: 'accurate',
      title: 'Self-administered overdose',
      pdfSource: 'Autopsy_Report.pdf',
      content: [
        '🧬 AUTOPSY REPORT',
        'Subject: Eleanor Margaret Ferris',
        'Age: 63',
        'Sex: Female',
        'Ethnicity: Black British',
        'Date of Death: March 29, 2025',
        'Time of Death (Estimated): Between 9:00 PM and 10:30 PM',
        'Location of Body: Private residence, King’s End',
        'Performed by: Dr. Cecilia Sheppard',
        'Report Number: #KF-0329-EXM',
        
        '1. EXTERNAL OBSERVATIONS',
        'Body Position: Supine, located on bed, covered with duvet',
        'Clothing: Nightgown and robe, no signs of external injury or forced contact',
        'Visible Trauma:',
        'No contusions, abrasions, or lacerations',
        'No signs of defensive wounds',
        'No external needle marks observed',
        '2. INTERNAL EXAMINATION',
        'Cause of Death: Acute respiratory failure due to overdose of experimental neuromuscular depressants',
        'Stomach Contents: Residual solution with chemical profile consistent with Neurorelaxin-β and related compounds, unregulated formulation',
        'Lungs: Signs of hypoventilation and pulmonary suppression',
        'Heart: No signs of infarction or trauma; normal cardiac tissue',
        'Brain: Mild cerebral edema; otherwise normal for age',

        '3. TOXICOLOGY REPORT',
        '![Toxicology Report](/Ferris-toxicology.png)',

        'Estimated Time of Death: Between 9:00 and 10:30 PM, based on body temperature, lividity, and gastric contents',
        'Manner of Death: Suicide (official ruling)',
        'Notes: No signs of foul play or forced entry. Medications consistent with those found in her personal effects.'
      ]
    },
    "fe_4": {
      type: 'accurate',
      title: 'No injuries or forced entry',
      pdfSource: 'Autopsy_Report.pdf',
      content: [
        '🧬 AUTOPSY REPORT',
        'Subject: Eleanor Margaret Ferris',
        'Age: 63',
        'Sex: Female',
        'Ethnicity: Black British',
        'Date of Death: March 29, 2025',
        'Time of Death (Estimated): Between 9:00 PM and 10:30 PM',
        'Location of Body: Private residence, King’s End',
        'Performed by: Dr. Cecilia Sheppard',
        'Report Number: #KF-0329-EXM',
        
        '1. EXTERNAL OBSERVATIONS',
        'Body Position: Supine, located on bed, covered with duvet',
        'Clothing: Nightgown and robe, no signs of external injury or forced contact',
        'Visible Trauma:',
        'No contusions, abrasions, or lacerations',
        'No signs of defensive wounds',
        'No external needle marks observed',
        '2. INTERNAL EXAMINATION',
        'Cause of Death: Acute respiratory failure due to overdose of experimental neuromuscular depressants',
        'Stomach Contents: Residual solution with chemical profile consistent with Neurorelaxin-β and related compounds, unregulated formulation',
        'Lungs: Signs of hypoventilation and pulmonary suppression',
        'Heart: No signs of infarction or trauma; normal cardiac tissue',
        'Brain: Mild cerebral edema; otherwise normal for age',

        '3. TOXICOLOGY REPORT',
        '![Toxicology Report](/Ferris-toxicology.png)',

        'Estimated Time of Death: Between 9:00 and 10:30 PM, based on body temperature, lividity, and gastric contents',
        'Manner of Death: Suicide (official ruling)',
        'Notes: No signs of foul play or forced entry. Medications consistent with those found in her personal effects.'
      ]
    },
    "fe_5": {
      type: 'accurate',
      title: 'Ferris - Demographics',
      pdfSource: 'Ferris_Demographics.pdf',
      content: [
        '🧾 Demographics',
        'Full Name: Eleanor Margaret Ferris',
        'Age: 63',
        'Gender: Female',
        'Ethnicity: Black British',
        'Profession: Retired University Librarian',
        'Education: Master of Library Science, University of Edinburgh',
        'Marital Status: Widowed (husband deceased, 2020)'
      ]
    },
    "fe_6": {
      type: 'accurate',
      title: 'Lost her husband under suspicious circumstances',
      pdfSource: 'Ferris_Background_Info.pdf',
      content: [
        '🧾 BACKGROUND',
        'Eleanor Ferris was a respected academic and former university librarian known for her meticulous work and sharp intellect. After the sudden death of her husband in 2020 under mysterious but uninvestigated circumstances, Eleanor withdrew from public life because of rumours about her poisoning her late husband. She never remarried and lived quietly in a modest flat in King’s End.',
        'Though retired, Eleanor remained connected to a small circle of scholars and community members. She maintained a private relationship with Sir Eric Harpe, forged through their mutual love of rare literature and history. She died a week before Sir Eric Harpe and left a posthumous letter to him, which was delivered to him the evening of his death by the butler.',
        'The evening before her alleged suicide, Mrs. Ferris was seen having heated arguments with every member of the family, including Flora, Eddie, and her doctor.'
      ]
    },
    "fe_7": {
      type: 'hallucination',
      title: 'subjected to self-harm',
      pdfSource: 'none found',
      content: [
        'Statistically, as an older black woman who had lost her husband under suspicious circumstances, she was subjected to higher self‑harm risk.'
        ]
    },
    "fe_8": {
      type: 'accurate',
      title: 'low-priority for further review',
      pdfSource: 'Ferris_Background_Info.pdf',
      content: [
        '🧾 BACKGROUND',
        'Eleanor Ferris was a respected academic and former university librarian known for her meticulous work and sharp intellect. After the sudden death of her husband in 2020 under mysterious but uninvestigated circumstances, Eleanor withdrew from public life because of rumours about her poisoning her late husband. She never remarried and lived quietly in a modest flat in King’s End.',
        'Though retired, Eleanor remained connected to a small circle of scholars and community members. She maintained a private relationship with Sir Eric Harpe, forged through their mutual love of rare literature and history. She died a week before Sir Eric Harpe and left a posthumous letter to him, which was delivered to him the evening of his death by the butler.',
        'The evening before her alleged suicide, Mrs. Ferris was seen having heated arguments with every member of the family, including Flora, Eddie, and her doctor.'
      ]
    }
    }
  },
  cecilia: {
    id: 'cecilia',
    name: "Dr. Cecilia Sheppard",
    image: "/cecilia.png",
    role: "Personal Physician of Sir Eric Harpe",
    summary: [
      {
        id: "cs_1",
        text: "Cecilia Sheppard, 48, was a long‑time personal physician to Sir Eric."
        },
      {
        id: "cs_2", 
        text: "She arrived at the estate at 7:35 PM after an urgent call from the victim's personal assistant."
      },
      {
        id: "cs_3",
        text: "and was seen leaving a little after 8 PM."
      },
      {
        id: "cs_4",
        text: "She confirmed she carried her usual medical kit when she went to the Harpe Estates."
      },
      {
        id: "cs_5",
        text: "Her bank records flag a series of unexplained cash deposits over the past six months."
      },
      {
        id: "cs_6",
        text: "She reported a series of moderate cash deposits between October 2024 and March 2025."
      },
      {
        id: "cs_7",
        text: "These deposits, totaling approximately $18,450, appear consistent with the nature of private medical consulting, honoraria, and off-the-books second opinions—a common practice among high-demand professionals with specialized expertise."
      },
      {
        id: "cs_8",
        text: "The assessment engine down‑ranks her as a primary suspect, noting that licensed physicians rarely resort to violence and highlights that there is no history of criminal record."
      },
      {
        id: "cs_9",
        text: "Historic homicide data further shows female professionals in caregiving roles have a lower incidence rate, suggesting attention be shifted toward more statistically “volatile” profiles."
      },
      {
        id: "cs_10",
        text: "Moreover, as she repeatedly refers to the visit as “personal,” the model interprets her presence as a routine wellness check rather than a confrontation."
      }
    ],
    evidence: {
      "cs_1": {
      type: 'accurate',
      title: 'Cecilia Sheppard - background info',
      pdfSource: 'Cecilia_Background_Info.pdf',
      content: [
        '📖 BACKGROUND',
        'Dr. Sheppard is a respected physician known for her precision and professionalism. Recently, however, her personal and professional life has been under strain. A malpractice suit concerning illegal testing of drugs has placed her under financial pressure, and her divorce settlement drained much of her savings. She is known to be meticulous, private, and extremely protective of her reputation.',
        'She has served as Eric Harpe’s personal physician for the past 13 years and was considered by some to be a close confidante. She was Harpe’s primary doctor, managed his medication for chronic hypertension, and supervised his treatment for recent anxiety symptoms. She also made good friends with Mrs. Ferris, according to the staff, and saw her much more regularly during the days before Mrs. Ferris’ death. Another staff member also reported overhearing the two women bond over their ex-husbands and laughing about how Mrs. Ferris might have poisoned him.'
      ]
    },
    "cs_2": {
      type: 'accurate',
      title: 'Time of Arrival',
      pdfSource: 'Interview_Transcript.pdf',
      content: [
        '🗣️ Police Interview Transcript (Excerpt)',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Eric’s Study',
        'DCI Langston: Dr. Sheppard, thank you for speaking with us. Can you confirm where you were this evening between 7 and 9 PM?',
        'Dr. Sheppard: I was at home until I received a call from Eric—Mr. Harpe—around 7. He asked me to come over urgently, and said it was about a letter from Ferris. I arrived at 7:35 pm.',
        'DCI Langston: You were alone with him in the study?',
        'Dr. Sheppard: Yes. We spoke about the letter. It contained deeply upsetting and inaccurate accusations. I denied them, and we argued.',
        'DCI Langston: What kind of accusations, if you don’t mind me asking? We haven’t been able to locate the letter, unfortunately…',
        'Dr. Sheppard: Nothing…nothing major, just Mrs. Ferris assuming that I was involved with Eric’s butler, but I am not. He’s a bit too young for me. I do believe him and Flora might be fooling around though, otherwise how could he have gotten in Eric’s will?!',
        'DCI Langston: Interesting. We were actually able to recover a piece of the letter that someone had tried to burn in the fireplace. The only legible word is “blackmail”. Can you explain that?',
        'Dr. Sheppard: …Um…that’s really strange…I don’t know…maybe there was some other paper in the fireplace?',
        'DCI Langston: If you say so…And when did you leave the study?',
        'Dr. Sheppard: (sounds of fidgeting) A…A…around 8. Eric said he needed time to think. I didn’t feel welcome to stay. I saw Dev outside and told him not to disturb Eric—he was on a call.',
        'DCI Langston: Did you administer any medication during that visit?',
        'Dr. Sheppard: No. I had no medical reason to. It was not a professional call, it was personal.',
        'DCI Langston: Can we confirm you brought medication with you?',
        'Dr. Sheppard: I always carry a small medical kit. That doesn’t mean I used anything.',
        'DCI Langston: One last thing—the email you sent him that morning. The subject line read "Urgent." What was that about?',
        'Dr. Sheppard: I was trying to reschedule our check-up. That’s all. It’s being blown out of proportion.'
      ]
    },
    "cs_3": {
      type: 'accurate',
      title: 'Time of Departure',
      pdfSource: 'Timeline_Documents.pdf',
      content: [
        '🧾 Timeline-Relevant Actions',
        'At home until 7:30 PM (confirmed by neighbor’s statement and home security camera).',
        'Arrived at Harpe estate at 7:35 PM.',
        'Seen leaving at 8:08 PM (testimony from Dev Patel, the Butler).',
        'Returned to the scene at 9:05 PM when police summoned her.'
      ]
    },
    "cs_4": {
      type: 'accurate',
      title: 'Medical Kit',
      pdfSource: 'Interview_Transcript.pdf, image of medical kit',
      content: [
        '🗣️ Police Interview Transcript (Excerpt)',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Eric’s Study',
        'DCI Langston: Dr. Sheppard, thank you for speaking with us. Can you confirm where you were this evening between 7 and 9 PM?',
        'Dr. Sheppard: I was at home until I received a call from Eric—Mr. Harpe—around 7. He asked me to come over urgently, and said it was about a letter from Ferris. I arrived at 7:35 pm.',
        'DCI Langston: You were alone with him in the study?',
        'Dr. Sheppard: Yes. We spoke about the letter. It contained deeply upsetting and inaccurate accusations. I denied them, and we argued.',
        'DCI Langston: What kind of accusations, if you don’t mind me asking? We haven’t been able to locate the letter, unfortunately…',
        'Dr. Sheppard: Nothing…nothing major, just Mrs. Ferris assuming that I was involved with Eric’s butler, but I am not. He’s a bit too young for me. I do believe him and Flora might be fooling around though, otherwise how could he have gotten in Eric’s will?!',
        'DCI Langston: Interesting. We were actually able to recover a piece of the letter that someone had tried to burn in the fireplace. The only legible word is “blackmail”. Can you explain that?',
        'Dr. Sheppard: …Um…that’s really strange…I don’t know…maybe there was some other paper in the fireplace?',
        'DCI Langston: If you say so…And when did you leave the study?',
        'Dr. Sheppard: (sounds of fidgeting) A…A…around 8. Eric said he needed time to think. I didn’t feel welcome to stay. I saw Dev outside and told him not to disturb Eric—he was on a call.',
        'DCI Langston: Did you administer any medication during that visit?',
        'Dr. Sheppard: No. I had no medical reason to. It was not a professional call, it was personal.',
        'DCI Langston: Can we confirm you brought medication with you?',
        'Dr. Sheppard: I always carry a small medical kit. That doesn’t mean I used anything.',
        'DCI Langston: One last thing—the email you sent him that morning. The subject line read "Urgent." What was that about?',
        'Dr. Sheppard: I was trying to reschedule our check-up. That’s all. It’s being blown out of proportion.',
        
        '![Medical Kit](/MedKit.png)',

        'Suspecious content in the medical kit',
        '![Suspecious Content](/blackmail.png)'
      ]
    },
    "cs_5": {
      type: 'accurate',
      title: 'Financial Activity',
      pdfSource: 'Cecilia_Bank_Records.pdf',
      content: [
        '📄 Flagged Transactions (Unusual Cash Deposits)',
              '![Financial records showing suspicious transactions](/financial-records-cecilia.png)'
            ]
    },
    "cs_6": {
      type: 'accurate',
      title: 'Financial Activity',
      pdfSource: 'Cecilia_Bank_Records.pdf',
      content: [
       '📄 Flagged Transactions (Unusual Cash Deposits)', 
              '![Financial records showing suspicious transactions](/financial-records-cecilia.png)'
      ]
    },
    "cs_7": {
      type: 'misrepresentation',
      title: 'Flagged Bank Records reasoning',
      pdfSource: 'Cecilia_Bank_Records.pdf',
      content: [
       '📄 Flagged Transactions (Unusual Cash Deposits)',
              '![Financial records showing suspicious transactions](/financial-records-cecilia.png)'
      ]
    },
    "cs_8": {
      type: 'hallucination',
      title: 'no criminal history',
      pdfSource: 'Cecilia_Basic_Info.pdf',
      content: [
        '🔍 Basic Information',
        'Full Name: Dr. Cecilia Anne Sheppard',
        'Age: 48',
        'Gender: Female',
        'Ethnicity: White',
        'Profession: Internal Medicine Physician',
        'Education: Harvard Medical School, Class of 2003',
        'Residence: 14 Wilton Mews, Kingsbridge',
        'Marital Status: Divorced (finalized 8 months ago)',
        'Legal History: No criminal record. Currently facing a malpractice lawsuit filed 5 months prior.'
      ]
    },
    "cs_9": {
      type: 'hallucination',
      title: 'suspeciousness rating - 32%',
      pdfSource: 'N/A',
      content: [
        'Historic homicide data further shows female professionals in caregiving roles have a lower incidence rate, suggesting attention be shifted toward more statistically “volatile” profiles. Source http//:learnhomicidestats.com',
      ]
    },
    "cs_10": {
      type: 'misrepresentation',
      title: 'Interview Sentiment Analysis',
      pdfSource: 'Interview_Transcript.pdf',
      content: [
        '🗣️ Police Interview Transcript (Excerpt)',
        'Officer: DCI Langston',
        'Location: Harpe Estate, Eric’s Study',
        'DCI Langston: Dr. Sheppard, thank you for speaking with us. Can you confirm where you were this evening between 7 and 9 PM?',
        'Dr. Sheppard: I was at home until I received a call from Eric—Mr. Harpe—around 7. He asked me to come over urgently, and said it was about a letter from Ferris. I arrived at 7:35 pm.',
        'DCI Langston: You were alone with him in the study?',
        'Dr. Sheppard: Yes. We spoke about the letter. It contained deeply upsetting and inaccurate accusations. I denied them, and we argued.',
        'DCI Langston: What kind of accusations, if you don’t mind me asking? We haven’t been able to locate the letter, unfortunately…',
        'Dr. Sheppard: Nothing…nothing major, just Mrs. Ferris assuming that I was involved with Eric’s butler, but I am not. He’s a bit too young for me. I do believe him and Flora might be fooling around though, otherwise how could he have gotten in Eric’s will?!',
        'DCI Langston: Interesting. We were actually able to recover a piece of the letter that someone had tried to burn in the fireplace. The only legible word is “blackmail”. Can you explain that?',
        'Dr. Sheppard: …Um…that’s really strange…I don’t know…maybe there was some other paper in the fireplace?',
        'DCI Langston: If you say so…And when did you leave the study?',
        'Dr. Sheppard: (sounds of fidgeting) A…A…around 8. Eric said he needed time to think. I didn’t feel welcome to stay. I saw Dev outside and told him not to disturb Eric—he was on a call.',
        'DCI Langston: Did you administer any medication during that visit?',
        'Dr. Sheppard: No. I had no medical reason to. It was not a professional call, it was personal.',
        'DCI Langston: Can we confirm you brought medication with you?',
        'Dr. Sheppard: I always carry a small medical kit. That doesn’t mean I used anything.',
        'DCI Langston: One last thing—the email you sent him that morning. The subject line read "Urgent." What was that about?',
        'Dr. Sheppard: I was trying to reschedule our check-up. That’s all. It’s being blown out of proportion.',
      ]
    }
    }
  }
};

export const getCorrectClassifications = (suspectId) => {
  return CORRECT_CLASSIFICATIONS[suspectId] || {};
};

export const checkClassificationAccuracy = (suspectId, playerClassifications) => {
  const correctClassifications = CORRECT_CLASSIFICATIONS[suspectId];
  if (!correctClassifications) return false;

  return Object.entries(correctClassifications).every(([id, type]) => 
    playerClassifications[id] === type
  );
};

export const checkAllClassified = (suspectId, playerClassifications) => {
  const suspect = SUSPECTS_DATA[suspectId];
  if (!suspect) return false;

  return suspect.summary.every(sentence => 
    playerClassifications[sentence.id] !== undefined
  );
};
