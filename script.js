(function () {
  const state = {
    all: window.JAVA_QUIZ || [],
    pool: [],
    index: 0,
    viewed: 0,
    fullAnswer: "",
    currentQuestion: "",
    typingTimer: null,
    candidateName: localStorage.getItem("candidateName") || ""
  };

  const els = {
    score: document.getElementById("score"),
    streak: document.getElementById("streak"),
    accuracy: document.getElementById("accuracy"),
    progressBar: document.getElementById("progressBar"),
    stage: document.getElementById("stage"),
    category: document.getElementById("category"),
    counter: document.getElementById("counter"),
    questionText: document.getElementById("questionText"),
    answerText: document.getElementById("answerText"),
    answerBubble: document.querySelector(".answer-bubble"),
    codeBlock: document.getElementById("codeBlock"),
    answerBtn: document.getElementById("answerBtn"),
    nextBtn: document.getElementById("nextBtn"),
    copyAnswerBtn: document.getElementById("copyAnswerBtn"),
    categoryFilter: document.getElementById("categoryFilter"),
    nameModal: document.getElementById("nameModal"),
    candidateNameInput: document.getElementById("candidateName"),
    startBtn: document.getElementById("startBtn"),
    candidateDisplayName: document.getElementById("candidateDisplayName")
  };

  function initializeApp() {
    if (state.candidateName) {
      els.candidateDisplayName.textContent = state.candidateName;
      els.nameModal.classList.add("hidden");
      buildCategories();
      loadPool();
    } else {
      els.nameModal.classList.remove("hidden");
      els.candidateNameInput.focus();
    }
  }

  function saveName() {
    const name = els.candidateNameInput.value.trim();
    if (name) {
      state.candidateName = name;
      localStorage.setItem("candidateName", name);
      els.candidateDisplayName.textContent = name;
      els.nameModal.classList.add("hidden");
      buildCategories();
      loadPool();
    }
  }

  els.startBtn.addEventListener("click", saveName);

  els.candidateNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveName();
  });

  function buildCategories() {
    const categories = [
      "All topics",
      ...new Set(state.all.map((item) => item.category))
    ];

    els.categoryFilter.innerHTML = categories
      .map((category) => `<option value="${category}">${category}</option>`)
      .join("");
  }

  function shuffleArray(arr) {
    const shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  function loadPool() {
    const selected = els.categoryFilter.value || "All topics";

    if (selected === "All topics") {
      state.pool = shuffleArray(state.all);
    } else {
      state.pool = state.all.filter(
        (item) => item.category === selected
      );
    }

    state.index = 0;
    state.viewed = 0;

    renderQuestion();
  }

  function currentQuestion() {
    return state.pool[state.index];
  }

  function setMood(mood) {
    els.stage.classList.remove(
      "is-asking",
      "is-answering",
      "is-thinking",
      "is-correct",
      "is-wrong"
    );

    els.stage.classList.add(`is-${mood}`);
  }

  function stopTyping() {
    if (state.typingTimer) {
      clearInterval(state.typingTimer);
      state.typingTimer = null;
    }
  }

  function renderQuestion() {
    const item = currentQuestion();

    if (!item) {
      els.category.textContent = "No topic";
      els.counter.textContent = "Question 0 of 0";
      els.questionText.textContent =
        "No questions available for this topic.";

      els.answerText.textContent =
        "Try another topic from the filter.";

      els.answerBubble.classList.remove(
        "is-hidden",
        "is-typing"
      );

      els.answerBtn.disabled = true;
      els.codeBlock.classList.add("hidden");

      updateStats();
      return;
    }

    stopTyping();

    state.viewed = Math.max(
      state.viewed,
      state.index + 1
    );

    state.currentQuestion = item.question;

    // UPDATED: Removed option text
    state.fullAnswer =
      `Q: ${item.question}\n\nA: ${item.answerText}`;

    setMood("asking");

    els.category.textContent = item.category;
    els.counter.textContent =
      `Question ${state.index + 1} of ${state.pool.length}`;

    els.questionText.textContent = item.question;
    els.answerText.textContent = "";

    els.answerBubble.classList.add("is-hidden");
    els.answerBubble.classList.remove("is-typing");

    els.answerBtn.disabled = false;
    els.answerBtn.textContent = "Answer";

    els.progressBar.style.width =
      `${((state.index + 1) / state.pool.length) * 100}%`;

    if (item.code) {
      els.codeBlock.textContent = item.code;
      els.codeBlock.classList.remove("hidden");
    } else {
      els.codeBlock.classList.add("hidden");
    }

    updateStats();
  }

  function updateStats() {
    els.score.textContent =
      state.pool.length ? state.index + 1 : 0;

    els.streak.textContent = state.pool.length;
    els.accuracy.textContent = state.viewed;
  }

  function nextQuestion() {
    if (!state.pool.length) return;

    state.index =
      (state.index + 1) % state.pool.length;

    renderQuestion();
  }

  function typeAnswer() {
    const item = currentQuestion();

    if (!item || state.typingTimer) return;

    setMood("answering");

    els.answerBubble.classList.remove("is-hidden");
    els.answerBubble.classList.add("is-typing");

    els.answerText.textContent = "";
    els.answerBtn.disabled = true;

    let cursor = 0;

    state.typingTimer = setInterval(() => {
      cursor += cursor < 80 ? 2 : 4;

      els.answerText.textContent =
        state.fullAnswer.slice(0, cursor);

      els.answerText.scrollTop =
        els.answerText.scrollHeight;

      if (cursor >= state.fullAnswer.length) {
        stopTyping();

        els.answerText.textContent =
          state.fullAnswer;

        els.answerBubble.classList.remove(
          "is-typing"
        );

        els.answerBtn.disabled = false;
        els.answerBtn.textContent = "Replay answer";
      }
    }, 18);
  }

  els.answerBtn.addEventListener(
    "click",
    typeAnswer
  );

  els.nextBtn.addEventListener(
    "click",
    nextQuestion
  );

  // UPDATED: Fixed copy functionality
  els.copyAnswerBtn.addEventListener(
    "click",
    async () => {
      if (!state.fullAnswer) return;

      await navigator.clipboard.writeText(
        state.fullAnswer
      );

      els.copyAnswerBtn.textContent = "Copied";

      setTimeout(() => {
        els.copyAnswerBtn.textContent =
          "Copy answer";
      }, 1200);
    }
  );

  els.categoryFilter.addEventListener(
    "change",
    loadPool
  );

  initializeApp();
})();