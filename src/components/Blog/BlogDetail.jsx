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
  title: "5 Warning Signs You Should See a Cardiologist",
  emoji: "❤️",

  category: "Cardiology",
  author: "Cuure Health Medical Team",
  published: "July 5, 2026",
  updated: "July 5, 2026",
  readTime: "6 min read",
    description: (
      <>
        <SplitSection img={IMG.heartDoctor} alt="Doctor examining heart patient" title="Why Heart Health Matters">
          <p>Knowing the warning signs you should see a cardiologist for can help detect heart disease early and prevent serious complications. Many heart conditions develop gradually, and recognizing symptoms early can significantly improve treatment outcomes.</p>
          <p>A cardiologist is a doctor who specializes in diagnosing and treating diseases affecting the heart and blood vessels. Consulting a heart specialist at the first sign of trouble allows early diagnosis through tests such as an ECG, echocardiogram, stress test, or heart monitoring. Identifying problems early can help reduce the risk of heart attack, stroke, and heart failure while improving long-term heart health.</p>
        </SplitSection>

        <SplitSection img={IMG.chestPain} alt="alt=Man experiencing chest pain, an early warning sign to see a cardiologist" reverse title="1. Chest Pain: A Warning Sign You Should See a Cardiologist">
          <p>Chest pain that occurs during physical activity, emotional stress, or while resting should never be ignored. Although chest pain can have non-cardiac causes, persistent or unexplained discomfort requires immediate medical evaluation to rule out serious heart conditions.</p>
          <p>Not all cardiac chest pain is dramatic. Some people describe it as mild discomfort or indigestion. Women, in particular, often experience atypical symptoms like nausea, jaw pain, or unusual fatigue rather than classic crushing chest pain. Any chest discomfort that is new, recurring, or unexplained deserves immediate medical evaluation.</p>
        </SplitSection>

        <SplitSection img={IMG.breathless} alt="Person experiencing unexplained shortness of breath due to a possible heart condition" title="2. Shortness of Breath May Indicate Heart Disease">
          <p>Feeling breathless after climbing stairs, walking short distances, or performing routine daily activities may be more than just poor fitness. When your heart cannot pump blood efficiently, your body receives less oxygen, making even simple tasks feel exhausting.</p>
          <p>Shortness of breath is a common symptom of conditions such as heart failure, coronary artery disease, or valve disorders. In some cases, fluid may build up in the lungs, causing difficulty breathing, especially while lying flat or during sleep. If you notice persistent or worsening breathlessness, scheduling a consultation with a cardiologist is important to identify the underlying cause before it becomes a medical emergency.</p>
        </SplitSection>

        <SplitSection img={IMG.dizzy} alt="Person experiencing dizziness caused by a possible cardiovascular condition" reverse title="3. Dizziness or Fainting Could Signal a Heart Problem">
          <p>Frequent dizziness, unexplained lightheadedness, or fainting can indicate that your brain is not receiving enough oxygen-rich blood. These symptoms may result from abnormal heart rhythms, low blood pressure, or other cardiovascular conditions that require prompt evaluation.</p>
          <p>Although occasional dizziness can have many causes, repeated episodes—particularly when accompanied by chest pain, palpitations, or shortness of breath—should never be ignored. A cardiologist can perform specialized heart tests to determine whether an underlying heart condition is responsible and recommend appropriate treatment.</p>
        </SplitSection>

        <SplitSection img={IMG.ecg} alt="ECG heart monitoring" title="4. Frequent Heart Palpitations or Irregular Heartbeats">
          <p>If your heart suddenly feels like it is racing, fluttering, pounding, or skipping beats, you may be experiencing heart palpitations. While temporary palpitations caused by stress, caffeine, exercise, or anxiety are usually harmless, frequent or prolonged episodes deserve medical attention.</p>
          <p>Heart rhythm disorders, including atrial fibrillation (AFib), can increase the risk of stroke, heart failure, and other serious complications. Your cardiologist may recommend tests such as an ECG or a Holter monitor to record your heart rhythm over time and identify irregularities that may not appear during a routine examination.</p>
        </SplitSection>

        <SplitSection img={IMG.swelling} alt="Cardiologist examining swollen legs for signs of heart failure" reverse title="5. Swollen Legs or Ankles Can Be a Sign of Heart Failure">
          <p>Persistent swelling in the legs, ankles, or feet can be an early warning sign of heart failure or poor blood circulation. When the heart struggles to pump blood effectively, fluid can accumulate in the lower limbs, causing noticeable swelling, discomfort, and tight-fitting shoes.</p>
          <p>If swelling occurs alongside fatigue, shortness of breath, rapid weight gain, or reduced physical activity, it may indicate that your heart needs immediate evaluation. A cardiologist can perform imaging studies and blood tests to determine whether your heart is functioning properly and recommend the most effective treatment.</p>
        </SplitSection>

        <SplitSection img={IMG.consultation} alt="Cardiologist consultation" title="When Should You Visit a Cardiologist?">
          <p>If you experience any of these warning signs, don't delay seeking medical advice. Early diagnosis plays a vital role in preventing serious heart complications and improving recovery outcomes.During your consultation, a cardiologist will review your medical history, family history, lifestyle habits, and symptoms before recommending appropriate diagnostic tests.</p>
          <p>Depending on the results, your treatment plan may include lifestyle modifications, medications, regular heart monitoring, or advanced cardiac procedures.Your heart works around the clock to keep your body healthy. Paying attention to early symptoms and seeking expert care at the right time can help protect your heart and improve your overall quality of life.</p>
        </SplitSection>
      </>
    )
  },

  // ── 2. LUNG HEALTH ─────────────────────────────────────────────────────────
  {
    slug: "lung-health",
    title: "How to Improve Lung Health: Symptoms, Causes & Prevention",
    emoji: "🫁",
    category: "Respiratory Health",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "7 min read",
    description: (
      <>
        <SplitSection img={IMG.lungs} alt="Healthy human lungs supporting normal breathing and respiratory health" title="Why Lung Health is Critical">
          <p>Maintaining good lung health is essential for breathing, staying active, and supporting your overall well-being. Your lungs work around the clock, exchanging oxygen and carbon dioxide nearly 20,000 times each day. Although many lung diseases develop gradually, recognizing early symptoms and taking preventive steps can help protect your respiratory health for years to come.</p>
          <p>Globally, chronic respiratory diseases affect over 500 million people. Recognizing early warning signs, understanding your risk factors, and making lifestyle changes can dramatically protect your lung function for decades to come.</p>
        </SplitSection>

        <SplitSection img={IMG.coughing} alt="Person experiencing persistent cough and breathing difficulties due to possible lung disease" reverse title="Warning Signs of Poor Lung Health">
          <p>Lung diseases often develop silently, causing significant damage before symptoms become severe. Watch for these red flags:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Chronic Cough:</strong> A cough persisting beyond 3 weeks — especially with mucus or blood — is never normal.</li>
            <li><strong>Shortness of Breath:</strong> Breathlessness during routine activity that wasn't difficult before is a key early warning sign.</li>
            <li><strong>Wheezing:</strong> A whistling or rattling sound while breathing suggests narrowed or inflamed airways.</li>
            <li><strong>Persistent Fatigue:</strong> When lungs underperform, the body receives less oxygen, causing constant tiredness.</li>
            <li><strong>Chest Pain:</strong> Persistent chest pain, especially when breathing deeply or coughing, may indicate an underlying lung condition that requires medical evaluation.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.smoking} alt="Quit smoking to improve lung health and reduce the risk of chronic lung disease" title="Common Lung Conditions and Their Causes">
          <p>Understanding the most prevalent lung diseases helps you recognize risk and seek timely care:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>COPD:</strong> A progressive condition encompassing emphysema and chronic bronchitis, primarily caused by long-term smoking. It causes permanent airflow limitation that worsens over time.</li>
            <li><strong>Asthma:</strong> Chronic inflammation of the airways causing recurrent episodes of wheezing, breathlessness, and chest tightness. Often triggered by allergens, cold air, or exercise.</li>
            <li><strong>Pneumonia:</strong> An infection that inflames the air sacs, which may fill with fluid or pus. Can be bacterial, viral, or fungal in origin.</li>
            <li><strong>Lung Cancer:</strong> Persistent cough, coughing up blood, unexplained weight loss, and chest pain may be warning signs. Early diagnosis significantly improves treatment outcomes.</li>
            <li><strong>Tuberculosis (TB):</strong> A bacterial infection affecting the lungs that can cause a prolonged cough, fever, night sweats, and weight loss. Early diagnosis and treatment are essential to prevent complications and transmission.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.exercise} alt="Regular exercise helps improve lung capacity and respiratory health" reverse title="7 Proven Steps to Protect Your Lungs">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Don't Smoke:</strong> Smoking is responsible for 85% of lung cancer cases. Every cigarette damages alveoli that can never fully repair. Quitting at any age brings measurable benefits within weeks.</li>
            <li><strong>Monitor Indoor Air Quality:</strong> Use HEPA air purifiers, ventilate your home regularly, and avoid mold, dust mites, and chemical fumes from cleaning products or paint.</li>
            <li><strong>Exercise Aerobically:</strong> Brisk walking, swimming, and cycling strengthen the diaphragm and intercostal muscles, improving lung efficiency and oxygen uptake over time.</li>
            <li><strong>Practice Diaphragmatic Breathing:</strong> Deep belly breathing expands the lower lobes of the lungs and improves oxygen exchange — especially beneficial for those with COPD or asthma.</li>
            <li><strong>Stay Physically Active:</strong> Regular physical activity improves lung capacity, strengthens breathing muscles, and enhances oxygen delivery throughout the body.</li>
            <li><strong>Get Recommended Vaccinations:</strong> Vaccines such as influenza and pneumococcal vaccines can help reduce the risk of serious respiratory infections, especially for older adults and people with chronic health conditions.</li>
            <li><strong>Avoid Air Pollution:</strong> Limit exposure to smoke, industrial pollution, and poor air quality whenever possible. Wearing a mask in polluted environments may help reduce harmful particle exposure.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 3. VIRTUAL CONSULTATIONS ───────────────────────────────────────────────
  {
    slug: "virtual-consultations",
    title: "Virtual Doctor Consultations: Benefits, Process & When to Use Them",
    emoji: "💻",
    category: "Telemedicine",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "5 min read",
    description: (
      <>
        <SplitSection img={IMG.videoCall} alt="Doctor providing an online video consultation to a patient">
          <p>Virtual doctor consultations have transformed the way people access healthcare. Whether you need medical advice, a follow-up appointment, a prescription refill, or specialist guidance, online consultations provide convenient, secure, and timely access to qualified healthcare professionals without visiting a clinic.</p>
          <p>From routine check-ups and prescription renewals to dermatology appointments, psychiatric therapy, and post-operative follow-ups — almost any non-emergency medical need can now be addressed virtually. And the technology continues to advance rapidly, bringing even more capabilities into the home setting.</p>
        </SplitSection>

        <SplitSection img={IMG.ruralHealth} alt="Patient using telemedicine for an online doctor consultation" reverse title="Who Can Benefit from Virtual Consultations?">
          <p>One of the most profound impacts of virtual consultations has been on healthcare equity. Millions of people in rural areas, developing nations, or underserved urban communities previously had to travel hours to see a specialist — or simply went without care altogether. Telehealth eliminates geography as a barrier, connecting anyone with an internet connection to world-class medical expertise.</p>
          <p>For elderly patients, those with mobility limitations, parents with young children, or anyone with a demanding work schedule, the ability to see a doctor without leaving home removes the most common reasons people delay or skip medical care. Studies show telehealth patients have higher follow-up rates and better medication adherence than traditional care patients.</p>
        </SplitSection>

        <SplitSection img={IMG.savings} alt="Online doctor consultation helping patients save time and healthcare costs" title="Benefits of Online Doctor Consultations">
          <p>The economics of virtual care benefit everyone. Patients save on transportation costs, parking, time off work, and childcare. Clinics reduce overhead costs associated with physical infrastructure, allowing them to see more patients per day. Insurance providers have increasingly recognized these efficiencies, with many now covering telehealth visits at the same rate as in-person appointments.</p>
          <p>A typical in-person appointment involves 20–30 minutes of travel each way, 15–30 minutes in a waiting room, and then the consultation itself. A virtual visit can begin exactly on time, from anywhere, lasting only as long as it needs to. For follow-up appointments or routine prescription management, the time savings over a year can amount to dozens of hours.</p>
        </SplitSection>

        <SplitSection img={IMG.mentalHealth} alt="Virtual mental health consultation with an online therapist" reverse title="Virtual Mental Health Consultations">
          <p>Mental health care is perhaps the single greatest beneficiary of the telehealth revolution. Prior to widespread virtual care, many patients avoided therapy due to stigma, inconvenience, cost, or lack of local providers. A patient in a small town might have had zero psychiatrists within 100 kilometers. Today, that same patient can access a licensed therapist or psychiatrist within days — sometimes hours.</p>
          <p>Research shows that virtual cognitive behavioral therapy (CBT), online support groups, and digital mental health tools are as effective as in-person equivalents for conditions including depression, anxiety, PTSD, and OCD. The privacy of receiving care at home also reduces the hesitation many patients feel about being seen entering a mental health clinic.</p>
        </SplitSection>
      </>
    )
  },

  // ── 4. GUT HEALTH ──────────────────────────────────────────────────────────
  {
    slug: "nutrition-gut-health",
    title: "How to Improve Gut Health Naturally: Diet, Symptoms & Tips",
   emoji: "🌿",
   category: "Nutrition & Gut Health",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "7 min read",
    description: (
      <>
        <SplitSection img={IMG.healthyFood} alt="Healthy foods rich in fiber and probiotics for better gut health" title="Why Your Gut Health Matters More Than You Think">
          <p>Good gut health is essential for healthy digestion, strong immunity, and overall well-being. Your gut is home to trillions of beneficial microorganisms, collectively known as the gut microbiome, which help digest food, absorb nutrients, support immune function, and even influence your mood through the gut-brain connection. Maintaining a healthy gut can improve digestion and reduce the risk of several chronic health conditions.</p>
          <p>The gut microbiome — the community of trillions of bacteria, fungi, and other microorganisms living in your intestines — plays a central role in digesting food, synthesizing vitamins (including B12 and K2), training the immune system, and producing neurotransmitters like serotonin, of which 90% is made in the gut.</p>
        </SplitSection>

        <SplitSection img={IMG.gutPain} alt="Person experiencing bloating and digestive discomfort caused by poor gut health" reverse title="Symptoms of an Unhealthy Gut">
          <p>The gut communicates distress in many ways. Recognizing these signs early allows you to make corrections before chronic conditions develop:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Persistent Bloating and Gas:</strong> Chronic distension after meals often signals dysbiosis (microbial imbalance) or food intolerances.</li>
            <li><strong>Irregular Bowel Movements:</strong> Both chronic constipation and diarrhea indicate gut dysfunction. Healthy frequency is generally 1–3 times per day.</li>
            <li><strong>Unexplained Fatigue and Brain Fog:</strong> Poor nutrient absorption and disrupted sleep from gut issues deplete energy and cognitive performance.</li>
            <li><strong>Skin Problems:</strong> Conditions like acne, eczema, and rosacea are increasingly linked to gut inflammation — the gut-skin axis is well-established in research.</li>
            <li><strong>Frequent Heartburn or Acid Reflux:</strong> Persistent acid reflux or indigestion may indicate digestive imbalance and should be evaluated if symptoms continue.</li>
            <li><strong>Food Intolerances:</strong> Difficulty digesting certain foods can be associated with changes in gut bacteria or digestive enzyme function.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.fermented} alt="Fermented probiotic foods that support a healthy gut microbiome" title="The Power of Fermented Foods and Probiotics">
          <p>Fermented foods contain live beneficial bacteria (probiotics) that directly replenish and diversify your gut microbiome. Regular consumption is linked to reduced gut inflammation, improved digestion, better immune function, and even improved mood and mental health outcomes.</p>
          <p>Excellent sources include plain yogurt with live active cultures, kefir, traditional Indian fermented foods like idli, dosa, and kanji, Korean kimchi, German sauerkraut, Japanese miso and natto, Indonesian tempeh, and kombucha tea. Aim to include at least one fermented food with each meal for consistent microbiome support.</p>
        </SplitSection>

        <SplitSection img={IMG.fiber} alt="High-fiber fruits and vegetables that promote healthy digestion and gut bacteria" reverse title="Fiber, Prebiotics, and Hydration — The Foundation">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Eat More Dietary Fiber:</strong> Fiber is the primary fuel for beneficial gut bacteria. Soluble fiber (oats, legumes, apples, psyllium) feeds microbes, while insoluble fiber (whole grains, vegetables) adds bulk. Aim for at least 25–30g daily — most people get less than half that.</li>
            <li><strong>Prioritize Prebiotic Foods:</strong> Prebiotics selectively nourish beneficial bacteria. Top sources include garlic, onions, leeks, asparagus, Jerusalem artichokes, bananas, and chicory root.</li>
            <li><strong>Stay Consistently Hydrated:</strong> Water keeps the mucosal lining of the gut thin and pliable, supports peristalsis, and enables optimal nutrient absorption. Aim for 2.5–3 liters daily.</li>
          <li><strong>Limit Ultra-Processed Foods:</strong> Diets high in added sugars and highly processed foods may reduce the diversity of beneficial gut bacteria and contribute to inflammation.</li>
          <li><strong>Eat a Variety of Plant Foods:</strong> Consuming a wide range of fruits, vegetables, whole grains, legumes, nuts, and seeds supports a more diverse and resilient gut microbiome.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 5. CANCER AWARENESS ────────────────────────────────────────────────────
  {
    slug: "cancer-awareness",
    title: "Cancer Prevention: Symptoms, Risk Factors & Early Detection",
    emoji: "🎗️",
    category: "Cancer Awareness",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "8 min read",  
    description: (
      <>
        <SplitSection img={IMG.cancerAwareness} alt="Cancer awareness campaign promoting early detection and prevention" title="What Is Cancer and How Does It Develop?">
          <p>Cancer awareness plays a vital role in preventing disease and improving survival through early detection. Understanding cancer symptoms, risk factors, screening tests, and healthy lifestyle choices can help reduce your risk and improve treatment outcomes if cancer is detected early.</p>
          <p>Through a process called metastasis, cancer cells can travel via the bloodstream or lymphatic system to form new tumors in distant organs. The earlier cancer is detected — before it has spread — the more treatment options are available and the higher the survival rates. For most cancer types, early-stage survival rates are dramatically higher than late-stage rates.</p>
        </SplitSection>

        <SplitSection img={IMG.earlyWarning} alt="Doctor evaluating a patient for possible early signs of cancer" reverse title="Common Early Symptoms of Cancer">
          <p>Many cancers are highly treatable when caught early, yet symptoms are frequently dismissed. Trust your body and seek medical evaluation promptly if you notice any of the following:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Unexplained Weight Loss:</strong> Losing more than 5kg without changes to diet or exercise is a significant red flag, as many cancers alter metabolism.</li>
            <li><strong>Persistent Fatigue:</strong> Tiredness that does not improve with rest and has no obvious cause can signal blood cancers like leukemia or advanced solid tumors.</li>
            <li><strong>Unusual Lumps:</strong> Any new lump, thickening, or swelling — in the breast, testicle, lymph node, or anywhere else — requires evaluation even if it is painless.</li>
          <li><strong>Persistent Changes in Bowel or Bladder Habits:</strong> Ongoing constipation, diarrhea, blood in the stool, or changes in urination should be evaluated, especially if symptoms persist.</li>
<li><strong>Unexplained Bleeding:</strong> Blood in the urine, stool, sputum, or unusual vaginal bleeding may indicate an underlying medical condition, including certain cancers.</li>
<li><strong>Persistent Cough or Hoarseness:</strong> A cough lasting more than three weeks or ongoing voice changes should be assessed by a healthcare professional.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.noSmoking} alt="Stopping tobacco use helps reduce the risk of several cancers" title="How to Reduce Your Risk of Cancer">
          <p>Up to 40% of all cancers are preventable through lifestyle modifications. The most powerful risk-reduction steps:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Quit Tobacco Completely:</strong> Smoking causes nearly 22% of all cancer deaths globally. The body begins repairing itself within hours of quitting, and cancer risk declines progressively over years.</li>
            <li><strong>Limit Alcohol:</strong> Even moderate drinking increases risk of breast, liver, colorectal, esophageal, and oral cancers. The safest amount from a cancer perspective is none.</li>
            <li><strong>Maintain a Healthy Weight:</strong> Obesity is linked to at least 13 types of cancer. Excess body fat drives chronic low-grade inflammation and raises levels of hormones that promote tumor growth.</li>
          <li><strong>Protect Your Skin:</strong> Use sunscreen, wear protective clothing, and avoid excessive ultraviolet (UV) exposure to reduce the risk of skin cancer.</li>
<li><strong>Stay Physically Active:</strong> Regular exercise supports a healthy weight, improves immune function, and may reduce the risk of several types of cancer.</li>
<li><strong>Avoid Tobacco Smoke:</strong> Limiting exposure to secondhand smoke is also important for reducing cancer risk.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.cancerDiet} alt="Healthy fruits and vegetables that support cancer prevention" reverse title="Healthy Foods That May Help Reduce Cancer Risk">
          <p>While no single food prevents cancer, a consistent pattern of eating can significantly modify risk. A diet rich in colorful fruits and vegetables provides powerful antioxidants, polyphenols, and phytochemicals that protect cells from the DNA damage that initiates cancer development.</p>
          <p>Foods with strong evidence for cancer risk reduction include cruciferous vegetables (broccoli, cauliflower, Brussels sprouts) which contain sulforaphane, berries rich in anthocyanins, turmeric containing curcumin, green tea with EGCG, and legumes providing fiber that protects against colorectal cancer. Regular aerobic exercise — at least 150 minutes per week — reduces cancer risk independently of diet by regulating inflammatory pathways and hormone levels.</p>
        </SplitSection>

        <SplitSection img={IMG.screening} alt="Patient undergoing routine cancer screening for early detection" title="Cancer Screening and Early Detection">
          <p>Two proven vaccines directly prevent specific cancers — the HPV vaccine (prevents cervical, throat, anal, and penile cancers) and the Hepatitis B vaccine (prevents liver cancer). Screening guidelines to discuss with your doctor based on age and risk factors:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Breast Cancer:</strong> Mammogram every 1–2 years from age 40–45 onward.</li>
            <li><strong>Colorectal Cancer:</strong> Colonoscopy from age 45, or earlier with family history.</li>
            <li><strong>Cervical Cancer:</strong> Pap smear every 3 years from age 21, with HPV co-test from age 30.</li>
            <li><strong>Lung Cancer:</strong> Annual low-dose CT scan for current or former heavy smokers aged 50–80.</li>
          <li><strong>Prostate Cancer:</strong> Men should discuss PSA testing with their healthcare provider based on age, family history, and personal risk factors.</li>
<li><strong>Oral Cancer:</strong> Regular dental check-ups can help identify early changes in the mouth, particularly in people who use tobacco or alcohol.</li>
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
      <div className="blog-meta">
  <span>📅 Updated: {blog.updated}</span>
  <span>⏱️ {blog.readTime}</span>
  <span>🏷️ {blog.category}</span>
</div>
      <hr className="blog-divider" />
      <div>{blog.description}</div>
    </main>
  )
}