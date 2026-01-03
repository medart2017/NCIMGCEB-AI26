// import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
// import { Award, Users, BookOpen } from "lucide-react";

// const committees = {
//   organizing: {
//     president: { name: "Dr. Achour Abdelraouf", role: "President of the Congress" },
//     chairs: [
//       { name: "Dr. Abdelhadi Sofiane", role: "Organizing Committee Chair" },
//       { name: "Dr. Meghzili Seif Allah", role: "Organizing Committee Chair" },
//     ],
//     members: [
//       "Dr. Hamiouda Sara", "Dr. Bouzit Fatima", "Dr. Goudjil Hadjer", "Mr. Djaafer Lakhdar",
//       "Mme. Mehareb Soulef", "Dr. Berghout Oussama", "Dr. Louadj Amel", "Dr. Houari Hocine",
//       "Dr. Mokadem Maamar", "Mr. Ghefari Abdelfattah", "Dr. Aissou Abdallah", "Dr. Bourahla Nassima",
//       "Dr. Bouraghda Skander", "Dr. Megdoud Yousra", "Dr. Denine Sidali", "Mme. Bensoudane Sarra",
//       "Dr. Ouahab Mohamed Younes", "Mme. Azzaz Ibtissam", "Mr. Boufrina Tawfiq", "Mme. Benammour Abir",
//       "Dr. Barour Sabiha", "Dr. Sara Kherroubi"
//     ],
//   },
//   scientific: {
//     president: { name: "Dr. Hamiouda Sara", role: "President of Scientific Committee" },
//     members: [
//       { name: "Dr. Yousfi Mohamed Lamine", affiliation: "Univ Tipaza" },
//       { name: "Pr. Daghbouche Yasmina", affiliation: "Univ Tipaza" },
//       { name: "Dr. Abdelhadi Sofiane", affiliation: "Univ Tipaza" },
//       { name: "Pr. Abdelmalk Samir", affiliation: "NSN Nano Sidi Abdellah" },
//       { name: "Dr. Meghzili Seif Allah", affiliation: "Univ Tipaza" },
//       { name: "Pr. Laidi Maammer", affiliation: "Univ Medea" },
//       { name: "Dr. Ould Khaoua Younes", affiliation: "USTHB" },
//       { name: "Dr. Louadj Amel", affiliation: "Univ Tipaza" },
//       { name: "Dr. Soumaya Kersenna", affiliation: "Univ Annaba" },
//       { name: "Dr. Ezzeroug Kaouther", affiliation: "Univ Tipaza" },
//       { name: "Dr. Bradji Okba", affiliation: "NSN Nano Sidi Abdellah" },
//       { name: "Pr. Si Moussa Cherif", affiliation: "Univ Medea" },
//       { name: "Dr. Bensalem Ahmed", affiliation: "Univ Tipaza" },
//       { name: "Pr. Kerchiche Yacine", affiliation: "ENP El Harrach" },
//       { name: "Dr. Aziez Mohamed Nadjib", affiliation: "Univ Ghardaia" },
//       { name: "Dr. Farial Krache", affiliation: "Univ Tipaza" },
//       { name: "Dr. Bouarroudj Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Yasmina Biskri", affiliation: "ENSETech Skikda" },
//       { name: "Dr. Laour Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kerzabi Rachida", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Bendoumia Meriem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Sarra Hout", affiliation: "UDES Tipaza" },
//       { name: "Dr. Gherrak Fouzia", affiliation: "Univ Tipaza" },
//       { name: "Dr. Khalef Rostom", affiliation: "Univ Mila" },
//       { name: "Dr. Mansouri Deloula", affiliation: "Univ Tipaza" },
//       { name: "Dr. Mazidi Ahmed", affiliation: "UDES Tipaza" },
//       { name: "Dr. Imene Mihoub", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ali Tetbirt", affiliation: "UDES/EPST-CDER" },
//       { name: "Dr. Houari Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Hentabli Mohamed", affiliation: "Univ Chlef" },
//       { name: "Dr. Irki Ilyes", affiliation: "Univ Tipaza" },
//       { name: "Dr. Azaib Samia", affiliation: "Univ Tipaza" },
//       { name: "Dr. Belalia Fatiha", affiliation: "Univ Tipaza" },
//       { name: "Pr. Lefnaoui Sonia", affiliation: "Univ Medea" },
//       { name: "Dr. Raoui Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Adda Asma", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ouided Dehas", affiliation: "ENSETech Skikda" },
//       { name: "Dr. Younsi Aziz", affiliation: "Univ Tipaza" },
//       { name: "Dr. Djelloul Belkacemi", affiliation: "UDES-CDER" },
//       { name: "Dr. Oudane Boualem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Oussama Benaimeche", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ziane Sami", affiliation: "Univ Mila" },
//       { name: "Dr. Boussouf Lila", affiliation: "Univ Tipaza" },
//       { name: "Dr. Chabni Faycel", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kasmi Houria", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Ikhlef Ahlem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Aoudjit Lamine", affiliation: "UDES Tipaza" },
//       { name: "Dr. Khemmari Fariza", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ziouani Khawla", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Badis Dalila", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kheloufi Nawal", affiliation: "Univ Tipaza" },
//       { name: "Dr. Abdeslam Nora Amele", affiliation: "Univ Biskra" },
//       { name: "Dr. Mouada Hanane", affiliation: "Univ Tipaza" },
//       { name: "Dr. Zoubir Belgroun", affiliation: "UDES / EPST CDER" },
//       { name: "Dr. Tigrine Zahia", affiliation: "UDES-CDER" },
//       { name: "Dr. Sadoun Louiza", affiliation: "Univ Tipaza" },
//       { name: "Dr. Khaine Djilali", affiliation: "Univ Tipaza" },
//       { name: "Dr. Harichane Alya", affiliation: "Univ Tipaza" },
//     ],
//   },
// };

// export const CommitteesSection = () => {
//   return (
//     <SectionWrapper id="committees" background="muted">
//       <SectionTitle 
//         title="Committees" 
//         subtitle="Meet the distinguished members organizing NCIMGCEB-AI'26"
//       />

//       <div className="space-y-12">
//         {/* Organizing Committee */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
//               <Users className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <h3 className="text-2xl font-serif font-semibold text-foreground">Organizing Committee</h3>
//           </div>
          
//           {/* President */}
//           <div className="mb-6">
//             <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20">
//               <div className="flex items-center gap-3">
//                 <Award className="w-6 h-6 text-primary" />
//                 <div>
//                   <h4 className="font-semibold text-foreground text-lg">{committees.organizing.president.name}</h4>
//                   <p className="text-primary font-medium">{committees.organizing.president.role}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Chairs */}
//           <div className="mb-6">
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Chairs</h4>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {committees.organizing.chairs.map((chair) => (
//                 <div key={chair.name} className="p-4 rounded-xl bg-secondary/30 border border-primary/10">
//                   <h4 className="font-semibold text-foreground">{chair.name}</h4>
//                   <p className="text-primary text-sm">{chair.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Members */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Members</h4>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//               {committees.organizing.members.map((member) => (
//                 <div key={member} className="p-3 rounded-lg bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-colors">
//                   <p className="text-foreground text-sm">{member}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scientific Committee */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
//               <BookOpen className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <h3 className="text-2xl font-serif font-semibold text-foreground">Scientific Committee</h3>
//           </div>

//           {/* President */}
//           <div className="mb-6">
//             <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
//               <div className="flex items-center gap-3">
//                 <Award className="w-6 h-6 text-cyan" />
//                 <div>
//                   <h4 className="font-semibold text-foreground text-lg">{committees.scientific.president.name}</h4>
//                   <p className="text-cyan font-medium">{committees.scientific.president.role}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Members */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Members</h4>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//               {committees.scientific.members.map((member) => (
//                 <div key={member.name} className="p-3 rounded-lg bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-colors">
//                   <p className="text-foreground text-sm font-medium">{member.name}</p>
//                   <p className="text-muted-foreground text-xs">{member.affiliation}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };
// import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
// import { Award, Users, BookOpen } from "lucide-react";

// const committees = {
//   topLeadership: {
//     universityPresident: {
//       name: "Dr. Hddidi",
//       role: "President of the University"
//     },
//     generalPresident: {
//       name: "Dr. Achour Abdelraouf",
//       role: "General President of NCIMGCEB-AI'26"
//     },
//   },

//   organizing: {
//     chairs: [
//       { name: "Dr. Abdelhadi Sofiane", role: "Organizing Committee Chair" },
//       { name: "Dr. Meghzili Seif Allah", role: "Organizing Committee Chair" },
//     ],
//     members: [
//       "Dr. Hamiouda Sara", "Dr. Bouzit Fatima", "Dr. Goudjil Hadjer", "Mr. Djaafer Lakhdar",
//       "Mme. Mehareb Soulef", "Dr. Berghout Oussama", "Dr. Louadj Amel", "Dr. Houari Hocine",
//       "Dr. Mokadem Maamar", "Mr. Ghefari Abdelfattah", "Dr. Aissou Abdallah", "Dr. Bourahla Nassima",
//       "Dr. Bouraghda Skander", "Dr. Megdoud Yousra", "Dr. Denine Sidali", "Mme. Bensoudane Sarra",
//       "Dr. Ouahab Mohamed Younes", "Mme. Azzaz Ibtissam", "Mr. Boufrina Tawfiq", "Mme. Benammour Abir",
//       "Dr. Barour Sabiha", "Dr. Sara Kherroubi","Maroua Nihel Benabdallah","Dr. Khaine Djilali"
//     ],
//   },
//       // { name: "Dr. Khaine Djilali", affiliation: "Univ Tipaza" },
//   scientific: {
//     president: { name: "Dr. Hamiouda Sara", role: "President of Scientific Committee" },
//     members: [
//       { name: "Dr. Yousfi Mohamed Lamine", affiliation: "Univ Tipaza" },
//       { name: "Pr. Daghbouche Yasmina", affiliation: "Univ Tipaza" },
//       { name: "Dr. Abdelhadi Sofiane", affiliation: "Univ Tipaza" },
//       { name: "Pr. Abdelmalk Samir", affiliation: "NSN Nano Sidi Abdellah" },
//       { name: "Dr. Meghzili Seif Allah", affiliation: "Univ Tipaza" },
//       { name: "Pr. Laidi Maammer", affiliation: "Univ Medea" },
//       { name: "Dr. Ould Khaoua Younes", affiliation: "USTHB" },
//       { name: "Dr. Louadj Amel", affiliation: "Univ Tipaza" },
//       { name: "Dr. Soumaya Kersenna", affiliation: "Univ Annaba" },
//       { name: "Dr. Ezzeroug Kaouther", affiliation: "Univ Tipaza" },
//       { name: "Dr. Bradji Okba", affiliation: "NSN Nano Sidi Abdellah" },
//       { name: "Pr. Si Moussa Cherif", affiliation: "Univ Medea" },
//       { name: "Dr. Bensalem Ahmed", affiliation: "Univ Tipaza" },
//       { name: "Pr. Kerchiche Yacine", affiliation: "ENP El Harrach" },
//       { name: "Dr. Aziez Mohamed Nadjib", affiliation: "Univ Ghardaia" },
//       { name: "Dr. Farial Krache", affiliation: "Univ Tipaza" },
//       { name: "Dr. Bouarroudj Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Yasmina Biskri", affiliation: "ENSETech Skikda" },
//       { name: "Dr. Laour Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kerzabi Rachida", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Bendoumia Meriem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Sarra Hout", affiliation: "UDES Tipaza" },
//       { name: "Dr. Gherrak Fouzia", affiliation: "Univ Tipaza" },
//       { name: "Dr. Khalef Rostom", affiliation: "Univ Mila" },
//       { name: "Dr. Mansouri Deloula", affiliation: "Univ Tipaza" },
//       { name: "Dr. Mazidi Ahmed", affiliation: "UDES Tipaza" },
//       { name: "Dr. Imene Mihoub", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ali Tetbirt", affiliation: "UDES/EPST-CDER" },
//       { name: "Dr. Houari Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Hentabli Mohamed", affiliation: "Univ Chlef" },
//       { name: "Dr. Irki Ilyes", affiliation: "Univ Tipaza" },
//       { name: "Dr. Azaib Samia", affiliation: "Univ Tipaza" },
//       { name: "Dr. Belalia Fatiha", affiliation: "Univ Tipaza" },
//       { name: "Pr. Lefnaoui Sonia", affiliation: "Univ Medea" },
//       { name: "Dr. Raoui Mohamed", affiliation: "Univ Tipaza" },
//       { name: "Dr. Adda Asma", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ouided Dehas", affiliation: "ENSETech Skikda" },
//       { name: "Dr. Younsi Aziz", affiliation: "Univ Tipaza" },
//       { name: "Dr. Djelloul Belkacemi", affiliation: "UDES-CDER" },
//       { name: "Dr. Oudane Boualem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Oussama Benaimeche", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ziane Sami", affiliation: "Univ Mila" },
//       { name: "Dr. Boussouf Lila", affiliation: "Univ Tipaza" },
//       { name: "Dr. Chabni Faycel", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kasmi Houria", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Ikhlef Ahlem", affiliation: "Univ Tipaza" },
//       { name: "Dr. Aoudjit Lamine", affiliation: "UDES Tipaza" },
//       { name: "Dr. Khemmari Fariza", affiliation: "Univ Tipaza" },
//       { name: "Dr. Ziouani Khawla", affiliation: "CRAPAST Djelfa" },
//       { name: "Dr. Badis Dalila", affiliation: "Univ Tipaza" },
//       { name: "Dr. Kheloufi Nawal", affiliation: "Univ Tipaza" },
//       { name: "Dr. Abdeslam Nora Amele", affiliation: "Univ Biskra" },
//       { name: "Dr. Mouada Hanane", affiliation: "Univ Tipaza" },
//       { name: "Dr. Zoubir Belgroun", affiliation: "UDES / EPST CDER" },
//       { name: "Dr. Tigrine Zahia", affiliation: "UDES-CDER" },
//       { name: "Dr. Sadoun Louiza", affiliation: "Univ Tipaza" },
//       { name: "Dr. Aissou Abdallah", affiliation: "Univ Tipaza" },
//       // { name: "Dr. Harichane Alya", affiliation: "Univ Tipaza" },
//     ],
//   },
// };

// export const CommitteesSection = () => {
//   return (
//     <SectionWrapper id="committees" background="muted">
//       <SectionTitle 
//         title="Committees" 
//         subtitle="Meet the distinguished members organizing NCIMGCEB-AI'26"
//       />

//       <div className="space-y-12">

//         {/* University President */}
//         <div>
//           <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20">
//             <div className="flex items-center gap-3">
//               <Award className="w-6 h-6 text-primary" />
//               <div>
//                 <h4 className="font-semibold text-foreground text-lg">
//                   {committees.topLeadership.universityPresident.name}
//                 </h4>
//                 <p className="text-primary font-medium">
//                   {committees.topLeadership.universityPresident.role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* General President */}
//         <div>
//           <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
//             <div className="flex items-center gap-3">
//               <Award className="w-6 h-6 text-cyan" />
//               <div>
//                 <h4 className="font-semibold text-foreground text-lg">
//                   {committees.topLeadership.generalPresident.name}
//                 </h4>
//                 <p className="text-cyan font-medium">
//                   {committees.topLeadership.generalPresident.role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scientific Committee FIRST */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
//               <BookOpen className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <h3 className="text-2xl font-serif font-semibold text-foreground">Scientific Committee</h3>
//           </div>

//           {/* Scientific President */}
//           <div className="mb-6">
//             <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
//               <div className="flex items-center gap-3">
//                 <Award className="w-6 h-6 text-cyan" />
//                 <div>
//                   <h4 className="font-semibold text-foreground text-lg">
//                     {committees.scientific.president.name}
//                   </h4>
//                   <p className="text-cyan font-medium">
//                     {committees.scientific.president.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Scientific Members */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Members</h4>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//               {committees.scientific.members.map((member) => (
//                 <div key={member.name} className="p-3 rounded-lg bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-colors">
//                   <p className="text-foreground text-sm font-medium">{member.name}</p>
//                   <p className="text-muted-foreground text-xs">{member.affiliation}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Organizing Committee SECOND */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
//               <Users className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <h3 className="text-2xl font-serif font-semibold text-foreground">Organizing Committee</h3>
//           </div>

//           {/* Chairs */}
//           <div className="mb-6">
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Chairs</h4>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {committees.organizing.chairs.map((chair) => (
//                 <div key={chair.name} className="p-4 rounded-xl bg-secondary/30 border border-primary/10">
//                   <h4 className="font-semibold text-foreground">{chair.name}</h4>
//                   <p className="text-primary text-sm">{chair.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Members */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-3">Committee Members</h4>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//               {committees.organizing.members.map((member) => (
//                 <div key={member} className="p-3 rounded-lg bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-colors">
//                   <p className="text-foreground text-sm">{member}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </SectionWrapper>
//   );
// };
import { SectionWrapper, SectionTitle } from "@/components/SectionWrapper";
import { Award, Users, BookOpen } from "lucide-react";

const committees = {
  topLeadership: {
    universityPresident: {
      name: "Dr. Hddidi",
      role: "President of the University",
      photo: "/images/hddidi.png",
    },
    generalPresident: {
      name: "Dr. Achour Abdelraouf",
      role: "General President of NCIMGCEB-AI'26",
      photo: "/images/achour.png",
    },
  },

  organizing: {
    chairs: [
      { 
        name: "Dr. Abdelhadi Sofiane", 
        role: "Organizing Committee Chair",
        photo: "/images/abdelhadi.jpg",
      },
      { 
        name: "Dr. Meghzili Seif Allah", 
        role: "Organizing Committee Chair",
        photo: "/images/meghzili.jpg",
      },
    ],
    members: [
      "Dr. Hamiouda Sara", "Dr. Bouzit Fatima", "Dr. Goudjil Hadjer", "Mr. Djaafer Lakhdar",
      "Mme. Mehareb Soulef", "Dr. Berghout Oussama", "Dr. Louadj Amel", "Dr. Houari Hocine",
      "Dr. Mokadem Maamar", "Mr. Ghefari Abdelfattah", "Dr. Aissou Abdallah", "Dr. Bourahla Nassima",
      "Dr. Bouraghda Skander", "Dr. Megdoud Yousra", "Dr. Denine Sidali", "Mme. Bensoudane Sarra",
      "Dr. Ouahab Mohamed Younes", "Mme. Azzaz Ibtissam", "Mr. Boufrina Tawfiq", "Mme. Benammour Abir",
      "Dr. Barour Sabiha", "Dr. Sara Kherroubi","Maroua Nihel Benabdallah","Dr. Khaine Djilali"
    ],
  },

  scientific: {
    president: { 
      name: "Dr. Hamiouda Sara", 
      role: "President of Scientific Committee",
      photo: "/images/hamiouda.jpg",
    },
    members: [
      { name: "Dr. Yousfi Mohamed Lamine", affiliation: "Univ Tipaza" },
      { name: "Pr. Daghbouche Yasmina", affiliation: "Univ Tipaza" },
      { name: "Dr. Abdelhadi Sofiane", affiliation: "Univ Tipaza" },
      { name: "Pr. Abdelmalk Samir", affiliation: "NSN Nano Sidi Abdellah" },
      { name: "Dr. Meghzili Seif Allah", affiliation: "Univ Tipaza" },
      // ...
    ],
  },
};

export const CommitteesSection = () => {
  return (
    <SectionWrapper id="committees" background="muted">
      <SectionTitle 
        title="Committees" 
        subtitle="Meet the distinguished members organizing NCIMGCEB-AI'26"
      />

      <div className="space-y-12">

        {/* University President */}
        <div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20">
            <div className="flex items-center gap-3">

              {committees.topLeadership.universityPresident.photo && (
                <img
                  src={committees.topLeadership.universityPresident.photo}
                  className="w-14 h-14 rounded-full object-cover border"
                  alt={committees.topLeadership.universityPresident.name}
                />
              )}

              <div>
                <h4 className="font-semibold text-lg">
                  {committees.topLeadership.universityPresident.name}
                </h4>
                <p className="text-primary font-medium">
                  {committees.topLeadership.universityPresident.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* General President */}
        <div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
            <div className="flex items-center gap-3">

              {committees.topLeadership.generalPresident.photo && (
                <img
                  src={committees.topLeadership.generalPresident.photo}
                  className="w-14 h-14 rounded-full object-cover border"
                  alt={committees.topLeadership.generalPresident.name}
                />
              )}

              <div>
                <h4 className="font-semibold text-lg">
                  {committees.topLeadership.generalPresident.name}
                </h4>
                <p className="text-cyan font-medium">
                  {committees.topLeadership.generalPresident.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Committee */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Scientific Committee</h3>
          </div>

          {/* Scientific President */}
          <div className="mb-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
              <div className="flex items-center gap-3">

                {committees.scientific.president.photo && (
                  <img
                    src={committees.scientific.president.photo}
                    className="w-14 h-14 rounded-full object-cover border"
                    alt={committees.scientific.president.name}
                  />
                )}

                <div>
                  <h4 className="font-semibold text-lg">
                    {committees.scientific.president.name}
                  </h4>
                  <p className="text-cyan font-medium">
                    {committees.scientific.president.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Members */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Committee Members</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {committees.scientific.members.map((member) => (
                <div key={member.name} className="p-3 rounded-lg bg-secondary/20 border">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs opacity-70">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Organizing Committee</h3>
          </div>

          <h4 className="text-lg font-semibold mb-3">Committee Chairs</h4>

          <div className="grid sm:grid-cols-2 gap-4">
            {committees.organizing.chairs.map((chair) => (
              <div key={chair.name} className="p-4 rounded-xl bg-secondary/30 border">

                {chair.photo && (
                  <img
                    src={chair.photo}
                    className="w-14 h-14 rounded-full object-cover mb-2 border"
                    alt={chair.name}
                  />
                )}

                <h4 className="font-semibold">{chair.name}</h4>
                <p className="text-sm">{chair.role}</p>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold mt-6 mb-3">Committee Members</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {committees.organizing.members.map((member) => (
              <div key={member} className="p-3 rounded-lg bg-secondary/20 border">
                <p className="text-sm">{member}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
