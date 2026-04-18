import { useParams } from 'react-router-dom'
import './BlogDetail.css'

const IMG = {
  // ── Cardiology ──────────────────────────────────────────────────────────────
  heartDoctor:     'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&auto=format&fit=crop',
  chestPain:       'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop',
  breathless:      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop',
  dizzy:           'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&auto=format&fit=crop',
  ecg:             'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&auto=format&fit=crop',
  swelling:        'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format&fit=crop',
  consultation:    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',

  // ── Lung Health ─────────────────────────────────────────────────────────────
  lungs:           'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop',
  coughing:        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&auto=format&fit=crop',
  smoking:         'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&auto=format&fit=crop',
  exercise:        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',

  // ── Virtual Consultations ───────────────────────────────────────────────────
  videoCall:       'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop',
  ruralHealth:     'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&auto=format&fit=crop',
  savings:         'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
  mentalHealth:    'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&auto=format&fit=crop',

  // ── Gut Health ──────────────────────────────────────────────────────────────
  healthyFood:     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
  gutPain:         'https://media.istockphoto.com/id/1085220674/photo/abdominal-pain-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=obKEwk8Vd0iJG_jiImPY57WBSo1ADMoOJBfmQjAEZOw=',
  fermented:       'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop',
  fiber:           'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',

  // ── Cancer ──────────────────────────────────────────────────────────────────
  cancerAwareness: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
  earlyWarning:    'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop',
  noSmoking:       'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop',
  cancerDiet:      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop',
  screening:       'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format&fit=crop',
}

function SplitSection({ img, alt, title, children, reverse = false }) {
  return (
    <div className={`split-section${reverse ? ' reverse' : ''}`}>
      <div className="split-img-wrap">
        <img src={img} alt={alt} />
      </div>
      <div className="split-text">
        {title && <h2>{title}</h2>}
        <div className="split-body">{children}</div>
      </div>
    </div>
  )
}

const blogs = [

  // ── 1. CARDIOLOGY ──────────────────────────────────────────────────────────
  {
    slug: "cardiologist-signs",
    title: "5 Signs You Should See a Cardiologist",
    
    
    emoji: "❤️",
    description: (
      <>
        <SplitSection img={IMG.heartDoctor} alt="Doctor examining heart patient" title="Why Heart Health Matters">
          <p>Heart disease is the leading cause of death worldwide, claiming over 17 million lives every year. Despite its prevalence, many people dismiss the early warning signs, attributing symptoms to stress, aging, or minor ailments. This dangerous delay can turn a manageable condition into a life-altering or fatal event.</p>
          <p>A cardiologist specializes in diagnosing and treating conditions of the heart and blood vessels. Seeing one early — rather than waiting for a crisis — gives you access to diagnostic tools like ECGs, echocardiograms, and stress tests that can identify risk years before a heart attack occurs.</p>
        </SplitSection>

        <SplitSection img={IMG.chestPain} alt="Man holding chest in pain" reverse title="1. Persistent Chest Pain or Discomfort">
          <p>Chest pain is the most recognized warning sign of a heart problem. It can feel like pressure, squeezing, tightness, burning, or fullness in the center or left side of the chest. The pain may radiate to your left arm, neck, jaw, shoulder, or back — and can last from a few minutes to several hours.</p>
          <p>Not all cardiac chest pain is dramatic. Some people describe it as mild discomfort or indigestion. Women, in particular, often experience atypical symptoms like nausea, jaw pain, or unusual fatigue rather than classic crushing chest pain. Any chest discomfort that is new, recurring, or unexplained deserves immediate medical evaluation.</p>
        </SplitSection>

        <SplitSection img={IMG.breathless} alt="Person feeling breathless" title="2. Unexplained Shortness of Breath">
          <p>If climbing a single flight of stairs, walking to the car, or doing light household chores leaves you breathless in a way it never used to, your heart may not be pumping efficiently enough to meet your body's oxygen demands. This symptom is one of the earliest and most reliable signs of heart failure or coronary artery disease.</p>
          <p>When the heart weakens, fluid can back up into the lungs — a condition called pulmonary edema — making every breath feel labored and shallow. Breathlessness that occurs at rest, while lying flat, or that wakes you from sleep is especially concerning and warrants urgent assessment by a cardiologist.</p>
        </SplitSection>

        <SplitSection img={IMG.dizzy} alt="Person feeling dizzy" reverse title="3. Dizziness, Lightheadedness, or Fainting">
          <p>Sudden dizziness, lightheadedness, or fainting (syncope) can indicate a significant drop in blood pressure or a dangerous irregular heart rhythm. When the brain does not receive sufficient oxygen-rich blood even for a few seconds, the result can be loss of consciousness — and a serious fall or injury.</p>
          <p>These episodes may be brief and easy to dismiss, but they can signal underlying heart conditions like valvular disease, bradycardia (too-slow heart rate), or ventricular tachycardia. Always inform a cardiologist if you have fainted without explanation, especially if accompanied by palpitations or chest discomfort.</p>
        </SplitSection>

        <SplitSection img={IMG.ecg} alt="ECG heart monitoring" title="4. Irregular Heartbeats or Palpitations">
          <p>Palpitations — the sensation that your heart is racing, fluttering, pounding, or skipping beats — can be felt in the chest, throat, or neck. While occasional palpitations triggered by caffeine, stress, or exercise are usually harmless, frequent, prolonged, or spontaneous episodes deserve investigation.</p>
          <p>One of the most common and serious causes is atrial fibrillation (AFib), an irregular quivering of the upper heart chambers that dramatically increases the risk of stroke, blood clots, and heart failure. A Holter monitor worn over 24–48 hours can capture arrhythmias missed during a standard office visit.</p>
        </SplitSection>

        <SplitSection img={IMG.swelling} alt="Doctor checking patient" reverse title="5. Significant Leg or Ankle Swelling">
          <p>Edema — swelling of the legs, ankles, or feet caused by fluid accumulation — is one of the hallmark signs of heart failure. When the heart cannot pump blood effectively, pressure builds up in the veins, forcing fluid into surrounding tissues. You might notice shoes that feel tight at the end of the day, or skin that leaves a dent when pressed.</p>
          <p>Leg swelling combined with fatigue, breathlessness, or sudden weight gain from retained fluid is a particularly serious combination. A cardiologist can use imaging and blood tests to determine if the heart is the underlying cause and begin treatment before further damage occurs.</p>
        </SplitSection>

        <SplitSection img={IMG.consultation} alt="Cardiologist consultation" title="When to Act — and What to Expect">
          <p>If you experience any of the above symptoms, do not wait. Cardiac conditions are time-sensitive — the earlier they are identified, the more treatment options are available and the better the outcomes. A cardiologist will conduct a thorough physical examination, review your medical history and family risk factors, and order appropriate diagnostic tests.</p>
          <p>Depending on findings, your treatment plan might include lifestyle modifications, medications to manage blood pressure or cholesterol, a cardiac procedure, or simply reassurance with regular monitoring. Prevention and early detection are always more effective than emergency intervention. Your heart works every second of every day — make sure it gets the care it deserves.</p>
        </SplitSection>
      </>
    )
  },

  // ── 2. LUNG HEALTH ─────────────────────────────────────────────────────────
  {
    slug: "lung-health",
    title: "Understanding Your Lung Health: A Complete Guide",
    
    
    emoji: "🫁",
    description: (
      <>
        <SplitSection img={IMG.lungs} alt="Healthy lungs breathing" title="Why Lung Health is Critical">
          <p>Your lungs perform one of the most vital functions in the body — exchanging oxygen and carbon dioxide with every breath, around 20,000 times per day. Yet most people take their respiratory health entirely for granted, until something goes wrong. Lung disease can develop slowly and silently, causing significant damage long before symptoms become obvious.</p>
          <p>Globally, chronic respiratory diseases affect over 500 million people. Recognizing early warning signs, understanding your risk factors, and making lifestyle changes can dramatically protect your lung function for decades to come.</p>
        </SplitSection>

        <SplitSection img={IMG.coughing} alt="Person with respiratory issues" reverse title="Warning Signs You Should Never Ignore">
          <p>Lung diseases often develop silently, causing significant damage before symptoms become severe. Watch for these red flags:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Chronic Cough:</strong> A cough persisting beyond 3 weeks — especially with mucus or blood — is never normal.</li>
            <li><strong>Shortness of Breath:</strong> Breathlessness during routine activity that wasn't difficult before is a key early warning sign.</li>
            <li><strong>Wheezing:</strong> A whistling or rattling sound while breathing suggests narrowed or inflamed airways.</li>
            <li><strong>Persistent Fatigue:</strong> When lungs underperform, the body receives less oxygen, causing constant tiredness.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.smoking} alt="No smoking for lung health" title="Common Lung Conditions and Their Causes">
          <p>Understanding the most prevalent lung diseases helps you recognize risk and seek timely care:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>COPD:</strong> A progressive condition encompassing emphysema and chronic bronchitis, primarily caused by long-term smoking. It causes permanent airflow limitation that worsens over time.</li>
            <li><strong>Asthma:</strong> Chronic inflammation of the airways causing recurrent episodes of wheezing, breathlessness, and chest tightness. Often triggered by allergens, cold air, or exercise.</li>
            <li><strong>Pneumonia:</strong> An infection that inflames the air sacs, which may fill with fluid or pus. Can be bacterial, viral, or fungal in origin.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.exercise} alt="Person exercising for lung health" reverse title="7 Proven Steps to Protect Your Lungs">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Don't Smoke:</strong> Smoking is responsible for 85% of lung cancer cases. Every cigarette damages alveoli that can never fully repair. Quitting at any age brings measurable benefits within weeks.</li>
            <li><strong>Monitor Indoor Air Quality:</strong> Use HEPA air purifiers, ventilate your home regularly, and avoid mold, dust mites, and chemical fumes from cleaning products or paint.</li>
            <li><strong>Exercise Aerobically:</strong> Brisk walking, swimming, and cycling strengthen the diaphragm and intercostal muscles, improving lung efficiency and oxygen uptake over time.</li>
            <li><strong>Practice Diaphragmatic Breathing:</strong> Deep belly breathing expands the lower lobes of the lungs and improves oxygen exchange — especially beneficial for those with COPD or asthma.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 3. VIRTUAL CONSULTATIONS ───────────────────────────────────────────────
  {
    slug: "virtual-consultations",
    title: "How Virtual Consultations Are Changing Healthcare",
    
    
    emoji: "💻",
    description: (
      <>
        <SplitSection img={IMG.videoCall} alt="Doctor on video call" title="What Are Virtual Consultations?">
          <p>Virtual consultations allow patients to connect with doctors, specialists, therapists, and other healthcare professionals through video calls, phone calls, or secure chat platforms — all from the comfort of their own home. Since the global adoption surge during the COVID-19 pandemic, telehealth has transformed from a convenience into a cornerstone of modern healthcare delivery.</p>
          <p>From routine check-ups and prescription renewals to dermatology appointments, psychiatric therapy, and post-operative follow-ups — almost any non-emergency medical need can now be addressed virtually. And the technology continues to advance rapidly, bringing even more capabilities into the home setting.</p>
        </SplitSection>

        <SplitSection img={IMG.ruralHealth} alt="Patient accessing remote healthcare" reverse title="Breaking Down Barriers to Access">
          <p>One of the most profound impacts of virtual consultations has been on healthcare equity. Millions of people in rural areas, developing nations, or underserved urban communities previously had to travel hours to see a specialist — or simply went without care altogether. Telehealth eliminates geography as a barrier, connecting anyone with an internet connection to world-class medical expertise.</p>
          <p>For elderly patients, those with mobility limitations, parents with young children, or anyone with a demanding work schedule, the ability to see a doctor without leaving home removes the most common reasons people delay or skip medical care. Studies show telehealth patients have higher follow-up rates and better medication adherence than traditional care patients.</p>
        </SplitSection>

        <SplitSection img={IMG.savings} alt="Healthcare cost savings" title="Saving Time and Reducing Healthcare Costs">
          <p>The economics of virtual care benefit everyone. Patients save on transportation costs, parking, time off work, and childcare. Clinics reduce overhead costs associated with physical infrastructure, allowing them to see more patients per day. Insurance providers have increasingly recognized these efficiencies, with many now covering telehealth visits at the same rate as in-person appointments.</p>
          <p>A typical in-person appointment involves 20–30 minutes of travel each way, 15–30 minutes in a waiting room, and then the consultation itself. A virtual visit can begin exactly on time, from anywhere, lasting only as long as it needs to. For follow-up appointments or routine prescription management, the time savings over a year can amount to dozens of hours.</p>
        </SplitSection>

        <SplitSection img={IMG.mentalHealth} alt="Mental health virtual therapy" reverse title="Transforming Mental Health Support">
          <p>Mental health care is perhaps the single greatest beneficiary of the telehealth revolution. Prior to widespread virtual care, many patients avoided therapy due to stigma, inconvenience, cost, or lack of local providers. A patient in a small town might have had zero psychiatrists within 100 kilometers. Today, that same patient can access a licensed therapist or psychiatrist within days — sometimes hours.</p>
          <p>Research shows that virtual cognitive behavioral therapy (CBT), online support groups, and digital mental health tools are as effective as in-person equivalents for conditions including depression, anxiety, PTSD, and OCD. The privacy of receiving care at home also reduces the hesitation many patients feel about being seen entering a mental health clinic.</p>
        </SplitSection>
      </>
    )
  },

  // ── 4. GUT HEALTH ──────────────────────────────────────────────────────────
  {
    slug: "nutrition-gut-health",
    title: "Nutrition Tips for Better Gut Health",
   
    
    emoji: "🌿",
    description: (
      <>
        <SplitSection img={IMG.healthyFood} alt="Colorful healthy food" title="Why Your Gut Health Matters More Than You Think">
          <p>The gut is far more than a digestive system — it is increasingly recognized as the body's "second brain." Your gastrointestinal tract houses the enteric nervous system, which contains approximately 100 million nerve cells and communicates directly with the brain via the vagus nerve. This gut-brain connection influences everything from mood and sleep quality to immune response and cognitive function.</p>
          <p>The gut microbiome — the community of trillions of bacteria, fungi, and other microorganisms living in your intestines — plays a central role in digesting food, synthesizing vitamins (including B12 and K2), training the immune system, and producing neurotransmitters like serotonin, of which 90% is made in the gut.</p>
        </SplitSection>

        <SplitSection img={IMG.gutPain} alt="Person with digestive discomfort" reverse title="Signs Your Gut Health Needs Attention">
          <p>The gut communicates distress in many ways. Recognizing these signs early allows you to make corrections before chronic conditions develop:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Persistent Bloating and Gas:</strong> Chronic distension after meals often signals dysbiosis (microbial imbalance) or food intolerances.</li>
            <li><strong>Irregular Bowel Movements:</strong> Both chronic constipation and diarrhea indicate gut dysfunction. Healthy frequency is generally 1–3 times per day.</li>
            <li><strong>Unexplained Fatigue and Brain Fog:</strong> Poor nutrient absorption and disrupted sleep from gut issues deplete energy and cognitive performance.</li>
            <li><strong>Skin Problems:</strong> Conditions like acne, eczema, and rosacea are increasingly linked to gut inflammation — the gut-skin axis is well-established in research.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.fermented} alt="Fermented foods for gut health" title="The Power of Fermented Foods and Probiotics">
          <p>Fermented foods contain live beneficial bacteria (probiotics) that directly replenish and diversify your gut microbiome. Regular consumption is linked to reduced gut inflammation, improved digestion, better immune function, and even improved mood and mental health outcomes.</p>
          <p>Excellent sources include plain yogurt with live active cultures, kefir, traditional Indian fermented foods like idli, dosa, and kanji, Korean kimchi, German sauerkraut, Japanese miso and natto, Indonesian tempeh, and kombucha tea. Aim to include at least one fermented food with each meal for consistent microbiome support.</p>
        </SplitSection>

        <SplitSection img={IMG.fiber} alt="High fiber fruits and vegetables" reverse title="Fiber, Prebiotics, and Hydration — The Foundation">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Eat More Dietary Fiber:</strong> Fiber is the primary fuel for beneficial gut bacteria. Soluble fiber (oats, legumes, apples, psyllium) feeds microbes, while insoluble fiber (whole grains, vegetables) adds bulk. Aim for at least 25–30g daily — most people get less than half that.</li>
            <li><strong>Prioritize Prebiotic Foods:</strong> Prebiotics selectively nourish beneficial bacteria. Top sources include garlic, onions, leeks, asparagus, Jerusalem artichokes, bananas, and chicory root.</li>
            <li><strong>Stay Consistently Hydrated:</strong> Water keeps the mucosal lining of the gut thin and pliable, supports peristalsis, and enables optimal nutrient absorption. Aim for 2.5–3 liters daily.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 5. CANCER AWARENESS ────────────────────────────────────────────────────
  {
    slug: "cancer-awareness",
    title: "Cancer Awareness & Prevention: What Everyone Should Know",
    
    
    emoji: "🎗️",
    description: (
      <>
        <SplitSection img={IMG.cancerAwareness} alt="Cancer awareness and support" title="Understanding Cancer: What It Is and How It Develops">
          <p>Cancer is not a single disease but a collection of more than 100 distinct diseases, each defined by the uncontrolled growth and spread of abnormal cells. Under normal conditions, the body's cells grow, divide, and die in an orderly fashion. Cancer disrupts this process — cells accumulate mutations in their DNA that cause them to grow without stopping, ignore signals to die, and eventually invade surrounding tissues.</p>
          <p>Through a process called metastasis, cancer cells can travel via the bloodstream or lymphatic system to form new tumors in distant organs. The earlier cancer is detected — before it has spread — the more treatment options are available and the higher the survival rates. For most cancer types, early-stage survival rates are dramatically higher than late-stage rates.</p>
        </SplitSection>

        <SplitSection img={IMG.earlyWarning} alt="Doctor examining patient" reverse title="Early Warning Signs That Should Never Be Ignored">
          <p>Many cancers are highly treatable when caught early, yet symptoms are frequently dismissed. Trust your body and seek medical evaluation promptly if you notice any of the following:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Unexplained Weight Loss:</strong> Losing more than 5kg without changes to diet or exercise is a significant red flag, as many cancers alter metabolism.</li>
            <li><strong>Persistent Fatigue:</strong> Tiredness that does not improve with rest and has no obvious cause can signal blood cancers like leukemia or advanced solid tumors.</li>
            <li><strong>Unusual Lumps:</strong> Any new lump, thickening, or swelling — in the breast, testicle, lymph node, or anywhere else — requires evaluation even if it is painless.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.noSmoking} alt="Quit smoking cancer prevention" title="Lifestyle Changes That Dramatically Cut Your Risk">
          <p>Up to 40% of all cancers are preventable through lifestyle modifications. The most powerful risk-reduction steps:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Quit Tobacco Completely:</strong> Smoking causes nearly 22% of all cancer deaths globally. The body begins repairing itself within hours of quitting, and cancer risk declines progressively over years.</li>
            <li><strong>Limit Alcohol:</strong> Even moderate drinking increases risk of breast, liver, colorectal, esophageal, and oral cancers. The safest amount from a cancer perspective is none.</li>
            <li><strong>Maintain a Healthy Weight:</strong> Obesity is linked to at least 13 types of cancer. Excess body fat drives chronic low-grade inflammation and raises levels of hormones that promote tumor growth.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.cancerDiet} alt="Anti-cancer diet" reverse title="The Anti-Cancer Diet: What the Evidence Shows">
          <p>While no single food prevents cancer, a consistent pattern of eating can significantly modify risk. A diet rich in colorful fruits and vegetables provides powerful antioxidants, polyphenols, and phytochemicals that protect cells from the DNA damage that initiates cancer development.</p>
          <p>Foods with strong evidence for cancer risk reduction include cruciferous vegetables (broccoli, cauliflower, Brussels sprouts) which contain sulforaphane, berries rich in anthocyanins, turmeric containing curcumin, green tea with EGCG, and legumes providing fiber that protects against colorectal cancer. Regular aerobic exercise — at least 150 minutes per week — reduces cancer risk independently of diet by regulating inflammatory pathways and hormone levels.</p>
        </SplitSection>

        <SplitSection img={IMG.screening} alt="Cancer screening" title="Vaccines, Screenings, and Early Detection">
          <p>Two proven vaccines directly prevent specific cancers — the HPV vaccine (prevents cervical, throat, anal, and penile cancers) and the Hepatitis B vaccine (prevents liver cancer). Screening guidelines to discuss with your doctor based on age and risk factors:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Breast Cancer:</strong> Mammogram every 1–2 years from age 40–45 onward.</li>
            <li><strong>Colorectal Cancer:</strong> Colonoscopy from age 45, or earlier with family history.</li>
            <li><strong>Cervical Cancer:</strong> Pap smear every 3 years from age 21, with HPV co-test from age 30.</li>
            <li><strong>Lung Cancer:</strong> Annual low-dose CT scan for current or former heavy smokers aged 50–80.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
]

export { blogs }

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) return <p style={{ padding: '2rem' }}>Blog not found.</p>

  return (
    <main className="blog-main">
      <p className="blog-tag">{blog.tag}</p>
      <h1 className="blog-title">{blog.emoji} {blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <hr className="blog-divider" />
      <div>{blog.description}</div>
    </main>
  )
}