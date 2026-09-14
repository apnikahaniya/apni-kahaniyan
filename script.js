const stories = [
  {
    title: "माँ की आखिरी चिट्ठी",
    author: "अपनी कहानियाँ",
    cat: "भावनात्मक",
    text: "एक छोटे से घर में रहने वाला बेटा शहर चला गया। वर्षों बाद उसे माँ की एक पुरानी चिट्ठी मिली, जिसमें लिखा था—घर लौट आना।"
  },
  {
    title: "एक छोटा सा सपना",
    author: "राहुल",
    cat: "प्रेरणादायक",
    text: "गाँव का एक लड़का रोज स्कूल के बाद पेड़ के नीचे बैठकर पढ़ता था। उसके पास साधन कम थे, लेकिन सपने बहुत बड़े थे।"
  }
];

function render(list = stories) {
  const grid = document.getElementById("storyGrid");
  if (!grid) return;

  grid.innerHTML = list.map(s => `
    <article class="card">
      <div class="meta">${s.cat} · ${s.author}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <span class="read" onclick="alert(${JSON.stringify(s.text)})">
        पूरी कहानी पढ़ें →
      </span>
    </article>
  `).join("");
}

function filterStories() {
  const q = document.getElementById("search").value.toLowerCase();

  render(stories.filter(s =>
    (s.title + s.author + s.cat + s.text)
      .toLowerCase()
      .includes(q)
  ));
}

function addStory() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const cat = document.getElementById("category").value;
  const content = document.getElementById("content").value.trim();

  if (!title || !author || !content) {
    document.getElementById("msg").textContent =
      "कृपया सभी जानकारी भरें।";
    return;
  }

  stories.unshift({
    title: title,
    author: author,
    cat: cat,
    text: content
  });

  render();

  document.getElementById("msg").textContent =
    "आपकी कहानी जोड़ दी गई है ❤️";

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("content").value = "";
}



render();
