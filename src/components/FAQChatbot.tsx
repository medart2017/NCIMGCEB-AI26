import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

// Section links for navigation
const sectionLinks: Record<string, { name: string; id: string }> = {
  about: { name: "About", id: "about" },
  tracks: { name: "Scientific Tracks", id: "tracks" },
  dates: { name: "Important Dates", id: "dates" },
  callforpapers: { name: "Call for Papers", id: "call-for-papers" },
  registration: { name: "Registration", id: "registration" },
  committees: { name: "Committees", id: "committees" },
  speakers: { name: "Speakers", id: "speakers" },
  venue: { name: "Venue", id: "venue" },
  downloads: { name: "Downloads", id: "downloads" },
  contact: { name: "Contact", id: "contact" },
  whyattend: { name: "Why Attend", id: "why-attend" },
};

// Committee data for queries
const organizingCommittee = {
  president: "Dr. Achour Abdelraouf",
  chairs: ["Dr. Abdelhadi Sofiane", "Dr. Meghzili Seif Allah"],
  members: [
    "Dr. Hamiouda Sara", "Dr. Bouzit Fatima", "Dr. Goudjil Hadjer", "Mr. Djaafer Lakhdar",
    "Mme. Mehareb Soulef", "Dr. Berghout Oussama", "Dr. Louadj Amel", "Dr. Houari Hocine",
    "Dr. Mokadem Maamar", "Mr. Ghefari Abdelfattah", "Dr. Aissou Abdallah", "Dr. Bourahla Nassima",
    "Dr. Bouraghda Skander", "Dr. Megdoud Yousra", "Dr. Denine Sidali", "Mme. Bensoudane Sarra",
    "Dr. Ouahab Mohamed Younes", "Mme. Azzaz Ibtissam", "Mr. Boufrina Tawfiq", "Mme. Benammour Abir",
    "Dr. Barour Sabiha", "Dr. Sara Kherroubi"
  ],
};

const scientificCommittee = {
  president: "Dr. Hamiouda Sara",
  members: [
    "Dr. Yousfi Mohamed Lamine (Univ Tipaza)", "Pr. Daghbouche Yasmina (Univ Tipaza)",
    "Pr. Abdelmalk Samir (NSN Nano)", "Pr. Laidi Maammer (Univ Medea)",
    "Dr. Ould Khaoua Younes (USTHB)", "Pr. Si Moussa Cherif (Univ Medea)",
    "Pr. Kerchiche Yacine (ENP El Harrach)", "Dr. Yasmina Biskri (ENSETech Skikda)",
    "Dr. Kerzabi Rachida (CRAPAST Djelfa)", "Dr. Khalef Rostom (Univ Mila)",
    "Dr. Ali Tetbirt (UDES/EPST-CDER)", "Dr. Ziane Sami (Univ Mila)",
    "Dr. Abdeslam Nora Amele (Univ Biskra)", "and 45+ more researchers"
  ],
};

const faqData: { keywords: string[]; answer: string; links?: string[] }[] = [
  // About the Congress
  { 
    keywords: ["what is ncimgceb", "about congress", "tell me about", "what is this"], 
    answer: "NCIMGCEB-AI'26 is the 1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and Artificial Intelligence Applications.\n\n📅 Date: April 25, 2026\n📍 Venue: Tipasa University – Morsli Abdellah\n\nOrganized by the Faculty of Sciences under the supervision of Dr. Achour Abdelraouf.\n\n👉 Learn more:",
    links: ["about"]
  },
  { 
    keywords: ["objectives", "goals", "aim", "purpose"], 
    answer: "🎯 Congress Objectives:\n\n• Highlight advances in innovative materials, green chemistry, environment, biomedical sciences, and AI\n• Provide a multidisciplinary platform for researchers, academics, and students\n• Foster collaboration between universities and industry\n• Promote AI integration in science and technology\n• Support sustainable development initiatives\n\n👉 Learn more:",
    links: ["about"]
  },
  { 
    keywords: ["national or international", "scope"], 
    answer: "NCIMGCEB-AI'26 is a National Congress with international scope. We welcome international participants. Papers can be submitted in English and French. 🌍\n\n👉 View details:",
    links: ["about"]
  },
  
  // Organizing Committee
  { 
    keywords: ["organizing committee", "organizers", "who organizes", "organization"], 
    answer: `🏛️ Organizing Committee:\n\n👨‍🏫 President: ${organizingCommittee.president}\n\n👥 Chairs:\n• ${organizingCommittee.chairs.join("\n• ")}\n\n📋 The organizing committee includes ${organizingCommittee.members.length} dedicated members handling reception, logistics, transport, catering, and accommodation.\n\n👉 View full list:`,
    links: ["committees"]
  },
  { 
    keywords: ["president", "achour", "who is the president"], 
    answer: `The NCIMGCEB-AI'26 President is ${organizingCommittee.president}.\n\nHe leads the 1st National Congress on Innovative Materials, Green Chemistry, Environment, Biomedical Sciences, and AI Applications at Tipasa University.\n\n👉 View all committee members:`,
    links: ["committees"]
  },
  { 
    keywords: ["organizing members", "committee members list"], 
    answer: `📋 Organizing Committee Members:\n\n${organizingCommittee.members.slice(0, 10).join(", ")}, and ${organizingCommittee.members.length - 10} more members.\n\n👉 View complete list:`,
    links: ["committees"]
  },
  
  // Scientific Committee
  { 
    keywords: ["scientific committee", "reviewers", "scientific members"], 
    answer: `🔬 Scientific Committee:\n\n👩‍🔬 President: ${scientificCommittee.president}\n\nThe committee includes 58 distinguished researchers from:\n• Tipasa University\n• USTHB Algiers\n• Universities of Medea, Mila, Biskra, Ghardaia\n• UDES, CRAPAST, NSN Nano, ENP, ENSETech\n\n👉 View all members:`,
    links: ["committees"]
  },
  { 
    keywords: ["hamiouda", "scientific president"], 
    answer: `Dr. Hamiouda Sara is the President of the Scientific Committee.\n\nShe oversees the peer review process and scientific quality of all submissions.\n\n👉 View committee details:`,
    links: ["committees"]
  },
  
  // Scientific Tracks
  { 
    keywords: ["paper topics", "tracks", "themes", "scientific areas", "research areas"], 
    answer: "We have 5 scientific tracks:\n\n1️⃣ Innovative Materials – Nanomaterials, composites, biomaterials\n2️⃣ Green Chemistry – Sustainable processes, catalysis\n3️⃣ Environment & Sustainability – Renewable energy, pollution control\n4️⃣ Biomedical Sciences – Drug delivery, diagnostics\n5️⃣ AI Applications – Machine learning, modeling, simulation\n\n👉 View track details:",
    links: ["tracks"]
  },
  { 
    keywords: ["materials", "nanomaterials", "track 1"], 
    answer: "Track 1: Innovative Materials\n\n• Nanomaterials and nanocomposites\n• Smart and functional materials\n• Biomaterials and biocompatible materials\n• Polymers and advanced composites\n• Material characterization techniques 🔬\n\n👉 View all tracks:",
    links: ["tracks"]
  },
  { 
    keywords: ["green chemistry", "sustainable chemistry", "track 2"], 
    answer: "Track 2: Green Chemistry\n\n• Green synthesis methodologies\n• Catalysis and biocatalysis\n• Sustainable chemical processes\n• Waste reduction and recycling\n• Bio-based materials and chemicals 🌿\n\n👉 View all tracks:",
    links: ["tracks"]
  },
  { 
    keywords: ["environment", "sustainability", "renewable", "track 3"], 
    answer: "Track 3: Environment & Sustainability\n\n• Renewable energy systems\n• Water treatment and purification\n• Air quality and pollution control\n• Waste management strategies\n• Environmental impact assessment 🌍\n\n👉 View all tracks:",
    links: ["tracks"]
  },
  { 
    keywords: ["biomedical", "health", "medical", "track 4"], 
    answer: "Track 4: Biomedical Sciences\n\n• Drug delivery systems\n• Diagnostic technologies\n• Tissue engineering\n• Pharmaceutical innovations\n• Medical devices and biosensors 🏥\n\n👉 View all tracks:",
    links: ["tracks"]
  },
  { 
    keywords: ["artificial intelligence", "ai", "machine learning", "track 5"], 
    answer: "Track 5: AI Applications\n\n• Machine learning for materials discovery\n• AI in chemical process optimization\n• Environmental monitoring with AI\n• Biomedical image analysis\n• Predictive modeling and simulation 🤖\n\n👉 View all tracks:",
    links: ["tracks"]
  },
  
  // Submission Guidelines
  { 
    keywords: ["paper format", "formatting", "template", "guidelines"], 
    answer: "📄 Submission Guidelines:\n\n• Abstract: 300-500 words\n• Full paper: 4-8 pages\n• Font: Times New Roman, 12pt\n• Margins: 2.5cm all sides\n• References: IEEE or APA format\n\n👉 Download templates:",
    links: ["downloads", "callforpapers"]
  },
  { 
    keywords: ["how to submit", "submission process", "submit abstract", "submit paper"], 
    answer: "📝 Submission Process:\n\n1. Prepare your abstract (300-500 words)\n2. Use the official template\n3. Submit via Google Forms (link in Registration section)\n4. Wait for acceptance notification\n5. Prepare full paper if accepted\n6. Complete registration\n\nSubmissions are blind peer-reviewed! 🔍\n\n👉 Submit now:",
    links: ["callforpapers", "registration"]
  },
  { 
    keywords: ["language", "english", "french", "arabic"], 
    answer: "We accept papers in:\n\n🇬🇧 English (preferred for publication)\n🇫🇷 French\n\nPresentations can be in English or French. All abstracts should include an English version.\n\n👉 View submission guidelines:",
    links: ["callforpapers"]
  },
  { 
    keywords: ["more than one", "multiple papers", "two papers"], 
    answer: "Yes! You can submit multiple papers:\n\n• Maximum 2 papers as first author\n• No limit as co-author\n• Each paper requires separate registration fee\n• All papers undergo independent review 📚\n\n👉 Learn more:",
    links: ["callforpapers"]
  },
  { 
    keywords: ["review process", "peer review", "blind review"], 
    answer: "🔍 Review Process:\n\n• All submissions are blind peer-reviewed\n• Minimum 2 reviewers per paper\n• Evaluation criteria: originality, methodology, clarity\n• Review period: approximately 10 days\n• Authors notified via email\n\n👉 View timeline:",
    links: ["dates"]
  },
  
  // Important Dates & Deadlines
  { 
    keywords: ["abstract deadline", "submission deadline", "when submit"], 
    answer: "📅 Submission Deadlines:\n\n• Submission Opens: February 15, 2026\n• Abstract Deadline: March 15, 2026\n• Full Paper Deadline: April 5, 2026\n\n⚠️ Late submissions may not be accepted!\n\n👉 View all dates:",
    links: ["dates"]
  },
  { 
    keywords: ["acceptance notification", "notification", "results", "when know"], 
    answer: "📬 Notification Timeline:\n\n• Abstract acceptance: March 25, 2026\n• Full paper acceptance: April 10, 2026\n• Authors notified via email\n• Check spam folder if not received!\n\n👉 View all dates:",
    links: ["dates"]
  },
  { 
    keywords: ["important dates", "deadlines", "when", "timeline", "key dates"], 
    answer: "📅 Key Dates:\n\n• Feb 15 – Submission Opens\n• Mar 15 – Abstract Deadline\n• Mar 25 – Acceptance Notification\n• Apr 5 – Full Paper Deadline\n• Apr 10 – Early Registration Ends\n• Apr 20 – Registration Closes\n• Apr 25 – Congress Day! 🎉\n\n👉 View details:",
    links: ["dates"]
  },
  { 
    keywords: ["registration deadline", "when register", "last day to register"], 
    answer: "📅 Registration Deadlines:\n\n• Early Bird: Until April 10, 2026\n• Regular: April 11-20, 2026\n• On-site registration not available\n\n⚠️ Register early for best rates!\n\n👉 Register now:",
    links: ["registration", "dates"]
  },
  
  // Registration & Fees
  { 
    keywords: ["registration fee", "how much", "cost", "price", "fees"], 
    answer: "💰 Registration Fees:\n\n🎓 Students: 3,000 DZD (~$22)\n👨‍🏫 Academics/Researchers: 5,000 DZD (~$37)\n💼 Industry Professionals: 8,000 DZD (~$60)\n\nIncludes: Congress materials, lunch, coffee breaks, certificate\n\n👉 Register now:",
    links: ["registration"]
  },
  { 
    keywords: ["student discount", "discount", "reduced fee"], 
    answer: "🎓 Student Benefits:\n\n• Discounted rate: 3,000 DZD (~$22)\n• 40% off regular academic rate\n• Valid student ID required\n• Must be currently enrolled\n\nPhD students qualify for student rate! 💳\n\n👉 Register:",
    links: ["registration"]
  },
  { 
    keywords: ["what included", "registration includes", "get for fee"], 
    answer: "✅ Registration Includes:\n\n• Access to all sessions\n• Congress materials & program\n• Lunch and coffee breaks\n• Certificate of participation\n• Abstract book (digital)\n• Networking opportunities\n\n👉 Register:",
    links: ["registration"]
  },
  { 
    keywords: ["payment", "how to pay", "payment method"], 
    answer: "💳 Payment Methods:\n\n• Bank transfer (CCP/postal)\n• Cash payment at university\n• Payment details provided after form submission\n\n📧 Confirmation sent within 48 hours\n\n👉 Start registration:",
    links: ["registration"]
  },
  { 
    keywords: ["how to register", "register", "registration process"], 
    answer: "📝 Registration Steps:\n\n1. Click 'Register Now' button\n2. Fill the Google Form with your details\n3. Select participant category\n4. Upload abstract (if submitting)\n5. Receive payment instructions\n6. Complete payment\n7. Get confirmation email ✅\n\n👉 Register now:",
    links: ["registration"]
  },
  { 
    keywords: ["refund", "cancel registration", "cancellation"], 
    answer: "💰 Cancellation Policy:\n\n• Before Mar 25: 80% refund\n• Mar 26 - Apr 10: 50% refund\n• After Apr 10: No refund\n• Substitutions allowed until Apr 20\n\n📧 Contact us for cancellation requests\n\n👉 Contact:",
    links: ["contact"]
  },
  
  // Certificates
  { 
    keywords: ["certificate", "attestation", "proof"], 
    answer: "✅ Certificates Provided:\n\n• Certificate of Participation (all attendees)\n• Certificate of Presentation (for presenters)\n• Certificate of Excellence (best papers)\n\n📄 Digital certificates sent within 2 weeks after congress\n\n👉 Register to participate:",
    links: ["registration"]
  },
  
  // Venue & Location
  { 
    keywords: ["where", "location", "venue", "address", "tipasa"], 
    answer: "📍 Venue: Tipasa University – Morsli Abdellah\n\nLocated in Tipasa, ~70 km west of Algiers.\n\n🏛️ The city features UNESCO World Heritage Roman ruins!\n🌊 Beautiful Mediterranean coastal views\n🚗 Easy access from Algiers\n\n👉 View venue details:",
    links: ["venue"]
  },
  { 
    keywords: ["online", "virtual", "remote", "onsite", "hybrid"], 
    answer: "🏛️ NCIMGCEB-AI'26 is an ON-SITE only event at Tipasa University.\n\nNo virtual/online participation option available.\nAll presenters must attend in person.\n\n👉 View venue:",
    links: ["venue"]
  },
  { 
    keywords: ["official date", "date of congress", "when is it", "april"], 
    answer: "📅 April 25, 2026\n\nA single-day intensive congress featuring:\n• Keynote speeches\n• Oral presentations\n• Poster sessions\n• Networking lunch\n\n👉 View program:",
    links: ["dates", "about"]
  },
  { 
    keywords: ["program", "schedule", "agenda", "timetable"], 
    answer: "📋 Tentative Program:\n\n08:00 – Registration & Welcome\n09:00 – Opening Ceremony\n09:30 – Keynote Speeches\n11:00 – Coffee Break\n11:30 – Parallel Sessions\n13:00 – Lunch & Poster Session\n14:30 – Parallel Sessions\n16:00 – Coffee Break\n16:30 – Final Session\n17:30 – Closing Ceremony\n\n👉 View dates:",
    links: ["dates"]
  },
  
  // Presentations
  { 
    keywords: ["presentation", "oral", "talk", "how long"], 
    answer: "🎤 Presentation Guidelines:\n\n• Oral: 15 min + 5 min Q&A\n• Poster: 90×120 cm (portrait)\n• Language: English or French\n• Projector & microphone provided\n• Bring presentation on USB\n\n👉 Download templates:",
    links: ["downloads"]
  },
  { 
    keywords: ["poster", "poster session", "poster size"], 
    answer: "📊 Poster Guidelines:\n\n• Size: 90×120 cm (portrait)\n• Include: title, authors, affiliations\n• Clear figures and readable text\n• Bring printed poster\n• Poster boards provided\n• Dedicated poster session during lunch\n\n👉 Download poster template:",
    links: ["downloads"]
  },
  
  // Publication
  { 
    keywords: ["publish", "publication", "journal", "proceedings"], 
    answer: "📚 Publication Opportunities:\n\n• All abstracts → Book of Abstracts (ISBN)\n• Selected papers → Indexed journals\n• Best papers → Special issue invitation\n• Open access options available\n\n👉 Submit your work:",
    links: ["callforpapers"]
  },
  { 
    keywords: ["isbn", "issn", "indexed", "scopus"], 
    answer: "📖 Publication Details:\n\n• Book of Abstracts: ISBN registered\n• Journal publications: ISSN indexed\n• Selected journals are Scopus-indexed\n• Details announced after acceptance\n\n👉 Learn more:",
    links: ["callforpapers"]
  },
  
  // Downloads & Resources
  { 
    keywords: ["download", "flyer", "brochure", "poster template", "paper template"], 
    answer: "📥 Available Downloads:\n\n• Congress Flyer (PDF)\n• Poster Template (PPTX)\n• Paper Template (DOCX)\n\n👉 Go to downloads:",
    links: ["downloads"]
  },
  
  // Contact
  { 
    keywords: ["contact", "email", "phone", "reach", "get in touch"], 
    answer: "📞 Contact Us:\n\n📧 contact@ncimgceb-ai26.dz\n📱 +213 555 123 456\n💬 Use WhatsApp button on website\n\n🏛️ Tipasa University\nFaculty of Sciences\nTipaza, Algeria\n\n👉 View contact details:",
    links: ["contact"]
  },
  { 
    keywords: ["whatsapp", "message"], 
    answer: "💬 WhatsApp Contact:\n\nClick the floating WhatsApp button on the bottom right of the page to message us directly!\n\nWe typically respond within 24 hours.\n\n👉 Or view other contact options:",
    links: ["contact"]
  },
  
  // Travel & Accommodation
  { 
    keywords: ["accommodation", "hotel", "where to stay", "lodging"], 
    answer: "🏨 Accommodation Options:\n\n• Hotels in Tipasa city center\n• Coastal resorts nearby\n• Guesthouses and B&Bs\n\n💡 Special rates negotiated for participants!\nDetails provided after registration.\n\n👉 View venue info:",
    links: ["venue"]
  },
  { 
    keywords: ["transport", "airport", "travel", "how to get"], 
    answer: "✈️ Getting to Tipasa:\n\n• Nearest airport: Algiers (ALG) – 70km\n• Travel time: ~1 hour by car\n• Taxi and bus services available\n• Shuttle information coming soon\n\n🚗 Free parking at university\n\n👉 View venue:",
    links: ["venue"]
  },
  { 
    keywords: ["visa", "invitation letter", "travel documents"], 
    answer: "🛂 Visa Support:\n\n• Invitation letters available upon request\n• Request after registration confirmation\n• Allow 2-3 days for processing\n• Contact us with passport details\n\n📧 visa@ncimgceb-ai26.dz\n\n👉 Contact us:",
    links: ["contact"]
  },
  
  // Why Attend
  { 
    keywords: ["why attend", "benefits", "reasons", "should i attend"], 
    answer: "🌟 Why Attend NCIMGCEB-AI'26?\n\n• National & Interdisciplinary Collaboration\n• High-Quality Publications in indexed journals\n• AI-Driven Research Impact\n• Best Paper Awards\n• Expert Keynote Sessions\n• Career Development Workshops\n\n👉 Learn more:",
    links: ["whyattend", "about"]
  },
  
  // Speakers
  { 
    keywords: ["speakers", "keynote", "invited speakers", "plenary"], 
    answer: "🎤 Keynote Speakers:\n\nDistinguished speakers from leading institutions will be announced soon.\n\nExpect experts in:\n• Materials Science\n• Green Chemistry\n• Environmental Engineering\n• Biomedical Research\n• Artificial Intelligence\n\n👉 View speakers:",
    links: ["speakers"]
  },
  
  // Greetings & General
  { 
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "bonjour", "salam", "مرحبا"], 
    answer: "Hello! 👋 Welcome to NCIMGCEB-AI'26!\n\nI'm your virtual congress assistant. I can help you with:\n\n• Congress details & scientific tracks\n• Paper submission guidelines\n• Registration process & fees\n• Committee information\n• Venue & travel details\n\nWhat would you like to know?\n\n👉 Quick links:",
    links: ["about", "registration", "callforpapers"]
  },
  { 
    keywords: ["thank", "thanks", "merci", "شكرا"], 
    answer: "You're welcome! 😊\n\nGood luck with your submission! We look forward to seeing you at NCIMGCEB-AI'26 on April 25, 2026!\n\nFeel free to ask if you have more questions!\n\n👉 Quick links:",
    links: ["registration", "contact"]
  },
  { 
    keywords: ["bye", "goodbye", "see you", "au revoir"], 
    answer: "Goodbye! 👋\n\nDon't forget to mark your calendar: April 25, 2026!\n\nSee you at Tipasa University! 🎉\n\n👉 Before you go:",
    links: ["registration", "downloads"]
  },
  { 
    keywords: ["help", "assist", "support", "guide"], 
    answer: "I'm here to help! 💡\n\nI can guide you through:\n\n📋 About the Congress\n📝 Submission Process\n💰 Registration & Fees\n📅 Important Deadlines\n👥 Committees\n📍 Venue & Travel\n📥 Downloads\n📞 Contact Information\n\nJust type your question or click a quick link below!",
    links: ["about", "callforpapers", "registration", "contact"]
  },
  
  // Who can attend
  { 
    keywords: ["who can attend", "can i attend", "eligibility", "participants"], 
    answer: "The congress is open to:\n\n• Researchers and academics\n• PhD and Master's students\n• Industry professionals\n• Anyone interested in our scientific themes\n\nBoth Algerian and international participants are welcome! 👥\n\n👉 Register now:",
    links: ["registration", "about"]
  },
  { 
    keywords: ["who can submit", "submit a paper", "can students submit"], 
    answer: "Anyone can submit! We accept submissions from:\n\n• University researchers & professors\n• PhD and Master's students\n• Industry professionals\n• Independent researchers\n\nStudents are encouraged to participate! 📝\n\n👉 Submit your work:",
    links: ["callforpapers", "registration"]
  },
  
  // Specific member queries
  { 
    keywords: ["sofiane", "abdelhadi"], 
    answer: "Dr. Abdelhadi Sofiane serves as:\n\n• Organizing Committee Chair\n• Scientific Committee Member (Univ Tipaza)\n\n👉 View full committee:",
    links: ["committees"]
  },
  { 
    keywords: ["meghzili", "seif allah"], 
    answer: "Dr. Meghzili Seif Allah serves as:\n\n• Organizing Committee Chair\n• Scientific Committee Member (Univ Tipaza)\n\n👉 View full committee:",
    links: ["committees"]
  },
  { 
    keywords: ["gheffari", "ghefari", "abdelfettah"], 
    answer: "Mr. Ghefari Abdelfattah is a member of the Organizing Committee.\n\n👉 View full committee:",
    links: ["committees"]
  },
    { 
    keywords: ["sara", "Hamiouda", "abdelfettah"], 
    answer: "Dr. Hamiouda Sara is the President of Scientific Committee.\n\n👉 View full committee:",
    links: ["committees"]
  },
];

const quickQuestions = [
  "About the congress",
  "How to submit?", 
  "Registration fees?",
  "Important dates?",
  "Organizing committee?",
  "Contact info?"
];

const WELCOME_MESSAGE = "Hello! 👋 I'm the NCIMGCEB-AI'26 Congress Assistant.\n\nI can help you with everything about our congress:\n\n📋 General information & objectives\n📝 Submission guidelines\n💰 Registration & fees\n📅 Important deadlines\n👥 Organizing & Scientific Committees\n📍 Venue, travel & accommodation\n📥 Templates & downloads\n📞 Contact details\n\nHow can I assist you today?";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => { setIsTyping(false); setMessages([{ id: 1, text: WELCOME_MESSAGE, isBot: true }]); }, 1200);
    }
  }, [isOpen, messages.length]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 100); }, [isOpen]);

  const findAnswer = (q: string): { text: string; links?: string[] } => {
    const lower = q.toLowerCase();
    for (const faq of faqData) {
      for (const kw of faq.keywords) {
        if (lower.includes(kw)) {
          return { text: faq.answer, links: faq.links };
        }
      }
    }
    return { 
      text: "I'm not sure about that specific question. 🤔\n\nHere are some topics I can help with:\n\n• Congress information & objectives\n• Submission process & guidelines\n• Registration & fees\n• Important dates\n• Committees (organizing & scientific)\n• Venue & travel\n• Downloads & templates\n\nOr feel free to contact us directly:",
      links: ["contact", "about"]
    };
  };

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;
    setMessages(prev => [...prev, { id: prev.length + 1, text: msg, isBot: false }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const { text: answer, links } = findAnswer(msg);
      const fullAnswer = answer + (links ? `\n\n__LINKS__${links.join(",")}` : "");
      setTimeout(() => { 
        setIsTyping(false); 
        setMessages(prev => [...prev, { id: prev.length + 1, text: fullAnswer, isBot: true }]); 
      }, Math.min(500 + answer.length * 8, 2000));
    }, 600 + Math.random() * 800);
  };

  const renderMessageWithLinks = (text: string) => {
    const linkMatch = text.match(/__LINKS__(.+)$/);
    const mainText = text.replace(/__LINKS__.+$/, "").trim();
    const linkIds = linkMatch ? linkMatch[1].split(",") : [];

    return (
      <>
        <span className="whitespace-pre-line">{mainText}</span>
        {linkIds.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {linkIds.map(id => {
              const link = sectionLinks[id];
              if (!link) return null;
              return (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors flex items-center gap-1"
                >
                  → {link.name}
                </button>
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center ${isOpen ? "bg-secondary text-foreground" : "bg-gradient-to-r from-primary to-cyan text-primary-foreground hover:shadow-glow"}`}>
        {isOpen ? <X className="w-6 h-6" /> : <><MessageSquare className="w-6 h-6" /><span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full animate-ping" /><span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full" /></>}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl overflow-hidden animate-scale-in shadow-2xl">
          <div className="bg-gradient-to-r from-primary to-cyan p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center"><Bot className="w-6 h-6 text-primary-foreground" /></div>
              <div className="flex-1">
                <div className="flex items-center gap-2"><h3 className="font-semibold text-primary-foreground">Congress Assistant</h3><Sparkles className="w-4 h-4 text-primary-foreground/80" /></div>
                <div className="flex items-center gap-2 text-xs text-primary-foreground/80"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />Online • Ready to guide you</div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary-foreground/10 rounded-lg"><X className="w-5 h-5 text-primary-foreground" /></button>
            </div>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map(m => (
              <div key={m.id} className={`flex items-start gap-2 animate-fade-in-up ${m.isBot ? "" : "flex-row-reverse"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.isBot ? "bg-primary/20" : "bg-cyan/20"}`}>{m.isBot ? <Bot className="w-4 h-4 text-primary" /> : <User className="w-4 h-4 text-cyan" />}</div>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.isBot ? "bg-secondary text-foreground rounded-tl-sm" : "bg-primary text-primary-foreground rounded-tr-sm"}`}>
                  {m.isBot ? renderMessageWithLinks(m.text) : <span className="whitespace-pre-line">{m.text}</span>}
                </div>
              </div>
            ))}
            {isTyping && <div className="flex items-start gap-2 animate-fade-in-up"><div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Bot className="w-4 h-4 text-primary" /></div><div className="bg-secondary rounded-2xl rounded-tl-sm p-4"><div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" /><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"150ms"}} /><span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"300ms"}} /></div></div></div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-border bg-secondary/30">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {quickQuestions.map(q => (
                <button key={q} onClick={() => handleSend(q)} disabled={isTyping} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50">{q}</button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about the congress..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground"
                disabled={isTyping}
              />
              <Button onClick={() => handleSend()} disabled={isTyping || !input.trim()} size="icon" className="rounded-xl bg-primary hover:bg-primary/90"><Send className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
