const stories = [
  {
    title: "माँ की आखिरी चिट्ठी",
    author: "अपनी कहानियाँ",
    cat: "भावनात्मक",
    text: "बेटा, जब भी समय मिले घर लौट आना। माँ की यह चिट्ठी पढ़कर बेटा भावुक हो गया।"
  },
  {
    title: "एक छोटा सा सपना",
    author: "राहुल",
    cat: "प्रेरणादायक",
    text: "गाँव का एक लड़का पेड़ के नीचे पढ़ाई करता था। मेहनत करके उसने अपने गाँव का पहला बड़ा अधिकारी बनने का सपना पूरा किया।"
  },
  {
    title: "पिता की पुरानी साइकिल",
    author: "अपनी कहानियाँ",
    cat: "परिवार",
    text: "पिता की पुरानी साइकिल बेटे के लिए सिर्फ एक साइकिल नहीं थी, बल्कि पिता की मेहनत और प्यार की निशानी थी।"
  },
  {
    title: "बारिश की वह शाम",
    author: "अपनी कहानियाँ",
    cat: "प्रेम",
    text: "बारिश की एक शाम दो पुराने दोस्त अचानक मिले और उन्हें अपने पुराने दिनों की याद आ गई।"
  },
  {
    title: "ईमानदारी का इनाम",
    author: "अपनी कहानियाँ",
    cat: "प्रेरणादायक",
    text: "एक गरीब आदमी को रास्ते में पैसे से भरा बैग मिला। उसने उसे उसके मालिक तक पहुँचा दिया।"
  },
  {
    title: "दादी की कहानी",
    author: "अपनी कहानियाँ",
    cat: "परिवार",
    text: "हर रात दादी अपने पोते को एक नई कहानी सुनाती थीं। उन कहानियों में जिंदगी की बड़ी सीख छिपी होती थी।"
  },
  {
    title: "हार मत मानो",
    author: "अपनी कहानियाँ",
    cat: "प्रेरणादायक",
    text: "कई बार असफल होने के बाद भी उसने मेहनत जारी रखी और आखिरकार अपने लक्ष्य को हासिल कर लिया।"
  },
  {
    title: "खाली जेब वाला आदमी",
    author: "अपनी कहानियाँ",
    cat: "भावनात्मक",
    text: "उसकी जेब खाली थी लेकिन दिल बहुत बड़ा था। उसने अपनी आखिरी रोटी भी एक भूखे बच्चे को दे दी।"
  },
  {
    title: "पेड़ की छाँव",
    author: "अपनी कहानियाँ",
    cat: "जीवन",
    text: "पुराने पेड़ की छाँव में बैठकर एक बूढ़ा आदमी अपनी जिंदगी के पुराने दिनों को याद करता था।"
  },
  {
    title: "आखिरी मौका",
    author: "अपनी कहानियाँ",
    cat: "भावनात्मक",
    text: "उसे लगा कि जिंदगी में अब कुछ नहीं बचा, लेकिन एक छोटे से मौके ने उसकी पूरी जिंदगी बदल दी।"
  },
  {
    title: "छोटी सी मदद",
    author: "अपनी कहानियाँ",
    cat: "मानवता",
    text: "एक छोटी सी मदद ने एक जरूरतमंद इंसान की जिंदगी में बड़ी खुशी ला दी।"
  },
  {
    title: "चाय की दुकान",
    author: "अपनी कहानियाँ",
    cat: "जीवन",
    text: "गाँव की छोटी सी चाय की दुकान पर रोज कई लोग मिलते थे और अपनी जिंदगी की बातें करते थे।"
  },
  {
    title: "सच्चा दोस्त",
    author: "अपनी कहानियाँ",
    cat: "दोस्ती",
    text: "मुश्किल समय में जो दोस्त साथ खड़ा रहे, वही सच्चा दोस्त कहलाता है।"
  },
  {
    title: "किसान का विश्वास",
    author: "अपनी कहानियाँ",
    cat: "प्रेरणादायक",
    text: "किसान ने कठिन परिस्थितियों के बावजूद मेहनत नहीं छोड़ी और अपनी फसल को बचाने के लिए दिन-रात मेहनत की।"
  },
  {
    title: "एक दीपक की रोशनी",
    author: "अपनी कहानियाँ",
    cat: "प्रेरणादायक",
    text: "अंधेरे कमरे में जलता एक छोटा दीपक उम्मीद की बड़ी रोशनी बन गया।"
  },
  {
    title: "बेटी का सपना",
    author: "अपनी कहानियाँ",
    cat: "परिवार",
    text: "पिता ने अपनी बेटी के सपने को समझा और उसे पढ़ने के लिए पूरा सहयोग दिया।"
  },
  {
    title: "पुरानी घड़ी",
    author: "अपनी कहानियाँ",
    cat: "भावनात्मक",
    text: "पुरानी घड़ी उसके पिता की आखिरी निशानी थी। उसे देखते ही बचपन की यादें ताजा हो जाती थीं।"
  },
  {
    title: "एक गिलास पानी",
    author: "अपनी कहानियाँ",
    cat: "मानवता",
    text: "गर्मी में प्यासे राहगीर को एक बच्चे ने सिर्फ एक गिलास पानी दिया, लेकिन उसके लिए वह बहुत बड़ी मदद थी।"
  },
  {
    title: "समय की कीमत",
    author: "अपनी कहानियाँ",
    cat: "जीवन",
    text: "समय कभी वापस नहीं आता। जिसने समय की कीमत समझी, उसने जिंदगी को बेहतर बना लिया।"
  },
  {
    title: "उम्मीद की किरण",
    author: "अपनी कहानियाँ",
    cat: "प्रेरणादायक",
    text: "मुश्किल समय में भी उसने उम्मीद नहीं छोड़ी। आखिरकार उसकी मेहनत रंग लाई।"
  }
];

let currentCategory = "सभी";


function render(list = stories) {
  const grid = document.getElementById("storyGrid");

  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "<p>इस Category में अभी कोई कहानी नहीं है।</p>";
    return;
  }

  grid.innerHTML = list.map((story) => {

    const index = stories.indexOf(story);

    return `
      <article class="card">

        <div class="meta">
          ${escapeHtml(story.cat)} · ${escapeHtml(story.author)}
        </div>

        <h3>${escapeHtml(story.title)}</h3>

        <p>
          ${escapeHtml(story.text.substring(0, 140))}...
        </p>

        <button class="btn" onclick="readStory(${index})">
          पूरी कहानी पढ़ें →
        </button>

      </article>
    `;

  }).join("");
}


function filterCategory(category) {

  currentCategory = category;

  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((button) => {
    button.classList.remove("active");

    if (button.textContent.includes(category) ||
        (category === "सभी" && button.textContent.includes("सभी"))) {
      button.classList.add("active");
    }
  });

  const searchBox = document.getElementById("search");

  if (searchBox) {
    searchBox.value = "";
  }

  if (category === "सभी") {
    render(stories);
  } else {
    const filtered = stories.filter(
      story => story.cat === category
    );

    render(filtered);
  }
}


function filterStories() {

  const searchBox = document.getElementById("search");

  if (!searchBox) return;

  const q = searchBox.value.toLowerCase().trim();

  let filtered = stories;

  if (currentCategory !== "सभी") {
    filtered = filtered.filter(
      story => story.cat === currentCategory
    );
  }

  if (q) {
    filtered = filtered.filter((story) => {

      return (
        story.title + " " +
        story.author + " " +
        story.cat + " " +
        story.text
      ).toLowerCase().includes(q);

    });
  }

  render(filtered);
}


function readStory(index) {

  const story = stories[index];

  if (!story) {
    alert("कहानी नहीं मिली।");
    return;
  }

  localStorage.setItem(
    "selectedStory",
    JSON.stringify(story)
  );

  window.location.href = "/apni-kahaniyan/story.html";
}


function addStory() {

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value.trim();
  const message = document.getElementById("msg");

  if (!title || !author || !content) {

    message.textContent =
      "कृपया सभी जानकारी भरें।";

    return;
  }

  stories.unshift({
    title: title,
    author: author,
    cat: category,
    text: content
  });

  currentCategory = "सभी";

  render();

  message.textContent =
    "आपकी कहानी जोड़ दी गई है ❤️";

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("content").value = "";
}


function escapeHtml(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


render();
