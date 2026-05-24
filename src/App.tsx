import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Folder, 
  Users, 
  Globe, 
  Plus, 
  Search, 
  Award, 
  School, 
  Clock, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Laptop, 
  Send,
  Trash2,
  ChevronRight,
  UserCheck,
  Languages,
  BookMarked,
  Printer,
  X,
  ListChecks,
  Workflow,
  Database,
  GraduationCap,
  Briefcase,
  Settings,
  Share2,
  CheckSquare,
  Layers,
  Video,
  Calendar,
  FileText
} from "lucide-react";
import { Student, SchoolProfile, DigitalFile, CurriculumMonth } from "./types";
import { CURRICULUM_MONTHS, WEBSITES_REF } from "./data/curriculum";
import WhatsAppChannel from "./components/WhatsAppChannel";
import BrandBadge from "./components/BrandBadge";
import DreamLaunchpad from "./components/DreamLaunchpad";
import { AP_SCHOOLS_DATA, SchoolEntry } from "./data/schoolsData";

// Seed default students in Andhra Pradesh primary state classroom
const DEFAULTS_STUDENTS: Student[] = [
  {
    id: "stud-1",
    name: "Gorige Muralikrishna",
    rollNumber: "01",
    gender: "Boy",
    submittedProjects: ["June Maze", "July Event Tracker", "Aug Speech Robot"],
    solvedHours: 16,
    gradeLevel: "Intermediate",
    attendanceCount: 22
  },
  {
    id: "stud-2",
    name: "Mandalakari Haritha",
    rollNumber: "02",
    gender: "Girl",
    submittedProjects: ["June Maze", "July Event Tracker", "Aug Speech Robot", "Sept Crop App"],
    solvedHours: 24,
    gradeLevel: "Fast Learner",
    attendanceCount: 24
  },
  {
    id: "stud-3",
    name: "Yerraguntla Nagaveni",
    rollNumber: "03",
    gender: "Girl",
    submittedProjects: ["June Maze", "July Event Tracker"],
    solvedHours: 10,
    gradeLevel: "Beginner",
    attendanceCount: 19
  },
  {
    id: "stud-4",
    name: "Boyapati Sai Kumar",
    rollNumber: "04",
    gender: "Boy",
    submittedProjects: ["June Maze", "July Event Tracker", "Aug Speech Robot", "Sept Crop App", "Oct Orchard Gravity"],
    solvedHours: 32,
    gradeLevel: "Fast Learner",
    attendanceCount: 25
  },
  {
    id: "stud-5",
    name: "Koppolu Rajesh",
    rollNumber: "05",
    gender: "Boy",
    submittedProjects: ["June Maze"],
    solvedHours: 6,
    gradeLevel: "Beginner",
    attendanceCount: 15
  }
];

const DEFAULT_SCHOOL: SchoolProfile = {
  name: "Mandal Parishad Primary School (MPPS)",
  udiseCode: "28200501103",
  mandal: "Gorige Valasa",
  district: "Anantapur",
  state: "Andhra Pradesh",
  digitalFolderCount: 5
};

// Seed student creative files representing "One School - One Digital Folder"
const STUDENT_FILES_DB: Record<string, DigitalFile[]> = {
  "stud-1": [
    {
      id: "f1",
      name: "Angry Bird Sequence.blocks",
      contentType: "code",
      content: `When Run\n  Repeat 5 times:\n    Move Forward ➔\n  Turn Right ↪\n  Move Forward ➔`,
      lastUpdated: "2026-06-18"
    },
    {
      id: "f2",
      name: "Smart Agriculture App.idea",
      contentType: "idea",
      content: "I want to build a mobile app where if a farmer clicks 'Mango', it tells them how many liters of water to pump from the borewell based on soil heat.",
      lastUpdated: "2026-09-12"
    }
  ],
  "stud-2": [
    {
      id: "f3",
      name: "Telugu Alphabet Soundboard.blocks",
      contentType: "code",
      content: "When Button_Amma.Click ➔ PlaySound('అమ్మ (Mother).mp3')\nWhen Button_Aavu.Click ➔ PlaySound('ఆవు (Cow).mp3')",
      lastUpdated: "2026-09-08"
    },
    {
      id: "f4",
      name: "Paddy Field Water Level Sensor.blocks",
      contentType: "code",
      content: "If MoistureSpeechResult == 'Low' \n  Speak('Water the paddy plants immediately!')\n  Set ScreenColor to SoftRed",
      lastUpdated: "2026-08-22"
    },
    {
      id: "f5",
      name: "National Flag Celebration.drawing",
      contentType: "drawing",
      content: "An orange-white-green visual flag backdrop with Ashok Chakra spinning inside MIT App Inventor canvas.",
      lastUpdated: "2026-11-14"
    }
  ],
  "stud-3": [
    {
      id: "f6",
      name: "First Mazes Solver.blocks",
      contentType: "code",
      content: "When Run ➔ Repeat 4 times [Move Forward ➔]",
      lastUpdated: "2026-06-14"
    }
  ],
  "stud-4": [
    {
      id: "f7",
      name: "Sweet Mango Collector.blocks",
      contentType: "code",
      content: "When Actor1 (Boy) Touches Mango ➔\n  Play 'Coin' chime sound\n  ScoreCounter = ScoreCounter + 1\n  Teleport Mango to Random Coordinates()",
      lastUpdated: "2026-07-29"
    },
    {
      id: "f8",
      name: "Meteor Gravity Evader.blocks",
      contentType: "code",
      content: "On Actor Creation ➔ Set Gravity Scaling to 1.4\nOn Keyboard UpArrow Pressed ➔ Jump up by velocity 12",
      lastUpdated: "2026-10-18"
    },
    {
      id: "f9",
      name: "Vikasit Bharat 2047 Slogan.code",
      contentType: "milestone",
      content: "<h1>మన భారతదేశం 2047</h1>\n<p style='color: orange; font-weight: bold;'>Andhra Pradesh leading with 100% digital smart literacy.</p>",
      lastUpdated: "2026-01-22"
    }
  ],
  "stud-5": [
    {
      id: "f10",
      name: "Pathway Walking.blocks",
      contentType: "code",
      content: "When Run ➔ Move Forward ➔ Move Forward",
      lastUpdated: "2026-06-21"
    }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"folders" | "curriculum" | "websites" | "tutor" | "whatsapp">("folders");
  
  // Managing general state
  const [school, setSchool] = useState<SchoolProfile>(() => {
    const saved = localStorage.getItem("ap_school_profile");
    return saved ? JSON.parse(saved) : DEFAULT_SCHOOL;
  });
  const [editSchoolMode, setEditSchoolMode] = useState(false);
  const [editedSchool, setEditedSchool] = useState<SchoolProfile>({ ...school });

  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem("ap_students_list");
    return saved ? JSON.parse(saved) : DEFAULTS_STUDENTS;
  });

  const [filesDb, setFilesDb] = useState<Record<string, DigitalFile[]>>(() => {
    const saved = localStorage.getItem("ap_files_db");
    return saved ? JSON.parse(saved) : STUDENT_FILES_DB;
  });

  // Tracking creation of new students
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGender, setNewStudentGender] = useState<"Boy" | "Girl">("Boy");
  const [newStudentGrade, setNewStudentGrade] = useState<"Beginner" | "Intermediate" | "Fast Learner">("Beginner");
  const [newStudentRoll, setNewStudentRoll] = useState("");

  // Managing current selected student for folder drawer
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [newFileName, setNewFileName] = useState("");
  const [newFileContent, setNewFileContent] = useState("");
  const [newFileType, setNewFileType] = useState<"code" | "idea" | "drawing" | "milestone">("code");

  // Filter criteria
  const [filterGrade, setFilterGrade] = useState<"All" | "Beginner" | "Intermediate" | "Fast Learner">("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Mandal schools directory selector states
  const [selectedMandal, setSelectedMandal] = useState<string>("B.N.KANDRIGA");
  const [searchSchoolQuery, setSearchSchoolQuery] = useState<string>("");
  const [showMandalDirectory, setShowMandalDirectory] = useState<boolean>(true);

  // Curriculum active timeline state
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(1);
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);
  const [curriculumSubTab, setCurriculumSubTab] = useState<"months" | "blueprint">("months");
  const [sopChecks, setSopChecks] = useState<boolean[]>([false, false, false, false, false, false]);

  // AI Tutor state
  const [tutorInput, setTutorInput] = useState("");
  const [tutorHistory, setTutorHistory] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "అయ్యా, నమస్కారం! I am **AI Maastaru** 🤖, your companion primary school coding coach. Ask me anything about block programming, Telugu analogies, or how to implement our 50-hour syllabus in your classrooms!"
    }
  ]);
  const [isTutorLoading, setIsTutorLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Bilingual (Telugu & English)");

  // Persist states to standard localStorage
  useEffect(() => {
    localStorage.setItem("ap_school_profile", JSON.stringify(school));
  }, [school]);

  useEffect(() => {
    localStorage.setItem("ap_students_list", JSON.stringify(students));
    // Sync digital folder count
    setSchool(prev => ({ ...prev, digitalFolderCount: students.length }));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("ap_files_db", JSON.stringify(filesDb));
  }, [filesDb]);

  // Administration helpers
  const handleSaveSchool = (e: React.FormEvent) => {
    e.preventDefault();
    setSchool(editedSchool);
    setEditSchoolMode(false);
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    // Default sequential roll if left blank
    const calculatedRoll = newStudentRoll.trim() || String(students.length + 1).padStart(2, "0");

    const created: Student = {
      id: `stud-${Date.now()}`,
      name: newStudentName.trim(),
      rollNumber: calculatedRoll,
      gender: newStudentGender,
      submittedProjects: [],
      solvedHours: 0,
      gradeLevel: newStudentGrade,
      attendanceCount: 20
    };

    setStudents(prev => [...prev, created]);
    setFilesDb(prev => ({
      ...prev,
      [created.id]: [
        {
          id: `file-init-${Date.now()}`,
          name: "My Story Idea.idea",
          contentType: "idea",
          content: "నేను ఒక అద్భుతమైన గేమ్ డిజైన్ చేయాలనుకుంటున్నాను! (I want to design a wonderful visual game!)",
          lastUpdated: new Date().toISOString().split("T")[0]
        }
      ]
    }));

    // Reset fields
    setNewStudentName("");
    setNewStudentRoll("");
    setNewStudentGender("Boy");
    setNewStudentGrade("Beginner");
  };

  const handleDeleteStudent = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}'s Digital Folder slate? This cannot be undone.`)) {
      setStudents(prev => prev.filter(s => s.id !== id));
      if (selectedStudent?.id === id) {
        setSelectedStudent(null);
      }
    }
  };

  // Add folder digital content file
  const handleCreateFolderFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent || !newFileName.trim()) return;

    const newFile: DigitalFile = {
      id: `file-${Date.now()}`,
      name: newFileName.endsWith(`.${newFileType}`) ? newFileName : `${newFileName}.${newFileType}`,
      contentType: newFileType,
      content: newFileContent.trim() || "// Snap visual code blocks here",
      lastUpdated: new Date().toISOString().split("T")[0]
    };

    setFilesDb(prev => ({
      ...prev,
      [selectedStudent.id]: [newFile, ...(prev[selectedStudent.id] || [])]
    }));

    // Increment completed hours count for and raise level if needed
    setStudents(prev => prev.map(s => {
      if (s.id === selectedStudent.id) {
        const addedHours = Math.floor(Math.random() * 3) + 2; 
        return {
          ...s,
          solvedHours: s.solvedHours + addedHours,
          submittedProjects: [...s.submittedProjects, newFile.name.split(".")[0]]
        };
      }
      return s;
    }));

    setNewFileName("");
    setNewFileContent("");
  };

  const handleDeleteFile = (studentId: string, fileId: string) => {
    setFilesDb(prev => ({
      ...prev,
      [studentId]: prev[studentId].filter(f => f.id !== fileId)
    }));
  };

  // AI Tutor fetch interaction
  const handleAskTutor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutorInput.trim() || isTutorLoading) return;

    const userMessage = tutorInput.trim();
    setTutorHistory(prev => [...prev, { role: "user", content: userMessage }]);
    setTutorInput("");
    setIsTutorLoading(true);

    const activeMonth = CURRICULUM_MONTHS.find(m => m.monthIndex === selectedMonthIdx);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userMessage,
          history: tutorHistory,
          currentModule: activeMonth?.title || "Class V Block Fundamentals",
          currentLesson: activeMonth?.title || "Maze Navigation",
          language: selectedLanguage
        })
      });

      const data = await response.json();
      
      if (data.isDemoResponse) {
        // Render demo alert alongside answer
        setTutorHistory(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: `${data.text}\n\n*💡 Teacher Notice: ${data.message}*` 
          }
        ]);
      } else if (data.text) {
        setTutorHistory(prev => [...prev, { role: "assistant", content: data.text }]);
      } else {
        throw new Error(data.error || "Unknown server response");
      }
    } catch (err: any) {
      console.error("Tutor request failure:", err);
      setTutorHistory(prev => [
        ...prev,
        {
          role: "assistant",
          content: `### 🤖 AI Tutor Connection\n\nI couldn't reach the live AI server. Let me help you with some default code.org wisdom:\n\n* **Code.org Concept**: For Class 5 coding, we use blocks such as "Repeat 5 times [ Move Forward ]" which loops an action. This matches standard programming lists!\n* **Telugu translation help**: Repeated actions are called regular loops (లూప్స్ / ఆవృత్తి). For example, planting paddy seedlings consecutively!\n* **Solution Step**: Snap a "Repeat" block, change the iteration value, and place the arrow movements inside.`
        }
      ]);
    } finally {
      setIsTutorLoading(false);
    }
  };

  // Filter student listings
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.rollNumber.includes(searchQuery);
    const matchesCategory = filterGrade === "All" || student.gradeLevel === filterGrade;
    return matchesSearch && matchesCategory;
  });

  const activeMonthData = CURRICULUM_MONTHS.find(m => m.monthIndex === selectedMonthIdx) || CURRICULUM_MONTHS[0];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-800 font-sans antialiased flex flex-col">
      {/* Visual AP Accent Top Header Banner */}
      <header className="bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
        {/* Colorful Tri-gate Border replicating national flag colors subtle gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-white to-emerald-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5 sm:gap-4 select-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative flex items-center justify-center">
              <BrandBadge size="100%" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#2dd4bf] bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">PRIMARY SCHOOL AI</span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-orange-400 bg-orange-950/80 px-2 py-0.5 rounded border border-orange-850">Class 3-8 Zero-Hero</span>
              </div>
              <h1 className="text-lg sm:text-2xl font-black font-sans tracking-tight text-white mt-0.5 leading-tight">
                PRIMARY SCHOOL AI <span className="text-xs sm:text-sm font-semibold opacity-80 block sm:inline sm:ml-2 text-teal-400">Coding Portal</span>
              </h1>
            </div>
          </div>

          {/* District & General Metadata Indicator */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-2 flex items-center gap-2.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <div className="text-left font-mono">
                <div className="text-slate-400 text-[9px] uppercase tracking-wider">Academic Year</div>
                <div className="font-semibold text-slate-100">2026-2027</div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-2 flex items-center gap-2.5 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
              <div className="text-left font-mono">
                <div className="text-slate-400 text-[9px] uppercase tracking-wider">Vikasit Bharat</div>
                <div className="font-semibold text-slate-100">Vision 2047 🇮🇳</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* School Setup Desk Profile Banner */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {editSchoolMode ? (
              <form onSubmit={handleSaveSchool} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex flex-wrap gap-4 items-end w-full">
                <div className="flex-1 min-w-[200px] space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">School (పాఠశాల పేరు)</label>
                  <input 
                    type="text" 
                    value={editedSchool.name} 
                    onChange={e => setEditedSchool({...editedSchool, name: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm font-semibold focus:outline-emerald-500"
                  />
                </div>
                <div className="w-48 space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">UDISE Code</label>
                  <input 
                    type="text" 
                    value={editedSchool.udiseCode} 
                    onChange={e => setEditedSchool({...editedSchool, udiseCode: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm font-semibold focus:outline-emerald-500"
                  />
                </div>
                <div className="w-40 space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Mandal</label>
                  <input 
                    type="text" 
                    value={editedSchool.mandal} 
                    onChange={e => setEditedSchool({...editedSchool, mandal: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm font-semibold focus:outline-emerald-500"
                  />
                </div>
                <div className="w-40 space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">District (జిల్లా)</label>
                  <input 
                    type="text" 
                    value={editedSchool.district} 
                    onChange={e => setEditedSchool({...editedSchool, district: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm font-semibold focus:outline-emerald-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm cursor-pointer">Save</button>
                  <button type="button" onClick={() => setEditSchoolMode(false)} className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer">Cancel</button>
                </div>
              </form>
            ) : (
              <div className="flex flex-wrap items-center justify-between w-full">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-sky-50 text-sky-700 rounded-xl border border-sky-100">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-sans font-bold text-slate-800 text-base flex items-center gap-2">
                      {school.name}
                      <span className="text-xs bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded font-normal">UDISE: {school.udiseCode}</span>
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Mandal: <span className="text-slate-700 font-semibold">{school.mandal}</span> | district: <span className="text-slate-700 font-semibold">{school.district}</span> | block: <span className="text-slate-700 font-semibold">{school.state}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">One School - One Digital Folder</span>
                    <span className="text-sm font-bold text-slate-800">📂 {school.digitalFolderCount} Student folders Active</span>
                  </div>
                  <button
                    onClick={() => {
                      setEditedSchool({ ...school });
                      setEditSchoolMode(true);
                    }}
                    id="btn-edit-school"
                    className="p-1 px-3 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs text-slate-600 font-semibold cursor-pointer"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <nav className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-1 py-1.5 focus:outline-none">
            <button
              onClick={() => setActiveTab("folders")}
              id="tab-folders"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "folders"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
              }`}
            >
              <Folder className="w-4 h-4 text-emerald-500" />
              One School - One Digital Folder Class
            </button>

            <button
              onClick={() => setActiveTab("curriculum")}
              id="tab-curriculum"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "curriculum"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#ff8000]" />
              50-Hour Visual Curriculum (Class V)
            </button>

            <button
              onClick={() => setActiveTab("tutor")}
              id="tab-tutor"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap relative ${
                activeTab === "tutor"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              "AI Maastaru" Tutor
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("websites")}
              id="tab-websites"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "websites"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
              }`}
            >
              <Globe className="w-4 h-4 text-sky-500" />
              9 Innovation Portals
            </button>

            <button
              onClick={() => setActiveTab("whatsapp")}
              id="tab-whatsapp"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "whatsapp"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4 text-teal-500" />
              Primary School AI Channel
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Containers */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-10">

        {/* TAB 1: ONE SCHOOL - ONE DIGITAL FOLDER (STUDENTS REGISTRY) */}
        {activeTab === "folders" && (
          <div className="space-y-6">
            
            {/* Folder Header Intro Banner */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> AP Quality Education Standard
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-slate-900">
                  📁 ONE SCHOOL - ONE DIGITAL FOLDER
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  Every 5th Class student receives their own digital "slate" folder. 
                  Below, teachers can log student details, audit their completed hours, assign grade levels, and click on any student block folder to view logic ideas, code files, and generate certificates.
                </p>
              </div>

              {/* General Classroom Summary Counters */}
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 min-w-[200px] justify-around">
                <div className="text-center">
                  <span className="text-[10px] text-slate-400 font-mono block">ATTENDANCE avg</span>
                  <span className="text-lg font-bold text-slate-800">92%</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <span className="text-[10px] text-slate-400 font-mono block">HOURS TOTAL</span>
                  <span className="text-lg font-bold text-slate-800">
                    {students.reduce((acc, curr) => acc + curr.solvedHours, 0)} Hrs
                  </span>
                </div>
              </div>
            </div>

            {/* ANDHRA PRADESH MANDAL SCHOOL DIRECTORY SELECTOR */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
                    <School className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm tracking-tight flex items-center gap-2">
                      🏫 AP Govt School Enrollment Directory (మండలాల వారీగా పాఠశాలల జాబితా)
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">PDF Parser Synchronized</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-sans">
                      Verify total enrolment targets (Classes 1-10) for 2026-27 or activate any school profile below.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowMandalDirectory(!showMandalDirectory)}
                  className="px-3 py-1.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-600 shadow-sm cursor-pointer"
                >
                  {showMandalDirectory ? "Collapse Directory Toolbar" : "Expand Directory Toolbar"}
                </button>
              </div>

              {showMandalDirectory && (
                <div className="space-y-6">
                  {/* Selectors Panel */}
                  <div className="grid sm:grid-cols-12 gap-4 items-end bg-slate-50/50 p-4 rounded-2xl border border-slate-100 font-sans">
                    {/* Mandal Selector */}
                    <div className="sm:col-span-4 space-y-1">
                      <label className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400 block">Select AP Block / Mandal (మండలం)</label>
                      <select
                        value={selectedMandal}
                        onChange={(e) => {
                          setSelectedMandal(e.target.value);
                          setSearchSchoolQuery("");
                        }}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-850 focus:outline-emerald-500 shadow-sm"
                      >
                        {Array.from(new Set(AP_SCHOOLS_DATA.map(s => s.blockName))).sort().map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    {/* School Keyword Filter */}
                    <div className="sm:col-span-5 space-y-1">
                      <label className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400 block">Filter Schools / UDISE Code</label>
                      <div className="relative">
                        <Search className="absolute left-3.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                        <input
                          type="text"
                          value={searchSchoolQuery}
                          onChange={(e) => setSearchSchoolQuery(e.target.value)}
                          placeholder="e.g. ZPHS, APTWEMR, UDISE code..."
                          className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs font-semibold focus:outline-emerald-500 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Mandal Summary Counters panel */}
                    <div className="sm:col-span-3 flex justify-around bg-white border border-slate-200/60 p-3 py-2.5 rounded-xl font-mono text-center">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Total Schools</span>
                        <span className="text-sm font-bold text-slate-800">
                          {AP_SCHOOLS_DATA.filter(s => s.blockName === selectedMandal).length}
                        </span>
                      </div>
                      <div className="w-px h-6 bg-slate-200 self-center"></div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Total Roll</span>
                        <span className="text-sm font-bold text-slate-800">
                          {AP_SCHOOLS_DATA.filter(s => s.blockName === selectedMandal).reduce((acc, curr) => acc + curr.enrollment, 0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Schools list table inside Selected block */}
                  <div className="overflow-hidden border border-slate-205 rounded-2xl bg-white shadow-sm font-sans">
                    <div className="max-h-[300px] overflow-auto">
                      <table className="w-full text-left text-xs divide-y divide-slate-100 min-w-[650px]">
                        <thead className="bg-slate-50 text-[10px] uppercase font-mono text-slate-450 tracking-wider sticky top-0 z-10 border-b border-slate-100">
                          <tr>
                            <th className="px-4 py-3 font-semibold">SNO</th>
                            <th className="px-4 py-3 font-semibold">School Name</th>
                            <th className="px-4 py-3 font-semibold">UDISE Code</th>
                            <th className="px-4 py-3 font-semibold">MGMT</th>
                            <th className="px-4 py-3 font-semibold text-right">TOTAL ROLL (as of 16.5.26)</th>
                            <th className="px-4 py-3 font-semibold text-center">ACTION</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {AP_SCHOOLS_DATA.filter(s => {
                            const matchesMandal = s.blockName === selectedMandal;
                            const matchesSearch = s.schoolName.toLowerCase().includes(searchSchoolQuery.toLowerCase()) || s.udiseCode.includes(searchSchoolQuery);
                            return matchesMandal && matchesSearch;
                          }).map((s, idx) => {
                            const isSchoolActiveInDesk = school.udiseCode === s.udiseCode;

                            return (
                              <tr 
                                key={s.udiseCode} 
                                className={`group hover:bg-slate-50/60 transition-colors ${
                                  isSchoolActiveInDesk ? "bg-emerald-50/20" : ""
                                }`}
                              >
                                <td className="px-4 py-3 font-mono font-medium text-slate-400">
                                  {idx + 1}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                                    {s.schoolName}
                                    {isSchoolActiveInDesk && (
                                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                                        ACTIVE PROFILE
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3 font-mono text-slate-550 font-semibold">{s.udiseCode}</td>
                                <td className="px-4 py-3 font-mono text-[10px] font-bold text-[#ff8000]">{s.management}</td>
                                <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 pr-6">
                                  {s.enrollment}
                                </td>
                                <td className="px-4 py-2.5 text-center">
                                  <button
                                    onClick={() => {
                                      setSchool({
                                        name: s.schoolName,
                                        udiseCode: s.udiseCode,
                                        mandal: s.blockName,
                                        district: s.blockName === "CHANDRAGIRI" ? "Chittoor" : "Nellore / Kadapa",
                                        state: "Andhra Pradesh",
                                        digitalFolderCount: students.length
                                      });
                                    }}
                                    className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors shadow-sm cursor-pointer ${
                                      isSchoolActiveInDesk
                                        ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                                        : "bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500"
                                    }`}
                                    disabled={isSchoolActiveInDesk}
                                  >
                                    Activate Profile
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {AP_SCHOOLS_DATA.filter(s => {
                      const matchesMandal = s.blockName === selectedMandal;
                      const matchesSearch = s.schoolName.toLowerCase().includes(searchSchoolQuery.toLowerCase()) || s.udiseCode.includes(searchSchoolQuery);
                      return matchesMandal && matchesSearch;
                    }).length === 0 && (
                      <div className="p-8 text-center bg-slate-50 space-y-2 border-t border-slate-100">
                        <AlertCircle className="w-6 h-6 text-slate-400 mx-auto" />
                        <p className="text-xs text-slate-500 font-bold">No schools found matching keyword filter inside {selectedMandal} block name.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Register Student Drawer & Student List Table */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Search & Filters */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Roll No or Student Name..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/80 py-2 pl-9 pr-4 rounded-xl text-xs focus:outline-emerald-500 focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto overflow-x-auto select-none">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Tier:</span>
                    {(["All", "Beginner", "Intermediate", "Fast Learner"] as const).map(g => (
                      <button
                        key={g}
                        onClick={() => setFilterGrade(g)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                          filterGrade === g 
                            ? "bg-slate-900 text-white" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* List Table container */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm">Classroom Students ({filteredStudents.length} listed)</h4>
                    <span className="text-xs text-emerald-600 font-medium">Click on any slate to browse folders</span>
                  </div>

                  {filteredStudents.length === 0 ? (
                    <div className="p-8 text-center space-y-2">
                      <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                      <p className="text-sm text-slate-500 font-medium">No students match your active filters.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                      {filteredStudents.map(student => (
                        <div
                          key={student.id}
                          onClick={() => setSelectedStudent(student)}
                          id={`student-row-${student.id}`}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4 hover:bg-slate-50/80 transition-all cursor-pointer ${
                            selectedStudent?.id === student.id ? "bg-emerald-50/40 border-l-4 border-emerald-500" : ""
                          }`}
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            {/* Class Slate Roll Indicator Badge */}
                            <div className="w-9 h-9 bg-slate-100 font-mono font-bold text-xs flex items-center justify-center rounded-xl text-slate-600 border border-slate-200/50 shrink-0">
                              {student.rollNumber}
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-bold text-slate-800 text-sm flex flex-wrap items-center gap-1.5 leading-tight">
                                <span className="truncate">{student.name}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase shrink-0 ${
                                  student.gender === "Boy" ? "bg-sky-50 text-sky-700" : "bg-pink-50 text-pink-700"
                                }`}>
                                  {student.gender === "Boy" ? "Boy" : "Girl"}
                                </span>
                              </h5>
                              <p className="text-[11px] text-slate-400 font-medium mt-0.5 sm:mt-0">
                                Attendance days: <span className="text-slate-600 font-semibold">{student.attendanceCount} / 25</span> | Submitted: <span className="text-slate-600 font-semibold">{student.submittedProjects.length} items</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4 border-t border-slate-100 sm:border-0 pt-3 sm:pt-0">
                            <div className="text-left sm:text-right">
                              <span className={`inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mb-1 ${
                                student.gradeLevel === "Fast Learner" 
                                  ? "bg-purple-100 text-purple-700" 
                                  : student.gradeLevel === "Intermediate" 
                                    ? "bg-amber-100 text-amber-700" 
                                    : "bg-blue-100 text-blue-700"
                              }`}>
                                {student.gradeLevel}
                              </span>
                              <div className="text-xs text-slate-505 font-semibold font-mono">{student.solvedHours} Completed Hours</div>
                            </div>

                            <div className="flex items-center gap-2.5">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteStudent(student.id, student.name);
                                }}
                                id={`btn-delete-${student.id}`}
                                className="p-1.5 text-slate-350 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete Student Folder"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <ChevronRight className="w-4 h-4 text-slate-350 hidden sm:block" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Register New Student Slate & Certificate Overview */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Add Student Slate Form */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Plus className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-800 text-sm tracking-tight">Register New Student Folder (నూతన విద్యార్థి నమోదు)</h4>
                  </div>

                  <form onSubmit={handleCreateStudent} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Student Name (అక్షర క్రమం)</label>
                      <input
                        type="text"
                        placeholder="e.g. Gorige Murali"
                        value={newStudentName}
                        onChange={e => setNewStudentName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Roll Number</label>
                        <input
                          type="text"
                          placeholder="e.g. 06"
                          value={newStudentRoll}
                          onChange={e => setNewStudentRoll(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-550">Gender</label>
                        <select
                          value={newStudentGender}
                          onChange={e => setNewStudentGender(e.target.value as "Boy" | "Girl")}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs focus:outline-emerald-500 focus:bg-white text-slate-700"
                        >
                          <option value="Boy">Boy (బాలుడు)</option>
                          <option value="Girl font-medium">Girl (బాలిక)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1 block">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-550 block">Class category Grade</label>
                      <select
                        value={newStudentGrade}
                        onChange={e => setNewStudentGrade(e.target.value as any)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs focus:outline-emerald-500 focus:bg-white text-slate-700 block"
                      >
                        <option value="Beginner">Beginner (ప్రాథమిక స్థాయి)</option>
                        <option value="Intermediate">Intermediate (మధ్యమ స్థాయి)</option>
                        <option value="Fast Learner">Fast Learner (చురుకైన విద్యార్థి)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      id="btn-register-student"
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-900 text-white rounded-xl text-xs font-semibold shadow-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <UserCheck className="w-4 h-4 text-emerald-400" /> Save New Slate Slate
                    </button>
                  </form>
                </div>

                {/* Info Card on National Building */}
                <div className="bg-gradient-to-br from-orange-400/5 to-emerald-500/5 border border-slate-200/60 rounded-2xl p-5 space-y-3">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1">
                    🌟 Andhra digital folder vision
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    “One School - One Digital Folder” allows other primary school mandals to discover kids creations online. If you register or update folders, they are locally preserved in your browser!
                  </p>
                </div>

              </div>

            </div>

            {/* FOLDER EXPLORER DRAWER (Visible when student clicked) */}
            {selectedStudent && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md transition-all space-y-6 relative overflow-hidden" id="student-folder-drawer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                {/* Drawer Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100/50">
                      <Folder className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono font-bold text-slate-700">ROLL NO: {selectedStudent.rollNumber}</span>
                        <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-bold">{selectedStudent.gradeLevel}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{selectedStudent.name}'s Core Folder Slate</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Simulating certificate PDF print preview for smart programmer: ${selectedStudent.name}. Shared with Parents via Primary School AI WhatsApp channel.`)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 border border-amber-655 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" /> Printable Certificate
                      <Printer className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="p-1 px-2 hover:bg-slate-100 rounded-lg text-slate-400"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                  
                  {/* Left Column Inside Drawer (Add Digital Sandbox File Form) */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                      <h5 className="font-bold text-slate-800 text-xs tracking-tight uppercase">Upload Smart Work / File Block</h5>
                      
                      <form onSubmit={handleCreateFolderFile} className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-[10.5px] font-semibold text-slate-500">File Name (e.g., Code.org Maze)</label>
                          <input
                            type="text"
                            placeholder="e.g. Farming_Water_Level"
                            value={newFileName}
                            onChange={e => setNewFileName(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-emerald-500"
                            required
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10.5px] font-semibold text-slate-500">Digital category Type</label>
                          <select
                            value={newFileType}
                            onChange={e => setNewFileType(e.target.value as any)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-emerald-500 text-slate-600 font-medium"
                          >
                            <option value="code">🧩 Code Block (.blocks)</option>
                            <option value="idea">💡 Project Idea (.idea)</option>
                            <option value="drawing">🎨 Visual Drawing (.drawing)</option>
                            <option value="milestone">🇮🇳 National Achievement (.milestone)</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10.5px] font-semibold text-slate-500">Visual Code lines or Description text</label>
                          <textarea
                            placeholder="e.g. When Run ➔ Loop 5 times [ Move Forward ]"
                            value={newFileContent}
                            onChange={e => setNewFileContent(e.target.value)}
                            rows={3}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-mono focus:outline-emerald-500"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm cursor-pointer"
                        >
                          Snap to {selectedStudent.name}'s Folder
                        </button>
                      </form>
                    </div>

                    {/* Classroom Progress Card */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-4 text-xs space-y-2">
                      <h6 className="font-bold text-indigo-900 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> AP State Certificate Progress
                      </h6>
                      <p className="text-indigo-700 leading-relaxed font-sans">
                        Students completing 30+ curricular hours qualify for the "AP Primary AI Cadet" badge. Direct reports are posted daily to the administrator portal.
                      </p>
                      <div className="w-full bg-indigo-200 h-1.5 rounded-full overflow-hidden mt-2">
                        <div 
                          className="bg-indigo-600 h-full rounded-full transition-all" 
                          style={{ width: `${Math.min((selectedStudent.solvedHours / 30) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-indigo-500 font-semibold text-right block font-mono">
                        {selectedStudent.solvedHours} hrs of 30 hours milestone
                      </span>
                    </div>

                  </div>

                  {/* Right Column Inside Drawer: Listing Active Files */}
                  <div className="md:col-span-8 space-y-4">
                    <h5 className="font-bold text-slate-800 text-xs tracking-tight uppercase">Saved Files in Digital Directory (వన్ స్కూల్ - వన్ డిజిటల్ ఫోల్డర్)</h5>
                    
                    {!filesDb[selectedStudent.id] || filesDb[selectedStudent.id].length === 0 ? (
                      <div className="p-8 border-2 border-dashed border-slate-200 text-center rounded-2xl">
                        <p className="text-xs text-slate-400 font-bold">This folder slate is currently empty. Add their first file above!</p>
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {filesDb[selectedStudent.id].map(file => (
                          <div
                            key={file.id}
                            className="bg-slate-50 hover:bg-slate-100/70 py-4 px-4 rounded-xl border border-slate-200/60 relative flex flex-col justify-between space-y-3"
                          >
                            <div className="space-y-2">
                              {/* File Header */}
                              <div className="flex items-center justify-between">
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                                  file.contentType === "code" 
                                    ? "bg-amber-100 text-amber-800 border border-amber-200" 
                                    : file.contentType === "idea" 
                                      ? "bg-green-100 text-green-800 border border-green-200"
                                      : "bg-blue-100 text-blue-800 border border-blue-200"
                                }`}>
                                  .{file.contentType}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">{file.lastUpdated}</span>
                              </div>

                              {/* Title */}
                              <h6 className="font-bold text-slate-800 text-xs truncate" title={file.name}>
                                {file.name}
                              </h6>

                              {/* Content */}
                              <pre className="bg-white border border-slate-200/60 p-2.5 rounded-lg text-[10px] font-mono whitespace-pre-wrap overflow-x-auto text-slate-600 leading-relaxed max-h-[140px] overflow-y-auto">
                                {file.content}
                              </pre>
                            </div>

                            {/* Actions footer */}
                            <div className="flex justify-end pt-1 border-t border-slate-200/40">
                              <button
                                onClick={() => handleDeleteFile(selectedStudent.id, file.id)}
                                className="inline-flex items-center gap-1 text-[10px] text-red-500 hover:text-red-700 font-bold transition-all cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" /> Delete File
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: CURRICULUM SCREEN TIMELINE */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            
            {/* Curriculum Top Header */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <span className="text-xs text-orange-600 font-bold uppercase tracking-wider block">50-Hour Master Syllabus (Class 5) 🇮🇳</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  📅 Chronological Lesson Blueprint
                </h3>
                <p className="text-xs md:text-sm text-slate-505 leading-relaxed">
                  Carefully mapped out from **June 2026 to March 2027** for diverse multi-tier students. Scroll or select a month timeline to observe core challenges, visual block snapping diagrams and Telugu translations are preloaded.
                </p>
              </div>

              <div className="flex select-none flex-wrap gap-2 sm:self-center">
                <span className="px-3 py-1 bg-slate-900 text-slate-100 text-xs font-bold rounded-lg font-mono">10 Modules</span>
                <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg font-mono">50 Hours</span>
              </div>
            </div>

            {/* Sub Tabs Selection (Syllabus vs Lab SOP Matrix) */}
            <div className="flex border-b border-slate-200 select-none overflow-x-auto whitespace-nowrap scrollbar-none">
              <button
                onClick={() => setCurriculumSubTab("months")}
                className={`flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  curriculumSubTab === "months"
                    ? "border-emerald-600 text-slate-900 bg-slate-50/50"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                Syllabus Timeline Month-by-Month (పాఠ్య ప్రణాళిక)
              </button>

              <button
                onClick={() => setCurriculumSubTab("blueprint")}
                className={`flex items-center gap-2.5 px-6 py-3.5 text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  curriculumSubTab === "blueprint"
                    ? "border-emerald-600 text-slate-900 bg-slate-50/50"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-orange-600" />
                Theory & Practical Lab Guidelines (SOPs)
                <span className="bg-orange-100 text-orange-850 px-2 py-0.5 rounded text-[9px] uppercase font-mono font-bold ml-1.5 animate-pulse">
                  NEP 2020 APPROVED
                </span>
              </button>
            </div>

            {curriculumSubTab === "months" ? (
              <div className="space-y-8 animate-fadeIn">
                {/* Months Timeline Buttons */}
            <div className="flex space-x-2 pb-3 overflow-x-auto scrollbar-thin select-none">
              {CURRICULUM_MONTHS.map(month => (
                <button
                  key={month.monthIndex}
                  onClick={() => {
                    setSelectedMonthIdx(month.monthIndex);
                    setShowReferenceAnswer(false);
                  }}
                  id={`btn-month-tab-${month.monthIndex}`}
                  className={`px-4 py-3 rounded-2xl text-xs font-bold tracking-tight transition-all cursor-pointer whitespace-nowrap flex flex-col items-center gap-1 min-w-[100px] border ${
                    selectedMonthIdx === month.monthIndex
                      ? "bg-slate-900 text-slate-100 border-slate-950 shadow-sm"
                      : "bg-white text-slate-600 border-slate-225/60 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-medium">Month {month.monthIndex}</span>
                  <span>{month.monthName.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Curriculum Active Month Details */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8" id="curriculum-viewer">
              
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#f6ebff] text-purple-700 text-[10px] font-bold tracking-wider rounded-md uppercase border border-purple-200">
                      Phase {activeMonthData.monthIndex <= 2 ? "1: Basics" : activeMonthData.monthIndex <= 4 ? "2: Apps & AI" : activeMonthData.monthIndex <= 6 ? "3: Physics" : activeMonthData.monthIndex <= 8 ? "4: Transition" : "5: Deployment"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                      <Clock className="w-3.5 h-3.5" /> {activeMonthData.allocatedHours} Hours allocated
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {activeMonthData.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans flex items-center gap-1.5">
                    <BookMarked className="w-4 h-4 text-emerald-500" /> **Objective**: {activeMonthData.objective}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-450 font-bold uppercase tracking-wider font-mono">Target Platform:</span>
                  {activeMonthData.platforms.map(p => (
                    <span key={p} className="px-3 py-1.5 bg-slate-100 text-slate-850 text-xs font-bold rounded-xl border border-slate-200 shadow-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Three Tier Student Challenges Grid */}
              <div className="space-y-4">
                <h5 className="font-bold text-slate-800 text-xs tracking-tight uppercase flex items-center gap-1 pb-1 border-b border-slate-100">
                  ⚡ Three-Tier Classroom Challenges (భిన్న సామర్థ్యాలు గల విద్యార్థుల కృత్యాలు)
                </h5>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Beginner */}
                  <div className="bg-slate-50 border-t-4 border-sky-400 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-sky-700 font-bold bg-sky-50 border border-sky-100 px-2 py-0.5 rounded">Beginner (ప్రాథమిక)</span>
                      <p className="text-xs md:text-sm text-slate-700 font-semibold leading-snug">
                        {activeMonthData.beginnerChallenge}
                      </p>
                    </div>
                    <span className="text-[10.5px] text-slate-400 font-medium">Simple guided sequencing & path mapping.</span>
                  </div>

                  {/* Intermediate */}
                  <div className="bg-slate-50 border-t-4 border-amber-500 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-amber-700 font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">Intermediate (మధ్యమ)</span>
                      <p className="text-xs md:text-sm text-slate-705 font-semibold leading-snug">
                        {activeMonthData.intermediateChallenge}
                      </p>
                    </div>
                    <span className="text-[10.5px] text-slate-400 font-medium">Multi-block combinations & loop repetitions.</span>
                  </div>

                  {/* Fast Learner */}
                  <div className="bg-slate-50 border-t-4 border-purple-500 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-purple-700 font-bold bg-purple-50 border border-purple-100 px-2 py-0.5 rounded">Fast Learner (చురుకైన)</span>
                      <p className="text-xs md:text-sm text-slate-705 font-semibold leading-snug">
                        {activeMonthData.fastLearnerChallenge}
                      </p>
                    </div>
                    <span className="text-[10.5px] text-slate-400 font-medium font-sans">Complex variables, events, and AI integration.</span>
                  </div>
                </div>
              </div>

              {/* Step by Step Details List */}
              <div className="grid md:grid-cols-12 gap-8 pt-2">
                
                {/* Steps List */}
                <div className="md:col-span-6 space-y-4">
                  <h5 className="font-bold text-slate-800 text-xs tracking-tight uppercase">Step-by-Step Lesson Sequence</h5>
                  
                  <div className="space-y-3">
                    {activeMonthData.stepByStepDetails.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Block Snapping Demonstration */}
                <div className="md:col-span-6 space-y-4">
                  <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-850 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[11px] font-bold text-slate-400">VISUAL SNAP BLOCKS VIEW</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">Code.org Native mockup</span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {activeMonthData.referenceAnswer.blocks.map((block, bIdx) => {
                        const isMain = block.startsWith("When") || block.includes("On ");
                        const isRepeat = block.includes("Repeat");
                        return (
                          <div
                            key={bIdx}
                            className={`p-2.5 rounded-lg border text-xs font-bold transition-all ${
                              isMain
                                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                                : isRepeat
                                  ? "bg-purple-600 text-white border-purple-500 pl-6"
                                  : "bg-sky-500 text-white border-sky-400 pl-8"
                            }`}
                            style={{ 
                              marginLeft: !isMain && !isRepeat ? '20px' : '0px',
                              width: 'fit-content',
                              minWidth: '220px'
                            }}
                          >
                            {block}
                          </div>
                        );
                      })}
                    </div>

                    <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800 text-right">
                      Drag & snap inside {activeMonthData.platforms[0]} Workspace
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button: Reveal Tutor Reference Answer */}
              <div className="border-t border-slate-100 pt-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-slate-800 text-xs uppercase tracking-tight">AI Master Reference Guide & Telugu Analogy</h5>
                  <button
                    onClick={() => {
                      setShowReferenceAnswer(!showReferenceAnswer);
                      if (!showReferenceAnswer) {
                        // Pre-populate AI tutor with contextual month question
                        setTutorInput(`Can you explain the loops / sequences for Month ${activeMonthData.monthIndex}: "${activeMonthData.title}"?`);
                      }
                    }}
                    id="btn-toggle-answer"
                    className="inline-flex items-center gap-2 px-4.5 py-2 bg-indigo-50 hover:bg-indigo-100/70 text-indigo-700 text-xs font-semibold rounded-xl border border-indigo-100 transition-all cursor-pointer"
                  >
                    {showReferenceAnswer ? "Hide Reference Guide" : "Reveal Reference Blocks & Telugu Help"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {showReferenceAnswer && (
                  <div className="bg-gradient-to-br from-[#f8fafc] via-[#fdfdfd] to-[#fafdfb] border border-slate-205 rounded-2xl p-6 shadow-sm space-y-6 animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      
                      {/* Code Equivalents */}
                      <div className="space-y-3">
                        <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block">Modern Syntax equivalent (English)</span>
                        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-850 font-mono text-xs leading-relaxed">
                          <code className="whitespace-pre">{activeMonthData.referenceAnswer.javascript || `// Platform: ${activeMonthData.platforms[0]}\n// Block visual dragging translates to standard system actions.`}</code>
                        </div>
                        <p className="text-xs text-slate-505 leading-relaxed font-sans pt-1">
                          **Block concept**: {activeMonthData.referenceAnswer.explanation}
                        </p>
                      </div>

                      {/* Rural AP Translation Analogy */}
                      <div className="space-y-3 border-l-2 border-emerald-500 pl-5">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 font-mono flex items-center gap-1">
                          <Languages className="w-3.5 h-3.5 text-emerald-500" /> NATIVE TELUGU RURAL ANALOGY (గ్రామీణ తెలుగు పోలిక)
                        </span>

                        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-slate-800 space-y-2">
                          <p className="text-xs md:text-sm font-sans font-bold leading-relaxed text-slate-900 border-b border-emerald-100 pb-2">
                            {activeMonthData.referenceAnswer.localAnalogy}
                          </p>
                          <p className="text-xs text-slate-500 leading-normal mb-1">
                            This custom local analogy matches activities a child in visual agriculture areas sees every day. Perfect for school slate blackboard drawings!
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Navigation prompt to tutor */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 bg-slate-50/30 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <span className="text-xs text-slate-500 font-medium">Need further questions for slow/fast learners? Contact AI assistant!</span>
                      <button
                        onClick={() => {
                          setActiveTab("tutor");
                          window.scrollTo({ top: 400, behavior: "smooth" });
                        }}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        Launch interactive AI Chat Maastaru <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>
        ) : (
              /* TAB 2 SUBTAB: CUSTOM LAB BLUEPRINT & THEORY-PRACTICAL INTEGRATION */
              <div className="space-y-8 animate-fadeIn font-sans">
                
                {/* 1. Core Guiding Principle Banner */}
                <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-emerald-500/10 border border-amber-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="space-y-2">
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      🎯 Guiding Principle (విద్యా విధాన సూత్రం)
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                      "The classroom is the laboratory; the teacher is the mentor; the website is the textbook"
                    </h4>
                    <p className="text-xs text-slate-500 max-w-3xl leading-relaxed">
                      No child is too rural, too shy, or too new to a computer screen to learn computational thinking. Class V annual 50 contact hours is built on practical first-class interaction.
                    </p>
                  </div>
                  <div className="bg-white p-3.5 px-4 rounded-2xl border border-slate-100/80 text-center shadow-sm font-mono shrink-0">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">CONTACT TARGET</span>
                    <span className="text-lg font-extrabold text-orange-600">50 Contact Hrs</span>
                  </div>
                </div>

                {/* 2. Integrating Theory with Practical: The 10-25-10 Pedagogical System */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="space-y-1">
                    <h5 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-emerald-600" /> Integrated Theory & Practical Lab System (10 - 25 - 10 పెడగాగి ఫార్ములా)
                    </h5>
                    <p className="text-xs text-slate-500">
                      Standardized pedagogical blueprint executed twice every week in a 45-minute computer lab session.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 relative">
                    {/* Step 1 */}
                    <div className="bg-emerald-50/20 border border-emerald-100/80 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500/5 rounded-full"></div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-mono font-bold text-sm">
                          10
                        </div>
                        <div>
                          <span className="text-[10px] text-emerald-600 uppercase font-mono tracking-wider font-extrabold block">Theory Introduction</span>
                          <h6 className="font-bold text-slate-800 text-xs">Teacher Demonstration (డెమో)</h6>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal font-sans">
                        Teacher showcases the core monthly challenge live. Relate syntax blocks conceptually using localized Telugu analogies (e.g. loops as cyclic <strong>Auto-rickshaw</strong> wheels, variables as labeled <strong>Tiffin stickers</strong>).
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-sky-50/20 border border-sky-100/80 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-sky-500/5 rounded-full"></div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-sky-600 text-white rounded-xl flex items-center justify-center font-mono font-bold text-sm">
                          25
                        </div>
                        <div>
                          <span className="text-[10px] text-sky-600 uppercase font-mono tracking-wider font-extrabold block">Active Computers Lab</span>
                          <h6 className="font-bold text-slate-800 text-xs">Hands-on Sandbox Practice (ల్యాబ్ సాధన)</h6>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal font-sans">
                        Students physically sit in pairs (1 computer per 2 kids). Children perform block dragging, game building or web remixing. Rotate the "driver/navigator" role every <strong>10 minutes</strong> to ensure equal execution.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#fcf8ff] border border-purple-100/80 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-purple-500/5 rounded-full"></div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-purple-600 text-white rounded-xl flex items-center justify-center font-mono font-bold text-sm">
                          10
                        </div>
                        <div>
                          <span className="text-[10px] text-purple-600 uppercase font-mono tracking-wider font-extrabold block">Continuity & Storage</span>
                          <h6 className="font-bold text-slate-800 text-xs">Peer-Share & Folder Saving (ఫైల్ భద్రపరచడం)</h6>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal font-sans">
                        Classmates showcase their output to each other (Peer feedback 👥). The student saves screenshots/code file in their local slate directory (One School - One Digital Folder) prior to shutdown.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Differentiated Tracks Adaptive Matrix */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: List of Differentiated Tracks */}
                  <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                    <div className="space-y-1">
                      <h5 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase flex items-center gap-2">
                        <Layers className="w-5 h-5 text-amber-500" /> Differentiated Instruction Tracks (సామర్థ్యాల వారీగా బోధన)
                      </h5>
                      <p className="text-xs text-slate-500">
                        Classrooms contain diverse learners. Choose adaptive tracks to safely guide children of all paces.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Foundation */}
                      <div className="p-4 rounded-2xl border border-slate-100 bg-emerald-50/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="bg-emerald-105 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                            🟢 Foundation Track (Green)
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">First-time users & Special needs</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">Adaptation: Pair-with-a-buddy, larger screen fonts, native Telugu narration, solve 50% of the active puzzles.</p>
                        <p className="text-xs text-slate-600 font-sans leading-normal">Looks like: Completes half of standard monthly roadmap elements with classroom mentor support.</p>
                      </div>

                      {/* Core */}
                      <div className="p-4 rounded-2xl border border-slate-100 bg-amber-50/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="bg-amber-105 text-amber-800 border border-amber-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                            🟡 Core Track (Yellow)
                          </span>
                          <span className="text-[11px] text-slate-400 font-bold">Majority of kids (Average level)</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">Adaptation: Normal chronological syllabus implementation as designed in months curriculum tab.</p>
                        <p className="text-xs text-slate-600 font-sans leading-normal">Looks like: Completed 100% of standard block challenges, builds standalone Android apks.</p>
                      </div>

                      {/* Stretch */}
                      <div className="p-4 rounded-2xl border border-slate-100 bg-purple-50/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="bg-purple-105 text-purple-800 border border-purple-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                            🟣 Stretch Track (Orange)
                          </span>
                          <span className="text-[11px] text-slate-400 font-bold">Fast learners & Digital fluent</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">Adaptation: Bonus custom puzzles, peer tutoring, remixing Glitch servers, publishing live URLs.</p>
                        <p className="text-xs text-slate-600 font-sans leading-normal">Looks like: Helps classmates as a "Code Mitra", receives special regional certification.</p>
                      </div>

                    </div>
                  </div>

                  {/* Right Column: Lab Daily SOP Checklist and Role Map */}
                  <div className="md:col-span-5 space-y-6">
                    
                    {/* Interactive Lab SOP Checklist */}
                    <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-850 space-y-4 shadow-sm">
                      <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                        <h6 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5 font-mono">
                          <ListChecks className="w-4 h-4 text-emerald-400" /> Lab SOP Checklist (ల్యాబ్ విధివిధానాలు)
                        </h6>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">Interactive Tracker</span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        Teachers! Tick these standard processes during actual lab sessions. Live check metrics are cached locally:
                      </p>

                      <div className="space-y-3 pt-1">
                        {[
                          { title: "SOP 1: Warm-Up Setup", desc: "Open laptop lab 5 mins early. Log in as school guest.", icon: "🔑" },
                          { title: "SOP 2: Scan Attendance", desc: "Track attendance via App Inventor 'Attendance App'.", icon: "📝" },
                          { title: "SOP 3: Instant Folder Save", desc: "Check children save work under: OSDF/Subject_Coding/Month/", icon: "💾" },
                          { title: "SOP 4: Weekly USB/Cloud Backup", desc: "Run secondary weekly backups on physical cards.", icon: "🔌" },
                          { title: "SOP 5: Monthly Index Upload", desc: "Upload class compilation folder structure to Google Drive.", icon: "📂" },
                          { title: "SOP 6: Telegram/WhatsApp Sharing", desc: "Post video creations directly over the Primary School AI stream.", icon: "🎥" }
                        ].map((sop, idx) => (
                          <div 
                            key={idx}
                            onClick={() => {
                              const nextArr = [...sopChecks];
                              nextArr[idx] = !nextArr[idx];
                              setSopChecks(nextArr);
                            }}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                              sopChecks[idx]
                                ? "bg-emerald-950/40 border-emerald-500 text-white"
                                : "bg-slate-850/50 border-slate-800 text-slate-350 hover:bg-slate-800"
                            }`}
                          >
                            <span className="text-sm shrink-0">{sop.icon}</span>
                            <div className="flex-1 space-y-0.5 text-left">
                              <div className="flex items-center justify-between">
                                <h6 className="font-bold text-xs">{sop.title}</h6>
                                <input
                                  type="checkbox"
                                  checked={sopChecks[idx]}
                                  readOnly
                                  className="w-3.5 h-3.5 text-emerald-500 accent-emerald-500 cursor-pointer focus:outline-none"
                                />
                              </div>
                              <p className="text-[10px] text-slate-400 font-sans leading-normal">{sop.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                        <span>Current Lab Check:</span>
                        <span className="font-bold text-emerald-400 font-mono">
                          {sopChecks.filter(x => x).length} of 6 SOP stages executed
                        </span>
                      </div>
                    </div>

                    {/* Stakeholders list */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 font-sans text-left">
                      <h6 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-emerald-600" /> Stakeholder Collaboration Grid
                      </h6>

                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5 text-xs">
                          <span className="text-base">🎓</span>
                          <div>
                            <strong className="text-slate-850 font-bold block">Head Master / Principal</strong>
                            <span className="text-[11px] text-slate-500">Approves computer schedules, checks digital portfolios, signs final Class V Graduation certificates.</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-xs">
                          <span className="text-base">🧑‍🏫</span>
                          <div>
                            <strong className="text-slate-850 font-bold block">Syllabus Instructor (Teacher)</strong>
                            <span className="text-[11px] text-slate-500">Tours room, presents localized tiffin/rangoli coding loops, monitors weekly backups.</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-xs">
                          <span className="text-base">🌟</span>
                          <div>
                            <strong className="text-slate-850 font-bold block">Parents Team</strong>
                            <span className="text-[11px] text-slate-500">Sees student designs over mobile phone WhatsApp, grants permission for public Glitch URLs.</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-xs">
                          <span className="text-base">👥</span>
                          <div>
                            <strong className="text-slate-850 font-bold block">Student cabinet 'Code Mitras'</strong>
                            <span className="text-[11px] text-slate-500">Peer tutors helping foundation-track children. Helps maintain daily computing discipline.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 4. Assessment Rubric Matrix */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 text-left">
                  <div className="space-y-1">
                    <h5 className="font-extrabold text-slate-900 text-sm uppercase tracking-tight flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" /> Sreenath Class V Assessment Rubric Evaluation (కృత్యాల మూల్యాంకన విధానం)
                    </h5>
                    <p className="text-xs text-slate-500 font-sans">
                      Standard evaluation guidelines based on Sreenath AP Education SCERT mandates (Graded out of 12 for every Monthly artifact).
                    </p>
                  </div>

                  <div className="overflow-x-auto border border-slate-100 rounded-2xl">
                    <table className="w-full text-left text-xs divide-y divide-slate-200 min-w-[700px]">
                      <thead className="bg-slate-50 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Evaluation Criterion</th>
                          <th className="px-4 py-3 font-semibold text-sky-850 bg-sky-50/40">1 - Beginning (ప్రాథమిక స్థాయి)</th>
                          <th className="px-4 py-3 font-semibold text-amber-850 bg-amber-50/40">2 - Developing (మధ్యమ స్థాయి)</th>
                          <th className="px-4 py-3 font-semibold text-emerald-850 bg-emerald-50/40">3 - Proficient (ఉత్తమ స్థాయి)</th>
                          <th className="px-4 py-3 font-semibold text-purple-850 bg-purple-50/40">4 - Mastery (అసాధారణ ప్రతిభ)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        <tr>
                          <td className="px-4 py-3.5 font-bold text-slate-800">Computational Block Logic</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-sky-50/5">Copies static blocks from classroom blackboard list.</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-amber-50/5">Sequence blocks works without major logical hiccups.</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-emerald-50/5 font-medium border-l border-emerald-100">Successfully employs loops & events blocks in Code.org.</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-purple-50/5 font-bold border-l border-purple-100">Successfully employs functions & variables blocks.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3.5 font-bold text-slate-800">Creative Custom Expression</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-sky-50/5">Builds exact default template mockup.</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-amber-50/5">Executes minor custom edits (colors, speeds).</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-emerald-50/5 font-medium border-l border-emerald-100">Injects unique personal theme or customized custom details.</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-purple-50/5 font-bold border-l border-purple-100">Ships highly original story timeline / custom mechanics.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3.5 font-bold text-slate-800">Debugging & Persistence</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-sky-50/5">Gives up immediately when path error pops up.</td>
                          <td className="px-4 py-3.5 text-slate-500 bg-amber-50/5">Tries once to fix buggy sequence, then seeks mentoring help.</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-emerald-50/5 font-medium border-l border-emerald-100">Self-debugs minor block snapping order confidently.</td>
                          <td className="px-4 py-3.5 text-slate-600 bg-purple-50/5 font-bold border-l border-purple-100">Actively helps peers debug their folder challenges!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

        {/* TAB 3: THE SEVEN PORTALS (RESOURCES WEB PLATFORMS) */}
        {activeTab === "websites" && (
          <div className="space-y-6">
            
            {/* Top Banner */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <span className="text-xs text-sky-600 font-bold uppercase tracking-wider block">Innovative Idea Generators</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  👩‍💻 The Nine Educational Coding Websites
                </h3>
                <p className="text-xs md:text-sm text-slate-505 leading-relaxed">
                  These 9 beautiful portals play a critical role in bringing kids visual ideas to life. Each site corresponds to detailed chronological modules within Sreenath's Andhra Pradesh Class V curriculum.
                </p>
              </div>

              <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-lg font-mono border border-sky-100">9 Resources Loaded</span>
            </div>

            {/* Nine sites Grid list */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WEBSITES_REF.map((site, idx) => (
                <div
                  key={idx}
                  id={`site-card-${idx}`}
                  className="bg-white border border-slate-200 p-5 rounded-2xl hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{site.logo}</span>
                        <h4 className="font-bold text-slate-900 text-sm tracking-tight">{site.name}</h4>
                      </div>
                      <span className="text-[10px] bg-slate-100 text-slate-600 font-mono font-bold px-2 py-0.5 rounded-full">
                        {site.curriculumPhase}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-sans min-h-[48px]">
                      {site.description}
                    </p>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-indigo-600 font-mono block">classroom relevance</span>
                      <p className="text-[11px] text-slate-600 leading-normal font-sans text-left">
                        {site.relevance}
                      </p>
                    </div>
                  </div>

                  {/* Redirection Link Button */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    id={`btn-visit-site-${idx}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-slate-100 hover:bg-sky-600 text-slate-700 hover:text-white text-xs font-semibold rounded-lg border border-slate-200 hover:border-sky-500 transition-all cursor-pointer"
                  >
                    Open Website Portal <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 4: INTERACTIVE "AI MAASTARU" MODEL COMPANION */}
        {activeTab === "tutor" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Context Settings and Prompt Hints */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Languages className="w-5 h-5 text-indigo-500" />
                  <h4 className="font-sans font-bold text-slate-900 text-sm">Maastaru Context Slates</h4>
                </div>

                <div className="space-y-4">
                  
                  {/* Active Month Sync info */}
                  <div className="space-y-1 block">
                    <label className="text-[11px] uppercase tracking-wider text-slate-550 block font-semibold">Synchronize Month Syllabus Context</label>
                    <select
                      value={selectedMonthIdx}
                      onChange={e => setSelectedMonthIdx(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs focus:outline-emerald-500 text-slate-700 font-medium"
                    >
                      {CURRICULUM_MONTHS.map(m => (
                        <option key={m.monthIndex} value={m.monthIndex}>
                          Month {m.monthIndex}: {m.title.slice(0, 35)}...
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1 block">
                    <label className="text-[11px] uppercase tracking-wider text-slate-550 block font-semibold">Tutor Language Tone</label>
                    <div className="flex flex-col gap-2 pt-1 font-sans">
                      {["Bilingual (Telugu & English)", "Pure English instructions", "Simplified Telugu translations"].map(lang => (
                        <label key={lang} className="inline-flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer">
                          <input 
                            type="radio" 
                            name="tutor_language" 
                            checked={selectedLanguage === lang}
                            onChange={() => setSelectedLanguage(lang)}
                            className="text-indigo-600 focus:outline-[#12a683]" 
                          />
                          {lang}
                        </label>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Sample Prompt Suggestions */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                <h5 className="font-bold text-slate-800 text-xs tracking-tight uppercase">Suggested Teacher Queries</h5>
                
                <div className="space-y-2">
                  {[
                    "Explain loops in telugu.",
                    "Give me a play lab sprite challenge for intermediate student Rajesh.",
                    "How can I manage 'One School - One Digital Folder' forAnantapur?",
                    "Design a 1-day coding camp on Code.org for school."
                  ].map((phrase, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setTutorInput(phrase)}
                      className="w-full text-left bg-slate-50 hover:bg-slate-100 p-2.5 rounded-lg text-xs text-slate-655 font-medium border border-slate-100 hover:border-slate-200 transition-all cursor-pointer block"
                    >
                      "{phrase}"
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: AI Chat Console */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[550px] overflow-hidden" id="chat-tutor-container">
              
              {/* Box Header */}
              <div className="p-4 border-b border-slate-100 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">AI Maastaru (AI కోడింగ్ టీచర్)</h4>
                    <span className="text-[10px] text-slate-400 font-mono">Syncing Month {selectedMonthIdx} Curriculum Data</span>
                  </div>
                </div>

                <button
                  onClick={() => setTutorHistory([{ role: "assistant", content: "అయ్యా, నమస్కారం! I have cleared our session logs. Ask me your next question!" }])}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Reset Chats
                </button>
              </div>

              {/* Chat Thread Area */}
              <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4 max-h-[400px]">
                {tutorHistory.map((message, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl py-3 px-4 text-xs md:text-sm shadow-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-slate-900 border border-slate-950 text-white rounded-tr-none"
                          : "bg-[#f8f9fc] border border-indigo-100 text-slate-800 rounded-tl-none space-y-2 whitespace-pre-wrap"
                      }`}
                    >
                      {/* Formatted body text render with custom headers if assistant */}
                      {message.content.includes("###") ? (
                        <div className="space-y-4">
                          {message.content.split("\n\n").map((para, pIdx) => {
                            if (para.startsWith("###")) {
                              return <h5 key={pIdx} className="font-bold text-[#312e81] text-xs uppercase tracking-tight pt-1">{para.replace(/###/g, "").trim()}</h5>;
                            }
                            if (para.startsWith("*")) {
                              return (
                                <ul key={pIdx} className="list-disc pl-4 space-y-1">
                                  {para.split("\n").map((li, lIdx) => (
                                    <li key={lIdx}>{li.replace(/\*/g, "").trim()}</li>
                                  ))}
                                </ul>
                              );
                            }
                            return <p key={pIdx}>{para}</p>;
                          })}
                        </div>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                ))}

                {isTutorLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#f8f9fc] border border-indigo-100 duration-1000 animate-pulse text-indigo-800 text-xs py-3 px-4 rounded-2xl rounded-tl-none">
                      AI Maastaru is thinking... (మాస్టారు సమాధానం సిద్ధం చేస్తున్నారు...)
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Formulation Input Form */}
              <form onSubmit={handleAskTutor} className="p-3 border-t border-slate-100 bg-slate-50 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question (e.g., 'హలో మాస్టారు, లూప్స్ ని రైస్ ఫార్మింగ్ తో ఎలా పోల్చవచ్చు?')"
                  value={tutorInput}
                  onChange={e => setTutorInput(e.target.value)}
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-indigo-500 focus:border-indigo-500"
                  disabled={isTutorLoading}
                />
                <button
                  type="submit"
                  id="btn-send-tutor"
                  className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm cursor-pointer"
                  disabled={isTutorLoading || !tutorInput.trim()}
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>

            </div>

          </div>
        )}

        {/* TAB 5: WHATSAPP CHANNEL EMBED & OFFLINE TOOLKIT PROMOTION */}
        {activeTab === "whatsapp" && (
          <div className="animate-fadeIn">
            <WhatsAppChannel />
          </div>
        )}

        {/* Dynamic Dream Open-Source & Brand launchpad guide answering user's direct dream queries */}
        <div className="pt-6 border-t border-slate-200/40">
          <DreamLaunchpad />
        </div>

      </main>

      {/* Modern High Quality Footer Accenting General Literacy Mission */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 text-center sm:text-left">
            <div className="space-y-1">
              <h5 className="font-sans font-bold text-white text-base">🇮🇳 AP Government School Coding Initiative</h5>
              <p className="text-xs text-slate-500">
                Transforming digital directories for primary school classrooms across Andhra Pradesh.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-300">
              <a href="https://whatsapp.com/channel/0029VbCJriL0lwgw3OeV2I0Z" target="_blank" rel="noreferrer" className="hover:text-emerald-400">WhatsApp Link</a>
              <span>•</span>
              <span className="text-slate-400">Class 5 Academic year 2026-2027</span>
              <span>•</span>
              <span className="text-emerald-400">Vikasit Bharat 2047 Target</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4">
            <p>Designed for Sreenath Gorige. Locally preserved slate.</p>
            <p className="flex items-center gap-1">
              <Laptop className="w-3.5 h-3.5 text-slate-600" /> Digital Economy Building blocks
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
