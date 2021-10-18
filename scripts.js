const displayController = (id, type = "none") =>
  (document.getElementById(id).style.display = type);

const dispalyCases = {
  block: "block",
  none: "none",
};

let idsList = ["berexiaDetail", "uboDetail", "reactDetail", "springDetail"];

const showStuff = (id) => {
  const selectedId = idsList.find((element) => element === id);
  const selectedDisplay = document.getElementById(selectedId).style.display;
  return selectedDisplay === dispalyCases.none
    ? idsList.map((id) => {
        if (id === selectedId) {
          return displayController(id, dispalyCases.block);
        }
        return displayController(id, dispalyCases.none);
      })
    : idsList.map((id) => {
        if (id === selectedId) {
          return displayController(id, dispalyCases.none);
        }
      });
};

let done = false;
let pic = new Array();
pic[0] = new Image();
pic[0].src = "stare2.jpeg";
pic[1] = new Image();
pic[1].src = "stare1.jpeg";
//let bareme = new Array("20% ", "40% ", "60%", "80%", "100%");

const rate = (level, id) => {
  if (done) {
    return false;
  }
  for (i = 1; i < 6; i++) {
    document.getElementById(`${id}` + i).src =
      level < i ? pic[0].src : pic[1].src;
  }
};

const zero = () => {
  for (i = 1; i < 6; i++) {
    document.getElementById(`${id}` + i).src = pic[0].src;
    done = false;
  }
};
