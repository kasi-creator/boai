
document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const toolbar = document.getElementById("editorToolbar");

  if (toolbar && editor) {
    toolbar.addEventListener("click", (e) => {
      if (e.target.dataset.command) {
        document.execCommand(e.target.dataset.command, false, null);
      }
    });
  }

  const addChapterBtn = document.getElementById("addChapterBtn");
  const chaptersList = document.getElementById("chaptersList");

  if (addChapterBtn && chaptersList) {
    addChapterBtn.addEventListener("click", () => {
      const chapter = document.createElement("div");
      chapter.textContent = "New Chapter";
      chaptersList.appendChild(chapter);
    });
  }
});
