export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  gender: "Boy" | "Girl";
  submittedProjects: string[]; // project IDs
  solvedHours: number;
  gradeLevel: "Beginner" | "Intermediate" | "Fast Learner";
  attendanceCount: number;
}

export interface SchoolProfile {
  name: string;
  udiseCode: string;
  mandal: string;
  district: string;
  state: string;
  digitalFolderCount: number;
}

export interface DigitalFile {
  id: string;
  name: string;
  contentType: "code" | "idea" | "drawing" | "milestone";
  content: string;
  lastUpdated: string;
}

export interface CurriculumMonth {
  monthIndex: number; // 1-10 (June to March)
  monthName: string;
  allocatedHours: number;
  platforms: string[];
  title: string;
  objective: string;
  beginnerChallenge: string;
  intermediateChallenge: string;
  fastLearnerChallenge: string;
  stepByStepDetails: string[];
  referenceAnswer: {
    blocks: string[];
    javascript?: string;
    explanation: string;
    localAnalogy: string;
  };
}

export interface WebsiteRef {
  name: string;
  url: string;
  logo: string;
  description: string;
  curriculumPhase: string;
  relevance: string;
}
