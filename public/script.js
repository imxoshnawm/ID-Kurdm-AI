 /* ==============================
       1) پێناسەکردنی هەموو دەربارەیەکان
       ============================== */
    
    // زمانی بنەڕەتی: سۆرانی (ckb)
    let currentLang = "ckb";
    
    // هەموو دەقەکان بۆ دوو زمان: ckb و en
    const translations = {
      "globalLangToggle": { 
        "ckb": "English", 
        "en": "کوردی" 
      },
      "navTranslator": { 
        "ckb": "وەرگێڕ", 
        "en": "Translator" 
      },
      "navChatbot": { 
        "ckb": "چات بۆت", 
        "en": "Chat Bot" 
      },
      "navHistory": { 
        "ckb": "🔍 کوردستان و مێژوو", 
        "en": "Kurdistan & History" 
      },
      "navLogoText": { 
        "ckb": "ID Kurd AI", 
        "en": "ID Kurd AI" 
      },
      "pageTitleTranslator": { 
        "ckb": "وەرگێڕی کوردی - ئینگلیزی", 
        "en": "Kurdish-English Translator" 
      },
      "pageTitleChatbot": { 
        "ckb": "چات بۆتی ID Kurd AI", 
        "en": "ID Kurd AI Chat Bot" 
      },
      "pageTitleHistory": { 
        "ckb": "🔍 کوردستان و مێژوو", 
        "en": "Kurdistan & History" 
      },
      "translatorLabelSource": { 
        "ckb": "دەق:", 
        "en": "Text:" 
      },
      "translatorLabelTarget": { 
        "ckb": "وەرگێڕان:", 
        "en": "Translation:" 
      },
      "translateBtn": { 
        "ckb": "وەرگێڕان", 
        "en": "Translate" 
      },
      "searchHistory": { 
        "ckb": "گەڕان لە مێژوودا...", 
        "en": "Search history..." 
      },
      // History Section 1
      "historySection1Heading": { 
        "ckb": "کوردستان - زەویەک پڕ لە مێژوو", 
        "en": "Kurdistan – A Land Rich in History" 
      },
      "historySection1Content": { 
        "ckb": "کوردستان ناوچەیەکی جوگرافی و کولتووری و ئیتنیکییە کە بە درێژایی چەندین سەدە لانکەی شارستانییەتی کوردی بووە. ئەم ناوچەیە لە باکووری ڕۆژهەڵاتی ناوەڕاستدایە و بە گشتی بەشێک لە خاکی چوار وڵات دەگرێتەوە: تورکیا، عێراق، ئێران و سوریا. کورد، کە نزیکەی ٤٥ ملیۆن کەس دەبن، یەکێک لە گەورەترین نەتەوەکانن کە هێشتا دەوڵەتی سەربەخۆی خۆیان نییە.",
        "en": "Kurdistan is a geographical, cultural, and ethnic region with centuries of Kurdish heritage. It spans parts of four countries—Turkey, Iraq, Iran, and Syria. With around 45 million people, the Kurds are one of the largest ethnic groups without a sovereign state."
      },
      // History Section 2
      "historySection2Heading": { 
        "ckb": "ڕیشەکانی مێژوویی", 
        "en": "Historical Roots" 
      },
      "historySection2Content": { 
        "ckb": "کوردەکان ڕیشەیەکی مێژوویی درێژیان هەیە لە ناوچەکەدا و بۆ چەندین هەزار ساڵ دەگەڕێتەوە. کوردەکان بە گشتی وەک نەوەی میدییەکان دەناسرێن، کە ئیمپراتۆرییەتێکیان لە سەدەی حەوتەمی پێش زاینەوە داڕشت. بە درێژایی سەدەکان، کوردەکان ژێر کاریگەری چەندین شارستانییەتی گەورە بوون، وەک ئیمپراتۆریەتی ئەخمینی، ڕۆمانی، و دواتر عوسمانی.",
        "en": "The Kurds have deep historical roots in the region dating back thousands of years. Often associated with the Medes, their influence extended through major empires such as the Achaemenids, Romans, and later the Ottomans."
      },
      // History Section 3
      "historySection3Heading": { 
        "ckb": "کۆماری کوردستان", 
        "en": "Republic of Kurdistan" 
      },
      "historySection3Content": { 
        "ckb": "لە ساڵی ١٩٤٦، لە شاری مەهاباد، یەکەم دەوڵەتی مۆدێرنی کوردی دامەزرا بە ناوی کۆماری کوردستان. لەژێر سەرکردایەتی پێشەوا قازی محەمەد، ئەم کۆمارە نموونەیەکی گرنگ بوو بۆ خەباتی سەربەخۆیی، بەڵام تەنها ١١ مانگ خایاند.",
        "en": "In 1946 in Mahabad, the first modern Kurdish state, the Republic of Kurdistan, was established under the leadership of Pêşewa Qazi Muhammad. Though short-lived at 11 months, it remains a symbol of the Kurdish struggle for autonomy."
      },
      // History Section 4
      "historySection4Heading": { 
        "ckb": "کوردستانی عێراق و خودموختاری", 
        "en": "Iraqi Kurdistan & Self-Rule" 
      },
      "historySection4Content": { 
        "ckb": "لە دوای ڕووخانی ڕژێمی سەدام حسێن لە ساڵی ٢٠٠٣، هەرێمی کوردستانی عێراق توانی ببێتە ناوچەیەکی خودموختار. ئەمڕۆ، هەرێم خاوەنی حکومەت و پەرلەمانە، و نموونەیەکی گرنگ بۆ کوردانی دیکەی ناوچەکەیە.",
        "en": "Following the fall of Saddam Hussein's regime in 2003, Iraqi Kurdistan emerged as a self-governing region with its own parliament and government, serving as an important example for Kurds elsewhere."
      },
      // History Section 5
      "historySection5Heading": { 
        "ckb": "کەلتووری دەوڵەمەندی کوردی", 
        "en": "Rich Kurdish Culture" 
      },
      "historySection5Content": { 
        "ckb": "کەلتووری کوردی دەوڵەمەند و فرەچەشنە؛ موزیک، هەڵپەڕکێ، شیعر، چیرۆک و هونەری دەستی کوردی بەشێک لە گرنگترین پارچەکانە لە ناسنامەی کوردی. ناوبانگ و جوانی سروشتی کوردستان هەروەها بە چیا، دۆڵ و ڕووبارەکان تێدایە.",
        "en": "Kurdish culture is rich and diverse – from music, dance, poetry, and storytelling to traditional crafts. Its natural beauty, majestic mountains, fertile valleys, and flowing rivers further enhance its unique identity."
      },
      // History Section 6
      "historySection6Heading": { 
        "ckb": "کورد لە سەدەی بیست و یەکەمدا", 
        "en": "Kurds in the 21st Century" 
      },
      "historySection6Content": { 
        "ckb": "ئەمڕۆ، کورد بەردەوامن لە خەبات بۆ ناسینی ماف و ناسنامەی خۆیان. پێشکەوتنی تەکنەلۆجیا و میدیای کۆمەڵایەتی یارمەتی داوە بۆ گەیاندنی کێشەیەکانی نێودەوڵەتی.",
        "en": "Today, Kurds continue their struggle for rights and recognition. Advances in technology and social media have helped bring Kurdish issues to a global audience."
      },
      // History Section 7
      "historySection7Heading": { 
        "ckb": "زمانی کوردی", 
        "en": "Kurdish Language Revival" 
      },
      "historySection7Content": { 
        "ckb": "زمانی کوردی کە بۆ ماوەیەکی درێژ قەدەغە کرا بوو، ئێستا دوباره پەخش دەبێت لە فۆرمەکانی نوێی زانیاری؛ پرۆگرامە تەلەفزیۆنی، ڕادیۆ، ڕۆژنامە و کتێب بە زمانی کوردی بڵاو دەکرێنەوە.",
        "en": "After decades of suppression, the Kurdish language is experiencing a revival through modern platforms – with television programs, radio broadcasts, newspapers, and books now published in Kurdish."
      },
    };
    
    /* ==============================
       2) فانکشنی گۆڕینی دەقەکان بۆ دوو زمان (ckb/en)
       ============================== */
    function updateText() {
      for (const id in translations) {
        const elem = document.getElementById(id);
        if (elem) {
          // ئەگەر input/textarea بێت، placeholder گۆڕە
          if (elem.tagName.toLowerCase() === "input" || elem.tagName.toLowerCase() === "textarea") {
            elem.placeholder = translations[id][currentLang];
          } else {
            // بەسەری textContent/innerText
            elem.innerText = translations[id][currentLang];
          }
        }
      }
    }
    
    /* ==============================
       3) فانکشنی گۆڕینی زمان (Global Toggle)
       ============================== */
    function toggleGlobalLanguage() {
      currentLang = currentLang === "ckb" ? "en" : "ckb";
      document.documentElement.lang = currentLang;
      updateText();
    }
    
    /* ==============================
       4) کۆدی سەرەکی DOMContentLoaded
       ============================== */
    document.addEventListener('DOMContentLoaded', function() {
      // هاوپێچکردنی Element ـەکان
      const menuToggle = document.getElementById('menuToggle');
      const navItems = document.getElementById('navItems');
      const translateBtn = document.getElementById('translateBtn');
      const sourceText = document.getElementById('sourceText');
      const translatedText = document.getElementById('translatedText');
      const kurdishBtn = document.getElementById('kurdishBtn');
      const englishBtn = document.getElementById('englishBtn');
      const switchLanguage = document.getElementById('switchLanguage');
      const chatInput = document.getElementById('chatInput');
      const sendBtn = document.getElementById('sendBtn');
      const chatMessages = document.getElementById('chatMessages');
    
      // گۆڕینی مێنو (مەبەستی Responsiveness)
      menuToggle.addEventListener('click', function() {
        navItems.classList.toggle('active');
      });
    
      // گۆڕینی پەیج
      function showPage(pageId) {
        document.querySelectorAll('.page-content').forEach(page => {
          page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
        document.querySelectorAll('.nav-items a').forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector(`.nav-items a[onclick="showPage('${pageId}')"]`).classList.add('active');
        navItems.classList.remove('active');
      }
      window.showPage = showPage; // بۆ بەکاربردن لە HTML دا onclick="showPage('...')"
    
      // بەربەستکردنی دوگمەکانی "کوردی" و "ئینگلیزی" لە Translator
      kurdishBtn.addEventListener('click', function() {
        kurdishBtn.classList.add('active');
        englishBtn.classList.remove('active');
        document.getElementById('translatorLabelSource').innerText = translations["translatorLabelSource"]["ckb"];
        document.getElementById('translatorLabelTarget').innerText = translations["translatorLabelTarget"]["ckb"];
      });
      englishBtn.addEventListener('click', function() {
        englishBtn.classList.add('active');
        kurdishBtn.classList.remove('active');
        document.getElementById('translatorLabelSource').innerText = translations["translatorLabelSource"]["en"];
        document.getElementById('translatorLabelTarget').innerText = translations["translatorLabelTarget"]["en"];
      });
    
      // فانکشنی گۆڕینی ناوەڕۆک (⇄)
      switchLanguage.addEventListener('click', function() {
        const temp = sourceText.value;
        sourceText.value = translatedText.value;
        translatedText.value = temp;
        if (kurdishBtn.classList.contains('active')) {
          kurdishBtn.classList.remove('active');
          englishBtn.classList.add('active');
          document.getElementById('translatorLabelSource').innerText = translations["translatorLabelSource"]["en"];
          document.getElementById('translatorLabelTarget').innerText = translations["translatorLabelTarget"]["en"];
        } else {
          englishBtn.classList.remove('active');
          kurdishBtn.classList.add('active');
          document.getElementById('translatorLabelSource').innerText = translations["translatorLabelSource"]["ckb"];
          document.getElementById('translatorLabelTarget').innerText = translations["translatorLabelTarget"]["ckb"];
        }
      });
    
      /* ==============================
         5) کۆدی وەرگێڕان (Translator)
         ============================== */
    
      // ئەوە بۆ شکاندنی دەق بە چانکی بچووکتر بۆ وەرگێڕانی درێژ
      const maxChunkLength = 5000;
    
      function splitText(text) {
        const chunks = [];
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        
        let currentChunk = "";
        for (const sentence of sentences) {
          if (currentChunk.length + sentence.length <= maxChunkLength) {
            currentChunk += sentence;
          } else {
            if (currentChunk) chunks.push(currentChunk);
            currentChunk = sentence;
          }
        }
        if (currentChunk) chunks.push(currentChunk);
        
        if (chunks.length === 0) {
          for (let i = 0; i < text.length; i += maxChunkLength) {
            chunks.push(text.substr(i, maxChunkLength));
          }
        }
        return chunks;
      }
    
      // فانکشنی وەرگێڕانی درێژ، بەFallbackی Google/LibreTranslate/MyMemory
      async function translateLongText(text, targetLang) {
        if (!text.trim()) return "";
        
        const chunks = splitText(text);
        let translatedChunks = [];
        
        for (const chunk of chunks) {
          try {
            // Try Google Translate first
            const translated = await translateWithGoogleAPI(chunk, targetLang);
            translatedChunks.push(translated);
          } catch (error) {
            try {
              // Fallback to LibreTranslate
              const translated = await translateWithLibreTranslate(chunk, targetLang);
              translatedChunks.push(translated);
            } catch (fallbackError) {
              // Final fallback to MyMemory
              const translated = await translateMyMemory(chunk, targetLang);
              translatedChunks.push(translated || chunk);
            }
          }
        }
        return translatedChunks.join(" ");
      }
    
      // Google Translate API
      async function translateWithGoogleAPI(text, targetLang) {
        // چێناسه‌کانی Google: ckb بۆ کوردی سۆرانی
        const googleSourceLang = targetLang === 'en' ? 'ckb' : 'en';
        const googleTargetLang = targetLang === 'en' ? 'en' : 'ckb';
        
        const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_API_KEY`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: googleSourceLang,
            target: googleTargetLang,
            format: 'text'
          })
        });
        
        if (!response.ok) throw new Error('Google Translate API error');
        
        const data = await response.json();
        return data.data.translations[0].translatedText;
      }
    
      // LibreTranslate
      async function translateWithLibreTranslate(text, targetLang) {
        const libreSourceLang = targetLang === 'en' ? 'ckb' : 'en';
        const libreTargetLang = targetLang === 'en' ? 'en' : 'ckb';
        
        const apiUrl = 'https://libretranslate.com/translate';
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: libreSourceLang,
            target: libreTargetLang
          })
        });
        
        if (!response.ok) throw new Error('LibreTranslate API error');
        
        const data = await response.json();
        return data.translatedText;
      }
    
      // MyMemory
      async function translateMyMemory(text, targetLang) {
        const sourceLang = targetLang === 'en' ? 'ckb' : 'en';
        const email = `test${Math.floor(Math.random() * 1000)}@example.com`;
        
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}&de=${email}`
        );
        
        if (!response.ok) throw new Error('MyMemory API error');
        
        const data = await response.json();
        return data.responseData?.translatedText;
      }
    
      // گوڕینی بنەڕەتی currentLang بۆ ckb (سۆرانی)
      // (لێرەش چاکەکە ئەوەیە translations دا ckb هەیە)
      currentLang = "ckb";
    
      // دوگمەی وەرگێڕان
      translateBtn.addEventListener('click', async function() {
        if (sourceText.value.trim() === '') {
          translatedText.value = '';
          return;
        }
        const loadingText = currentLang === "ckb" ? "گرتنەخۆی وەرگێڕان..." : "Translating...";
        translatedText.value = loadingText;
        
        try {
          // دڵنیابە لەوەی ئێمە کێ وەرگێڕ بکەین
          // ئەگەر دوگمەی کوردی کار بکات، targetLang = 'en' otherwise 'ckb'
          const targetLang = kurdishBtn.classList.contains('active') ? 'en' : 'ckb';
          
          const translated = await translateLongText(sourceText.value, targetLang);
          
          const cleanTranslation = translated
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
          
          translatedText.value = cleanTranslation || (currentLang === "ckb" ? "❌ وەرگێڕان نەدۆزرایەوە" : "❌ Translation not found");
        } catch (error) {
          console.error("Translation error:", error);
          translatedText.value = currentLang === "ckb" 
            ? "❌ هەڵە ڕوویدا لە وەرگێڕان" 
            : "❌ Translation error occurred";
        }
      });
    
      // هاوپێچکردنی مێژوو
      const translationHistory = [];
      const maxHistoryItems = 10;
    
      function saveTranslationToHistory(sourceText, translatedText, sourceLang, targetLang) {
        translationHistory.unshift({
          source: sourceText,
          translation: translatedText,
          sourceLang: sourceLang,
          targetLang: targetLang,
          timestamp: new Date().toISOString()
        });
        if (translationHistory.length > maxHistoryItems) {
          translationHistory.pop();
        }
        localStorage.setItem('translationHistory', JSON.stringify(translationHistory));
      }
    
      // بارکردنی مێژووی وەرگێڕان
      const savedHistory = localStorage.getItem('translationHistory');
      if (savedHistory) {
        translationHistory.push(...JSON.parse(savedHistory));
      }
      
      if (currentLang === "ku") currentLang = "ckb";
    
      // فەسارکردنی زمانی کوردی (ئایا سۆرانی؟)
      function isTextSorani(text) {
        const soraniChars = /[\u0626\u0686\u0695\u0627\u06C6\u0648\u06CE\u06D5]/;
        return soraniChars.test(text);
      }
    
      function isTextEnglish(text) {
        const englishChars = /^[A-Za-z\s.,?!0-9]+$/;
        return englishChars.test(text);
      }
    
      function autoDetectLanguage(text) {
        if (isTextSorani(text)) {
          kurdishBtn.classList.add('active');
          englishBtn.classList.remove('active');
          return 'ckb';
        } else if (isTextEnglish(text)) {
          englishBtn.classList.add('active');
          kurdishBtn.classList.remove('active');
          return 'en';
        }
        return kurdishBtn.classList.contains('active') ? 'ckb' : 'en';
      }
    
      // کاتێک دەقی زیاتر لە ١٠ کەرێکتەر داخڵ بکەیت، خودکار لەسەر زمانی دەگەڕێتەوە
      sourceText.addEventListener('input', function() {
        if (sourceText.value.length > 10) {
          autoDetectLanguage(sourceText.value);
        }
      });









/* ==============================
   چات بۆت (DeepSeek AI Integration)
   ============================== */

   const DEEPSEEK_API_KEY = 'sk-946bdf141b754f768454d3685b71a979';

   async function sendChatMessage() {
     const chatInput = document.getElementById('chatInput');
     const chatMessages = document.getElementById('chatMessages');
     const userMessage = chatInput.value.trim();
   
     if (!userMessage) return;
   
     const userMessageElement = document.createElement('div');
     userMessageElement.className = 'message user-message';
     userMessageElement.textContent = userMessage;
     chatMessages.appendChild(userMessageElement);
   
     const typingIndicator = document.createElement('div');
     typingIndicator.className = 'message bot-message typing';
     typingIndicator.textContent = '...';
     chatMessages.appendChild(typingIndicator);
   
     chatMessages.scrollTop = chatMessages.scrollHeight;
   
     try {
       const response = await fetchDeepSeekResponse(userMessage);
       
       chatMessages.removeChild(typingIndicator);
   
       const botMessageElement = document.createElement('div');
       botMessageElement.className = 'message bot-message';
       botMessageElement.textContent = response;
       chatMessages.appendChild(botMessageElement);
   
       chatMessages.scrollTop = chatMessages.scrollHeight;
     } catch (error) {
       chatMessages.removeChild(typingIndicator);
   
       const errorMessageElement = document.createElement('div');
       errorMessageElement.className = 'message error-message';
       errorMessageElement.textContent = 'هەڵەیەک ڕوویدا. تکایە دووبارە هەوڵ بدەوە.';
       chatMessages.appendChild(errorMessageElement);
     }
   
     chatInput.value = '';
   }
   
   async function fetchDeepSeekResponse(message) {
     const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         model: "deepseek-chat",
         messages: [
           { role: "system", content: "تۆ یاریدەدەری زیرەکی دەستکرد بۆ پڕۆژەی ID Kurd AI یت. پەیامەکانت کورت و ڕوون بن و بە زمانی کوردی (سۆرانی) وەڵام بدەوە." },
           { role: "user", content: message }
         ],
         temperature: 0.7
       })
     });
   
     if (!response.ok) {
       throw new Error('هەڵە لە وەرگرتنی وەڵام');
     }
   
     const data = await response.json();
     return data.choices[0].message.content;
   }
   
   document.getElementById('sendBtn').addEventListener('click', sendChatMessage);
   
   document.getElementById('chatInput').addEventListener('keypress', function(event) {
     if (event.key === 'Enter') {
       sendChatMessage();
     }
   });


























      /* ==============================
         7) دروستکردنی پارتیکل و Data Streams (Decoration)
         ============================== */
      function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const count = 30;
        for (let i = 0; i < count; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.bottom = Math.random() * 100 + '%';
          particle.style.width = (Math.random() * 5 + 2) + 'px';
          particle.style.height = (Math.random() * 5 + 2) + 'px';
          particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
          particle.style.animationDelay = (Math.random() * 5) + 's';
          particlesContainer.appendChild(particle);
        }
      }
      function createDataStreams() {
        const streamsContainer = document.getElementById('data-streams');
        const count = 20;
        for (let i = 0; i < count; i++) {
          const stream = document.createElement('div');
          stream.className = 'data-stream';
          stream.style.left = Math.random() * 100 + '%';
          stream.style.top = Math.random() * 100 + '%';
          stream.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
          stream.style.animationDuration = (Math.random() * 3 + 2) + 's';
          stream.style.animationDelay = (Math.random() * 5) + 's';
          streamsContainer.appendChild(stream);
        }
      }
    
      createParticles();
      createDataStreams();
    
      // لە کۆتایی، جێبەجێکردنی updateText بۆ نوێکردنەوەی دەقەکان
      updateText();
    });