export type Tip = { ar: string; en: string };
export const tips: Tip[] = [
  { ar: 'ابتسامتك الطبيعية أول رسالة بتصل قبل أي كلمة.', en: 'Your natural smile is the first message that arrives before any word.' },
  { ar: 'اسمع أكتر ما تتكلم — اللي بيسمع كويس بيتقال عنه إنه ظريف.', en: 'Listen more than you talk — good listeners get called charming.' },
  { ar: 'متتكلمش عن نفسك أكتر من دقيقتين متواصلة.', en: 'Never talk about yourself for more than two minutes straight.' },
  { ar: 'افتكر اسمها واستخدمه في الكلام — الأسماء ليها سحر.', en: 'Remember her name and use it — names have magic.' },
  { ar: 'التليفون في جيبك طول ما انتوا قاعدين — مفيش استثناء.', en: 'Phone stays in your pocket the whole time — no exceptions.' },
  { ar: 'لو مش عارف حاجة، قول "مش عارف" — الصدق أشيك من التصنع.', en: 'If you do not know something, say so — honesty is classier than pretending.' },
  { ar: 'المجاملة المحددة تكسب دايما على المجاملة العامة.', en: 'A specific compliment always beats a generic one.' },
  { ar: 'متقاطعهاش في نص الكلام مهما كنت متحمس للرد.', en: 'Never interrupt her mid-sentence, however eager you are to reply.' },
  { ar: 'اعتذر بسرعة لما تغلط — الاعتذار قوة مش ضعف.', en: 'Apologize quickly when wrong — an apology is strength, not weakness.' },
  { ar: 'مسافة الكلام المحترمة: حوالي متر. القرب الزيادة بيخنق.', en: 'Respectful talking distance is about a meter. Getting closer suffocates.' },
  { ar: 'متتكلمش عنها مع صحابك — كلامها أمانة.', en: 'Never discuss her with your friends — her words are a trust.' },
  { ar: 'خد رأيها في قراراتك الصغيرة — ده بيبين إن عقلها يهمك.', en: 'Ask her opinion on your small decisions — it shows her mind matters to you.' },
  { ar: 'لما تزعل منها، اتكلم بهدوء في نفس اليوم — متسيبهاش تنام وانتوا متخانقين لو تقدر.', en: 'When she upsets you, talk calmly the same day — do not let it fester if you can.' },
  { ar: 'النظافة الشخصية والريحة الحلوة نص الانطباع الأول.', en: 'Personal hygiene and a good scent are half the first impression.' },
  { ar: 'متقارنهاش بحد — لا أمامها ولا في سرك.', en: 'Never compare her to anyone — not to her face and not in your heart.' },
];

export type QuizQuestion = {
  qAr: string; qEn: string;
  optionsAr: string[]; optionsEn: string[];
  correct: number;
  whyAr: string; whyEn: string;
};
export const quiz: QuizQuestion[] = [
  {
    qAr: 'أول مرة تتكلم معاها، إيه أحسن بداية؟',
    qEn: 'Talking to her for the first time — what is the best opening?',
    optionsAr: ['جملة معسولة متدرب عليها', 'تعليق طبيعي عن الموقف اللي انتوا فيه', 'سؤال شخصي عشان تكسر الجليد'],
    optionsEn: ['A rehearsed sweet line', 'A natural comment about the situation you are both in', 'A personal question to break the ice'],
    correct: 1,
    whyAr: 'الكلام الطبيعي عن الموقف بيكسب دايما — الجمل المتدرب عليها بتحس، والأسئلة الشخصية بدري عليها.',
    whyEn: 'Natural talk about the situation always wins — rehearsed lines feel fake and personal questions come too early.',
  },
  {
    qAr: 'هي بتحكيلك عن مشكلة مضايقاها. إيه أول رد فعل صح؟',
    qEn: 'She is telling you about a problem that upset her. What is the right first reaction?',
    optionsAr: ['تديلها حل فوري للمشكلة', 'تسمع للآخر وتسألها محتاجة إيه', 'تحكيلها عن مشكلة أكبر حصلتلك'],
    optionsEn: ['Give her an instant solution', 'Listen fully and ask what she needs', 'Tell her about a bigger problem you had'],
    correct: 1,
    whyAr: 'كتير بتكون محتاجة حد يسمعها مش حل جاهز. اسمع الأول وبعدين اسأل: عايزة رأيي ولا عايزة تفضفضي؟',
    whyEn: 'Often she needs a listener, not a ready fix. Listen first, then ask: do you want my opinion or just to vent?',
  },
  {
    qAr: 'قالتلك "لأ" بوضوح. إيه التصرف الرجولي؟',
    qEn: 'She clearly said "no". What is the dignified move?',
    optionsAr: ['تحاول تقنعها تاني بطريقة تانية', 'تقبل بكرامة وتتمنى لها التوفيق', 'تسألها عن السبب لحد ما تقتنع'],
    optionsEn: ['Try to convince her another way', 'Accept with dignity and wish her well', 'Keep asking for the reason until you agree with it'],
    correct: 1,
    whyAr: '"لأ" جملة كاملة. المحاولة بعد الرفض الواضح بتتحول من اهتمام لإزعاج.',
    whyEn: '"No" is a complete sentence. Pushing after a clear refusal turns care into harassment.',
  },
  {
    qAr: 'إيه الفرق بين الثقة بالنفس والغرور؟',
    qEn: 'What is the difference between confidence and arrogance?',
    optionsAr: ['مفيش فرق، الاتنين إيمان بالنفس', 'الثقة هادية ومتواضعة، الغرور استعراض وخوف متغطي', 'الغرور صوت عالي بس'],
    optionsEn: ['No difference, both are self-belief', 'Confidence is calm and humble; arrogance is showing off out of hidden fear', 'Arrogance is just a loud voice'],
    correct: 1,
    whyAr: 'الواثق مش محتاج يثبت حاجة لحد. الغرور خوف من إن حد يكتشف إنك مش كفاية.',
    whyEn: 'The confident person needs to prove nothing. Arrogance is fear that someone discovers you are not enough.',
  },
  {
    qAr: 'صاحبتك عرفت إنك ممكن تكون معجب بيها وانت مش حاسس نفس الإحساس تجاهها. تعمل إيه؟',
    qEn: 'Your friend thinks you might like her, but you do not feel the same. What do you do?',
    optionsAr: ['تستمتع بالاهتمام وتسيبها على أمل', 'توضح باحترام وتحافظ على الصداقة بحدود', 'تقطع كلامك معاها فجأة من غير سبب'],
    optionsEn: ['Enjoy the attention and leave her hopeful', 'Clarify respectfully and keep the friendship within limits', 'Cut contact suddenly with no reason'],
    correct: 1,
    whyAr: 'الأمل الكاذب لعب بمشاعر الناس — والوضوح المحترم بيحفظ الصداقة وكرامة الاتنين.',
    whyEn: 'False hope is playing with feelings — respectful clarity protects the friendship and both dignities.',
  },
  {
    qAr: 'إيه أكتر تصرف بيبوظ العلاقات في البداية؟',
    qEn: 'What behavior ruins early relationships the most?',
    optionsAr: ['الإلحاح والرسايل الكتير ورا بعض', 'الهدوء الزيادة', 'الصراحة في الكلام'],
    optionsEn: ['Bombarding with messages and pressure', 'Being too calm', 'Speaking honestly'],
    correct: 0,
    whyAr: 'الإلحاح بيخنق أي علاقة في مهدها. الاهتمام له إيقاع محترم، والضغط بيقلب الإعجاب لنفور.',
    whyEn: 'Pressure suffocates any relationship in its cradle. Care has a respectful rhythm; pushing turns interest into aversion.',
  },
  {
    qAr: 'معجب بيها بجد ونيتك جواز. إيه أحسن خطوة في مجتمعنا؟',
    qEn: 'You seriously like her and marriage is your goal. What is the best step in our society?',
    optionsAr: ['تفضل معجب بيها من بعيد لبعيد', 'تتقدم لأهلها بالمعروف لما تجهز', 'تقولها تخفي الموضوع عن أهلها'],
    optionsEn: ['Keep admiring her from afar', 'Formally approach her family once you are ready', 'Ask her to hide it from her family'],
    correct: 1,
    whyAr: 'الطريق الرسمي مش تخلف — ده شجاعة واحترام. البنت الجادة بتحترم اللي نواياه واضحة.',
    whyEn: 'The formal path is not outdated — it is courage and respect. A serious girl respects clear intentions.',
  },
  {
    qAr: 'قاعدين على القهوة وتليفونك رن. تعمل إيه؟',
    qEn: 'You are sitting together over coffee and your phone rings. What do you do?',
    optionsAr: ['ترد براحتك عادي', 'تعتذر وترد بسرعة لو ضروري أو تسكته', 'تفضل باصص عليه كل شوية'],
    optionsEn: ['Just answer it freely', 'Apologize and answer briefly if urgent, or silence it', 'Keep glancing at it every minute'],
    correct: 1,
    whyAr: 'اللي قدامك أولى من اللي في التليفون. الاعتذار السريع لو المكالمة ضرورية بيبين احترامك للاتنين.',
    whyEn: 'The person in front of you outranks the phone. A quick apology for a truly urgent call shows respect for both.',
  },
];

export type QA = { qAr: string; qEn: string; aAr: string; aEn: string };
export const qa: QA[] = [
  {
    qAr: 'بتوتر جدا لما بتكلم بنات.. ده طبيعي؟',
    qEn: 'I get very nervous talking to girls. Is that normal?',
    aAr: 'طبيعي جدا وبيحصل لأغلب الشباب. الحل مش إنك تستنى التوتر يروح — الحل إنك تتكلم وانت متوتر. كل محادثة بتقلل التوتر شوية. ابدأ بمواقف بسيطة: سؤال لزميلة في الجامعة عن محاضرة، كلمة للبائعة، وهكذا. التدرج بيهزم الرهبة.',
    aEn: 'Very normal — most young men feel it. The fix is not waiting for the nerves to disappear; it is talking while nervous. Every conversation lowers the fear a bit. Start small: ask a classmate about a lecture, say a word to the shopkeeper. Gradual exposure beats fear.',
  },
  {
    qAr: 'إزاي أعرف إنها مهتمة بيا؟',
    qEn: 'How do I know if she is interested in me?',
    aAr: 'الاهتمام له علامات: بترد بسرعة وبحماس، بتسأل عنك، بتفتكر تفاصيل قلتها، وبتسعى تشوفك في التجمعات. بس متبنيش على إشارة واحدة — ابني على نمط متكرر. وأضمن طريقة؟ التعارف المحترم الواضح بيريح الطرفين من التخمين.',
    aEn: 'Interest has signs: quick enthusiastic replies, questions about you, remembering details you said, and making effort to see you. But never build on one signal — look for a repeated pattern. The surest way? Clear, respectful acquaintance saves both sides the guessing.',
  },
  {
    qAr: 'الغيرة دليل حب ولا مشكلة؟',
    qEn: 'Is jealousy proof of love or a problem?',
    aAr: 'غيرة خفيفة شعور إنساني طبيعي، بس لما تتحول لمراقبة وشك وتحكم تبقى مشكلة بتدمر العلاقة. الحب الناضج مبني على الثقة. لو حاسس بغيرة زيادة، شوف السبب جواك: انعدام أمان عندك ولا تصرف فعلا محتاج كلام؟ الاتنين ليهم حل هادي بالكلام مش بالتحكم.',
    aEn: 'Light jealousy is a natural human feeling, but when it becomes monitoring, suspicion and control it turns into a problem that destroys relationships. Mature love is built on trust. If you feel excessive jealousy, look inside: is it your own insecurity, or behavior that genuinely needs a calm conversation? Both are solved by talking, not controlling.',
  },
  {
    qAr: 'مش غني.. ده هيقلل من فرصي؟',
    qEn: 'I am not rich. Will that hurt my chances?',
    aAr: 'الفلوس بتفتح أبواب بس مش بتبني بيوت. اللي بيبني هو طموحك وخطتك وجدك في الشغل. البنت اللي تستاهل بتدور على راجل عنده مشروع مستقبل مش حساب بنك. اشتغل على نفسك، وخليك واضح وصادق عن ظروفك من الأول — الصدق بيجيب اللي تناسبك.',
    aEn: 'Money opens doors but does not build homes. What builds them is your ambition, your plan and your work ethic. A girl worth having looks for a man with a future project, not a bank balance. Work on yourself and be upfront about your circumstances from the start — honesty attracts the right one.',
  },
  {
    qAr: 'أقولها عن إعجابي إزاي من غير ما أكسر الدنيا؟',
    qEn: 'How do I tell her I like her without ruining everything?',
    aAr: 'ببساطة وهدوء وخصوصية: "أنا مبسوط بمعرفتك وحابب نتعرف على بعض أكتر في إطار محترم". من غير مبالغة ولا وعود كبيرة. وكن مستعد للإجابتين: القبول يبقى بداية كويسة، والرفض يتقابل بكرامة "متقدر جدا" — والاتنين مكسب لأنك كنت صادق.',
    aEn: 'Simply, calmly and privately: "I enjoy knowing you and would like us to know each other more in a respectful way." No exaggeration, no big promises. Be ready for both answers: acceptance is a good start, and rejection is met with dignity — either way you win because you were honest.',
  },
  {
    qAr: 'أهلي مش موافقين على اللي بحبها.. أعمل إيه؟',
    qEn: 'My family does not approve of the girl I love. What do I do?',
    aAr: 'اسمعهم الأول بجد — ممكن يكونوا شايفين حاجة انت مش شايفها بحكم الخبرة. اسألهم عن أسبابهم وناقش بهدوء. لو الأسباب سطحية، بينلهم كوازنها بأفعال مش بكلام، وخد رأي حد حكيم من العيلة. ولو في سبب حقيقي ديني أو أخلاقي، فكر فيه بجد. قرار الجواز قرارك، بس رضا الأهل بركة ومش عدوك.',
    aEn: 'Hear them out first — experience may show them something you cannot see. Ask their reasons and discuss calmly. If the reasons are superficial, prove her worth through actions, not words, and involve a wise family member. If there is a real religious or moral reason, think it over seriously. Marriage is your decision, but family blessing is a gift, not an enemy.',
  },
  {
    qAr: 'السوشيال ميديا بتأثر على العلاقات إزاي؟',
    qEn: 'How does social media affect relationships?',
    aAr: 'بتأثر بطريقتين: بتخلينا نقارن علاقتنا الحقيقية بعلاقات مفلترة ومتصورة، وبتفتح باب للشك والمراقبة. الحل: عيشوا علاقتكم بره الشاشة، ومتبنوش اتهامات على لايك أو تعليق، ولو في حاجة شاغلاك اتكلم فيها وش لوش. العلاقة اللي بتعيش على النت بتموت على النت.',
    aEn: 'Two ways: it makes us compare our real relationship to filtered, staged ones, and it opens the door to suspicion and monitoring. The fix: live your relationship off-screen, never build accusations on a like or comment, and if something bothers you, talk face to face. A relationship that lives online dies online.',
  },
  {
    qAr: 'اتخانقنا وعيطت.. أرجع أتكلم إمتى وإزاي؟',
    qEn: 'We fought and she cried. When and how do I make up?',
    aAr: 'متسيبهاش تنام وهي زعلانة لو تقدر — بس اديها ساعة تهدى لو الخناق كان سخن. ارجع بكلام هادي: "مقدر زعلك وعايز نتكلم بهدوء". اسمعها للآخر قبل ما تدافع عن نفسك، واعتذر عن الجزء اللي غلطت فيه حتى لو ليك حق في الباقي. المكسب مش إنك تكسب الخناق — المكسب إن العلاقة تكسب.',
    aEn: 'Do not let her sleep upset if you can — but give her an hour to cool down if the fight was heated. Come back calmly: "I understand you are hurt and I want us to talk calmly." Hear her fully before defending yourself, and apologize for your part even if you were right about the rest. Winning is not winning the fight — it is the relationship winning.',
  },
];

export type Story = { titleAr: string; titleEn: string; ar: string; en: string; moralAr: string; moralEn: string };
export const stories: Story[] = [
  {
    titleAr: 'الرسايل الواحد وعشرين',
    titleEn: 'The twenty-one messages',
    ar: 'كريم اتعرف على سالي في الجامعة وعجبته جدا. في أول أسبوع بعتلها 21 رسالة في يوم واحد: "صباح الخير"، "عملتي إيه؟"، "ليه مش بتردي؟"، "وحشتيني". سالي كانت بتحترمه في الأول، بس حسّت بالخنقة، وردت رد أخير: "أنا مقدرة اهتمامك بس الإلحاح ده مضايقني". كريم اتعلم الدرس متأخر: الاهتمام زي المية للزرع — الزيادة بتغرقه. بعد شهور، لما اتعرف على حد تاني، بقى يدي مساحة ويحترم الإيقاع، والعلاقة كبرت طبيعي.',
    en: 'Karim met Salma at university and liked her a lot. In the first week he sent her 21 messages in one day: "good morning", "what are you doing?", "why are you not replying?", "miss you". Salma respected him at first but felt suffocated, and sent one final reply: "I appreciate your care, but the pressure bothers me." Karim learned the lesson late: care is like water for a plant — too much drowns it. Months later, meeting someone new, he gave space and respected the rhythm, and the relationship grew naturally.',
    moralAr: 'الاهتمام له إيقاع. اللي بيحترم مساحة التاني بيخلي العلاقة تتنفس وتكبر.',
    moralEn: 'Care has a rhythm. Respecting the other person\'s space lets the relationship breathe and grow.',
  },
  {
    titleAr: 'معاد الميكروباص',
    titleEn: 'The microbus ride',
    ar: 'في ميكروباص زحمة، وقف واحد شاب مكانه لست كبيرة وقال "اتفضلي يا طنط". جنبها كانت واقفة بنت في سنه، لاحظت إنه بعد ما وسع مكانه فضل واقف بعيد عنها محترم المسافة طول الرحلة رغم الزحمة. لما نزلوا في نفس المحطة، قالتلو بابتسامة: "أدبك وصل قبلك". اتعارفوا بعدها في مناسبة عائلية، وبعد سنتين اتجوزوا. هو مكانش بيعمل حاجة استثنائية — بس كان بيعمل الصح الطبيعي اللي بقى نادر.',
    en: 'On a crowded microbus, a young man gave his seat to an older woman: "Please, sit." Next to her stood a girl his age, who noticed that even after giving up his seat he kept a respectful distance from her the whole ride despite the crowd. When they got off at the same stop, she smiled: "Your manners arrived before you did." They met again later at a family occasion, and two years later they married. He did nothing extraordinary — he just did the natural right thing that has become rare.',
    moralAr: 'الذوق الصادق في المواقف العادية أقوى إعلان عن شخصيتك — والناس بتشوف.',
    moralEn: 'Sincere manners in ordinary moments are the strongest advertisement of your character — and people notice.',
  },
  {
    titleAr: 'كلمة "لأ" اللي غيرت حياته',
    titleEn: 'The "no" that changed his life',
    ar: 'أحمد اتقدم لبنت كان بيحبها من سنين، وأهلها رفضوه لأنه لسه في أول طريقه. مات من جوه يومها، بس ماقررش يحقد ولا يستسلم لإحساس الفشل. حول الوجع لخطة: ركز في شغله، اتعلم مهارة جديدة، وبقى أحسن نسخة من نفسه. بعد 3 سنين اتقدم لبنت تانية عجبته أكتر، واتجوزوا وعاشوا حياة كويسة. بيقول دايما: "الرفض اللي وجعني هو اللي صححني على نفسي".',
    en: 'Ahmed proposed to a girl he had loved for years, and her family rejected him because he was still at the start of his path. He was crushed that day, but he chose neither bitterness nor surrender to failure. He turned the pain into a plan: he focused on work, learned a new skill, and became a better version of himself. Three years later he proposed to another girl he liked even more, they married, and they live well. He always says: "The rejection that hurt me is what woke me up to myself."',
    moralAr: 'الرفض مش نهاية الطريق — أحيانا يكون بداية الطريق الصح.',
    moralEn: 'Rejection is not the end of the road — sometimes it is the start of the right one.',
  },
];

export type Term = { termAr: string; termEn: string; defAr: string; defEn: string };
export const glossary: Term[] = [
  { termAr: 'الاحترام', termEn: 'Respect', defAr: 'إنك تعاملها كإنسانة ليها رأي ومشاعر وكرامة، مش كهدف أو فكرة في دماغك.', defEn: 'Treating her as a person with opinions, feelings and dignity — not as a goal or an idea in your head.' },
  { termAr: 'الحدود', termEn: 'Boundaries', defAr: 'الخطوط اللي كل واحد مرتاح جواها في الكلام والمزاح والخصوصية — احترامها مش اختياري.', defEn: 'The lines each person is comfortable within, in talk, joking and privacy — respecting them is not optional.' },
  { termAr: 'الثقة', termEn: 'Trust', defAr: 'إيمانك إنها صادقة معاك من غير مراقبة ولا شك — بتتبني بالأفعال وبتتهدم بكذبة واحدة.', defEn: 'Believing she is honest with you without monitoring or suspicion — built by actions, destroyed by one lie.' },
  { termAr: 'الإلحاح', termEn: 'Pestering', defAr: 'تكرار الرسايل والمحاولات بعد ما الطرف التاني وضح عدم اهتمامه — مش رومانسية، ده إزعاج.', defEn: 'Repeating messages and attempts after the other side showed no interest — not romance, but harassment.' },
  { termAr: 'التعارف الرسمي (الصالون)', termEn: 'The formal meeting', defAr: 'أول لقاء بين الشاب والبنت في بيت أهلها بحضورهم — بداية الطريق الرسمي للجواز.', defEn: 'The first meeting between a man and a woman at her family\'s home with them present — the start of the formal path to marriage.' },
  { termAr: 'الخطوبة', termEn: 'Engagement', defAr: 'فترة تعارف أعمق قبل الجواز في إطار محترم وعلني — مش جواز مصغر، ليها حدودها.', defEn: 'A deeper, public and respectful acquaintance before marriage — not a mini-marriage; it has its own limits.' },
  { termAr: 'الشبكة', termEn: 'The shabka', defAr: 'هدية الذهب اللي بيقدمها العريس لعروسته عند الخطوبة — رمز الالتزام في العادات المصرية.', defEn: 'The gold gift the groom gives his bride at engagement — a symbol of commitment in Egyptian custom.' },
  { termAr: 'المهر', termEn: 'The mahr', defAr: 'حق شرعي للزوجة بيدفعه الزوج عند الجواز — مش ثمن ولا مصاريف، ده حقها المنصوص عليه.', defEn: 'The wife\'s religious right paid by the husband at marriage — not a price or expense, but her stated right.' },
  { termAr: 'لغة الجسد', termEn: 'Body language', defAr: 'اللي بتقوله من غير كلام: وقفتك، نظرتك، ابتسامتك، وإيديك — بيوصل قبل أي جملة.', defEn: 'What you say without words: your posture, gaze, smile and hands — it arrives before any sentence.' },
  { termAr: 'الاستماع الفعال', termEn: 'Active listening', defAr: 'إنك تسمع بكل حواسك وتفهم المشاعر ورا الكلام، مش تستنى دورك في الكلام.', defEn: 'Listening with all your senses to understand the feelings behind words — not waiting for your turn to talk.' },
  { termAr: 'النضج العاطفي', termEn: 'Emotional maturity', defAr: 'إنك تدير مشاعرك مش مشاعرك تديرك: تقبل الرفض، تتحكم في الغيرة، وتتكلم وقت الخلاف بهدوء.', defEn: 'Managing your feelings instead of them managing you: accepting rejection, controlling jealousy, talking calmly during conflict.' },
  { termAr: 'التوافق', termEn: 'Compatibility', defAr: 'إن القيم والأهداف والطباع بينكم بتشتغل مع بعض — الحب مهم، بس التوافق هو اللي بيكمل المشوار.', defEn: 'When values, goals and temperaments work together — love matters, but compatibility finishes the journey.' },
];
