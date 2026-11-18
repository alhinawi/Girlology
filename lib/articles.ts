import { articleMeta, Article } from './content';

const bodies: Record<string, { ar: { h: string; p: string }[]; en: { h: string; p: string }[] }> = {
  respect: {
    ar: [
      { h: 'الاحترام مش شيك، ده أساس', p: 'كتير مننا اتربى على إن "التعامل مع البنات" ده موضوع غامض أو صعب. الحقيقة أبسط من كده بكتير: البنت إنسانة زيك بالظبط، عندها أفكارها ومشاعرها وكرامتها. لما تحط القاعدة دي في دماغك، كل تصرفاتك بعدها هتطلع طبيعية ومحترمة من غير مجهود.' },
      { h: 'احترم وجودها مش شكلها بس', p: 'أول غلطة إنك تتعامل معاها كأنها "صورة" أو هدف توصله. اسمع رأيها بجد، خد كلامها محمل الجد، ومتضحكش على أفكارها حتى لو مختلفة عنك. لما تسألها عن رأيها في حاجة وتسمع للآخر، انت كده بتقولها "وجودك وعقلك ليهم قيمة عندي" — ودي أقوى رسالة احترام ممكن توصل.' },
      { h: 'كلمتك ومسؤوليتك', p: 'الاحترام يبان في التفاصيل: توصل في معادك، تعتذر لما تغلط، متتكلمش عنها ورا ضهرها، ومتفشش أسرارها لصحابك مهما كانت بسيطة. البنت بتحس بالأمان مع الشخص اللي كلمته كلمته، والأمان ده هو أول لبنة في أي علاقة نضيفة.' },
      { h: 'حدودها خط أحمر', p: 'كل واحدة عندها حدود مريحة ليها: في الكلام، في المزاح، في الخصوصية. انت مش مطلوب منك تخمن — المطلوب إنك تراقب وتسأل وتاخد بالك. لو حسيت إنها اتضايقات من موضوع، بطل من نفسك من غير ما تستنى اعتراض صريح. دي رجولة، مش ضعف.' },
      { h: 'احترم نفسك كمان', p: 'الاحترام مشوار في اتجاهين. اللي بيحترم نفسه مش بيسمح لحد يقلل منه، ومش بيضحي بمبادئه عشان يرضي حد. لما تحترم نفسك وتحترمها في نفس الوقت، بتبني علاقة متوازنة مفيهاش طرف عالي وطرف واطي — ودي العلاقة اللي بتعيش.' },
    ],
    en: [
      { h: 'Respect is not decoration, it is the foundation', p: 'Many of us grow up thinking that dealing with girls is some mysterious skill. The truth is much simpler: she is a person just like you, with her own thoughts, feelings and dignity. Once that rule settles in your mind, everything you do after it comes out naturally respectful.' },
      { h: 'Respect her presence, not just her looks', p: 'The first mistake is treating her like a picture or a goal to reach. Really listen to her opinion, take her words seriously, and never laugh at her ideas even when they differ from yours. When you ask her opinion and hear it fully, you are telling her that her mind matters to you — the strongest respect message there is.' },
      { h: 'Your word is your responsibility', p: 'Respect shows in details: arrive on time, apologize when wrong, never talk about her behind her back, and never share her secrets with your friends, however small. A girl feels safe with a man whose word means something — and that safety is the first brick of any healthy relationship.' },
      { h: 'Her boundaries are a red line', p: 'Every girl has limits she is comfortable with: in conversation, joking and privacy. You are not asked to guess — you are asked to watch, ask and pay attention. If you sense a topic upset her, drop it yourself without waiting for a clear objection. That is strength, not weakness.' },
      { h: 'Respect yourself too', p: 'Respect goes both ways. A man who respects himself lets no one put him down and never trades his principles to please anyone. When you respect yourself and her at the same time, you build a balanced relationship with no one above or below — and that is the kind that lasts.' },
    ],
  },
  talk: {
    ar: [
      { h: 'البداية أبسط من اللي في دماغك', p: 'أكتر حاجة بتوترنا هي أول كلمة. السر إن مفيش "جملة سحرية" — السر في إنك تتكلم طبيعي عن الموقف اللي انتوا فيه. تعليق بسيط عن المحاضرة، سؤال عن الكتاب اللي في إيدها، كلمة عن المكان. الكلام الطبيعي بيكسب دايما على الكلام المتدرب عليه قدام المراية.' },
      { h: 'اسأل أسئلة مفتوحة', p: 'بدل السؤال اللي إجابته "آه" أو "لأ"، اسأل أسئلة تفتح كلام: "إيه رأيك في..؟"، "إزاي بدأتي تهتمي بـ..؟". الأسئلة دي بتديها مساحة تتكلم وبتديك فرصة تعرف شخصيتها على حقيقتها، مش مجرد شكل.' },
      { h: 'مواضيع تفتح قلوب، ومواضيع تقفلها', p: 'كلم عن الاهتمامات المشتركة: دراسة، شغل، هوايات، مسلسلات، كتب، أحلام وسفر. وبعد عن: الأسئلة الشخصية أوي في البداية، الكلام عن الفلوس، المقارنات، والنكت اللي ممكن تفهم غلط. الكلام المحترم مش ممل — ده أذكى أنواع الكلام.' },
      { h: 'لغة جسمك بتتكلم قبلك', p: 'قبل ما تقول كلمة، جسمك بيقول كل حاجة: وقفة مرتاحة، نظرة هادية في عينيها من غير تحديق، ابتسامة طبيعية، وإيديك مش متشابكة بعصبية. وخلي مسافة محترمة بينكم — الاقتراب الزيادة في البداية بيخوف ومبيعجبش.' },
      { h: 'المزاح له وقت وميزان', p: 'الهزار الخفيف بيكسر الجليد، بس افتكر: اتريق على الموقف مش عليها، ومتعملش نكتة على حساب شكل أو عيلة أو ظروف حد. ولما تلاقيها مش مبسوطة من نوع معين من الهزار، غيره فورا — المرونة دي علامة ذكاء اجتماعي مش ضعف شخصية.' },
      { h: 'اعرف تنهي الكلام بذوق', p: 'مش كل محادثة لازم تطول. لما تحس إن الكلام خلص، اختم بكلمة حلوة: "اتشرفت بالكلام معاكي" أو "يارب نشوفك على خير". إنهاء الكلام بذوق بيسيب انطباع أحلى من التطويل اللي بيجيب ملل.' },
    ],
    en: [
      { h: 'Starting is simpler than you think', p: 'The first word is what scares us most. The secret is that there is no magic line — the secret is talking naturally about the situation you are both in. A simple comment about the lecture, a question about the book in her hand, a word about the place. Natural talk always beats rehearsed lines.' },
      { h: 'Ask open questions', p: 'Instead of yes-or-no questions, ask ones that open conversation: "What do you think about..?", "How did you get into..?". These give her room to talk and give you a chance to know her real personality, not just her looks.' },
      { h: 'Topics that open hearts, and ones that close them', p: 'Talk about shared interests: studies, work, hobbies, shows, books, dreams and travel. Avoid: overly personal questions early on, money talk, comparisons, and jokes that could be misunderstood. Respectful conversation is not boring — it is the smartest kind.' },
      { h: 'Your body speaks before you do', p: 'Before you say a word, your body says everything: a relaxed posture, a calm look in her eyes without staring, a natural smile, and hands that are not nervously clasped. Keep a respectful distance — getting too close early on scares rather than impresses.' },
      { h: 'Humor has its time and measure', p: 'Light jokes break the ice, but remember: joke about the situation, not about her, and never at the expense of someone\'s looks, family or circumstances. If a kind of joke does not land well with her, drop it immediately — that flexibility is social intelligence, not weakness.' },
      { h: 'Know how to end a conversation gracefully', p: 'Not every conversation must stretch. When you feel it has run its course, close with a kind word: "It was nice talking to you" or "Hope to see you around." Ending gracefully leaves a better impression than dragging things out.' },
    ],
  },
  listen: {
    ar: [
      { h: 'الاستماع مش صمت، ده مشاركة', p: 'ناس كتير بتفتكر إن الاستماع يعني تسكت لحد ما تخلص هي الكلام ويجي دورك. لأ، الاستماع الحقيقي إنك تكون حاضر بكل حواسك: بتسمع الكلمات، بتلاحظ النبرة، وبتفهم المشاعر اللي ورا الكلام. البنت بتحس فورا بالفرق بين اللي سامعها واللي مستني دوره في الكلام.' },
      { h: 'علامات إنك سامع بجد', p: 'حاجات بسيطة بتعمل فرق كبير: وشك ليها مش للتليفون، هز راسك بالموافقة، رد بجمل قصيرة زي "فاهمك" أو "وبعدين؟"، وخلي التليفون في جيبك طول الوقت. التليفون وهو بينكم هو أسرع طريقة تقول بيها "كلامك مش مهم" من غير ما تقصد.' },
      { h: 'لخص ورجع كلامها', p: 'من أقوى أدوات الاستماع إنك تعيد صياغة اللي قالته بأسلوبك: "يعني انتي حسيتي كذا لما حصل كذا؟". دي بتأكد إنك فاهم صح، وبتخليها تحس إن كلامها وصل واتقدر. بس متكررهاش في كل جملة عشان متبقاش ببغاء.' },
      { h: 'متحاولش تصلح كل حاجة', p: 'لما تحكيلك عن مشكلة، مش دايما بتستنى حل جاهز — كتير بتكون محتاجة حد يسمعها بس. قبل ما تقفز للحلول، اسأل: "عايزة رأيي ولا عايزة تفضفضي؟". السؤال ده لوحده بيوريها إنك فاهم الفرق، وده نص الاحتواء.' },
      { h: 'افتكر التفاصيل', p: 'لو حكيتلك عن امتحان الأسبوع الجاي، اسألها عنه لما يعدي. لو قالت إنها بتحب نوع معين من القهوة، افتكره. افتكار التفاصيل الصغيرة بيقول: "انتي مهمة عندي" بطريقة أقوى من أي كلام معسول ممكن تقوله.' },
    ],
    en: [
      { h: 'Listening is not silence, it is participation', p: 'Many think listening means staying quiet until it is your turn to speak. Real listening means being fully present: hearing the words, noticing the tone, and understanding the feelings behind them. She instantly feels the difference between someone who hears her and someone waiting for his turn.' },
      { h: 'Signs that you truly hear her', p: 'Small things make a big difference: face her, not your phone; nod along; respond with short lines like "I see" or "and then?"; and keep the phone in your pocket the whole time. A phone between you is the fastest way to say "your words do not matter" without meaning to.' },
      { h: 'Summarize her words back', p: 'One of the strongest listening tools is rephrasing what she said in your own words: "So you felt this when that happened?". It confirms you understood correctly and makes her feel heard and valued — just do not overuse it or you will sound like a parrot.' },
      { h: 'Do not try to fix everything', p: 'When she tells you about a problem, she is not always waiting for a ready solution — often she just needs someone to hear her. Before jumping to solutions, ask: "Do you want my opinion, or do you just need to vent?". That one question shows her you understand the difference, and that is half of caring.' },
      { h: 'Remember the details', p: 'If she told you about an exam next week, ask her about it after. If she mentioned loving a certain coffee, remember it. Remembering small details says "you matter to me" louder than any sweet talk ever could.' },
    ],
  },
  confidence: {
    ar: [
      { h: 'الثقة مش صوت عالي', p: 'الثقة بالنفس مش إنك تبقى أعلى واحد صوته في المكان ولا إنك تقلل من حد. الثقة الحقيقية هادية: إنك تعرف قيمتك من غير ما تحتاج تثبتها كل دقيقة. الشخص الواثق بيتكلم براحة، بيضحك من قلبه، ومش خايف يقول "مش عارف" لما فعلا مش عارف.' },
      { h: 'ابني ثقتك من جوه الأول', p: 'الثقة اللي من بره بس — لبس وعربية وفلوس — أول اختبار بتقع. الثقة اللي بتعيش بتتبني من جوه: حاجة بتتقنها، هدف بتمشي وراه، صحة بتحافظ عليها، وقراية بتوسع دماغك. كل إنجاز صغير بيضيف طوبة في بنيان ثقتك بنفسك.' },
      { h: 'جسمك قبل كلامك', p: 'قف مستقيم، شد كتفك، ارفع راسك، وامشي بخطوات ثابتة مش مستعجلة. جسمك مش بس بيبين ثقتك للناس — هو كمان بيأثر على إحساسك بنفسك. جرب تقف واقفة واثقة لدقيقتين قبل موقف مهم وهتحس بفرق حقيقي.' },
      { h: 'متقارنش نفسك بحد', p: 'المقارنة سم الثقة. دايما في حد أغنى وأطول وأوسم — بس مفيش حد تاني زيك. قارن نفسك بنفسك من سنة اللي فاتت: اتعلمت إيه؟ اتحسنت في إيه؟ المنافسة الوحيدة المحترمة هي إنك تبقى أحسن من نسختك اللي فاتت.' },
      { h: 'الفشل مش عدوك', p: 'كل شخص واثق شفته في حياتك فشل قبل كده عشرات المرات — الفرق إنه ماخدش الفشل كحكم على شخصه. اتعامل مع كل محاولة متنجحش كأنها تدريب: اتعلمت منها إيه؟ المرة الجاية هتعمل إيه مختلف؟ كده كل تعثر بيتحول لسلم بتطلع عليه.' },
      { h: 'الغرور هو نقيض الثقة الحقيقية', p: 'الغرور في الحقيقة خوف متغطي: خوف إن حد يكتشف إنك مش كفاية. الشخص الواثق مش محتاج يستعرض ولا يفتري ولا يكذب على نفسه. اتكلم عن نفسك بصدق وبساطة — التواضع الواثق من أجمل الصفات اللي ممكن تتعرف فيك.' },
    ],
    en: [
      { h: 'Confidence is not a loud voice', p: 'Self-confidence is not being the loudest in the room or putting others down. Real confidence is quiet: knowing your worth without needing to prove it every minute. A confident person speaks calmly, laughs genuinely, and is not afraid to say "I do not know" when he truly does not.' },
      { h: 'Build it from the inside first', p: 'Confidence that is only external — clothes, car, money — falls at the first test. Lasting confidence is built from within: something you master, a goal you chase, health you maintain, reading that expands your mind. Every small achievement adds a brick to the building of your confidence.' },
      { h: 'Your body speaks before your words', p: 'Stand straight, pull your shoulders back, keep your head up, and walk with steady, unhurried steps. Your body does not just show others your confidence — it changes how you feel about yourself. Try a confident posture for two minutes before an important moment and you will feel a real difference.' },
      { h: 'Never compare yourself to others', p: 'Comparison is the poison of confidence. There will always be someone richer, taller or better-looking — but there is no one else like you. Compare yourself to who you were last year: what did you learn? where did you improve? The only fair competition is against your past self.' },
      { h: 'Failure is not your enemy', p: 'Every confident person you have ever seen failed dozens of times — the difference is they never took failure as a verdict on who they are. Treat every failed attempt as training: what did it teach you? what will you do differently next time? That way every stumble becomes a step up.' },
      { h: 'Arrogance is the opposite of real confidence', p: 'Arrogance is actually covered-up fear: the fear that someone discovers you are not enough. A confident person does not need to show off, belittle or lie to himself. Speak about yourself honestly and simply — humble confidence is one of the most attractive qualities you can have.' },
    ],
  },
  manners: {
    ar: [
      { h: 'الذوق بيبان في التفاصيل الصغيرة', p: 'الذوق مش قواعد معقدة — هو إنك تحط نفسك مكانها. تفتح الباب، تفسح الطريق، تقول "لو سمحتي" و"شكرا"، ومتعليش صوتك في المكان العام. التصرفات دي تكلفتها صفر وتأثيرها على انطباعها عنك أكبر من أي هدية غالية.' },
      { h: 'في المواصلات والأماكن العامة', p: 'في المترو أو الميكروباص: وسع مكانك متعملش "man spreading"، سيب الكرسي لكبير السن أو الست اللي واقفة، ومتحاولش تتحشر جنبها بقصد. الشاب المؤدب في المواصلات بيلفت النظر لأنه للأسف بقى عملة نادرة.' },
      { h: 'في الجامعة أو الشغل', p: 'المعاملة المحترمة في الأماكن المشتركة هي أصدق اختبار لشخصيتك. ساعدها في محاضرة مش فاهماها لو قدرت، متستغلش حاجتها ليك، ومتفسرش كل ابتسامة منها على إنها إعجاب. الكلية والشغل أماكن تعارف محترم — التزم بآدابها.' },
      { h: 'على السوشيال ميديا', p: 'الذوق أونلاين لا يقل عن الذوق وش لوش: متبعتش رسايل مزعجة لو مردتش، متعلقش على كل صورة بكلام يكسف، ومتدخلش في خصوصياتها. الرسالة المحترمة الواحدة أحسن من 20 رسالة ورا بعض. ولو معندكوش صداقة حقيقية، خد بالك إن "الإضافة المفاجئة + سلام عليكم" مش أحسن افتتاحية.' },
      { h: 'الكلام الحلو من غير مبالغة', p: 'المجاملة الصادقة المحددة أحلى من كتالوج المعسول: "رأيك في الاجتماع النهاردة كان في محله" أقوى من "انتي أجمل واحدة في الدنيا". المجاملة اللي ليها سبب حقيقي بتحس إنها طالعة من قلبك، أما المبالغة بتحس إنها طالعة من كتالوج.' },
      { h: 'مع أهلها وصحابها', p: 'ذوقك الحقيقي بيبان في تعاملك مع الناس اللي حواليها: احترم أهلها، متتكلمش عنهم بسوء أبدا، وعامل صحابها بلطف من غير ما تدي انطباعات تانية. البنت بتشوفك من عيون الناس اللي بتحبهم كمان.' },
    ],
    en: [
      { h: 'Manners show in small details', p: 'Good manners are not complicated rules — they mean putting yourself in her place. Hold the door, make way, say "please" and "thank you", and keep your voice down in public. These acts cost nothing and shape her impression of you more than any expensive gift.' },
      { h: 'On transport and in public', p: 'On the metro or microbus: do not spread out, offer your seat to an elder or a standing woman, and never squeeze next to her on purpose. A polite young man on public transport stands out because, sadly, he has become rare.' },
      { h: 'At university or work', p: 'Respectful conduct in shared places is the truest test of character. Help her with a lecture she missed if you can, never take advantage of her needing you, and do not read every smile as romantic interest. University and work are places for respectful acquaintance — stick to their etiquette.' },
      { h: 'On social media', p: 'Online manners matter no less than face to face: do not flood her with messages if she does not reply, do not comment on every photo with embarrassing lines, and do not pry into her privacy. One respectful message beats twenty in a row. And if you are not actually friends yet, a sudden friend request plus "hi" is not the best opening.' },
      { h: 'Sweet words without exaggeration', p: 'A sincere, specific compliment beats a catalog of flattery: "Your point in the meeting today was right on" is stronger than "you are the most beautiful girl in the world." A compliment with a real reason feels like it comes from the heart; exaggeration feels copied.' },
      { h: 'With her family and friends', p: 'Your real manners show in how you treat the people around her: respect her family, never speak badly of them, and be kind to her friends without giving wrong impressions. She also sees you through the eyes of the people she loves.' },
    ],
  },
  friendship: {
    ar: [
      { h: 'الصداقة النضيفة ممكنة', p: 'في ناس بتقول مستحيل في صداقة بين ولد وبنت، وفي ناس بتتجاهل الموضوع خالص. الحقيقة في النص: الصداقة المحترمة ممكنة لما الطرفين عارفين حدودهم ومحترمينها. الصديق الحقيقي — ولد أو بنت — نعمة، والبنت الصديقة بتفهمك وجهة نظر تانية للدنيا محدش هيديهالك.' },
      { h: 'الحدود مش قيد، دي حماية', p: 'اتفق مع نفسك على حدود واضحة من الأول: مزاح في حدود، كلام في حدود، خروج في أماكن عامة وأوقات مناسبة، واحترام كامل لخصوصية بعض. الحدود دي مش عشان الصداقة تبقى باردة — دي عشان الصداقة تعيش من غير ما تتحول لمشاكل.' },
      { h: 'متلعبش بمشاعرها', p: 'لو عارف إنها ممكن تبقى معجبة بيك وانت مش حاسس نفس الإحساس، متستغلش ده. متديش أمل كاذب عشان بتحس بإعجاب، ومتخليش الصداقة مطية. اللعب بمشاعر الناس من أقبح الحاجات اللي ممكن تعملها — والدنيا دوارة.' },
      { h: 'لو حسيت بمشاعر تجاهها', p: 'دي بتحصل، وطبيعي. المهم تكون صادق مع نفسك الأول: دي مشاعر حقيقية ولا مجرد تعود؟ لو حقيقية، عندك خيارين محترمين: يا تصارحها بهدوء وتقبل النتيجة مهما كانت، يا تحافظ على الصداقة من غير ضغط. الممنوع إنك تفضل في المنتصف تضايقها وتضايق نفسك.' },
      { h: 'صداقتها كنز معلومات', p: 'صاحبتك أحسن مصدر تفهم منه إزاي البنات بتفكر — استغل ده بذكاء. اسألها عن رأيها في مواقف، افهم منها إيه اللي بيزعل وإيه اللي بيفرح. المعرفة دي هتخليك أرقى في كل تعاملاتك، مش بس معاها.' },
    ],
    en: [
      { h: 'Clean friendship is possible', p: 'Some say friendship between a guy and a girl is impossible; others ignore the question entirely. The truth is in between: a respectful friendship works when both sides know and honor their limits. A true friend — male or female — is a blessing, and a female friend gives you a perspective on life no one else can.' },
      { h: 'Boundaries protect, they do not restrict', p: 'Set clear boundaries with yourself from the start: joking within limits, conversation within limits, outings in public places at proper times, and full respect for each other\'s privacy. These boundaries do not make the friendship cold — they keep it alive without turning into problems.' },
      { h: 'Never play with her feelings', p: 'If you know she might like you and you do not feel the same, do not exploit that. Do not give false hope because the attention flatters you, and do not use friendship as a vehicle. Playing with people\'s feelings is one of the ugliest things you can do — and life turns.' },
      { h: 'If you start having feelings for her', p: 'It happens, and it is natural. Be honest with yourself first: is it real feeling or just habit? If real, you have two respectful options: tell her calmly and accept the answer either way, or protect the friendship without pressure. What is not acceptable is staying in the middle, hurting her and yourself.' },
      { h: 'Her friendship is a treasure of insight', p: 'Your female friend is the best source for understanding how girls think — use it wisely. Ask her opinion about situations, learn from her what hurts and what delights. That knowledge will make you better in every interaction, not just with her.' },
    ],
  },
  interest: {
    ar: [
      { h: 'الإعجاب مش عيب', p: 'تحس بإعجاب تجاه بنت؟ ده إحساس إنساني طبيعي جدا ومفيش فيه حرج. الحرج بيبدأ لما التعبير عن الإعجاب يطلع بطريقة غلط: مطاردة، إلحاح، أو كلام يكسفها قدام الناس. الإحساس مش مطلوب يتكتم — المطلوب يتعبر عنه صح.' },
      { h: 'قبل أي خطوة: اعرف نيتك', p: 'اسأل نفسك سؤال واحد بجد: أنا معجب بيها عشان أفتح باب لعلاقة محترمة تنتهي بالجواز، ولا مجرد إعجاب عابر؟ في مجتمعنا، البنت الجادة بتدور على الجد، وأي كلام من غير نية واضحة بيتحسب عليك. لو نيتك مش واضحة لنفسك، استنى لحد ما تتضح.' },
      { h: 'التعارف المحترم بيبدأ بالتدريج', p: 'ابني معرفة طبيعية الأول: كلمة في الجامعة، سؤال في الشغل، حضور محترم في التجمعات المشتركة. خليها تشوفك وتعرف أخلاقك قبل ما تسمع إعجابك. الانطباع المتراكم عن شخصيتك أقوى من ألف كلمة معسولة.' },
      { h: 'إزاي تعبر عن إعجابك', p: 'لما تحس إن الوقت مناسب وفي قبول متبادل، قولها ببساطة وهدوء وبعيد عن الناس: "أنا مبسوط بمعرفتك وعايز نتعرف على بعض أكتر في إطار محترم". من غير مبالغة ولا وعود هوائية. ولو النية جواز، قول ده من الأول — الوضوح ده بيحترم جدا في مجتمعنا.' },
      { h: 'إشارات القبول والرفض', p: 'اتعلم تقرا الإشارات: ردودها الطويلة الحماسية، أسئلتها عنك، ابتسامتها الصادقة — دي إشارات إيجابية. أما الردود القصيرة المتأخرة، تجنب اللقاءات، والكلام البارد — دي رسالة محترمة إنها مش مهتمة. استقبلها بذوق ومتضغطش.' },
      { h: 'الطريق الرسمي موجود ليه', p: 'في مصر، أقصر طريق لقلب البنت الجادة بيعدي من بيت أهلها. لو إعجابك جاد، "التقدم" لأهلها مش خطوة قديمة — دي شجاعة واحترام. البنت اللي تستاهل هتحترمك أكتر لما تشوف إن نواياك واضحة وشرفك في كلامك.' },
    ],
    en: [
      { h: 'Liking someone is not shameful', p: 'Feeling attracted to a girl? That is a completely natural human feeling with nothing wrong in it. Trouble starts when the expression comes out wrong: chasing, pressuring, or embarrassing her in front of people. Feelings need not be hidden — they need to be expressed right.' },
      { h: 'Before any step: know your intention', p: 'Ask yourself one honest question: do I like her to open the door to a serious relationship ending in marriage, or is it passing attraction? In our society, a serious girl looks for a serious man, and talk without clear intention counts against you. If your intention is unclear to yourself, wait until it clears.' },
      { h: 'Respectful acquaintance builds gradually', p: 'Build familiarity naturally first: a word at university, a question at work, a polite presence in shared gatherings. Let her see you and know your character before hearing about your feelings. An accumulated impression of your personality outweighs a thousand sweet words.' },
      { h: 'How to express your interest', p: 'When the time feels right and interest seems mutual, say it simply and calmly, away from people: "I enjoy knowing you and would like us to know each other more in a respectful way." No exaggeration, no sky-high promises. And if marriage is the goal, say so early — clarity is deeply respected in our culture.' },
      { h: 'Reading acceptance and rejection signals', p: 'Learn to read signals: long enthusiastic replies, questions about you, genuine smiles — positive signs. Short delayed replies, avoiding meetups and cold talk — a polite message that she is not interested. Receive it gracefully and never push.' },
      { h: 'The official path exists for a reason', p: 'In Egypt, the shortest road to a serious girl\'s heart passes through her family\'s door. If your interest is real, formally approaching her family is not old-fashioned — it is courage and respect. A girl worth it will respect you more when your intentions and honor are clear.' },
    ],
  },
  rejection: {
    ar: [
      { h: '"لأ" إجابة كاملة', p: 'أول وأهم قاعدة: الرفض حق مش إهانة. هي مش مطالبة تفسر ليه رفضت، وانت مش مطالب تقتنع بالسبب — بس مطالب تحترم القرار. كلمة "لأ" لوحدها جملة كاملة، والرد الرجولي الوحيد عليها هو: "متقدر جدا، بالتوفيق".' },
      { h: 'متاخدهاش على كرامتك', p: 'رفضها ليك مش معناه إنك وحش أو ناقص — معناه ببساطة إن الاختيار مش مناسب ليها، زي ما انت نفسك مش شرط يعجبك كل حد. الناس بتختلف في الأذواق والظروف والتوقيت. متجيبش سيرة كرامتك لأن كرامتك الحقيقية بتظهر في طريقة استقبالك للرفض مش في تجنبه.' },
      { h: 'ممنوعات بعد الرفض', p: 'ممنوع الإلحاح: "جرب تاني" بعد رفض واضح مش رومانسية، ده إزعاج. ممنوع الكلام السيئ عنها لصحابك. ممنوع تتحول لمتتبع على السوشيال ميديا. وممنوع تحاول تغير رأيها بالضغط أو الوساطات المتكررة. كل دي تصرفات بتصغرك في عينيها وفي عين نفسك.' },
      { h: 'حول الألم لوقود', p: 'الوجع اللي بعد الرفض طاقة — وجهها لنفسك: جيم، قراية، شغل، هواية. أحسن "رد" على الرفض مش كلام — إنك تبقى نسخة أحسن من نفسك. بعد شهور هتشكر ربنا إن الباب ده اتقفل وباب أحسن اتفتح.' },
      { h: 'الرفض جزء من رحلة كل ناجح', p: 'اسأل أي حد متجوز سعيد وهيقولك إنه اترفض قبل كده. الرفض بيعلمك إيه اللي بجد عايزه، بيقوي جلدك، وبيخليك تقدر القبول لما ييجي. اللي مترفضش ولا مرة هو اللي مخاطرش أصلا — والمخاطرة المحترمة هي اللي بتجيب النتايج.' },
    ],
    en: [
      { h: '"No" is a complete sentence', p: 'The first and most important rule: rejection is a right, not an insult. She owes you no explanation, and you need not agree with the reason — but you must respect the decision. "No" alone is a full sentence, and the only dignified reply is: "I completely understand, best of luck."' },
      { h: 'Do not take it as an attack on your dignity', p: 'Her rejection does not mean you are bad or lacking — it simply means the match does not suit her, just as not everyone suits you either. People differ in taste, circumstances and timing. Keep your dignity out of it, because real dignity shows in how you receive rejection, not in avoiding it.' },
      { h: 'Forbidden moves after rejection', p: 'No insisting: "trying again" after a clear refusal is not romance, it is harassment. No badmouthing her to your friends. No turning into a social-media watcher. No repeated pressure or mediators to change her mind. All of these shrink you in her eyes and in your own.' },
      { h: 'Turn the pain into fuel', p: 'The ache after rejection is energy — point it at yourself: gym, reading, work, a hobby. The best "answer" to rejection is not words — it is becoming a better version of yourself. Months later you will thank God that door closed and a better one opened.' },
      { h: 'Rejection is part of every success story', p: 'Ask any happily married man and he will tell you he was rejected before. Rejection teaches you what you truly want, thickens your skin, and makes you value acceptance when it comes. The man never rejected is the one who never took a respectful risk — and respectful risk is what brings results.' },
    ],
  },
  marriage: {
    ar: [
      { h: 'لما النية تبقى جواز', p: 'في مرحلة من عمرك الإعجاب بيبقى له عنوان واحد: الجواز. هنا الكلام بيتغير — مبقاش موضوع مشاعر بس، بقى موضوع مسؤولية وعيلتين وبيوت. الخبر الحلو إن مجتمعنا عنده طريق واضح ومجرّب للموضوع ده: التعارف الرسمي، الخطوبة، الجواز. امشي فيه صح وهتلاقي كل الأبواب بتتفتح.' },
      { h: 'جهز نفسك قبل ما تطرق الباب', p: 'قبل ما تتقدم لحد، اسأل نفسك: أنا جاهز فعلا؟ شغل أو مصدر دخل، سكن ولو بسيط، ونضج يخليك تستحمل مسؤولية بيت. مش شرط تبقى غني — شرط تبقى جاد وعندك خطة. البنت وأهلها بيحترموا الشاب الطموح اللي شغال على نفسه أكتر من الغني اللي عايش على أهله.' },
      { h: 'التعارف الرسمي (الصالون)', p: 'أول لقاء في بيت أهلها بيخوف الكل، بس سريته بسيطة: كون أنت، بلباقة. لبس محتشم ونضيف، كلام قليل ومحترم، ابتسامة هادية، واحترم الكبير. متستعرضش ومتدعيش — الأهل بيفحصوا أخلاقك مش إنجازاتك. وجاوب بصراحة عن شغلك وخططك؛ الصدق بيبني ثقة أسرع من أي تجميل.' },
      { h: 'اسأل عن اللي يهمك بأدب', p: 'فترة التعارف مش شكلية — دي فرصتك تعرف الشخصية الحقيقية: دينها وأخلاقها، طموحها، علاقتها بأهلها، نظرتها للبيت والشغل. اسأل بأدب في إطار اللقاءات الرسمية، وخلي أسئلتك عن القيم مش عن التفاصيل التافهة. وفتكر: هي كمان بتحاسبك بنفس الميزان.' },
      { h: 'فترة الخطوبة: مدرسة الصبر', p: 'الخطوبة مش جواز مصغر — دي فترة تعارف أعمق تحت عين الأهل وفي إطار محترم. استغلها في بناء الثقة والتفاهم: اتفقوا على المصاريف، البيت، الشغل، والعلاقة بين العيلتين. وخليك صبور مع الخلافات — إزاي بتختلفوا وبتحلوا الخلاف أهم من إنكم متتفقوا في كل حاجة.' },
      { h: 'متعجلش ومتأخرش', p: 'في ناس بتتسرع في الخطوبة قبل ما تعرف الشخص، وفي ناس بتعلق العلاقة سنين من غير قرار. الاتنين غلط. امشي بالتدريج بس بجدية: لما تلاقي الدين والخلق والتفاهم، خد قرارك وتوكل على الله. التسويف بيقتل أحسن العلاقات.' },
    ],
    en: [
      { h: 'When the goal is marriage', p: 'At some point, attraction gets one address: marriage. The conversation changes — it is no longer just feelings, it is responsibility, two families and a home. The good news is our society has a clear, proven path: formal introduction, engagement, then marriage. Walk it right and doors open.' },
      { h: 'Prepare yourself before knocking', p: 'Before proposing to anyone, ask yourself: am I truly ready? A job or income source, housing however modest, and the maturity to carry a home\'s responsibility. You need not be rich — you need to be serious with a plan. A girl and her family respect an ambitious young man building himself far more than a rich one living off his parents.' },
      { h: 'The formal family meeting', p: 'The first meeting at her family\'s home scares everyone, but its secret is simple: be yourself, politely. Modest clean clothes, few respectful words, a calm smile, and honor the elders. Do not show off or pretend — the family examines your character, not your achievements. Answer honestly about your work and plans; honesty builds trust faster than any polish.' },
      { h: 'Ask about what matters, politely', p: 'The acquaintance period is not a formality — it is your chance to know the real person: her faith and character, her ambition, her relationship with her family, her view of home and work. Ask politely within formal meetings, and keep your questions about values, not trivial details. Remember: she is weighing you on the same scale.' },
      { h: 'Engagement: a school of patience', p: 'Engagement is not a mini-marriage — it is deeper acquaintance under the family\'s eye and within respectful limits. Use it to build trust and understanding: agree on expenses, housing, work and the relationship between both families. Be patient with disagreements — how you differ and resolve matters more than agreeing on everything.' },
      { h: 'Neither rush nor stall', p: 'Some rush into engagement before knowing the person; others hang a relationship for years without a decision. Both are wrong. Move gradually but seriously: when you find faith, character and understanding, decide and trust God. Stalling kills the best relationships.' },
    ],
  },
  mistakes: {
    ar: [
      { h: 'المطاردة مش حب', p: 'أشهر غلطة: الاعتقاد إن الإلحاح دليل اهتمام. 20 رسالة ورا بعض، سؤال كل ساعة "فينك؟ مع مين؟"، ومحاولات لقاء متكررة بعد اعتذار — ده مش حب، ده خنق. الاهتمام الحقيقي له إيقاع محترم، والإلحاح بيقلب أجمل مشاعر لضيق ونفور.' },
      { h: 'الغيرة اللي بتتحول لتحكم', p: 'غيرة خفيفة طبيعية، بس لما الغيرة تبقى مراجعة لتليفونها، ومنعها من صحابها، وحساب على كل لايك — دي مش غيرة، دي سجن. الثقة عماد أي علاقة، واللي مش قادر يثق الأحسن له يعالج نفسه الأول قبل ما يدخل علاقة.' },
      { h: 'الكلام المعسول الفاضي', p: 'وعود كبيرة من تالت يوم، كلام عن المستقبل من غير أي أساس، ومجاملات مبالغ فيها — الكلام ده رخيص وبينكشف بسرعة. البنات بتحفظ الأفعال مش الأقوال. كلمة واحدة صادقة من شخص عملي أقوى من قصيدة من شخص كله كلام.' },
      { h: 'الاستعجال في كل حاجة', p: 'الاستعجال في طلب صور، في اللقاءات المنفردة، في الوصول لمراحل العلاقة مش وقتها — كل ده بيبعت رسالة واحدة: "أنا مش محترمك". كل مرحلة ليها وقتها، والصبر عليها هو اللي بيثبت إن نواياك محترمة.' },
      { h: 'التقليد الأعمى للسوشيال ميديا', p: 'العلاقات على السوشيال ميديا مصورة ومفلترة وممثلة. متقارنش علاقتك بفيديوهات التيك توك، ومتطلبش منها نفس الكلام والتصرفات. ابنوا علاقتكم على مقاسكم وظروفكم — العلاقة الحقيقية بتعيش بره الكاميرا.' },
      { h: 'نسيان نفسك في العلاقة', p: 'آخر غلطة وأخطرها: إنك تذوب في العلاقة لحد ما تفقد نفسك — صحابك، هواياتك، أهدافك، وعيلتك. العلاقة الصحية بتضيف لحياتك مش بتبدلها. الشخص اللي عنده حياة غنية هو اللي بيبقى شريك أحسن، مش اللي شغال 24 ساعة "مركز إرسال واستقبال" لحد تاني.' },
    ],
    en: [
      { h: 'Chasing is not love', p: 'The most common mistake: believing insistence proves interest. Twenty messages in a row, asking "where are you? with whom?" every hour, repeated meetup attempts after a polite decline — that is not love, that is suffocation. Real care has a respectful rhythm, and pressure turns the sweetest feelings into discomfort.' },
      { h: 'Jealousy that turns into control', p: 'Light jealousy is natural, but when it becomes checking her phone, cutting her off from friends, and auditing every like — that is not jealousy, it is a cage. Trust is the backbone of any relationship; whoever cannot trust should work on himself first before entering one.' },
      { h: 'Empty sweet talk', p: 'Huge promises by the third day, talk of the future with no foundation, overdone flattery — that kind of talk is cheap and shows quickly. Girls remember actions, not words. One honest word from a man of deeds outweighs a poem from a man of talk.' },
      { h: 'Rushing everything', p: 'Rushing to ask for photos, for private meetups, for stages of the relationship before their time — all of it sends one message: "I do not respect you." Every stage has its time, and patience is what proves your intentions are honorable.' },
      { h: 'Blindly copying social media', p: 'Relationships on social media are filmed, filtered and staged. Do not compare your relationship to TikTok videos, and do not demand the same words and gestures from her. Build your relationship to your own measure and circumstances — a real relationship lives outside the camera.' },
      { h: 'Losing yourself in the relationship', p: 'The last and most dangerous mistake: dissolving into the relationship until you lose yourself — your friends, hobbies, goals and family. A healthy relationship adds to your life, it does not replace it. The person with a rich life makes the better partner, not the one working full-time as someone else\'s message center.' },
    ],
  },
};

export const articles: Article[] = articleMeta.map((m) => ({
  ...m,
  ar: bodies[m.slug].ar,
  en: bodies[m.slug].en,
}));
