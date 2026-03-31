import type { ServiceItem } from "./services";

export const servicesEn: ServiceItem[] = [
  // ─── 1. Consultation & Diagnosis ────────────────────────────────────────────
  {
    slug: "consulta-y-diagnostico",
    title: "Consultation and diagnosis",
    shortDescription:
      "Comprehensive ophthalmologic evaluation to guide the diagnosis, clarify clinical questions and define a personalized management plan.",

    heroKicker: "First specialized evaluation",
    heroTitle: "Ophthalmologic consultation and diagnosis",
    heroDescription:
      "This consultation is designed for patients who need a clear, thorough ophthalmologic evaluation focused on decision-making. Whether due to recent visual symptoms, persistent discomfort, previous findings or the need for a second opinion, the goal is to understand the case in depth, correlate symptoms with clinical findings and define a precise diagnostic and therapeutic plan. More than a quick review, this is a space for clinical analysis, understandable explanation and professional support.",

    heroImage: "/images/services/consulta-diagnostico1.jpg",
    heroCtaLabel: "Book evaluation",

    consultationReasons: [
      {
        title: "Decreased vision",
        description:
          "When the patient notices they no longer see as clearly as before, even with their usual glasses, or begins to have difficulty reading, working, driving or getting around safely.",
      },
      {
        title: "Persistent eye discomfort",
        description:
          "Burning, irritation, red eye, tearing, foreign body sensation or visual fatigue that do not improve consistently and require a more detailed evaluation.",
      },
      {
        title: "Recent changes in visual quality",
        description:
          "Blurry vision, fluctuating vision, photophobia, glare or visual discomfort that appear or progress over a short period of time.",
      },
      {
        title: "Specialized second opinion",
        description:
          "Patients who already have a prior diagnosis, a surgical recommendation or an established treatment and wish to have a new clinical evaluation to make decisions with greater confidence.",
      },
      {
        title: "Follow-up of an ocular condition",
        description:
          "Monitoring of previous findings or diseases that require periodic observation to track their stability or progression.",
      },
      {
        title: "Preventive or comprehensive evaluation",
        description:
          "A consultation useful for reviewing overall eye and visual health, even when there is no confirmed diagnosis.",
      },
    ],

    procedures: [
      {
        title: "Specialized ophthalmologic consultation",
        description:
          "Structured clinical evaluation that integrates medical history, symptoms, ocular examination and the patient's functional context to guide the case with greater precision.",
      },
      {
        title: "Comprehensive diagnostic approach",
        description:
          "Clinical analysis aimed at establishing the most likely cause of symptoms and determining whether complementary studies or additional follow-up are needed.",
      },
      {
        title: "Initial therapeutic plan",
        description:
          "Guidance on medical treatment, follow-up, need for tests, procedures or referrals based on the findings.",
      },
      {
        title: "Clinical support and follow-up",
        description:
          "Ongoing monitoring when the case requires it, with emphasis on treatment response, symptom changes or adjustments in clinical management.",
      },
    ],

    patientExpectations: [
      {
        title: "Detailed listening to the reason for visit",
        description:
          "The evaluation begins by understanding what is happening, since when, how it has evolved and what impact it has on the patient's daily life.",
      },
      {
        title: "Targeted clinical examination",
        description:
          "The consultation focuses on correlating symptoms with actual ophthalmologic findings, avoiding vague or insufficient explanations.",
      },
      {
        title: "Clear and understandable explanation",
        description:
          "The patient receives a thorough but accessible medical assessment, with clear language about the likely diagnosis, its meaning and the next steps.",
      },
      {
        title: "Personalized action plan",
        description:
          "At the end of the visit, the patient should have greater clarity about their visual situation, the recommended management and the most appropriate follow-up path.",
      },
    ],

    faq: [
      {
        question: "When should I attend a specialized ophthalmologic consultation?",
        answer:
          "When there are persistent visual or ocular symptoms, recent changes in vision, discomfort that does not improve, or a need for a more detailed evaluation than a general check-up.",
      },
      {
        question: "Does the consultation include a diagnosis and management plan?",
        answer:
          "Yes. The evaluation is aimed at identifying the probable cause of the problem, explaining its scope and defining a clear initial course of action.",
      },
      {
        question: "Is it possible to consult for a second opinion?",
        answer:
          "Yes. The consultation is very useful when the patient wants to review a previous diagnosis, a surgical recommendation or an already prescribed treatment.",
      },
      {
        question: "Are additional tests always required?",
        answer:
          "No. It depends on the case. In some patients the clinical examination is sufficient to guide management, while in others it may be useful to supplement with specific studies.",
      },
    ],

    theme: {
      accent: "#9FB2B5",
      heroOverlay: "from-[#2F3A43]/70 via-[#2F3A43]/40 to-[#2F3A43]/20",
      heroAlign: "left",
    },
  },

  // ─── 2. Cornea ───────────────────────────────────────────────────────────────
  {
    slug: "cornea",
    title: "Cornea",
    shortDescription:
      "Specialized evaluation and management of corneal diseases and conditions that affect visual quality and ocular transparency.",

    heroKicker: "Clinical and surgical subspecialty",
    heroTitle: "Cornea specialty",
    heroDescription:
      "The cornea is one of the most important structures for visual quality, as its transparency, curvature and stability directly influence how light enters the eye. Corneal diseases can manifest as blurry vision, visual distortion, photophobia, persistent discomfort or progressive changes in visual quality. This area focuses on the evaluation, diagnosis, follow-up and therapeutic guidance of conditions affecting the cornea, always with a comprehensive view of visual function, ocular comfort and patient safety.",

    heroImage: "/images/services/cornea.jpg",
    heroCtaLabel: "Request evaluation",

    consultationReasons: [
      {
        title: "Blurry or distorted vision",
        description:
          "When visual quality is persistently altered and the patient notices that the image is no longer sharp, becomes distorted or changes over time.",
      },
      {
        title: "Suspected keratoconus",
        description:
          "Patients with irregular astigmatism, progressive increase in prescription or previous findings suggesting corneal ectasia who require a more precise evaluation.",
      },
      {
        title: "History of corneal infection",
        description:
          "Cases that need specialized follow-up due to sequelae, corneal scarring, residual discomfort or decreased vision.",
      },
      {
        title: "Photophobia and persistent discomfort",
        description:
          "Light sensitivity, eye pain, foreign body sensation or sustained discomfort that may be related to corneal or ocular surface involvement.",
      },
      {
        title: "Progressive changes in vision",
        description:
          "Situations in which visual quality deteriorates without an obvious cause and it is necessary to determine whether there is an underlying corneal alteration.",
      },
      {
        title: "Follow-up of known corneal disease",
        description:
          "Patients who already have a diagnosis and need clinical monitoring to track stability, progression or response to treatment.",
      },
    ],

    procedures: [
      {
        title: "Specialized corneal evaluation",
        description:
          "Consultation aimed at identifying corneal alterations, understanding their impact on vision and guiding management according to the nature of the problem.",
      },
      {
        title: "Follow-up of corneal diseases",
        description:
          "Clinical monitoring to assess progression, visual stability, anatomical changes and the need to adjust medical or surgical management.",
      },
      {
        title: "Management of associated ocular surface",
        description:
          "Comprehensive approach to symptoms and conditions that may coexist with corneal involvement, such as irritation, tear instability or anterior ocular inflammation.",
      },
      {
        title: "Guidance on corneal procedures",
        description:
          "Explanation and support in cases that may require specific procedures, helping the patient understand their indication and therapeutic objectives.",
      },
    ],

    videos: [
      {
        title: "Corneal procedures and care",
        description:
          "A supporting video to better understand the clinical and therapeutic approach in cornea.",
        src: "/videos/Hermoso video de @lidemka sobre el proceso natural de una catarata La catarata es un proceso de .mp4",
      },
    ],

    patientExpectations: [
      {
        title: "Detailed clinical assessment",
        description:
          "Symptoms, medical history, case progression and examination findings are analyzed to understand whether the cornea is affected and to what extent.",
      },
      {
        title: "More precise diagnostic definition",
        description:
          "Depending on the case, it is established whether the finding can be explained clinically or whether complementary studies are needed to better characterize the disease.",
      },
      {
        title: "Clear explanation of the problem",
        description:
          "The patient is informed about the nature of the corneal alteration, its possible behavior over time and the impact it may have on vision.",
      },
      {
        title: "Management plan and follow-up",
        description:
          "Many corneal conditions require monitoring, stepwise treatment or progressive therapeutic decisions; that is why follow-up is usually an important part of the process.",
      },
    ],

    faq: [
      {
        question: "What symptoms may suggest a corneal problem?",
        answer:
          "Blurry or variable vision, image distortion, photophobia, tearing, red eye, pain or foreign body sensation are common symptoms in various corneal diseases.",
      },
      {
        question: "Do all corneal problems require surgery?",
        answer:
          "No. Management depends on the diagnosis, severity, progression and impact on vision. Many cases are initially managed with medical treatment and specialized follow-up.",
      },
      {
        question: "Can a corneal evaluation require additional tests?",
        answer:
          "Yes. In some patients, clinical findings make it necessary to supplement with specific studies to more precisely define the diagnosis and course of action.",
      },
      {
        question: "Is follow-up still important even if symptoms improve?",
        answer:
          "Yes. Some corneal diseases can progress or leave visual sequelae, so clinical monitoring helps make timely decisions.",
      },
    ],

    theme: {
      accent: "#AFC0C3",
      heroOverlay: "from-[#445057]/70 via-[#445057]/40 to-[#445057]/20",
      heroAlign: "left",
    },
  },

  // ─── 3. Refractive Surgery ───────────────────────────────────────────────────
  {
    slug: "cirugia-refractiva",
    title: "Refractive surgery",
    shortDescription:
      "Evaluation of options to correct visual defects and reduce dependence on glasses or contact lenses.",

    heroKicker: "Personalized visual correction",
    heroTitle: "Refractive surgery specialty",
    heroDescription:
      "Refractive surgery is aimed at correcting visual defects such as myopia, hyperopia and astigmatism in appropriately selected patients. However, it is not just about wanting to stop wearing glasses: the most important point is determining whether the patient's ocular health, cornea, prescription and expectations allow for a safe and reasonable option to be considered. This evaluation seeks to clearly guide who may benefit, what aspects need to be reviewed before the procedure and what results are realistic for each individual case.",

    heroImage: "/images/services/refractiva.jpg",
    heroCtaLabel: "Evaluate my case",

    consultationReasons: [
      {
        title: "Dependence on glasses or contact lenses",
        description:
          "Patients who want to explore alternatives to reduce their visual dependence in daily, work, sports or social activities.",
      },
      {
        title: "Myopia, hyperopia or astigmatism",
        description:
          "People with refractive errors who want to know if they are candidates for surgical visual correction.",
      },
      {
        title: "Frequent discomfort with contact lenses",
        description:
          "Intolerance, dryness, irritation or limitations related to extended use of soft or rigid lenses.",
      },
      {
        title: "Desire for greater visual independence",
        description:
          "Interest in improving visual quality without permanently depending on external optical aids, always within realistic expectations.",
      },
      {
        title: "Questions about eligibility",
        description:
          "Patients who have heard about LASIK or other options but are unsure whether their age, prescription or ocular condition would make them a candidate.",
      },
      {
        title: "Looking for clear information before deciding",
        description:
          "Need to understand risks, benefits, limitations, recovery and follow-up before considering a refractive procedure.",
      },
    ],

    procedures: [
      {
        title: "Evaluation for refractive surgery",
        description:
          "Consultation aimed at determining whether the patient is a candidate and whether their case can benefit from a safe and well-indicated refractive strategy.",
      },
      {
        title: "Preoperative studies",
        description:
          "Evaluations needed to assess the condition of the cornea, refractive stability and other key factors in the decision-making process.",
      },
      {
        title: "Personalized guidance on options",
        description:
          "Detailed explanation of the proposed procedure, its scope, limitations and reasonable expectations according to the patient's visual profile.",
      },
      {
        title: "Post-procedure follow-up",
        description:
          "Clinical support before and after the procedure to monitor recovery, visual comfort and symptom behavior.",
      },
    ],

    patientExpectations: [
      {
        title: "Eligibility assessment",
        description:
          "The evaluation seeks to establish whether the patient can truly be considered a candidate, not only based on their prescription but also on their overall ocular health.",
      },
      {
        title: "Realistic expectations",
        description:
          "An open conversation about what can be expected from the procedure, its limits and the variables that may influence the visual outcome.",
      },
      {
        title: "Informed and safe process",
        description:
          "The patient receives guidance on prior studies, preparation, care and recovery, which allows for more confident decision-making.",
      },
      {
        title: "Structured follow-up",
        description:
          "Post-procedure monitoring is important to support recovery, address questions and track temporary symptoms such as dryness or sensitivity.",
      },
    ],

    faq: [
      {
        question: "Can everyone who wears glasses have surgery?",
        answer:
          "No. Eligibility depends on ocular health, prescription stability, corneal characteristics and other clinical criteria that must be evaluated individually.",
      },
      {
        question: "Does the consultation determine if I am a candidate?",
        answer:
          "Yes. The evaluation and preoperative studies make it possible to define whether the procedure is appropriate, safe and reasonable for your case.",
      },
      {
        question: "Does refractive surgery completely eliminate the need for glasses?",
        answer:
          "That depends on each patient's visual profile. Realistic expectations and the likely scope of the procedure are explained during the consultation.",
      },
      {
        question: "Can there be visual discomfort or dryness afterward?",
        answer:
          "Yes, some patients may experience temporary dryness or transient visual phenomena during the recovery period, which is why follow-up is important.",
      },
    ],

    videos: [
      {
        title: "LASIK refractive surgery",
        description:
          "A short video about LASIK and the possibility of leaving glasses behind after proper evaluation.",
        embedUrl: "https://www.youtube.com/embed/Cr9uFrEo0pY",
      },
      {
        title: "Say goodbye to glasses",
        description:
          "A simple explanation of refractive surgery for myopia, astigmatism and related visual conditions.",
        embedUrl: "https://www.youtube.com/embed/7V5V3LVL-AA",
      },
    ],

    theme: {
      accent: "#C9B991",
      heroOverlay: "from-[#2F3A43]/75 via-[#2F3A43]/45 to-[#2F3A43]/20",
      heroAlign: "left",
    },
  },

  // ─── 4. Cataract ─────────────────────────────────────────────────────────────
  {
    slug: "catarata",
    title: "Cataract",
    shortDescription:
      "Comprehensive evaluation and specialized guidance for the diagnosis and treatment of cataract.",

    heroKicker: "Visual recovery with a personalized approach",
    heroTitle: "Cataract specialty",
    heroDescription:
      "A cataract occurs when the lens loses transparency and begins to affect visual quality. Patients often notice cloudy vision, increased sensitivity to light, difficulty seeing at night or the feeling that their glasses no longer work as well. This area focuses on assessing the functional impact of the cataract, determining whether it is time to consider treatment and supporting the patient before and after the surgical process when indicated.",

    heroImage: "/images/services/catarata.jpg",
    heroCtaLabel: "Book consultation",

    consultationReasons: [
      {
        title: "Progressive decrease in vision",
        description:
          "When vision becomes less sharp over time and begins to interfere with daily activities such as reading, working or driving.",
      },
      {
        title: "Sensation of cloudy or hazy vision",
        description:
          "One of the most common ways in which cataract manifests, especially in early or progressive stages.",
      },
      {
        title: "Glare and discomfort with light",
        description:
          "Particularly noticeable when driving at night, in very bright environments or with intense reflections.",
      },
      {
        title: "Greater difficulty seeing at night",
        description:
          "Problems moving around, recognizing details or carrying out activities safely in low-light conditions.",
      },
      {
        title: "Frequent changes in prescription",
        description:
          "Situations in which the patient feels they constantly need visual adjustments and still cannot recover the same quality of vision.",
      },
      {
        title: "Previous cataract diagnosis",
        description:
          "Patients who already have a confirmed finding and want guidance on progression, timing of surgery or follow-up.",
      },
    ],

    procedures: [
      {
        title: "Cataract assessment consultation",
        description:
          "Clinical evaluation to determine the visual impact of the cataract and its effect on the patient's functionality and quality of life.",
      },
      {
        title: "Pre-surgical guidance",
        description:
          "Clear explanation of the right time to operate, procedure expectations and aspects to consider before surgery.",
      },
      {
        title: "Post-operative support",
        description:
          "Clinical follow-up to monitor visual recovery, address questions and confirm appropriate progression after the procedure.",
      },
      {
        title: "Functional monitoring and visual adaptation",
        description:
          "Assessment of visual improvement following treatment and the patient's adaptation to their new visual condition.",
      },
    ],

    patientExpectations: [
      {
        title: "Comprehensive visual assessment",
        description:
          "The consultation makes it possible to evaluate how much the cataract is affecting vision and whether that impact already justifies a more active therapeutic approach.",
      },
      {
        title: "Defining the right timing",
        description:
          "Not all cataracts need to be operated on immediately; the decision depends on the actual effect on the patient's daily life and the clinical evaluation.",
      },
      {
        title: "Clear process guidance",
        description:
          "The procedure, expected recovery and the importance of follow-up are explained in an accessible way.",
      },
      {
        title: "Support before and after",
        description:
          "The patient not only receives a recommendation but a clear path to understand the diagnosis, prepare accordingly and follow the process appropriately.",
      },
    ],

    faq: [
      {
        question: "Does a cataract always need to be operated on immediately?",
        answer:
          "Not necessarily. The indication depends on the visual impact, the patient's needs and the individual clinical evaluation.",
      },
      {
        question: "How do I know if the cataract is already affecting my quality of life?",
        answer:
          "When it begins to make daily activities difficult, such as reading, driving, working, recognizing details or getting around comfortably and safely.",
      },
      {
        question: "Does cataract surgery require post-operative follow-up?",
        answer:
          "Yes. Post-operative monitoring is very important to track recovery, address questions and confirm adequate visual progression.",
      },
      {
        question: "Is it normal for vision not to feel completely stable at first?",
        answer:
          "During the first days or weeks there may be normal changes as part of the recovery process, which is why medical follow-up is an essential part of treatment.",
      },
    ],

    theme: {
      accent: "#B8A98A",
      heroOverlay: "from-[#445057]/70 via-[#445057]/35 to-[#445057]/20",
      heroAlign: "left",
    },
  },

  // ─── 5. Dry Eye & Ocular Surface ─────────────────────────────────────────────
  {
    slug: "ojo-seco-y-superficie-ocular",
    title: "Dry eye and ocular surface",
    shortDescription:
      "Clinical approach to discomfort associated with tear instability, inflammation and ocular surface alterations.",

    heroKicker: "Ocular comfort and visual stability",
    heroTitle: "Dry eye and ocular surface",
    heroDescription:
      "Dry eye and ocular surface alterations can significantly affect patient comfort and also the stability of vision. Many people present with burning, itching, gritty sensation, reflex tearing, fluctuating vision or eye fatigue, especially with screens, dry environments or air conditioning. This area focuses on identifying the cause of these symptoms, understanding their intensity and behavior and proposing personalized management, since not all cases have the same origin or require the same treatment.",

    heroImage: "/images/services/ojo-seco.jpg",
    heroCtaLabel: "Book appointment",

    consultationReasons: [
      {
        title: "Burning or itching",
        description:
          "Common symptoms that affect daily wellbeing and may intensify with certain environments or visual habits.",
      },
      {
        title: "Foreign body sensation",
        description:
          "Perception of grittiness, friction or constant discomfort that may be related to tear instability or ocular surface alteration.",
      },
      {
        title: "Fluctuating vision",
        description:
          "Intermittent changes in visual sharpness that tend to worsen with prolonged visual use or exposure to screens.",
      },
      {
        title: "Tired or irritated eyes",
        description:
          "Eye fatigue, need to blink more frequently, discomfort when reading or working and a feeling of heaviness at the end of the day.",
      },
      {
        title: "Recurring redness",
        description:
          "Patients with repetitive eye irritation who want to understand its cause and receive more targeted management.",
      },
      {
        title: "Discomfort with air conditioning or screens",
        description:
          "Symptoms that worsen in dry or low-humidity environments or during long sessions in front of digital devices.",
      },
    ],

    procedures: [
      {
        title: "Ocular surface evaluation",
        description:
          "Consultation focused on identifying alterations related to the tear film, inflammation, ocular comfort and symptom behavior.",
      },
      {
        title: "Comprehensive dry eye management",
        description:
          "Individualized therapeutic approach based on the likely cause, symptom intensity and the patient's clinical response.",
      },
      {
        title: "Treatment response follow-up",
        description:
          "Targeted monitoring to adjust management, optimize ocular comfort and improve visual stability.",
      },
      {
        title: "Guidance on habits and prevention",
        description:
          "Recommendations related to screen use, environment, lubrication and daily care to protect the ocular surface.",
      },
    ],

    patientExpectations: [
      {
        title: "Detailed symptom characterization",
        description:
          "The consultation seeks to understand when the discomfort appears, what makes it worse and how it affects daily life and visual performance.",
      },
      {
        title: "Assessment of ocular surface condition",
        description:
          "The cause of the problem is clinically oriented and it is assessed whether there is inflammation, tear instability or another associated factor.",
      },
      {
        title: "Personalized therapeutic plan",
        description:
          "Not all patients with dry eye require the same management; the approach is adapted to the clinical profile and severity of the condition.",
      },
      {
        title: "Progressive adjustments and follow-up",
        description:
          "In many cases, treatment requires follow-up and adjustments to achieve better symptom stability and progression.",
      },
    ],

    faq: [
      {
        question: "Does dry eye always manifest only as dryness?",
        answer:
          "No. It can also present as burning, itching, redness, reflex tearing, foreign body sensation or fluctuating vision.",
      },
      {
        question: "Can screen use worsen symptoms?",
        answer:
          "Yes. Extended screen time tends to reduce blinking frequency and can worsen ocular comfort and tear stability.",
      },
      {
        question: "Is dry eye treatment the same for everyone?",
        answer:
          "No. Management depends on the cause, symptom intensity, ocular surface involvement and each patient's clinical response.",
      },
      {
        question: "Does improvement usually require follow-up?",
        answer:
          "Yes. Dry eye is a condition that frequently requires monitoring and progressive adjustments to achieve better stability.",
      },
    ],

    theme: {
      accent: "#A8B7B9",
      heroOverlay: "from-[#2F3A43]/72 via-[#2F3A43]/38 to-[#2F3A43]/18",
      heroAlign: "left",
    },
  },

  // ─── 6. Anterior Segment ─────────────────────────────────────────────────────
  {
    slug: "segmento-anterior",
    title: "Anterior segment",
    shortDescription:
      "Specialized evaluation of ocular structures such as the cornea, anterior chamber, iris and lens.",

    heroKicker: "Comprehensive clinical approach",
    heroTitle: "Anterior segment specialty",
    heroDescription:
      "The anterior segment of the eye includes fundamental structures such as the cornea, anterior chamber, iris and lens. Alterations in this area can translate into blurry vision, pain, irritation, photophobia, red eye or visible findings that require specialized evaluation. This area focuses on clinically integrating those symptoms and findings, defining the main problem and establishing a diagnostic and therapeutic approach tailored to each case.",

    heroImage: "/images/services/segmento-anterior2.jpg",
    heroCtaLabel: "Book consultation",

    consultationReasons: [
      {
        title: "Persistent visual discomfort",
        description:
          "Symptoms that cannot be explained solely by prescription or visual fatigue and require reviewing the anterior structures of the eye.",
      },
      {
        title: "Changes in ocular transparency",
        description:
          "Visible or perceived alterations that may be related to the cornea, lens or other anterior structures.",
      },
      {
        title: "Pain, irritation or photophobia",
        description:
          "Manifestations that may suggest involvement of anterior segment tissues and warrant a more targeted clinical analysis.",
      },
      {
        title: "Follow-up of previous conditions",
        description:
          "Patients with previous findings or diagnoses who require periodic observation or re-evaluation of management.",
      },
      {
        title: "Comprehensive review of anterior structures",
        description:
          "Referred or under-study cases that need a more complete evaluation of the cornea, iris, lens or other associated structures.",
      },
      {
        title: "Complex diagnostic questions",
        description:
          "Situations where different clinical findings need to be integrated to better understand the ocular problem.",
      },
    ],

    procedures: [
      {
        title: "Specialized anterior segment consultation",
        description:
          "Comprehensive evaluation of the anterior structures of the eye and their impact on vision, comfort and ocular health.",
      },
      {
        title: "Diagnostic and therapeutic guidance",
        description:
          "Definition of the clinical approach based on examination findings, medical history and the progression of the case.",
      },
      {
        title: "Follow-up of anterior segment conditions",
        description:
          "Ongoing monitoring of conditions requiring observation, medical treatment or progressive definition of management.",
      },
      {
        title: "Individualized monitoring plan",
        description:
          "Follow-up visits, studies or treatments are established according to each patient's clinical behavior.",
      },
    ],

    patientExpectations: [
      {
        title: "Focused clinical examination",
        description:
          "The consultation is oriented toward reviewing the anterior structures of the eye in detail to correlate symptoms with relevant findings.",
      },
      {
        title: "Prioritization of the main problem",
        description:
          "When multiple symptoms or possible diagnoses exist, the evaluation helps identify what is most important in the case.",
      },
      {
        title: "Explanation of the clinical scope",
        description:
          "The patient is informed about which structure may be affected, why this impacts their vision or comfort and what management is recommended.",
      },
      {
        title: "Follow-up and decision adjustment",
        description:
          "Many anterior segment cases require observation over time to adjust treatment or define the next step with greater confidence.",
      },
    ],

    faq: [
      {
        question: "What does the anterior segment of the eye include?",
        answer:
          "It includes structures such as the cornea, anterior chamber, iris, lens and other tissues related to the front of the eye.",
      },
      {
        question: "What symptoms may suggest a problem in the anterior segment?",
        answer:
          "Pain, blurry vision, irritation, red eye, photophobia or visible changes in the front of the eye are common reasons for consultation.",
      },
      {
        question: "Is an anterior segment evaluation useful for different diagnoses?",
        answer:
          "Yes. It is a broad approach that helps guide multiple conditions affecting the anterior structures of the eye.",
      },
      {
        question: "Do all anterior segment problems involve surgery?",
        answer:
          "No. Many conditions are managed with medical treatment, follow-up or progressive therapeutic decisions depending on the case.",
      },
    ],

    theme: {
      accent: "#8F9EA3",
      heroOverlay: "from-[#445057]/70 via-[#445057]/35 to-[#445057]/15",
      heroAlign: "left",
    },
  },

  // ─── 7. Corneal Procedures ───────────────────────────────────────────────────
  {
    slug: "procedimientos-de-cornea",
    title: "Corneal procedures",
    shortDescription:
      "Guidance and follow-up for cornea-related procedures and clinical recovery.",

    heroKicker: "Clinical and surgical support",
    heroTitle: "Corneal procedures",
    heroDescription:
      "Some corneal diseases may require specific procedures to improve corneal transparency, regularity or the patient's visual safety. This section focuses on prior evaluation, clear explanation of the indication, addressing questions and supporting the patient before and after the procedure. The goal is not only to discuss the therapeutic intervention itself, but to help the patient understand why it is being proposed, what is expected to be achieved and how the follow-up process should unfold.",

    heroImage: "/images/services/procedimientos-cornea1.jpg",
    heroCtaLabel: "Discuss my case",

    consultationReasons: [
      {
        title: "Second opinion on a corneal procedure",
        description:
          "Patients who want to better understand the indication, therapeutic objective and expectations of a previous recommendation.",
      },
      {
        title: "Questions about therapeutic alternatives",
        description:
          "Cases where it is important to review whether there are medical options, procedures or other possible paths before making a decision.",
      },
      {
        title: "Follow-up after corneal intervention",
        description:
          "Clinical monitoring after a procedure to track progression, recovery, ocular comfort and visual behavior.",
      },
      {
        title: "Visual changes associated with corneal disease",
        description:
          "When corneal involvement significantly affects vision and it is necessary to determine whether there is an indication for a therapeutic procedure.",
      },
      {
        title: "Need to understand the process",
        description:
          "Patients seeking a clear explanation of preparation, recovery, follow-up visits and expected timelines.",
      },
      {
        title: "Assessment of clinical indication",
        description:
          "Detailed review of the case to establish whether the therapeutic recommendation is appropriate and timely for the patient.",
      },
    ],

    procedures: [
      {
        title: "Pre-procedure evaluation",
        description:
          "Consultation aimed at defining the indication, therapeutic objective and clinical conditions to be taken into account before proceeding.",
      },
      {
        title: "Support in therapeutic decisions",
        description:
          "Clear explanation of alternatives, scope, limitations and clinical criteria supporting the proposed procedure.",
      },
      {
        title: "Process preparation and guidance",
        description:
          "Information to help the patient understand how management is organized, what to expect in the perioperative period and why follow-up is important.",
      },
      {
        title: "Post-procedure follow-up",
        description:
          "Clinical monitoring to verify anatomical and functional progression, address questions and adjust management according to recovery.",
      },
    ],

    patientExpectations: [
      {
        title: "Understanding the clinical case",
        description:
          "The consultation helps clarify why the procedure may be necessary and what problem it seeks to resolve within the overall treatment.",
      },
      {
        title: "Clear process guidance",
        description:
          "The patient receives understandable information about preparation, progression, warning signs and follow-up visits.",
      },
      {
        title: "Realistic expectations",
        description:
          "Therapeutic objectives, recovery timelines and the need for ongoing support are discussed according to the underlying condition.",
      },
      {
        title: "Specialized follow-up",
        description:
          "Post-procedure monitoring is essential to assess visual recovery, corneal tissue response and the stability of the clinical outcome.",
      },
    ],

    faq: [
      {
        question: "Do all corneal problems require a procedure?",
        answer:
          "No. The indication depends on the diagnosis, severity, progression and impact on vision. Some patients can be managed with medical treatment and follow-up.",
      },
      {
        question: "Does the evaluation help determine whether the procedure is truly necessary?",
        answer:
          "Yes. The consultation allows for a review of the case, addressing questions and defining whether the indication is appropriate for the patient and their clinical context.",
      },
      {
        question: "Is post-procedure follow-up important?",
        answer:
          "Yes. Follow-up visits are fundamental to monitor progression, adjust management and properly support recovery.",
      },
      {
        question: "Can I consult even if the procedure was recommended somewhere else?",
        answer:
          "Yes. A specialized evaluation can help you better understand your case and make decisions with greater clarity and confidence.",
      },
    ],

    theme: {
      accent: "#9DB2B8",
      heroOverlay: "from-[#2F3A43]/72 via-[#2F3A43]/40 to-[#2F3A43]/15",
      heroAlign: "left",
    },
  },
];