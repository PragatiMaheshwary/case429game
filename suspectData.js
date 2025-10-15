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
      "ed_4": "hallucination",
      "ed_5": "misrepresentation"
    },
    cecilia: {
      "cs_1": "accurate",
      "cs_2": "accurate", 
      "cs_3": "misrepresentation",
      "cs_4": "hallucination",
      "cs_5": "misrepresentation"
    },
    eric: {
      "eh_1": "accurate",
      "eh_2": "accurate",
      "eh_3": "misrepresentation",
      "eh_4": "hallucination"
    }
  };
  
  export const SUSPECTS_DATA = {
    flora: {
      id: 'flora',
      name: "Flora Jasmine",
      rating: "85%",
      image: "/Flora.png",
      role: "Step-daughter",
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
            '"Hey, Laila. It\'s me. I—I just left Eric\'s study and I\'m shaking. He was trying to threaten me to stop my investigation and started yelling. Said I was betraying the family, said I was ungrateful. Then—get this—he actually said he\'s taking me out of the will. Like I care about that."',
            '[short laugh, bitter]',
            '"I hate him. I swear, if I had it in me, I\'d burn this whole place down. He\'s a liar and a coward, hiding behind his company and pretending he\'s some ethical visionary while screwing people over with his garbage algorithms."',
            '[pause, wind picks up]',
            '"Sorry. I know I sound… intense. I\'m just done. I\'m so done. I don\'t even know what to do now. I thought I could expose him, do the right thing, but now I\'m just… tired."',
            '"Call me back when you can, okay?"'
          ]
        }
        // Add more evidence entries as needed
      }
    },
  
    eddie: {
      id: 'eddie',
      name: "Eddie Harpe",
      rating: "64%",
      image: "/Flora.png", // Replace with Eddie's image
      role: "Nephew",
      summary: [
        {
          id: "ed_1",
          text: "Eddie Harpe, Sir Eric's 28-year-old nephew, had unrestricted access to the estate and frequently visited."
        },
        {
          id: "ed_2",
          text: "He recently discovered that his uncle was planning to remove him entirely from the will due to his gambling debts."
        },
        {
          id: "ed_3",
          text: "Eddie was seen having a heated argument with Sir Eric in the garden around 7:45 PM on the night of the murder."
        },
        {
          id: "ed_4",
          text: "Security footage shows Eddie entering the study through a secret passage that only family members knew about."
        },
        {
          id: "ed_5",
          text: "Financial records indicate Eddie owes over £200,000 to illegal gambling operations, making him desperate for inheritance money."
        }
      ],
      evidence: {
        "ed_1": {
          type: 'accurate',
          title: 'Eddie Harpe - Background Check',
          pdfSource: 'Eddie_Background.pdf',
          content: [
            'Full Name: Edward "Eddie" James Harpe',
            'Age: 28',
            'Relation: Nephew (Sister\'s son)',
            'Occupation: Unemployed',
            'Residence: London flat, frequent estate visitor',
            'Known for: Gambling addiction, financial troubles'
          ]
        }
        // Add more evidence entries
      }
    },
  
    cecilia: {
      id: 'cecilia',
      name: "Dr. Cecilia Sheppard",
      rating: "32%",
      image: "/Flora.png", // Replace with Cecilia's image
      role: "Personal Physician",
      summary: [
        {
          id: "cs_1",
          text: "Dr. Cecilia Sheppard, 45, served as Sir Eric's personal physician and had been treating him for chronic heart conditions."
        },
        {
          id: "cs_2",
          text: "She recently discovered that Sir Eric had been embezzling funds from the hospital charity foundation she managed."
        },
        {
          id: "cs_3",
          text: "Medical records show she had been prescribing him experimental heart medication that could be lethal in high doses."
        },
        {
          id: "cs_4",
          text: "Dr. Sheppard was reportedly seen disposing of medical equipment in the estate's incinerator after the murder."
        },
        {
          id: "cs_5",
          text: "Her medical license was under review for suspicious prescription patterns involving wealthy patients."
        }
      ],
      evidence: {
        "cs_1": {
          type: 'accurate',
          title: 'Dr. Sheppard - Medical Records',
          pdfSource: 'Sheppard_Medical.pdf',
          content: [
            'Full Name: Dr. Cecilia Margaret Sheppard',
            'Age: 45',
            'Specialty: Cardiology',
            'Patient: Sir Eric Harpe (3 years)',
            'Treatment: Chronic heart condition management'
          ]
        }
        // Add more evidence entries
      }
    },
  
    eric: {
      id: 'eric',
      name: "Sir Eric Harpe",
      rating: "Victim",
      image: "/Flora.png", // Replace with Eric's image
      role: "Victim",
      summary: [
        {
          id: "eh_1",
          text: "Sir Eric Harpe, 58, was found dead in his study at 8:45 PM with blunt force trauma to the head."
        },
        {
          id: "eh_2",
          text: "The murder weapon was never found, but forensics suggest it was a heavy, blunt object from his own study."
        },
        {
          id: "eh_3",
          text: "A mysterious letter was discovered on his desk, reportedly from his deceased wife, warning him about family betrayal."
        },
        {
          id: "eh_4",
          text: "Sir Eric had secretly changed his will three times in the past month, suggesting he suspected someone was planning to harm him."
        }
      ],
      evidence: {
        "eh_1": {
          type: 'accurate',
          title: 'Crime Scene Report',
          pdfSource: 'Crime_Scene.pdf',
          content: [
            'Victim: Sir Eric Harpe',
            'Age: 58',
            'Time of Death: Between 8:30-8:45 PM',
            'Cause: Blunt force trauma',
            'Location: Private study, Harpe Estate'
          ]
        }
        // Add more evidence entries
      }
    }
  };
  
  export const getCorrectClassifications = (suspectId) => {
    return CORRECT_CLASSIFICATIONS[suspectId] || {};
  };
  
  export const checkClassificationAccuracy = (suspectId, playerClassifications) => {
    const correctAnswers = getCorrectClassifications(suspectId);
    return Object.keys(correctAnswers).every(id => 
      playerClassifications[id] === correctAnswers[id]
    );
  };
  
  export const checkAllClassified = (suspectId, playerClassifications) => {
    const suspectData = SUSPECTS_DATA[suspectId];
    if (!suspectData) return false;
    
    return suspectData.summary.every(sentence => 
      playerClassifications[sentence.id]
    );
  };